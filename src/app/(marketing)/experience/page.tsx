import type { Metadata } from "next";
import ListingsClient from "@/components/listings/ListingsClient";
import { SITE_URL } from "@/lib/site";
import JsonLd from "@/components/seo/JsonLd";
import {
  createBreadcrumbSchema,
  generatePageMetadata,
} from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata({
    title: "Experience Gallery | Alleppey Backwaters | Tranquil Cruise",
    description:
      "Browse the Tranquil Cruise gallery of Alleppey houseboats, Shikara rides, kayaking, country boats, rooms, and Kerala backwater moments.",
    path: "/experience",
  });
}

const breadcrumbJsonLd = createBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Experience Gallery", path: "/experience" },
]);

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
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={collectionPageJsonLd} />
      <ListingsClient />
    </>
  );
}
