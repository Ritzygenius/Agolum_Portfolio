import { AdminNav } from "@/components/admin/admin-nav";
import { CrudForm, type Field } from "@/components/admin/crud-form";

const fields: Field[] = [
  { name: "site_title", label: "Site Title" },
  { name: "tagline", label: "Tagline", type: "textarea" },
  { name: "email", label: "Email" },
  { name: "phone", label: "Phone" },
  { name: "whatsapp_number", label: "WhatsApp Number" },
  { name: "address", label: "Address" },
  { name: "cv_url", label: "CV URL" },
  { name: "hero_image_url", label: "Hero Image URL" },
];

export default function AdminSettingsPage() {
  return <section className="px-5 py-12"><div className="mx-auto max-w-7xl"><AdminNav /><h1 className="text-3xl font-black text-navy dark:text-white">Site Settings</h1><CrudForm table="site_settings" fields={fields} /></div></section>;
}
