import type { Metadata } from "next";
import ShikkaraExperiencePage from "@/components/services/ShikkaraExperiencePage";

export const metadata: Metadata = {
  title: "Shikkara Rides | Tranquil Cruise",
  description:
    "Romantic Shikkara boat rides through Kerala's scenic backwater canals. Sunset rides, village tours, and heritage boat experiences in Alleppey.",
  alternates: { canonical: "/shikkara" },
  openGraph: {
    title: "Shikkara Rides | Tranquil Cruise",
    description:
      "Romantic boat rides through Kerala's most scenic canals.",
    url: "https://www.tranquilcruise.com/shikkara",
    images: [{ url: "/images/shikkara-real.jpg", width: 1200, height: 630 }],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.tranquilcruise.com" },
    { "@type": "ListItem", position: 2, name: "Shikkara Rides", item: "https://www.tranquilcruise.com/shikkara" },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Shikkara Rides on Kerala Backwaters",
  description:
    "Scenic Shikkara boat rides through Kerala's backwater canals in Alappuzha. Ideal for couples, families, and sunset cruising.",
  url: "https://www.tranquilcruise.com/shikkara",
  provider: {
    "@type": "TravelAgency",
    name: "Tranquil Cruise",
    url: "https://www.tranquilcruise.com",
  },
  areaServed: { "@type": "Place", name: "Alappuzha, Kerala, India" },
};

export default function ShikkaraPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <ShikkaraExperiencePage />
    </>
  );
}
