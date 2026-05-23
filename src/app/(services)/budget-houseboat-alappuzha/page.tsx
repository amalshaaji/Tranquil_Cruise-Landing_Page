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

const budgetFaqs = [
  {
    question: "What is the best budget houseboat in Alappuzha for couples or small families?",
    answer:
      "For budget-minded guests, the single-bedroom and two-bedroom formats are usually the strongest starting points because they keep the layout practical without stepping into larger group-boat formats.",
  },
  {
    question: "What is usually included in a budget houseboat in Alleppey?",
    answer:
      "Budget-friendly plans usually focus on the essentials: private cruising time, bedroom access based on the boat type, crew support, and a simpler stay structure. Exact inclusions still vary by route, meal plan, and duration.",
  },
  {
    question: "Is a budget houseboat in Kerala still suitable for an overnight stay?",
    answer:
      "Yes. A budget houseboat can still be a good overnight option if your priority is the backwater experience, a practical room setup, and a simpler route plan rather than a heavily premium service style.",
  },
  {
    question: "How do I compare a budget houseboat with a shikara ride or country boat?",
    answer:
      "Choose a budget houseboat if you still want the overnight feel, bedroom access, and slower cruising time. Choose a shikara or country boat if your priority is a shorter scenic ride with a lighter overall plan.",
  },
];

const galleryImages = [
  {
    src: "/images/single-bed-gallery/exterior-view.jpeg",
    alt: "Budget-friendly single bedroom houseboat in Alleppey",
  },
  {
    src: "/images/two-bedroom-gallery/exterior.jpeg",
    alt: "Practical two bedroom houseboat exterior in Alappuzha",
  },
  {
    src: "/images/two-bedroom-gallery/lounge.jpeg",
    alt: "Simple shared lounge inside a family houseboat in Kerala",
  },
  {
    src: "/images/home-backwater-houseboats.jpg",
    alt: "Affordable backwater houseboat setting in Alleppey",
  },
];

const priceBands = [
  {
    title: "Single bedroom stays",
    bestFor: "Couples or solo guests",
    guidance: "Usually the easiest entry point if you want an overnight houseboat feel without moving into larger family-boat formats.",
  },
  {
    title: "Two bedroom stays",
    bestFor: "Small families or shared bookings",
    guidance: "Often the most practical value option when you want more space per guest and a layout that works well for a family or small group.",
  },
  {
    title: "Larger layouts",
    bestFor: "Groups comparing per-person cost",
    guidance: "Three-bedroom and five-bedroom formats can still make sense when the layout suits a larger group well enough.",
  },
] as const;

const typicalInclusions = [
  "Private boat and crew for the selected route plan",
  "Bedroom access based on the houseboat format you choose",
  "Shared lounge and open deck use where available",
  "Basic route planning around your timing and guest count",
  "Simple overnight or day-cruise structure depending on your enquiry",
] as const;

const comparisonRows = [
  {
    label: "Budget houseboat",
    fit: "Best if you still want a room, slower cruising, and the overnight backwater feel.",
    link: "/houseboats",
  },
  {
    label: "Shikara ride",
    fit: "Best if you want a shorter private canal ride with less overall spend and no overnight stay.",
    link: "/shikkara",
  },
  {
    label: "Country boat",
    fit: "Best if your priority is a simpler village-route experience and an open-air local feel.",
    link: "/canoe-boats",
  },
];

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata({
    title: "Budget Houseboat Alappuzha | Affordable Alleppey Houseboat",
    description:
      "Compare budget houseboats in Alappuzha with affordable Alleppey overnight stays, practical layouts, essential inclusions, and route guidance for value-focused Kerala backwater trips.",
    path: "/budget-houseboat-alappuzha",
    keywords: [
      "budget houseboat alappuzha",
      "affordable alleppey houseboat",
      "budget houseboat kerala",
      "cheap houseboat alleppey overnight stay",
    ],
    image: {
      url: "/images/single-bed-gallery/exterior-view.jpeg",
      width: 1200,
      height: 630,
      alt: "Budget houseboat in Alleppey",
    },
  });
}

