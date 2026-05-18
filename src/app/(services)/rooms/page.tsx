import type { Metadata } from "next";
import { getServiceBySlug } from "@/lib/services-data";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { notFound } from "next/navigation";
import JsonLd from "@/components/seo/JsonLd";
import { getServiceFaqs } from "@/lib/seo-content";
import {
  createBreadcrumbSchema,
  createFaqSchema,
  createServiceSchema,
  generatePageMetadata,
} from "@/lib/seo";

const service = getServiceBySlug("rooms")!;

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata({
    title: "Backwater Rooms & Homestays in Alleppey | Tranquil Cruise",
    description:
      "Stay in backwater rooms and homestays in Alleppey with calm Alappuzha surroundings, Kerala hospitality, and easy access to houseboats and shikara rides.",
    path: "/rooms",
    keywords: [
      "backwater rooms Alleppey",
      "homestays Alappuzha",
      "rooms near Kerala backwaters",
    ],
    image: {
      url: "/images/room-card.png",
      width: 1200,
      height: 630,
      alt: "Backwater rooms and homestays in Alleppey",
    },
  });
}

const faqs = getServiceFaqs("rooms");

const breadcrumbJsonLd = createBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Rooms & Homestays", path: "/rooms" },
]);

const serviceJsonLd = createServiceSchema({
  name: "Backwater Rooms & Homestays in Alleppey",
  description:
    "Rooms and homestays in Alleppey with easy Kerala backwater access and options to combine your stay with cruises or rides.",
  path: "/rooms",
  serviceType: "Backwater stay",
});

export default function RoomsPage() {
  if (!service) notFound();
  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={createFaqSchema(faqs)} />
      <ServicePageTemplate service={service} />
    </>
  );
}
