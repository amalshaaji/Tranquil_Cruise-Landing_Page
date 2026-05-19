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

const familyFaqs = [
  {
    question: "Which houseboat is best for a family stay in Alappuzha?",
    answer:
      "Two-bedroom houseboats are usually the first match for smaller families, while three-bedroom and five-bedroom layouts work better when you need more private rooms, more shared lounge space, or are travelling with grandparents and relatives.",
  },
  {
    question: "Are family houseboats in Alleppey suitable for children?",
    answer:
      "Yes. Families often choose houseboats because the pace is slower, the seating is more comfortable than a smaller ride, and children can enjoy the open deck, calm scenery, and simpler backwater moments with the family together.",
  },
  {
    question: "Can we plan a group family stay on one private houseboat?",
    answer:
      "Yes. Private family group stays are common, especially for reunions, holiday trips, and mixed-age travel. The right fit depends on bedroom count, shared space, and whether you want a day cruise or overnight rhythm.",
  },
  {
    question: "Is an overnight family houseboat better than a day cruise?",
    answer:
      "Overnight stays usually work better for families who want a fuller backwater experience, slower meals, and less rushing. Day cruises are a good fit when you want the scenery and family time without managing a full overnight plan.",
  },
];

const galleryImages = [
  {
    src: "/images/family-retreat-houseboat.jpg",
    alt: "Family houseboat cruise in Alappuzha",
  },
  {
    src: "/images/two-bedroom-gallery-v2/WhatsApp_Image_2026-05-04_at_19_44_24.jpeg",
    alt: "Two bedroom family houseboat lounge in Alleppey",
  },
  {
    src: "/images/three-bedroom-gallery/WhatsApp_Image_2026-05-14_at_18_13_08.jpeg",
    alt: "Group-friendly three bedroom houseboat in Kerala",
  },
  {
    src: "/images/five-bedroom-gallery/WhatsApp_Image_2026-05-14_at_18_04_15.jpeg",
    alt: "Large family group houseboat in Alappuzha",
  },
];

const familyPackageReasons = [
  {
    title: "Room to spread out",
    text: "Family guests usually care about shared lounge comfort just as much as bedroom count, especially when children, parents, and older relatives are all travelling together.",
  },
  {
    title: "A gentler pace for mixed ages",
    text: "Houseboats work well for families because the trip naturally slows down. That makes it easier to manage meals, rest, views, and conversation without turning the day into constant movement.",
  },
  {
    title: "Flexible family planning",
    text: "The strongest family package is usually not a fixed template. It is the combination of the right boat size, route timing, and overnight or day-cruise structure for your group.",
  },
  {
    title: "Better shared memories",
    text: "Families often choose a private boat because it keeps everyone together in one place instead of splitting the trip across separate transport, sightseeing stops, and meal logistics.",
  },
];

const childFriendlyMoments = [
  "Open-deck sightseeing where children can enjoy birds, coconut groves, and passing village life",
  "Calmer cruising stretches that feel easier for older guests and younger children",
  "Shared dining time on board without needing to move the family between stops",
  "Simple photo moments together at sunset, on the deck, and during village canal stretches",
] as const;

const familyStayFormats = [
  {
    title: "2 Bedroom Family Houseboat",
    href: "/houseboats/2-bedroom",
    fit: "Best for smaller families",
    copy: "A practical starting point for parents travelling with children or a compact family group that still wants private rooms and a comfortable shared lounge.",
  },
  {
    title: "3 Bedroom Group Family Houseboat",
    href: "/houseboats/3-bedroom",
    fit: "Best for extended families",
    copy: "A stronger fit when cousins, grandparents, or multiple couples are travelling together and need more room to spread out without losing the private-boat feel.",
  },
  {
    title: "5 Bedroom Celebration Houseboat",
    href: "/houseboats/5-bedroom",
    fit: "Best for reunions and large groups",
    copy: "Ideal when your trip is built around a bigger family gathering, celebration, or holiday stay that needs generous common areas and multiple private bedrooms.",
  },
];

