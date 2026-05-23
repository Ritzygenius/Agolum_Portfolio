import { AdminNav } from "@/components/admin/admin-nav";
import { RecordManager, type AdminField } from "@/components/admin/record-manager";
import { getProfile } from "@/lib/content";

const fields: AdminField[] = [
  { name: "full_name", label: "Full Name" },
  { name: "professional_title", label: "Professional Title", type: "textarea" },
  { name: "tagline", label: "Tagline", type: "textarea" },
  { name: "summary", label: "Summary", type: "textarea" },
  { name: "portrait_url", label: "Portrait URL" },
  { name: "portrait_file", label: "Upload Portrait", type: "file" },
  { name: "cv_url", label: "CV URL", type: "url" },
  { name: "calendly_url", label: "Book Consultation URL", type: "url" },
  { name: "email", label: "Email" },
  { name: "phone", label: "Phone" },
  { name: "whatsapp_number", label: "WhatsApp Number" },
  { name: "nationality", label: "Nationality" },
  { name: "location", label: "Location" },
  { name: "instagram_url", label: "Instagram URL", type: "url" },
  { name: "facebook_url", label: "Facebook URL", type: "url" },
  { name: "linkedin_url", label: "LinkedIn URL", type: "url" },
  { name: "x_url", label: "X URL", type: "url" },
];

export default async function AdminSettingsPage() {
  const profile = await getProfile();
  return (
    <section className="px-5 py-12">
      <div className="mx-auto max-w-7xl">
        <AdminNav />
        <h1 className="text-3xl font-black text-navy dark:text-white">Profile / Site Settings</h1>
        <RecordManager table="profiles" titleField="full_name" fields={fields} records={[profile]} upload={{ bucket: "profile-images", fileField: "portrait_file", targetField: "portrait_url" }} />
      </div>
    </section>
  );
}
