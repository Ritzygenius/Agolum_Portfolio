import { AdminNav } from "@/components/admin/admin-nav";
import { createClient } from "@/lib/supabase/server";
import { hasSupabaseEnv } from "@/lib/content";
import { blogPosts, achievements, certifications, projects, services, testimonials } from "@/lib/data";

async function getLiveCounts() {
  if (!hasSupabaseEnv()) {
    return {
      projects: projects.length,
      achievements: achievements.length,
      testimonials: testimonials.length,
      certifications: certifications.length,
      services: services.length,
      blogPosts: blogPosts.length,
      messages: 0,
    };
  }

  const supabase = await createClient();

  const [
    { count: projectCount },
    { count: achievementCount },
    { count: testimonialCount },
    { count: certificationCount },
    { count: serviceCount },
    { count: blogCount },
    { count: messageCount },
  ] = await Promise.all([
    supabase.from("projects").select("*", { count: "exact", head: true }),
    supabase.from("achievements").select("*", { count: "exact", head: true }),
    supabase.from("testimonials").select("*", { count: "exact", head: true }),
    supabase.from("certifications").select("*", { count: "exact", head: true }),
    supabase.from("services").select("*", { count: "exact", head: true }),
    supabase.from("blog_posts").select("*", { count: "exact", head: true }),
    supabase.from("contact_messages").select("*", { count: "exact", head: true }),
  ]);

  return {
    projects: projectCount ?? 0,
    achievements: achievementCount ?? 0,
    testimonials: testimonialCount ?? 0,
    certifications: certificationCount ?? 0,
    services: serviceCount ?? 0,
    blogPosts: blogCount ?? 0,
    messages: messageCount ?? 0,
  };
}

export default async function AdminDashboardPage() {
  const counts = await getLiveCounts();

  const stats: [string, number][] = [
    ["Projects", counts.projects],
    ["Achievements", counts.achievements],
    ["Testimonials", counts.testimonials],
    ["Certifications", counts.certifications],
    ["Services", counts.services],
    ["Blog Posts", counts.blogPosts],
    ["Contact Messages", counts.messages],
  ];

  return (
    <section className="px-5 py-12">
      <div className="mx-auto max-w-7xl">
        <AdminNav />
        <h1 className="text-4xl font-black text-navy dark:text-white">Dashboard Overview</h1>
        <p className="mt-3 text-slate-600 dark:text-slate-300">Manage portfolio content, leads, settings, and media from one protected workspace.</p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map(([label, value]) => (
            <div key={label} className="rounded-lg border border-navy/10 bg-white p-6 dark:border-white/10 dark:bg-white/5">
              <p className="text-4xl font-black text-gold">{value}</p>
              <p className="mt-2 text-sm font-bold text-slate-600 dark:text-slate-300">Total {label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
