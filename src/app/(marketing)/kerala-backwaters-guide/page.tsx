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
    question: "What are the Kerala backwaters?",
    answer:
      "The Kerala backwaters are a connected network of lagoons, canals, lakes, river inlets, and village waterways that create one of the state's most distinctive travel landscapes.",
  },
  {
    question: "Where should I start if I want a Kerala backwater trip?",
    answer:
      "Most travelers begin with Alleppey or Alappuzha because it offers easy access to houseboats, shikara rides, village canals, kayaking, and a broad mix of backwater trip styles.",
  },
  {
    question: "What is the best way to explore the backwaters?",
    answer:
      "That depends on the pace you want. Houseboats suit longer private stays, shikara rides suit shorter scenic canal trips, and kayaking or country boats suit guests who want a closer feel for village waterways.",
  },
  {
    question: "Is one day enough for the Kerala backwaters?",
    answer:
      "One day is enough for a good introduction, but overnight houseboat stays usually give you a fuller sense of the backwaters because you experience both the daytime scenery and the slower evening rhythm.",
  },
];

const breadcrumbJsonLd = createBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Kerala Backwaters Guide", path: "/kerala-backwaters-guide" },
]);

const faqJsonLd = createFaqSchema(faqs);

const imageJsonLd = createImageObjectSchema({
  path: "/images/home-backwater-houseboats.jpg",
  alt: "Kerala backwaters guide view from a houseboat in Alappuzha",
  width: 1200,
  height: 630,
});

const articleJsonLd = createArticleSchema({
  headline: "Kerala Backwaters Guide",
  description:
    "An introductory guide to the Kerala backwaters, including trip formats, route types, and how to choose the right Alleppey experience.",
  path: "/kerala-backwaters-guide",
  image: {
    path: "/images/home-backwater-houseboats.jpg",
    alt: "Kerala backwaters guide view from a houseboat in Alappuzha",
    width: 1200,
    height: 630,
  },
  keywords: [
    "kerala backwaters guide",
    "kerala backwater trip guide",
    "alleppey backwater planning",
  ],
  articleSection: "Backwater Travel Guide",
});

const touristTripJsonLd = createTouristTripSchema({
  name: "Kerala Backwaters Guide",
  description:
    "A planning guide to Kerala backwater travel, including houseboats, Alleppey canals, village routes, and day-versus-overnight decisions.",
  path: "/kerala-backwaters-guide",
  image: {
    path: "/images/home-backwater-houseboats.jpg",
    alt: "Kerala backwaters guide view from a houseboat in Alappuzha",
    width: 1200,
    height: 630,
  },
  itinerary: ["Kerala Backwaters", "Alleppey", "Alappuzha", "Kuttanad"],
  touristType: ["First-time visitors", "Couples", "Families", "Private groups"],
  keywords: [
    "kerala backwaters guide",
    "kerala backwater trip guide",
    "alleppey backwater planning",
  ],
});

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata({
    title: "Kerala Backwaters Guide | How To Plan The Right Backwater Trip",
    description:
      "Read a practical Kerala backwaters guide covering Alleppey planning, trip formats, route styles, and how to choose the right backwater experience.",
    path: "/kerala-backwaters-guide",
    keywords: [
      "kerala backwaters guide",
      "kerala backwater trip guide",
      "alleppey backwater planning",
      "how to explore kerala backwaters",
    ],
    image: {
      url: "/images/home-backwater-houseboats.jpg",
      width: 1200,
      height: 630,
      alt: "Kerala backwaters guide view from a houseboat in Alappuzha",
    },
  });
}

