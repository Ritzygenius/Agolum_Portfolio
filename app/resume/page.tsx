import type { Metadata } from "next";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/site/section";
import { achievements, certifications, services } from "@/lib/data";
import { getProfile } from "@/lib/content";

export const metadata: Metadata = {
  title: "Resume",
  description: "Interactive CV for Chinagolum Arinzechukwu Igwe.",
};

export default async function ResumePage() {
  const profile = await getProfile();
  return (
    <Section eyebrow="Resume" title={profile.full_name} description={profile.summary}>
      <div className="mb-8 flex flex-wrap gap-3">
        <Button href={profile.cv_url}><Download className="size-4" /> Download PDF</Button>
        <Button href={profile.calendly_url} variant="outline">Request Consultation</Button>
      </div>
      <div className="grid gap-8 lg:grid-cols-[1fr_.75fr]">
        <div className="rounded-lg border border-navy/10 bg-white p-7 dark:border-white/10 dark:bg-white/5">
          <h2 className="text-2xl font-black text-navy dark:text-white">Leadership Experience</h2>
          <div className="mt-6 grid gap-5">
            {achievements.map((item) => (
              <div key={item.title} className="border-b border-navy/10 pb-5 last:border-0 dark:border-white/10">
                <h3 className="font-black text-navy dark:text-white">{item.title}</h3>
                <p className="font-semibold text-gold">{item.organization}</p>
                <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <aside className="grid gap-6">
          <div className="rounded-lg border border-navy/10 bg-white p-7 dark:border-white/10 dark:bg-white/5">
            <h2 className="text-xl font-black text-navy dark:text-white">Core Services</h2>
            <ul className="mt-4 grid gap-2 text-sm font-semibold text-slate-600 dark:text-slate-300">
              {services.map((service) => <li key={service.slug}>{service.title}</li>)}
            </ul>
          </div>
          <div className="rounded-lg border border-navy/10 bg-white p-7 dark:border-white/10 dark:bg-white/5">
            <h2 className="text-xl font-black text-navy dark:text-white">Education & Certifications</h2>
            <ul className="mt-4 grid gap-3 text-sm text-slate-600 dark:text-slate-300">
              {certifications.map((item) => <li key={item.name}><strong>{item.name}</strong><br />{item.issuer}</li>)}
            </ul>
          </div>
        </aside>
      </div>
    </Section>
  );
}
