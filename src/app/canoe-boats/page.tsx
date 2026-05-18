import type { Metadata } from "next";
import { getServiceBySlug } from "@/lib/services-data";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { notFound } from "next/navigation";

const service = getServiceBySlug("canoe-boats")!;

export const metadata: Metadata = {
  title: "Country Boats | Tranquil Cruise",
  description:
    "Explore Kerala's hidden backwater villages by country boat. Open boat experiences, birdwatching routes, and village immersion in Alleppey.",
  alternates: { canonical: "/canoe-boats" },
  openGraph: {
    title: "Country Boats | Tranquil Cruise",
    description: "Paddle through untouched backwater villages in Kerala.",
    url: "https://www.tranquilcruise.com/canoe-boats",
    images: [{ url: "/images/canoe-card.png", width: 1024, height: 1536 }],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.tranquilcruise.com" },
    { "@type": "ListItem", position: 2, name: "Village Country Boats", item: "https://www.tranquilcruise.com/canoe-boats" },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Village Country Boat Rides — Tranquil Cruise",
  description:
    "Open country boat rides through Kerala's backwater village canals in Alappuzha. Birdwatching, village immersion, and intimate waterway exploration.",
  url: "https://www.tranquilcruise.com/canoe-boats",
  provider: {
    "@type": "TravelAgency",
    name: "Tranquil Cruise",
    url: "https://www.tranquilcruise.com",
  },
  areaServed: { "@type": "Place", name: "Alappuzha, Kerala, India" },
};

export default function CanoeBoatsPage() {
  if (!service) notFound();
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <ServicePageTemplate service={service} />
    </>
  );
}
