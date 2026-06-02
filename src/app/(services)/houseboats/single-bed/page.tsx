import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import SingleBedHouseboatPage from "@/components/houseboats/SingleBedHouseboatPage";
import { singleBedFaqs as faqs } from "@/components/houseboats/houseboatFaqs";
import {
  createBreadcrumbSchema,
  createFaqSchema,
  createImageObjectSchema,
  createLodgingBusinessSchema,
  generatePageMetadata,
} from "@/lib/seo";

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
      alt: "Private single-bedroom houseboat cruising in Alappuzha",
    },
  });
}

const faqJsonLd = createFaqSchema(faqs);
const breadcrumbJsonLd = createBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Houseboats", path: "/houseboats" },
  { name: "Single Bed Houseboat", path: "/houseboats/single-bed" },
]);
const lodgingJsonLd = createLodgingBusinessSchema({
  name: "Single Bed Houseboat — Tranquil Cruise",
  description:
    "A private single bedroom houseboat on the Kerala backwaters in Alappuzha. Includes air-conditioned room, attached washroom, deck access, and scenic backwater cruising.",
  path: "/houseboats/single-bed",
  image: {
    path: "/images/single-bed-gallery/exterior-view.jpeg",
    alt: "Private single-bedroom houseboat cruising in Alappuzha",
    width: 1200,
    height: 630,
  },
  amenities: [
    "Private air-conditioned bedroom",
    "Attached washroom",
    "Upper deck access",
    "Backwater cruising",
  ],
});
const imageJsonLd = createImageObjectSchema({
  path: "/images/single-bed-gallery/exterior-view.jpeg",
  alt: "Private single-bedroom houseboat cruising in Alappuzha",
  width: 1200,
  height: 630,
});

export default function SingleBedPage() {
  return (
    <>
      <JsonLd data={[faqJsonLd, breadcrumbJsonLd, lodgingJsonLd, imageJsonLd]} />
      <SingleBedHouseboatPage />
    </>
  );
}
