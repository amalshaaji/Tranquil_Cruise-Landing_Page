"use client";

import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/home/HeroSection";
import ExperienceComparisonSection from "@/components/seo/ExperienceComparisonSection";
import FaqSection from "@/components/seo/FaqSection";
import type { FaqItem } from "@/lib/seo";
import type { PlaceReview } from "@/lib/google-place-reviews";

const whatsappHref = "https://wa.me/917994073491";


const categoryLinks = [
  {
    title: "Day Cruise",
    href: "/houseboats",
    image: "/images/day-cruise-open-water.jpg",
    alt: "Day cruise houseboat on open Alleppey backwaters",
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
] as const;

const popularCategoryButtons = [
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
    rate: "From Rs. 12,500 / night",
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
    rate: "From Rs. 17,500 / night",
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
    rate: "Ask for group pricing",
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
    rate: "Ask for group pricing",
    tag: "Celebration Stay",
    description: "Our larger-format houseboat for reunions, milestone trips, and generously hosted family stays, with broader common areas and a more occasion-worthy sense of space.",
    roomType: "5-bed",
    category: "houseboat",
  },
] as const;

const trustPoints = [
  {
    title: "Local help, not generic advice",
    copy: "We help you choose between village canals, open-lake cruising, and sunset routes based on the kind of day you actually want.",
  },
  {
    title: "Options for different kinds of trips",
    copy: "From private houseboats to day cruises, kayaking, and shikkara rides, we’ll help you find what suits your time, pace, and budget.",
  },
  {
    title: "Simple planning from the first message",
    copy: "Share your dates, group size, and what kind of experience you have in mind, and we’ll guide you to the option that fits best.",
  },
] as const;

const bookingGuidanceCards = [
  {
    title: "1 Bedroom Houseboat",
    detail: "A strong fit for couples or solo guests who want a private overnight Alleppey houseboat stay with the final quote shared on WhatsApp.",
  },
  {
    title: "2 Bedroom Houseboat",
    detail: "Usually the clearest family-friendly Alappuzha houseboat starting point with more room to settle in and planning handled directly on WhatsApp.",
  },
  {
    title: "Shikkara Rides",
    detail: "Best for shorter scenic rides, with the exact quote depending on route length, timing, and guest count.",
  },
  {
    title: "Country Boats & Kayaking",
    detail: "Best when you want quieter village routes or paddling trails, with the final quote shaped around route choice and support.",
  },
] as const;

const bookingDetailFacts = [
  {
    title: "Cruise duration",
    value: "Shikkara rides are usually 1 to 3 hours, while houseboats can be booked as day cruises or overnight stays.",
  },
  {
    title: "Boarding point",
    value: "Boarding is arranged in the Alappuzha or Alleppey area, and the exact jetty is confirmed once the route and boat are locked.",
  },
  {
    title: "Meal plan",
    value: "Houseboat plans usually include meals or refreshments based on whether you book a day cruise or an overnight stay.",
  },
  {
    title: "AC timing",
    value: "Air conditioning usually applies to the bedroom sleeping window on overnight houseboats, but the exact timing depends on the selected boat.",
  },
  {
    title: "Cancellation and refund summary",
    value: "Earlier date changes or cancellations usually create more flexibility, while refund outcomes depend on timing, booking stage, and the category reserved.",
  },
] as const;

const inclusionItems = [
  "Private boat or stay format based on the experience you choose",
  "Crew or local boatman support during the ride or cruise",
  "Cruising time matched to the selected route and duration",
  "Bedroom, deck, or lounge access where applicable",
  "Meals or refreshments based on the booked plan",
  "Life jackets and basic safety essentials",
  "Pre-arrival route guidance and booking support",
] as const;

