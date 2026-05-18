import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { getServiceBySlug } from "@/lib/services-data";

const service = getServiceBySlug("kayaking");

export const metadata: Metadata = {
  title: "Backwater Kayaking Trails | Tranquil Cruise",
  description:
    "Explore Kerala backwaters by kayak with guided paddling trails, quiet canal routes, and scenic sunrise or sunset sessions in Alleppey.",
  alternates: { canonical: "/kayaking" },
  openGraph: {
    title: "Backwater Kayaking Trails | Tranquil Cruise",
    description: "Active paddling routes through Kerala's quieter backwaters.",
    url: "https://www.tranquilcruise.com/kayaking",
    images: [{ url: "/images/kayaking-card.jpg", width: 533, height: 800 }],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.tranquilcruise.com" },
    { "@type": "ListItem", position: 2, name: "Backwater Kayaking", item: "https://www.tranquilcruise.com/kayaking" },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Backwater Kayaking Trails — Tranquil Cruise",
  description:
    "Guided kayaking through Kerala's quieter backwater canals in Alappuzha. Sunrise, sunset, and village route options available.",
  url: "https://www.tranquilcruise.com/kayaking",
  provider: {
    "@type": "TravelAgency",
    name: "Tranquil Cruise",
    url: "https://www.tranquilcruise.com",
  },
  areaServed: { "@type": "Place", name: "Alappuzha, Kerala, India" },
};

export default function KayakingPage() {
  if (!service) notFound();
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <ServicePageTemplate service={service} />
    </>
  );
}
