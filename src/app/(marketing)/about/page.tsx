import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import InnerPageHeader from "@/components/layout/InnerPageHeader";
import JsonLd from "@/components/seo/JsonLd";
import {
  createBreadcrumbSchema,
  createLocalBusinessSchema,
  createTravelAgencySchema,
  generatePageMetadata,
} from "@/lib/seo";
import { INSTAGRAM_URL, WHATSAPP_URL } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata({
    title: "About Tranquil Cruise | Alleppey Backwater Experiences",
    description:
      "Learn about Tranquil Cruise and our slower, more personal Alleppey backwater experiences across houseboats, shikara rides, stays, and wellness.",
    path: "/about",
    keywords: [
      "about Tranquil Cruise",
      "Alleppey backwater experiences",
      "Kerala houseboat company",
    ],
    image: {
      url: "/images/home-backwater-houseboats.jpg",
      width: 1200,
      height: 630,
      alt: "Kerala backwaters with houseboats framed by palms",
    },
  });
}

const localBusinessJsonLd = createLocalBusinessSchema({
  path: "/about",
  description:
    "Luxury houseboats, shikkara rides, village country boat rides, kayaking, spa, and rooms on Kerala's backwaters in Alappuzha.",
  sameAs: [WHATSAPP_URL, INSTAGRAM_URL],
});

const travelAgencyJsonLd = createTravelAgencySchema({
  path: "/about",
  description:
    "A local Alappuzha travel agency focused on private Kerala backwater planning, houseboat stays, and slower Alleppey experiences.",
  sameAs: [WHATSAPP_URL, INSTAGRAM_URL],
});

const breadcrumbJsonLd = createBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
]);

