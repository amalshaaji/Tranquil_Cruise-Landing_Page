"use client";

import Link from "next/link";
import InnerPageHeader from "@/components/layout/InnerPageHeader";
import ScrollableImageRow from "../../../components/services/ScrollableImageRow";

// --- DATA CONSTANTS ---
const highlights = [
  "Comfortable private bedroom layout",
  "Ideal for short stays and intimate getaways",
  "Private deck access and scenic cruising",
];

const features = [
  "Private air-conditioned room",
  "Attached washroom",
  "Backwater cruising experience",
  "Access to shared lounging spaces",
];

const favoriteFacilities = [
  "Private bedroom",
  "Scenic cruising",
  "Upper deck access",
  "Attached washroom",
  "Couple-friendly stay",
];

const reasonsToLove = [
  "A more intimate houseboat format that still feels calm, polished, and scenic.",
  "A mix of private room comfort and shared deck or lounge spaces for slower backwater moments.",
  "Well-suited for short stays, solo guests, or couples who do not need a larger multi-room boat.",
];

const planningPrompts = [
  "Best for 1-2 guests",
  "Couple friendly stay",
  "Ideal for overnight routes",
  "Comfortable room-focused stay",
  "Easy upgrade path to larger boats",
];

const galleryImages = [
  { src: "/images/single-bed-gallery/exterior-view.jpeg", alt: "Exterior" },
  { src: "/images/single-bed-gallery/bedroom-blue.jpeg", alt: "Bedroom Blue" },
  { src: "/images/single-bed-gallery/bedroom-green.jpeg", alt: "Bedroom Green" },
  { src: "/images/single-bed-gallery/open-deck-night.jpeg", alt: "Deck" },
  { src: "/images/single-bed-gallery/corridor.jpeg", alt: "Corridor" },
  { src: "/images/single-bed-gallery/lounge-view.jpeg", alt: "Lounge" },
  { src: "/images/single-bed-gallery/bedroom-gold.jpeg", alt: "Bedroom Gold" },
  { src: "/images/single-bed-gallery/bedroom-floral.jpeg", alt: "Bedroom Floral" },
  { src: "/images/single-bed-gallery/washroom.jpeg", alt: "Washroom" },
];

const faqs = [
  {
    question: "Who is this single bed houseboat best suited for?",
    answer: "This option works well for solo travellers, couples, and guests planning a shorter backwater stay who want private room comfort without booking a larger multi-room boat.",
  },
  {
    question: "Does the stay include private room facilities?",
    answer: "Yes. The single bed option includes a private air-conditioned bedroom and an attached washroom, along with access to the deck and shared lounging spaces on the boat.",
  },
  {
    question: "Can I check availability for specific dates in advance?",
    answer: "Yes. Share your preferred dates, number of guests, and any trip preferences through the contact form, and the team can confirm availability for this option.",
  },
  {
    question: "Is this a good choice for an overnight backwater experience?",
    answer: "Yes. It is especially suited for guests who want the calm feel of an overnight cruise in a more compact, intimate format with scenic movement and deck access.",
  },
];

