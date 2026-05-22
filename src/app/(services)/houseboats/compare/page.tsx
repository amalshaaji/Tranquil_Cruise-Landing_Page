import type { Metadata } from "next";
import CompareHouseboatsPage from "@/components/houseboats/CompareHouseboatsPage";
import JsonLd from "@/components/seo/JsonLd";
import {
  createBreadcrumbSchema,
  createImageObjectSchema,
  generatePageMetadata,
} from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata({
    title: "Compare Houseboats in Alleppey | Price, Features, and Group Fit",
    description:
      "Compare single-bedroom, 2-bedroom, 3-bedroom, and 5-bedroom houseboats in Alleppey by price guidance, guest fit, features, and stay style before you book.",
    path: "/houseboats/compare",
    keywords: [
      "compare Alleppey houseboats",
      "houseboat price comparison Alappuzha",
      "2 bedroom vs 3 bedroom houseboat",
      "best houseboat for family in Alleppey",
    ],
    image: {
      url: "/images/houseboats-card-blue.jpg",
      width: 1200,
      height: 630,
      alt: "Compare houseboats in Alleppey",
    },
  });
}

const breadcrumbJsonLd = createBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Houseboats", path: "/houseboats" },
  { name: "Compare Houseboats", path: "/houseboats/compare" },
]);

const imageJsonLd = createImageObjectSchema({
  path: "/images/houseboats-card-blue.jpg",
  alt: "Compare houseboats in Alleppey",
  width: 1200,
  height: 630,
});

export default function CompareHouseboatsRoute() {
  return (
    <>
      <JsonLd data={[breadcrumbJsonLd, imageJsonLd]} />
      <CompareHouseboatsPage />
    </>
  );
}
