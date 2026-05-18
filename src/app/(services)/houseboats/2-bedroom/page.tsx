import type { Metadata } from "next";
import TwoBedroomHouseboatPage from "@/components/houseboats/TwoBedroomHouseboatPage";
import { twoBedroomFaqs as faqs } from "@/components/houseboats/houseboatFaqs";
import { generatePageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata({
    title: "2 Bedroom Houseboat | Kerala Family Backwater Stay | Tranquil Cruise",
    description:
      "Book a 2 bedroom houseboat on Kerala's Alleppey backwaters. Two private air-conditioned rooms, attached washrooms, indoor lounge, and upper deck. Perfect for families and small groups.",
    path: "/houseboats/2-bedroom",
    keywords: [
      "2 bedroom houseboat Alleppey",
      "family houseboat Alappuzha",
      "Kerala overnight houseboat for families",
    ],
    image: {
      url: "/images/two-bedroom-gallery-v2/WhatsApp_Image_2026-05-04_at_19_44_01.jpeg",
      width: 1200,
      height: 630,
      alt: "2 bedroom houseboat on Kerala backwaters",
    },
  });
}

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
    { "@type": "ListItem", position: 3, name: "2 Bedroom Houseboat", item: "https://www.tranquilcruise.com/houseboats/2-bedroom" },
  ],
};

const lodgingJsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "2 Bedroom Houseboat — Tranquil Cruise",
  description:
    "A two-bedroom family houseboat on the Kerala backwaters in Alappuzha. Includes two air-conditioned rooms, attached washrooms, indoor lounge, deck access, and scenic backwater cruising.",
  url: "https://www.tranquilcruise.com/houseboats/2-bedroom",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Alappuzha",
    addressRegion: "Kerala",
    addressCountry: "IN",
  },
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "2 private air-conditioned bedrooms", value: true },
    { "@type": "LocationFeatureSpecification", name: "2 attached washrooms", value: true },
    { "@type": "LocationFeatureSpecification", name: "Indoor lounge and dining area", value: true },
    { "@type": "LocationFeatureSpecification", name: "Upper deck access", value: true },
    { "@type": "LocationFeatureSpecification", name: "Backwater cruising", value: true },
  ],
};

export default function TwoBedroomPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(lodgingJsonLd) }} />
      <TwoBedroomHouseboatPage />
    </>
  );
}
