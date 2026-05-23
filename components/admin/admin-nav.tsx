import Link from "next/link";
import { signOut } from "@/app/actions";

const items = [
  ["Dashboard", "/admin"],
  ["Profile / Site Settings", "/admin/settings"],
  ["Projects", "/admin/projects"],
  ["Blog", "/admin/blog"],
  ["Achievements", "/admin/achievements"],
  ["Certifications", "/admin/certifications"],
  ["Testimonials", "/admin/testimonials"],
  ["Services", "/admin/services"],
  ["Messages", "/admin/messages"],
];

export function AdminNav() {
  return (
    <div className="mb-8 rounded-lg border border-navy/10 bg-white p-3 dark:border-white/10 dark:bg-white/5">
      <nav className="flex flex-wrap gap-2" aria-label="Admin navigation">
        {items.map(([label, href]) => (
          <Link key={href} href={href} className="rounded-md px-3 py-2 text-sm font-bold text-slate-600 hover:bg-navy/5 hover:text-navy dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white">
            {label}
          </Link>
        ))}
        <form action={signOut} className="ml-auto">
          <button className="rounded-md bg-navy px-3 py-2 text-sm font-bold text-white dark:bg-gold dark:text-navy">Logout</button>
        </form>
      </nav>
    </div>
  );
}
