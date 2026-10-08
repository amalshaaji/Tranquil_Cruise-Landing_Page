import type { Metadata } from "next";
import { site, siteUrl } from "./site";

const ogImage = { url: "/opengraph-image", width: 1200, height: 630, alt: `${site.name} — ${site.tagline}` };

export const absoluteUrl = (path = "/") => `${siteUrl}${path === "/" ? "" : path}`;

/** Title + description + canonical + Open Graph/Twitter for one page. */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: absoluteUrl(path) },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: "en_IN",
      title: `${title} · ${site.name}`,
      description,
      url: absoluteUrl(path),
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} · ${site.name}`,
      description,
      images: [ogImage.url],
    },
  };
}

/** Stable @id so every page's schema points at the same business. */
export const orgId = `${siteUrl}/#organization`;

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "@id": orgId,
  name: site.name,
  url: siteUrl,
  description: site.description,
  email: site.email,
  telephone: site.phone,
  hasMap: site.googleMapsUrl,
  image: absoluteUrl("/opengraph-image"),
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: "IN",
  },
  areaServed: { "@type": "Place", name: "Alappuzha backwaters, Kerala, India" },
  knowsAbout: ["Houseboat stays", "Day cruises", "Shikkara rides", "Backwater kayaking"],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: siteUrl,
  publisher: { "@id": orgId },
  inLanguage: "en-IN",
};

export function breadcrumbSchema(crumbs: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...crumbs].map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  };
}

export function serviceSchema({ name, description, path }: { name: string; description: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: absoluteUrl(path),
    provider: { "@id": orgId },
    areaServed: "Alappuzha, Kerala, India",
  };
}

export function faqSchema(items: Array<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
