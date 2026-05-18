import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import FaqSection from "@/components/seo/FaqSection";
import PageBreadcrumbs from "@/components/seo/PageBreadcrumbs";
import ScrollableImageRow from "@/components/services/ScrollableImageRow";
import {
  createBreadcrumbSchema,
  createFaqSchema,
  createImageObjectSchema,
  createServiceSchema,
  createTouristTripSchema,
  generatePageMetadata,
} from "@/lib/seo";

const honeymoonFaqs = [
  {
    question: "Is a honeymoon houseboat in Alappuzha best as a day cruise or overnight stay?",
    answer:
      "Most couples prefer an overnight stay because it gives you more time for sunset cruising, dinner on board, slower evening quiet, and a gentler morning atmosphere on the backwaters.",
  },
  {
    question: "Can a honeymoon houseboat include a candlelight dinner setup?",
    answer:
      "Yes. Couples often ask for a more private dinner mood on deck or in the dining space, and a candlelight-style setup can usually be planned around the route, timing, and weather conditions.",
  },
  {
    question: "Do honeymoon packages in Alleppey include couple photography?",
    answer:
      "They can. Many couples combine their cruise with a short photography window during golden hour, on the open deck, or at calmer canal stretches where the light and background feel softer.",
  },
  {
    question: "Which houseboat layout is best for a romantic couple stay in Kerala?",
    answer:
      "Single-bedroom houseboats are usually the most natural starting point for couples, while some guests compare two-bedroom boats if they want extra lounge space, upgraded flow, or a more premium private feel.",
  },
];

const galleryImages = [
  {
    src: "/images/single-bed-gallery/exterior-view.jpeg",
    alt: "Honeymoon houseboat exterior in Alappuzha",
  },
  {
    src: "/images/single-bed-gallery/bedroom-blue.jpeg",
    alt: "Romantic single bedroom houseboat interior in Alleppey",
  },
  {
    src: "/images/single-bed-gallery/open-deck-night.jpeg",
    alt: "Private evening deck setup for a couple on a Kerala houseboat",
  },
  {
    src: "/images/home-hero-rainbow-houseboat.jpg",
    alt: "Sunset houseboat cruise atmosphere in the Alleppey backwaters",
  },
];

const romanticPackageMoments = [
  {
    title: "Private couple rhythm",
    text: "Honeymoon guests usually want a stay that feels slower, less crowded, and more intentionally paced around just the two of you.",
  },
  {
    title: "Sunset-first planning",
    text: "The route often matters most in the late afternoon, when couples want open views, soft light, and enough time to actually enjoy the deck before dusk.",
  },
  {
    title: "Dinner atmosphere",
    text: "A romantic houseboat stay feels stronger when dinner, lighting, and evening timing are planned as part of the experience instead of treated as an afterthought.",
  },
  {
    title: "Photo-friendly moments",
    text: "Couples often want a few natural photography windows built into the cruise so the trip feels memorable without turning the whole stay into a staged shoot.",
  },
];

const honeymoonHighlights = [
  "Romantic packages shaped for couples rather than larger group layouts",
  "Sunset cruise timing planned around the most photogenic stretch of the route",
  "Candlelight dinner mood with a calmer evening flow on board",
  "Couple photography options timed for deck views, canals, and soft backwater light",
] as const;

const experienceFlow = [
  {
    title: "Check-in and settle in",
    copy: "Couples usually want a smooth boarding experience with enough time to relax in the room and on deck before the cruise picks up its best light.",
  },
  {
    title: "Golden-hour cruising",
    copy: "Late afternoon is often the emotional center of a honeymoon cruise, so route planning should leave room for quiet views, photographs, and uninterrupted couple time.",
  },
  {
    title: "Dinner and evening calm",
    copy: "This is where candlelight dinner requests, slower service pacing, and a more private mood make the stay feel distinctly romantic rather than simply scenic.",
  },
  {
    title: "Morning backwater stillness",
    copy: "An overnight couple stay ends strongest when the morning feels unhurried, giving you one last stretch of calm water, breakfast, and soft light before checkout.",
  },
];

const romanticFormats = [
  {
    title: "Single Bedroom Honeymoon Houseboat",
    href: "/houseboats/single-bed",
    fit: "Best fit for most couples",
    copy: "Usually the clearest match for a private honeymoon cruise with a dedicated bedroom, intimate lounge flow, and a more naturally romantic scale.",
  },
  {
    title: "2 Bedroom Premium Couple Upgrade",
    href: "/houseboats/2-bedroom",
    fit: "For couples wanting more space",
    copy: "A stronger option if you want additional lounge comfort, a more expansive deck rhythm, or a premium-feeling layout beyond the usual honeymoon format.",
  },
];

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata({
    title: "Honeymoon Houseboat Alappuzha | Romantic Alleppey Cruise",
    description:
      "Plan a honeymoon houseboat in Alappuzha with romantic packages, sunset cruising, candlelight dinner options, and couple photography on an intimate Alleppey backwater stay.",
    path: "/honeymoon-houseboat-alappuzha",
    keywords: [
      "honeymoon houseboat alappuzha",
      "romantic alleppey cruise",
      "honeymoon houseboat alleppey",
      "couple houseboat kerala",
    ],
    image: {
      url: "/images/single-bed-gallery/exterior-view.jpeg",
      width: 1200,
      height: 630,
      alt: "Honeymoon houseboat in Alappuzha",
    },
  });
}

