import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import FiveBedroomHouseboatPage from "@/components/houseboats/FiveBedroomHouseboatPage";
import { fiveBedroomFaqs as faqs } from "@/components/houseboats/houseboatFaqs";
import {
  createBreadcrumbSchema,
  createFaqSchema,
  createImageObjectSchema,
  createLodgingBusinessSchema,
  generatePageMetadata,
} from "@/lib/seo";

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

const faqJsonLd = createFaqSchema(faqs);
const breadcrumbJsonLd = createBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Houseboats", path: "/houseboats" },
  { name: "5 Bedroom Houseboat", path: "/houseboats/5-bedroom" },
]);
const lodgingJsonLd = createLodgingBusinessSchema({
  name: "5 Bedroom Houseboat — Tranquil Cruise",
  description:
    "A five-bedroom celebration houseboat on the Kerala backwaters in Alappuzha. Includes five private bedrooms, washroom access, large shared lounge, and scenic backwater cruising. Ideal for large groups and celebrations.",
  path: "/houseboats/5-bedroom",
  image: {
    path: "/images/five-bedroom-gallery/WhatsApp_Image_2026-05-14_at_18_04_14.jpeg",
    alt: "5 bedroom houseboat on Kerala backwaters",
    width: 1200,
    height: 630,
  },
  amenities: [
    "5 private bedrooms",
    "Attached washroom access",
    "Large shared lounge and dining area",
    "Backwater cruising",
  ],
});
const imageJsonLd = createImageObjectSchema({
  path: "/images/five-bedroom-gallery/WhatsApp_Image_2026-05-14_at_18_04_14.jpeg",
  alt: "5 bedroom houseboat on Kerala backwaters",
  width: 1200,
  height: 630,
});

export default function FiveBedroomPage() {
  return (
    <>
      <JsonLd data={[faqJsonLd, breadcrumbJsonLd, lodgingJsonLd, imageJsonLd]} />
      <FiveBedroomHouseboatPage />
    </>
  );
}
