"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Flame } from "lucide-react";
import { useRef } from "react";
import HeroSection from "@/components/home/HeroSection";
import ExperienceComparisonSection from "@/components/seo/ExperienceComparisonSection";
import FaqSection from "@/components/seo/FaqSection";
import type { FaqItem } from "@/lib/seo";
import type { PlaceReview } from "@/lib/google-place-reviews";

const whatsappHref = "https://wa.me/917994073491";
const googleReviewsHref = "https://share.google/0gDp3ppL2If4rHVVo";
const spotlightLabels = [
  "Most Popular",
  "Trending Now",
  "Best Sellers",
  "Top Picks",
  "Customer Favorites",
  "Hot Right Now",
  "In High Demand",
  "Most Booked",
  "Top Rated",
  "Recommended",
] as const;

const categorySpotlightLabels = [
  "Most Popular",
  "Trending Now",
  "Best Sellers",
  "Top Picks",
  "Customer Favorites",
  "Hot Right Now",
  "In High Demand",
  "Most Booked",
  "Top Rated",
  "Recommended",
] as const;


const categoryLinks = [
  {
    title: "Houseboats",
    href: "/houseboats",
    image: "/images/day-cruise-open-water.jpg",
    alt: "Private houseboat cruising on open Alleppey backwaters",
    eyebrow: "Open Water",
    copy: "Short scenic cruises with relaxed pacing and open-water views.",
  },
  {
    title: "Kayaking",
    href: "/kayaking",
    image: "/images/kayaking-card.jpg",
    alt: "Backwater kayaking trail through quiet Alappuzha canals",
    eyebrow: "Quiet Trails",
    copy: "Quiet trails through narrow backwater routes and greener canals.",
  },
  {
    title: "Country Boat",
    href: "/canoe-boats",
    image: "/images/village-open-boat-rides.webp",
    alt: "Country boat ride through village canals in Alleppey",
    eyebrow: "Village Routes",
    copy: "Village canal rides with local scenery and quieter Kerala backwater routes.",
  },
  {
    title: "Shikkara Boat",
    href: "/shikkara",
    image: "/images/shikkara-real.jpg",
    alt: "Private shikkara boat ride on Alappuzha backwaters",
    eyebrow: "Soft Sightseeing",
    copy: "Canal-led sightseeing for couples, families, and easy afternoons.",
  },
  {
    title: "Speed Boat",
    href: "/speed-boat",
    image: "/images/speed-boat/speed-boat-group-ride.jpg",
    alt: "Speed boat ride across open Alleppey backwaters",
    eyebrow: "Fast Water",
    copy: "Quicker open-water rides for guests who want more thrill, more breeze, and a sharper pace.",
  },
] as const;

const popularCategoryButtons = [
  { label: "Alappuzha Houseboat", href: "/alappuzha-houseboat" },
  { label: "Houseboat", href: "/houseboats" },
  { label: "Shikkara", href: "/shikkara" },
  { label: "Kayak", href: "/kayaking" },
  { label: "Day Cruise", href: "/day-cruise-alappuzha" },
  { label: "Overnight Stay", href: "/overnight-houseboat-alappuzha" },
  { label: "Village Route", href: "/canoe-boats" },
] as const;

const featuredPackages = [
  {
    title: "One Bedroom Premium Houseboat",
    href: "/houseboats/single-bed",
    image: "/images/single-bed-gallery/lounge-modern.jpeg",
    alt: "One bedroom private houseboat on Alleppey backwaters",
    tag: "Couples Retreat",
    description: "An intimate private stay with serene cruising, refined interiors, and the slower rhythm couples usually want from an overnight on the backwaters.",
    roomType: "1-bed",
    category: "houseboat",
  },
  {
    title: "Two Bedroom Family Houseboat",
    href: "/houseboats/2-bedroom",
    image: "/images/two-bedroom-gallery-v2/WhatsApp_Image_2026-05-04_at_19_44_25.jpeg",
    alt: "Two bedroom family houseboat on Alappuzha backwaters",
    tag: "Family Favourite",
    description: "A relaxed two-bedroom layout with separate rooms, comfortable lounge space, and an easy overnight flow for families who want privacy without excess.",
    roomType: "2-bed",
    category: "houseboat",
  },
  {
    title: "Three Bedroom Houseboat",
    href: "/houseboats/3-bedroom",
    image: "/images/three-bedroom-gallery/WhatsApp_Image_2026-05-14_at_18_13_06.jpeg",
    alt: "Three bedroom group houseboat cruising in Alleppey",
    tag: "Group Escape",
    description: "A more spacious houseboat for extended families and close-knit groups, with extra room to gather, dine slowly, and settle into a more comfortable shared stay.",
    roomType: "3-bed",
    category: "houseboat",
  },
  {
    title: "Five Bedroom Houseboat",
    href: "/houseboats/5-bedroom",
    image: "/images/five-bedroom-gallery/WhatsApp_Image_2026-05-14_at_18_04_14.jpeg",
    alt: "Five bedroom celebration houseboat on Kerala backwaters",
    tag: "Celebration Stay",
    description: "Our larger-format houseboat for reunions, milestone trips, and generously hosted family stays, with broader common areas and a more occasion-worthy sense of space.",
    roomType: "5-bed",
    category: "houseboat",
  },
] as const;