const breadcrumbJsonLd = createBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Houseboats", path: "/houseboats" },
  { name: "Budget Houseboat Alappuzha", path: "/budget-houseboat-alappuzha" },
]);

const faqJsonLd = createFaqSchema(budgetFaqs);

const imageJsonLd = createImageObjectSchema({
  path: "/images/single-bed-gallery/exterior-view.jpeg",
  alt: "Budget houseboat in Alleppey",
  width: 1200,
  height: 630,
});

const serviceJsonLd = createServiceSchema({
  name: "Budget Houseboat Alappuzha",
  description:
    "Affordable houseboat stays in Alleppey and Alappuzha for guests who want a practical Kerala backwater overnight or slower-value cruise plan.",
  path: "/budget-houseboat-alappuzha",
  serviceType: "Budget houseboat stay",
});

const touristTripJsonLd = createTouristTripSchema({
  name: "Budget Houseboat Experience in Alappuzha",
  description:
    "A value-focused Kerala backwater experience in Alappuzha built around practical houseboat layouts, essential inclusions, and route choices that suit lighter budgets.",
  path: "/budget-houseboat-alappuzha",
  image: {
    path: "/images/single-bed-gallery/exterior-view.jpeg",
    alt: "Budget houseboat in Alleppey",
    width: 1200,
    height: 630,
  },
  itinerary: ["Alleppey", "Alappuzha", "Kuttanad"],
  touristType: ["Budget travelers", "Couples", "Small families"],
  keywords: ["budget houseboat alappuzha", "affordable alleppey houseboat"],
});

