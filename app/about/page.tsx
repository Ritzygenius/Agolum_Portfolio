import Image from "next/image";
import type { Metadata } from "next";
import { Section } from "@/components/site/section";
import { achievements, profile } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description: "Biography, mission, values, and professional journey of Chinagolum Arinzechukwu Igwe.",
};

export default function AboutPage() {
  return (
    <>
      <Section eyebrow="About" title="A technology leader shaped by education, entrepreneurship, and public impact." description={profile.summary}>
        <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
          <Image src={profile.portrait} alt="Chinagolum Arinzechukwu Igwe" width={900} height={1100} className="rounded-2xl bg-navy shadow-xl" />
          <div className="prose-content text-slate-700 dark:text-slate-300">
            <p>
              Chinagolum Arinzechukwu Igwe is a Nigerian technology leader, digital strategist, program manager,
              ICT policy advisor, web developer, trainer, and entrepreneur based in Enugu, Nigeria.
            </p>
            <p>
              His work sits at the intersection of technology, learning, governance, and enterprise growth. Across
              more than a decade, he has helped individuals build digital confidence, supported organizations with
              practical growth systems, and advised public leadership on ICT-driven transformation.
            </p>
            <p>
              His mission is to make technology useful, accessible, and empowering. His vision is a future where
              individuals, organizations, and governments in Africa can confidently use digital tools to solve real
              problems and create sustainable opportunity.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {["Integrity", "Innovation", "Service"].map((value) => (
                <div key={value} className="rounded-lg border border-navy/10 p-5 text-center font-black text-navy dark:border-white/10 dark:text-white">{value}</div>
              ))}
            </div>
          </div>
        </div>
      </Section>
      <Section className="bg-slate-50 dark:bg-[#071221]" eyebrow="Journey" title="Career timeline">
        <div className="grid gap-5">
          {achievements.map((item, index) => (
            <div key={item.title} className="grid gap-4 rounded-lg border border-navy/10 bg-white p-6 md:grid-cols-[120px_1fr] dark:border-white/10 dark:bg-white/5">
              <p className="text-sm font-black text-gold">{index === 0 ? "Now" : item.year}</p>
              <div>
                <h3 className="text-xl font-black text-navy dark:text-white">{item.title}, {item.organization}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
