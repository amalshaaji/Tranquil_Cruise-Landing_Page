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

const service = getServiceBySlug("houseboats")!;

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata({
    title: "Luxury Houseboats in Alleppey | Private Kerala Backwater Cruises",
    description:
      "Browse private luxury houseboats in Alleppey with overnight Kerala backwater cruises, family-friendly layouts, curated routes, and personalized planning in Alappuzha.",
    path: "/houseboats",
    keywords: [
      "luxury houseboats Alleppey",
      "private houseboat Alappuzha",
      "Kerala backwater cruise",
      "family houseboat Alleppey",
    ],
    image: {
      url: "/images/houseboats-card-blue.jpg",
      width: 1200,
      height: 630,
      alt: "Luxury houseboat in Alleppey",
    },
  });
}

const faqs = getServiceFaqs("houseboats");

const breadcrumbJsonLd = createBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Houseboats", path: "/houseboats" },
]);

const heroImageJsonLd = createImageObjectSchema({
  path: "/images/houseboats-card-blue.jpg",
  alt: "Luxury houseboat in Alleppey",
  width: 1200,
  height: 630,
});

const serviceJsonLd = {
  ...createServiceSchema({
    name: "Luxury Houseboats in Alleppey",
    description:
      "Private Kerala backwater houseboats in Alleppey with overnight cruising, family layouts, and curated routes in Alappuzha.",
    path: "/houseboats",
    serviceType: "Houseboat stay",
    makesOffer: [
      {
        name: "Single Bed Houseboat",
        path: "/houseboats/single-bed",
      },
      {
        name: "2 Bedroom Houseboat",
        path: "/houseboats/2-bedroom",
      },
      {
        name: "3 Bedroom Houseboat",
        path: "/houseboats/3-bedroom",
      },
      {
        name: "5 Bedroom Houseboat",
        path: "/houseboats/5-bedroom",
      },
    ],
  }),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Houseboat Options",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Single Bed Houseboat", url: "https://www.tranquilcruise.com/houseboats/single-bed" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "2 Bedroom Houseboat", url: "https://www.tranquilcruise.com/houseboats/2-bedroom" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "3 Bedroom Houseboat", url: "https://www.tranquilcruise.com/houseboats/3-bedroom" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "5 Bedroom Houseboat", url: "https://www.tranquilcruise.com/houseboats/5-bedroom" } },
    ],
  },
};

const touristTripJsonLd = createTouristTripSchema({
  name: "Luxury Houseboat Stay in Alleppey",
  description:
    "Private Kerala houseboat stays in Alleppey with overnight cruising, family-friendly layouts, curated routes, and slower backwater experiences.",
  path: "/houseboats",
  image: {
    path: "/images/houseboats-card-blue.jpg",
    alt: "Luxury houseboat in Alleppey",
    width: 1200,
    height: 630,
  },
  itinerary: ["Alleppey", "Alappuzha", "Kuttanad", "Vembanad Lake"],
  touristType: ["Couples", "Families", "Private groups"],
  keywords: [
    "luxury houseboats Alleppey",
    "private houseboat Alappuzha",
    "Kerala backwater cruise",
  ],
});

const speakableJsonLd = createSpeakableSchema({
  path: "/houseboats",
  name: "Luxury Houseboats in Alleppey",
  description:
    "Private Kerala backwater houseboats in Alleppey with overnight cruising and family-friendly layouts.",
  cssSelectors: ["main h1", "main p"],
});

export default function HouseboatsPage() {
  if (!service) notFound();
  return (
    <>
      <JsonLd data={[breadcrumbJsonLd, heroImageJsonLd, serviceJsonLd, touristTripJsonLd, speakableJsonLd, createFaqSchema(faqs)]} />
      <ServicePageTemplate service={service} />
    </>
  );
}
