import type { Metadata } from "next";
import { DynamicIcon } from "@/components/site/icon";
import { Section } from "@/components/site/section";
import { getAchievements } from "@/lib/content";

export const metadata: Metadata = {
  title: "Achievements",
  description: "Leadership roles and professional achievements of Chinagolum Arinzechukwu Igwe.",
};

export default async function AchievementsPage() {
  const achievements = await getAchievements();
  return (
    <Section eyebrow="Achievements" title="Leadership roles with measurable community and institutional value." description="A record of program leadership, digital education, ICT advisory, and entrepreneurial execution.">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {achievements.map((item) => (
          <article key={`${item.title}-${item.organization}`} className="rounded-lg border border-navy/10 bg-white p-7 shadow-sm dark:border-white/10 dark:bg-white/5">
            <DynamicIcon name={item.icon} className="size-9 text-emerald" />
            <p className="mt-6 text-sm font-black uppercase tracking-[0.18em] text-gold">{item.year}</p>
            <h2 className="mt-2 text-2xl font-black text-navy dark:text-white">{item.title}</h2>
            <p className="font-semibold text-slate-600 dark:text-slate-300">{item.organization}</p>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
