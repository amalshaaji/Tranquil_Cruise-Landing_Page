import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import TwoBedroomHouseboatPage from "@/components/houseboats/TwoBedroomHouseboatPage";
import { twoBedroomFaqs as faqs } from "@/components/houseboats/houseboatFaqs";
import {
  createBreadcrumbSchema,
  createFaqSchema,
  createImageObjectSchema,
  createLodgingBusinessSchema,
  generatePageMetadata,
} from "@/lib/seo";

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

const faqJsonLd = createFaqSchema(faqs);
const breadcrumbJsonLd = createBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Houseboats", path: "/houseboats" },
  { name: "2 Bedroom Houseboat", path: "/houseboats/2-bedroom" },
]);
const lodgingJsonLd = createLodgingBusinessSchema({
  name: "2 Bedroom Houseboat — Tranquil Cruise",
  description:
    "A two-bedroom family houseboat on the Kerala backwaters in Alappuzha. Includes two air-conditioned rooms, attached washrooms, indoor lounge, deck access, and scenic backwater cruising.",
  path: "/houseboats/2-bedroom",
  image: {
    path: "/images/two-bedroom-gallery-v2/WhatsApp_Image_2026-05-04_at_19_44_01.jpeg",
    alt: "2 bedroom houseboat on Kerala backwaters",
    width: 1200,
    height: 630,
  },
  amenities: [
    "2 private air-conditioned bedrooms",
    "2 attached washrooms",
    "Indoor lounge and dining area",
    "Upper deck access",
    "Backwater cruising",
  ],
});
const imageJsonLd = createImageObjectSchema({
  path: "/images/two-bedroom-gallery-v2/WhatsApp_Image_2026-05-04_at_19_44_01.jpeg",
  alt: "2 bedroom houseboat on Kerala backwaters",
  width: 1200,
  height: 630,
});

export default function TwoBedroomPage() {
  return (
    <>
      <JsonLd data={[faqJsonLd, breadcrumbJsonLd, lodgingJsonLd, imageJsonLd]} />
      <TwoBedroomHouseboatPage />
    </>
  );
}
