import { AdminNav } from "@/components/admin/admin-nav";

export default function AdminMessagesPage() {
  return (
    <section className="px-5 py-12">
      <div className="mx-auto max-w-7xl">
        <AdminNav />
        <h1 className="text-3xl font-black text-navy dark:text-white">Contact Messages</h1>
        <div className="mt-6 rounded-lg border border-navy/10 bg-white p-6 dark:border-white/10 dark:bg-white/5">
          <p className="text-slate-600 dark:text-slate-300">Messages submitted from the public contact form are stored in Supabase table <strong>contact_messages</strong>. Connect Supabase credentials to view live rows here or query them from Supabase Studio.</p>
        </div>
      </div>
    </section>
  );
}
