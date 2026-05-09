"use client";

import Link from "next/link";
import InnerPageHeader from "@/components/layout/InnerPageHeader";
import ScrollableImageRow from "../../../components/services/ScrollableImageRow";

const highlights = [
  "Two private air-conditioned bedrooms",
  "Family-friendly layout with more room to relax",
  "Upper deck views and scenic cruising",
];

const features = [
  "Two attached washrooms",
  "Spacious indoor lounge and dining area",
  "Backwater cruising experience",
  "Shared deck and open-air sitting access",
];

const favoriteFacilities = [
  "2 private bedrooms",
  "Family-friendly stay",
  "Indoor lounge space",
  "Upper deck access",
  "Attached washrooms",
];

const reasonsToLove = [
  "A more spacious houseboat format that gives families and small groups room to settle in comfortably.",
  "Separate bedrooms, indoor lounge space, and open deck access create an easy rhythm between privacy and togetherness.",
  "Well-suited for overnight backwater routes when you want a fuller houseboat experience without feeling crowded.",
];

const planningPrompts = [
  "Best for families and small groups",
  "Comfortable for overnight stays",
  "Extra room for shared time",
  "Great for 3-6 guests",
  "Relaxed upgrade from compact stays",
];

const galleryImages = [
  { src: "/images/two-bedroom-gallery/exterior.jpeg", alt: "2 bedroom houseboat exterior view" },
  { src: "/images/two-bedroom-gallery/lounge.jpeg", alt: "Indoor lounge and seating area" },
  { src: "/images/two-bedroom-gallery/bedroom.jpeg", alt: "Private bedroom inside the 2 bedroom houseboat" },
  { src: "/images/two-bedroom-gallery/washroom-toilet.jpeg", alt: "Attached washroom with toilet" },
  { src: "/images/two-bedroom-gallery/washroom-vanity.jpeg", alt: "Attached washroom vanity area" },
  { src: "/images/two-bedroom-gallery/corridor.jpeg", alt: "Interior corridor inside the houseboat" },
];

const faqs = [
  {
    question: "Who is this 2 bedroom houseboat best suited for?",
    answer:
      "This option is ideal for families, small groups of friends, or guests who want a more spacious stay with separate bedrooms and more shared lounging room.",
  },
  {
    question: "How many guests can this houseboat comfortably host?",
    answer:
      "It is generally well-suited for small group and family travel. Share your guest count and preferred room setup through the contact form and the team can guide you on the best fit.",
  },
  {
    question: "Does the stay include private bedroom and washroom facilities?",
    answer:
      "Yes. The 2 bedroom option is designed around private sleeping spaces and attached washroom access, along with shared indoor lounge and deck areas.",
  },
  {
    question: "Can we enquire about overnight routes and custom plans?",
    answer:
      "Yes. You can share your preferred dates, guest count, and route ideas, and the team can help shape an overnight or custom backwater plan around this houseboat option.",
  },
];

