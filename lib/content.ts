import { createClient } from "@/lib/supabase/server";
import { achievements, blogPosts, certifications, profile, projects, services, testimonials } from "@/lib/data";
import type { Achievement, BlogPost, Certification, Profile, Project, Service, Testimonial } from "@/types/content";

export function hasSupabaseEnv() {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
      (process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY),
  );
}

async function readTable<T>(table: string, fallback: T[], order = "created_at", columns = "*") {
  if (!hasSupabaseEnv()) return fallback;
  const supabase = await createClient();
  const { data, error } = await supabase.from(table).select(columns).order(order, { ascending: table !== "projects" && table !== "blog_posts" });
  if (error || !data?.length) return fallback;
  return data as T[];
}

export async function getProfile() {
  if (!hasSupabaseEnv()) return profile;
  const supabase = await createClient();
  const { data, error } = await supabase.from("profiles").select("*").limit(1).maybeSingle();
  if (error || !data) return profile;
  // Sanitize to ensure no nulls for required UI string fields (prevents crashes and bad renders)
  const safe = { ...profile, ...(data as Partial<Profile>) };
  const stringFields: (keyof Profile)[] = [
    "full_name", "professional_title", "tagline", "summary", "portrait_url", "cv_url",
    "calendly_url", "email", "phone", "whatsapp_number", "nationality", "location",
    "instagram_url", "facebook_url", "linkedin_url", "x_url",
  ];
  for (const key of stringFields) {
    if (!safe[key]) (safe as any)[key] = (profile as any)[key] || "";
  }
  return safe;
}

export const getProjects = () => readTable<Project>("projects", projects, "completed_at", "*, project_images(*)");
export const getAchievements = () => readTable<Achievement>("achievements", achievements, "sort_order");
export const getServices = () => readTable<Service>("services", services, "sort_order");
export const getCertifications = () => readTable<Certification>("certifications", certifications, "sort_order");
export const getTestimonials = () => readTable<Testimonial>("testimonials", testimonials, "sort_order");
export const getBlogPosts = () => readTable<BlogPost>("blog_posts", blogPosts, "published_at");

export async function getAdminProjects() {
  return readTable<Project>("projects", projects, "completed_at", "*, project_images(*)");
}

export async function getAdminBlogPosts() {
  return readTable<BlogPost>("blog_posts", blogPosts, "published_at");
}

export async function getProjectBySlug(slug: string) {
  if (!hasSupabaseEnv()) return projects.find((project) => project.slug === slug);
  const supabase = await createClient();
  const { data } = await supabase.from("projects").select("*, project_images(*)").eq("slug", slug).maybeSingle();
  return (data as Project | null) || projects.find((project) => project.slug === slug);
}

export async function getBlogPostBySlug(slug: string) {
  if (!hasSupabaseEnv()) return blogPosts.find((post) => post.slug === slug);
  const supabase = await createClient();
  const { data } = await supabase.from("blog_posts").select("*").eq("slug", slug).maybeSingle();
  return (data as BlogPost | null) || blogPosts.find((post) => post.slug === slug);
}
