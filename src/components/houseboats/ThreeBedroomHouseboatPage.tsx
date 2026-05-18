"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { threeBedroomFaqs as faqs } from "@/components/houseboats/houseboatFaqs";
import ScrollableImageRow from "@/components/services/ScrollableImageRow";
import { buildWhatsAppHref, buildInquiryMessage } from "@/lib/whatsapp";

const whatsappHref = buildWhatsAppHref(
  buildInquiryMessage({
    experience: "houseboat",
    option: "3-bedroom",
    message: "Please share availability, pricing, and route options for this stay.",
  }),
);

const highlights = [
  "Three private air-conditioned bedrooms",
  "Spacious lounge and dining layout for group stays",
  "Well-suited for overnight cruising with family or friends",
];

const features = [
  "Three private bedrooms",
  "Attached washroom access",
  "Large indoor lounge and common seating",
  "Backwater cruising experience",
];

const favoriteFacilities = [
  "3 private bedrooms",
  "Large group-friendly layout",
  "Indoor lounge space",
  "Washroom access",
  "Overnight-ready stay",
];

const reasonsToLove = [
  {
    title: "More Room Together",
    text: "A larger three bedroom format that gives families and small groups enough space to stay together more comfortably on the water.",
  },
  {
    title: "Easy Shared Flow",
    text: "Private bedrooms, a generous common lounge, and connected circulation make the stay feel comfortable for longer cruising hours.",
  },
  {
    title: "Stronger Group Fit",
    text: "A natural choice for extended families, friend groups, or guests who want a fuller private houseboat layout with more breathing room.",
  },
];

const planningPrompts = [
  "Best for families and small groups",
  "Comfortable for overnight backwater stays",
  "More privacy across multiple rooms",
  "Ideal for 5-9 guests",
  "A relaxed upgrade from compact boats",
];

