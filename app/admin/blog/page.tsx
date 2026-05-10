import { AdminNav } from "@/components/admin/admin-nav";
import { CrudForm, type Field } from "@/components/admin/crud-form";
import { blogPosts } from "@/lib/data";

const fields: Field[] = [
  { name: "title", label: "Title" },
  { name: "slug", label: "Slug" },
  { name: "excerpt", label: "Excerpt", type: "textarea" },
  { name: "content", label: "Rich Text Content", type: "textarea" },
  { name: "category", label: "Category" },
  { name: "tags", label: "Tags", placeholder: "ICT, Web, Leadership" },
  { name: "published_at", label: "Published At", type: "date" },
  { name: "published", label: "Published", type: "checkbox" },
];

export default function AdminBlogPage() {
  return <section className="px-5 py-12"><div className="mx-auto max-w-7xl"><AdminNav /><h1 className="text-3xl font-black text-navy dark:text-white">Blog Posts</h1><CrudForm table="blog_posts" fields={fields} /><div className="mt-8 grid gap-3">{blogPosts.map((item) => <div key={item.slug} className="rounded-md border border-navy/10 p-4 text-sm dark:border-white/10">{item.title}</div>)}</div></div></section>;
}