const groupFitCards = [
  {
    title: "Best for couples",
    copy: "Single-bedroom houseboats and private shikkara rides are usually the strongest fit for couples who want privacy, quieter Alleppey routes, and a slower Kerala backwaters pace.",
    href: "/houseboats/single-bed",
    cta: "See couples stays",
  },
  {
    title: "Best for families",
    copy: "Two-bedroom and three-bedroom houseboats are usually best for families because they add separate rooms, shared lounge space, and an easier overnight rhythm in Alappuzha.",
    href: "/houseboats/2-bedroom",
    cta: "See family options",
  },
  {
    title: "Best for groups",
    copy: "Three-bedroom and five-bedroom houseboats usually work best for groups, celebrations, and larger family trips that need more common space and smoother shared cruising.",
    href: "/houseboats/3-bedroom",
    cta: "See group layouts",
  },
] as const;

const quickAnswerBlocks = [
  {
    title: "Quick answer: houseboat or shikkara?",
    copy:
      "A private Alleppey houseboat is best for couples, families, and groups who want a slower Kerala backwater experience with onboard comfort, meals, and scenic cruising. Shikkara rides are better for shorter canal sightseeing in Alappuzha when you want a lighter and more affordable trip.",
  },
  {
    title: "Quick answer: best option for families",
    copy:
      "For most families, a two-bedroom or three-bedroom Alappuzha houseboat is the best fit. These Kerala backwaters stays give families more privacy, shared lounge space, and an easier overnight rhythm than smaller houseboats or shorter sightseeing rides.",
  },
  {
    title: "Quick answer: best option for couples",
    copy:
      "For most couples, a one-bedroom Alleppey houseboat or a private shikkara ride is the strongest choice. Choose a houseboat if you want more time, meals, and overnight comfort, and choose a shikkara for a shorter romantic canal ride through the Kerala backwaters.",
  },
] as const;

