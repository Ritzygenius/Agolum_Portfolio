import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExternalLink, Github, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";
import { getProjectBySlug } from "@/lib/content";
import { siteUrl } from "@/lib/utils";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.short_description,
    alternates: { canonical: siteUrl(`/projects/${project.slug}`) },
    openGraph: { title: project.title, description: project.short_description, type: "article", images: [project.thumbnail_url] },
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.short_description,
    dateCreated: project.completed_at,
    creator: "Chinagolum Arinzechukwu Igwe",
  };

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-navy px-5 py-20 text-white">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-gold">{project.category}</p>
          <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-6xl">{project.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{project.full_description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {project.live_url && <Button href={project.live_url}><ExternalLink className="size-4" /> Live URL</Button>}
            {project.github_url && <Button href={project.github_url} variant="outline"><Github className="size-4" /> GitHub</Button>}
            {project.video_url && <Button href={project.video_url} variant="secondary"><PlayCircle className="size-4" /> Video</Button>}
          </div>
        </div>
      </section>
      <section className="px-5 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.95fr_1.05fr]">
          <Image src={project.thumbnail_url} alt="" width={900} height={640} className="rounded-2xl border border-navy/10 bg-white shadow-sm" />
          <div className="grid gap-6">
            {[
              ["Challenge", project.challenge],
              ["Solution", project.solution],
              ["Results", project.results],
            ].map(([title, text]) => (
              <div key={title} className="rounded-lg border border-navy/10 bg-white p-6 dark:border-white/10 dark:bg-white/5">
                <h2 className="text-xl font-black text-navy dark:text-white">{title}</h2>
                <p className="mt-3 leading-8 text-slate-600 dark:text-slate-300">{text}</p>
              </div>
            ))}
            <div className="rounded-lg border border-navy/10 bg-white p-6 dark:border-white/10 dark:bg-white/5">
              <h2 className="text-xl font-black text-navy dark:text-white">Technologies</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => <span key={tech} className="rounded-md bg-gold/10 px-3 py-2 text-sm font-bold text-navy dark:text-gold">{tech}</span>)}
              </div>
            </div>
          </div>
        </div>
        {project.video_url ? (
          <div className="mx-auto mt-12 max-w-5xl">
            <div className="aspect-video overflow-hidden rounded-2xl border border-navy/10 bg-navy dark:border-white/10">
              <iframe src={toEmbedUrl(project.video_url)} title={`${project.title} video`} className="h-full w-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
            </div>
          </div>
        ) : null}
        {project.project_images?.length ? (
          <div className="mx-auto mt-12 grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.project_images.map((image) => (
              <Image key={image.id || image.image_url} src={image.image_url} alt={image.alt || project.title} width={720} height={480} className="rounded-lg border border-navy/10 object-cover dark:border-white/10" />
            ))}
          </div>
        ) : null}
      </section>
    </article>
  );
}

function toEmbedUrl(url: string) {
  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes("youtube.com")) {
      const id = parsed.searchParams.get("v");
      return id ? `https://www.youtube.com/embed/${id}` : url;
    }
    if (parsed.hostname.includes("youtu.be")) return `https://www.youtube.com/embed/${parsed.pathname.slice(1)}`;
    if (parsed.hostname.includes("vimeo.com")) return `https://player.vimeo.com/video/${parsed.pathname.split("/").filter(Boolean).pop()}`;
    if (parsed.hostname.includes("loom.com")) return url.replace("/share/", "/embed/");
    return url;
  } catch {
    return url;
  }
}
