import type { Metadata } from "next";
import { getServiceBySlug } from "@/lib/services-data";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { notFound } from "next/navigation";

const service = getServiceBySlug("rooms")!;

export const metadata: Metadata = {
  title: "Rooms & Homestays | Tranquil Cruise",
  description:
    "Waterfront rooms and authentic Kerala homestays. Heritage architecture, home-cooked meals, and personal hosts in Alleppey backwaters.",
  alternates: { canonical: "/rooms" },
  openGraph: {
    title: "Rooms & Homestays | Tranquil Cruise",
    description: "Comfort stays with authentic Kerala charm on the backwaters.",
    url: "https://www.tranquilcruise.com/rooms",
    images: [{ url: "/images/room-card.png", width: 1200, height: 630 }],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.tranquilcruise.com" },
    { "@type": "ListItem", position: 2, name: "Rooms & Homestays", item: "https://www.tranquilcruise.com/rooms" },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "Waterside Rooms — Tranquil Cruise",
  description:
    "Warm waterfront rooms and Kerala homestays with easy backwater access, home-cooked meals, and quiet local hospitality in Alappuzha.",
  url: "https://www.tranquilcruise.com/rooms",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Alappuzha",
    addressRegion: "Kerala",
    addressCountry: "IN",
  },
};

export default function RoomsPage() {
  if (!service) notFound();
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <ServicePageTemplate service={service} />
    </>
  );
}
