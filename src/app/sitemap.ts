import type { MetadataRoute } from "next";
import { galleryImages } from "@/lib/gallery-data";
import { programmaticSeoPages } from "@/lib/programmatic-seo-pages";
import { SITE_ROUTES } from "@/lib/site";
import { absoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = SITE_ROUTES.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
    images:
      route.path === "/gallery"
        ? galleryImages.map((image) => absoluteUrl(image.src))
        : undefined,
  }));

  const programmaticRoutes = programmaticSeoPages.map((page) => ({
    url: absoluteUrl(page.path),
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.78,
    images: page.gallery.map((image) => absoluteUrl(image.src)),
  }));

  return [...staticRoutes, ...programmaticRoutes];
}
