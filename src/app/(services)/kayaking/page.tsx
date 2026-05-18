import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { getServiceBySlug } from "@/lib/services-data";
import JsonLd from "@/components/seo/JsonLd";
import { getServiceFaqs } from "@/lib/seo-content";
import {
  createBreadcrumbSchema,
  createFaqSchema,
  createServiceSchema,
  generatePageMetadata,
} from "@/lib/seo";

const service = getServiceBySlug("kayaking");

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata({
    title: "Backwater Kayaking in Alleppey | Guided Kerala Kayak Trails",
    description:
      "Join guided backwater kayaking in Alleppey with beginner-friendly Kerala kayak trails, quiet canals, and sunrise or sunset paddling routes in Alappuzha.",
    path: "/kayaking",
    keywords: [
      "backwater kayaking Alleppey",
      "kayak trails Alappuzha",
      "guided kayaking Kerala backwaters",
    ],
    image: {
      url: "/images/kayaking-card.jpg",
      width: 533,
      height: 800,
      alt: "Guided kayaking in the Alleppey backwaters",
    },
  });
}

const faqs = getServiceFaqs("kayaking");

const breadcrumbJsonLd = createBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Kayaking", path: "/kayaking" },
]);

const serviceJsonLd = createServiceSchema({
  name: "Backwater Kayaking in Alleppey",
  description:
    "Guided Kerala kayak trails through quieter backwater canals in Alleppey and Alappuzha.",
  path: "/kayaking",
  serviceType: "Kayaking tour",
});

export default function KayakingPage() {
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
