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

const faqs = getServiceFaqs("spa");

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
