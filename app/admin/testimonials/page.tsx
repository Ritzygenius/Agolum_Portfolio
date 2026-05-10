import { AdminNav } from "@/components/admin/admin-nav";
import { CrudForm, type Field } from "@/components/admin/crud-form";
import { testimonials } from "@/lib/data";

const fields: Field[] = [
  { name: "quote", label: "Quote", type: "textarea" },
  { name: "name", label: "Name" },
  { name: "role", label: "Role" },
  { name: "company", label: "Company" },
  { name: "photo_url", label: "Photo URL" },
  { name: "published", label: "Published", type: "checkbox" },
];

export default function AdminTestimonialsPage() {
  return <section className="px-5 py-12"><div className="mx-auto max-w-7xl"><AdminNav /><h1 className="text-3xl font-black text-navy dark:text-white">Testimonials</h1><CrudForm table="testimonials" fields={fields} /><div className="mt-8 grid gap-3">{testimonials.map((item) => <div key={item.name} className="rounded-md border border-navy/10 p-4 text-sm dark:border-white/10">{item.name}</div>)}</div></div></section>;
}
