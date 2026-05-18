import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import ThreeBedroomHouseboatPage from "@/components/houseboats/ThreeBedroomHouseboatPage";
import { threeBedroomFaqs as faqs } from "@/components/houseboats/houseboatFaqs";
import {
  createBreadcrumbSchema,
  createFaqSchema,
  createImageObjectSchema,
  createLodgingBusinessSchema,
  generatePageMetadata,
} from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata({
    title: "3 Bedroom Houseboat | Kerala Group Backwater Stay | Tranquil Cruise",
    description:
      "Book a 3 bedroom houseboat on Kerala's Alleppey backwaters. Three private bedrooms, indoor lounge, washroom access, and scenic overnight cruising. Ideal for families and groups of 5-9 guests.",
    path: "/houseboats/3-bedroom",
    keywords: [
      "3 bedroom houseboat Alleppey",
      "group houseboat Alappuzha",
      "Kerala houseboat for families and groups",
    ],
    image: {
      url: "/images/three-bedroom-gallery/WhatsApp_Image_2026-05-14_at_18_13_06.jpeg",
      width: 1200,
      height: 630,
      alt: "3 bedroom houseboat on Kerala backwaters",
    },
  });
}

const faqJsonLd = createFaqSchema(faqs);
const breadcrumbJsonLd = createBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Houseboats", path: "/houseboats" },
  { name: "3 Bedroom Houseboat", path: "/houseboats/3-bedroom" },
]);
const lodgingJsonLd = createLodgingBusinessSchema({
  name: "3 Bedroom Houseboat — Tranquil Cruise",
  description:
    "A three-bedroom group houseboat on the Kerala backwaters in Alappuzha. Includes three private bedrooms, washroom access, large indoor lounge, and scenic backwater cruising.",
  path: "/houseboats/3-bedroom",
  image: {
    path: "/images/three-bedroom-gallery/WhatsApp_Image_2026-05-14_at_18_13_06.jpeg",
    alt: "3 bedroom houseboat on Kerala backwaters",
    width: 1200,
    height: 630,
  },
  amenities: [
    "3 private bedrooms",
    "Attached washroom access",
    "Large indoor lounge and common seating",
    "Backwater cruising",
  ],
});
const imageJsonLd = createImageObjectSchema({
  path: "/images/three-bedroom-gallery/WhatsApp_Image_2026-05-14_at_18_13_06.jpeg",
  alt: "3 bedroom houseboat on Kerala backwaters",
  width: 1200,
  height: 630,
});

export default function ThreeBedroomPage() {
  return (
    <>
      <JsonLd data={[faqJsonLd, breadcrumbJsonLd, lodgingJsonLd, imageJsonLd]} />
      <ThreeBedroomHouseboatPage />
    </>
  );
}
