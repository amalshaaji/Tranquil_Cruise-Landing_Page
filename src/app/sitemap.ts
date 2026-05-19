import type { MetadataRoute } from "next";
import { galleryImages } from "@/lib/gallery-data";
import { SITE_ROUTES } from "@/lib/site";
import { absoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return SITE_ROUTES.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
    images:
      route.path === "/gallery"
        ? galleryImages.map((image) => absoluteUrl(image.src))
        : undefined,
  }));
}
