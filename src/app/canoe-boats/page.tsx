import type { Metadata } from "next";
import { getServiceBySlug } from "@/lib/services-data";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { notFound } from "next/navigation";

const service = getServiceBySlug("canoe-boats")!;

export const metadata: Metadata = {
  title: "Country Boats | Tranquil Cruise",
  description:
    "Explore Kerala's hidden backwater villages by country boat. Open boat experiences, birdwatching routes, and village immersion in Alleppey.",
  openGraph: {
    title: "Country Boats | Tranquil Cruise",
    description:
      "Paddle through untouched backwater villages in Kerala.",
    images: [
      { url: "/images/canoe-card.png", width: 1024, height: 1536 },
    ],
  },
};

export default function CanoeBoatsPage() {
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
