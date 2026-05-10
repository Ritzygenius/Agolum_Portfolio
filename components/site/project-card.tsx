import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { HoverLift } from "@/components/site/motion";
import type { Project } from "@/types/content";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <HoverLift className="h-full">
      <Link
        href={`/projects/${project.slug}`}
        className="group grid h-full overflow-hidden rounded-lg border border-navy/10 bg-white shadow-sm transition hover:border-gold/60 dark:border-white/10 dark:bg-white/5"
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
          <Image src={project.thumbnail_url} alt="" fill className="object-cover transition duration-500 group-hover:scale-105" />
        </div>
        <div className="p-6">
          <div className="mb-4 flex items-center justify-between gap-3">
            <span className="rounded-md bg-emerald/10 px-3 py-1 text-xs font-black text-emerald">{project.category}</span>
            <ArrowUpRight className="size-5 text-gold transition group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
          <h3 className="text-xl font-black text-navy dark:text-white">{project.title}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{project.short_description}</p>
        </div>
      </Link>
    </HoverLift>
  );
}
