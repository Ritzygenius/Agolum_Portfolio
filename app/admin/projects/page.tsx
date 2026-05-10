import { AdminNav } from "@/components/admin/admin-nav";
import { CrudForm, type Field } from "@/components/admin/crud-form";
import { projects } from "@/lib/data";

const fields: Field[] = [
  { name: "title", label: "Title" },
  { name: "slug", label: "Slug" },
  { name: "short_description", label: "Short Description", type: "textarea" },
  { name: "full_description", label: "Full Description", type: "textarea" },
  { name: "challenge", label: "Challenge", type: "textarea" },
  { name: "solution", label: "Solution", type: "textarea" },
  { name: "results", label: "Results", type: "textarea" },
  { name: "technologies", label: "Technologies", placeholder: "Next.js, Supabase, SEO" },
  { name: "client_name", label: "Client Name" },
  { name: "industry", label: "Industry" },
  { name: "category", label: "Category" },
  { name: "live_url", label: "Live URL", type: "url" },
  { name: "github_url", label: "GitHub URL", type: "url" },
  { name: "thumbnail_url", label: "Thumbnail URL" },
  { name: "completed_at", label: "Completed At", type: "date" },
  { name: "featured", label: "Featured", type: "checkbox" },
  { name: "published", label: "Published", type: "checkbox" },
];

export default function AdminProjectsPage() {
  return (
    <section className="px-5 py-12">
      <div className="mx-auto max-w-7xl">
        <AdminNav />
        <h1 className="text-3xl font-black text-navy dark:text-white">Projects</h1>
        <CrudForm table="projects" fields={fields} />
        <div className="mt-8 grid gap-3">
          {projects.map((item) => <div key={item.slug} className="rounded-md border border-navy/10 p-4 text-sm dark:border-white/10">{item.title}</div>)}
        </div>
      </div>
    </section>
  );
}
