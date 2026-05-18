import type { Metadata } from "next";
import FiveBedroomHouseboatPage from "@/components/houseboats/FiveBedroomHouseboatPage";
import { fiveBedroomFaqs as faqs } from "@/components/houseboats/houseboatFaqs";
import { generatePageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata({
    title: "5 Bedroom Houseboat | Kerala Celebration Backwater Stay | Tranquil Cruise",
    description:
      "Book a 5 bedroom houseboat on Kerala's Alleppey backwaters. Five private bedrooms, large shared lounge, washroom access, and scenic overnight cruising. Perfect for large families, reunions, and celebrations of 8-14 guests.",
    path: "/houseboats/5-bedroom",
    keywords: [
      "5 bedroom houseboat Alleppey",
      "large group houseboat Alappuzha",
      "celebration houseboat Kerala",
    ],
    image: {
      url: "/images/five-bedroom-gallery/WhatsApp_Image_2026-05-14_at_18_04_14.jpeg",
      width: 1200,
      height: 630,
      alt: "5 bedroom houseboat on Kerala backwaters",
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
    { "@type": "ListItem", position: 3, name: "5 Bedroom Houseboat", item: "https://www.tranquilcruise.com/houseboats/5-bedroom" },
  ],
};

const lodgingJsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "5 Bedroom Houseboat — Tranquil Cruise",
  description:
    "A five-bedroom celebration houseboat on the Kerala backwaters in Alappuzha. Includes five private bedrooms, washroom access, large shared lounge, and scenic backwater cruising. Ideal for large groups and celebrations.",
  url: "https://www.tranquilcruise.com/houseboats/5-bedroom",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Alappuzha",
    addressRegion: "Kerala",
    addressCountry: "IN",
  },
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "5 private bedrooms", value: true },
    { "@type": "LocationFeatureSpecification", name: "Attached washroom access", value: true },
    { "@type": "LocationFeatureSpecification", name: "Large shared lounge and dining area", value: true },
    { "@type": "LocationFeatureSpecification", name: "Backwater cruising", value: true },
  ],
};

export default function FiveBedroomPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(lodgingJsonLd) }} />
      <FiveBedroomHouseboatPage />
    </>
  );
}
