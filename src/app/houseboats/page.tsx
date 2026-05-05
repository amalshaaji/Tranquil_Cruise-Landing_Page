import type { Metadata } from "next";
import { getServiceBySlug } from "@/lib/services-data";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { notFound } from "next/navigation";

const service = getServiceBySlug("houseboats")!;

export const metadata: Metadata = {
  title: "Luxury Houseboats | Tranquil Cruise",
  description:
    "Experience luxury houseboats on Kerala backwaters. Private chef, premium suites, curated routes through Alleppey's serene canals. Book your houseboat stay.",
  openGraph: {
    title: "Luxury Houseboats | Tranquil Cruise",
    description:
      "Floating palaces on the serene Kerala backwaters with private chef and crew.",
    images: [{ url: "/images/houseboats-card-blue.jpg", width: 1200, height: 630 }],
  },
};

export default function HouseboatsPage() {
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
