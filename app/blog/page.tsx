import Link from "next/link";
import type { Metadata } from "next";
import { Section } from "@/components/site/section";
import { getBlogPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles on ICT strategy, digital transformation, web development, and digital marketing.",
};

export default async function BlogPage() {
  const blogPosts = await getBlogPosts();
  return (
    <Section eyebrow="Blog" title="Ideas on technology, strategy, education, and growth.">
      <div className="grid gap-6 md:grid-cols-2">
        {blogPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="rounded-lg border border-navy/10 bg-white p-7 transition hover:border-gold dark:border-white/10 dark:bg-white/5">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-gold">{post.category}</p>
            <h2 className="mt-4 text-2xl font-black text-navy dark:text-white">{post.title}</h2>
            <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </Section>
  );
}
