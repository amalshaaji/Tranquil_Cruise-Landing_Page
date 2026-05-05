import type { Metadata } from "next";
import { getServiceBySlug } from "@/lib/services-data";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { notFound } from "next/navigation";

const service = getServiceBySlug("rooms")!;

export const metadata: Metadata = {
  title: "Rooms & Homestays | Tranquil Cruise",
  description:
    "Waterfront rooms and authentic Kerala homestays. Heritage architecture, home-cooked meals, and personal hosts in Alleppey backwaters.",
  openGraph: {
    title: "Rooms & Homestays | Tranquil Cruise",
    description:
      "Comfort stays with authentic Kerala charm on the backwaters.",
    images: [{ url: "/images/room-card.png", width: 1200, height: 630 }],
  },
};

export default function RoomsPage() {
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
