"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { createClient } from "@/lib/supabase/server";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  subject: z.string().min(3),
  message: z.string().min(10),
});

export async function submitContact(_: unknown, formData: FormData) {
  const parsed = contactSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) {
    return { ok: false, message: "Please complete the form with a valid email and message." };
  }

  const supabase = await createClient();
  const { error } = await supabase.from("contact_messages").insert(parsed.data);
  if (error && !error.message.includes("placeholder")) {
    return { ok: false, message: "The message could not be saved. Please try WhatsApp or email directly." };
  }

  revalidatePath("/admin/messages");
  return { ok: true, message: "Message sent. Chinagolum will respond as soon as possible." };
}

export async function signIn(formData: FormData) {
  const email = String(formData.get("email") || "");
  const password = String(formData.get("password") || "");
  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) redirect("/admin/login?error=Invalid credentials");
  redirect("/admin");
}

export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/admin/login");
}

export async function upsertAdminRecord(table: string, formData: FormData) {
  const id = String(formData.get("id") || "");
  const payload: Record<string, unknown> = Object.fromEntries(formData);
  delete payload.id;

  for (const [key, value] of Object.entries(payload)) {
    if (value === "") payload[key] = null;
    if (key === "featured" || key === "published" || key === "is_read") payload[key] = value === "on";
    if (key === "technologies" || key === "tags") payload[key] = String(value || "").split(",").map((item) => item.trim()).filter(Boolean);
  }

  const supabase = await createClient();
  type MutableTable = {
    update: (record: Record<string, unknown>) => { eq: (column: string, value: string) => Promise<unknown> };
    insert: (record: Record<string, unknown>) => Promise<unknown>;
  };
  const mutable = supabase.from(table as "projects") as unknown as MutableTable;
  const query = id ? mutable.update(payload).eq("id", id) : mutable.insert(payload);
  await query;
  revalidatePath("/admin");
  revalidatePath(`/${table}`);
}
