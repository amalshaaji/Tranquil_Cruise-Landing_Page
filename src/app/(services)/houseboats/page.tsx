import type { Metadata } from "next";
import Link from "next/link";
import { getServiceBySlug } from "@/lib/services-data";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { notFound } from "next/navigation";
import JsonLd from "@/components/seo/JsonLd";
import { QuestionAnswerList } from "@/components/seo/AiAnswerSections";
import { getServiceFaqs } from "@/lib/seo-content";
import {
  absoluteUrl,
  createBreadcrumbSchema,
  createFaqSchema,
  createImageObjectSchema,
  createServiceSchema,
  createSpeakableSchema,
  createTouristTripSchema,
  generatePageMetadata,
} from "@/lib/seo";

const service = getServiceBySlug("houseboats")!;

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata({
    title: "Alappuzha Houseboat Booking | Best Luxury, Budget & Overnight Stays",
    description:
      "Plan your Alappuzha houseboat booking with luxury houseboat Alappuzha, budget houseboat Alappuzha, and overnight houseboat stay Alappuzha options. Compare private Alleppey houseboat booking formats and get local guidance.",
    path: "/houseboats",
    keywords: [
      "alappuzha houseboat",
      "alappuzha houseboat booking",
      "best houseboat in alappuzha",
      "luxury houseboat alappuzha",
      "budget houseboat alappuzha",
      "overnight houseboat stay alappuzha",
      "alleppey houseboat booking",
    ],
    image: {
      url: "/images/houseboats-card-blue.jpg",
      width: 1200,
      height: 630,
      alt: "Alappuzha houseboat booking for a private cruise in Alleppey backwaters",
    },
  });
}

const faqs = getServiceFaqs("houseboats");

const breadcrumbJsonLd = createBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Houseboats", path: "/houseboats" },
]);

const heroImageJsonLd = createImageObjectSchema({
  path: "/images/houseboats-card-blue.jpg",
  alt: "Alappuzha houseboat booking for a private cruise in Alleppey backwaters",
  width: 1200,
  height: 630,
});

const serviceJsonLd = {
  ...createServiceSchema({
    name: "Luxury Houseboats in Alleppey",
    description:
      "Private Kerala backwater houseboats in Alleppey and Alappuzha with luxury, budget, and overnight booking options, family layouts, sunset routes, and curated departures through Punnamada Lake, Vembanad Lake, and quieter village canals.",
    path: "/houseboats",
    serviceType: "Houseboat stay",
    makesOffer: [
      {
        name: "Single Bed Houseboat",
        path: "/houseboats/single-bed",
      },
      {
        name: "2 Bedroom Houseboat",
        path: "/houseboats/2-bedroom",
      },
      {
        name: "3 Bedroom Houseboat",
        path: "/houseboats/3-bedroom",
      },
      {
        name: "5 Bedroom Houseboat",
        path: "/houseboats/5-bedroom",
      },
    ],
  }),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Houseboat Options",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Single Bed Houseboat",
          url: absoluteUrl("/houseboats/single-bed"),
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "2 Bedroom Houseboat",
          url: absoluteUrl("/houseboats/2-bedroom"),
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "3 Bedroom Houseboat",
          url: absoluteUrl("/houseboats/3-bedroom"),
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "5 Bedroom Houseboat",
          url: absoluteUrl("/houseboats/5-bedroom"),
        },
      },
    ],
  },
};

const touristTripJsonLd = createTouristTripSchema({
  name: "Luxury Houseboat Stay in Alleppey",
  description:
    "Private Kerala houseboat stays in Alleppey with luxury, budget, and overnight cruising options, family-friendly layouts, curated routes, and slower backwater experiences.",
  path: "/houseboats",
  image: {
    path: "/images/houseboats-card-blue.jpg",
    alt: "Private houseboat cruise in Alleppey backwaters",
    width: 1200,
    height: 630,
  },
  itinerary: ["Alleppey", "Alappuzha", "Punnamada Lake", "Vembanad Lake", "Kainakary"],
  touristType: ["Couples", "Families", "Private groups"],
  keywords: [
    "alappuzha houseboat",
    "alappuzha houseboat booking",
    "alleppey houseboat booking",
  ],
});

const speakableJsonLd = createSpeakableSchema({
  path: "/houseboats",
  name: "Luxury Houseboats in Alleppey",
  description:
    "Private Kerala backwater houseboats in Alleppey with local Alappuzha houseboat booking guidance, overnight cruising, family-friendly layouts, and route planning.",
  cssSelectors: ["main h1", "main p"],
});

