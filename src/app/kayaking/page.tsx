import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { getServiceBySlug } from "@/lib/services-data";

const service = getServiceBySlug("kayaking");

export const metadata: Metadata = {
  title: "Kayaking Trails | Tranquil Cruise",
  description:
    "Explore Kerala backwaters by kayak with guided paddling trails, quiet canal routes, and scenic sunrise or sunset sessions in Alleppey.",
  openGraph: {
    title: "Kayaking Trails | Tranquil Cruise",
    description:
      "Active paddling routes through Kerala's quieter backwaters.",
    images: [{ url: "/images/kayaking-card.png", width: 1200, height: 630 }],
  },
};

export default function KayakingPage() {
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