const groupStayPlanning = [
  {
    title: "Family day cruise",
    copy: "Best when your group wants quality time on the water, relaxed meals, and backwater views without planning a full overnight stay.",
  },
  {
    title: "Overnight family stay",
    copy: "Best when you want a slower route, more downtime on board, and enough space for dinner, morning views, and a less rushed family rhythm.",
  },
  {
    title: "Celebration or reunion plan",
    copy: "Best when the trip includes a larger guest mix and the boat needs to function as both transport and a shared social space for the group.",
  },
];

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata({
    title: "Family Houseboat Alappuzha | Family-Friendly Alleppey Cruise",
    description:
      "Plan a family houseboat in Alappuzha with family-friendly packages, child-friendly backwater activities, and private group stays in Alleppey.",
    path: "/family-houseboat-alappuzha",
    keywords: [
      "family houseboat alappuzha",
      "family-friendly alleppey cruise",
      "family houseboat alleppey",
      "group houseboat kerala",
    ],
    image: {
      url: "/images/family-retreat-houseboat.jpg",
      width: 1200,
      height: 630,
      alt: "Family houseboat in Alappuzha",
    },
  });
}

const breadcrumbJsonLd = createBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Houseboats", path: "/houseboats" },
  { name: "Family Houseboat Alappuzha", path: "/family-houseboat-alappuzha" },
]);

const faqJsonLd = createFaqSchema(familyFaqs);

const imageJsonLd = createImageObjectSchema({
  path: "/images/family-retreat-houseboat.jpg",
  alt: "Family houseboat in Alappuzha",
  width: 1200,
  height: 630,
});

const serviceJsonLd = createServiceSchema({
  name: "Family Houseboat Alappuzha",
  description:
    "Private family houseboat stays in Alappuzha for children, parents, and larger groups who want a slower Kerala backwater trip together.",
  path: "/family-houseboat-alappuzha",
  serviceType: "Family houseboat stay",
});

const touristTripJsonLd = createTouristTripSchema({
  name: "Family Houseboat Experience in Alappuzha",
  description:
    "A family-focused Kerala backwater cruise in Alappuzha designed around child-friendly moments, mixed-age comfort, and private group stays.",
  path: "/family-houseboat-alappuzha",
  image: {
    path: "/images/family-retreat-houseboat.jpg",
    alt: "Family houseboat in Alappuzha",
    width: 1200,
    height: 630,
  },
  itinerary: ["Alleppey", "Alappuzha", "Kuttanad", "Vembanad Lake"],
  touristType: ["Families", "Children", "Private groups"],
  keywords: ["family houseboat alappuzha", "family houseboat alleppey"],
});

