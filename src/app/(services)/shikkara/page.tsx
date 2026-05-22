import type { Metadata } from "next";
import ShikkaraExperiencePage from "@/components/services/ShikkaraExperiencePage";
import JsonLd from "@/components/seo/JsonLd";
import { getServiceFaqs } from "@/lib/seo-content";
import {
  createBreadcrumbSchema,
  createFaqSchema,
  createServiceSchema,
  generatePageMetadata,
} from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata({
    title: "Private Shikkara Rides in Alleppey | Tranquil Cruise",
    description:
      "Book a private Shikkara ride in Alleppey for scenic Kerala backwater canals, village routes, and calm sunrise or sunset cruising in Alappuzha.",
    path: "/shikkara",
    keywords: [
      "private shikara ride Alleppey",
      "shikkara ride Alappuzha",
      "Kerala backwater shikara",
      "sunset shikara ride Alleppey",
    ],
    image: {
      url: "/images/shikkara-real.jpg",
      width: 1200,
      height: 630,
      alt: "Private shikara ride in the Alleppey backwaters",
    },
  });
}

const faqs = getServiceFaqs("shikkara");

const breadcrumbJsonLd = createBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Shikkara Rides", path: "/shikkara" },
]);

const serviceJsonLd = createServiceSchema({
  name: "Private Shikkara Rides in Alleppey",
  description:
    "Private Shikkara rides through the Alleppey backwaters for couples, families, village canal routes, and slower scenic sightseeing.",
  path: "/shikkara",
  serviceType: "Shikkara ride",
});

export default function ShikkaraPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={createFaqSchema(faqs)} />
      <ShikkaraExperiencePage />
    </>
  );
}
