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
    question: "Which is better: Alappuzha or Kumarakom?",
    answer:
      "Neither is universally better. Alappuzha is often the stronger fit for travelers who want a wider mix of backwater formats and classic houseboat planning, while Kumarakom often appeals to guests looking for a quieter resort-style mood.",
  },
  {
    question: "Is Alappuzha better for houseboats?",
    answer:
      "For many travelers, yes. Alappuzha is often the clearer choice if your priority is comparing houseboats, day cruises, shikara rides, and other backwater formats in one place.",
  },
  {
    question: "Is Kumarakom quieter than Alappuzha?",
    answer:
      "It is often perceived that way by travelers who want a more resort-oriented and slower stay feel, though the right choice still depends on what kind of backwater experience you want.",
  },
  {
    question: "Can I choose Alappuzha for activities and Kumarakom for a slower stay mood?",
    answer:
      "Yes, that is a common way to think about the comparison. The key is deciding whether your priority is activity choice, easy backwater access, and format variety, or a quieter retreat-style atmosphere.",
  },
];

const breadcrumbJsonLd = createBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Alappuzha Vs Kumarakom", path: "/alappuzha-vs-kumarakom" },
]);

const faqJsonLd = createFaqSchema(faqs);

const imageJsonLd = createImageObjectSchema({
  path: "/images/home-houseboat-backwater.jpg",
  alt: "Alappuzha versus Kumarakom backwater comparison",
  width: 1200,
  height: 630,
});

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Alappuzha Vs Kumarakom",
  description:
    "A practical local comparison of Alappuzha and Kumarakom for backwater travelers deciding between activity variety and a quieter stay mood.",
  url: `${SITE_URL}/alappuzha-vs-kumarakom`,
  image: `${SITE_URL}/images/home-houseboat-backwater.jpg`,
  author: {
    "@type": "Organization",
    name: SITE_NAME,
  },
  publisher: {
    "@type": "Organization",
    name: SITE_NAME,
  },
  mainEntityOfPage: `${SITE_URL}/alappuzha-vs-kumarakom`,
};

const touristTripJsonLd = createTouristTripSchema({
  name: "Alappuzha Vs Kumarakom Guide",
  description:
    "A destination comparison guide for backwater travelers deciding between Alappuzha and Kumarakom based on trip style, activities, and atmosphere.",
  path: "/alappuzha-vs-kumarakom",
  image: {
    path: "/images/home-houseboat-backwater.jpg",
    alt: "Alappuzha versus Kumarakom backwater comparison",
    width: 1200,
    height: 630,
  },
  itinerary: ["Alappuzha", "Kumarakom", "Kerala Backwaters"],
  touristType: ["Couples", "Families", "Backwater planners", "First-time visitors"],
  keywords: [
    "alappuzha vs kumarakom",
    "alleppey or kumarakom",
    "which is better alappuzha or kumarakom",
  ],
});

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata({
    title: "Alappuzha Vs Kumarakom | Which Backwater Destination Fits Better",
    description:
      "Compare Alappuzha vs Kumarakom for houseboats, backwater activities, trip mood, and local planning so you can choose the destination that fits better.",
    path: "/alappuzha-vs-kumarakom",
    keywords: [
      "alappuzha vs kumarakom",
      "alleppey or kumarakom",
      "which is better alappuzha or kumarakom",
      "kumarakom vs alleppey houseboat",
    ],
    image: {
      url: "/images/home-houseboat-backwater.jpg",
      width: 1200,
      height: 630,
      alt: "Alappuzha versus Kumarakom backwater comparison",
    },
  });
}

