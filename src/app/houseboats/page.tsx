import type { Metadata } from "next";
import { getServiceBySlug } from "@/lib/services-data";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { notFound } from "next/navigation";

const service = getServiceBySlug("houseboats")!;

export const metadata: Metadata = {
  title: "Luxury Houseboats | Tranquil Cruise",
  description:
    "Experience luxury houseboats on Kerala backwaters. Private chef, premium suites, curated routes through Alleppey's serene canals. Book your houseboat stay.",
  alternates: { canonical: "/houseboats" },
  openGraph: {
    title: "Luxury Houseboats | Tranquil Cruise",
    description:
      "Floating palaces on the serene Kerala backwaters with private chef and crew.",
    url: "https://www.tranquilcruise.com/houseboats",
    images: [{ url: "/images/houseboats-card-blue.jpg", width: 1200, height: 630 }],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.tranquilcruise.com" },
    { "@type": "ListItem", position: 2, name: "Houseboats", item: "https://www.tranquilcruise.com/houseboats" },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Luxury Houseboat Stay on Kerala Backwaters",
  description:
    "Private luxury houseboat stays on the Alleppey backwaters in Kerala. Options range from single bedroom intimate stays to 5-bedroom celebration boats for larger groups.",
  url: "https://www.tranquilcruise.com/houseboats",
  provider: {
    "@type": "TravelAgency",
    name: "Tranquil Cruise",
    url: "https://www.tranquilcruise.com",
  },
  areaServed: { "@type": "Place", name: "Alappuzha, Kerala, India" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Houseboat Options",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Single Bed Houseboat", url: "https://www.tranquilcruise.com/houseboats/single-bed" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "2 Bedroom Houseboat", url: "https://www.tranquilcruise.com/houseboats/2-bedroom" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "3 Bedroom Houseboat", url: "https://www.tranquilcruise.com/houseboats/3-bedroom" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "5 Bedroom Houseboat", url: "https://www.tranquilcruise.com/houseboats/5-bedroom" } },
    ],
  },
};

export default function HouseboatsPage() {
  if (!service) notFound();
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <ServicePageTemplate service={service} />
    </>
  );
}