const trustPoints = [
  {
    title: "Private planning first",
    copy: "We start with the experience type, route mood, and group size before talking about rates.",
  },
  {
    title: "Local route guidance",
    copy: "Guests get help choosing between open water, canal routes, village rides, and quieter backwater options.",
  },
  {
    title: "Fast WhatsApp support",
    copy: "Short, direct planning on WhatsApp keeps the booking path simple and reduces back-and-forth.",
  },
] as const;

const bookingSignalItems = [
  "WhatsApp-first booking support",
  "Route and stay matched to your group",
  "Direct planning support",
] as const;

const journeyDestinations = [
  "Alleppey backwaters",
  "Kuttanad canals",
  "Vembanad Lake",
  "Palm-lined village routes",
] as const;

const traditionalKeralaInclusions = [
  {
    title: "6:30 AM - 8:30 AM",
    copy: "Morning kayaking through calm traditional backwater routes and village canals.",
  },
  {
    title: "11:00 AM - 2:00 PM",
    copy: "Shikkara ride with lunch included, planned around a different scenic route.",
  },
  {
    title: "4:00 PM - 7:00 PM",
    copy: "Open boat cruise with speed boat included in the package and tea with snacks.",
  },
  {
    title: "Traditional focus",
    copy: "Every trip follows a different route with village backwaters, local food, and a slower Kerala rhythm.",
  },
] as const;

const groupFitCards: Array<{
  title: string;
  copy: string;
  href: string;
  cta: string;
}> = [];

const reviewDisplayOverrides: Record<
  string,
  {
    authorName?: string;
    text?: string;
  }
> = {
  "Badhusha Nizar": {
    text: "Had a wonderful experience with warm hospitality and awesome service throughout.",
  },
  "velavan vel": {
    authorName: "Velavan Vel",
    text: "Super food, a fabulous place, and the boat driver's guidance was very good throughout the trip.",
  },
};

