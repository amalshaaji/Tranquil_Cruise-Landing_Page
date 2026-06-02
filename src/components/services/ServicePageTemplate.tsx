"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import ServiceGallery from "./ServiceGallery";
import GalleryPreviewHero from "@/components/shared/GalleryPreviewHero";
import FaqSection from "@/components/seo/FaqSection";
import InternalLinksSection from "@/components/seo/InternalLinksSection";
import PageBreadcrumbs from "@/components/seo/PageBreadcrumbs";
import TrustSignalsSection from "@/components/seo/TrustSignalsSection";
import ExperienceComparisonSection from "@/components/seo/ExperienceComparisonSection";
import { getInternalLinkGraph, getServiceFaqs } from "@/lib/seo-content";
import type { ServicePage } from "@/lib/services-data";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const houseboatPricingBands = [
  {
    title: "Couple stays",
    detail: "Usually best matched to the single-bedroom format for shorter or more intimate overnight plans.",
  },
  {
    title: "Family stays",
    detail: "Most families look first at two-bedroom or three-bedroom layouts for privacy, pacing, and shared lounge comfort.",
  },
  {
    title: "Group celebrations",
    detail: "Larger gatherings usually need three-bedroom or five-bedroom houseboats with more generous common space.",
  },
] as const;

const houseboatExperiencePaths = [
  {
    title: "Overnight cruising",
    description:
      "Best if you want the full Kerala backwater rhythm with dinner, slower evening light, and time to stay on the water.",
  },
  {
    title: "Family-focused stays",
    description:
      "A better fit for mixed-age groups that need separate bedrooms, easier movement, and more shared indoor space.",
  },
  {
    title: "Celebration getaways",
    description:
      "Well suited to reunions, birthday trips, and larger private groups who want a more social deck-and-dining setup.",
  },
] as const;

const houseboatRouteIdeas = [
  {
    title: "Village canal routes",
    description:
      "A calmer option for guests who want palms, local life, narrow waterways, and a more intimate sense of the backwaters.",
  },
  {
    title: "Lake-facing stretches",
    description:
      "A stronger match for bigger open-water views, softer evening light, and that iconic Alleppey houseboat mood.",
  },
  {
    title: "Mixed pace itineraries",
    description:
      "A balanced route that combines quieter canal sections with wider water depending on timing, group size, and comfort.",
  },
] as const;

const sampleItineraries: Record<
  string,
  {
    title: string;
    steps: string[];
  }[]
> = {
  houseboats: [
    {
      title: "Overnight Alleppey houseboat stay",
      steps: [
        "Board in Alappuzha, settle into the room, and begin with canal and lake-facing cruising.",
        "Pause into the late afternoon for open-deck views, slower village stretches, and dinner on board.",
        "Stay overnight on the water, then ease into a calmer breakfast-and-checkout rhythm the next morning.",
      ],
    },
    {
      title: "Private family houseboat plan",
      steps: [
        "Confirm the right bedroom layout for the group before the route is locked.",
        "Cruise through a balanced mix of village canals and wider backwater stretches with meal timing built in.",
        "Use the return or overnight timing based on whether the group wants a day trip or a slower family stay.",
      ],
    },
  ],
  shikkara: [
    {
      title: "Sunset shikkara ride",
      steps: [
        "Board in the Alappuzha area and move into quieter canals before the light gets softer.",
        "Cruise through village routes with time for photos, birdlife, and a slower local rhythm.",
        "Return after the golden-hour stretch while the ride still feels calm instead of rushed.",
      ],
    },
  ],
  "canoe-boats": [
    {
      title: "Village country boat route",
      steps: [
        "Start from a quieter Alleppey canal-side point and move deeper into village waterways.",
        "Pass local homes, palms, coir-working areas, and slower backwater scenes that larger boats usually miss.",
        "Return after a compact sightseeing loop or extend the route based on your pace and group.",
      ],
    },
  ],
  kayaking: [
    {
      title: "Beginner-friendly backwater kayaking trail",
      steps: [
        "Meet near the Alappuzha launch point, fit safety gear, and begin with a short briefing.",
        "Paddle through calmer canal sections before moving into a slightly broader scenic stretch.",
        "Return on a loop that keeps the trail relaxed, photo-friendly, and comfortable for first-time paddlers.",
      ],
    },
  ],
  rooms: [
    {
      title: "Backwater room stay in Alappuzha",
      steps: [
        "Check in near the backwaters and settle into a quieter waterside base instead of a busier town hotel pattern.",
        "Use the stay as a flexible base for houseboats, shikkara rides, or a slower local evening.",
        "Leave the next day with enough room to pair the stay with another Alleppey experience if needed.",
      ],
    },
  ],
  spa: [
    {
      title: "Backwater wellness session",
      steps: [
        "Choose a treatment window that fits around your cruise or stay schedule in Alappuzha.",
        "Arrive for a calmer wellness session shaped around rest, recovery, and a slower Kerala pace.",
        "Continue the day with lighter sightseeing or backwater downtime instead of stacking a rushed itinerary.",
      ],
    },
  ],
};

