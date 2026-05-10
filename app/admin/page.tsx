import { AdminNav } from "@/components/admin/admin-nav";
import { blogPosts, achievements, certifications, projects, services, testimonials } from "@/lib/data";

const stats = [
  ["Projects", projects.length],
  ["Achievements", achievements.length],
  ["Testimonials", testimonials.length],
  ["Certifications", certifications.length],
  ["Services", services.length],
  ["Blog Posts", blogPosts.length],
];

export default function AdminDashboardPage() {
  return (
    <section className="px-5 py-12">
      <div className="mx-auto max-w-7xl">
        <AdminNav />
        <h1 className="text-4xl font-black text-navy dark:text-white">Dashboard Overview</h1>
        <p className="mt-3 text-slate-600 dark:text-slate-300">Manage portfolio content, leads, settings, and media from one protected workspace.</p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map(([label, value]) => (
            <div key={label} className="rounded-lg border border-navy/10 bg-white p-6 dark:border-white/10 dark:bg-white/5">
              <p className="text-4xl font-black text-gold">{value}</p>
              <p className="mt-2 text-sm font-bold text-slate-600 dark:text-slate-300">Total {label}</p>
            </div>
          ))}
          <div className="rounded-lg border border-navy/10 bg-white p-6 dark:border-white/10 dark:bg-white/5">
            <p className="text-4xl font-black text-gold">0</p>
            <p className="mt-2 text-sm font-bold text-slate-600 dark:text-slate-300">Total Contact Messages</p>
          </div>
        </div>
      </div>
    </section>
  );
}
