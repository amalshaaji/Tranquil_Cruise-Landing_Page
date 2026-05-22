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

const dayCruiseFaqs = [
  {
    question: "What is a day cruise houseboat in Alappuzha?",
    answer:
      "A day cruise is a private houseboat experience that gives you backwater views, open-deck time, and onboard meals without planning a full overnight stay. It suits guests who want the houseboat atmosphere within one daytime schedule.",
  },
  {
    question: "What time does a day cruise in Alleppey usually start and end?",
    answer:
      "Timing depends on the plan, but most guests book a daytime cruise that covers lunch-hour hospitality, scenic cruising, and enough relaxed deck time before returning in the afternoon or early evening.",
  },
  {
    question: "Are meals included on a day cruise houseboat?",
    answer:
      "Yes, day cruise enquiries usually focus on meal planning because lunch is often one of the anchors of the experience. Exact meal details still depend on your route, group size, and the houseboat format you choose.",
  },
  {
    question: "Is a day cruise better than an overnight houseboat stay?",
    answer:
      "A day cruise is better if you want the scenery, meals, and private boat comfort without committing to an overnight schedule. Overnight stays are better if you want slower evening time, room access for longer, and a fuller backwater rhythm.",
  },
];

const galleryImages = [
  {
    src: "/images/home-backwater-houseboats.jpg",
    alt: "Day cruise houseboat on the Alappuzha backwaters",
  },
  {
    src: "/images/houseboats-card-blue.jpg",
    alt: "Private daytime houseboat cruise in Alleppey",
  },
  {
    src: "/images/two-bedroom-gallery/lounge.jpeg",
    alt: "Houseboat dining and lounge area for a Kerala day cruise",
  },
  {
    src: "/images/home-houseboat-backwater.jpg",
    alt: "Scenic daytime route through the Kerala backwaters",
  },
];

const timingMoments = [
  {
    title: "Late morning boarding",
    text: "Most day-cruise guests want a smooth start that gives them enough time to settle in, enjoy the first canal stretches, and ease into the houseboat atmosphere instead of feeling hurried from the start.",
  },
  {
    title: "Midday cruising and lunch",
    text: "The center of the experience is usually the combination of scenic cruising and an onboard meal, so timing needs to leave room for both views and a comfortable lunch rhythm.",
  },
  {
    title: "Afternoon route flow",
    text: "A strong day cruise balances village canals, wider water, and softer afternoon light so the trip keeps changing without feeling overpacked.",
  },
  {
    title: "Easy return before evening",
    text: "Guests often choose a day cruise because they want the backwater experience within a defined daytime window, so the return timing matters just as much as the departure.",
  },
];

const routeStyles = [
  "Village canal stretches for a slower and more intimate backwater feel",
  "Broader open-water sections when you want iconic Alleppey houseboat views",
  "Mixed routes that combine quieter local scenery with wider lake-facing moments",
  "Cruising paced around meal service instead of squeezing lunch between stops",
] as const;

const mealNotes = [
  {
    title: "Lunch as the anchor meal",
    copy: "For most day cruises, lunch is the meal guests plan around first. The experience feels strongest when the meal is part of the cruise flow instead of a rushed interruption.",
  },
  {
    title: "Snacks and softer pacing",
    copy: "Families and private groups often care about whether the day feels easy between boarding and return, so lighter refreshments and comfortable breaks matter more than a long fixed program.",
  },
  {
    title: "Group-based meal planning",
    copy: "Meal expectations usually change with the group. Couples, families, and mixed-age guests all value slightly different rhythms, so the plan should match the people on board.",
  },
];

const itineraryFlow = [
  {
    title: "Boarding and welcome",
    copy: "Board, settle into the lounge or deck, and begin with calmer backwater stretches that ease the group into the cruise.",
  },
  {
    title: "Scenic midday route",
    copy: "Cruise through a mix of village scenery and broader water depending on the route style chosen for your group and timing.",
  },
  {
    title: "Lunch on board",
    copy: "Pause the pace enough to enjoy a proper onboard meal without losing the relaxed feeling of being on the water.",
  },
  {
    title: "Afternoon backwater views",
    copy: "Continue through quieter canals or open-water stretches before returning with enough time to keep the day feeling balanced.",
  },
];

