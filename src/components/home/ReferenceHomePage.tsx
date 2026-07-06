"use client";

import Image from "next/image";
import Link from "next/link";
import { Flame } from "lucide-react";
import { useState } from "react";
import HeroSection from "@/components/home/HeroSection";
import { QuestionAnswerList } from "@/components/seo/AiAnswerSections";
import ExperienceComparisonSection from "@/components/seo/ExperienceComparisonSection";
import FaqSection from "@/components/seo/FaqSection";
import type { FaqItem } from "@/lib/seo";
import type { PlaceReview } from "@/lib/google-place-reviews";

const whatsappHref = "https://wa.me/917994073491";
const googleReviewsHref = "https://share.google/0gDp3ppL2If4rHVVo";
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

const homepageAnswerFirstItems = [
  {
    question: "What is the best boat ride in Alleppey for first-time visitors?",
    answer:
      "For many first-time visitors, a private shikara ride is the easiest starting point because it combines comfort, canal access, and flexible timing without needing a full overnight plan.",
  },
  {
    question: "Which ride is better for couples: sunrise or sunset?",
    answer:
      "Sunset is usually better for romance and dramatic light, while sunrise is better for privacy, calm, and softer reflections.",
  },
  {
    question: "What is the best family-friendly boat experience in Alleppey?",
    answer:
      "A private family boat ride with moderate duration and easy boarding is usually the best fit because it keeps the route scenic without tiring children or older relatives.",
  },
  {
    question: "Can I explore village canals without booking a houseboat?",
    answer:
      "Yes. Village boat tours and private shikara rides are often the best way to explore Alleppey's narrower village canals and local backwater scenery.",
  },
  {
    question: "Is Alleppey good for a one-day Kerala backwater trip?",
    answer:
      "Yes. One day can be enough if you center the visit around one strong private ride and let the rest of the day stay simple and well paced.",
  },
] as const;