const breadcrumbJsonLd = createBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Houseboats", path: "/houseboats" },
  { name: "Honeymoon Houseboat Alappuzha", path: "/honeymoon-houseboat-alappuzha" },
]);

const faqJsonLd = createFaqSchema(honeymoonFaqs);

const imageJsonLd = createImageObjectSchema({
  path: "/images/single-bed-gallery/exterior-view.jpeg",
  alt: "Honeymoon houseboat in Alappuzha",
  width: 1200,
  height: 630,
});

const serviceJsonLd = createServiceSchema({
  name: "Honeymoon Houseboat Alappuzha",
  description:
    "Romantic houseboat stays in Alappuzha for couples seeking sunset cruising, candlelight dinner ambiance, and private Kerala backwater time together.",
  path: "/honeymoon-houseboat-alappuzha",
  serviceType: "Honeymoon houseboat stay",
});

const touristTripJsonLd = createTouristTripSchema({
  name: "Honeymoon Houseboat Experience in Alappuzha",
  description:
    "A romantic Kerala backwater cruise in Alappuzha designed for couples with sunset routes, intimate dining, and optional honeymoon photography moments.",
  path: "/honeymoon-houseboat-alappuzha",
  image: {
    path: "/images/single-bed-gallery/exterior-view.jpeg",
    alt: "Honeymoon houseboat in Alappuzha",
    width: 1200,
    height: 630,
  },
  itinerary: ["Alleppey", "Alappuzha", "Kuttanad", "Vembanad Lake"],
  touristType: ["Couples", "Honeymoon travelers"],
  keywords: ["honeymoon houseboat alappuzha", "romantic alleppey cruise"],
});

