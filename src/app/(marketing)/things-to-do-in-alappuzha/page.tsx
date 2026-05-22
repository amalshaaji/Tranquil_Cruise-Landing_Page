import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import BackwaterGuidePage from "@/components/guides/BackwaterGuidePage";
import {
  createBreadcrumbSchema,
  createFaqSchema,
  createImageObjectSchema,
  createTouristTripSchema,
  generatePageMetadata,
} from "@/lib/seo";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const faqs = [
  {
    question: "What are the best things to do in Alappuzha?",
    answer:
      "The most popular things to do in Alappuzha are houseboat stays, shikara rides, village canal trips, kayaking, slower waterside stays, and watching the backwaters at sunrise or sunset.",
  },
  {
    question: "Is one day enough for Alappuzha?",
    answer:
      "One day is enough for a good backwater experience, but staying longer gives you more flexibility to combine a boat trip with a room stay, quieter routes, or a slower overnight houseboat plan.",
  },
  {
    question: "What is Alappuzha most known for?",
    answer:
      "Alappuzha is best known for the Kerala backwaters, especially private houseboats, scenic canals, and the slower water-based travel rhythm that makes the area distinct.",
  },
  {
    question: "Are Alappuzha and Alleppey the same place?",
    answer:
      "Yes. Alappuzha is the official name, while Alleppey is the older and still widely used name in travel planning and search behavior.",
  },
];

const breadcrumbJsonLd = createBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Things To Do In Alappuzha", path: "/things-to-do-in-alappuzha" },
]);

const faqJsonLd = createFaqSchema(faqs);

const imageJsonLd = createImageObjectSchema({
  path: "/images/things-to-do-in-alappuzha-attractions.jpg",
  alt: "A visual guide to houseboats, shikara rides, beaches, and the Alappuzha lighthouse",
  width: 1408,
  height: 768,
});

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Things To Do In Alappuzha",
  description:
    "A practical guide to the best things to do in Alappuzha, with a focus on backwater experiences, local pacing, and how to choose the right activity.",
  url: `${SITE_URL}/things-to-do-in-alappuzha`,
  image: `${SITE_URL}/images/things-to-do-in-alappuzha-attractions.jpg`,
  author: {
    "@type": "Organization",
    name: SITE_NAME,
  },
  publisher: {
    "@type": "Organization",
    name: SITE_NAME,
  },
  mainEntityOfPage: `${SITE_URL}/things-to-do-in-alappuzha`,
};

const touristTripJsonLd = createTouristTripSchema({
  name: "Things To Do In Alappuzha Guide",
  description:
    "A local guide to what to do in Alappuzha, including houseboats, village canals, shikara rides, kayaking, and slower Kerala backwater experiences.",
  path: "/things-to-do-in-alappuzha",
  image: {
    path: "/images/things-to-do-in-alappuzha-attractions.jpg",
    alt: "A visual guide to houseboats, shikara rides, beaches, and the Alappuzha lighthouse",
    width: 1408,
    height: 768,
  },
  itinerary: ["Alappuzha", "Alleppey", "Village canals", "Kerala Backwaters"],
  touristType: ["First-time visitors", "Couples", "Families", "Day travelers"],
  keywords: [
    "things to do in alappuzha",
    "best things to do in alleppey",
    "what to do in alappuzha",
  ],
});

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata({
    title: "Things To Do In Alappuzha | Best Alleppey Experiences To Plan",
    description:
      "Find the best things to do in Alappuzha, from houseboats and shikara rides to village canal routes, kayaking, and slower Alleppey backwater experiences.",
    path: "/things-to-do-in-alappuzha",
    keywords: [
      "things to do in alappuzha",
      "best things to do in alleppey",
      "what to do in alappuzha",
      "alappuzha backwater activities",
    ],
    image: {
      url: "/images/things-to-do-in-alappuzha-attractions.jpg",
      width: 1408,
      height: 768,
      alt: "A visual guide to houseboats, shikara rides, beaches, and the Alappuzha lighthouse",
    },
  });
}

export default function ThingsToDoInAlappuzhaPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd,
          faqJsonLd,
          imageJsonLd,
          articleJsonLd,
          touristTripJsonLd,
        ]}
      />
      <BackwaterGuidePage
        eyebrow="Local Trip Ideas"
        title="Things to do in Alappuzha for travelers who want the right backwater experience, not just a crowded checklist."
        intro="This page is for guests planning Alappuzha locally, not just searching for generic sightseeing ideas. If you want to know which experiences are actually worth your time here, start with the backwater formats and the pace you want from the day."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Things To Do In Alappuzha" },
        ]}
        galleryImages={[
          {
            src: "/images/things-to-do-in-alappuzha-attractions.jpg",
            alt: "A visual guide to houseboats, shikara rides, beaches, and the Alappuzha lighthouse",
            objectFit: "contain",
            containerClassName: "mb-4 sm:mb-6",
            aspectRatio: "1408 / 768",
          },
          {
            src: "/images/home-backwater-houseboats.jpg",
            alt: "Houseboat experience in Alappuzha",
          },
          {
            src: "/images/shikkara-gallery/shikkara-exterior-day.webp",
            alt: "Shikara ride as one of the best things to do in Alleppey",
          },
          {
            src: "/images/kayaking-gallery/IMG_0772.webp",
            alt: "Kayaking trail in the Alappuzha backwaters",
          },
        ]}
        quickFacts={[
          "Best known for backwater experiences",
          "Good for day trips and overnight stays",
          "Strongest choices are water-based, not rushed landmark hopping",
          "Alappuzha and Alleppey refer to the same destination",
        ]}
        overviewTitle="The best things to do in Alappuzha usually revolve around how you want to experience the water."
        overviewCards={[
          {
            title: "Take a private houseboat",
            text: "This is the classic Alappuzha experience for guests who want time, comfort, open-deck views, and the feeling of slowing down instead of moving quickly from stop to stop.",
          },
          {
            title: "Choose a shikara for lighter sightseeing",
            text: "A shikara is usually the better fit when you want a shorter private ride through scenic canals without planning a full floating stay.",
          },
          {
            title: "Explore village canals more closely",
            text: "Country boats and kayaking stand out if your priority is quieter water, everyday local scenery, and a more direct feel for village life around the backwaters.",
          },
        ]}
        practicalTitle="Think in experience types before you think in package names."
        practicalItems={[
          "Choose a houseboat if you want the fullest Alappuzha experience with more space and a slower rhythm.",
          "Choose a shikara if you want a scenic ride that fits neatly into a shorter local itinerary.",
          "Choose kayaking or a country boat if you want to feel closer to the water and quieter village routes.",
          "Pair a boat experience with a room stay if you want more flexibility than a one-block day trip.",
        ]}
        practicalNote="A lot of visitors search for things to do in Alappuzha as if the answer should be a long list. In practice, the strongest trip usually comes from choosing one or two experiences that match your mood and timing well."
        featureEyebrow="What Stands Out"
        featureTitle="Alappuzha works best when you let the destination stay slow."
        featureIntro="The point of Alappuzha is not speed. It is the combination of water, softer timing, local scenery, and the freedom to choose a trip format that feels calm instead of overpacked."
        featureCards={[
          {
            title: "For classic Alleppey atmosphere",
            text: "Pick a houseboat or day cruise if your idea of Alappuzha includes deck views, open water, food on board, and the familiar backwater mood most travelers imagine first.",
          },
          {
            title: "For canal-side intimacy",
            text: "Pick a shikara or country boat if you want quieter routes, coconut-lined waterways, and a more local feeling than a broader houseboat route.",
          },
          {
            title: "For active local exploration",
            text: "Pick kayaking if you want to turn the visit into a more physical, closer-to-water experience with a different pace from a seated cruise.",
          },
        ]}
        attractionTableTitle="Compare the main Alappuzha attractions before you plan the day."
        attractionTableIntro="If you want a quick sense of which places and activities suit your mood, budget, and trip style, this table gives you the fastest overview."
        attractionRows={[
          {
            attraction: "Houseboat Cruise",
            vibe: "Luxurious and relaxing",
            bestFor: "Backwater scenery and traditional food",
            typicalCost: "Mid to high, depending on boat size",
          },
          {
            attraction: "Shikara Boat Tour",
            vibe: "Authentic and intimate",
            bestFor: "Narrow canal exploration and budget-friendly rides",
            typicalCost: "Low to mid",
          },
          {
            attraction: "Alappuzha Beach",
            vibe: "Lively and local",
            bestFor: "Sunset watching and street snacks",
            typicalCost: "Free entry",
          },
          {
            attraction: "Marari Beach",
            vibe: "Serene and secluded",
            bestFor: "Peace, photography, and swimming",
            typicalCost: "Free entry",
          },
          {
            attraction: "Alappuzha Lighthouse",
            vibe: "Historic",
            bestFor: "360-degree views and photography",
            typicalCost: "Around Rs. 20 for Indians and Rs. 50 for foreign visitors",
          },
        ]}
        compareTitle=""
        compareIntro=""
        compareCards={[]}
        faqEyebrow="Alappuzha Ideas FAQs"
        faqTitle="Questions travelers ask when planning what to do in Alappuzha"
        faqIntro="These answers stay focused on local trip choices, not filler sightseeing lists."
        faqs={faqs}
        primaryCtaLabel="Browse experiences"
        primaryCtaHref="/gallery"
        secondaryCtaLabel="See backwater tour guide"
        secondaryCtaHref="/alleppey-backwater-tour"
        ctaTitle="Use the ideas page, then pick the trip style that fits"
        ctaText="If this page has already made it clear that your real priority is the backwaters, the next step is usually to choose the format and timing rather than trying to keep adding more activities."
      />
    </>
  );
}
