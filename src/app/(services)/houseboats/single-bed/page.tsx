import type { Metadata } from "next";
import SingleBedHouseboatPage from "@/components/houseboats/SingleBedHouseboatPage";
import { singleBedFaqs as faqs } from "@/components/houseboats/houseboatFaqs";
import { generatePageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata({
    title: "Single Bed Houseboat | Kerala Backwater Stay | Tranquil Cruise",
    description:
      "Book a single bed houseboat on Kerala's Alleppey backwaters. Private air-conditioned room, attached washroom, deck access, and scenic overnight cruising. Ideal for couples and solo travellers.",
    path: "/houseboats/single-bed",
    keywords: [
      "single bed houseboat Alleppey",
      "couple houseboat Alappuzha",
      "private Kerala houseboat stay",
    ],
    image: {
      url: "/images/single-bed-gallery/exterior-view.jpeg",
      width: 1200,
      height: 630,
      alt: "Single bed houseboat on Kerala backwaters",
    },
  });
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.tranquilcruise.com" },
    { "@type": "ListItem", position: 2, name: "Houseboats", item: "https://www.tranquilcruise.com/houseboats" },
    { "@type": "ListItem", position: 3, name: "Single Bed Houseboat", item: "https://www.tranquilcruise.com/houseboats/single-bed" },
  ],
};

const lodgingJsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "Single Bed Houseboat — Tranquil Cruise",
  description:
    "A private single bedroom houseboat on the Kerala backwaters in Alappuzha. Includes air-conditioned room, attached washroom, deck access, and scenic backwater cruising.",
  url: "https://www.tranquilcruise.com/houseboats/single-bed",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Alappuzha",
    addressRegion: "Kerala",
    addressCountry: "IN",
  },
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Private air-conditioned bedroom", value: true },
    { "@type": "LocationFeatureSpecification", name: "Attached washroom", value: true },
    { "@type": "LocationFeatureSpecification", name: "Upper deck access", value: true },
    { "@type": "LocationFeatureSpecification", name: "Backwater cruising", value: true },
  ],
};

export default function SingleBedPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(lodgingJsonLd) }} />
      <SingleBedHouseboatPage />
    </>
  );
}
