import type { Metadata } from "next";
import ThreeBedroomHouseboatPage from "@/components/houseboats/ThreeBedroomHouseboatPage";
import { threeBedroomFaqs as faqs } from "@/components/houseboats/houseboatFaqs";

export const metadata: Metadata = {
  title: "3 Bedroom Houseboat | Kerala Group Backwater Stay | Tranquil Cruise",
  description:
    "Book a 3 bedroom houseboat on Kerala's Alleppey backwaters. Three private bedrooms, indoor lounge, washroom access, and scenic overnight cruising. Ideal for families and groups of 5-9 guests.",
  alternates: { canonical: "/houseboats/3-bedroom" },
  openGraph: {
    title: "3 Bedroom Houseboat | Kerala Group Backwater Stay | Tranquil Cruise",
    description:
      "Three-bedroom family houseboat on Kerala's backwaters. Spacious layout with private rooms, indoor lounge, and scenic overnight cruising in Alleppey.",
    url: "https://www.tranquilcruise.com/houseboats/3-bedroom",
    images: [
      {
        url: "/images/three-bedroom-gallery/WhatsApp_Image_2026-05-14_at_18_13_06.jpeg",
        width: 1200,
        height: 630,
        alt: "3 bedroom houseboat on Kerala backwaters",
      },
    ],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.tranquilcruise.com" },
    { "@type": "ListItem", position: 2, name: "Houseboats", item: "https://www.tranquilcruise.com/houseboats" },
    { "@type": "ListItem", position: 3, name: "3 Bedroom Houseboat", item: "https://www.tranquilcruise.com/houseboats/3-bedroom" },
  ],
};

const lodgingJsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "3 Bedroom Houseboat — Tranquil Cruise",
  description:
    "A three-bedroom group houseboat on the Kerala backwaters in Alappuzha. Includes three private bedrooms, washroom access, large indoor lounge, and scenic backwater cruising.",
  url: "https://www.tranquilcruise.com/houseboats/3-bedroom",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Alappuzha",
    addressRegion: "Kerala",
    addressCountry: "IN",
  },
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "3 private bedrooms", value: true },
    { "@type": "LocationFeatureSpecification", name: "Attached washroom access", value: true },
    { "@type": "LocationFeatureSpecification", name: "Large indoor lounge and common seating", value: true },
    { "@type": "LocationFeatureSpecification", name: "Backwater cruising", value: true },
  ],
};

export default function ThreeBedroomPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(lodgingJsonLd) }} />
      <ThreeBedroomHouseboatPage />
    </>
  );
}