export default function FamilyHouseboatAlappuzhaPage() {
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
                  { label: "Family Houseboat Alappuzha" },
                ]}
              />
              <div className="mb-4 inline-block text-[0.7rem] font-bold uppercase tracking-[0.3em] text-teal-600/80">
                Family Group Stay
              </div>
              <h1 className="text-[clamp(2.35rem,9vw,4.8rem)] font-semibold leading-[1.02] tracking-tight text-sand">
                Family houseboats in Alappuzha for parents, children, and shared backwater time that feels easy to enjoy together.
              </h1>
              <p className="mt-6 max-w-2xl text-sm leading-7 text-foreground/68 sm:text-lg">
                This page is for families planning a private Alleppey
                houseboat, not a generic one-size-fits-all cruise. If you want
                family packages, child-friendly moments on the water, and a
                layout that suits a small or extended group, start here.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#173247] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#234760]"
                >
                  Plan a family houseboat
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
              <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-tr from-[#eff6d8]/70 via-[#dff1eb]/50 to-navy-100/15 blur-2xl opacity-70" />
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
            <div className="rounded-[2rem] border border-navy/8 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbf7_100%)] p-6 shadow-[0_18px_40px_rgba(23,50,71,0.06)] sm:rounded-[2.6rem] sm:p-10">
              <div className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-teal-600/80">
                Family Packages
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-sand sm:text-4xl">
                The best family houseboat package is usually the one that matches your group size and pace.
              </h2>
              <div className="mt-8 grid gap-4">
                {familyPackageReasons.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[1.5rem] border border-navy/8 bg-[#fbfdf9] p-5"
                  >
                    <h3 className="text-lg font-semibold text-sand">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-foreground/66">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-navy/8 bg-[linear-gradient(180deg,#eef6f4_0%,#ffffff_100%)] p-6 shadow-[0_18px_40px_rgba(23,50,71,0.06)] sm:rounded-[2.6rem] sm:p-10">
              <div className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-teal-600/80">
                Child-Friendly Moments
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-sand sm:text-4xl">
                Family cruises feel strongest when children can enjoy the backwaters without the trip feeling rushed.
              </h2>
              <div className="mt-8 grid gap-3">
                {childFriendlyMoments.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.35rem] border border-[#dce8df] bg-white px-4 py-4 text-sm leading-7 text-foreground/70"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-[1.6rem] border border-gold/25 bg-[#edf5f8] p-5 text-sm leading-7 text-foreground/72">
                If your family includes toddlers, older children, or
                grandparents, the most useful planning decision is usually the
                boat size and route pace, not just the headline package name.
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-20">
          <div className="rounded-[2.2rem] border border-navy/8 bg-[#173247] px-6 py-8 text-white shadow-[0_24px_60px_rgba(23,50,71,0.16)] sm:px-10 sm:py-12">
            <div className="grid gap-8 lg:grid-cols-[0.95fr,1.05fr] lg:items-start">
              <div>
                <div className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-white/70">
                  Group Stays
                </div>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Family group stays work best when the houseboat acts like a shared base, not just transport.
                </h2>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/74 sm:text-lg">
                  Extended families often need a houseboat that handles both
                  privacy and togetherness. That means enough bedrooms for the
                  guest mix, enough common space for meals and conversation,
                  and a route rhythm that gives everyone time to settle in.
                </p>
              </div>
              <div className="grid gap-4">
                {groupStayPlanning.map((item) => (
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
                Family Layouts
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-sand sm:text-4xl">
                Most families compare boat size first, then refine the route and stay length.
              </h2>
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {familyStayFormats.map((item) => (
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

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-20">
          <div className="rounded-[2rem] border border-navy/8 bg-[#f7fbfc] p-6 shadow-[0_18px_40px_rgba(23,50,71,0.06)] sm:rounded-[2.6rem] sm:p-10">
            <div className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-teal-600/80">
              Internal Planning Path
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-sand sm:text-4xl">
              Compare family-focused layouts before you choose the final package
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-foreground/66 sm:text-base">
              The most useful next step is usually to compare the main{" "}
              <Link href="/houseboats" className="font-semibold text-teal hover:text-navy">
                houseboats hub
              </Link>{" "}
              with the{" "}
              <Link
                href="/houseboats/2-bedroom"
                className="font-semibold text-teal hover:text-navy"
              >
                two-bedroom
              </Link>
              ,{" "}
              <Link
                href="/houseboats/3-bedroom"
                className="font-semibold text-teal hover:text-navy"
              >
                three-bedroom
              </Link>
              , and{" "}
              <Link
                href="/houseboats/5-bedroom"
                className="font-semibold text-teal hover:text-navy"
              >
                five-bedroom
              </Link>{" "}
              options before deciding whether your trip is better as a lighter
              family cruise or a bigger group stay.
            </p>
          </div>
        </section>

        <FaqSection
          eyebrow="Family Houseboat FAQs"
          title="Questions families usually ask before booking"
          intro="These answers focus on family houseboat intent in Alleppey and Alappuzha."
          faqs={familyFaqs}
        />

        <section className="px-4 py-12 sm:px-6 lg:py-20">
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-[#173247] px-8 py-16 text-center text-white shadow-[0_24px_80px_rgba(23,50,71,0.2)]">
            <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-teal/10 blur-3xl" />
            <div className="relative z-10 mx-auto max-w-3xl">
              <span className="mb-4 block text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-teal/70">
                Ready To Plan
              </span>
              <h2 className="mb-8 text-3xl font-semibold tracking-tight sm:text-5xl">
                Start planning a family houseboat stay in Alappuzha
              </h2>
              <p className="mx-auto mb-12 max-w-2xl text-sm leading-7 text-white/72 sm:text-base">
                Share your dates, guest count, ages in the group, and whether
                you want a smaller family layout or a larger private houseboat
                for an extended family trip.
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