const homepageDeepDiveSections = [
  {
    title: "Why Tranquil Cruise works well for private backwater planning",
    paragraphs: [
      "The best Alleppey travel decisions usually begin with the feel of the trip rather than with a rigid boat label. Some travelers want a private shikara ride with softer village scenery. Some want a family boat ride that feels easy for children and grandparents. Some want a romantic sunset route through calmer backwaters. The point of good planning is not to push every traveler into the same format. It is to match the route, timing, and boat type to the real shape of the trip.",
      "That is where Tranquil Cruise becomes useful. The site is structured to help travelers move from broad questions into specific booking paths. Instead of reading a generic sales page and guessing whether a houseboat, shikara, or village route fits best, visitors can compare experiences in plain language and choose the page that answers their actual intent. That makes the trip feel more personal and gives search engines a cleaner understanding of what the business really offers in Alappuzha and Alleppey.",
    ],
  },
  {
    title: "Alleppey backwaters, Punnamada Lake, and the route choices that shape the experience",
    paragraphs: [
      "The backwaters around Alleppey are not one single landscape. They include narrow local canals, paddy-edged stretches, quieter village routes near Kainakary, broader water around Punnamada Lake, and the larger Vembanad-connected backwater system that gives Kerala its iconic open-water feel. A good website should explain these route differences because travelers often care more about the mood of the route than the name of the boat.",
      "Village canals are usually best for local detail, softer sightseeing, and the feeling of entering the daily life of the backwaters. Broader stretches are often best for evening light, wider views, and classic Kerala scenery. The strongest private rides often combine both. That is why route planning matters so much for sunrise cruises, sunset rides, photography outings, family sightseeing, and couple trips across Alappuzha.",
    ],
  },
  {
    title: "Private shikara experiences for couples, families, and one-day travelers",
    paragraphs: [
      "A private shikara experience is often the most flexible answer to commercial search intent because it suits many different traveler types. Couples like it because it feels intimate and can be timed around sunrise or sunset. Families like it because it keeps the outing manageable and comfortable. One-day travelers like it because it delivers the backwaters clearly without taking over the whole itinerary. That combination is one reason shikara pages are so important to both SEO and conversion.",
      "Private rides also make the planning process more human. Instead of adapting to the needs of strangers on a shared outing, the route can be chosen around your own timing, photo goals, comfort level, and guest count. That makes the experience feel more intentional and more local, especially when the ride moves through village canals and quieter scenic stretches rather than following only the most predictable broad-water routes.",
    ],
  },
  {
    title: "Sunrise, sunset, and the best light windows for the Kerala backwaters",
    paragraphs: [
      "Timing is one of the biggest quality levers in Alleppey. Sunrise is usually best for calm, cooler air, soft reflections, and a quieter canal atmosphere. Sunset is usually best for romance, warmth, silhouettes, and the kind of dramatic visual mood that couples and photographers often want. Daytime rides can still work well, but the right morning or evening window usually makes the destination feel much more special.",
      "This is why timing should never be hidden deep in the booking process. Travelers ask about it directly, and answer engines increasingly summarize around it. A strong homepage should therefore make it clear that sunrise boat rides, sunset boat rides, and village tours are not minor variations. They are meaningful experience choices that change how Alleppey and Alappuzha actually feel once you are on the water.",
    ],
  },
  {
    title: "What families and couples usually need from an Alleppey boat ride",
    paragraphs: [
      "Families usually need comfort, moderate duration, easy boarding, and a route that stays visually interesting without becoming tiring. That often points toward a private sightseeing ride or a family-friendly shikara with a balanced mix of village canals and wider views. The best family experiences are rarely the most complicated ones. They are the ones that let every age group enjoy the scenery without friction.",
      "Couples usually need something different: privacy, mood, and timing. A couple boat ride in Alleppey often succeeds because the route feels quiet and the light feels intentional. That could mean a sunrise cruise with still reflections, a sunset ride with warm sky color, or a village route that feels intimate and local. The strongest booking pages make those different priorities easy to understand instead of forcing everyone through the same generic tourism language.",
    ],
  },
  {
    title: "Photography, safety, booking clarity, and why answer-first content matters",
    paragraphs: [
      "Travelers do not only want scenery. They also want confidence. They want to know whether the route is safe, whether the timing will suit their group, whether the photos will actually be good, and how to move from browsing to booking without confusion. That is why the best tourism websites answer practical questions first and then support those answers with richer detail, reviews, imagery, and internal links.",
      "This homepage is built to do exactly that. It gives concise answers for AI search systems and for busy travelers, then expands into route explanations, local relevance, and service-page pathways that make the next step obvious. Whether someone is looking for the best shikara boat ride in Alleppey, a private boat ride for a family, a sunrise cruise, a sunset view, or a one-day Kerala backwater plan, the content helps them move forward with clarity.",
    ],
  },
] as const;

const homepageClusterLinks = [
  {
    title: "Shikara Boat Ride Alleppey",
    href: "/shikara-boat-ride-alleppey",
    image: "/images/shikkara-real.jpg",
    alt: "Private shikara ride in the Alleppey backwaters",
    eyebrow: "Easy favorite",
    description:
      "Private canal sightseeing for travelers who want the easiest and most flexible Alleppey backwater format.",
  },
  {
    title: "Private Boat Ride Alleppey",
    href: "/private-boat-ride-alleppey",
    image: "/images/gallery-seo/alleppey-country-boat-guests-vembanad-backwaters.webp",
    alt: "Private boat ride across scenic Alleppey backwaters",
    eyebrow: "Private planning",
    description:
      "The main comparison page for choosing the right private backwater ride based on route, timing, and group type.",
  },
  {
    title: "Sunset Boat Ride Alleppey",
    href: "/sunset-boat-ride-alleppey",
    image: "/images/gallery-seo/alleppey-sunset-canal-route-golden-hour.webp",
    alt: "Golden-hour sunset boat ride in Alleppey",
    eyebrow: "Golden hour",
    description:
      "Golden-hour cruising for couples, photographers, and travelers who want the strongest evening atmosphere.",
  },
  {
    title: "Sunrise Boat Ride Alleppey",
    href: "/sunrise-boat-ride-alleppey",
    image: "/images/gallery-seo/kuttanad-leaning-coconut-palms-quiet-canal.webp",
    alt: "Quiet sunrise-style canal route in Alleppey",
    eyebrow: "Quiet morning",
    description:
      "Calm early-morning backwater rides for softer light, lower traffic, and a quieter Kerala feel.",
  },
  {
    title: "Village Tour Alleppey",
    href: "/village-tour-alleppey",
    image: "/images/village-open-boat-rides.webp",
    alt: "Village canal tour in Alleppey and Alappuzha",
    eyebrow: "Local routes",
    description:
      "Local canal routes for travelers who want a more authentic Alappuzha and Kainakary backwater experience.",
  },
  {
    title: "Backwater Cruise Alleppey",
    href: "/backwater-cruise-alleppey",
    image: "/images/alleppey-backwater-tour-houseboat.jpg",
    alt: "Broader backwater cruise across Alleppey",
    eyebrow: "Cruise guide",
    description:
      "The broad cruise-planning hub for comparing shikaras, village tours, family rides, and romantic backwater options.",
  },
] as const;