const cruiseComparisons = [
  {
    title: "Day Cruise Houseboat",
    href: "/day-cruise-alappuzha",
    fit: "Best if you want a full daytime experience with meals and private cruising",
    copy: "A good fit when you want the houseboat atmosphere, route planning, and onboard lunch without carrying the trip into the night.",
  },
  {
    title: "Overnight Houseboat Stay",
    href: "/overnight-houseboat-alappuzha",
    fit: "Best if you want more time on the water",
    copy: "Usually the better match when evening calm, bedroom access, and a slower overnight rhythm matter more than finishing within the day.",
  },
  {
    title: "Shikara Ride",
    href: "/shikkara",
    fit: "Best if you want a shorter canal-focused ride",
    copy: "A stronger option if your priority is a lighter scenic outing through narrow canals rather than a fuller houseboat day with meals and lounge space.",
  },
];

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata({
    title: "Day Cruise Alappuzha | Alleppey Houseboat Day Trip",
    description:
      "Plan a day cruise in Alappuzha with private houseboat timing, route guidance, onboard meals, and a clear Alleppey day-trip itinerary.",
    path: "/day-cruise-alappuzha",
    keywords: [
      "day cruise alappuzha",
      "alleppey houseboat day trip",
      "day cruise houseboat alleppey",
      "houseboat day cruise kerala",
    ],
    image: {
      url: "/images/home-backwater-houseboats.jpg",
      width: 1200,
      height: 630,
      alt: "Day cruise houseboat in Alappuzha",
    },
  });
}

const breadcrumbJsonLd = createBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Houseboats", path: "/houseboats" },
  { name: "Day Cruise Alappuzha", path: "/day-cruise-alappuzha" },
]);

const faqJsonLd = createFaqSchema(dayCruiseFaqs);

const imageJsonLd = createImageObjectSchema({
  path: "/images/home-backwater-houseboats.jpg",
  alt: "Day cruise houseboat in Alappuzha",
  width: 1200,
  height: 630,
});

const serviceJsonLd = createServiceSchema({
  name: "Day Cruise Alappuzha",
  description:
    "Private houseboat day cruises in Alappuzha with daytime timing, route planning, onboard meals, and scenic Kerala backwater itineraries.",
  path: "/day-cruise-alappuzha",
  serviceType: "Houseboat day cruise",
});

const touristTripJsonLd = createTouristTripSchema({
  name: "Day Cruise Houseboat Experience in Alappuzha",
  description:
    "A private Kerala backwater day cruise in Alappuzha designed around daytime timing, scenic routes, onboard lunch, and a well-paced itinerary.",
  path: "/day-cruise-alappuzha",
  image: {
    path: "/images/home-backwater-houseboats.jpg",
    alt: "Day cruise houseboat in Alappuzha",
    width: 1200,
    height: 630,
  },
  itinerary: ["Alleppey", "Alappuzha", "Kuttanad", "Vembanad Lake"],
  touristType: ["Day travelers", "Families", "Couples", "Private groups"],
  keywords: ["day cruise alappuzha", "alleppey houseboat day trip"],
});

