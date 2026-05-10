import { AdminNav } from "@/components/admin/admin-nav";
import { CrudForm, type Field } from "@/components/admin/crud-form";
import { achievements } from "@/lib/data";

const fields: Field[] = [
  { name: "title", label: "Title" },
  { name: "organization", label: "Organization" },
  { name: "description", label: "Description", type: "textarea" },
  { name: "icon", label: "Lucide Icon" },
  { name: "year", label: "Year" },
];

export default function AdminAchievementsPage() {
  return (
    <section className="px-5 py-12"><div className="mx-auto max-w-7xl"><AdminNav /><h1 className="text-3xl font-black text-navy dark:text-white">Achievements</h1><CrudForm table="achievements" fields={fields} /><div className="mt-8 grid gap-3">{achievements.map((item) => <div key={item.title} className="rounded-md border border-navy/10 p-4 text-sm dark:border-white/10">{item.title} - {item.organization}</div>)}</div></div></section>
  );
}