const values = [
  {
    title: "Slower journeys",
    desc: "We shape experiences around pace, quiet moments, and the kind of time that feels unhurried from the very beginning.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M5 12c2.2-2.8 4.6-4.2 7.2-4.2 2.5 0 4.8 1.4 6.8 4.2"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M7 15.5c1.5 1.3 3.2 1.9 5 1.9 1.8 0 3.4-.6 5-1.9"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Warm local care",
    desc: "From planning to arrival, every recommendation is guided by local knowledge, personal attention, and easy hospitality.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M12 20s-6-3.7-6-9a3.5 3.5 0 0 1 6-2.3A3.5 3.5 0 0 1 18 11c0 5.3-6 9-6 9Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Beautifully considered stays",
    desc: "Houseboats, rides, rooms, and wellness experiences are chosen for comfort, calm, and a softer way to discover Kerala.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M4 11.5 12 5l8 6.5v7.5H4v-7.5Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M9.5 19v-4.5h5V19"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const journeySteps = [
  {
    step: "01",
    title: "Tell us your pace",
    desc: "Share whether you imagine a sunrise cruise, an overnight houseboat, a village canal ride, or a quieter stay by the water.",
  },
  {
    step: "02",
    title: "We shape the route",
    desc: "We help match you with the right houseboat, room, ride, or wellness stop based on timing, mood, and comfort.",
  },
  {
    step: "03",
    title: "Arrive into calm",
    desc: "Your Kerala experience unfolds with more ease, more privacy, and a more personal connection to the backwaters.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={[localBusinessJsonLd, travelAgencyJsonLd, breadcrumbJsonLd]} />
      <main className="bg-[linear-gradient(180deg,#f9fcff_0%,#e8f2fb_18%,#edf6f3_50%,#fbfcf8_100%)] pb-16 sm:pb-24">
        <InnerPageHeader
          eyebrow="About Tranquil Cruise"
          title="A more personal way to experience Kerala's backwaters."
          description="Tranquil Cruise brings together private houseboats, scenic shikkara rides, village canal journeys, warm local stays, and restorative wellness experiences with a calmer, more considered approach."
          crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
          sideLabel="Our approach"
          sideValue="Thoughtful planning, slower routes, and quieter hospitality for guests who want Kerala to feel warm, personal, and beautifully paced."
          actions={
            <>
              <Link
                href="/gallery"
                className="inline-flex items-center justify-center rounded-xl bg-gold px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-ink shadow-sm shadow-gold/20 transition hover:bg-[#a5c1d8]"
              >
                Explore gallery
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-foreground transition hover:bg-slate-50"
              >
                Start enquiry
              </Link>
            </>
          }
        />

        <div className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 sm:pt-12">
          <section className="grid gap-8 lg:grid-cols-[0.95fr,1.05fr] lg:items-stretch">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-[#d9e6f2] bg-[linear-gradient(180deg,#f7fbff_0%,#e9f2fb_100%)] px-6 py-8 shadow-[0_26px_70px_rgba(54,88,128,0.12)] sm:px-8 sm:py-10">
              <div className="absolute right-[-2rem] top-[-2rem] h-36 w-36 rounded-full border border-white/40 bg-white/28" />
              <div className="absolute bottom-[-3rem] left-[-1rem] h-40 w-40 rounded-full bg-[#bcded7]/30 blur-2xl" />
              <div className="relative space-y-6">
                <div className="text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-[#5b7ea6]">
                  Our Story
                </div>
                <h2 className="max-w-2xl font-[var(--font-display)] text-4xl font-semibold leading-[0.96] tracking-[-0.04em] text-[#24384f] sm:text-5xl">
                  Crafted for guests who want the backwaters to feel calm, not crowded.
                </h2>
                <p className="max-w-2xl text-sm leading-8 text-[#425a73]/78 sm:text-base">
                  Tranquil Cruise was shaped around a simple idea: Kerala is best
                  experienced at a gentler pace. Instead of rushing through fixed
                  packages, we help guests settle into the rhythm of the
                  backwaters through private journeys, slower routes, and stays
                  that feel easy from the moment they begin.
                </p>
                <p className="max-w-2xl text-sm leading-8 text-[#425a73]/78 sm:text-base">
                  Whether you are planning an overnight houseboat, a scenic
                  shikkara ride, a village country boat experience, or a quiet room by the
                  water, our focus stays the same: thoughtful choices, local
                  warmth, and a feeling of space throughout the journey.
                </p>

                <div className="grid gap-3 pt-2 sm:grid-cols-3">
                  <div className="rounded-[1.4rem] border border-[#d9e6f2] bg-white/78 p-4">
                    <div className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#5b7ea6]">
                      Stay
                    </div>
                    <div className="mt-2 text-sm leading-6 text-[#425a73]/76">
                      Houseboats and rooms chosen for comfort, privacy, and calm.
                    </div>
                  </div>
                  <div className="rounded-[1.4rem] border border-[#d9e6f2] bg-white/78 p-4">
                    <div className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#5b7ea6]">
                      Explore
                    </div>
                    <div className="mt-2 text-sm leading-6 text-[#425a73]/76">
                      Scenic rides through open stretches and quieter village canals.
                    </div>
                  </div>
                  <div className="rounded-[1.4rem] border border-[#d9e6f2] bg-white/78 p-4">
                    <div className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#5b7ea6]">
                      Unwind
                    </div>
                    <div className="mt-2 text-sm leading-6 text-[#425a73]/76">
                      Softer wellness moments that bring ease into the journey.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2.5rem] border border-[#d7e6e2] bg-white shadow-[0_24px_70px_rgba(23,50,71,0.1)]">
              <div className="relative min-h-[22rem] sm:min-h-[28rem]">
                <Image
                  src="/images/home-backwater-houseboats.jpg"
                  alt="Houseboats gliding through the Alappuzha backwaters in Kerala"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,38,52,0.02)_0%,rgba(16,38,52,0.36)_100%)]" />
                <div className="absolute left-5 top-5 rounded-full border border-white/35 bg-white/24 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white backdrop-blur-sm">
                  Kerala backwaters
                </div>
                <div className="absolute bottom-5 left-5 max-w-sm rounded-[1.4rem] border border-white/24 bg-[rgba(17,42,52,0.42)] px-4 py-4 text-white/88 backdrop-blur-sm">
                  <div className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#d8eef1]">
                    A gentler way to arrive
                  </div>
                  <p className="mt-2 text-sm leading-6">
                    Slower routes, clearer planning, and a calmer backwater rhythm from the first step.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-12 overflow-hidden rounded-[2.5rem] border border-[#dbe7f0] bg-[linear-gradient(180deg,#fbfdff_0%,#eef4fb_100%)] p-6 shadow-[0_22px_64px_rgba(23,50,71,0.08)] sm:p-8 lg:p-10">
            <div className="flex flex-col gap-4 border-b border-[#dbe7f0] pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[#5b7ea6]">
                  What Matters Here
                </div>
                <h2 className="mt-3 font-[var(--font-display)] text-3xl font-semibold leading-tight text-[#263c50] sm:text-4xl">
                  The feeling is just as important as the route.
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-[#456174]/70 sm:text-base">
                Every detail is meant to make the backwaters feel more personal,
                more spacious, and more memorable in the quietest way.
              </p>
            </div>

            <div className="mt-6 grid gap-5 lg:grid-cols-3">
              {values.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.9rem] border border-[#dbe7f0] bg-white p-6 shadow-[0_14px_34px_rgba(23,50,71,0.06)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#edf3fb] text-[#5b7ea6] shadow-[0_10px_20px_rgba(23,50,71,0.08)]">
                    {item.icon}
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-[#263c50]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#456174]/74">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12 grid gap-8 lg:grid-cols-[1.05fr,0.95fr] lg:items-start">
            <div className="rounded-[2.5rem] border border-[#dce7ef] bg-white p-6 shadow-[0_20px_60px_rgba(23,50,71,0.06)] sm:p-8">
              <div className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[#4b9f92]">
                How It Feels
              </div>
              <h2 className="mt-3 font-[var(--font-display)] text-3xl font-semibold leading-tight text-[#21424a] sm:text-4xl">
                A quieter kind of luxury.
              </h2>
              <div className="mt-6 rounded-[2rem] bg-[linear-gradient(135deg,#eef8f6_0%,#fbfefe_100%)] p-6">
                <p className="text-sm leading-8 text-[#3f6269]/74 sm:text-base">
                  Not loud, not rushed, and never overcomplicated. We prefer soft
                  mornings, graceful boat rides, clear communication, and stays
                  that leave room for you to simply be present with the landscape.
                </p>
                <p className="mt-4 text-sm leading-8 text-[#3f6269]/74 sm:text-base">
                  That is what makes Tranquil Cruise feel different: a more relaxed
                  way to discover Kerala without losing comfort, beauty, or care.
                </p>
              </div>
            </div>

            <div className="rounded-[2.5rem] border border-[#d6e6df] bg-[linear-gradient(180deg,#f9fdfc_0%,#ecf6f1_100%)] p-6 shadow-[0_20px_60px_rgba(23,50,71,0.06)] sm:p-8">
              <div className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[#4b9f92]">
                Your Journey
              </div>
              <div className="mt-6 space-y-4">
                {journeySteps.map((step) => (
                  <div
                    key={step.step}
                    className="grid gap-4 rounded-[1.8rem] border border-[#d6e6df] bg-white/88 p-5 shadow-[0_10px_24px_rgba(44,106,93,0.08)] sm:grid-cols-[auto,1fr]"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#dff3ee] text-sm font-semibold uppercase tracking-[0.18em] text-[#4b9f92]">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#21424a]">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-[#3f6269]/74">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
