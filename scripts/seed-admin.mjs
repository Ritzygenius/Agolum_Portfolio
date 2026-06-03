import { existsSync, readFileSync } from "node:fs";
import { createClient } from "@supabase/supabase-js";
import ws from "ws";

function loadEnvFile(path) {
  if (!existsSync(path)) return;
  const lines = readFileSync(path, "utf8").split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#") || !trimmed.includes("=")) continue;
    const [key, ...rest] = trimmed.split("=");
    if (!process.env[key]) process.env[key] = rest.join("=").trim().replace(/^["']|["']$/g, "");
  }
}

loadEnvFile(".env.local");
loadEnvFile(".env");

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const adminEmail = process.env.ADMIN_EMAIL || "admin@chinagolum.com";
const adminPassword = process.env.ADMIN_PASSWORD;

if (!supabaseUrl || !serviceRoleKey || !adminPassword) {
  throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, or ADMIN_PASSWORD.");
}

const supabase = createClient(supabaseUrl, serviceRoleKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
  realtime: {
    transport: ws,
  },
});

const profile = {
  full_name: "Chinagolum Arinzechukwu Igwe",
  professional_title:
    "Tech Leader | Digital Strategist | Program Manager | ICT Policy Advisor | Digital Marketing Expert | Web Developer | Entrepreneur",
  tagline: "Empowering Individuals, Organizations, and Governments Through Technology, Education, and Innovation.",
  summary:
    "Experienced technology leader, digital strategist, educator, and ICT policy advisor with over 10 years of experience in program management, digital marketing, web development, youth empowerment, and government technology transformation.",
  nationality: "Nigerian",
  location: "Enugu, Nigeria",
  email: "agolumarinze@gmail.com",
  phone: "+2349048127607",
  whatsapp_number: "2349048127607",
  portrait_url: "/portrait.svg",
  cv_url: "/chinagolum-igwe-cv.pdf",
};

const { data: createdUser, error: createError } = await supabase.auth.admin.createUser({
  email: adminEmail,
  password: adminPassword,
  email_confirm: true,
});

let user = createdUser?.user;

if (createError && createError.message.toLowerCase().includes("already")) {
  const { data, error } = await supabase.auth.admin.listUsers();
  if (error) throw error;
  user = data.users.find((item) => item.email?.toLowerCase() === adminEmail.toLowerCase());
} else if (createError) {
  throw createError;
}

if (!user) throw new Error(`Could not create or find admin user ${adminEmail}.`);

await supabase.from("admin_users").upsert(
  {
    auth_user_id: user.id,
    email: adminEmail,
  },
  { onConflict: "email" },
);

const { data: existingProfile } = await supabase.from("profiles").select("id").eq("email", profile.email).maybeSingle();
if (existingProfile?.id) {
  await supabase.from("profiles").update(profile).eq("id", existingProfile.id);
} else {
  await supabase.from("profiles").insert(profile);
}

const settings = {
  site_title: profile.full_name,
  tagline: profile.tagline,
  email: profile.email,
  phone: profile.phone,
  whatsapp_number: profile.whatsapp_number,
  address: profile.location,
  cv_url: profile.cv_url,
  hero_image_url: profile.portrait_url,
};
const { data: existingSettings } = await supabase.from("site_settings").select("id").limit(1).maybeSingle();
if (existingSettings?.id) {
  await supabase.from("site_settings").update(settings).eq("id", existingSettings.id);
} else {
  await supabase.from("site_settings").insert(settings);
}

const buckets = ["profile-images", "project-images", "blog-images", "certificates", "resumes", "testimonials"];
for (const bucket of buckets) {
  const { error } = await supabase.storage.createBucket(bucket, { public: true });
  if (error && !error.message.toLowerCase().includes("already")) throw error;
}

console.log(`Seed complete. Admin user ready: ${adminEmail}`);
