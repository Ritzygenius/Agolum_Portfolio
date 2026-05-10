import type { Metadata } from "next";
import { Award } from "lucide-react";
import { Section } from "@/components/site/section";
import { getCertifications } from "@/lib/content";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Certifications",
  description: "Certifications and education of Chinagolum Arinzechukwu Igwe.",
};

export default async function CertificationsPage() {
  const certifications = await getCertifications();
  return (
    <Section eyebrow="Certifications" title="Formal learning, digital credentials, and academic foundation.">
      <div className="grid gap-5 md:grid-cols-2">
        {certifications.map((item) => (
          <article key={item.name} className="rounded-lg border border-navy/10 bg-white p-7 dark:border-white/10 dark:bg-white/5">
            <Award className="size-9 text-gold" />
            <h2 className="mt-5 text-2xl font-black text-navy dark:text-white">{item.name}</h2>
            <p className="mt-2 font-semibold text-emerald">{item.issuer}</p>
            <p className="mt-1 text-sm text-slate-500">{formatDate(item.date)}</p>
            <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
