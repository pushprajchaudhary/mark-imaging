import type { MetadataRoute } from "next";
import { posts } from "@/content/posts";
import { services } from "@/content/services";
import { absoluteUrl, siteConfig } from "@/lib/site";

/** Bump when page copy changes materially, so lastModified stays honest. */
const CONTENT_UPDATED = "2026-10-20";

type Entry = MetadataRoute.Sitemap[number];

function entry(path: string, priority: number, changeFrequency: Entry["changeFrequency"] = "monthly", lastModified = CONTENT_UPDATED): Entry {
  return { url: absoluteUrl(path), lastModified, changeFrequency, priority };
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    entry("/", 1, "weekly"),
    entry("/services", 0.9),
    ...services.map((s) => entry(`/services/${s.slug}`, 0.9)),
    entry("/teleradiology", 0.9),
    entry("/radiology-outsourcing", 0.9),
    entry("/for-hospitals", 0.8),
    entry("/about", 0.8),
    entry("/contact", 0.7),
    entry("/resources", 0.6, "weekly"),
    entry("/resources/blog", 0.6, "weekly"),
    ...posts.filter((p) => !p.draft).map((p) => entry(`/resources/blog/${p.slug}`, 0.6, "yearly", p.updatedAt)),
    ...(siteConfig.features.showPricing ? [entry("/pricing", 0.5)] : []),
    entry("/privacy-policy", 0.2, "yearly"),
    entry("/terms-and-conditions", 0.2, "yearly"),
    entry("/medical-disclaimer", 0.2, "yearly"),
  ];
}
