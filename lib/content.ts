import { createClient } from "@/lib/supabase/server";
import { achievements, blogPosts, certifications, projects, services, testimonials } from "@/lib/data";
import type { Achievement, BlogPost, Certification, Project, Service, Testimonial } from "@/types/content";

function hasSupabaseEnv() {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
      (process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY),
  );
}

async function readTable<T>(table: string, fallback: T[], order = "created_at") {
  if (!hasSupabaseEnv()) return fallback;
  const supabase = await createClient();
  const { data, error } = await supabase.from(table).select("*").order(order, { ascending: table !== "projects" && table !== "blog_posts" });
  if (error || !data?.length) return fallback;
  return data as T[];
}

export const getProjects = () => readTable<Project>("projects", projects, "completed_at");
export const getAchievements = () => readTable<Achievement>("achievements", achievements, "sort_order");
export const getServices = () => readTable<Service>("services", services, "sort_order");
export const getCertifications = () => readTable<Certification>("certifications", certifications, "sort_order");
export const getTestimonials = () => readTable<Testimonial>("testimonials", testimonials, "sort_order");
export const getBlogPosts = () => readTable<BlogPost>("blog_posts", blogPosts, "published_at");

export async function getProjectBySlug(slug: string) {
  if (!hasSupabaseEnv()) return projects.find((project) => project.slug === slug);
  const supabase = await createClient();
  const { data } = await supabase.from("projects").select("*").eq("slug", slug).maybeSingle();
  return (data as Project | null) || projects.find((project) => project.slug === slug);
}

export async function getBlogPostBySlug(slug: string) {
  if (!hasSupabaseEnv()) return blogPosts.find((post) => post.slug === slug);
  const supabase = await createClient();
  const { data } = await supabase.from("blog_posts").select("*").eq("slug", slug).maybeSingle();
  return (data as BlogPost | null) || blogPosts.find((post) => post.slug === slug);
}
