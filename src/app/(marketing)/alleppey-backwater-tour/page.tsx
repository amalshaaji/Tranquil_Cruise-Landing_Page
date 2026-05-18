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
    question: "What is the best backwater tour in Alleppey?",
    answer:
      "The best Alleppey backwater tour depends on whether you want an overnight houseboat, a daytime cruise, a shorter shikara ride, or a closer village-waterway experience by country boat or kayak.",
  },
  {
    question: "How long should an Alleppey backwater tour be?",
    answer:
      "A few hours is enough for a lighter scenic trip, but a day cruise or overnight houseboat gives you a more complete sense of the backwaters because the pace becomes less rushed.",
  },
  {
    question: "Should I choose a houseboat or a smaller ride in Alleppey?",
    answer:
      "Choose a houseboat if you want more comfort, shared meals, and time on board. Choose a shikara, country boat, or kayaking route if your priority is narrower canals, a lighter schedule, or a closer-to-water experience.",
  },
  {
    question: "Is Alleppey the best place for a Kerala backwater tour?",
    answer:
      "For many travelers, yes. Alleppey is often the most practical starting point because it combines iconic houseboat routes with easy access to smaller village-canal experiences.",
  },
];

const breadcrumbJsonLd = createBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Alleppey Backwater Tour", path: "/alleppey-backwater-tour" },
]);

const faqJsonLd = createFaqSchema(faqs);

const imageJsonLd = createImageObjectSchema({
  path: "/images/home-houseboat-backwater.jpg",
  alt: "Alleppey backwater tour on a houseboat route",
  width: 1200,
  height: 630,
});

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Alleppey Backwater Tour",
  description:
    "A practical Alleppey backwater tour guide covering route choices, trip lengths, and how to compare houseboats with smaller backwater experiences.",
  url: `${SITE_URL}/alleppey-backwater-tour`,
  image: `${SITE_URL}/images/home-houseboat-backwater.jpg`,
  author: {
    "@type": "Organization",
    name: SITE_NAME,
  },
  publisher: {
    "@type": "Organization",
    name: SITE_NAME,
  },
  mainEntityOfPage: `${SITE_URL}/alleppey-backwater-tour`,
};

const touristTripJsonLd = createTouristTripSchema({
  name: "Alleppey Backwater Tour Guide",
  description:
    "A guide to planning an Alleppey backwater tour with route choices, trip-length comparisons, and format advice across houseboats and smaller boats.",
  path: "/alleppey-backwater-tour",
  image: {
    path: "/images/home-houseboat-backwater.jpg",
    alt: "Alleppey backwater tour on a houseboat route",
    width: 1200,
    height: 630,
  },
  itinerary: ["Alleppey", "Alappuzha", "Kuttanad", "Village canals"],
  touristType: ["Couples", "Families", "Day travelers", "Private groups"],
  keywords: [
    "alleppey backwater tour",
    "alappuzha backwater tour",
    "best backwater tour alleppey",
  ],
});

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata({
    title: "Alleppey Backwater Tour | How To Choose The Right Alappuzha Trip",
    description:
      "Plan the right Alleppey backwater tour with route guidance, format comparisons, and clear advice on houseboats, shikara rides, and village-waterway experiences.",
    path: "/alleppey-backwater-tour",
    keywords: [
      "alleppey backwater tour",
      "alappuzha backwater tour",
      "best backwater tour alleppey",
      "alleppey houseboat or shikara",
    ],
    image: {
      url: "/images/home-houseboat-backwater.jpg",
      width: 1200,
      height: 630,
      alt: "Alleppey backwater tour on a houseboat route",
    },
  });
}

