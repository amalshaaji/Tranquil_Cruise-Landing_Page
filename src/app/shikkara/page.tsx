import type { Metadata } from "next";
import { getServiceBySlug } from "@/lib/services-data";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { notFound } from "next/navigation";

const service = getServiceBySlug("shikkara")!;

export const metadata: Metadata = {
  title: "Shikkara Rides | Tranquil Cruise",
  description:
    "Romantic Shikkara boat rides through Kerala's scenic backwater canals. Sunset rides, village tours, and heritage boat experiences in Alleppey.",
  openGraph: {
    title: "Shikkara Rides | Tranquil Cruise",
    description:
      "Romantic boat rides through Kerala's most scenic canals.",
    images: [{ url: "/images/shikkara-real.png", width: 1200, height: 630 }],
  },
};

export default function ShikkaraPage() {
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
