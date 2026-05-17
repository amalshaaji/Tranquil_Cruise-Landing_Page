import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { getServiceBySlug } from "@/lib/services-data";

const service = getServiceBySlug("kayaking");

export const metadata: Metadata = {
  title: "Backwater Kayaking Trails | Tranquil Cruise",
  description:
    "Explore Kerala backwaters by kayak with guided paddling trails, quiet canal routes, and scenic sunrise or sunset sessions in Alleppey.",
  openGraph: {
    title: "Backwater Kayaking Trails | Tranquil Cruise",
    description:
      "Active paddling routes through Kerala's quieter backwaters.",
    images: [
      { url: "/images/kayaking-card.jpg", width: 533, height: 800 },
    ],
  },
};

export default function KayakingPage() {
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