const localRelevanceBySlug: Record<string, string[]> = {
  houseboats: [
    "These houseboat routes are planned around the Alappuzha and Alleppey side of the Kerala backwaters, where canal life, lake stretches, and overnight cruising are easiest to combine.",
    "Guests usually choose this format because Alappuzha gives them access to both iconic open-water views and quieter village canal sections without shifting far from the main boarding area.",
  ],
  shikkara: [
    "Shikkara rides make particular sense in Alappuzha because the narrower local canals and village-side routes suit a lighter boat better than a full houseboat.",
    "This is often the easiest Alleppey format for guests who want a shorter scenic plan while still seeing the more intimate side of the backwaters.",
  ],
  "canoe-boats": [
    "Country boat routes are especially valuable in Alleppey and Alappuzha because they move closer to everyday canal life, village homes, coconut groves, and narrower waterways.",
    "They are one of the clearest ways to experience the local backwaters without turning the day into a larger resort-style cruise.",
  ],
  kayaking: [
    "Kayaking in Alappuzha works best where canal traffic is calmer and the backwater route feels greener, narrower, and more direct than a larger sightseeing plan.",
    "That makes this a strong format for guests who want a more active but still local experience in the Alleppey backwaters.",
  ],
  rooms: [
    "A backwater room in Alappuzha works well when you want to stay close to the boating side of Alleppey rather than using a generic city hotel as your base.",
    "It is especially useful for guests combining a room stay with houseboats, shikkara rides, or an early start into the backwaters.",
  ],
  spa: [
    "Wellness sessions feel more relevant in Alappuzha when they are paired with slower backwater time instead of standing alone as a city treatment booking.",
    "Many guests use this as a softer addition to a houseboat, room stay, or lighter sightseeing day in Alleppey.",
  ],
};

const safetyNotesBySlug: Record<string, string[]> = {
  houseboats: [
    "Life jackets, basic onboard safety gear, and crew support are part of the planning baseline.",
    "Meal service, overnight comfort, AC timing, and boarding details should be confirmed before arrival so the stay feels predictable and easy.",
  ],
  shikkara: [
    "Private rides should include life jackets and a stable boarding process, especially for children and older guests.",
    "Weather, timing, and canal conditions affect the best ride window, so a slower flexible plan is better than forcing a fixed departure.",
  ],
  "canoe-boats": [
    "Country boat plans should match the group’s comfort level, route type, and whether the ride is guided or more hands-on.",
    "Sun exposure, hydration, and easier boarding access matter more here because the format is more open than a covered shikkara or houseboat.",
  ],
  kayaking: [
    "Kayaking routes should begin with a basic briefing, life jackets, and a pace that fits beginners as well as active guests.",
    "The best Alappuzha kayaking routes are the ones that stay scenic and calm enough to feel enjoyable, not over-technical.",
  ],
  rooms: [
    "For room stays, guests usually care most about clean washrooms, practical check-in support, and whether the location feels easy for the experiences planned around it.",
    "A quieter Alleppey stay works best when transport, meals, and next-day boating plans are simple to coordinate.",
  ],
  spa: [
    "For spa sessions, hygiene, treatment-room cleanliness, therapist coordination, and realistic scheduling around your day matter more than a long menu of options.",
    "The most comfortable plan is usually the one that leaves enough rest time before or after your backwater activity.",
  ],
};

const bookingSteps = [
  "Share your dates, guest count, and whether you want a lighter ride, a full stay, or something slower and more private.",
  "We help narrow the right format, route style, and timing based on your group, comfort level, and budget range.",
  "Once the plan fits, we confirm availability, the boarding or check-in details, and the next booking step directly.",
] as const;

const pricingFactorsBySlug: Record<string, string[]> = {
  houseboats: [
    "Boat size and bedroom count",
    "Day cruise versus overnight stay",
    "Route length, canal mix, and meal expectations",
  ],
  shikkara: [
    "Ride duration and time of day",
    "Route style and canal coverage",
    "Guest count and any added planning requests",
  ],
  "canoe-boats": [
    "Village route length and pace",
    "Private setup and guest count",
    "Timing, stopping points, and route style",
  ],
  kayaking: [
    "Trail length and activity level",
    "Guide support and session timing",
    "Group size and route difficulty",
  ],
  rooms: [
    "Room category and stay dates",
    "Waterside setting and stay length",
    "Whether the stay is paired with another experience",
  ],
  spa: [
    "Treatment type and session length",
    "Single session versus added wellness time",
    "How the treatment fits around your stay or cruise",
  ],
};

const inclusionSummaryBySlug: Record<string, string[]> = {
  houseboats: [
    "Private boat access, crew support, and the selected cruising window",
    "Bedroom, lounge, and deck access based on the chosen layout",
    "Meals or refreshments depending on whether the plan is a day cruise or overnight stay",
  ],
  shikkara: [
    "Private ride setup with a local boatman",
    "Route timing shaped around the selected canal experience",
    "Basic safety support and a calmer sightseeing pace",
  ],
  "canoe-boats": [
    "Country boat access with route planning around village canals",
    "A slower local sightseeing format matched to the chosen route",
    "Basic safety support and timing shaped around your pace",
  ],
  kayaking: [
    "Kayak session planning matched to the trail and group pace",
    "Guide support where applicable and route briefing",
    "Basic safety gear and a trail chosen for the comfort level of the group",
  ],
  rooms: [
    "The selected stay category and access to the room or homestay setting",
    "A calmer backwater-side base for the dates booked",
    "Support coordinating the stay with nearby experiences when needed",
  ],
  spa: [
    "The selected treatment or wellness session",
    "A slower, more restorative format shaped around your timing",
    "Support pairing the session with a stay, cruise, or lighter day plan",
  ],
};

