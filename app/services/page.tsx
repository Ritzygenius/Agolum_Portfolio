import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { DynamicIcon } from "@/components/site/icon";
import { Section } from "@/components/site/section";
import { getServices } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description: "Website development, digital marketing, ICT consulting, training, program management, and government digital transformation services.",
};

export default async function ServicesPage() {
  const services = await getServices();
  return (
    <Section eyebrow="Services" title="Premium advisory and implementation for ambitious teams." description="Strategic enough for leadership rooms, practical enough for real users, and structured enough to scale.">
      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <article key={service.slug} className="rounded-lg border border-navy/10 bg-white p-7 shadow-sm dark:border-white/10 dark:bg-white/5">
            <DynamicIcon name={service.icon} className="size-10 text-gold" />
            <h2 className="mt-5 text-2xl font-black text-navy dark:text-white">{service.title}</h2>
            <p className="mt-3 leading-8 text-slate-600 dark:text-slate-300">{service.description}</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {service.outcomes.map((outcome) => (
                <li key={outcome} className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
                  <CheckCircle2 className="size-4 text-emerald" /> {outcome}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
