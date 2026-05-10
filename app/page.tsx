import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/site/project-card";
import { Reveal } from "@/components/site/motion";
import { Section } from "@/components/site/section";
import { DynamicIcon } from "@/components/site/icon";
import { metrics, profile } from "@/lib/data";
import { getAchievements, getProjects, getServices, getTestimonials } from "@/lib/content";

export default async function Home() {
  const [liveProjects, liveAchievements, liveServices, liveTestimonials] = await Promise.all([
    getProjects(),
    getAchievements(),
    getServices(),
    getTestimonials(),
  ]);
  const featuredProjects = liveProjects.filter((project) => project.featured).slice(0, 3);

  return (
    <>
      <section className="premium-grid overflow-hidden bg-white px-5 py-16 dark:bg-navy sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
          <Reveal>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-gold">Personal brand platform</p>
            <h1 className="mt-5 text-4xl font-black tracking-tight text-navy sm:text-6xl lg:text-7xl dark:text-white">
              {profile.name}
            </h1>
            <p className="mt-6 max-w-3xl text-lg font-semibold leading-8 text-slate-700 dark:text-slate-200">{profile.title}</p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">{profile.summary}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/projects">
                View Projects <ArrowRight className="size-4" />
              </Button>
              <Button href={profile.cvUrl} variant="outline">
                <Download className="size-4" /> Download CV
              </Button>
              <Button href="/contact" variant="secondary">
                <Mail className="size-4" /> Contact Me
              </Button>
            </div>
          </Reveal>
          <Reveal className="relative">
            <div className="absolute -inset-4 rounded-[2rem] border border-gold/30" />
            <div className="relative overflow-hidden rounded-2xl bg-navy shadow-2xl shadow-navy/20">
              <Image src={profile.portrait} alt="Professional portrait of Chinagolum Arinzechukwu Igwe" width={900} height={1100} priority className="h-auto w-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      <Section className="bg-slate-50 py-12 dark:bg-[#071221]">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map(([value, label]) => (
            <div key={label} className="rounded-lg border border-navy/10 bg-white p-6 dark:border-white/10 dark:bg-white/5">
              <p className="text-4xl font-black text-gold">{value}</p>
              <p className="mt-2 text-sm font-bold text-slate-600 dark:text-slate-300">{label}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Featured work" title="Digital projects, public-sector programs, and learning systems built for impact." description="A curated view of web development, digital marketing, training, and government transformation projects.">
        <div className="grid gap-6 md:grid-cols-3">
          {featuredProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}
        </div>
      </Section>

      <Section className="bg-navy text-white" eyebrow="Services" title="Consulting and delivery across the digital transformation lifecycle." description="From strategy to implementation, every engagement is designed to convert vision into systems people can actually use.">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {liveServices.slice(0, 6).map((service) => (
            <Reveal key={service.slug} className="rounded-lg border border-white/10 bg-white/5 p-6">
              <DynamicIcon name={service.icon} className="size-8 text-gold" />
              <h3 className="mt-5 text-xl font-black text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{service.description}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Leadership" title="Roles that connect technology, education, and governance.">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {liveAchievements.slice(0, 6).map((item) => (
            <div key={`${item.title}-${item.organization}`} className="rounded-lg border border-navy/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
              <DynamicIcon name={item.icon} className="size-8 text-emerald" />
              <h3 className="mt-5 text-lg font-black text-navy dark:text-white">{item.title}</h3>
              <p className="font-semibold text-gold">{item.organization}</p>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-slate-50 dark:bg-[#071221]" eyebrow="Testimonials" title="Trusted by learners, partners, and institutional stakeholders.">
        <div className="grid gap-5 md:grid-cols-3">
          {liveTestimonials.map((item) => (
            <blockquote key={item.name} className="rounded-lg border border-navy/10 bg-white p-6 dark:border-white/10 dark:bg-white/5">
              <p className="text-base leading-8 text-slate-700 dark:text-slate-200">“{item.quote}”</p>
              <footer className="mt-6">
                <p className="font-black text-navy dark:text-white">{item.name}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">{item.role}, {item.company}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </Section>

      <section className="px-5 py-20">
        <div className="mx-auto max-w-7xl rounded-2xl bg-navy p-8 text-white sm:p-12">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-gold">Let’s build what matters</p>
          <div className="mt-4 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <h2 className="max-w-4xl text-3xl font-black tracking-tight sm:text-5xl">{profile.tagline}</h2>
            <Button href="/contact" variant="secondary">Start a Conversation</Button>
          </div>
          <Link href="/resume" className="mt-6 inline-flex text-sm font-bold text-slate-300 hover:text-gold">View interactive resume</Link>
        </div>
      </section>
    </>
  );
}
