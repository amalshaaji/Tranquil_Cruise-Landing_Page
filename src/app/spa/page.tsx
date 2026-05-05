import type { Metadata } from "next";
import { getServiceBySlug } from "@/lib/services-data";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { notFound } from "next/navigation";

const service = getServiceBySlug("spa")!;

export const metadata: Metadata = {
  title: "Spa & Wellness | Tranquil Cruise",
  description:
    "Ayurvedic spa treatments on Kerala backwaters. Traditional therapies, yoga sessions, and wellness packages in Alleppey.",
  openGraph: {
    title: "Spa & Wellness | Tranquil Cruise",
    description:
      "Ayurvedic healing in the heart of the backwaters.",
    images: [{ url: "/images/spa-card.png", width: 1200, height: 630 }],
  },
};

export default function SpaPage() {
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
