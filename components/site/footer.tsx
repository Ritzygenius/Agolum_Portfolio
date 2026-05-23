import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { getSocialLinks } from "@/lib/data";
import type { Profile } from "@/types/content";

export function Footer({ profile }: { profile: Profile }) {
  const socialLinks = getSocialLinks(profile);
  return (
    <footer className="border-t border-navy/10 bg-navy text-white dark:border-white/10">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.2fr_.8fr_.8fr]">
        <div>
          <p className="text-2xl font-black text-gold">{profile.full_name}</p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">{profile.tagline}</p>
        </div>
        <div>
          <p className="font-bold text-white">Contact</p>
          <div className="mt-4 space-y-3 text-sm text-slate-300">
            <p className="flex gap-2"><Mail className="size-4 text-gold" /> {profile.email}</p>
            <p className="flex gap-2"><Phone className="size-4 text-gold" /> {profile.phone}</p>
            <p className="flex gap-2"><MapPin className="size-4 text-gold" /> {profile.location}</p>
          </div>
        </div>
        <div>
          <p className="font-bold text-white">Connect</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {socialLinks.map((link) => (
              <Link key={link.label} href={link.href} className="rounded-md border border-white/10 px-3 py-2 text-sm text-slate-300 transition hover:border-gold hover:text-gold">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Chinagolum Arinzechukwu Igwe. Built for leadership, trust, and measurable impact.
      </div>
    </footer>
  );
}