function descriptiveGalleryAlt(service: ServicePage, index: number) {
  const labels: Record<string, string[]> = {
    houseboats: [
      "Luxury houseboat cruising through the Alleppey backwaters",
      "Private Kerala houseboat stay in Alappuzha",
      "Backwater houseboat deck and canal views in Alleppey",
    ],
    "canoe-boats": [
      "Country boat ride through a village canal in Alleppey",
      "Open country boat on the Kerala backwaters",
    ],
    kayaking: [
      "Guided kayaking trail in the Alleppey backwaters",
      "Kayaking through quiet Alappuzha canals",
      "Kerala backwater kayak route near village waterways",
      "Sunset kayaking in Alleppey",
    ],
    rooms: ["Backwater room and homestay setting in Alappuzha"],
    spa: [
      "Ayurvedic spa room near the Kerala backwaters",
      "Wellness space for spa treatments in Alappuzha",
      "Backwater wellness retreat setting in Kerala",
      "Relaxing spa area near Alleppey waterways",
    ],
  };

  return labels[service.slug]?.[index] ?? `${service.title} in Alleppey, Kerala`;
}

export default function ServicePageTemplate({
  service,
  stackedAfterIntro = false,
}: {
  service: ServicePage;
  stackedAfterIntro?: boolean;
}) {
  const hasGallery = service.gallery.length > 0;
  const showCloserLookGallery =
    hasGallery &&
    service.slug !== "spa" &&
    service.slug !== "houseboats" &&
    service.slug !== "canoe-boats" &&
    service.slug !== "rooms" &&
    service.slug !== "kayaking";
  const galleryImages = service.gallery.map((image, index) =>
    typeof image === "string"
      ? {
          src: image,
          alt: descriptiveGalleryAlt(service, index),
        }
      : {
          src: image.src,
          alt: image.alt,
        },
  );
  const faqs = getServiceFaqs(service.slug);
  const internalLinkGraph = getInternalLinkGraph(`/${service.slug}`);
  const titleBySlug: Record<string, string> = {
    houseboats: "Alappuzha Houseboat Booking",
    kayaking: "Backwater Kayaking in Alleppey",
    rooms: "Backwater Rooms & Homestays in Alleppey",
    spa: "Ayurvedic Spa & Wellness in Alleppey Backwaters",
    "canoe-boats": "Country Boat Rides in Alleppey",
  };

  const featuredHighlights = service.highlights.slice(0, 3);
  const supportingHighlights = service.highlights.slice(3);
  const quickFacts = service.facilities.slice(0, 4);
  const isHouseboatsPage = service.slug === "houseboats";
  const isKayakingPage = service.slug === "kayaking";
  const isCountryBoatsPage = service.slug === "canoe-boats";
  const showBookingAside = service.slug !== "kayaking";
  const heroTagItems = service.facilities.slice(0, 5);
  const optionsGridClass = isHouseboatsPage
    ? "grid gap-6 md:grid-cols-2"
    : "grid gap-10 lg:grid-cols-2";
  const itineraryExamples = sampleItineraries[service.slug] ?? [];
  const localRelevance = localRelevanceBySlug[service.slug] ?? [];
  const safetyNotes = safetyNotesBySlug[service.slug] ?? [];
  const pricingFactors = pricingFactorsBySlug[service.slug] ?? [];
  const inclusionSummary = inclusionSummaryBySlug[service.slug] ?? [];

  return (
    <main className="overflow-x-hidden bg-white pb-24 font-sans antialiased sm:pb-32">
      <section
        className={`mx-auto max-w-7xl px-4 sm:px-6 ${
          stackedAfterIntro
            ? "pb-14 pt-4 sm:pb-24 sm:pt-6 lg:pt-8"
            : isKayakingPage
              ? "pb-12 pt-10 sm:pb-24 sm:pt-24"
              : isHouseboatsPage
                ? "pb-14 pt-10 sm:pb-24 sm:pt-14 lg:pt-20"
                : "pb-14 pt-28 sm:pb-24 sm:pt-32 lg:pt-44"
        }`}
      >
        {isHouseboatsPage ? (
          <div className="max-w-4xl">
            <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
              <PageBreadcrumbs
                crumbs={[
                  { label: "Home", href: "/" },
                  { label: service.slug === "canoe-boats" ? "Country Boats" : service.title },
                ]}
              />
              <div className="mb-4 inline-block text-[0.7rem] font-bold uppercase tracking-[0.3em] text-teal-600/80">
                {service.eyebrow}
              </div>
              <h1 className="responsive-title-flow mb-5 text-[clamp(2.45rem,11vw,4.5rem)] font-semibold leading-[1.02] tracking-tight text-sand sm:mb-6">
                {titleBySlug[service.slug] ?? service.title}
                <span className="hidden sm:inline"> <br /></span>
                <span
                  className={`mt-4 block font-[var(--font-luxe)] text-[1.08em] italic tracking-[-0.02em] sm:mt-5 ${
                    service.slug === "spa" ? "text-[#6b7f73]" : "text-[#5f6f83]"
                  }`}
                >
                  {service.subtitle}.
                </span>
              </h1>
              <div className="mb-8 max-w-3xl space-y-4 text-base leading-relaxed text-foreground/60 sm:mb-10 sm:text-lg">
                {service.description.map((paragraph, index) => (
                  <p
                    key={`${service.slug}-description-${index}`}
                    className={index === 0 ? "text-foreground/72" : undefined}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        ) : (
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <GalleryPreviewHero
              galleryImages={galleryImages}
              breadcrumbs={
                isKayakingPage ? undefined : (
                  <PageBreadcrumbs
                    crumbs={[
                      { label: "Home", href: "/" },
                      { label: service.slug === "canoe-boats" ? "Country Boats" : service.title },
                    ]}
                  />
                )
              }
              eyebrow={service.eyebrow}
              title={
                <>
                  {titleBySlug[service.slug] ?? service.title}
                  <span className="mt-2 block font-[var(--font-luxe)] text-[0.82em] italic tracking-[-0.02em] text-sand/70">
                    {service.subtitle}.
                  </span>
                </>
              }
              description={
                <>
                  {service.description.map((paragraph, index) => (
                    <p
                      key={`${service.slug}-description-${index}`}
                      className={index === 0 ? "text-foreground/76" : undefined}
                    >
                      {paragraph}
                    </p>
                  ))}
                </>
              }
              actions={[{ href: service.ctaHref, label: service.ctaText }]}
              aside={
                isKayakingPage ? (
                  <div className="group relative w-full rounded-[2rem] border border-navy/8 bg-white/92 p-6 text-center shadow-[0_18px_40px_rgba(47,79,104,0.08)] backdrop-blur-sm sm:p-8">
                    <div className="mb-2 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-teal/70 sm:mb-3 sm:text-xs sm:tracking-[0.2em]">
                      Best for
                    </div>
                    <div className="text-3xl font-bold tracking-tight text-sand sm:text-5xl">
                      Scenic active rides
                    </div>
                    <div className="mt-2 text-sm leading-7 text-foreground/50 sm:text-base">
                      A softer adventure format for couples, friends, and first-time paddlers who
                      want quiet canals with more movement and closer-to-water views.
                    </div>
                    <div className="mt-6 border-t border-navy/5 pt-5 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-foreground/40 sm:mt-8 sm:pt-6 sm:text-[0.65rem] sm:tracking-widest">
                      Guided Backwater Trail
                    </div>
                  </div>
                ) : isCountryBoatsPage ? (
                  <div className="group relative w-full rounded-[2rem] border border-navy/8 bg-white/92 p-6 text-center shadow-[0_18px_40px_rgba(47,79,104,0.08)] backdrop-blur-sm sm:p-8">
                    <div className="mb-2 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-teal/70 sm:mb-3 sm:text-xs sm:tracking-[0.2em]">
                      Best fit
                    </div>
                    <div className="text-3xl font-bold tracking-tight text-sand sm:text-5xl">
                      1 to 8 hours
                    </div>
                    <div className="mt-3 text-sm leading-7 text-foreground/50 sm:text-base">
                      Best for couples, small families, and guests who want slower village-canal
                      routes with a more local backwater feel.
                    </div>
                    <div className="mt-6 border-t border-navy/5 pt-5 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-foreground/40 sm:mt-8 sm:pt-6 sm:text-[0.65rem] sm:tracking-widest">
                      Private Village Route
                    </div>
                  </div>
                ) : showBookingAside ? (
                  <div className="rounded-[2rem] border border-navy/8 bg-white/90 p-6 shadow-[0_18px_40px_rgba(47,79,104,0.08)] backdrop-blur-sm sm:p-7">
                    <div className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-teal/80">
                      Planning guidance
                    </div>
                    <div className="mt-4 rounded-[1.4rem] border border-navy/8 bg-[#f8fbfc] p-4">
                      <div className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-foreground/40">
                        Best starting point
                      </div>
                      <div className="mt-3 text-2xl font-bold tracking-tight text-navy sm:text-3xl">
                        Start with your trip style
                      </div>
                    </div>
                    <div className="mt-5 rounded-[1.5rem] border border-teal/12 bg-[#edf5f8] p-5">
                      <div className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-teal/80">
                        Booking note
                      </div>
                      <p className="mt-3 text-sm font-semibold leading-relaxed text-foreground/72">
                        Share your dates, guest count, and route preference.
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-foreground/60">
                        {service.priceNote}
                      </p>
                    </div>
                    <div className="mt-6 border-t border-navy/5 pt-6">
                      <div className="text-[0.65rem] font-semibold uppercase tracking-widest text-foreground/40">
                        Quick notes
                      </div>
                      <div className="mt-4 space-y-3">
                        {quickFacts.map((fact) => (
                          <div
                            key={fact}
                            className="flex items-start gap-3 rounded-2xl border border-navy/6 bg-white px-4 py-3 text-sm font-medium text-foreground/68 shadow-sm"
                          >
                            <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-teal-500" />
                            {fact}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : null
              }
              bottomTags={
                isKayakingPage ? (
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="flex flex-wrap justify-center gap-2.5 sm:gap-3 lg:justify-start"
                  >
                    {heroTagItems.map((facility) => (
                      <div
                        key={facility}
                        className="cursor-default rounded-full border border-navy/10 bg-white/80 px-4 py-2 text-[0.7rem] font-medium text-foreground/60 shadow-sm backdrop-blur-sm transition-all hover:border-teal-400 hover:text-teal-700 sm:px-5 sm:text-xs"
                      >
                        {facility}
                      </div>
                    ))}
                  </motion.div>
                ) : undefined
              }
            />
          </motion.div>
        )}

        {!isHouseboatsPage && !isKayakingPage && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-12 flex flex-wrap justify-center gap-3 sm:mt-16 lg:justify-start"
          >
            {service.facilities.map((facility) => (
              <div
                key={facility}
                className="cursor-default rounded-full border border-navy/10 bg-white/80 px-5 py-2 text-xs font-medium text-foreground/60 shadow-sm backdrop-blur-sm transition-all hover:border-teal-400 hover:text-teal-700"
              >
                {facility}
              </div>
            ))}
          </motion.div>
        )}
      </section>

      {service.options && service.options.length > 0 && (
        <section className="bg-[#f4f8fa] px-4 py-14 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mb-10 text-center sm:mb-14"
            >
              <div className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-teal-600/80">
                Curated Selection
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-sand sm:text-5xl">
                Choose your version of the experience
              </h2>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={optionsGridClass}
            >
              {service.options.map((option) => {
                const featuredLabel = isHouseboatsPage ? option.details[0] : null;
                const visibleDetails = isHouseboatsPage
                  ? option.details.slice(1, 3)
                  : option.details.slice(0, 2);

                return (
                  <motion.div
                    key={option.title}
                    variants={fadeInUp}
                    className={`group relative overflow-hidden rounded-[2.5rem] border border-navy/10 bg-white shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-gold/35 hover:shadow-[0_28px_68px_rgba(23,50,71,0.18)] ${
                      isHouseboatsPage
                        ? "min-h-[24rem]"
                        : "min-h-[28rem] sm:min-h-0 sm:aspect-[5/4] lg:h-[600px] lg:aspect-auto"
                    }`}
                  >
                    {isHouseboatsPage ? (
                      <>
                        <div className="relative h-52 overflow-hidden sm:h-60">
                          {option.image ? (
                            <>
                              <Image
                                src={option.image}
                                alt={`${option.title} houseboat in the Alleppey backwaters`}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,24,35,0.05)_0%,rgba(10,27,42,0.08)_44%,rgba(10,27,42,0.3)_100%)]" />
                            </>
                          ) : (
                            <div className="absolute inset-0 bg-[linear-gradient(180deg,#d6e7ef_0%,#b9d3e0_100%)]" />
                          )}
                        </div>

                        <div className="relative bg-[linear-gradient(180deg,#eef5f8_0%,#ffffff_100%)] p-5 sm:p-8 lg:p-10">
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(104,185,176,0.14),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(23,50,71,0.08),transparent_30%)] opacity-90" />
                          <div className="relative">
                            {featuredLabel ? (
                              <div className="mb-3">
                                <span className="inline-flex rounded-full border border-[#b9d8df] bg-white/88 px-3 py-1 text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-[#31546c] shadow-sm">
                                  {featuredLabel}
                                </span>
                              </div>
                            ) : null}
                            <h3 className="max-w-[12ch] text-[1.22rem] font-semibold leading-[1.06] tracking-tight text-navy sm:text-[1.85rem]">
                              {option.title}
                            </h3>
                            <div className="mt-4 mb-5 flex flex-wrap gap-2.5 sm:gap-3">
                              {visibleDetails.map((detail) => (
                                <div
                                  key={detail}
                                  className="flex items-center gap-2 rounded-full border border-[#cfe1e8] bg-white/92 px-3 py-1.5 text-[0.68rem] font-medium leading-tight text-[#31546c] shadow-sm sm:text-xs"
                                >
                                  <div className="h-1 w-1 rounded-full bg-teal" />
                                  {detail}
                                </div>
                              ))}
                            </div>

                            {option.href ? (
                              <Link
                                href={option.href}
                                className="group/btn inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-5 py-3 text-center text-[0.82rem] font-bold text-[#173247] shadow-2xl transition-all duration-300 hover:bg-sand hover:text-white sm:px-8 sm:py-4 sm:text-sm"
                              >
                                <span className="uppercase tracking-[0.08em] sm:tracking-wider">
                                  {option.ctaLabel ?? "Reserve now"}
                                </span>
                                <span className="text-lg transition-transform duration-300 group-hover/btn:translate-x-1">
                                  →
                                </span>
                              </Link>
                            ) : null}
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        {option.image ? (
                          <>
                            <Image
                              src={option.image}
                              alt={`${option.title} houseboat in the Alleppey backwaters`}
                              fill
                              sizes="(max-width: 1024px) 100vw, 50vw"
                              className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,24,35,0.1)_0%,rgba(10,27,42,0.16)_38%,rgba(10,27,42,0.78)_100%)]" />
                          </>
                        ) : (
                          <div className="absolute inset-0 bg-[linear-gradient(180deg,#f8fbfd_0%,#ebf4f8_52%,#dcecf1_100%)]" />
                        )}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(104,185,176,0.18),transparent_36%),radial-gradient(circle_at_bottom_left,rgba(23,50,71,0.18),transparent_34%)] opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

                        <div className="absolute inset-x-0 bottom-0 flex h-full flex-col justify-end p-5 sm:p-8 lg:p-10">
                          {featuredLabel ? (
                            <div className="mb-3">
                              <span className="inline-flex rounded-full border border-[#b9d8df] bg-white/88 px-3 py-1 text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-[#31546c] shadow-sm">
                                {featuredLabel}
                              </span>
                            </div>
                          ) : null}
                          <h3 className={`max-w-[12ch] font-semibold tracking-tight ${option.image ? "text-white" : "text-navy"} ${
                            isHouseboatsPage ? "text-[1.22rem] leading-[1.06] sm:text-[1.85rem]" : "text-[1.8rem] sm:text-4xl"
                          }`}>
                            {option.title}
                          </h3>
                          <div className={`mt-4 flex flex-wrap gap-2.5 sm:gap-3 ${
                            isHouseboatsPage ? "mb-5" : "mb-6 sm:mb-8"
                          }`}>
                            {visibleDetails.map((detail) => (
                              <div
                                key={detail}
                                className="flex items-center gap-2 rounded-full border border-[#cfe1e8] bg-white/92 px-3 py-1.5 text-[0.68rem] font-medium leading-tight text-[#31546c] shadow-sm sm:text-xs"
                              >
                                <div className="h-1 w-1 rounded-full bg-teal" />
                                {detail}
                              </div>
                            ))}
                          </div>

                          {option.href && (
                            <Link
                              href={option.href}
                              className="group/btn inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-5 py-3 text-center text-[0.82rem] font-bold text-[#173247] shadow-2xl transition-all duration-300 hover:bg-sand hover:text-white sm:w-full sm:px-8 sm:py-4 sm:text-sm lg:w-auto"
                            >
                              <span className={`uppercase ${isHouseboatsPage ? "tracking-[0.08em] sm:tracking-wider" : "tracking-wider"}`}>
                                {option.ctaLabel ?? "Reserve now"}
                              </span>
                              <span className="text-lg transition-transform duration-300 group-hover/btn:translate-x-1">
                                →
                              </span>
                            </Link>
                          )}
                        </div>
                      </>
                    )}
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>
      )}

      {isHouseboatsPage ? (
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-20">
          <div className="grid gap-6 lg:grid-cols-[0.95fr,1.05fr]">
            <div className="rounded-[2rem] border border-navy/8 bg-[linear-gradient(180deg,#ffffff_0%,#f7fbfc_100%)] p-6 shadow-[0_18px_40px_rgba(23,50,71,0.06)] sm:rounded-[2.6rem] sm:p-10">
              <div className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-teal-600/80">
                Planning Guidance
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-sand sm:text-4xl">
                How to choose the right houseboat in Alleppey
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-foreground/66 sm:text-base">
                We do not publish one flat package because details change with the
                boat size, route, season, guest count, and whether you want a
                day cruise or an overnight stay. The easiest way to compare is
                to start with the right layout for your group and then refine
                the route and timing.
              </p>

              <div className="mt-8 grid gap-4">
                {houseboatPricingBands.map((band) => (
                  <div
                    key={band.title}
                    className="rounded-[1.5rem] border border-navy/8 bg-[#f7fbfd] p-5"
                  >
                    <div className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-teal/75">
                      {band.title}
                    </div>
                    <p className="mt-3 text-sm leading-7 text-foreground/66">
                      {band.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-navy/8 bg-[linear-gradient(180deg,#eef5f8_0%,#ffffff_100%)] p-6 shadow-[0_18px_40px_rgba(23,50,71,0.06)] sm:rounded-[2.6rem] sm:p-10">
              <div className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-teal-600/80">
                What Shapes the Plan
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {[
                  "Boat size and bedroom count",
                  "Overnight stay versus shorter plan",
                  "Meal style and hospitality preferences",
                  "Route length and canal versus open-water mix",
                  "Season and date demand",
                  "Family trip versus larger group celebration",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-[1.4rem] border border-white bg-white/90 px-4 py-4 shadow-sm"
                  >
                    <span className="mt-1 inline-flex h-2 w-2 shrink-0 rounded-full bg-teal-500" />
                    <p className="text-sm leading-7 text-foreground/68">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-[1.6rem] border border-gold/25 bg-[#edf5f8] p-5 text-sm leading-7 text-foreground/72">
                If you already know your dates and guest count, the fastest way
                to get the right recommendation is to start with the bedroom
                layout below and then ask about route and meal preferences.
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-20">
        <div className="grid gap-6 lg:grid-cols-[0.92fr,1.08fr]">
          <div className="rounded-[2rem] border border-navy/8 bg-[linear-gradient(180deg,#ffffff_0%,#f7fbfc_100%)] p-6 shadow-[0_18px_40px_rgba(23,50,71,0.06)] sm:rounded-[2.6rem] sm:p-10">
            <div className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-teal-600/80">
              Pricing Guidance
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-sand sm:text-4xl">
              A clearer way to think about pricing for this Alappuzha experience
            </h2>
            <div className="mt-6 rounded-[1.5rem] border border-gold/25 bg-[#edf5f8] p-5">
              <div className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-teal/75">
                Current pricing note
              </div>
              <div className="mt-3 text-2xl font-bold tracking-tight text-navy sm:text-3xl">
                {service.priceLabel}
              </div>
              <p className="mt-3 text-sm leading-7 text-foreground/68">
                {service.priceNote}
              </p>
            </div>
            <div className="mt-6 text-sm leading-7 text-foreground/68">
              In Alleppey and Alappuzha, the final quote usually changes with route style, timing,
              group size, inclusions, and whether you want a lighter scenic plan or a slower,
              more premium experience.
            </div>
            <div className="mt-6 rounded-[1.5rem] border border-navy/8 bg-white p-5 shadow-sm">
              <div className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-teal/75">
                What usually shapes the quote
              </div>
              <div className="mt-4 grid gap-3">
                {pricingFactors.map((factor) => (
                  <div
                    key={factor}
                    className="flex items-start gap-3 rounded-2xl border border-navy/6 bg-[#f8fcfd] px-4 py-3 text-sm text-foreground/68"
                  >
                    <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-teal-500" />
                    {factor}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-navy/8 bg-[linear-gradient(180deg,#eef5f8_0%,#ffffff_100%)] p-6 shadow-[0_18px_40px_rgba(23,50,71,0.06)] sm:rounded-[2.6rem] sm:p-10">
            <div className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-teal-600/80">
              Booking Clarity
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-sand sm:text-4xl">
              What is usually included before booking details are finalized
            </h2>
            <div className="mt-8 grid gap-4">
              {inclusionSummary.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.5rem] border border-white bg-white/90 p-5 shadow-sm"
                >
                  <div className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-teal/75">
                    Usually included
                  </div>
                  <p className="mt-3 text-sm leading-7 text-foreground/68">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-[1.5rem] border border-gold/20 bg-[#edf5f8] p-5 text-sm leading-7 text-foreground/70">
              Final availability, route timing, and exact inclusions are confirmed directly for
              your dates so the quote matches the real trip instead of a generic public package.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:pb-20">
        <div className="rounded-[2rem] border border-navy/8 bg-[#f7fbfc] p-6 shadow-[0_18px_40px_rgba(23,50,71,0.05)] sm:rounded-[2.6rem] sm:p-10">
          <div className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-teal-600/80">
            Booking Process
          </div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-sand sm:text-4xl">
            How booking usually moves from enquiry to confirmation
          </h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {bookingSteps.map((step, index) => (
              <div
                key={step}
                className="rounded-[1.5rem] border border-white bg-white/92 p-5 shadow-sm"
              >
                <div className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-teal/75">
                  Step {index + 1}
                </div>
                <p className="mt-3 text-sm leading-7 text-foreground/68">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {itineraryExamples.length > 0 ? (
        <section className="bg-[#f4f8fa] px-4 py-12 sm:px-6 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 max-w-3xl">
              <div className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-teal-600/80">
                Itinerary Examples
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-sand sm:text-4xl">
                Sample ways this experience is usually planned in Alleppey
              </h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {itineraryExamples.map((itinerary) => (
                <article
                  key={itinerary.title}
                  className="rounded-[2rem] border border-navy/8 bg-white p-6 shadow-[0_18px_40px_rgba(23,50,71,0.06)] sm:p-8"
                >
                  <h3 className="text-2xl font-semibold tracking-tight text-navy">
                    {itinerary.title}
                  </h3>
                  <div className="mt-6 grid gap-4">
                    {itinerary.steps.map((step, index) => (
                      <div
                        key={step}
                        className="rounded-[1.4rem] border border-[#dce8df] bg-[#f8fcfd] p-4"
                      >
                        <div className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-teal/75">
                          Stop {index + 1}
                        </div>
                        <p className="mt-3 text-sm leading-7 text-foreground/68">{step}</p>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-20">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-navy/8 bg-white p-6 shadow-[0_18px_40px_rgba(23,50,71,0.06)] sm:rounded-[2.6rem] sm:p-10">
            <div className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-teal-600/80">
              Local Relevance
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-sand sm:text-4xl">
              Why this experience fits Alleppey and Alappuzha especially well
            </h2>
            <div className="mt-8 grid gap-4">
              {localRelevance.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.5rem] border border-navy/8 bg-[#f8fcfd] p-5 text-sm leading-7 text-foreground/68"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-navy/8 bg-[linear-gradient(180deg,#eef5f8_0%,#ffffff_100%)] p-6 shadow-[0_18px_40px_rgba(23,50,71,0.06)] sm:rounded-[2.6rem] sm:p-10">
            <div className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-teal-600/80">
              Safety and Hygiene
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-sand sm:text-4xl">
              Practical notes guests usually want before booking
            </h2>
            <div className="mt-8 grid gap-4">
              {safetyNotes.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.5rem] border border-white bg-white/90 p-5 text-sm leading-7 text-foreground/68 shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f8fa] px-4 py-12 sm:px-6 lg:py-20">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-navy/8 bg-white p-6 shadow-[0_18px_40px_rgba(23,50,71,0.06)] sm:rounded-[2.6rem] sm:p-10">
          <div className="grid gap-6 lg:grid-cols-[1fr,0.92fr] lg:items-end">
            <div>
              <div className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-teal-600/80">
                Cancellation Policy
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-sand sm:text-4xl">
                Date changes and cancellations are easier when discussed early
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-foreground/68 sm:text-base">
                Refund and cancellation outcomes depend on how close the request is to travel, the booking stage, and the exact category reserved. Earlier changes usually create more flexibility, especially for private Alleppey experiences that depend on date-specific availability.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Link
                href="/refund-policy"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-navy px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-ink"
              >
                Read refund policy
              </Link>
              <Link
                href={service.ctaHref}
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-navy/12 bg-white px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-navy transition hover:border-teal/30 hover:bg-[#f5fafc]"
              >
                Ask before booking
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-20">
        <div className="grid gap-6 lg:grid-cols-3">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="lg:col-span-2 rounded-[2rem] border border-navy/5 bg-white p-6 shadow-sm sm:rounded-[3rem] sm:p-12"
          >
            <div className="mb-4 block text-[0.68rem] font-bold uppercase tracking-[0.25em] text-teal-600/80">
              The Appeal
            </div>
            <h2 className="mb-8 text-2xl font-semibold tracking-tight text-sand sm:mb-10 sm:text-4xl">
              Why guests choose {service.title.toLowerCase()}
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {featuredHighlights.map((highlight, index) => (
                <div
                  key={highlight.title}
                  className="group flex flex-col gap-4 rounded-3xl border border-navy/5 bg-[#fbfbfc] p-5 transition-all hover:border-teal-200 hover:bg-white hover:shadow-lg sm:flex-row sm:gap-5 sm:p-6"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy text-center text-xs font-bold text-white transition-colors group-hover:bg-teal-500">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="mb-1 text-sm font-bold text-sand">
                      {highlight.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-foreground/60">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="rounded-[2rem] border border-navy/5 bg-gradient-to-b from-[#eef5f8] to-white p-6 shadow-sm sm:rounded-[3rem] sm:p-12"
          >
            <div className="mb-4 block text-[0.68rem] font-bold uppercase tracking-[0.25em] text-teal-600/80">
              Included
            </div>
            <h2 className="mb-6 text-2xl font-semibold tracking-tight text-sand sm:mb-8">
              Planning cues
            </h2>
            <div className="flex flex-col gap-4">
              {service.facilities.slice(0, 6).map((facility) => (
                <div
                  key={facility}
                  className="flex items-center gap-3 rounded-2xl border border-white bg-white/70 px-4 py-4 text-sm font-medium text-foreground/70 backdrop-blur-md transition-all hover:translate-x-2 hover:shadow-md sm:gap-4 sm:px-5"
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-teal-500" />
                  {facility}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {supportingHighlights.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-20">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-5 md:grid-cols-2 xl:grid-cols-4"
          >
            {supportingHighlights.map((highlight) => (
              <motion.div
                key={highlight.title}
                variants={fadeInUp}
                className="rounded-[2rem] border border-navy/8 bg-white p-6 shadow-[0_18px_40px_rgba(23,50,71,0.06)]"
              >
                <div className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-teal/70">
                  Signature Detail
                </div>
                <h3 className="mt-4 text-xl font-semibold tracking-tight text-sand">
                  {highlight.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/60">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>
      )}

      {isHouseboatsPage ? (
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-20">
          <div className="grid gap-6 lg:grid-cols-[1fr,1fr]">
            <div className="rounded-[2rem] border border-navy/8 bg-white p-6 shadow-[0_18px_40px_rgba(23,50,71,0.06)] sm:rounded-[2.6rem] sm:p-10">
              <div className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-teal-600/80">
                Experience Paths
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-sand sm:text-4xl">
                Different kinds of houseboat stays suit different trips
              </h2>
              <div className="mt-8 grid gap-4">
                {houseboatExperiencePaths.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[1.5rem] border border-navy/8 bg-[#f7fbfd] p-5"
                  >
                    <h3 className="text-lg font-semibold text-sand">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-foreground/66">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-navy/8 bg-[linear-gradient(180deg,#f5fafc_0%,#ffffff_100%)] p-6 shadow-[0_18px_40px_rgba(23,50,71,0.06)] sm:rounded-[2.6rem] sm:p-10">
              <div className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-teal-600/80">
                Route Ideas
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-sand sm:text-4xl">
                Choose the backwater route style that fits your mood
              </h2>
              <div className="mt-8 grid gap-4">
                {houseboatRouteIdeas.map((route) => (
                  <div
                    key={route.title}
                    className="rounded-[1.5rem] border border-white bg-white/92 p-5 shadow-sm"
                  >
                    <h3 className="text-lg font-semibold text-sand">{route.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-foreground/66">
                      {route.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {showCloserLookGallery && (
        <ServiceGallery images={galleryImages} title={service.title} />
      )}

      <ExperienceComparisonSection />

      <TrustSignalsSection
        title={`Trust signals for guests comparing ${service.title.toLowerCase()}`}
        intro="If you are close to booking, this is the layer that usually matters most: who you are booking with, how to reach them directly, how to verify public reviews, and what practical support is visible before payment."
      />

      {faqs.length > 0 ? (
        <FaqSection
          title={`FAQs about ${titleBySlug[service.slug] ?? service.title}`}
          intro="These answers reflect the visible planning details on this page."
          faqs={faqs}
        />
      ) : null}

      {internalLinkGraph ? <InternalLinksSection graph={internalLinkGraph} /> : null}

      <section className="px-4 py-12 sm:px-6 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-[#173247] px-8 py-16 text-center text-white shadow-[0_24px_80px_rgba(23,50,71,0.2)]"
        >
          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-teal/10 blur-3xl" />
          <div className="relative z-10 mx-auto max-w-3xl">
            <span className="mb-4 block text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-teal/70">
              Ready to Experience
            </span>
            <h2 className="mb-8 text-3xl font-semibold tracking-tight sm:text-5xl">
              Start planning your{" "}
              <span className="text-teal/80">
                {service.title.toLowerCase()}
              </span>{" "}
              journey
            </h2>
            <p className="mx-auto mb-12 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
              Share your dates, group size, and preferences. We&apos;ll shape
              the perfect backwater experience around your pace.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={service.ctaHref}
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-navy shadow-lg transition-all hover:-translate-y-0.5 hover:bg-sand hover:text-white"
              >
                {service.ctaText}
              </Link>
              <Link
                href="/gallery"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
              >
                Explore All Experiences
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