export default function TwoBedroomHouseboatPage() {
  return (
    <main className="pb-24 bg-white font-sans antialiased sm:pb-32">
      <InnerPageHeader
        eyebrow="Houseboat Stay"
        title="2 Bedroom Houseboat"
        description="A spacious houseboat stay for families and small groups who want more room, calm water views, and a fuller backwater rhythm."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Houseboats", href: "/houseboats" },
          { label: "2 Bedroom Houseboat" },
        ]}
        sideLabel="Best For"
        sideValue="Families, small groups, overnight plans, and guests who want more space to share the backwater experience together."
        actions={
          <div className="flex gap-3">
            <Link
              href="/contact?experience=houseboat&option=2-bedroom"
              className="inline-flex items-center justify-center rounded-full bg-[#173247] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-sand hover:text-[#173247]"
            >
              Enquire Now
            </Link>
            <Link
              href="/houseboats"
              className="inline-flex items-center justify-center rounded-full border border-navy/10 bg-white px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-[#f4f9fb]"
            >
              Back
            </Link>
          </div>
        }
      />

      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="mb-4 block text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-teal/80">
              Stay Preview
            </div>
            <h2 className="mb-6 text-4xl font-semibold leading-[1.1] tracking-tight text-sand sm:text-5xl">
              More room to gather, <br /> unwind, and cruise slowly.
            </h2>
            <p className="mb-10 max-w-2xl text-lg leading-relaxed text-foreground/60">
              Step into a fuller houseboat experience with broader shared
              spaces, separate bedrooms, and an easy pace for families or small
              groups. Browse the gallery to get a feel for the stay.
            </p>

            <div className="group relative">
              <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-teal/20 to-navy/10 blur-xl opacity-50" />
              <div className="relative rounded-[2rem] border border-navy/5 bg-white p-2 shadow-sm">
                <ScrollableImageRow images={galleryImages} />
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:col-span-4 lg:justify-end">
            <div className="group relative rounded-[2.5rem] border border-navy/5 bg-white p-8 text-center shadow-[0_20px_50px_rgba(23,50,71,0.08)]">
              <div className="absolute -right-3 -top-3 flex h-12 w-12 items-center justify-center rounded-full bg-teal-500 text-xs font-bold text-white shadow-lg">
                TOP
              </div>
              <div className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-teal/80">
                Guest Feel
              </div>
              <div className="text-6xl font-semibold tracking-tighter text-sand">
                9.1
              </div>
              <div className="mt-2 text-sm font-medium italic text-foreground/50">
                &quot;Excellent&quot;
              </div>
              <div className="mt-6 border-t border-navy/5 pt-6 text-[0.7rem] uppercase tracking-widest text-foreground/40">
                Spacious Experience
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-3 lg:justify-start">
          {favoriteFacilities.map((facility) => (
            <div
              key={facility}
              className="cursor-default rounded-full border border-navy/10 bg-white px-5 py-2 text-xs font-medium text-foreground/70 shadow-sm transition-colors hover:border-teal/40"
            >
              {facility}
            </div>
          ))}
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          <section className="rounded-[2.5rem] border border-navy/5 bg-white p-8 shadow-[0_20px_60px_rgba(23,50,71,0.06)] sm:p-12 lg:col-span-2">
            <div className="mb-4 block text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-teal/80">
              The Appeal
            </div>
            <h3 className="mb-8 text-3xl font-semibold tracking-tight text-sand">
              Why guests choose this format
            </h3>
            <div className="grid gap-6 sm:grid-cols-2">
              {reasonsToLove.map((reason, idx) => (
                <div
                  key={idx}
                  className="group flex gap-4 rounded-2xl border border-navy/5 bg-[#FBFBFC] p-4 transition-colors hover:border-teal/30"
                >
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#173247] text-center text-xs font-bold text-white transition-colors group-hover:bg-teal-500">
                    {idx + 1}
                  </div>
                  <p className="text-sm leading-relaxed text-foreground/70">
                    {reason}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[2.5rem] border border-navy/5 bg-[#eef5f8] p-8 shadow-sm sm:p-12">
            <div className="mb-4 block text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-teal/80">
              Ideal For
            </div>
            <h3 className="mb-8 text-2xl font-semibold tracking-tight text-sand">
              Planning cues
            </h3>
            <div className="flex flex-col gap-3">
              {planningPrompts.map((prompt) => (
                <div
                  key={prompt}
                  className="flex items-center gap-3 rounded-2xl border border-white bg-white/60 px-4 py-3 text-sm font-medium text-foreground/70 backdrop-blur-sm"
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-[#173247]" />
                  {prompt}
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <section className="relative overflow-hidden rounded-[2.5rem] bg-[#173247] p-8 text-white shadow-2xl sm:p-12">
            <div className="absolute right-0 top-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-teal-500/20 blur-3xl" />
            <div className="relative z-10">
              <span className="mb-6 block text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-teal/80">
                The Experience
              </span>
              <h3 className="mb-6 text-3xl font-semibold tracking-tight">
                A spacious houseboat stay for longer, slower moments.
              </h3>
              <p className="mb-10 max-w-md leading-relaxed text-white/70">
                This option is shaped for guests who want more room to spread
                out without losing the charm of backwater cruising. It blends
                private sleeping space, easy shared time, and a calmer pace for
                families and small groups.
              </p>

              <div className="grid gap-4">
                {highlights.map((highlight, index) => (
                  <div
                    key={highlight}
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm transition-all hover:bg-white/20"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-xs font-bold text-[#173247] transition-transform group-hover:scale-110">
                      {index + 1}
                    </div>
                    <span className="text-sm font-medium text-white/90">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="rounded-[2.5rem] border border-navy/5 bg-white p-8 shadow-[0_20px_60px_rgba(23,50,71,0.06)] sm:p-12">
            <div className="mb-4 block text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-teal/80">
              The Essentials
            </div>
            <h3 className="mb-8 text-2xl font-semibold tracking-tight text-sand">
              Everything for a shared, comfortable stay.
            </h3>

            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-4 rounded-2xl border border-navy/5 bg-[#FBFBFC] p-5 text-sm font-medium text-foreground/70 transition-colors hover:border-teal/40"
                >
                  <div className="h-2 w-2 rounded-full bg-teal-500 shadow-[0_0_0_4px_rgba(20,184,166,0.1)]" />
                  {feature}
                </div>
              ))}
            </div>

            <div className="group relative mt-12 overflow-hidden rounded-[2rem] border border-navy/5 bg-[#eef5f8] p-8">
              <div className="relative z-10">
                <h4 className="mb-2 text-lg font-semibold text-sand">
                  Ready to plan?
                </h4>
                <p className="mb-6 text-sm text-foreground/60">
                  Share your dates and group details, and we&apos;ll help you
                  confirm availability for this 2 bedroom stay.
                </p>
                <Link
                  href="/contact?experience=houseboat&option=2-bedroom"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#173247] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-sand hover:text-[#173247]"
                >
                  <span className="uppercase tracking-wider">Book Your Stay</span>
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-4xl px-6">
        <div className="mb-12 text-center">
          <span className="mb-3 block text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-teal/80">
            Guest Inquiries
          </span>
          <h3 className="text-3xl font-semibold tracking-tight text-sand sm:text-4xl">
            Common Questions
          </h3>
          <p className="mt-4 text-foreground/60">
            Quick answers to help you plan a more spacious backwater stay.
          </p>
        </div>

        <div className="grid gap-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-[2rem] border border-navy/5 bg-white transition-all duration-300 open:shadow-[0_20px_40px_rgba(23,50,71,0.06)]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between p-6 text-left transition-all group-hover:bg-[#fbfbfc]">
                <span className="text-base font-semibold leading-tight text-[#173247]">
                  {faq.question}
                </span>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eef5f8] text-[#173247] transition-all group-open:rotate-45 group-open:bg-[#173247] group-open:text-white">
                  <span className="text-xl font-light">+</span>
                </div>
              </summary>
              <div className="px-6 pb-6">
                <div className="mb-4 h-px w-full bg-navy/5" />
                <p className="text-sm leading-relaxed text-foreground/70 sm:text-base">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
