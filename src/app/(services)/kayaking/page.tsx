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

const service = getServiceBySlug("kayaking");

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata({
    title: "Alleppey Kayaking | Guided Kerala Backwater Trails in Alappuzha",
    description:
      "Book guided Alleppey kayaking with beginner-friendly Alappuzha trails, quiet village canals, and sunrise or sunset Kerala backwater paddling routes.",
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
      alt: "Kerala backwater kayaking near Alleppey",
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
    "Guided Kerala kayak trails through quieter backwater canals, village waterways, and scenic Alappuzha paddling routes near Alleppey.",
  path: "/kayaking",
  serviceType: "Kayaking tour",
});

const imageJsonLd = createImageObjectSchema({
  path: "/images/kayaking-card.jpg",
  alt: "Kerala backwater kayaking near Alleppey",
  width: 533,
  height: 800,
});

const touristTripJsonLd = createTouristTripSchema({
  name: "Backwater Kayaking Trail in Alleppey",
  description:
    "Guided backwater kayaking in Alleppey with quieter canals, beginner-friendly pacing, and scenic Kerala paddling routes in Alappuzha.",
  path: "/kayaking",
  image: {
    path: "/images/kayaking-card.jpg",
    alt: "Kerala backwater kayaking near Alleppey",
    width: 533,
    height: 800,
  },
  itinerary: ["Alleppey", "Alappuzha", "Village canals", "Kainakary", "Kerala Backwaters"],
  touristType: ["Couples", "Friends", "Beginners", "Active travelers"],
  keywords: [
    "backwater kayaking Alleppey",
    "kayak trails Alappuzha",
    "guided kayaking Kerala backwaters",
  ],
});

const speakableJsonLd = createSpeakableSchema({
  path: "/kayaking",
  name: "Backwater Kayaking in Alleppey",
  description:
    "Guided kayaking trails in Alleppey with calm canals, scenic routes, and beginner-friendly pacing through quieter Alappuzha waterways.",
  cssSelectors: ["main h1", "main p"],
});

export default function KayakingPage() {
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
          createFaqSchema(faqs),
        ]}
      />
      <ServicePageTemplate service={service} />
    </>
  );
}
