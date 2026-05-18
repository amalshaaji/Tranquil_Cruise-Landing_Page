import type { Metadata } from "next";
import { getServiceBySlug } from "@/lib/services-data";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { notFound } from "next/navigation";
import JsonLd from "@/components/seo/JsonLd";
import {
  createBreadcrumbSchema,
  createFaqSchema,
  createImageObjectSchema,
  createServiceSchema,
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

const faqs = [
  {
    question: "How much does a private houseboat in Alleppey cost?",
    answer:
      "Pricing depends on your travel dates, boat size, route, and whether you want a day cruise or an overnight stay. Ask Tranquil Cruise for current houseboat availability and rates.",
  },
  {
    question: "What is included in a Tranquil Cruise houseboat stay?",
    answer:
      "A typical stay includes the private houseboat, crew, cruising time, bedroom access, and hospitality arranged around the experience you choose.",
  },
  {
    question: "Which is better: houseboat or shikara ride?",
    answer:
      "Choose a houseboat if you want more comfort, privacy, and time on the water. Choose a shikara ride if you want a shorter and more intimate canal experience.",
  },
  {
    question: "Is the houseboat suitable for families?",
    answer:
      "Yes. Multi-bedroom houseboats are well suited to families and private groups who want more space and a slower Alleppey backwater stay.",
  },
  {
    question: "Where does the cruise start?",
    answer:
      "Cruise starting points are arranged in the Alappuzha area and confirmed with your route and boat selection at booking time.",
  },
];

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

export default function HouseboatsPage() {
  if (!service) notFound();
  return (
    <>
      <JsonLd data={[breadcrumbJsonLd, heroImageJsonLd, serviceJsonLd, touristTripJsonLd, createFaqSchema(faqs)]} />
      <ServicePageTemplate service={service} />
    </>
  );
}
