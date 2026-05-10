import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts, profile } from "@/lib/data";
import { getBlogPostBySlug } from "@/lib/content";
import { siteUrl } from "@/lib/utils";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: siteUrl(`/blog/${post.slug}`) },
  };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) notFound();
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    author: { "@type": "Person", name: profile.name },
    datePublished: post.published_at,
  };

  return (
    <article className="px-5 py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-black uppercase tracking-[0.22em] text-gold">{post.category}</p>
        <h1 className="mt-5 text-4xl font-black tracking-tight text-navy sm:text-6xl dark:text-white">{post.title}</h1>
        <div className="mt-8 h-1 w-full overflow-hidden rounded bg-slate-200"><div className="h-full w-2/3 bg-gold" /></div>
        <div className="prose-content mt-10 text-lg text-slate-700 dark:text-slate-300">
          {post.content.split(". ").map((paragraph) => <p key={paragraph}>{paragraph.trim()}.</p>)}
        </div>
      </div>
    </article>
  );
}
