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

const service = getServiceBySlug("spa")!;

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata({
    title: "Ayurvedic Spa & Wellness in Alleppey Backwaters",
    description:
      "Explore Ayurvedic spa and wellness experiences near the Alleppey backwaters, with calm Kerala treatments that can complement your stay or cruise.",
    path: "/spa",
    keywords: [
      "Ayurvedic spa Alleppey",
      "wellness Alappuzha",
      "Kerala backwater spa",
    ],
    image: {
      url: "/images/spa-gallery/spa1.webp",
      width: 1200,
      height: 630,
      alt: "Ayurvedic spa and wellness in the Alleppey backwaters",
    },
  });
}

const faqs = [
  {
    question: "What wellness or spa services are available?",
    answer:
      "Spa and wellness experiences can include Ayurvedic massages and slower restorative sessions shaped around your trip timing and preferences.",
  },
  {
    question: "Can spa services be combined with a backwater stay?",
    answer:
      "Yes. Spa time can be paired with a room stay, a houseboat plan, or another backwater experience for a calmer Kerala itinerary.",
  },
];

const breadcrumbJsonLd = createBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Spa & Wellness", path: "/spa" },
]);

const serviceJsonLd = createServiceSchema({
  name: "Ayurvedic Spa & Wellness in Alleppey Backwaters",
  description:
    "Ayurvedic spa and wellness experiences near the Kerala backwaters in Alleppey and Alappuzha.",
  path: "/spa",
  serviceType: "Ayurvedic wellness",
});

export default function SpaPage() {
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