export default function SingleBedHouseboatPage() {
  return (
    <main className="pb-24 sm:pb-32 bg-white font-sans antialiased">
      {/* HEADER SECTION */}
      <InnerPageHeader
        eyebrow="Houseboat Stay"
        title="Single Bed Houseboat"
        description="A quieter houseboat stay for solo guests or couples who want a more compact room, calm water views, and an easy backwater rhythm."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Houseboats", href: "/houseboats" },
          { label: "Single Bed Houseboat" },
        ]}
        sideLabel="Best For"
        sideValue="Short stays, peaceful getaways, couple-friendly plans, and guests who want a comfortable private room with scenic cruising."
        actions={
          <div className="flex gap-3">
            <Link
              href="/contact?experience=houseboat&option=single-bed"
              className="inline-flex items-center justify-center rounded-full bg-[#173247] px-6 py-3 text-sm font-semibold text-white transition hover:bg-sand hover:text-[#173247] shadow-lg"
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

      <section className="px-6 py-16 sm:py-24 max-w-7xl mx-auto">
        {/* --- VISUAL PREVIEW SECTION --- */}
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          <div className="lg:col-span-8">
            <div className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-teal/80 mb-4 block">
              Stay Preview
            </div>
            <h2 className="text-4xl font-semibold tracking-tight text-sand sm:text-5xl leading-[1.1] mb-6">
              A sanctuary of silence <br /> and scenic movement.
            </h2>
            <p className="text-lg text-foreground/60 leading-relaxed max-w-2xl mb-10">
              Experience the backwaters in their most intimate form.
              Scroll through our gallery to feel the rhythm of the rooms, the breeze of the deck, and the warmth of the lounge.
            </p>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-teal/20 to-navy/10 rounded-[2rem] blur-xl opacity-50" />
              <div className="relative bg-white rounded-[2rem] p-2 shadow-sm border border-navy/5">
                <ScrollableImageRow images={galleryImages} />
              </div>
            </div>
          </div>

          {/* Boutique Rating Badge */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative p-8 rounded-[2.5rem] bg-white border border-navy/5 shadow-[0_20px_50px_rgba(23,50,71,0.08)] text-center group">
              <div className="absolute -top-3 -right-3 h-12 w-12 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg">
                TOP
              </div>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-teal/80 mb-2">Guest Feel</div>
              <div className="text-6xl font-semibold tracking-tighter text-sand">8.4</div>
              <div className="mt-2 text-sm font-medium text-foreground/50 italic">
                &quot;Very Good&quot;
              </div>
              <div className="mt-6 pt-6 border-t border-navy/5 text-[0.7rem] text-foreground/40 uppercase tracking-widest">
                Verified Experience
              </div>
            </div>
          </div>
        </div>

        {/* Facilities Pill Cloud */}
        <div className="mt-16 flex flex-wrap gap-3 justify-center lg:justify-start">
          {favoriteFacilities.map((facility) => (
            <div
              key={facility}
              className="rounded-full border border-navy/10 bg-white px-5 py-2 text-xs font-medium text-foreground/70 shadow-sm hover:border-teal/40 transition-colors cursor-default"
            >
              {facility}
            </div>
          ))}
        </div>

        {/* --- BENTO GRID SECTION --- */}
        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {/* Why This Works - Large Card */}
          <section className="lg:col-span-2 rounded-[2.5rem] bg-white p-8 sm:p-12 shadow-[0_20px_60px_rgba(23,50,71,0.06)] border border-navy/5">
            <div className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-teal/80 mb-4 block">
              The Appeal
            </div>
            <h3 className="text-3xl font-semibold tracking-tight text-sand mb-8">
              Why guests love this format
            </h3>
            <div className="grid gap-6 sm:grid-cols-2">
              {reasonsToLove.map((reason, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-[#FBFBFC] border border-navy/5 hover:border-teal/30 transition-colors group">
                  <div className="h-6 w-6 rounded-full bg-[#173247] text-white text-center flex items-center justify-center text-xs font-bold shrink-0 group-hover:bg-teal-500 transition-colors">
                    {idx + 1}
                  </div>
                  <p className="text-sm leading-relaxed text-foreground/70">
                    {reason}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Good For - Vertical Card */}
          <section className="rounded-[2.5rem] bg-[#eef5f8] p-8 sm:p-12 shadow-sm border border-navy/5">
            <div className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-teal/80 mb-4 block">
              Ideal For
            </div>
            <h3 className="text-2xl font-semibold tracking-tight text-sand mb-8">
              Planning cues
            </h3>
            <div className="flex flex-col gap-3">
              {planningPrompts.map((prompt) => (
                <div
                  key={prompt}
                  className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/60 backdrop-blur-sm border border-white text-sm font-medium text-foreground/70"
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-[#173247]" />
                  {prompt}
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* --- OVERVIEW & INCLUSIONS --- */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Detailed Overview - Deep Navy Card */}
          <section className="relative overflow-hidden rounded-[2.5rem] bg-[#173247] p-8 sm:p-12 text-white shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl -mr-20 -mt-20" />
            <div className="relative z-10">
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-teal/80 mb-6 block">
                The Experience
              </span>
              <h3 className="text-3xl font-semibold tracking-tight mb-6">
                A compact, private stay on the backwaters.
              </h3>
              <p className="text-white/70 leading-relaxed mb-10 max-w-md">
                This option is shaped for guests who want the charm of a
                houseboat stay without needing a larger multi-room setup.
                You still get the scenic route, deck access, and a calm
                overnight feel in a more intimate format.
              </p>

              <div className="grid gap-4">
                {highlights.map((highlight, index) => (
                  <div key={highlight} className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-sm group hover:bg-white/20 transition-all">
                    <div className="h-8 w-8 rounded-full bg-white text-[#173247] flex items-center justify-center text-xs font-bold shrink-0 group-hover:scale-110 transition-transform">
                      {index + 1}
                    </div>
                    <span className="text-sm text-white/90 font-medium">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Included Facilities - Pearl Card */}
          <section className="rounded-[2.5rem] bg-white p-8 sm:p-12 border border-navy/5 shadow-[0_20px_60px_rgba(23,50,71,0.06)]">
            <div className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-teal/80 mb-4 block">
              The Essentials
            </div>
            <h3 className="text-2xl font-semibold tracking-tight text-sand mb-8">
              Everything for a calm, comfortable stay.
            </h3>

            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-[#FBFBFC] border border-navy/5 text-sm font-medium text-foreground/70 hover:border-teal/40 transition-colors"
                >
                  <div className="h-2 w-2 rounded-full bg-teal-500 shadow-[0_0_0_4px_rgba(20,184,166,0.1)]" />
                  {feature}
                </div>
              ))}
            </div>

            {/* Integrated Mini-CTA */}
            <div className="mt-12 p-8 rounded-[2rem] bg-[#eef5f8] border border-navy/5 relative overflow-hidden group">
              <div className="relative z-10">
                <h4 className="text-lg font-semibold text-sand mb-2">Ready to plan?</h4>
                <p className="text-sm text-foreground/60 mb-6">
                  Share your dates and group details, and we&apos;ll help you
                  confirm availability for this stay.
                </p>
                <Link
                  href="/contact?experience=houseboat&option=single-bed"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#173247] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-sand hover:text-[#173247] shadow-lg"
                >
                  <span className="uppercase tracking-wider">Book Your Stay</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* --- LUXE FAQ SECTION --- */}
      <section className="px-6 mt-12 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-teal/80 mb-3 block">
            Guest Inquiries
          </span>
          <h3 className="text-3xl font-semibold tracking-tight text-sand sm:text-4xl">
            Common Questions
          </h3>
          <p className="mt-4 text-foreground/60">
            Quick answers to help you settle into your backwater rhythm.
          </p>
        </div>

        <div className="grid gap-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-[2rem] border border-navy/5 bg-white transition-all duration-300 open:shadow-[0_20px_40px_rgba(23,50,71,0.06)]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between p-6 text-left transition-all group-hover:bg-[#fbfbfc]">
                <span className="text-base font-semibold text-[#173247] leading-tight">
                  {faq.question}
                </span>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eef5f8] text-[#173247] transition-all group-open:rotate-45 group-open:bg-[#173247] group-open:text-white">
                  <span className="text-xl font-light">+</span>
                </div>
              </summary>
              <div className="px-6 pb-6">
                <div className="h-px w-full bg-navy/5 mb-4" />
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