export default function ReferenceHomePage({
  displayedReviews,
  reviewSourceNote,
  homepageFaqs,
}: {
  displayedReviews: PlaceReview[];
  reviewSourceNote: string;
  homepageFaqs: FaqItem[];
}) {
  const filteredPackages = featuredPackages;

  return (
    <main id="main-content" className="home-water-theme flex min-h-screen flex-col text-[#143245]">
      <HeroSection />

      <section className="border-b border-[#c7dbe4] bg-[#d9eaf4]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-8 gap-y-4 px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-[0.74rem] font-semibold uppercase tracking-[0.3em] text-[#6f95ab]">
            Popular Categories
          </p>
          <div className="flex flex-wrap gap-3">
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

      <section className="bg-[#edf6fb] px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-teal/80">
              Quick Answers
            </p>
            <h2 className="mt-3 font-[var(--font-display)] text-[2rem] leading-tight text-navy sm:text-5xl">
              Fast answers for common Alleppey booking questions
            </h2>
            <p className="mt-3 text-sm leading-6 text-foreground/72 sm:mt-4 sm:text-base sm:leading-7">
              These short answer blocks are here for travelers who want a direct starting point before comparing
              houseboats, shikkara rides, kayaking, and other Kerala backwaters options in Alappuzha.
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {quickAnswerBlocks.map((item) => (
              <article
                key={item.title}
                className="rounded-[2rem] border border-[#d7e5ec] bg-white p-5 shadow-[0_18px_40px_rgba(23,50,71,0.06)] sm:p-6"
              >
                <h3 className="text-xl font-semibold leading-tight text-[#173247]">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#173247]/74">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-teal/80">
                Curated Experience Types
              </p>
              <h2 className="mt-3 max-w-3xl font-[var(--font-display)] text-balance text-[2rem] font-semibold leading-[1.03] tracking-[-0.03em] text-navy sm:text-5xl">
                Choose the backwater mood that fits the kind of day you want
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-foreground/72 sm:mt-4 sm:text-base sm:leading-7">
                Some guests want wide water and a slower deck-side afternoon. Others want narrow
                canals, greener routes, or softer village sightseeing. Start with the style of
                experience that feels right, then we can help you narrow the best option.
              </p>
            </div>
            <Link
              href="/gallery"
              className="inline-flex items-center rounded-full border border-navy/12 bg-white/60 px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-navy shadow-[0_12px_28px_rgba(47,79,104,0.08)] transition hover:border-teal/30 hover:bg-white"
            >
              View full gallery
            </Link>
          </div>

          <div className="mt-8 grid gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-4">
            {categoryLinks.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group overflow-hidden rounded-[2rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.95)_0%,rgba(235,243,248,0.92)_100%)] shadow-[0_22px_50px_rgba(47,79,104,0.1)] ring-1 ring-navy/6 backdrop-blur transition duration-500 hover:-translate-y-2 hover:shadow-[0_28px_68px_rgba(47,79,104,0.16)]"
              >
                <div className="relative h-[15.5rem] overflow-hidden sm:h-[25rem]">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-x-4 top-4 flex items-start justify-between sm:inset-x-5 sm:top-5">
                    <span className="rounded-full border border-white/55 bg-white/72 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-navy shadow-[0_8px_20px_rgba(47,79,104,0.12)] backdrop-blur-md">
                      {item.eyebrow}
                    </span>
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/55 bg-white/72 text-lg text-navy shadow-[0_8px_20px_rgba(47,79,104,0.12)] backdrop-blur-md transition duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      ↗
                    </span>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <div className="rounded-[1.35rem] border border-white/75 bg-white/72 p-4 text-navy shadow-[0_18px_40px_rgba(47,79,104,0.08)] backdrop-blur-md sm:rounded-[1.7rem] sm:p-5">
                    <h3 className="font-[var(--font-display)] text-[1.45rem] font-semibold leading-tight tracking-[-0.02em] text-navy sm:text-[1.75rem]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-foreground/72 sm:mt-3">{item.copy}</p>
                    <div className="mt-4 border-t border-navy/8 pt-3 sm:mt-5 sm:pt-4">
                      <span className="inline-flex min-h-11 items-center justify-center rounded-full bg-navy px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white shadow-[0_16px_34px_rgba(47,79,104,0.16)] transition group-hover:bg-ink">
                        View experience
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        id="packages-section"
        className="bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.72)_0%,rgba(255,255,255,0)_30%),linear-gradient(180deg,rgba(214,225,234,0.82)_0%,rgba(237,243,247,0.96)_45%,rgba(205,218,228,0.88)_100%)] px-4 py-12 sm:px-6 sm:py-20 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-[var(--font-display)] text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-teal/80">
                Signature Houseboat Collection
              </p>
              <h2 className="mt-3 max-w-2xl font-[var(--font-display)] text-[2rem] leading-tight text-navy sm:text-5xl">
                Houseboats selected for beautiful stays, polished comfort, and unhurried time on the water
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
              filteredPackages.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-[2rem] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.97)_0%,rgba(238,245,250,0.9)_100%)] shadow-[0_24px_60px_rgba(47,79,104,0.1)] backdrop-blur"
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
                        <span className="text-sm font-medium text-foreground/66">{item.rate}</span>
                      </div>
                      <h3 className="mt-3 text-[1.55rem] font-semibold leading-tight text-navy sm:mt-4 sm:text-2xl">
                        {item.title}
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

      <section className="bg-[#f4f9fb] px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-teal/80">
              Booking Details
            </p>
            <h2 className="mt-3 font-[var(--font-display)] text-[2rem] leading-tight text-navy sm:text-5xl">
              Plan the right experience first, then get the exact quote on WhatsApp
            </h2>
            <p className="mt-3 text-sm leading-6 text-foreground/72 sm:mt-4 sm:text-base sm:leading-7">
              These details give a clearer starting point for Alleppey houseboat bookings, shikkara rides,
              kayaking plans, and country boat routes without showing prices on the page. Final quotes are shared
              on WhatsApp after we understand your date, route, guest count, and whether you want a day cruise or
              an overnight Kerala backwaters stay.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {bookingGuidanceCards.map((item) => (
              <article
                key={item.title}
                className="rounded-[2rem] border border-[#d7e5ec] bg-white p-5 shadow-[0_18px_40px_rgba(23,50,71,0.06)] sm:p-6"
              >
                <div className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#6f95ab]">
                  Booking guidance
                </div>
                <h3 className="mt-3 text-xl font-semibold text-[#173247]">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#173247]/72">{item.detail}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[2rem] border border-[#d7e5ec] bg-white p-6 shadow-[0_18px_40px_rgba(23,50,71,0.06)] sm:p-8">
              <h3 className="text-2xl font-semibold text-[#173247]">What is usually included</h3>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {inclusionItems.map((item) => (
                  <li
                    key={item}
                    className="rounded-[1.4rem] border border-[#e3edf2] bg-[#f8fbfd] px-4 py-3 text-sm leading-6 text-[#173247]/76"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] border border-[#d7e5ec] bg-[linear-gradient(180deg,#173247_0%,#234760_100%)] p-6 text-white shadow-[0_22px_55px_rgba(23,50,71,0.16)] sm:p-8">
              <h3 className="text-2xl font-semibold">Key booking details</h3>
              <dl className="mt-5 grid gap-4">
                {bookingDetailFacts.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[1.4rem] border border-white/10 bg-white/8 px-4 py-4"
                  >
                    <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#a8d8d7]">
                      {item.title}
                    </dt>
                    <dd className="mt-2 text-sm leading-6 text-white/80">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {groupFitCards.map((item) => (
              <article
                key={item.title}
                className="rounded-[2rem] border border-[#d7e5ec] bg-white p-5 shadow-[0_18px_40px_rgba(23,50,71,0.06)] sm:p-6"
              >
                <h3 className="text-xl font-semibold text-[#173247]">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#173247]/72">{item.copy}</p>
                <Link
                  href={item.href}
                  className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full border border-navy/12 bg-[#f5fafc] px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-navy transition hover:border-teal/30 hover:bg-white"
                >
                  {item.cta}
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 rounded-[2rem] border border-[#d7e5ec] bg-white p-6 shadow-[0_18px_40px_rgba(23,50,71,0.06)] sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div className="max-w-3xl">
              <h3 className="text-xl font-semibold text-[#173247]">Need the exact quote for your dates?</h3>
              <p className="mt-2 text-sm leading-6 text-[#173247]/72">
                Exact pricing depends on season, route choice, meal format, guest count, and whether you want a day cruise,
                overnight houseboat, or lighter canal experience. Message us on WhatsApp and we will suggest the right option,
                confirm availability, and share the final quote directly.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:shrink-0 sm:flex-row">
              <Link
                href={whatsappHref}
                className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-navy px-5 py-3 text-center text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-ink sm:w-auto sm:whitespace-nowrap"
              >
                Get quote on WhatsApp
              </Link>
              <Link
                href="/refund-policy"
                className="inline-flex min-h-11 w-full items-center justify-center rounded-full border border-navy/12 bg-[#f5fafc] px-5 py-3 text-center text-sm font-semibold uppercase tracking-[0.14em] text-navy transition hover:border-teal/30 hover:bg-white sm:w-auto sm:whitespace-nowrap"
              >
                Read refund policy
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
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
            {trustPoints.map((item) => (
              <div
                key={item.title}
                className="rounded-[2rem] border border-[#cfdee5] bg-white p-5 shadow-[0_18px_40px_rgba(20,50,69,0.07)] sm:p-7"
              >
                <h3 className="text-2xl font-semibold text-[#173247]">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#173247]/72">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {displayedReviews.length ? (
        <section className="relative isolate overflow-hidden bg-[#143847] px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(134,192,198,0.22),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.1),transparent_28%)]" />
          <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(179,226,227,0.12)_0%,rgba(179,226,227,0)_100%)]" />
          <div className="mx-auto max-w-7xl">
            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-[0.74rem] font-semibold uppercase tracking-[0.34em] text-[#a8d8d7]">
                  What Our Guests Say
                </p>
                <h2 className="mt-3 font-[var(--font-display)] text-[2rem] leading-[0.96] tracking-[-0.03em] text-white sm:text-5xl lg:text-[3.5rem]">
                  Recent review highlights
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-white/70 sm:mt-4 sm:text-base sm:leading-7">
                  Real guest notes from recent Google reviews, chosen to give a quick feel for the
                  hospitality, food, service, and backwater atmosphere guests mention most often.
                </p>
              </div>
              {reviewSourceNote ? (
                <div className="max-w-sm rounded-[1.4rem] border border-white/12 bg-white/10 px-5 py-4 text-sm leading-6 text-white/66 backdrop-blur-md lg:text-right">
                  {reviewSourceNote}
                </div>
              ) : null}
            </div>

            <div className="relative mt-8 grid gap-4 sm:gap-5 lg:grid-cols-2 xl:grid-cols-3">
              {displayedReviews.map((review) => {
                const initials = review.authorName
                  .split(" ")
                  .map((part) => part[0] ?? "")
                  .join("")
                  .slice(0, 2)
                  .toUpperCase();

                return (
                  <article
                    key={`${review.authorName}-${review.publishedLabel}`}
                    className="group relative overflow-hidden rounded-[2rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.09)_100%)] p-5 shadow-[0_24px_60px_rgba(4,14,22,0.24)] backdrop-blur-xl transition duration-300 hover:-translate-y-1.5 hover:border-[#cfeeed]/34 hover:shadow-[0_28px_70px_rgba(4,14,22,0.28)] sm:p-6"
                  >
                    <div className="absolute inset-x-6 top-0 h-px bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(207,238,237,0.72),rgba(255,255,255,0))]" />
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-4">
                        <div className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/18 bg-[linear-gradient(180deg,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.08)_100%)] shadow-[0_10px_24px_rgba(0,0,0,0.16)]">
                          {review.authorPhotoUrl ? (
                            <Image
                              src={review.authorPhotoUrl}
                              alt={review.authorName}
                              fill
                              className="object-cover"
                              unoptimized
                            />
                          ) : (
                            <span className="text-sm font-semibold tracking-[0.16em] text-[#d8f1ef]">
                              {initials}
                            </span>
                          )}
                        </div>
                        <div>
                          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/8 px-3 py-1 text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-[#c7e7e5]">
                            Google review
                          </div>
                          <h3 className="mt-4 text-xl font-semibold text-white">
                            {review.authorName}
                          </h3>
                          <p className="mt-1 text-sm text-white/50">{review.publishedLabel}</p>
                        </div>
                      </div>
                      <div className="rounded-[1rem] border border-[#d8f1ef]/18 bg-white/10 px-3 py-2 text-right text-sm font-semibold text-[#d8f1ef]">
                        <div className="text-[0.62rem] uppercase tracking-[0.22em] text-white/48">
                          Rating
                        </div>
                        <div className="mt-1">{review.rating.toFixed(1)} / 5</div>
                      </div>
                    </div>
                    <div className="mt-6 flex items-center gap-1 text-[#f2d590]">
                      {Array.from({ length: Math.round(review.rating) }).map((_, index) => (
                        <span key={`${review.authorName}-star-${index}`}>★</span>
                      ))}
                    </div>
                    <p className="mt-5 text-sm leading-7 text-white/78">
                      <span className="mr-1 text-lg leading-none text-[#d8f1ef]/60">“</span>
                      {review.text}
                      <span className="ml-1 text-lg leading-none text-[#d8f1ef]/60">”</span>
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-[#edf6fb]">
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