export default function BudgetHouseboatAlappuzhaPage() {
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
                  { label: "Budget Houseboat Alappuzha" },
                ]}
              />
              <div className="mb-4 inline-block text-[0.7rem] font-bold uppercase tracking-[0.3em] text-teal-600/80">
                Value-Focused Stay
              </div>
              <h1 className="text-[clamp(2.35rem,9vw,4.8rem)] font-semibold leading-[1.02] tracking-tight text-sand">
                Budget houseboats in Alappuzha for guests who want the backwaters without overcomplicating the spend.
              </h1>
              <p className="mt-6 max-w-2xl text-sm leading-7 text-foreground/68 sm:text-lg">
                This page is for travelers comparing an affordable Alleppey
                houseboat stay, not the most premium version of the experience.
                If you want a practical overnight plan, simpler inclusions, and
                the best fit for your budget and guest count, start here.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#173247] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#234760]"
                >
                  Ask about budget availability
                </Link>
                <Link
                  href="/houseboats"
                  className="inline-flex items-center justify-center rounded-full border border-navy/10 bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-foreground transition hover:bg-[#f4f9fb]"
                >
                  Compare all houseboats
                </Link>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-tr from-teal-100/40 to-navy-100/20 blur-2xl opacity-60" />
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
          <div className="grid gap-6 lg:grid-cols-[1fr,1fr]">
            <div className="rounded-[2rem] border border-navy/8 bg-[linear-gradient(180deg,#ffffff_0%,#f7fbfc_100%)] p-6 shadow-[0_18px_40px_rgba(23,50,71,0.06)] sm:rounded-[2.6rem] sm:p-10">
              <div className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-teal-600/80">
                Planning Guide
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-sand sm:text-4xl">
                How to think about budget-friendly houseboat planning in Alleppey
              </h2>
              <div className="mt-8 grid gap-4">
                {priceBands.map((band) => (
                  <div
                    key={band.title}
                    className="rounded-[1.5rem] border border-navy/8 bg-[#f7fbfd] p-5"
                  >
                    <div className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-teal/75">
                      {band.bestFor}
                    </div>
                    <h3 className="mt-3 text-lg font-semibold text-sand">{band.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-foreground/66">
                      {band.guidance}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-navy/8 bg-[linear-gradient(180deg,#eef5f8_0%,#ffffff_100%)] p-6 shadow-[0_18px_40px_rgba(23,50,71,0.06)] sm:rounded-[2.6rem] sm:p-10">
              <div className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-teal-600/80">
                Typical Inclusions
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-sand sm:text-4xl">
                What a budget-friendly houseboat plan usually includes
              </h2>
              <div className="mt-8 grid gap-3">
                {typicalInclusions.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-[1.4rem] border border-white bg-white/92 px-4 py-4 shadow-sm"
                  >
                    <span className="mt-1 inline-flex h-2 w-2 shrink-0 rounded-full bg-teal-500" />
                    <p className="text-sm leading-7 text-foreground/68">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-[1.6rem] border border-gold/25 bg-[#edf5f8] p-5 text-sm leading-7 text-foreground/72">
                If you are comparing on value, ask first about guest count,
                route duration, and whether a single-bedroom or two-bedroom
                plan gives the better per-person fit.
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f4f8fa] px-4 py-14 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 text-center sm:mb-14">
              <div className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-teal-600/80">
                Comparison Section
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-sand sm:text-5xl">
                Budget houseboat versus other lower-spend backwater options
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-foreground/66 sm:text-base">
                The right choice depends on whether you want the overnight
                houseboat feel or just a scenic ride at a lighter total spend.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {comparisonRows.map((item) => (
                <article
                  key={item.label}
                  className="rounded-[2rem] border border-navy/10 bg-white p-6 shadow-[0_20px_46px_rgba(23,50,71,0.08)]"
                >
                  <h3 className="text-2xl font-semibold text-sand">{item.label}</h3>
                  <p className="mt-4 text-sm leading-7 text-foreground/66">
                    {item.fit}
                  </p>
                  <Link
                    href={item.link}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal transition hover:text-navy"
                  >
                    Compare this option
                    <span aria-hidden="true">→</span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-20">
          <div className="rounded-[2rem] border border-navy/8 bg-[#f7fbfc] p-6 shadow-[0_18px_40px_rgba(23,50,71,0.06)] sm:rounded-[2.6rem] sm:p-10">
            <div className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-teal-600/80">
              Internal Planning Path
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-sand sm:text-4xl">
              Compare the most practical houseboat layouts before you book
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-foreground/66 sm:text-base">
              If you are shopping on value, the most useful next step is to
              compare the main <Link href="/houseboats" className="font-semibold text-teal hover:text-navy">houseboats hub</Link> with the
              more practical <Link href="/houseboats/single-bed" className="font-semibold text-teal hover:text-navy">single-bedroom</Link> and{" "}
              <Link href="/houseboats/2-bedroom" className="font-semibold text-teal hover:text-navy">two-bedroom</Link> options before moving up to larger layouts.
            </p>
          </div>
        </section>

        <FaqSection
          eyebrow="Budget Houseboat FAQs"
          title="Questions guests ask before booking an affordable houseboat in Kerala"
          intro="These answers focus on budget houseboat intent in Alleppey and Alappuzha."
          faqs={budgetFaqs}
        />

        <section className="px-4 py-12 sm:px-6 lg:py-20">
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-[#173247] px-8 py-16 text-center text-white shadow-[0_24px_80px_rgba(23,50,71,0.2)]">
            <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-teal/10 blur-3xl" />
            <div className="relative z-10 mx-auto max-w-3xl">
              <span className="mb-4 block text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-teal/70">
                Ready To Compare
              </span>
              <h2 className="mb-8 text-3xl font-semibold tracking-tight sm:text-5xl">
                Start planning an affordable Alleppey houseboat stay
              </h2>
              <p className="mx-auto mb-12 max-w-2xl text-sm leading-7 text-white/72 sm:text-base">
                Share your dates, guest count, and whether your priority is the
                lightest overnight budget, a better value family format, or a
                shorter scenic alternative to a full houseboat stay.
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
