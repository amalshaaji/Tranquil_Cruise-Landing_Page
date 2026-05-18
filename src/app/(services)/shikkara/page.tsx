import type { Metadata } from "next";
import ShikkaraExperiencePage from "@/components/services/ShikkaraExperiencePage";
import JsonLd from "@/components/seo/JsonLd";
import {
  createBreadcrumbSchema,
  createFaqSchema,
  createServiceSchema,
  generatePageMetadata,
} from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata({
    title: "Private Shikara Rides in Alleppey | Tranquil Cruise",
    description:
      "Book a private Shikara or Shikkara ride in Alleppey for scenic Kerala backwater canals, village routes, and calm sunrise or sunset cruising in Alappuzha.",
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

const faqs = [
  {
    question: "What is a shikara ride in Alleppey?",
    answer:
      "A shikara ride is a smaller canopied boat experience that moves through Alleppey's scenic canals, making it a gentle way to see village routes and quieter backwater stretches.",
  },
  {
    question: "How long is a shikara ride?",
    answer:
      "Most rides are planned around 1 to 3 hours depending on the route, the time of day, and whether you want a sunrise, daytime, or sunset plan.",
  },
  {
    question: "Is shikara better than a houseboat?",
    answer:
      "A shikara is better for a shorter, more intimate ride through narrow canals. A houseboat is better if you want more space, onboard comfort, meals, or an overnight backwater stay.",
  },
];

const breadcrumbJsonLd = createBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Shikara Rides", path: "/shikkara" },
]);

const serviceJsonLd = createServiceSchema({
  name: "Private Shikara Rides in Alleppey",
  description:
    "Private Shikara and Shikkara rides through the Alleppey backwaters for couples, families, village canal routes, and slower scenic sightseeing.",
  path: "/shikkara",
  serviceType: "Shikara ride",
});

export default function ShikkaraPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={createFaqSchema(faqs)} />
      <ShikkaraExperiencePage />
    </>
  );
}
