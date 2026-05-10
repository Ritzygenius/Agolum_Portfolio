import type { MetadataRoute } from "next";
import { blogPosts, projects } from "@/lib/data";
import { siteUrl } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "about", "achievements", "projects", "services", "certifications", "testimonials", "blog", "contact", "resume"];
  return [
    ...staticRoutes.map((route) => ({ url: siteUrl(route), lastModified: new Date(), changeFrequency: "monthly" as const, priority: route ? 0.8 : 1 })),
    ...projects.map((project) => ({ url: siteUrl(`/projects/${project.slug}`), lastModified: new Date(project.completed_at), changeFrequency: "monthly" as const, priority: 0.7 })),
    ...blogPosts.map((post) => ({ url: siteUrl(`/blog/${post.slug}`), lastModified: new Date(post.published_at), changeFrequency: "monthly" as const, priority: 0.6 })),
  ];
}
