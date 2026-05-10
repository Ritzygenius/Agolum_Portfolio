import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/site/contact-form";
import { Section } from "@/components/site/section";
import { profile, socialLinks } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Chinagolum Arinzechukwu Igwe for ICT consulting, digital strategy, training, web development, and program management.",
};

export default function ContactPage() {
  return (
    <Section eyebrow="Contact" title="Start a high-trust conversation about your next digital move." description="Use the form, email, phone, or WhatsApp. Every serious inquiry is treated with care and clarity.">
      <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
        <aside className="rounded-lg bg-navy p-7 text-white">
          <h2 className="text-2xl font-black">Direct contact</h2>
          <div className="mt-6 grid gap-4 text-sm text-slate-300">
            <p className="flex gap-3"><Mail className="size-5 text-gold" /> {profile.email}</p>
            <p className="flex gap-3"><Phone className="size-5 text-gold" /> {profile.phone}</p>
            <p className="flex gap-3"><MapPin className="size-5 text-gold" /> {profile.location}</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} className="rounded-md border border-white/10 px-3 py-2 text-sm font-semibold hover:border-gold hover:text-gold">
                {link.label}
              </a>
            ))}
          </div>
        </aside>
        <ContactForm />
      </div>
    </Section>
  );
}