export default function DayCruiseAlappuzhaPage() {
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
                  { label: "Day Cruise Alappuzha" },
                ]}
              />
              <div className="mb-4 inline-block text-[0.7rem] font-bold uppercase tracking-[0.3em] text-teal-600/80">
                Private Day Cruise
              </div>
              <h1 className="text-[clamp(2.35rem,9vw,4.8rem)] font-semibold leading-[1.02] tracking-tight text-sand">
                Day cruises in Alappuzha for guests who want the houseboat experience within one well-paced backwater day.
              </h1>
              <p className="mt-6 max-w-2xl text-sm leading-7 text-foreground/68 sm:text-lg">
                This page is for travelers comparing a private Alleppey
                houseboat day trip, not a full overnight stay. If you want
                clear timing, route expectations, onboard meals, and a day
                itinerary that feels relaxed rather than rushed, start here.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#173247] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#234760]"
                >
                  Plan a day cruise
                </Link>
                <Link
                  href="/houseboats/compare"
                  className="inline-flex items-center justify-center rounded-full border border-navy/10 bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-foreground transition hover:bg-[#f4f9fb]"
                >
                  Compare houseboats
                </Link>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-tr from-[#dff3ef]/70 via-[#eef7d7]/50 to-navy-100/15 blur-2xl opacity-70" />
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
          <div className="grid gap-6 lg:grid-cols-[1fr,0.96fr]">
            <div className="rounded-[2rem] border border-navy/8 bg-[linear-gradient(180deg,#ffffff_0%,#f7fbfc_100%)] p-6 shadow-[0_18px_40px_rgba(23,50,71,0.06)] sm:rounded-[2.6rem] sm:p-10">
              <div className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-teal-600/80">
                Timing
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-sand sm:text-4xl">
                A good day cruise works because the timing supports the whole experience.
              </h2>
              <div className="mt-8 grid gap-4">
                {timingMoments.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[1.5rem] border border-navy/8 bg-[#f8fcfd] p-5"
                  >
                    <h3 className="text-lg font-semibold text-sand">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-foreground/66">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-navy/8 bg-[linear-gradient(180deg,#edf6f4_0%,#ffffff_100%)] p-6 shadow-[0_18px_40px_rgba(23,50,71,0.06)] sm:rounded-[2.6rem] sm:p-10">
              <div className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-teal-600/80">
                Route
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-sand sm:text-4xl">
                Route planning shapes whether the cruise feels scenic, smooth, and worth the day.
              </h2>
              <div className="mt-8 grid gap-3">
                {routeStyles.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.35rem] border border-[#dce8df] bg-white px-4 py-4 text-sm leading-7 text-foreground/70"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-[1.6rem] border border-gold/25 bg-[#edf5f8] p-5 text-sm leading-7 text-foreground/72">
                If you are choosing between a day cruise and a shorter scenic
                ride, the biggest difference is usually route depth and how
                much time the itinerary leaves for meals and deck time.
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-20">
          <div className="rounded-[2.2rem] border border-navy/8 bg-[#173247] px-6 py-8 text-white shadow-[0_24px_60px_rgba(23,50,71,0.16)] sm:px-10 sm:py-12">
            <div className="grid gap-8 lg:grid-cols-[0.95fr,1.05fr] lg:items-start">
              <div>
                <div className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-white/70">
                  Meals
                </div>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Meals matter because they help turn a boat ride into a fuller day-cruise experience.
                </h2>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/74 sm:text-lg">
                  Guests usually remember whether the cruise had enough time to
                  enjoy lunch, rest a little, and take in the backwaters
                  without rushing from one segment to the next. That is why
                  meal planning belongs in the center of a day-cruise page.
                </p>
              </div>
              <div className="grid gap-4">
                {mealNotes.map((item) => (
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
          <div className="rounded-[2rem] border border-navy/8 bg-[#fbfbf8] p-6 shadow-[0_18px_40px_rgba(23,50,71,0.05)] sm:rounded-[2.6rem] sm:p-10">
            <div className="max-w-3xl">
              <div className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-teal-600/80">
                Itinerary
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-sand sm:text-4xl">
                A strong day-cruise itinerary usually follows a simple four-part rhythm.
              </h2>
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-4">
              {itineraryFlow.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.6rem] border border-navy/8 bg-white p-6"
                >
                  <div className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-teal/75">
                    {item.title}
                  </div>
                  <p className="mt-4 text-sm leading-7 text-foreground/66">
                    {item.copy}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f4f8fa] px-4 py-14 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 text-center sm:mb-14">
              <div className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-teal-600/80">
                Compare Formats
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-sand sm:text-5xl">
                Compare a day cruise with the other common backwater trip styles
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-foreground/66 sm:text-base">
                The best choice depends on whether you want a full daytime
                houseboat plan, a longer overnight rhythm, or a lighter scenic
                ride through narrower canals.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {cruiseComparisons.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[2rem] border border-navy/10 bg-white p-6 shadow-[0_20px_46px_rgba(23,50,71,0.08)]"
                >
                  <div className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-teal/75">
                    {item.fit}
                  </div>
                  <h3 className="mt-3 text-2xl font-semibold text-sand">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-foreground/66">
                    {item.copy}
                  </p>
                  <Link
                    href={item.href}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal transition hover:text-navy"
                  >
                    Explore this option
                    <span aria-hidden="true">→</span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <FaqSection
          eyebrow="Day Cruise FAQs"
          title="Questions guests usually ask before booking"
          intro="These answers focus on day-cruise intent in Alleppey and Alappuzha."
          faqs={dayCruiseFaqs}
        />

        <section className="px-4 py-12 sm:px-6 lg:py-20">
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-[#173247] px-8 py-16 text-center text-white shadow-[0_24px_80px_rgba(23,50,71,0.2)]">
            <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-teal/10 blur-3xl" />
            <div className="relative z-10 mx-auto max-w-3xl">
              <span className="mb-4 block text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-teal/70">
                Ready To Plan
              </span>
              <h2 className="mb-8 text-3xl font-semibold tracking-tight sm:text-5xl">
                Start planning an Alappuzha day cruise
              </h2>
              <p className="mx-auto mb-12 max-w-2xl text-sm leading-7 text-white/72 sm:text-base">
                Share your dates, guest count, preferred day timing, and
                whether your priority is route scenery, onboard lunch, or a
                private houseboat day that fits neatly into the rest of your
                Kerala itinerary.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-navy shadow-lg transition hover:bg-sand hover:text-white"
                >
                  Enquire now
                </Link>
                <Link
                  href="/houseboats"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  View all houseboats
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