const answerFirstItems = [
  {
    question: "How much does an Alleppey houseboat cost?",
    answer:
      "An Alleppey houseboat booking quote depends on boat type, route, season, meals, AC timing, and guest count. A private day cruise on Punnamada Lake or a longer overnight houseboat stay Alappuzha route toward Vembanad Lake will not be priced the same, so the clearest quote comes after you share your dates and group size.",
  },
  {
    question: "What is included in an Alleppey houseboat booking?",
    answer:
      "A private Alleppey houseboat booking usually includes the boat, crew, cruising time, bedroom and deck access, and meals or refreshments based on whether you choose a day cruise or an overnight stay. Exact inclusions still depend on whether your plan is a luxury houseboat Alappuzha booking, a budget houseboat Alappuzha stay, or a larger family layout.",
  },
  {
    question: "How do I choose the best houseboat in Alappuzha?",
    answer:
      "The best houseboat in Alappuzha depends on your guest count, comfort level, and whether you want a luxury cruise, a budget-friendly stay, or a private overnight plan. Couples often start with one-bedroom options, while families and groups usually compare two-bedroom, three-bedroom, and five-bedroom layouts.",
  },
  {
    question: "Is AC available in Alappuzha houseboats?",
    answer:
      "AC is available on many Alappuzha houseboats, but the schedule and room setup can vary by boat type and stay format. It is best to confirm the AC timing, bedroom layout, and overnight comfort before booking so the plan matches your group and the season.",
  },
];

export default function HouseboatsPage() {
  if (!service) notFound();
  return (
    <>
      <JsonLd data={[breadcrumbJsonLd, heroImageJsonLd, serviceJsonLd, touristTripJsonLd, speakableJsonLd, createFaqSchema(faqs)]} />
      <ServicePageTemplate service={service} stackedAfterIntro />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-20">
        <div className="rounded-[2rem] border border-navy/8 bg-[linear-gradient(180deg,#ffffff_0%,#f7fbfc_100%)] p-6 shadow-[0_18px_40px_rgba(23,50,71,0.06)] sm:rounded-[2.6rem] sm:p-10">
          <div className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-teal-600/80">
            Booking Paths
          </div>
          <h2 className="mt-3 max-w-4xl text-3xl font-semibold tracking-tight text-sand sm:text-4xl">
            Compare the right Alappuzha houseboat booking path before you lock dates.
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-foreground/68 sm:text-base">
            Some guests want the best houseboat in Alappuzha with a premium route and polished
            service. Others want a lighter-value stay or a clear overnight houseboat stay
            Alappuzha plan. These internal links take you straight into the booking angle that
            matches your trip.
          </p>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            <Link
              href="/luxury-houseboat-alappuzha"
              className="rounded-[1.5rem] border border-navy/8 bg-white p-5 transition hover:bg-[#f8fbfc]"
            >
              <h3 className="text-xl font-semibold text-[#173247]">Luxury Houseboat Alappuzha</h3>
              <p className="mt-3 text-sm leading-7 text-foreground/68">
                Explore premium cabins, private cruise pacing, and higher-comfort layouts for a
                more curated Alleppey houseboat booking.
              </p>
            </Link>
            <Link
              href="/budget-houseboat-alappuzha"
              className="rounded-[1.5rem] border border-navy/8 bg-white p-5 transition hover:bg-[#f8fbfc]"
            >
              <h3 className="text-xl font-semibold text-[#173247]">Budget Houseboat Alappuzha</h3>
              <p className="mt-3 text-sm leading-7 text-foreground/68">
                Compare practical layouts and simpler spend levels if you want an affordable
                Alappuzha houseboat without losing the private backwater feel.
              </p>
            </Link>
            <Link
              href="/overnight-houseboat-alappuzha"
              className="rounded-[1.5rem] border border-navy/8 bg-white p-5 transition hover:bg-[#f8fbfc]"
            >
              <h3 className="text-xl font-semibold text-[#173247]">
                Overnight Houseboat Stay Alappuzha
              </h3>
              <p className="mt-3 text-sm leading-7 text-foreground/68">
                Move here if your priority is dinner on board, bedroom access, and a calmer night
                on the water instead of a daytime-only cruise.
              </p>
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-[linear-gradient(180deg,#edf4f8_0%,#d8e4ec_100%)] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-navy/8 bg-white/92 p-6 shadow-[0_24px_60px_rgba(47,79,104,0.08)] backdrop-blur-sm sm:rounded-[2.4rem] sm:p-8 lg:p-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-teal/80">
                Compare Before You Book
              </p>
              <h2 className="mt-3 max-w-2xl font-[var(--font-display)] text-[2rem] leading-tight text-navy sm:text-4xl">
                View every Alappuzha houseboat side by side for features, layout, and guest fit
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-foreground/70 sm:text-base">
                If you are deciding between a couple stay, a family layout, or a larger group
                boat, our comparison page puts the single-bedroom, two-bedroom, three-bedroom, and
                five-bedroom options in one practical view for a smoother Alleppey houseboat
                booking decision.
              </p>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-foreground/70 sm:text-base">
                If your search started with the exact keyword, begin with our{" "}
                <Link href="/alappuzha-houseboat" className="font-semibold text-teal hover:text-navy">
                  Alappuzha houseboat guide
                </Link>{" "}
                and then use this comparison hub to narrow the right room count and stay style.
              </p>
            </div>
            <Link
              href="/houseboats/compare"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-navy px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-ink"
            >
              Compare houseboats
            </Link>
          </div>
        </div>
      </section>
      <QuestionAnswerList
        eyebrow="Answer First"
        title="Short answers before you compare every houseboat format."
        intro="These direct answers are placed high on the page so guests can narrow the main decision quickly before moving into layouts, comparisons, and planning details."
        items={answerFirstItems}
        sectionClassName="pt-0 sm:pt-0 lg:pt-0"
      />
    </>
  );
}
