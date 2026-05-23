import { AdminNav } from "@/components/admin/admin-nav";

export default function AdminMediaPage() {
  return (
    <section className="px-5 py-12">
      <div className="mx-auto max-w-7xl">
        <AdminNav />
        <h1 className="text-3xl font-black text-navy dark:text-white">Media Library</h1>
        <div className="mt-6 rounded-lg border border-navy/10 bg-white p-6 dark:border-white/10 dark:bg-white/5">
          <p className="leading-7 text-slate-600 dark:text-slate-300">Profile, project, and blog uploads are saved from their admin forms into <strong>profile-images</strong>, <strong>project-images</strong>, and <strong>blog-images</strong>.</p>
        </div>
      </div>
    </section>
  );
}
