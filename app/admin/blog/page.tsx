import { AdminNav } from "@/components/admin/admin-nav";
import { RecordManager, type AdminField } from "@/components/admin/record-manager";
import { getAdminBlogPosts } from "@/lib/content";

const fields: AdminField[] = [
  { name: "title", label: "Title" },
  { name: "slug", label: "Slug" },
  { name: "excerpt", label: "Excerpt", type: "textarea" },
  { name: "content", label: "Rich Text Content", type: "textarea" },
  { name: "category", label: "Category" },
  { name: "tags", label: "Tags", placeholder: "ICT, Web, Leadership" },
  { name: "featured_image_url", label: "Featured Image URL" },
  { name: "featured_image_file", label: "Upload Featured Image", type: "file" },
  { name: "published_at", label: "Published At", type: "date" },
  { name: "published", label: "Published", type: "checkbox" },
];

export default async function AdminBlogPage() {
  const blogPosts = await getAdminBlogPosts();
  return (
    <section className="px-5 py-12">
      <div className="mx-auto max-w-7xl">
        <AdminNav />
        <h1 className="text-3xl font-black text-navy dark:text-white">Blog Posts</h1>
        <RecordManager table="blog_posts" titleField="title" fields={fields} records={blogPosts} upload={{ bucket: "blog-images", fileField: "featured_image_file", targetField: "featured_image_url" }} />
      </div>
    </section>
  );
}
