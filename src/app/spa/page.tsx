import type { Metadata } from "next";
import { getServiceBySlug } from "@/lib/services-data";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { notFound } from "next/navigation";

const service = getServiceBySlug("spa")!;

export const metadata: Metadata = {
  title: "Spa & Wellness | Tranquil Cruise",
  description:
    "Ayurvedic spa treatments on Kerala backwaters. Traditional therapies, yoga sessions, and wellness packages in Alleppey.",
  alternates: { canonical: "/spa" },
  openGraph: {
    title: "Spa & Wellness | Tranquil Cruise",
    description: "Ayurvedic healing in the heart of the backwaters.",
    url: "https://www.tranquilcruise.com/spa",
    images: [{ url: "/images/spa-gallery/spa1.webp", width: 1200, height: 630 }],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.tranquilcruise.com" },
    { "@type": "ListItem", position: 2, name: "Spa & Wellness", item: "https://www.tranquilcruise.com/spa" },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: "Ayurvedic Spa — Tranquil Cruise",
  description:
    "Traditional Ayurvedic spa treatments and wellness rituals on the Kerala backwaters in Alappuzha.",
  url: "https://www.tranquilcruise.com/spa",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Alappuzha",
    addressRegion: "Kerala",
    addressCountry: "IN",
  },
};

export default function SpaPage() {
  if (!service) notFound();
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <ServicePageTemplate service={service} />
    </>
  );
}