function stripMarkdownHeading(value: string) {
  return value.replace(/^#{1,6}\s+/, "").trim();
}

function ReviewAvatar({
  authorName,
  authorPhotoUrl,
}: {
  authorName: string;
  authorPhotoUrl: string | null;
}) {
  const [imageFailed, setImageFailed] = useState(false);
  const initials = authorName
    .split(" ")
    .map((part) => part[0] ?? "")
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#d7e7ee] bg-[linear-gradient(180deg,#f7fbfd_0%,#e8f3f7_100%)] shadow-[0_10px_24px_rgba(20,56,71,0.08)]">
      {authorPhotoUrl && !imageFailed ? (
        <Image
          src={authorPhotoUrl}
          alt=""
          fill
          className="object-cover"
          sizes="48px"
          unoptimized
          onError={() => setImageFailed(true)}
        />
      ) : (
        <span className="text-xs font-semibold tracking-[0.16em] text-[#31546c]">
          {initials}
        </span>
      )}
    </div>
  );
}

function CategoryExperienceCarousel({
  categorySpotlightSeed,
}: {
  categorySpotlightSeed: number;
}) {
  return (
    <>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-teal/80">
            {stripMarkdownHeading("Curated Experience Types")}
          </p>
          <h2 className="mt-3 max-w-3xl font-[var(--font-display)] text-balance text-[2rem] font-semibold leading-[1.03] tracking-[-0.03em] text-navy sm:text-5xl">
            Private Boat Ride in Alleppey
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
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
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
              className={`group flex min-h-[24rem] overflow-hidden rounded-[1.5rem] border bg-[linear-gradient(180deg,rgba(255,255,255,0.97)_0%,rgba(239,246,250,0.92)_100%)] shadow-[0_16px_38px_rgba(47,79,104,0.08)] ring-1 ring-navy/6 backdrop-blur transition duration-500 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(47,79,104,0.14)] sm:min-h-[25rem] lg:min-h-[26rem] ${
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
  const categorySpotlightSeed = new Date().getUTCMonth() + new Date().getUTCDate();

  const filteredPackages = featuredPackages;
  const leadingClusterLinks = homepageClusterLinks.slice(0, 4);
  const trailingClusterLinks = homepageClusterLinks.slice(4);
  const marqueeReviews = displayedReviews.length
    ? [...displayedReviews, ...displayedReviews]
    : [];

  return (
    <main className="home-water-theme flex min-h-screen flex-col bg-[#eef5f8] text-[#143245]">
      <HeroSection rating={rating} reviewCount={reviewCount} reviews={displayedReviews} />

      <section className="border-b border-[#c7dbe4] bg-transparent">
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

      {groupFitCards.length ? (
        <section className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="mx-auto max-w-7xl">
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
          </div>
        </section>
      ) : null}

      <section className="px-4 py-8 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto max-w-[1600px]">
          <CategoryExperienceCarousel categorySpotlightSeed={categorySpotlightSeed} />
        </div>
      </section>

      <section
        id="signature-houseboat-collection"
        className="bg-transparent px-4 py-8 sm:px-6 sm:py-14 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-[var(--font-display)] text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-teal/80">
                {stripMarkdownHeading("Signature Houseboat Collection")}
              </p>
              <h2 className="mt-3 max-w-2xl font-[var(--font-display)] text-[2rem] leading-tight text-navy sm:text-5xl">
                Alleppey Backwater Cruise Experience
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

      <section className="bg-transparent px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <div className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-teal-600/80">
              Explore By Intent
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-sand sm:text-5xl">
              Follow the exact page that matches your Alleppey question.
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:mt-16 xl:grid-cols-3 xl:gap-7">
            {leadingClusterLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group overflow-hidden rounded-[1.9rem] border border-navy/8 bg-[linear-gradient(180deg,#ffffff_0%,#f7fbfc_100%)] shadow-[0_18px_40px_rgba(23,50,71,0.05)] transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_28px_56px_rgba(23,50,71,0.12)]"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,35,49,0.05)_0%,rgba(13,35,49,0.18)_36%,rgba(13,35,49,0.78)_100%)]" />
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <div className="inline-flex items-center rounded-full border border-white/18 bg-white/12 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur-md">
                      {item.eyebrow}
                    </div>
                    <h3 className="mt-3 max-w-[16rem] text-[1.35rem] font-semibold leading-tight text-white sm:text-[1.55rem]">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <div className="p-5 sm:p-6">
                  <p className="text-sm leading-7 text-foreground/66">{item.description}</p>
                  <div className="mt-5 flex items-center justify-between gap-3">
                    <span className="inline-flex min-h-11 items-center justify-center rounded-full bg-[linear-gradient(180deg,#173247_0%,#24465d_100%)] px-4 py-2.5 text-sm font-semibold tracking-[0.01em] text-white shadow-[0_14px_30px_rgba(23,50,71,0.16)] transition duration-300 group-hover:bg-[linear-gradient(180deg,#21435b_0%,#2e5874_100%)]">
                      Reserve this experience
                    </span>
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#d5e3ea] bg-[#f8fbfd] text-lg text-navy shadow-[0_10px_24px_rgba(23,50,71,0.06)] transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:border-teal/30 group-hover:bg-white">
                      ↗
                    </span>
                  </div>
                </div>
              </Link>
            ))}

            {trailingClusterLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group overflow-hidden rounded-[1.9rem] border border-navy/8 bg-[linear-gradient(180deg,#ffffff_0%,#f7fbfc_100%)] shadow-[0_18px_40px_rgba(23,50,71,0.05)] transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_28px_56px_rgba(23,50,71,0.12)]"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,35,49,0.05)_0%,rgba(13,35,49,0.18)_36%,rgba(13,35,49,0.78)_100%)]" />
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <div className="inline-flex items-center rounded-full border border-white/18 bg-white/12 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur-md">
                      {item.eyebrow}
                    </div>
                    <h3 className="mt-3 max-w-[16rem] text-[1.35rem] font-semibold leading-tight text-white sm:text-[1.55rem]">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <div className="p-5 sm:p-6">
                  <p className="text-sm leading-7 text-foreground/66">{item.description}</p>
                  <div className="mt-5 flex items-center justify-between gap-3">
                    <span className="inline-flex min-h-11 items-center justify-center rounded-full bg-[linear-gradient(180deg,#173247_0%,#24465d_100%)] px-4 py-2.5 text-sm font-semibold tracking-[0.01em] text-white shadow-[0_14px_30px_rgba(23,50,71,0.16)] transition duration-300 group-hover:bg-[linear-gradient(180deg,#21435b_0%,#2e5874_100%)]">
                      Reserve this experience
                    </span>
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#d5e3ea] bg-[#f8fbfd] text-lg text-navy shadow-[0_10px_24px_rgba(23,50,71,0.06)] transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:border-teal/30 group-hover:bg-white">
                      ↗
                    </span>
                  </div>
                </div>
              </Link>
            ))}

            <article className="overflow-hidden rounded-[2.4rem] border border-[#d7e5ec] bg-[linear-gradient(180deg,#ffffff_0%,#f7fbfd_100%)] shadow-[0_34px_90px_rgba(20,56,71,0.14)] md:col-span-2 xl:col-span-3">
              <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="relative flex flex-col justify-between overflow-hidden border-b border-[#d9e8ee] bg-[linear-gradient(180deg,#fcfeff_0%,#eef6f9_100%)] p-6 text-[#0f2432] sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
                  <div className="absolute inset-x-0 top-0 h-px bg-white/90" />
                  <div className="absolute -left-20 top-6 h-56 w-56 rounded-full bg-[#dcecf4]/75 blur-3xl" />
                  <div className="absolute -bottom-24 right-0 h-64 w-64 rounded-full bg-[#c8dde9]/75 blur-3xl" />
                  <div className="absolute left-0 top-0 h-full w-1.5 bg-[linear-gradient(180deg,#173247_0%,#6d8fa6_100%)]" />
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-[#d3e3eb] bg-white px-4 py-2 text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-[#173247] shadow-[0_10px_22px_rgba(23,50,71,0.05)]">
                      <Flame className="h-4 w-4" aria-hidden="true" />
                      In High Demand
                    </div>
                    <h3 className="mt-5 max-w-lg font-[var(--font-display)] text-[1.75rem] leading-[0.93] tracking-[-0.05em] text-[#102535] sm:text-[2.55rem] lg:text-[3.15rem]">
                      All-Inclusive Alleppey Backwater Package
                    </h3>
                    <div className="mt-5 h-1 w-24 rounded-full bg-[linear-gradient(90deg,#173247_0%,#6d8fa6_55%,#d8b36d_100%)]" />
                    <p className="mt-4 max-w-xl rounded-[1.35rem] border border-[#dbe7ed] bg-white px-4 py-4 text-sm leading-7 text-[#1b3343] shadow-[0_14px_32px_rgba(9,26,39,0.07)] backdrop-blur-sm sm:px-5 sm:py-5 sm:text-base sm:leading-8">
                      A full-day Kerala backwater plan for guests who want more than one kind of
                      Alleppey experience, combining kayaking, a scenic shikkara ride, an evening
                      open-boat cruise, local food, refreshments, and optional stay support in one
                      smoother itinerary.
                    </p>
                  </div>

                  <div className="mt-7 space-y-4">
                    <div className="inline-flex items-center rounded-full border border-[#d9e8ee] bg-white px-4 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.26em] text-[#5f839a] shadow-[0_10px_22px_rgba(23,50,71,0.04)]">
                      Curated from sunrise to sunset
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {[
                        "Sunrise kayaking 6:30 AM - 8:30 AM",
                        "Shikkara with lunch 11:00 AM - 2:00 PM",
                        "Sunset open boat 4:00 PM - 7:00 PM",
                        "Optional stay available",
                      ].map((destination) => (
                        <div
                          key={destination}
                          className="rounded-[1.2rem] border border-[#dbe7ed] bg-white px-4 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-[#173247] shadow-[0_12px_26px_rgba(8,24,34,0.06)] backdrop-blur-sm transition duration-200 hover:-translate-y-0.5 hover:border-[#bfd2de] hover:shadow-[0_16px_30px_rgba(8,24,34,0.1)]"
                        >
                          {destination}
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col gap-3 pt-1 sm:flex-row">
                      <Link
                        href={whatsappHref}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(180deg,#173247_0%,#24465d_100%)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white shadow-[0_18px_38px_rgba(8,24,34,0.18)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_22px_44px_rgba(8,24,34,0.22)]"
                      >
                        Plan this package
                      </Link>
                      <Link
                        href="/houseboats"
                        className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#d6e4eb] bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#173247] transition duration-200 hover:-translate-y-0.5 hover:bg-[#f7fbfd] hover:shadow-[0_16px_30px_rgba(23,50,71,0.08)]"
                      >
                        Explore houseboats
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="bg-[linear-gradient(180deg,#f7fbfc_0%,#eef6f9_100%)] p-5 sm:p-6 lg:p-7">
                  <div className="rounded-[1.9rem] border border-white/90 bg-white p-5 shadow-[0_18px_40px_rgba(23,50,71,0.08)] sm:p-6">
                    <div className="flex flex-col gap-3 border-b border-[#dbe8ee] pb-5">
                      <p className="text-[0.66rem] font-semibold uppercase tracking-[0.26em] text-[#5f839a]">
                        Full-day backwater plan
                      </p>
                      <p className="max-w-lg text-base leading-7 text-[#173247]">
                        One itinerary with quiet paddling, village canals, scenic cruising, and a
                        softer Kerala pace from morning to sunset.
                      </p>
                    </div>

                    <div className="mt-5 space-y-3">
                      {[
                        {
                          label: "6:30 AM - 8:30 AM",
                          title: "Morning kayaking",
                          value:
                            "Start with peaceful kayaking through calm village canals while the backwaters still feel cooler and quieter.",
                        },
                        {
                          label: "11:00 AM - 2:00 PM",
                          title: "Shikkara with lunch",
                          value:
                            "Shift into a relaxed shikkara ride with lunch, planned on a different scenic route for a fuller Alleppey feel.",
                        },
                        {
                          label: "4:00 PM - 7:00 PM",
                          title: "Sunset open boat",
                          value:
                            "Finish with an open-boat cruise, speed-boat inclusion, and evening tea with snacks as the light softens.",
                        },
                      ].map((item) => (
                        <div
                          key={item.label}
                          className="grid gap-3 rounded-[1.35rem] border border-[#d9e8ee] bg-[linear-gradient(180deg,#ffffff_0%,#f8fbfd_100%)] p-4 shadow-[0_10px_24px_rgba(23,50,71,0.04)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_30px_rgba(23,50,71,0.08)] sm:grid-cols-[10rem_1fr]"
                        >
                          <div>
                            <div className="text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-[#173247]">
                              {item.label}
                            </div>
                            <div className="mt-2 text-sm font-semibold text-[#173247]">
                              {item.title}
                            </div>
                          </div>
                          <p className="text-sm leading-6 text-[#173247]">{item.value}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 rounded-[1.5rem] border border-[#d9e8ee] bg-[linear-gradient(180deg,#ffffff_0%,#f5fafc_100%)] p-5">
                      <div className="text-[0.66rem] font-semibold uppercase tracking-[0.26em] text-[#5f839a]">
                        Traditional focus
                      </div>
                      <p className="mt-3 text-sm leading-7 text-[#173247]">
                        The package is shaped around slower village-backwater routes, local food,
                        and a more grounded Kerala rhythm instead of a rushed checklist.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>

          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-transparent px-4 py-8 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-6 xl:grid-cols-[1fr_1fr] xl:items-stretch">
            <div className="relative flex h-full flex-col justify-between rounded-[2.25rem] border border-white/70 bg-white/70 p-6 shadow-[0_26px_70px_rgba(23,50,71,0.08)] backdrop-blur-sm sm:p-8 lg:p-10">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-teal/80">
                {stripMarkdownHeading("Booking Details")}
              </p>
              <h2 className="mt-3 font-[var(--font-display)] text-[2rem] leading-tight text-navy sm:text-5xl">
                Contact and Booking
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

            <div className="relative overflow-hidden rounded-[2.25rem] border border-[#d4e5ec] bg-[linear-gradient(160deg,#123246_0%,#183b51_36%,#eaf4f7_36.4%,#f8fbfc_100%)] p-6 shadow-[0_28px_70px_rgba(23,50,71,0.2)] sm:p-8 lg:p-10">
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
                  className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#173247] px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white shadow-[0_16px_34px_rgba(23,50,71,0.16)] transition hover:bg-[#21435b] sm:flex-1"
                >
                  Message on WhatsApp
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#c8dbe3] bg-white px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-navy transition hover:border-[#a8c9d4] hover:bg-[#f6fafb] sm:flex-1"
                >
                  Ask a question
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] bg-[#173247] p-6 text-white shadow-[0_24px_60px_rgba(10,24,34,0.2)] sm:p-10">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[#8fb3d1]">
              Since 2011
            </p>
            <h2 className="mt-3 font-[var(--font-display)] text-[2rem] leading-tight sm:mt-4 sm:text-5xl">
              Why Choose Tranquil Cruise
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

      {displayedReviews.length ? (
      <section className="relative isolate overflow-hidden bg-transparent px-3 py-8 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-7xl">
            <div className="relative mx-1 overflow-hidden rounded-[2.5rem] border border-white/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.95)_0%,rgba(236,245,249,0.92)_100%)] p-5 shadow-[0_30px_80px_rgba(20,56,71,0.12)] backdrop-blur-sm sm:mx-0 sm:p-8 lg:p-12 xl:p-14">
              <div className="pointer-events-none absolute right-[-3rem] top-[-4rem] h-40 w-40 rounded-full bg-[#9fd6d0]/30 blur-3xl" />
              <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-3xl">
                  <p className="text-[0.74rem] font-semibold uppercase tracking-[0.34em] text-teal/80 lg:text-[0.8rem]">
                    {stripMarkdownHeading("What Our Guests Say")}
                  </p>
                  <h2 className="mt-3 font-[var(--font-display)] text-[2rem] leading-[0.96] tracking-[-0.03em] text-navy sm:text-5xl lg:text-[3.5rem]">
                    Google Reviews
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-foreground/72 sm:mt-4 sm:text-base sm:leading-7 lg:max-w-3xl lg:text-lg lg:leading-8">
                    Real guest notes from recent Google reviews, chosen to give a quick feel for the
                    hospitality, food, service, and backwater atmosphere guests mention most often.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-end">
                  <div className="inline-flex items-center gap-3 rounded-full border border-[#cfe2ea] bg-white px-4 py-2.5 text-sm font-semibold text-[#234760] shadow-[0_12px_28px_rgba(20,56,71,0.08)] lg:px-5 lg:py-3 lg:text-base">
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
                    className="inline-flex min-h-11 items-center justify-center rounded-full bg-navy px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white shadow-[0_16px_36px_rgba(20,56,71,0.14)] transition hover:bg-ink lg:min-h-12 lg:px-6 lg:text-base"
                  >
                    View Google reviews
                  </Link>
                  {reviewSourceNote ? (
                    <div className="max-w-sm rounded-[1.3rem] border border-[#d8e8ee] bg-white/82 px-5 py-4 text-sm leading-6 text-[#31546c] shadow-[0_12px_28px_rgba(20,56,71,0.06)] lg:max-w-md lg:text-base lg:leading-7 lg:text-right">
                      {reviewSourceNote}
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="relative mt-8">
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-[linear-gradient(90deg,rgba(236,245,249,1)_0%,rgba(236,245,249,0)_100%)]" />
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-[linear-gradient(270deg,rgba(236,245,249,1)_0%,rgba(236,245,249,0)_100%)]" />

                <div className="overflow-hidden rounded-[2.35rem] border border-white/70 bg-white/40 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] backdrop-blur-sm lg:py-6">
                  <div className="flex min-w-max items-stretch gap-5 px-4 animate-review-marquee will-change-transform sm:px-6 lg:gap-6 lg:px-7">
                    {marqueeReviews.map((review, index) => {
                      const reviewOverride = reviewDisplayOverrides[review.authorName];
                      const displayAuthorName = reviewOverride?.authorName ?? review.authorName;
                      const displayReviewText = reviewOverride?.text ?? review.text;

                      return (
                        <article
                          key={`${review.authorName}-${review.publishedLabel}-top-${index}`}
                          className="group flex w-[19.5rem] shrink-0 flex-col overflow-hidden rounded-[2.1rem] border border-white/85 bg-[linear-gradient(180deg,#ffffff_0%,#f5fafc_100%)] p-6 shadow-[0_22px_48px_rgba(20,56,71,0.1)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_58px_rgba(20,56,71,0.14)] sm:w-[21rem] lg:w-[24rem] lg:p-7"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex min-w-0 items-start gap-3">
                              <ReviewAvatar
                                authorName={displayAuthorName}
                                authorPhotoUrl={review.authorPhotoUrl}
                              />
                              <div className="min-w-0">
                                <div className="inline-flex items-center rounded-full border border-[#d7e7ee] bg-[#f5fafc] px-2.5 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-[#5f839a] lg:px-3 lg:py-1.5 lg:text-[0.65rem]">
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
                                <h3 className="mt-2.5 line-clamp-2 text-[1.05rem] font-semibold leading-snug text-[#173247] sm:text-base lg:text-[1.2rem]">
                                  {stripMarkdownHeading(displayAuthorName)}
                                </h3>
                                <p className="mt-1 text-xs text-[#5f839a] lg:text-sm">{review.publishedLabel}</p>
                              </div>
                            </div>
                            <div className="rounded-[0.9rem] border border-[#d7e7ee] bg-[#f7fbfd] px-3 py-2 text-right text-[0.7rem] font-semibold text-[#234760] shadow-[0_8px_18px_rgba(20,56,71,0.04)] lg:px-3.5 lg:py-2.5 lg:text-[0.78rem]">
                              <div className="text-[0.58rem] uppercase tracking-[0.22em] text-[#6f95ab] lg:text-[0.62rem]">
                                Rating
                              </div>
                              <div className="mt-1 text-sm lg:text-base">{review.rating.toFixed(1)}</div>
                            </div>
                          </div>
                          <div className="mt-4 flex items-center gap-1 text-[#f2c14e] lg:text-lg">
                            {Array.from({ length: Math.round(review.rating) }).map((_, starIndex) => (
                              <span key={`${review.authorName}-star-${starIndex}`}>★</span>
                            ))}
                          </div>
                          <p className="mt-4 flex-1 text-[1.02rem] leading-7 text-[#234760]/82 sm:text-sm sm:leading-6 lg:text-[1.08rem] lg:leading-8">
                            <span className="mr-1 text-lg leading-none text-[#8bbfbd] lg:text-xl">“</span>
                            {displayReviewText}
                            <span className="ml-1 text-lg leading-none text-[#8bbfbd] lg:text-xl">”</span>
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

      <QuestionAnswerList
        eyebrow="Quick Answers"
        title="Short answers to the questions travelers ask most about Alleppey boat rides."
        intro="These direct answers sit on the homepage so readers and AI search systems can quickly understand the main decisions before diving into the deeper route and booking pages."
        items={[...homepageAnswerFirstItems]}
        sectionClassName="bg-transparent"
        panelClassName="border-0 bg-transparent p-0 shadow-none sm:p-0"
        itemClassName="bg-white/92 shadow-[0_12px_28px_rgba(23,50,71,0.05)]"
      />

      <section className="bg-transparent px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <div className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-teal-600/80">
              Alleppey Planning Guide
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-sand sm:text-5xl">
              A calmer way to understand private backwater travel in Kerala.
            </h2>
            <p className="mt-4 text-sm leading-7 text-foreground/66 sm:text-base">
              These sections expand the homepage into a stronger destination guide without
              changing the visual identity of the site. They cover route planning, family and
              couple fit, sunrise and sunset timing, local backwater context, and why smaller
              private rides often create the best Alleppey experience.
            </p>
          </div>
          <div className="mt-10 grid gap-6">
            {homepageDeepDiveSections.map((section) => (
              <article
                key={section.title}
                className="rounded-[2rem] border border-navy/8 bg-[linear-gradient(180deg,#ffffff_0%,#f7fbfc_100%)] p-6 shadow-[0_18px_40px_rgba(23,50,71,0.06)] sm:rounded-[2.4rem] sm:p-8"
              >
                <h2 className="text-2xl font-semibold tracking-tight text-sand sm:text-3xl">
                  {section.title}
                </h2>
                <div className="mt-5 space-y-4 text-sm leading-7 text-foreground/68 sm:text-base">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="hidden bg-transparent lg:block">
        <ExperienceComparisonSection />
      </section>

      <section className="bg-transparent pb-12 sm:pb-16">
        <FaqSection
          eyebrow="Booking Questions"
          title="Frequently Asked Questions"
          faqs={homepageFaqs}
        />
      </section>

    </main>
  );
}
