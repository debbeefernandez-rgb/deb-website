import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: site.url, lastModified: now, priority: 1 },
    { url: `${site.url}/work`, lastModified: now, priority: 0.9 },
    ...projects.map((p) => ({
      url: `${site.url}/work/${p.slug}`,
      lastModified: now,
      priority: 0.7,
    })),
    { url: `${site.url}/about`, lastModified: now, priority: 0.8 },
    { url: `${site.url}/contact`, lastModified: now, priority: 0.8 },
  ];
}
