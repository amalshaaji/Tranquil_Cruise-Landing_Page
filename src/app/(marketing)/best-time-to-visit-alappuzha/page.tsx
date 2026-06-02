import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import BackwaterGuidePage from "@/components/guides/BackwaterGuidePage";
import {
  createArticleSchema,
  createBreadcrumbSchema,
  createFaqSchema,
  createImageObjectSchema,
  createTouristTripSchema,
  generatePageMetadata,
} from "@/lib/seo";

const faqs = [
  {
    question: "What is the best time to visit Alleppey backwaters?",
    answer:
      "For many travelers, the best time to visit Alleppey backwaters is when the weather feels more comfortable for cruising and open-deck time. The right season still depends on whether you prefer softer weather, greener monsoon mood, or a busier peak-travel atmosphere.",
  },
  {
    question: "Is Alappuzha worth visiting in the monsoon?",
    answer:
      "Yes, if you like a quieter, greener, more atmospheric backwater mood. Monsoon travel can feel more romantic and local, though weather-sensitive planning matters more than in drier periods.",
  },
  {
    question: "Which months are good for houseboats in Alleppey?",
    answer:
      "Houseboats can work across the year, but your comfort level changes with heat, rainfall, and how much open-deck time you want. Many guests choose their dates based on how they want the day to feel rather than a rigid single best month.",
  },
  {
    question: "When is Alappuzha most crowded?",
    answer:
      "The busiest periods are usually when broader Kerala travel demand rises and the weather is more comfortable for sightseeing, so booking earlier matters more if you want specific boat formats or travel dates.",
  },
];

const breadcrumbJsonLd = createBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Best Time To Visit Alappuzha", path: "/best-time-to-visit-alappuzha" },
]);

const faqJsonLd = createFaqSchema(faqs);

const imageJsonLd = createImageObjectSchema({
  path: "/images/best-time-to-visit-alappuzha-houseboats.jpg",
  alt: "Houseboats cruising through the Alappuzha backwaters at a calm golden hour",
  width: 1300,
  height: 1733,
});

const articleJsonLd = createArticleSchema({
  headline: "Best Time To Visit Alappuzha",
  description:
    "A practical guide to when to visit Alappuzha based on weather feel, backwater mood, and what kind of Kerala trip you want.",
  path: "/best-time-to-visit-alappuzha",
  image: {
    path: "/images/best-time-to-visit-alappuzha-houseboats.jpg",
    alt: "Houseboats cruising through the Alappuzha backwaters at a calm golden hour",
    width: 1300,
    height: 1733,
  },
  keywords: [
    "best time to visit alappuzha",
    "best time to visit alleppey",
    "alleppey weather for houseboats",
  ],
  articleSection: "Season & Timing Guide",
});

const touristTripJsonLd = createTouristTripSchema({
  name: "Best Time To Visit Alappuzha Guide",
  description:
    "A local planning guide to the best time to visit Alappuzha based on season, weather feel, backwater comfort, and houseboat timing.",
  path: "/best-time-to-visit-alappuzha",
  image: {
    path: "/images/best-time-to-visit-alappuzha-houseboats.jpg",
    alt: "Houseboats cruising through the Alappuzha backwaters at a calm golden hour",
    width: 1300,
    height: 1733,
  },
  itinerary: ["Alappuzha", "Alleppey", "Kerala Backwaters"],
  touristType: ["Seasonal planners", "Couples", "Families", "First-time visitors"],
  keywords: [
    "best time to visit alappuzha",
    "best time to visit alleppey",
    "alleppey weather for houseboats",
  ],
});

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata({
    title: "Best Time to Visit Alleppey Backwaters | Alappuzha Season Guide",
    description:
      "Find the best time to visit Alleppey backwaters based on weather, houseboat comfort, monsoon mood, and the Alappuzha route experience you want.",
    path: "/best-time-to-visit-alappuzha",
    keywords: [
      "best time to visit alappuzha",
      "best time to visit alleppey",
      "alleppey weather for houseboats",
      "when to visit alappuzha",
    ],
    image: {
      url: "/images/best-time-to-visit-alappuzha-houseboats.jpg",
      width: 1300,
      height: 1733,
      alt: "Houseboats cruising through the Alappuzha backwaters at a calm golden hour",
    },
  });
}

