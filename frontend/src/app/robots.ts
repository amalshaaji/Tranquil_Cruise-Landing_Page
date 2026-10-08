import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";
import { siteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  // Preview deployments get a *.vercel.app URL; keep them out of search results.
  const isProd = process.env.VERCEL_ENV ? process.env.VERCEL_ENV === "production" : true;
  return isProd
    ? {
        rules: { userAgent: "*", allow: "/", disallow: ["/api/"] },
        sitemap: absoluteUrl("/sitemap.xml"),
        host: siteUrl,
      }
    : { rules: { userAgent: "*", disallow: "/" } };
}
