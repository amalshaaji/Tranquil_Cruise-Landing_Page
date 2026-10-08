import type { MetadataRoute } from "next";
import { houseboatList } from "@/lib/houseboats";
import { absoluteUrl } from "@/lib/seo";

const pages: Array<[path: string, priority: number]> = [
  ["/", 1],
  ["/houseboats", 0.9],
  ...houseboatList.map((b): [string, number] => [`/houseboats/${b.slug}`, 0.8]),
  ["/day-cruise", 0.8],
  ["/shikkara", 0.8],
  ["/kayaking", 0.8],
  ["/rooms", 0.7],
  ["/gallery", 0.6],
  ["/about", 0.5],
  ["/contact", 0.7],
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return pages.map(([path, priority]) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}
