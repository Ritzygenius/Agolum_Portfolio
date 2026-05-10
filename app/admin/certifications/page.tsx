import { AdminNav } from "@/components/admin/admin-nav";
import { CrudForm, type Field } from "@/components/admin/crud-form";
import { certifications } from "@/lib/data";

const fields: Field[] = [
  { name: "name", label: "Name" },
  { name: "issuer", label: "Issuer" },
  { name: "date", label: "Date", type: "date" },
  { name: "description", label: "Description", type: "textarea" },
  { name: "certificate_url", label: "Certificate URL" },
];

export default function AdminCertificationsPage() {
  return <section className="px-5 py-12"><div className="mx-auto max-w-7xl"><AdminNav /><h1 className="text-3xl font-black text-navy dark:text-white">Certifications</h1><CrudForm table="certifications" fields={fields} /><div className="mt-8 grid gap-3">{certifications.map((item) => <div key={item.name} className="rounded-md border border-navy/10 p-4 text-sm dark:border-white/10">{item.name}</div>)}</div></div></section>;
}