export default function AlappuzhaVsKumarakomPage() {
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
        eyebrow="Destination Comparison"
        title="Alappuzha vs Kumarakom for travelers choosing between backwater variety and a quieter stay mood."
        intro="This page is for travelers deciding between two well-known Kerala backwater destinations. If you are comparing Alappuzha and Kumarakom, the simplest way to choose is by deciding whether you want easier access to multiple backwater formats or a more retreat-like, quieter atmosphere."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Alappuzha Vs Kumarakom" },
        ]}
        galleryImages={[
          {
            src: "/images/home-houseboat-backwater.jpg",
            alt: "Classic Alappuzha backwater houseboat atmosphere",
          },
          {
            src: "/images/home-backwater-houseboats.jpg",
            alt: "Broader Alleppey backwater route mood",
          },
          {
            src: "/images/shikkara-gallery/shikkara-sunset-angle.webp",
            alt: "Quieter scenic canal mood useful for comparison",
          },
          {
            src: "/images/family-retreat-houseboat.jpg",
            alt: "Family backwater stay planning in Alappuzha",
          },
        ]}
        quickFacts={[
          "Alappuzha is often stronger for activity variety",
          "Kumarakom is often chosen for a quieter retreat feel",
          "Houseboat planning is usually easier to compare in Alappuzha",
          "The right choice depends on mood, not just destination name",
        ]}
        overviewTitle="This comparison becomes simpler once you decide whether your trip is activity-first or atmosphere-first."
        overviewCards={[
          {
            title: "Choose Alappuzha for broader backwater choice",
            text: "Alappuzha is often the more practical option when you want to compare houseboats, day cruises, shikara rides, village canal routes, and other backwater experiences from one main hub.",
          },
          {
            title: "Choose Kumarakom for a quieter retreat feel",
            text: "Kumarakom often appeals to guests who care more about a slower, quieter, resort-leaning atmosphere than about comparing many backwater formats side by side.",
          },
          {
            title: "Do not compare them only by popularity",
            text: "The better question is which destination matches your trip intent. Some travelers want more local route choice and format flexibility, while others want the softer feel of staying still for longer.",
          },
        ]}
        practicalTitle="Use trip intent, route choice, and energy level as the real decision filters."
        practicalItems={[
          "Choose Alappuzha if you want easier access to multiple boat formats and a stronger activity-planning hub.",
          "Choose Kumarakom if your trip leans more toward slower stay mood and less toward comparing many route formats.",
          "Choose Alappuzha if you are still deciding between a houseboat, day cruise, shikara ride, or a more local canal experience.",
          "Think about whether you want variety and local planning help or a quieter resort-style rhythm before making the call.",
        ]}
        practicalNote="Travelers often ask which place is better as if one answer fits everyone. In reality, Alappuzha usually wins on range and planning flexibility, while Kumarakom often wins for guests who want a calmer, more retreat-oriented feel."
        featureEyebrow="How They Differ"
        featureTitle="Alappuzha and Kumarakom can both be beautiful, but they support different kinds of trips."
        featureIntro="The difference is less about scenery quality and more about how each place supports your itinerary. One leans more toward activity choice and familiar backwater planning, while the other often feels better for a quieter pause."
        featureCards={[
          {
            title: "For travelers who want options",
            text: "Alappuzha is usually the better fit because it makes comparing formats simpler and gives you a clearer route into the classic Kerala backwater experience.",
          },
          {
            title: "For travelers who want stillness",
            text: "Kumarakom is often the more natural fit when the priority is a quieter backdrop and a less activity-driven stay rhythm.",
          },
          {
            title: "For first-time Kerala backwater planning",
            text: "Alappuzha is often the easier recommendation because it gives first-time visitors a wider range of well-understood backwater trip choices without narrowing the plan too early.",
          },
        ]}
        compareTitle="Use the comparison, then move into the page that helps finish the decision."
        compareIntro="These pages help turn the destination question into a local Alappuzha plan if that ends up being the better fit."
        compareCards={[
          {
            title: "Things To Do In Alappuzha",
            href: "/things-to-do-in-alappuzha",
            fit: "Best if Alappuzha is winning",
            copy: "Go here if this comparison has already made Alappuzha the stronger choice and you now want to narrow the best local experiences.",
          },
          {
            title: "Best Time To Visit Alappuzha",
            href: "/best-time-to-visit-alappuzha",
            fit: "Best if timing is still open",
            copy: "Go here if Alappuzha seems right but the final decision still depends on which season or weather mood fits your trip best.",
          },
          {
            title: "Kerala Backwaters Guide",
            href: "/kerala-backwaters-guide",
            fit: "Best for stepping back",
            copy: "Go here if you want the broader Kerala backwaters context before locking in either destination and travel format.",
          },
        ]}
        faqEyebrow="Destination Comparison FAQs"
        faqTitle="Questions travelers ask when comparing Alappuzha and Kumarakom"
        faqIntro="These answers focus on trip fit, destination mood, and practical backwater planning."
        faqs={faqs}
        primaryCtaLabel="See Alappuzha ideas"
        primaryCtaHref="/things-to-do-in-alappuzha"
        secondaryCtaLabel="Browse experiences"
        secondaryCtaHref="/gallery"
        ctaTitle="Use the comparison, then plan the destination that fits better"
        ctaText="If Alappuzha feels like the better match after this comparison, the most useful next step is usually choosing the right local format and timing rather than continuing to compare destination names."
      />
    </>
  );
}
