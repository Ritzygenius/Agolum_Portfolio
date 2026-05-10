import type { Metadata } from "next";
import { ProjectCard } from "@/components/site/project-card";
import { Section } from "@/components/site/section";
import { getProjects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
  description: "Portfolio of web development, digital marketing, training, and government digital transformation projects.",
};

export default async function ProjectsPage({ searchParams }: { searchParams?: Promise<{ q?: string; category?: string }> }) {
  const params = await searchParams;
  const projects = await getProjects();
  const q = params?.q?.toLowerCase() || "";
  const category = params?.category || "All";
  const categories = ["All", ...Array.from(new Set(projects.map((project) => project.category)))];
  const filtered = projects.filter((project) => {
    const matchesCategory = category === "All" || project.category === category;
    const matchesSearch = !q || `${project.title} ${project.short_description} ${project.technologies.join(" ")}`.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  return (
    <Section eyebrow="Projects" title="A scalable portfolio of digital products, programs, and transformation work." description="Search and filter by category. In production, these records are managed from the Supabase-powered admin dashboard.">
      <form className="mb-10 grid gap-3 rounded-lg border border-navy/10 bg-white p-4 md:grid-cols-[1fr_260px_auto] dark:border-white/10 dark:bg-white/5">
        <input name="q" defaultValue={q} placeholder="Search projects, technologies, or outcomes" className="rounded-md border border-slate-200 px-4 py-3 outline-none focus:border-gold dark:border-white/10 dark:bg-navy" />
        <select name="category" defaultValue={category} className="rounded-md border border-slate-200 px-4 py-3 outline-none focus:border-gold dark:border-white/10 dark:bg-navy">
          {categories.map((item) => <option key={item}>{item}</option>)}
        </select>
        <button className="rounded-md bg-navy px-6 py-3 text-sm font-black text-white dark:bg-gold dark:text-navy">Filter</button>
      </form>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => <ProjectCard key={project.slug} project={project} />)}
      </div>
    </Section>
  );
}
