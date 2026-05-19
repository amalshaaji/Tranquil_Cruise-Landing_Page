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

const service = getServiceBySlug("canoe-boats")!;

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata({
    title: "Country Boat Rides in Alleppey | Village Backwater Tours",
    description:
      "Explore village canals, local life, and quieter Kerala backwaters with private country boat rides in Alleppey and Alappuzha.",
    path: "/canoe-boats",
    keywords: [
      "country boat Alleppey",
      "village boat ride Alappuzha",
      "Kerala backwater village tour",
    ],
    image: {
      url: "/images/canoe-card.png",
      width: 1024,
      height: 1536,
      alt: "Country boat ride in Alleppey",
    },
  });
}

const breadcrumbJsonLd = createBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Country Boats", path: "/canoe-boats" },
]);

const serviceJsonLd = createServiceSchema({
  name: "Country Boat Rides in Alleppey",
  description:
    "Private country boat rides through quieter village canals in Alleppey and the Kerala backwaters.",
  path: "/canoe-boats",
  serviceType: "Country boat ride",
});

export default function CanoeBoatsPage() {
  if (!service) notFound();
  const faqs = getServiceFaqs("canoe-boats");
  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={serviceJsonLd} />
      {faqs.length > 0 ? <JsonLd data={createFaqSchema(faqs)} /> : null}
      <ServicePageTemplate service={service} />
    </>
  );
}
