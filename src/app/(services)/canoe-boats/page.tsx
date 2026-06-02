import type { Metadata } from "next";
import { getServiceBySlug } from "@/lib/services-data";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { notFound } from "next/navigation";
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
      alt: "Open country boat ride through village canals in Alappuzha",
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

const imageJsonLd = createImageObjectSchema({
  path: "/images/canoe-card.png",
  alt: "Open country boat ride through village canals in Alappuzha",
  width: 1024,
  height: 1536,
});

const touristTripJsonLd = createTouristTripSchema({
  name: "Village Country Boat Ride in Alleppey",
  description:
    "Private country boat rides in Alleppey through quieter village canals, local backwater scenery, and slower Alappuzha routes.",
  path: "/canoe-boats",
  image: {
    path: "/images/canoe-card.png",
    alt: "Open country boat ride through village canals in Alappuzha",
    width: 1024,
    height: 1536,
  },
  itinerary: ["Alleppey", "Alappuzha", "Village canals", "Kerala Backwaters"],
  touristType: ["Couples", "Families", "Slow travelers"],
  keywords: [
    "country boat Alleppey",
    "village boat ride Alappuzha",
    "Kerala backwater village tour",
  ],
});

const speakableJsonLd = createSpeakableSchema({
  path: "/canoe-boats",
  name: "Country Boat Rides in Alleppey",
  description:
    "Private country boat rides in Alleppey for village canals, local scenery, and quieter Kerala backwater routes.",
  cssSelectors: ["main h1", "main p"],
});

export default function CanoeBoatsPage() {
  if (!service) notFound();
  const faqs = getServiceFaqs("canoe-boats");
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