export default function KeralaBackwatersGuidePage() {
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
        eyebrow="Editorial Backwater Guide"
        title="Kerala backwaters guide for travelers who want more than a generic boat ride."
        intro="This page is for guests who want to understand how the backwaters actually work before choosing a trip. If you are comparing Alleppey, route styles, boat formats, and how much time you really need, this guide gives you the practical overview first."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Kerala Backwaters Guide" },
        ]}
        galleryImages={[
          {
            src: "/images/home-backwater-houseboats.jpg",
            alt: "Kerala backwaters viewed from a houseboat in Alappuzha",
          },
          {
            src: "/images/shikkara-gallery/shikkara-sunset-angle.webp",
            alt: "Smaller backwater ride format for Kerala canal sightseeing",
          },
          {
            src: "/images/home-hero-backwater-canoe.jpg",
            alt: "Village canal stretch in the Kerala backwaters",
          },
          {
            src: "/images/kayaking-gallery/IMG_9378.webp",
            alt: "Kayaking route through quieter Kerala backwater waterways",
          },
        ]}
        quickFacts={[
          "Best starting hub: Alleppey",
          "Ideal for day trips and overnight stays",
          "Houseboats, shikara rides, country boats, and kayaking all fit different goals",
          "Village canals and open-water stretches feel very different",
        ]}
        overviewTitle="The Kerala backwaters make the most sense when you think in trip styles, not just destinations."
        overviewCards={[
          {
            title: "A network, not one single spot",
            text: "The backwaters are a connected landscape of canals, lagoons, lake stretches, and village waterways. That is why two backwater trips can feel very different even when both are in the Alappuzha region.",
          },
          {
            title: "Alleppey is the clearest entry point",
            text: "For most travelers, Alleppey is where the backwaters become easiest to access and compare. It offers the strongest mix of overnight houseboats, smaller scenic rides, and quieter village-route options.",
          },
          {
            title: "The right format matters more than a long checklist",
            text: "Some guests want a full overnight stay, others want a shorter canal ride, and some want to be closer to the water itself. Choosing the right format changes the trip far more than trying to pack in too many stops.",
          },
        ]}
        practicalTitle="Start planning with pace, route depth, and comfort level."
        practicalItems={[
          "Choose a houseboat if you want deck time, meals, private space, and the option of an overnight rhythm.",
          "Choose a shikara ride if you want a shorter, more intimate canal experience without the scale of a houseboat.",
          "Choose a country boat or kayaking route if you want the closest feel to village life and narrower waterways.",
          "Think about whether your trip should focus on scenery, relaxation, or active exploration before you compare packages.",
        ]}
        practicalNote="Most planning confusion comes from comparing all backwater experiences as if they deliver the same kind of day. They do not. The most useful first question is what kind of pace and space you want on the water."
        featureEyebrow="Why People Come"
        featureTitle="Travelers usually want one of three very different backwater experiences."
        featureIntro="The backwaters can feel romantic, family-friendly, scenic, active, or deeply quiet depending on the format you choose. That variety is exactly why a guide page helps before a booking page."
        featureCards={[
          {
            title: "The stay-focused version",
            text: "This is the houseboat path. It is best for guests who want more time on the water, shared meals, private rooms, and a slower overnight or day-cruise rhythm.",
          },
          {
            title: "The lighter sightseeing version",
            text: "This is usually the shikara or shorter scenic-ride path. It suits guests who want canal views and local atmosphere without committing to a longer floating stay.",
          },
          {
            title: "The closer-to-water version",
            text: "This is where kayaking and country boats stand out. They are better for quieter waterways, village life, and a more direct feel for the landscape itself.",
          },
        ]}
        compareTitle="Use this guide as the hub, then move into the page that matches your intent."
        compareIntro="These linked pages help you go from broad backwater understanding into a more specific Alleppey planning choice."
        compareCards={[
          {
            title: "Alleppey Backwater Tour",
            href: "/alleppey-backwater-tour",
            fit: "Best next step for trip planning",
            copy: "Move from broad Kerala context into a more practical Alleppey tour-planning page with route styles, format comparisons, and trip expectations.",
          },
          {
            title: "Houseboats",
            href: "/houseboats",
            fit: "Best for slower private stays",
            copy: "Go here if this guide has already convinced you that deck time, meals, and a fuller backwater rhythm matter most to your trip.",
          },
          {
            title: "Shikara Rides",
            href: "/shikkara",
            fit: "Best for shorter canal routes",
            copy: "Go here if you want a more intimate scenic ride through narrower routes without the scale or timing of a houseboat stay.",
          },
        ]}
        faqEyebrow="Kerala Backwaters Guide FAQs"
        faqTitle="Questions travelers usually ask before choosing a backwater trip"
        faqIntro="These answers are written for planning clarity, not just booking language."
        faqs={faqs}
        primaryCtaLabel="See Alleppey tour guide"
        primaryCtaHref="/alleppey-backwater-tour"
        secondaryCtaLabel="Browse experiences"
        secondaryCtaHref="/gallery"
        ctaTitle="Use the guide, then choose the format that fits your trip"
        ctaText="If you already know you want Alleppey specifically, move next to the dedicated Alleppey backwater tour page. If you are still comparing formats, the experience gallery and service pages will help narrow the decision."
      />
    </>
  );
}