const galleryImages = [
  {
    src: "/images/three-bedroom-gallery/WhatsApp_Image_2026-05-14_at_18_13_06.jpeg",
    alt: "3 bedroom houseboat exterior view on the backwaters",
  },
  {
    src: "/images/three-bedroom-gallery/WhatsApp_Image_2026-05-14_at_18_13_05__2_.jpeg",
    alt: "3 bedroom houseboat lounge with geometric feature wall",
  },
  {
    src: "/images/three-bedroom-gallery/WhatsApp_Image_2026-05-14_at_18_13_07__1_.jpeg",
    alt: "3 bedroom houseboat lounge from a side angle",
  },
  {
    src: "/images/three-bedroom-gallery/WhatsApp_Image_2026-05-14_at_18_13_07.jpeg",
    alt: "3 bedroom houseboat bedroom with illuminated golden headboard",
  },
  {
    src: "/images/three-bedroom-gallery/WhatsApp_Image_2026-05-14_at_18_13_08.jpeg",
    alt: "3 bedroom houseboat bedroom view with warm ceiling lighting",
  },
  {
    src: "/images/three-bedroom-gallery/WhatsApp_Image_2026-05-14_at_18_13_08__1_.jpeg",
    alt: "3 bedroom houseboat bedroom front view with red bedspread",
  },
  {
    src: "/images/three-bedroom-gallery/WhatsApp_Image_2026-05-14_at_18_13_07__2_.jpeg",
    alt: "3 bedroom houseboat bedroom with red bedspread and warm lighting",
  },
  {
    src: "/images/three-bedroom-gallery/WhatsApp_Image_2026-05-14_at_18_13_06__2_.jpeg",
    alt: "3 bedroom houseboat bedroom with floral accent wall",
  },
  {
    src: "/images/three-bedroom-gallery/WhatsApp_Image_2026-05-14_at_18_13_05.jpeg",
    alt: "3 bedroom houseboat vanity area with twin wash basins",
  },
  {
    src: "/images/three-bedroom-gallery/WhatsApp_Image_2026-05-14_at_18_13_06__1_.jpeg",
    alt: "3 bedroom houseboat vanity with mirror and textured wall tiles",
  },
  {
    src: "/images/three-bedroom-gallery/WhatsApp_Image_2026-05-14_at_18_13_09.jpeg",
    alt: "3 bedroom houseboat attached washroom with toilet",
  },
  {
    src: "/images/three-bedroom-gallery/WhatsApp_Image_2026-05-14_at_18_13_08__2_.jpeg",
    alt: "3 bedroom houseboat interior hallway with Mithram sign",
  },
  {
    src: "/images/three-bedroom-gallery/WhatsApp_Image_2026-05-14_at_18_13_05__1_.jpeg",
    alt: "3 bedroom houseboat side corridor with water-facing windows",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function ThreeBedroomHouseboatPage() {
  return (
    <main className="overflow-x-hidden bg-white pb-24 font-sans antialiased sm:pb-32">
      <section className="mx-auto max-w-7xl px-4 pb-12 pt-10 sm:px-6 sm:pb-24 sm:pt-24">
        <div className="grid items-start gap-8 sm:gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="min-w-0 lg:col-span-8"
          >
            <div className="mb-3 inline-block text-[0.65rem] font-bold uppercase tracking-[0.24em] text-teal-600/80 sm:mb-4 sm:text-[0.7rem] sm:tracking-[0.3em]">
              Family Houseboat Collection
            </div>
            <h1 className="mb-4 text-[clamp(2.15rem,10vw,4.5rem)] font-semibold leading-[1.02] tracking-tight text-sand sm:mb-6">
              More space to gather,
              <span className="hidden sm:inline"> <br /></span>{" "}
              <span className="font-serif italic text-navy/40">stay slowly</span>, and cruise well.
            </h1>
            <p className="mb-7 max-w-2xl text-sm leading-7 text-foreground/60 sm:mb-10 sm:text-lg sm:leading-relaxed">
              Step into a more generous houseboat format with three bedrooms,
              warmer shared spaces, and a smoother overnight rhythm for
              families or close-knit groups on the backwaters.
            </p>

            <div className="group relative">
              <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-tr from-teal-100/40 to-navy-100/20 blur-2xl opacity-60" />
              <div className="relative rounded-[2rem] border border-navy/10 bg-white/50 p-3 shadow-2xl backdrop-blur-sm sm:rounded-[2.5rem]">
                <ScrollableImageRow images={galleryImages} showFeaturedSpace={false} />
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 sm:mt-10 lg:justify-start">
              <Link
                href={whatsappHref}
                className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-[#173247] px-6 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:shadow-2xl hover:shadow-navy-500/30 active:scale-95 sm:w-auto sm:px-8"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <span className="relative z-10 rounded-full bg-white/10 px-2 py-0.5 text-[0.6rem] tracking-widest text-white/80 backdrop-blur-md">
                  STAY
                </span>
                <span className="relative z-10">Book Now</span>
                <span className="relative z-10 text-lg transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="min-w-0 lg:col-span-4"
          >
            <div className="group relative w-full rounded-[1.75rem] border border-navy/5 bg-white p-5 text-center shadow-[0_30px_60px_-15px_rgba(23,50,71,0.1)] transition-all duration-500 hover:-translate-y-2 sm:rounded-[2.5rem] sm:p-8">
              <div className="mb-2 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-teal/70 sm:mb-3 sm:text-xs sm:tracking-[0.2em]">
                Guest Experience
              </div>
              <div className="text-5xl font-bold tracking-tighter text-sand sm:text-7xl">9.0</div>
              <div className="mt-2 text-xs font-medium italic text-foreground/40 sm:text-sm">
                &quot;Excellent Group Stay&quot;
              </div>
              <div className="mt-6 border-t border-navy/5 pt-5 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-foreground/40 sm:mt-8 sm:pt-6 sm:text-[0.65rem] sm:tracking-widest">
                Verified Spacious Experience
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mt-10 flex flex-wrap justify-center gap-2.5 sm:mt-16 sm:gap-3 lg:justify-start"
        >
          {favoriteFacilities.map((facility) => (
            <div
              key={facility}
              className="cursor-default rounded-full border border-navy/10 bg-white/80 px-4 py-2 text-[0.7rem] font-medium text-foreground/60 shadow-sm backdrop-blur-sm transition-all hover:border-teal-400 hover:text-teal-700 sm:px-5 sm:text-xs"
            >
              {facility}
            </div>
          ))}
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-20">
        <div className="grid gap-6 lg:grid-cols-3">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="min-w-0 rounded-[1.75rem] border border-navy/5 bg-white p-5 shadow-sm sm:rounded-[3rem] sm:p-12 lg:col-span-2"
          >
            <div className="mb-4 block text-[0.68rem] font-bold uppercase tracking-[0.25em] text-teal-600/80">
              The Appeal
            </div>
            <h3 className="mb-6 text-2xl font-semibold tracking-tight text-sand sm:mb-10 sm:text-4xl">
              Why guests choose this format
            </h3>
            <div className="grid gap-6 sm:grid-cols-2">
              {reasonsToLove.map((reason, idx) => (
                <div
                  key={idx}
                  className="group flex flex-col gap-4 rounded-[1.5rem] border border-navy/5 bg-[#FBFBFC] p-4 transition-all hover:border-teal-200 hover:bg-white hover:shadow-lg sm:flex-row sm:gap-5 sm:rounded-3xl sm:p-6"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy-900 text-center text-xs font-bold text-white transition-colors group-hover:bg-teal-500">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="mb-1 text-sm font-bold text-sand">{reason.title}</h4>
                    <p className="text-sm leading-relaxed text-foreground/60">{reason.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="min-w-0 rounded-[1.75rem] border border-navy/5 bg-gradient-to-b from-[#eef5f8] to-white p-5 shadow-sm sm:rounded-[3rem] sm:p-12"
          >
            <div className="mb-4 block text-[0.68rem] font-bold uppercase tracking-[0.25em] text-teal-600/80">
              Ideal For
            </div>
            <h3 className="mb-6 text-2xl font-semibold tracking-tight text-sand sm:mb-8">
              Planning cues
            </h3>
            <div className="flex flex-col gap-4">
              {planningPrompts.map((prompt) => (
                <div
                  key={prompt}
                  className="flex items-center gap-3 rounded-2xl border border-white bg-white/70 px-4 py-3.5 text-sm font-medium leading-6 text-foreground/70 backdrop-blur-md transition-all hover:translate-x-2 hover:shadow-md sm:gap-4 sm:px-5 sm:py-4"
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-teal-500" />
                  {prompt}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="group relative min-w-0 overflow-hidden rounded-[1.75rem] bg-[#173247] p-5 text-white shadow-2xl sm:rounded-[3rem] sm:p-16"
          >
            <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-teal-500/20 blur-3xl transition-all group-hover:bg-teal-500/30" />
            <div className="relative z-10">
              <span className="mb-6 block text-[0.68rem] font-bold uppercase tracking-[0.25em] text-teal-400/80">
                The Experience
              </span>
              <h3 className="mb-5 text-2xl font-semibold tracking-tight sm:mb-6 sm:text-4xl">
                A fuller private houseboat stay
                <span className="hidden sm:inline"> <br /></span>{" "}
                <span className="text-teal-300">for longer, easier moments.</span>
              </h3>
              <p className="mb-7 max-w-md text-sm leading-7 text-white/70 sm:mb-12 sm:text-lg sm:leading-relaxed">
                This option is shaped for guests who want more shared room, extra bedrooms, and a smoother overnight group experience.
              </p>
              <div className="grid gap-4">
                {highlights.map((highlight, index) => (
                  <div
                    key={highlight}
                    className="group/item flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md transition-all hover:border-white/20 hover:bg-white/15 sm:items-center sm:gap-4 sm:p-5"
                  >
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-xs font-bold text-[#173247] transition-transform group-hover/item:scale-110">
                      {index + 1}
                    </div>
                    <span className="text-sm font-medium leading-6 text-white/90">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="min-w-0 rounded-[1.75rem] border border-navy/5 bg-white p-5 shadow-sm sm:rounded-[3rem] sm:p-16"
          >
            <div className="mb-4 block text-[0.68rem] font-bold uppercase tracking-[0.25em] text-teal-600/80">
              The Essentials
            </div>
            <h3 className="mb-6 text-2xl font-semibold tracking-tight text-sand sm:mb-10 sm:text-3xl">
              Everything for a more spacious shared stay.
            </h3>
            <div className="grid gap-5 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-4 rounded-2xl border border-navy/5 bg-[#FBFBFC] p-4 text-sm font-medium leading-6 text-foreground/70 transition-all hover:border-teal-300 hover:bg-white hover:shadow-md sm:items-center sm:p-6"
                >
                  <div className="h-2 w-2 rounded-full bg-teal-500 shadow-[0_0_0_4px_rgba(20,184,166,0.15)]" />
                  {feature}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto mt-14 max-w-4xl px-4 sm:mt-24 sm:px-6">
        <div className="mb-10 text-center sm:mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mb-3 block text-[0.68rem] font-bold uppercase tracking-[0.25em] text-teal-600/80"
          >
            Guest Inquiries
          </motion.span>
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[1.9rem] font-semibold tracking-tight text-sand sm:text-5xl"
          >
            Common Questions
          </motion.h3>
          <p className="mt-4 text-sm leading-7 text-foreground/50 sm:text-lg sm:leading-relaxed">
            Quick answers to help your group plan the stay.
          </p>
        </div>

        <div className="grid gap-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-[1.6rem] border border-navy/5 bg-white transition-all duration-300 open:shadow-xl open:shadow-navy-500/5 sm:rounded-[2rem]"
            >
              <summary className="flex list-none cursor-pointer items-start justify-between gap-4 p-5 text-left transition-all group-hover:bg-[#fbfbfc] sm:items-center sm:p-6">
                <span className="pr-2 text-base font-semibold leading-7 text-[#173247] sm:text-lg sm:leading-tight">
                  {faq.question}
                </span>
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy-50 text-[#173247] transition-all group-open:rotate-45 group-open:bg-[#173247] group-open:text-white sm:mt-0">
                  <span className="text-xl font-light">+</span>
                </div>
              </summary>
              <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                <div className="mb-4 h-px w-full bg-navy/5" />
                <p className="text-sm leading-relaxed text-foreground/70 sm:text-lg">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
