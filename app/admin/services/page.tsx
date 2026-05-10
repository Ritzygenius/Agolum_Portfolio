import { AdminNav } from "@/components/admin/admin-nav";
import { CrudForm, type Field } from "@/components/admin/crud-form";
import { services } from "@/lib/data";

const fields: Field[] = [
  { name: "title", label: "Title" },
  { name: "slug", label: "Slug" },
  { name: "description", label: "Description", type: "textarea" },
  { name: "outcomes", label: "Outcomes", placeholder: "One, Two, Three" },
  { name: "icon", label: "Lucide Icon" },
  { name: "published", label: "Published", type: "checkbox" },
];

export default function AdminServicesPage() {
  return <section className="px-5 py-12"><div className="mx-auto max-w-7xl"><AdminNav /><h1 className="text-3xl font-black text-navy dark:text-white">Services</h1><CrudForm table="services" fields={fields} /><div className="mt-8 grid gap-3">{services.map((item) => <div key={item.slug} className="rounded-md border border-navy/10 p-4 text-sm dark:border-white/10">{item.title}</div>)}</div></div></section>;
}
