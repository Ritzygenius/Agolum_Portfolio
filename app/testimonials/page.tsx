import type { Metadata } from "next";
import { Section } from "@/components/site/section";
import { getTestimonials } from "@/lib/content";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Testimonials from clients, learners, and public-sector stakeholders.",
};

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials();
  return (
    <Section eyebrow="Testimonials" title="Voices from the people and organizations served.">
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((item) => (
          <blockquote key={item.name} className="rounded-lg border border-navy/10 bg-white p-7 shadow-sm dark:border-white/10 dark:bg-white/5">
            <p className="text-xl leading-9 text-slate-700 dark:text-slate-200">“{item.quote}”</p>
            <footer className="mt-8 border-t border-navy/10 pt-5 dark:border-white/10">
              <p className="font-black text-navy dark:text-white">{item.name}</p>
              <p className="text-sm text-slate-500">{item.role}, {item.company}</p>
            </footer>
          </blockquote>
        ))}
      </div>
    </Section>
  );
}
