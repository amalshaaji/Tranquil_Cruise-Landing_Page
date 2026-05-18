import type { Metadata } from "next";
import ListingsClient from "@/components/listings/ListingsClient";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Experience Gallery | Kerala Backwaters | Tranquil Cruise",
  description:
    "Browse the Tranquil Cruise experience gallery — houseboats, Shikkara rides, kayaking, spa, and rooms on Kerala's scenic Alleppey backwaters.",
  alternates: { canonical: "/experience" },
  openGraph: {
    title: "Experience Gallery | Kerala Backwaters | Tranquil Cruise",
    description:
      "Visual gallery of houseboat stays, canal rides, and backwater experiences in Alleppey, Kerala.",
    url: "https://www.tranquilcruise.com/experience",
    images: [{ url: "/images/home-backwater-houseboats.jpg", width: 1200, height: 630 }],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Experience Gallery", item: `${SITE_URL}/experience` },
  ],
};

const collectionPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Tranquil Cruise Experience Gallery",
  description:
    "A guest-led gallery of Kerala backwater moments across houseboats, Shikkara rides, kayaking, spa, and waterside stays.",
  url: `${SITE_URL}/experience`,
  isPartOf: {
    "@type": "WebSite",
    name: "Tranquil Cruise",
    url: SITE_URL,
  },
};

export default function ExperiencePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageJsonLd) }} />
      <ListingsClient />
    </>
  );
}
