import type { Metadata } from "next";
import { QuestionAnswerList } from "@/components/seo/AiAnswerSections";
import { getServiceBySlug } from "@/lib/services-data";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { notFound } from "next/navigation";
import JsonLd from "@/components/seo/JsonLd";
import { getServiceFaqs } from "@/lib/seo-content";
import {
  createBreadcrumbSchema,
  createFaqSchema,
  createImageObjectSchema,
  createLodgingBusinessSchema,
  createServiceSchema,
  createSpeakableSchema,
  createTouristTripSchema,
  generatePageMetadata,
} from "@/lib/seo";

const service = getServiceBySlug("rooms")!;

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata({
    title: "Backwater Rooms & Homestays in Alleppey | Tranquil Cruise",
    description:
      "Stay in backwater rooms and homestays in Alleppey with calm Alappuzha surroundings, Kerala hospitality, and easy access to houseboats and shikara rides.",
    path: "/rooms",
    keywords: [
      "backwater rooms Alleppey",
      "homestays Alappuzha",
      "rooms near Kerala backwaters",
    ],
    image: {
      url: "/images/room-card.png",
      width: 1200,
      height: 630,
      alt: "Waterside backwater room stay near Alappuzha canals",
    },
  });
}

const faqs = getServiceFaqs("rooms");

const breadcrumbJsonLd = createBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Rooms & Homestays", path: "/rooms" },
]);

const serviceJsonLd = createServiceSchema({
  name: "Backwater Rooms & Homestays in Alleppey",
  description:
    "Rooms and homestays in Alleppey with easy Kerala backwater access and options to combine your stay with cruises or rides.",
  path: "/rooms",
  serviceType: "Backwater stay",
});

const imageJsonLd = createImageObjectSchema({
  path: "/images/room-card.png",
  alt: "Waterside backwater room stay near Alappuzha canals",
  width: 1200,
  height: 630,
});

const lodgingJsonLd = createLodgingBusinessSchema({
  name: "Backwater Rooms & Homestays in Alleppey",
  description:
    "Waterside rooms and homestays in Alleppey and Alappuzha with quieter surroundings and easy access to Kerala backwater experiences.",
  path: "/rooms",
  image: {
    path: "/images/room-card.png",
    alt: "Waterside backwater room stay near Alappuzha canals",
    width: 1200,
    height: 630,
  },
  amenities: ["Air-conditioned rooms", "Backwater setting", "Homestay comfort", "Easy cruise access"],
});

const touristTripJsonLd = createTouristTripSchema({
  name: "Backwater Stay in Alleppey",
  description:
    "A quieter Alleppey stay shaped around backwater rooms and homestays with easy access to houseboats, shikkara rides, and Alappuzha sightseeing.",
  path: "/rooms",
  image: {
    path: "/images/room-card.png",
    alt: "Waterside backwater room stay near Alappuzha canals",
    width: 1200,
    height: 630,
  },
  itinerary: ["Alleppey", "Alappuzha", "Kerala Backwaters"],
  touristType: ["Couples", "Families", "Slow travelers"],
  keywords: [
    "backwater rooms Alleppey",
    "homestays Alappuzha",
    "rooms near Kerala backwaters",
  ],
});

const speakableJsonLd = createSpeakableSchema({
  path: "/rooms",
  name: "Backwater Rooms and Homestays in Alleppey",
  description:
    "Backwater rooms and homestays in Alleppey with calmer surroundings and easy access to cruises and rides.",
  cssSelectors: ["main h1", "main p"],
});

const answerFirstItems = [
  {
    question: "Who should choose a backwater room instead of an overnight houseboat?",
    answer:
      "Choose a backwater room if you want a quieter land-based stay, more flexibility around check-in and sightseeing, or a simpler trip structure than sleeping overnight on a boat.",
  },
  {
    question: "Can a room stay be combined with a houseboat or shikkara ride?",
    answer:
      "Yes. Many guests use a room or homestay as the base for a private houseboat cruise, a shikkara ride, or another Alleppey experience so the trip feels more balanced and less rushed.",
  },
  {
    question: "Who are backwater rooms best for in Alleppey?",
    answer:
      "Backwater rooms are usually best for couples, families, and slower travelers who want calm surroundings near the Alappuzha backwaters without making the entire trip revolve around a full overnight cruise.",
  },
];

export default function RoomsPage() {
  if (!service) notFound();
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd,
          serviceJsonLd,
          imageJsonLd,
          lodgingJsonLd,
          touristTripJsonLd,
          speakableJsonLd,
          createFaqSchema(faqs),
        ]}
      />
      <ServicePageTemplate service={service} />
      <QuestionAnswerList
        eyebrow="Answer First"
        title="Fast answers for travelers comparing backwater stays."
        intro="These short answers are placed high on the page so you can decide whether a room or homestay fits your trip before moving into the full stay details."
        items={answerFirstItems}
      />
    </>
  );
}
