import type { MetadataRoute } from "next";
import { galleryImages } from "@/lib/gallery-data";
import { programmaticSeoPages } from "@/lib/programmatic-seo-pages";
import { SITE_ROUTES } from "@/lib/site";
import { absoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";

const EXCLUDED_PATHS = new Set<string>([
  // Keep redirect-only or duplicate-intent paths out of the sitemap.
  "/experience",
]);

const PRIORITY_OVERRIDES: Record<string, number> = {
  "/alappuzha-houseboat": 0.96,
  "/alleppey-houseboat": 0.94,
  "/houseboats": 0.95,
  "/alappuzha-houseboat-booking": 0.9,
  "/houseboat-in-alappuzha": 0.88,
  "/alappuzha-houseboat-price-guide": 0.88,
  "/alappuzha-houseboat-routes-guide": 0.88,
  "/luxury-houseboat-alappuzha": 0.9,
  "/budget-houseboat-alappuzha": 0.9,
  "/overnight-houseboat-alappuzha": 0.9,
  "/2-bedroom-houseboat-alappuzha": 0.88,
  "/day-cruise-alleppey": 0.86,
  "/honeymoon-houseboat-alleppey": 0.86,
  "/one-bedroom-houseboat-alleppey": 0.86,
  "/shikkara-ride-alleppey": 0.84,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries = [
    ...SITE_ROUTES.map((route) => ({
      path: route.path,
      url: absoluteUrl(route.path),
      lastModified: now,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      images:
        route.path === "/gallery"
          ? galleryImages.map((image) => absoluteUrl(image.src))
          : undefined,
    })),
    ...programmaticSeoPages.map((page) => ({
      path: page.path,
      url: absoluteUrl(page.path),
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: PRIORITY_OVERRIDES[page.path] ?? 0.78,
      images: page.gallery.map((image) => absoluteUrl(image.src)),
    })),
  ];

  const seenUrls = new Set<string>();

  return entries.flatMap(({ path, ...entry }) => {
    if (EXCLUDED_PATHS.has(path) || seenUrls.has(entry.url)) {
      return [];
    }

    seenUrls.add(entry.url);
    return [entry];
  });
}
