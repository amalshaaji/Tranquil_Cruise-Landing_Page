import type { Metadata } from "next";
import { QuestionAnswerList } from "@/components/seo/AiAnswerSections";
import ShikkaraExperiencePage from "@/components/services/ShikkaraExperiencePage";
import JsonLd from "@/components/seo/JsonLd";
import { getServiceFaqs } from "@/lib/seo-content";
import {
  createBreadcrumbSchema,
  createFaqSchema,
  createServiceSchema,
  generatePageMetadata,
} from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata({
    title: "Alleppey Shikkara Ride | Private Canal Cruise in Alappuzha",
    description:
      "Book a private Alleppey shikkara ride through Alappuzha canals for village routes, sunset cruising, and a lighter backwater experience than a houseboat.",
    path: "/shikkara",
    keywords: [
      "private shikara ride Alleppey",
      "shikkara ride Alappuzha",
      "Kerala backwater shikara",
      "sunset shikara ride Alleppey",
    ],
    image: {
      url: "/images/shikkara-real.jpg",
      width: 1200,
      height: 630,
      alt: "Shikkara ride through Alappuzha canals",
    },
  });
}

const faqs = getServiceFaqs("shikkara");

const breadcrumbJsonLd = createBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Shikkara Rides", path: "/shikkara" },
]);

const serviceJsonLd = createServiceSchema({
  name: "Private Shikkara Rides in Alleppey",
  description:
    "Private Shikkara rides through the Alleppey backwaters for couples, families, village canal routes, and slower scenic sightseeing.",
  path: "/shikkara",
  serviceType: "Shikkara ride",
});

const answerFirstItems = [
  {
    question: "What is the difference between a houseboat and a shikkara ride?",
    answer:
      "Choose a shikkara if you want a shorter, lighter canal ride through village canals and quieter Alappuzha scenery. Choose a houseboat if you want more comfort, meals, deck space, and a longer route that can open out toward Punnamada Lake or Vembanad Lake.",
  },
  {
    question: "Who is a shikkara ride best for in Alappuzha?",
    answer:
      "A shikkara ride is usually best for couples, small families, and guests who want 1 to 8 hours of calmer sightseeing through village canals without committing to a full houseboat stay. It works especially well when your plan is scenic, local, and easier to fit into one part of the day.",
  },
  {
    question: "What time of day is best for a shikkara ride?",
    answer:
      "Morning and sunset are usually the best times because the weather feels softer and the canal atmosphere is calmer. Sunrise works well for quieter sightseeing, while sunset is often chosen for a more romantic Alleppey backwater mood through village canals and softer open-water edges.",
  },
];

export default function ShikkaraPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={createFaqSchema(faqs)} />
      <ShikkaraExperiencePage />
      <QuestionAnswerList
        eyebrow="Answer First"
        title="Fast answers for travelers comparing shikkara rides."
        intro="These short answers are here near the top so you can understand where a shikkara fits before opening the full ride details."
        items={answerFirstItems}
      />
    </>
  );
}
