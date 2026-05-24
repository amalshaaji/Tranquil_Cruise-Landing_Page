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
    title: "Private Shikkara Rides in Alleppey | Tranquil Cruise",
    description:
      "Book a private Shikkara ride in Alleppey for scenic Kerala backwater canals, village routes, and calm sunrise or sunset cruising in Alappuzha.",
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
      alt: "Private shikara ride in the Alleppey backwaters",
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
    question: "Houseboat vs shikkara in Alleppey: which should you choose?",
    answer:
      "Choose a shikkara if you want a shorter, lighter, and more affordable canal ride with a closer local feel. Choose a houseboat if you want more comfort, onboard meals, and a longer Kerala backwaters experience.",
  },
  {
    question: "Who is a shikkara ride best for in Alappuzha?",
    answer:
      "A shikkara ride is usually best for couples, small families, and guests who want 1 to 3 hours of calmer sightseeing through village canals without committing to a full houseboat stay.",
  },
];

export default function ShikkaraPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={createFaqSchema(faqs)} />
      <QuestionAnswerList
        eyebrow="Answer First"
        title="Fast answers for travelers comparing shikkara rides."
        intro="These short answers are here near the top so you can understand where a shikkara fits before opening the full ride details."
        items={answerFirstItems}
      />
      <ShikkaraExperiencePage />
    </>
  );
}
