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
  createServiceSchema,
  createSpeakableSchema,
  createTouristTripSchema,
  generatePageMetadata,
} from "@/lib/seo";

const service = getServiceBySlug("spa")!;

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata({
    title: "Ayurvedic Spa & Wellness in Alleppey Backwaters",
    description:
      "Explore Ayurvedic spa and wellness experiences near the Alleppey backwaters, with calm Kerala treatments that can complement your stay or cruise.",
    path: "/spa",
    keywords: [
      "Ayurvedic spa Alleppey",
      "wellness Alappuzha",
      "Kerala backwater spa",
    ],
    image: {
      url: "/images/spa-gallery/spa1.webp",
      width: 1200,
      height: 630,
      alt: "Ayurvedic spa and wellness in the Alleppey backwaters",
    },
  });
}

const faqs = getServiceFaqs("spa");

const breadcrumbJsonLd = createBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Spa & Wellness", path: "/spa" },
]);

const serviceJsonLd = createServiceSchema({
  name: "Ayurvedic Spa & Wellness in Alleppey Backwaters",
  description:
    "Ayurvedic spa and wellness experiences near the Kerala backwaters in Alleppey and Alappuzha.",
  path: "/spa",
  serviceType: "Ayurvedic wellness",
});

const imageJsonLd = createImageObjectSchema({
  path: "/images/spa-gallery/spa1.webp",
  alt: "Ayurvedic spa and wellness in the Alleppey backwaters",
  width: 1200,
  height: 630,
});

const touristTripJsonLd = createTouristTripSchema({
  name: "Ayurvedic Wellness Experience in Alleppey",
  description:
    "Ayurvedic wellness and spa time near the Alleppey backwaters for travelers who want calmer Kerala treatments alongside a stay or cruise.",
  path: "/spa",
  image: {
    path: "/images/spa-gallery/spa1.webp",
    alt: "Ayurvedic spa and wellness in the Alleppey backwaters",
    width: 1200,
    height: 630,
  },
  itinerary: ["Alleppey", "Alappuzha", "Kerala Backwaters"],
  touristType: ["Couples", "Wellness travelers", "Slow travelers"],
  keywords: [
    "Ayurvedic spa Alleppey",
    "wellness Alappuzha",
    "Kerala backwater spa",
  ],
});

const speakableJsonLd = createSpeakableSchema({
  path: "/spa",
  name: "Ayurvedic Spa and Wellness in Alleppey",
  description:
    "Ayurvedic spa and wellness near the Alleppey backwaters for calmer, restorative Kerala travel plans.",
  cssSelectors: ["main h1", "main p"],
});

const answerFirstItems = [
  {
    question: "Who is Ayurvedic spa and wellness best for in Alleppey?",
    answer:
      "This is usually best for couples, wellness-focused travelers, and guests who want a calmer layer in the trip rather than another fast-moving sightseeing activity.",
  },
  {
    question: "Can a spa session be combined with a houseboat or room stay?",
    answer:
      "Yes. Spa and wellness sessions usually work best when paired with a room stay, a houseboat plan, or a slower backwater day so the trip feels restorative instead of packed.",
  },
  {
    question: "When is the best time to schedule a spa session?",
    answer:
      "The best time is usually when the treatment can sit comfortably beside the rest of your day. Many guests prefer it after a cruise, before a quieter evening, or as part of a slower stay in Alappuzha.",
  },
];

export default function SpaPage() {
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
      <QuestionAnswerList
        eyebrow="Answer First"
        title="Short answers for guests comparing wellness options."
        intro="These quick answers are here near the top so you can see how spa and wellness fit into an Alleppey trip before opening the full page."
        items={answerFirstItems}
      />
    </>
  );
}
