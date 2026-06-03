import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { getServiceBySlug } from "@/lib/services-data";
import JsonLd from "@/components/seo/JsonLd";
import { getServiceFaqs } from "@/lib/seo-content";
import {
  createBreadcrumbSchema,
  createFaqSchema,
  createImageObjectSchema,
  createServiceSchema,
  createSpeakableSchema,
  createTouristTripSchema,
  generatePageMetadata,
} from "@/lib/seo";

const service = getServiceBySlug("speed-boat");
const faqs = getServiceFaqs("speed-boat");

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata({
    title: "Speed Boat Ride in Alleppey | Private Fast Backwater Rides in Alappuzha",
    description:
      "Book a private speed boat ride in Alleppey for faster open-water sightseeing, breezier lake views, and shorter thrill-led backwater rides in Alappuzha.",
    path: "/speed-boat",
    keywords: [
      "speed boat ride Alleppey",
      "private speed boat Alappuzha",
      "fast boat ride Kerala backwaters",
    ],
    image: {
      url: "/images/speed-boat/speed-boat-sunset.jpg",
      width: 1200,
      height: 900,
      alt: "Private speed boat ride on the open Alleppey backwaters",
    },
  });
}

const breadcrumbJsonLd = createBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Speed Boat", path: "/speed-boat" },
]);

const serviceJsonLd = createServiceSchema({
  name: "Private Speed Boat Ride in Alleppey",
  description:
    "Private speed boat rides in Alleppey for faster backwater sightseeing, open-water views, and shorter thrill-led Alappuzha routes.",
  path: "/speed-boat",
  serviceType: "Speed boat ride",
});

const imageJsonLd = createImageObjectSchema({
  path: "/images/speed-boat/speed-boat-sunset.jpg",
  alt: "Private speed boat ride on the open Alleppey backwaters",
  width: 1200,
  height: 900,
});

const touristTripJsonLd = createTouristTripSchema({
  name: "Private Speed Boat Ride in Alleppey",
  description:
    "A private fast backwater ride in Alleppey and Alappuzha with open-water sightseeing, flexible timing, and a more energetic Kerala backwaters pace.",
  path: "/speed-boat",
  image: {
    path: "/images/speed-boat/speed-boat-sunset.jpg",
    alt: "Private speed boat ride on the open Alleppey backwaters",
    width: 1200,
    height: 900,
  },
  itinerary: ["Alleppey", "Alappuzha", "Open backwaters", "Vembanad-side stretches"],
  touristType: ["Couples", "Friends", "Families", "Short-trip travelers"],
  keywords: [
    "speed boat ride Alleppey",
    "private speed boat Alappuzha",
    "fast boat ride Kerala backwaters",
  ],
});

const speakableJsonLd = createSpeakableSchema({
  path: "/speed-boat",
  name: "Speed Boat Ride in Alleppey",
  description:
    "Private speed boat rides in Alleppey for faster open-water sightseeing, shorter ride windows, and breezier Alappuzha backwater views.",
  cssSelectors: ["main h1", "main p"],
});

export default function SpeedBoatPage() {
  if (!service) notFound();
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd,
          serviceJsonLd,
          imageJsonLd,
          touristTripJsonLd,
          speakableJsonLd,
          ...(faqs.length > 0 ? [createFaqSchema(faqs)] : []),
        ]}
      />
      <ServicePageTemplate service={service} />
    </>
  );
}