export default function AlleppeyBackwaterTourPage() {
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
        eyebrow="Alleppey Tour Planning"
        title="Alleppey backwater tour guide for travelers trying to choose the right trip, not just the first boat they see."
        intro="This page is for guests who already know they want Alleppey or Alappuzha, but need help choosing the format. If you are deciding between a houseboat, day cruise, shikara ride, country boat, or kayaking route, start here before you book."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Alleppey Backwater Tour" },
        ]}
        galleryImages={[
          {
            src: "/images/home-houseboat-backwater.jpg",
            alt: "Houseboat route on an Alleppey backwater tour",
          },
          {
            src: "/images/shikkara-gallery/shikkara-exterior-day.webp",
            alt: "Smaller Alleppey canal tour format by shikara",
          },
          {
            src: "/images/home-hero-backwater-canoe.jpg",
            alt: "Village canal section of an Alleppey backwater tour",
          },
          {
            src: "/images/kayaking-gallery/IMG_1810.webp",
            alt: "Active paddling route in the Alappuzha backwaters",
          },
        ]}
        quickFacts={[
          "Best for practical planning in Alleppey",
          "Works for 2-hour rides, day cruises, and overnight stays",
          "Different formats suit very different group needs",
          "Route width and pace matter as much as boat type",
        ]}
        overviewTitle="Alleppey tours work best when the itinerary matches how you want to experience the water."
        overviewCards={[
          {
            title: "For iconic houseboat views",
            text: "Choose a houseboat or day cruise when you want open-deck time, slower scenery, and a more spacious private setup. This is the format most travelers picture first when they imagine Alleppey.",
          },
          {
            title: "For narrower canals and village life",
            text: "Choose a shikara or country boat when you care more about intimate canal access, local scenery, and a lighter, easier sightseeing schedule.",
          },
          {
            title: "For a more active route",
            text: "Choose kayaking if you want to feel closer to the water, move at your own pace, and experience quieter stretches that feel less like a standard tour.",
          },
        ]}
        practicalTitle="Use trip length, group type, and comfort needs as your three main filters."
        practicalItems={[
          "A shorter sightseeing plan usually points toward a shikara ride or a country boat route.",
          "A fuller daytime plan usually points toward a day-cruise houseboat with meals and more lounge time.",
          "A couple or family wanting the complete backwater rhythm usually gets the most from an overnight houseboat stay.",
          "Guests with children or older relatives often value easier seating, washroom access, and slower pacing more than route variety alone.",
        ]}
        practicalNote="The strongest Alleppey backwater tour is usually the one that feels right for your group, not the one with the longest list of inclusions. Start with the mood and pace you want, then compare formats."
        featureEyebrow="Choosing Well"
        featureTitle="Most Alleppey tour decisions become simple once you know what kind of day you want."
        featureIntro="Travelers often over-compare boats when the bigger question is whether they want a scenic outing, a fuller private day, or an overnight stay that changes the rhythm completely."
        featureCards={[
          {
            title: "The scenic outing",
            text: "This is the lighter, lower-commitment version. It works best for guests who want good views, calmer canal access, and a short-to-medium sightseeing window.",
          },
          {
            title: "The full private day",
            text: "This is the day-cruise version. It makes sense when you want houseboat comfort, lunch or refreshments, and a more generous stretch of time on the water without staying overnight.",
          },
          {
            title: "The complete stay",
            text: "This is the overnight houseboat version. It is the right choice when the evening calm, room access, dinner, and a slower morning matter more than fitting the trip into a few hours.",
          },
        ]}
        compareTitle="Move from Alleppey tour planning into the exact route or format you want."
        compareIntro="These are the most useful next pages once you know the kind of Alleppey backwater trip you want to take."
        compareCards={[
          {
            title: "Kerala Backwaters Guide",
            href: "/kerala-backwaters-guide",
            fit: "Best if you want the bigger picture",
            copy: "Step back into the broader Kerala context if you are still comparing destinations, backwater styles, and why different trip formats feel so different.",
          },
          {
            title: "Day Cruise Alappuzha",
            href: "/day-cruise-alappuzha",
            fit: "Best for a full daytime houseboat",
            copy: "Go here if you already know you want the houseboat feel, onboard time, and a proper daytime itinerary without staying overnight.",
          },
          {
            title: "Overnight Houseboat Alappuzha",
            href: "/overnight-houseboat-alappuzha",
            fit: "Best for the fullest backwater rhythm",
            copy: "Go here if evening calm, room comfort, and the slower overnight experience are the real reason you are considering Alleppey in the first place.",
          },
        ]}
        faqEyebrow="Alleppey Tour FAQs"
        faqTitle="Questions travelers ask when comparing Alleppey backwater tour options"
        faqIntro="These answers focus on format choice, trip length, and what makes one Alleppey tour style better than another."
        faqs={faqs}
        primaryCtaLabel="Browse experiences"
        primaryCtaHref="/experience"
        secondaryCtaLabel="Compare houseboats"
        secondaryCtaHref="/houseboats"
        ctaTitle="Use the tour guide, then book the format that matches your trip"
        ctaText="If you already know you want a private houseboat, day cruise, or slower overnight stay, the linked service pages will help you move from planning language into the exact trip format."
      />
    </>
  );
}