export default function BestTimeToVisitAlappuzhaPage() {
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
        eyebrow="Season & Timing Guide"
        title="Best time to visit Alappuzha for travelers who care about how the trip feels, not just what the forecast says."
        intro="This page is for guests choosing when to visit Alappuzha, especially if they are planning a houseboat, a lighter scenic ride, or a slower Kerala backwater stay. The best time depends less on one universal rule and more on the mood, comfort, and route style you want."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Best Time To Visit Alappuzha" },
        ]}
        galleryImages={[
          {
            src: "/images/best-time-to-visit-alappuzha-houseboats.jpg",
            alt: "Houseboats cruising through the Alappuzha backwaters at a calm golden hour",
            objectPosition: "center 78%",
          },
          {
            src: "/images/home-hero-rainbow-houseboat.jpg",
            alt: "Monsoon mood across the Kerala backwaters",
          },
          {
            src: "/images/shikkara-gallery/shikkara-sunset-angle.webp",
            alt: "Sunset season atmosphere in Alleppey",
          },
          {
            src: "/images/home-houseboat-backwater.jpg",
            alt: "Open-water houseboat timing in Alappuzha",
          },
        ]}
        quickFacts={[
          "Best timing depends on comfort and trip style",
          "Monsoon can be beautiful for a quieter mood",
          "Peak seasons usually need earlier planning",
          "Houseboats, shikara rides, and day trips feel different by season",
        ]}
        overviewTitle="The best time to visit Alappuzha changes with the kind of backwater day you want."
        overviewCards={[
          {
            title: "For comfortable sightseeing weather",
            text: "Many travelers prefer seasons when the weather feels easier for open-deck time, longer scenic rides, and all-day movement on Punnamada Lake or Vembanad Lake without the heavier feel of hotter or wetter conditions.",
          },
          {
            title: "For a greener, moodier trip",
            text: "Monsoon-season Alappuzha can be especially appealing if you want softer light, lush surroundings, greener village canals, and a more atmospheric backwater feel instead of peak-season bustle.",
          },
          {
            title: "For specific boat availability",
            text: "The right booking window also depends on what you want to reserve. Couples, families, and larger groups often need more lead time in the busier travel periods.",
          },
        ]}
        practicalTitle="Weather matters, but route comfort and timing matter just as much."
        practicalItems={[
          "Choose cooler-feeling travel windows if you want more open-deck time and a longer sightseeing rhythm.",
          "Choose monsoon-season travel if your priority is atmosphere, greenery, and a quieter Kerala mood.",
          "Book earlier if your dates are fixed and you want a specific houseboat layout or a high-demand travel period.",
          "Think about whether your trip is a short scenic ride, a day cruise, or an overnight stay before deciding what season feels best.",
        ]}
        practicalNote="People often ask for the best month to visit Alappuzha as if there is one correct answer. In practice, the right answer depends on whether you want easier weather, greener mood, quieter travel, or the strongest availability for a particular format."
        featureEyebrow="Seasonal Fit"
        featureTitle="A good Alappuzha season choice is really a comfort-and-mood decision."
        featureIntro="Backwater travel changes with temperature, rainfall, cloud cover, and crowd level. That means the best timing is usually the one that supports the kind of experience you actually want to have on the water."
        featureCards={[
          {
            title: "For daytime scenic comfort",
            text: "Choose the kind of season where longer rides, open views, and outdoor time feel easier if your plan includes a fuller day on the backwaters.",
          },
          {
            title: "For romantic or quieter atmosphere",
            text: "Choose softer, moodier conditions if your trip is more about feeling than checklist sightseeing, especially for couples or slower local stays.",
          },
          {
            title: "For flexible local planning",
            text: "Choose your date window with some openness if possible, because route quality and overall comfort can matter more than chasing one specific label like peak or off-season.",
          },
        ]}
        compareTitle="Use the timing page, then narrow the destination and activity choice."
        compareIntro="These pages help you turn a seasonal question into a more concrete Alappuzha plan."
        compareCards={[
          {
            title: "Luxury Houseboats",
            href: "/houseboats",
            fit: "Best for classic backwater stays",
            copy: "Go here if your season choice is mainly about picking the right houseboat format, route mood, and overnight or day-cruise style in Alappuzha.",
          },
          {
            title: "Day Cruise Alappuzha",
            href: "/day-cruise-alappuzha",
            fit: "Best for daytime planning",
            copy: "Go here if the season question is really about when a private houseboat day cruise will feel most comfortable and scenic on the water.",
          },
          {
            title: "Private Shikkara Rides",
            href: "/shikkara",
            fit: "Best for lighter canal routes",
            copy: "Go here if your dates matter most because you want a softer sunrise or sunset canal ride rather than a full houseboat stay.",
          },
          {
            title: "Alappuzha Vs Kumarakom",
            href: "/alappuzha-vs-kumarakom",
            fit: "Best for destination context",
            copy: "Go here if timing is tied to a bigger destination choice and you are still deciding whether Alappuzha or Kumarakom suits your trip better.",
          },
        ]}
        faqEyebrow="Alappuzha Timing FAQs"
        faqTitle="Questions travelers ask when planning the best time to visit Alappuzha"
        faqIntro="These answers focus on season feel, comfort, and backwater planning rather than generic weather summaries."
        faqs={faqs}
        primaryCtaLabel="View houseboats"
        primaryCtaHref="/houseboats"
        secondaryCtaLabel="See day cruises"
        secondaryCtaHref="/day-cruise-alappuzha"
        ctaTitle="Use the timing guide, then plan the experience that suits the season"
        ctaText="The season question becomes much easier once you know whether you want a short canal ride, a full day cruise, or a slower overnight stay with more time to enjoy the backwaters."
      />
    </>
  );
}