export default function HoneymoonHouseboatAlappuzhaPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd,
          faqJsonLd,
          imageJsonLd,
          serviceJsonLd,
          touristTripJsonLd,
        ]}
      />

      <main className="overflow-x-hidden bg-white pb-24 font-sans antialiased sm:pb-32">
        <section className="mx-auto max-w-7xl px-4 pb-12 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:pt-44">
          <div className="grid gap-10 lg:grid-cols-[0.9fr,1.1fr] lg:items-start">
            <div>
              <PageBreadcrumbs
                crumbs={[
                  { label: "Home", href: "/" },
                  { label: "Houseboats", href: "/houseboats" },
                  { label: "Honeymoon Houseboat Alappuzha" },
                ]}
              />
              <div className="mb-4 inline-block text-[0.7rem] font-bold uppercase tracking-[0.3em] text-teal-600/80">
                Romantic Couple Stay
              </div>
              <h1 className="text-[clamp(2.35rem,9vw,4.8rem)] font-semibold leading-[1.02] tracking-tight text-sand">
                Honeymoon houseboats in Alappuzha for couples who want romance, privacy, and a softer backwater pace.
              </h1>
              <p className="mt-6 max-w-2xl text-sm leading-7 text-foreground/68 sm:text-lg">
                This page is for couples planning a romantic Alleppey cruise,
                not a generic group houseboat. If you want sunset cruising,
                candlelight dinner atmosphere, and a honeymoon experience built
                around time together, this is the best place to start.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#173247] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#234760]"
                >
                  Plan a honeymoon cruise
                </Link>
                <Link
                  href="/houseboats/single-bed"
                  className="inline-flex items-center justify-center rounded-full border border-navy/10 bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-foreground transition hover:bg-[#f4f9fb]"
                >
                  View couple houseboats
                </Link>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-tr from-rose-100/50 via-amber-100/35 to-navy-100/15 blur-2xl opacity-70" />
              <div className="relative rounded-[2rem] border border-navy/10 bg-white/50 p-3 shadow-2xl backdrop-blur-sm sm:rounded-[2.5rem]">
                <ScrollableImageRow
                  images={galleryImages}
                  showFeaturedSpace={false}
                  showIntroCopy={false}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-20">
          <div className="grid gap-6 lg:grid-cols-[1fr,0.95fr]">
            <div className="rounded-[2rem] border border-navy/8 bg-[linear-gradient(180deg,#ffffff_0%,#fff7f4_100%)] p-6 shadow-[0_18px_40px_rgba(23,50,71,0.06)] sm:rounded-[2.6rem] sm:p-10">
              <div className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-teal-600/80">
                Romantic Packages
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-sand sm:text-4xl">
                A honeymoon cruise works best when the experience is shaped around the couple, not around a standard booking template.
              </h2>
              <div className="mt-8 grid gap-4">
                {romanticPackageMoments.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[1.5rem] border border-navy/8 bg-[#fffafb] p-5"
                  >
                    <h3 className="text-lg font-semibold text-sand">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-foreground/66">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-navy/8 bg-[linear-gradient(180deg,#fff4ef_0%,#ffffff_100%)] p-6 shadow-[0_18px_40px_rgba(23,50,71,0.06)] sm:rounded-[2.6rem] sm:p-10">
              <div className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-teal-600/80">
                Included In The Mood
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-sand sm:text-4xl">
                The most requested honeymoon details all support the same feeling: unhurried private time together.
              </h2>
              <div className="mt-8 grid gap-3">
                {honeymoonHighlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.35rem] border border-[#efd9d2] bg-white px-4 py-4 text-sm leading-7 text-foreground/70"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-20">
          <div className="rounded-[2.2rem] border border-navy/8 bg-[#173247] px-6 py-8 text-white shadow-[0_24px_60px_rgba(23,50,71,0.16)] sm:px-10 sm:py-12">
            <div className="grid gap-8 lg:grid-cols-[0.95fr,1.05fr] lg:items-start">
              <div>
                <div className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-white/70">
                  Sunset Cruise
                </div>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Sunset is usually the emotional centerpiece of a honeymoon houseboat in Alleppey.
                </h2>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/74 sm:text-lg">
                  Couples rarely remember a honeymoon cruise by room specs
                  alone. They remember the open deck, the soft evening light,
                  the calm water, and whether the route actually created space
                  for those moments. That is why sunset planning matters so
                  much on this page.
                </p>
              </div>
              <div className="grid gap-4">
                {experienceFlow.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[1.5rem] border border-white/10 bg-white/8 p-5 backdrop-blur-sm"
                  >
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/72">
                      {item.copy}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-20">
          <div className="grid gap-6 lg:grid-cols-[0.92fr,1.08fr]">
            <div className="rounded-[2rem] border border-navy/8 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbfc_100%)] p-6 shadow-[0_18px_40px_rgba(23,50,71,0.06)] sm:rounded-[2.6rem] sm:p-10">
              <div className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-teal-600/80">
                Candlelight Dinner
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-sand sm:text-4xl">
                Romantic dinner on board works best when it feels calm, private, and integrated into the evening flow.
              </h2>
              <p className="mt-5 text-sm leading-7 text-foreground/66 sm:text-lg">
                Couples often ask for a candlelight dinner because they want
                the cruise to feel like a honeymoon, not just transportation on
                the backwaters. The strongest version of that experience comes
                from planning the timing, the route mood, and the dinner setup
                together.
              </p>
            </div>

            <div className="rounded-[2rem] border border-navy/8 bg-[linear-gradient(180deg,#fff8f2_0%,#ffffff_100%)] p-6 shadow-[0_18px_40px_rgba(23,50,71,0.06)] sm:rounded-[2.6rem] sm:p-10">
              <div className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-teal-600/80">
                Couple Photography
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-sand sm:text-4xl">
                Photo moments feel best when they are natural and timed around the backwaters, not rushed between logistics.
              </h2>
              <p className="mt-5 text-sm leading-7 text-foreground/66 sm:text-lg">
                A short golden-hour photography window can fit beautifully into
                a honeymoon cruise. The best results usually come from quieter
                canal stretches, open-deck portraits, and enough buffer in the
                schedule that you can enjoy the moment instead of chasing it.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-20">
          <div className="rounded-[2rem] border border-navy/8 bg-[#fbfbf8] p-6 shadow-[0_18px_40px_rgba(23,50,71,0.05)] sm:rounded-[2.6rem] sm:p-10">
            <div className="max-w-3xl">
              <div className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-teal-600/80">
                Couple Layouts
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-sand sm:text-4xl">
                Most honeymoon guests compare a private couple boat first, then look at premium upgrades if they want more room.
              </h2>
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              {romanticFormats.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="rounded-[1.6rem] border border-navy/8 bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <div className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-teal/75">
                    {item.fit}
                  </div>
                  <h3 className="mt-3 text-xl font-semibold text-sand">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-foreground/66">
                    {item.copy}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <FaqSection
          eyebrow="Honeymoon Questions"
          title="What couples usually ask before booking"
          intro="These are the most common questions from guests planning a romantic houseboat stay in Alleppey or Alappuzha."
          faqs={honeymoonFaqs}
        />
      </main>
    </>
  );
}
