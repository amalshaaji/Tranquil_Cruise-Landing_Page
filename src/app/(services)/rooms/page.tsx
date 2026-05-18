import type { Metadata } from "next";
import { getServiceBySlug } from "@/lib/services-data";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { notFound } from "next/navigation";
import JsonLd from "@/components/seo/JsonLd";
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

const faqs = [
  {
    question: "Are rooms near the Alleppey backwaters available?",
    answer:
      "Yes. Tranquil Cruise can help arrange rooms and homestays in the Alappuzha area for guests who want a stay close to the backwaters.",
  },
  {
    question: "Can I combine a room stay with a houseboat or shikara ride?",
    answer:
      "Yes. A room stay can be paired with a houseboat cruise, a Shikara ride, or another backwater activity depending on how you want to pace the trip.",
  },
];

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
