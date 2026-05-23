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
  const uploadBucket = String(formData.get("_upload_bucket") || "");
  const uploadField = String(formData.get("_upload_field") || "");
  const uploadTarget = String(formData.get("_upload_target") || "");
  const galleryBucket = String(formData.get("_gallery_bucket") || "");
  const payload: Record<string, unknown> = Object.fromEntries(formData);
  delete payload.id;
  delete payload._upload_bucket;
  delete payload._upload_field;
  delete payload._upload_target;
  delete payload._gallery_bucket;
  delete payload.gallery_files;

  for (const [key, value] of Object.entries(payload)) {
    if (value instanceof File) {
      delete payload[key];
      continue;
    }
    if (value === "") payload[key] = null;
    if (key === "featured" || key === "published" || key === "is_read") payload[key] = value === "on";
    if (key === "technologies" || key === "tags") payload[key] = String(value || "").split(",").map((item) => item.trim()).filter(Boolean);
  }

  const supabase = await createClient();
  if (uploadBucket && uploadField && uploadTarget) {
    const file = formData.get(uploadField);
    if (file instanceof File && file.size > 0) {
      payload[uploadTarget] = await uploadPublicFile(uploadBucket, file);
    }
  }

  type MutableTable = {
    update: (record: Record<string, unknown>) => { eq: (column: string, value: string) => { select: (columns: string) => { single: () => Promise<{ data: { id: string } | null }> } } };
    insert: (record: Record<string, unknown>) => { select: (columns: string) => { single: () => Promise<{ data: { id: string } | null }> } };
  };
  const mutable = supabase.from(table as "projects") as unknown as MutableTable;
  const { data } = id
    ? await mutable.update(payload).eq("id", id).select("id").single()
    : await mutable.insert(payload).select("id").single();

  const recordId = id || data?.id;
  const galleryFiles = formData.getAll("gallery_files").filter((file): file is File => file instanceof File && file.size > 0);
  if (table === "projects" && recordId && galleryBucket && galleryFiles.length) {
    const records = await Promise.all(galleryFiles.map(async (file, index) => ({
      project_id: recordId,
      image_url: await uploadPublicFile(galleryBucket, file),
      alt: String(payload.title || "Project image"),
      sort_order: index,
    })));
    await supabase.from("project_images").insert(records);
  }

  revalidatePath("/admin");
  revalidatePath(`/admin/${table === "blog_posts" ? "blog" : table}`);
  revalidatePath(`/${table}`);
  revalidatePath("/");
}

export async function deleteAdminRecord(table: string, id: string) {
  const supabase = await createClient();
  await supabase.from(table as "projects").delete().eq("id", id);
  revalidatePath("/admin");
  revalidatePath(`/admin/${table === "blog_posts" ? "blog" : table}`);
  revalidatePath(`/${table}`);
  revalidatePath("/");
}

export async function deleteProjectImage(id: string) {
  const supabase = await createClient();
  await supabase.from("project_images").delete().eq("id", id);
  revalidatePath("/admin/projects");
  revalidatePath("/projects");
}

async function uploadPublicFile(bucket: string, file: File) {
  const supabase = await createClient();
  const extension = file.name.split(".").pop() || "bin";
  const path = `${Date.now()}-${crypto.randomUUID()}.${extension}`;
  const { error } = await supabase.storage.from(bucket).upload(path, file, {
    cacheControl: "3600",
    upsert: false,
    contentType: file.type || undefined,
  });
  if (error) throw new Error(error.message);
  const { data } = supabase.storage.from(bucket).getPublicUrl(path);
  return data.publicUrl;
}
