import { AdminNav } from "@/components/admin/admin-nav";
import { RecordManager, type AdminField } from "@/components/admin/record-manager";
import { getAdminProjects } from "@/lib/content";

const fields: AdminField[] = [
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
  { name: "video_url", label: "Video URL", type: "url", placeholder: "YouTube, Vimeo, Loom, etc." },
  { name: "thumbnail_url", label: "Thumbnail URL" },
  { name: "thumbnail_file", label: "Upload Thumbnail", type: "file" },
  { name: "gallery_files", label: "Upload Gallery Images", type: "file" },
  { name: "completed_at", label: "Completed At", type: "date" },
  { name: "featured", label: "Featured", type: "checkbox" },
  { name: "published", label: "Published", type: "checkbox" },
];

export default async function AdminProjectsPage() {
  const projects = await getAdminProjects();
  return (
    <section className="px-5 py-12">
      <div className="mx-auto max-w-7xl">
        <AdminNav />
        <h1 className="text-3xl font-black text-navy dark:text-white">Projects</h1>
        <RecordManager table="projects" titleField="title" fields={fields} records={projects} upload={{ bucket: "project-images", fileField: "thumbnail_file", targetField: "thumbnail_url", galleryBucket: "project-images" }} />
      </div>
    </section>
  );
}