function stripMarkdownHeading(value: string) {
  return value.replace(/^#{1,6}\s+/, "").trim();
}

function CategoryExperienceCarousel({
  categorySpotlightSeed,
}: {
  categorySpotlightSeed: number;
}) {
  const railRef = useRef<HTMLDivElement | null>(null);

  function scrollCategoryRail(direction: "left" | "right") {
    const rail = railRef.current;

    if (!rail) {
      return;
    }

    const scrollAmount = Math.max(rail.clientWidth * 0.72, 320);
    rail.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  }

  return (
    <>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-teal/80">
            {stripMarkdownHeading("Curated Experience Types")}
          </p>
          <h2 className="mt-3 max-w-3xl font-[var(--font-display)] text-balance text-[2rem] font-semibold leading-[1.03] tracking-[-0.03em] text-navy sm:text-5xl">
            {stripMarkdownHeading("Choose the backwater mood that fits the kind of day you want")}
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-foreground/72 sm:mt-4 sm:text-base sm:leading-7">
            Some guests want wide water and a slower deck-side afternoon. Others want narrow
            canals, greener routes, or softer village sightseeing. Start with the style of
            experience that feels right, then we can help you narrow the best option.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:items-end">
          <Link
            href="/gallery"
            className="inline-flex w-full items-center justify-center rounded-full border border-navy/12 bg-white/60 px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-navy shadow-[0_12px_28px_rgba(47,79,104,0.08)] transition hover:border-teal/30 hover:bg-white sm:w-auto"
          >
            View full gallery
          </Link>
          <div className="hidden items-center gap-2 md:flex">
            <button
              type="button"
              aria-label="Scroll cards left"
              onClick={() => scrollCategoryRail("left")}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy/12 bg-white/80 text-navy shadow-[0_10px_24px_rgba(47,79,104,0.08)] transition hover:-translate-y-0.5 hover:border-teal/30 hover:bg-white"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Scroll cards right"
              onClick={() => scrollCategoryRail("right")}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy/12 bg-white/80 text-navy shadow-[0_10px_24px_rgba(47,79,104,0.08)] transition hover:-translate-y-0.5 hover:border-teal/30 hover:bg-white"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={railRef}
        className="-mx-2 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-2 pb-3 [scrollbar-width:none] md:mx-0 md:gap-5 md:px-0 md:pb-4 md:pr-2"
      >
        {categoryLinks.map((item) => {
          const isShikkaraBoat = item.title === "Shikkara Boat";
          const isBestOption = item.title === "Houseboats";
          const spotlightIndex =
            (categorySpotlightSeed + item.title.length) % categorySpotlightLabels.length;
          const spotlightText = categorySpotlightLabels[spotlightIndex];

          return (
            <Link
              key={item.title}
              href={item.href}
              className={`group flex h-[24rem] w-[17.5rem] min-w-[17.5rem] flex-none snap-start overflow-hidden rounded-[1.5rem] border bg-[linear-gradient(180deg,rgba(255,255,255,0.97)_0%,rgba(239,246,250,0.92)_100%)] shadow-[0_16px_38px_rgba(47,79,104,0.08)] ring-1 ring-navy/6 backdrop-blur transition duration-500 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(47,79,104,0.14)] sm:h-[25rem] sm:w-[19rem] sm:min-w-[19rem] lg:h-[26rem] lg:w-[21rem] lg:min-w-[21rem] ${
                isBestOption ? "border-[#d6e7ed]" : "border-white/70"
              }`}
            >
              <div className="flex h-full w-full flex-col">
                <div className="relative h-[10rem] overflow-hidden sm:h-[12rem]">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 17.5rem, (max-width: 1024px) 19rem, 21rem"
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-x-3 top-3 flex items-start justify-between gap-2 sm:inset-x-4 sm:top-4">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] shadow-[0_10px_22px_rgba(240,200,124,0.24)] backdrop-blur-md ${
                        isBestOption
                          ? "border border-[#efc972]/60 bg-[linear-gradient(180deg,#fff7df_0%,#ffe7aa_100%)] text-[#8a5611]"
                          : "border border-white/60 bg-white/78 text-navy shadow-[0_10px_22px_rgba(47,79,104,0.12)]"
                      }`}
                    >
                      {!isBestOption && !isShikkaraBoat ? (
                        <Flame className="h-3 w-3" aria-hidden="true" />
                      ) : null}
                      {isBestOption ? "Best option" : isShikkaraBoat ? item.eyebrow : spotlightText}
                    </span>
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/60 bg-white/78 text-base text-navy shadow-[0_8px_20px_rgba(47,79,104,0.12)] backdrop-blur-md transition duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                      ↗
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 p-3.5 sm:p-5">
                  <div className="flex flex-1 flex-col rounded-[1.2rem] border border-white/75 bg-white/78 p-4 text-navy shadow-[0_14px_30px_rgba(47,79,104,0.08)] backdrop-blur-md sm:p-5">
                    <h3 className="min-h-[2.8rem] font-[var(--font-display)] text-[1.1rem] font-semibold leading-tight tracking-[-0.02em] text-navy sm:min-h-[3rem] sm:text-[1.25rem]">
                      {stripMarkdownHeading(item.title)}
                    </h3>
                    {!isShikkaraBoat ? (
                      <p className="mt-2 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[#6f95ab]">
                        {item.eyebrow}
                      </p>
                    ) : null}
                    <p className="mt-2 line-clamp-4 text-[0.92rem] leading-6 text-foreground/72">
                      {item.copy}
                    </p>
                    <div className="mt-auto border-t border-navy/8 pt-3">
                      <span className="inline-flex min-h-10 w-full items-center justify-center rounded-full bg-navy px-4 py-2.5 text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-white shadow-[0_14px_30px_rgba(47,79,104,0.16)] transition group-hover:bg-ink">
                        View experience
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default function ReferenceHomePage({
  displayedReviews,
  reviewSourceNote,
  homepageFaqs,
  rating,
  reviewCount,
}: {
  displayedReviews: PlaceReview[];
  reviewSourceNote: string;
  homepageFaqs: FaqItem[];
  rating: number | null;
  reviewCount: number | null;
}) {
  const spotlightLabel = spotlightLabels[new Date().getUTCDate() % spotlightLabels.length];
  const categorySpotlightSeed = new Date().getUTCMonth() + new Date().getUTCDate();

  const filteredPackages = featuredPackages;
  const marqueeReviews = displayedReviews.length
    ? [...displayedReviews, ...displayedReviews]
    : [];

  return (
    <main className="home-water-theme flex min-h-screen flex-col text-[#143245]">
      <HeroSection rating={rating} reviewCount={reviewCount} reviews={displayedReviews} />

      <section className="border-b border-[#c7dbe4] bg-[#d9eaf4]">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 py-6 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-8 lg:py-8">
          <div className="rounded-[1.75rem] border border-white/60 bg-white/55 p-5 shadow-[0_14px_34px_rgba(47,79,104,0.08)] backdrop-blur-sm">
            <p className="text-[0.74rem] font-semibold uppercase tracking-[0.3em] text-[#6f95ab]">
              Popular Categories
            </p>
            <p className="mt-3 max-w-md text-sm leading-6 text-[#173247]/72">
              Start with the style that fits your day, then narrow into the boat, route, or stay
              that makes the most sense for your group.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            {popularCategoryButtons.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#b7d1df] bg-[linear-gradient(180deg,#ffffff_0%,#edf6fb_100%)] px-5 py-2.5 text-sm font-semibold tracking-[0.02em] text-[#173247] shadow-[0_10px_24px_rgba(23,50,71,0.08)] transition hover:-translate-y-0.5 hover:border-[#8fb3d1] hover:bg-[linear-gradient(180deg,#fdfefe_0%,#dceaf4_100%)] hover:shadow-[0_14px_28px_rgba(23,50,71,0.12)]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {groupFitCards.length ? (
            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {groupFitCards.map((item, index) => (
                <article
                  key={item.title}
                  className={`group rounded-[2rem] border border-[#d7e5ec] bg-white p-5 shadow-[0_18px_40px_rgba(23,50,71,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_56px_rgba(23,50,71,0.1)] sm:p-6 ${index >= 1 ? "hidden lg:block" : ""}`}
                >
                  <h3 className="text-xl font-semibold text-[#173247]">{stripMarkdownHeading(item.title)}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#173247]/72">{item.copy}</p>
                  <Link
                    href={item.href}
                    className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full border border-navy/12 bg-[#f5fafc] px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-navy transition hover:border-teal/30 hover:bg-white group-hover:border-teal/35"
                  >
                    {item.cta}
                  </Link>
                </article>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-[1600px]">
          <CategoryExperienceCarousel categorySpotlightSeed={categorySpotlightSeed} />
        </div>
      </section>

      <section
        id="signature-houseboat-collection"
        className="bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.72)_0%,rgba(255,255,255,0)_30%),linear-gradient(180deg,rgba(214,225,234,0.82)_0%,rgba(237,243,247,0.96)_45%,rgba(205,218,228,0.88)_100%)] px-4 py-8 sm:px-6 sm:py-20 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-[var(--font-display)] text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-teal/80">
                {stripMarkdownHeading("Signature Houseboat Collection")}
              </p>
              <h2 className="mt-3 max-w-2xl font-[var(--font-display)] text-[2rem] leading-tight text-navy sm:text-5xl">
                {stripMarkdownHeading("Houseboats selected for beautiful stays, polished comfort, and unhurried time on the water")}
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-foreground/72 sm:mt-4 sm:text-base sm:leading-7">
                From intimate one-bedroom overnights to larger celebration-ready layouts, these are
                the stays guests usually shortlist when they want privacy, good hosting, and a
                calmer backwater experience that still feels special.
              </p>
            </div>
            <Link
              href="/houseboats"
              className="inline-flex items-center rounded-full border border-navy/12 bg-white/55 px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-navy shadow-[0_12px_28px_rgba(47,79,104,0.08)] transition hover:border-teal/30 hover:bg-white"
            >
              Explore all services
            </Link>
          </div>

          <div className="mt-8 grid gap-4 sm:gap-5 lg:grid-cols-2">
            {filteredPackages.length > 0 ? (
              filteredPackages.map((item, index) => (
              <article
                key={item.title}
                className={`overflow-hidden rounded-[2rem] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.97)_0%,rgba(238,245,250,0.9)_100%)] shadow-[0_24px_60px_rgba(47,79,104,0.1)] backdrop-blur ${index >= 2 ? "hidden lg:block" : ""}`}
              >
                <div className="grid gap-0 md:grid-cols-[0.95fr_1.05fr]">
                  <div className="relative min-h-[14rem] sm:min-h-[18rem]">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-between p-5 sm:p-7">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="rounded-full border border-gold/20 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sand">
                          {item.tag}
                        </span>
                      </div>
                      <h3 className="mt-3 text-[1.55rem] font-semibold leading-tight text-navy sm:mt-4 sm:text-2xl">
                        {stripMarkdownHeading(item.title)}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-foreground/72 sm:mt-3">{item.description}</p>
                    </div>
                    <div className="mt-5 flex flex-col gap-3 sm:mt-6 sm:flex-row sm:flex-wrap">
                      <Link
                        href={item.href}
                        className="inline-flex min-h-11 items-center justify-center rounded-full bg-navy px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white shadow-[0_18px_40px_rgba(47,79,104,0.16)] transition hover:bg-ink"
                      >
                        View stay
                      </Link>
                      <Link
                        href="/contact"
                        className="inline-flex min-h-11 items-center justify-center rounded-full border border-navy/12 bg-white/60 px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-navy transition hover:border-teal/30 hover:bg-white"
                      >
                        Plan this stay
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center rounded-[2rem] border border-dashed border-[#b7d1df] bg-[#fcfdfe] p-8 text-center shadow-[0_12px_28px_rgba(20,50,69,0.04)] sm:p-12">
              <p className="text-lg font-semibold text-[#173247]">No packages match your filters.</p>
              <p className="mt-2 text-sm text-[#173247]/70">No packages are available to show right now.</p>
            </div>
          )}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,#ffffff_0%,#eef7fb_42%,#e4f0f6_100%)] px-4 py-8 sm:px-6 sm:py-20 lg:px-8">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top_right,rgba(104,185,176,0.18),transparent_55%)]"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
            <div className="relative rounded-[2.25rem] border border-white/70 bg-white/70 p-6 shadow-[0_26px_70px_rgba(23,50,71,0.08)] backdrop-blur-sm sm:p-8 lg:p-10">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-teal/80">
                {stripMarkdownHeading("Booking Details")}
              </p>
              <h2 className="mt-3 font-[var(--font-display)] text-[2rem] leading-tight text-navy sm:text-5xl">
                {stripMarkdownHeading("Plan the right experience first, then get the exact quote on WhatsApp")}
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-6 text-foreground/72 sm:text-base sm:leading-7">
                These details give a clearer starting point for Alleppey houseboat bookings, shikkara rides,
                kayaking plans, and country boat routes without overloading the page with booking details. Final trip
                guidance is shared
                on WhatsApp after we understand your date, route, guest count, and whether you want a day cruise or
                an overnight Kerala backwaters stay.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {bookingSignalItems.map((item) => (
                  <div
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-[#cae0e9] bg-[#f8fcfd] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#31546c] shadow-[0_10px_24px_rgba(23,50,71,0.05)]"
                  >
                    <span className="h-2 w-2 rounded-full bg-teal" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2.25rem] border border-[#d4e5ec] bg-[linear-gradient(160deg,#123246_0%,#183b51_36%,#eaf4f7_36.4%,#f8fbfc_100%)] p-6 shadow-[0_28px_70px_rgba(23,50,71,0.2)] sm:p-8">
              <div
                className="pointer-events-none absolute right-[-2rem] top-[-2rem] h-28 w-28 rounded-full bg-[#9cd4d1]/18 blur-3xl"
                aria-hidden="true"
              />
              <div className="relative text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#9cd4d1]">
                {stripMarkdownHeading("Direct Planning Flow")}
              </div>
              <h3 className="relative mt-3 max-w-sm text-2xl font-semibold leading-tight text-white sm:text-3xl">
                {stripMarkdownHeading("Tell us your dates, group size, and trip mood.")}
              </h3>
              <p className="relative mt-4 max-w-md text-sm leading-6 text-white/76 sm:text-base sm:leading-7">
                We suggest the right boat or route first, then confirm availability and share the next steps directly
                on WhatsApp without forcing a detailed booking table into the page.
              </p>
              <div className="relative mt-7 grid gap-3 sm:grid-cols-3">
                {[
                  {
                    step: "Step 1",
                    title: "Shortlist",
                    copy: "Start with the stays or ride styles that match your trip.",
                  },
                  {
                    step: "Step 2",
                    title: "Confirm route",
                    copy: "Choose between open-water views, quiet canals, or a calmer family pace.",
                  },
                  {
                    step: "Step 3",
                    title: "Get quote",
                    copy: "Share your dates and group size so we can guide the next step directly.",
                  },
                ].map((step, index) => (
                  <div
                    key={step.title}
                    className="rounded-[1.5rem] border border-[#d7e6ec] bg-white p-4 text-[#173247] shadow-[0_14px_30px_rgba(23,50,71,0.08)]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#173247] text-xs font-semibold text-white shadow-[0_10px_24px_rgba(23,50,71,0.16)]">
                        {index + 1}
                      </div>
                      <div className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#6f95ab]">
                        {step.step}
                      </div>
                    </div>
                    <div className="mt-4 text-sm font-semibold sm:text-[0.95rem]">
                      {stripMarkdownHeading(step.title)}
                    </div>
                    <p className="mt-2 text-sm leading-6 text-[#173247]/68">{step.copy}</p>
                  </div>
                ))}
              </div>
              <div className="relative mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={whatsappHref}
                  className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#173247] px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white shadow-[0_16px_34px_rgba(23,50,71,0.16)] transition hover:bg-[#21435b]"
                >
                  Message on WhatsApp
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#c8dbe3] bg-white px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-navy transition hover:border-[#a8c9d4] hover:bg-[#f6fafb]"
                >
                  Ask a question
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] bg-[#173247] p-6 text-white shadow-[0_24px_60px_rgba(10,24,34,0.2)] sm:p-10">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[#8fb3d1]">
              Since 2011
            </p>
            <h2 className="mt-3 font-[var(--font-display)] text-[2rem] leading-tight sm:mt-4 sm:text-5xl">
              Helping guests find the right backwater experience for more than a decade
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-white/76 sm:mt-5 sm:text-base sm:leading-7">
              We know that no two trips to Alleppey feel the same. Some guests want a quiet
              overnight houseboat, some want a short scenic ride, and some just want help choosing
              what makes sense. We keep the process simple, answer quickly, and help you book with
              more confidence.
            </p>

            <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-3">
              <div className="rounded-[1.6rem] border border-white/12 bg-white/8 p-5">
                <div className="text-3xl font-semibold text-white">1000+</div>
                <div className="mt-2 text-sm text-white/68">Happy guests</div>
              </div>
              <div className="rounded-[1.6rem] border border-white/12 bg-white/8 p-5">
                <div className="text-3xl font-semibold text-white">24/7</div>
                <div className="mt-2 text-sm text-white/68">Response support</div>
              </div>
              <div className="rounded-[1.6rem] border border-white/12 bg-white/8 p-5">
                <div className="text-3xl font-semibold text-white">50+</div>
                <div className="mt-2 text-sm text-white/68">Route ideas and stays</div>
              </div>
            </div>
          </div>

          <div className="grid gap-5">
            {trustPoints.map((item, index) => (
              <div
                key={item.title}
                className={`rounded-[2rem] border border-[#cfdee5] bg-white p-5 shadow-[0_18px_40px_rgba(20,50,69,0.07)] sm:p-7 ${index >= 2 ? "hidden lg:block" : ""}`}
              >
                <h3 className="text-2xl font-semibold text-[#173247]">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#173247]/72">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-10 sm:px-6 sm:pb-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <article className="overflow-hidden rounded-[2.5rem] border border-white/75 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.98),transparent_34%),linear-gradient(135deg,rgba(250,253,255,0.98)_0%,rgba(232,243,247,0.94)_100%)] shadow-[0_28px_80px_rgba(20,56,71,0.10)]">
            <div className="grid gap-0 lg:grid-cols-[1.08fr_0.92fr]">
              <div className="p-6 sm:p-8 lg:p-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#efc972]/60 bg-[linear-gradient(180deg,#fff7df_0%,#ffe7aa_100%)] px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#8a5612] shadow-[0_12px_28px_rgba(240,200,124,0.35)]">
                  <Flame className="h-4 w-4" aria-hidden="true" />
                  {spotlightLabel}
                </div>
                <h3 className="mt-5 max-w-2xl font-[var(--font-display)] text-[2.1rem] leading-[0.95] tracking-[-0.05em] text-[#173247] sm:text-4xl lg:text-[4rem]">
                  Customize Your Journey
                </h3>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-foreground/72 sm:text-base sm:leading-8">
                  Combine your houseboat cruise with visits to these amazing destinations. We&apos;ll
                  create a personalized itinerary just for you.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  {journeyDestinations.map((destination) => (
                    <span
                      key={destination}
                      className="inline-flex items-center rounded-full border border-[#d8e3e7] bg-white px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[#173247] shadow-[0_8px_20px_rgba(23,50,71,0.05)] transition duration-200 hover:-translate-y-0.5 hover:border-teal/25 hover:bg-[#f7fbfc]"
                    >
                      {destination}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-12 items-center justify-center rounded-full bg-navy px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white shadow-[0_18px_38px_rgba(47,79,104,0.18)] transition duration-200 hover:-translate-y-0.5 hover:bg-ink"
                  >
                    Plan Your Trip
                  </Link>
                  <Link
                    href="/houseboats"
                    className="inline-flex min-h-12 items-center justify-center rounded-full border border-navy/12 bg-white/85 px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-navy transition duration-200 hover:-translate-y-0.5 hover:border-teal/30 hover:bg-white"
                  >
                    View houseboats
                  </Link>
                </div>
              </div>

              <div className="relative min-h-[19rem] overflow-hidden border-t border-white/70 lg:border-l lg:border-t-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(240,200,124,0.18),transparent_28%),linear-gradient(180deg,rgba(23,50,71,0.06)_0%,rgba(23,50,71,0.015)_38%,rgba(255,255,255,0.14)_100%)]" />
                <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-teal/15 blur-3xl" />
                <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-[#f3c77d]/20 blur-3xl" />
                <div className="relative flex h-full flex-col justify-between p-6 sm:p-8 lg:p-10">
                  <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                    {[
                      { label: "Cruise", value: "Houseboat timing and pace" },
                      { label: "Sunset", value: "Best light for the route" },
                      { label: "Sightseeing", value: "Stops matched to your day" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="rounded-[1.4rem] border border-white/75 bg-white/72 p-4 shadow-[0_12px_28px_rgba(23,50,71,0.06)] backdrop-blur-sm"
                      >
                        <div className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#6f95ab]">
                          {item.label}
                        </div>
                        <p className="mt-2 text-sm leading-6 text-[#173247]/78">{item.value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 max-w-md rounded-[1.75rem] border border-white/80 bg-white/82 p-5 shadow-[0_16px_36px_rgba(23,50,71,0.06)] backdrop-blur-sm">
                    <div className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#6f95ab]">
                      Personalized itinerary
                    </div>
                    <p className="mt-3 text-sm leading-7 text-[#173247]/78">
                      We can pair cruising, sightseeing, sunset timing, and route choices into one
                      calm plan that fits your travel style.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-[#edf6fb] px-4 pb-10 sm:px-6 sm:pb-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <article className="overflow-hidden rounded-[2.75rem] border border-white/75 bg-[radial-gradient(circle_at_top_right,rgba(109,143,166,0.14),transparent_22%),linear-gradient(135deg,rgba(255,255,255,0.99)_0%,rgba(233,244,248,0.95)_100%)] shadow-[0_28px_76px_rgba(20,56,71,0.1)]">
            <div className="h-1.5 bg-[linear-gradient(90deg,#173247_0%,#6d8fa6_34%,#f0c87c_68%,#173247_100%)]" />
            <div className="grid gap-0 lg:grid-cols-[1.04fr_0.96fr]">
              <div className="relative p-6 sm:p-8 lg:p-10">
                <div className="absolute right-[-3rem] top-[-2rem] h-28 w-28 rounded-full bg-[#9fd6d0]/30 blur-3xl" />
                <div className="inline-flex items-center gap-2 rounded-full border border-[#efc972]/60 bg-[linear-gradient(180deg,#fff7df_0%,#ffe7aa_100%)] px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#8a5612] shadow-[0_12px_28px_rgba(240,200,124,0.35)]">
                  <Flame className="h-4 w-4" aria-hidden="true" />
                  Trending in Alleppey
                </div>
                <h3 className="mt-5 max-w-xl font-[var(--font-display)] text-[2.1rem] leading-[0.95] tracking-[-0.05em] text-[#173247] sm:text-4xl lg:text-[3.25rem]">
                  All-Inclusive Alleppey Backwater Package
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-7 text-foreground/72 sm:text-base sm:leading-8">
                  Designed for guests who want the full Kerala experience in one plan, with
                  kayaking, shikkara, open boat, and speed boat rides across different village
                  backwater routes, plus traditional food, refreshments, and stay options.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {[
                    "Kayaking 6:30 AM - 8:30 AM",
                    "Shikkara 11:00 AM - 2:00 PM",
                    "Open boat 4:00 PM - 7:00 PM",
                    "Stay also provided",
                  ].map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center rounded-[1.2rem] border border-[#d8e3e7] bg-white px-4 py-3 text-sm font-semibold text-[#173247] shadow-[0_10px_24px_rgba(23,50,71,0.05)]"
                    >
                      <span className="mr-3 h-2.5 w-2.5 rounded-full bg-teal" />
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center justify-center rounded-full bg-navy px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white shadow-[0_16px_34px_rgba(47,79,104,0.18)] transition duration-200 hover:-translate-y-0.5 hover:bg-ink"
                  >
                    Ask on WhatsApp
                  </Link>
                </div>
              </div>

              <div className="border-t border-white/70 p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
                <div className="grid gap-4 sm:grid-cols-2">
                  {traditionalKeralaInclusions.map((item, index) => (
                    <div
                      key={item.title}
                      className={`rounded-[1.6rem] border p-5 shadow-[0_14px_32px_rgba(20,56,71,0.06)] ${
                        index === 0
                          ? "border-[#f1d08b]/60 bg-[linear-gradient(180deg,#fffdf7_0%,#fff7e4_100%)]"
                          : "border-[#d7e7ee] bg-white/88"
                      }`}
                    >
                      <div className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#6f95ab]">
                        {item.title}
                      </div>
                      <p className="mt-3 text-sm leading-6 text-[#173247]/74">{item.copy}</p>
                    </div>
                  ))}
                  <div className="rounded-[1.6rem] border border-[#d7e7ee] bg-white/88 p-5 shadow-[0_14px_32px_rgba(20,56,71,0.06)]">
                    <div className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#6f95ab]">
                      Stay provided
                    </div>
                    <p className="mt-3 text-sm leading-6 text-[#173247]/74">
                      Stay options are arranged when the package needs a day cruise format or an
                      overnight Kerala backwater stay.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {displayedReviews.length ? (
        <section className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#f4f9fc_0%,#e7f1f6_100%)] px-3 py-8 sm:px-6 sm:py-20 lg:px-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(104,185,176,0.16),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(20,56,71,0.08),transparent_30%)]" />
          <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(255,255,255,0.65)_0%,rgba(255,255,255,0)_100%)]" />
          <div className="mx-auto max-w-7xl">
            <div className="relative mx-1 overflow-hidden rounded-[2.5rem] border border-white/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.95)_0%,rgba(236,245,249,0.92)_100%)] p-5 shadow-[0_30px_80px_rgba(20,56,71,0.12)] backdrop-blur-sm sm:mx-0 sm:p-8 lg:p-10">
              <div className="pointer-events-none absolute right-[-3rem] top-[-4rem] h-40 w-40 rounded-full bg-[#9fd6d0]/30 blur-3xl" />
              <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-3xl">
                  <p className="text-[0.74rem] font-semibold uppercase tracking-[0.34em] text-teal/80">
                    {stripMarkdownHeading("What Our Guests Say")}
                  </p>
                  <h2 className="mt-3 font-[var(--font-display)] text-[2rem] leading-[0.96] tracking-[-0.03em] text-navy sm:text-5xl lg:text-[3.5rem]">
                    {stripMarkdownHeading("Recent review highlights")}
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-foreground/72 sm:mt-4 sm:text-base sm:leading-7">
                    Real guest notes from recent Google reviews, chosen to give a quick feel for the
                    hospitality, food, service, and backwater atmosphere guests mention most often.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-end">
                  <div className="inline-flex items-center gap-3 rounded-full border border-[#cfe2ea] bg-white px-4 py-2.5 text-sm font-semibold text-[#234760] shadow-[0_12px_28px_rgba(20,56,71,0.08)]">
                    <span className="text-[#f2c14e]">★★★★★</span>
                    <span>
                      Recent{" "}
                      <span aria-label="Google" className="font-bold tracking-[-0.02em]">
                        <span className="text-[#4285F4]">G</span>
                        <span className="text-[#EA4335]">o</span>
                        <span className="text-[#FBBC05]">o</span>
                        <span className="text-[#4285F4]">g</span>
                        <span className="text-[#34A853]">l</span>
                        <span className="text-[#EA4335]">e</span>
                      </span>{" "}
                      reviews
                    </span>
                  </div>
                  <Link
                    href={googleReviewsHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center justify-center rounded-full bg-navy px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white shadow-[0_16px_36px_rgba(20,56,71,0.14)] transition hover:bg-ink"
                  >
                    View Google reviews
                  </Link>
                  {reviewSourceNote ? (
                    <div className="max-w-sm rounded-[1.3rem] border border-[#d8e8ee] bg-white/82 px-5 py-4 text-sm leading-6 text-[#31546c] shadow-[0_12px_28px_rgba(20,56,71,0.06)] lg:text-right">
                      {reviewSourceNote}
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="relative mt-8">
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-[linear-gradient(90deg,rgba(236,245,249,1)_0%,rgba(236,245,249,0)_100%)]" />
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-[linear-gradient(270deg,rgba(236,245,249,1)_0%,rgba(236,245,249,0)_100%)]" />

                <div className="overflow-hidden rounded-[2.25rem] border border-white/70 bg-white/40 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] backdrop-blur-sm">
                  <div className="flex min-w-max items-stretch gap-4 px-3 sm:px-5 animate-review-marquee will-change-transform">
                    {marqueeReviews.map((review, index) => {
                      const reviewOverride = reviewDisplayOverrides[review.authorName];
                      const displayAuthorName = reviewOverride?.authorName ?? review.authorName;
                      const displayReviewText = reviewOverride?.text ?? review.text;
                      const initials = review.authorName
                        .split(" ")
                        .map((part) => part[0] ?? "")
                        .join("")
                        .slice(0, 2)
                        .toUpperCase();

                      return (
                        <article
                          key={`${review.authorName}-${review.publishedLabel}-top-${index}`}
                          className="group flex w-[16.5rem] shrink-0 flex-col overflow-hidden rounded-[1.9rem] border border-white/85 bg-[linear-gradient(180deg,#ffffff_0%,#f5fafc_100%)] p-5 shadow-[0_22px_48px_rgba(20,56,71,0.1)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_58px_rgba(20,56,71,0.14)] sm:w-[17rem] sm:p-4"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex min-w-0 items-start gap-3">
                              <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#d7e7ee] bg-[linear-gradient(180deg,#f7fbfd_0%,#e8f3f7_100%)] shadow-[0_10px_24px_rgba(20,56,71,0.08)]">
                                {review.authorPhotoUrl ? (
                                  <Image
                                    src={review.authorPhotoUrl}
                                    alt={`Profile photo of ${displayAuthorName}`}
                                    fill
                                    className="object-cover"
                                    sizes="48px"
                                    unoptimized
                                  />
                                ) : (
                                  <span className="text-xs font-semibold tracking-[0.16em] text-[#31546c]">
                                    {initials}
                                  </span>
                                )}
                              </div>
                              <div className="min-w-0">
                                <div className="inline-flex items-center rounded-full border border-[#d7e7ee] bg-[#f5fafc] px-2.5 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-[#5f839a]">
                                  <span aria-label="Google" className="font-bold normal-case tracking-[-0.02em]">
                                    <span className="text-[#4285F4]">G</span>
                                    <span className="text-[#EA4335]">o</span>
                                    <span className="text-[#FBBC05]">o</span>
                                    <span className="text-[#4285F4]">g</span>
                                    <span className="text-[#34A853]">l</span>
                                    <span className="text-[#EA4335]">e</span>
                                  </span>
                                  <span className="ml-1">review</span>
                                </div>
                                <h3 className="mt-2.5 line-clamp-2 text-[1.05rem] font-semibold leading-snug text-[#173247] sm:text-base">
                                  {stripMarkdownHeading(displayAuthorName)}
                                </h3>
                                <p className="mt-1 text-xs text-[#5f839a]">{review.publishedLabel}</p>
                              </div>
                            </div>
                            <div className="rounded-[0.9rem] border border-[#d7e7ee] bg-[#f7fbfd] px-3 py-2 text-right text-[0.7rem] font-semibold text-[#234760] shadow-[0_8px_18px_rgba(20,56,71,0.04)]">
                              <div className="text-[0.58rem] uppercase tracking-[0.22em] text-[#6f95ab]">
                                Rating
                              </div>
                              <div className="mt-1 text-sm">{review.rating.toFixed(1)}</div>
                            </div>
                          </div>
                          <div className="mt-4 flex items-center gap-1 text-[#f2c14e]">
                            {Array.from({ length: Math.round(review.rating) }).map((_, starIndex) => (
                              <span key={`${review.authorName}-star-${starIndex}`}>★</span>
                            ))}
                          </div>
                          <p className="mt-4 flex-1 text-[1.02rem] leading-7 text-[#234760]/82 sm:text-sm sm:leading-6">
                            <span className="mr-1 text-lg leading-none text-[#8bbfbd]">“</span>
                            {displayReviewText}
                            <span className="ml-1 text-lg leading-none text-[#8bbfbd]">”</span>
                          </p>
                        </article>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <section className="hidden bg-[#edf6fb] lg:block">
        <ExperienceComparisonSection />
      </section>

      <section className="bg-[#edf6fb] pb-16 sm:pb-20">
        <FaqSection
          eyebrow="Booking Questions"
          title="Details guests usually ask before booking"
          faqs={homepageFaqs}
        />
      </section>

    </main>
  );
}
