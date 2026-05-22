"use client";

import { motion } from "framer-motion";
import { twoBedroomFaqs as faqs } from "@/components/houseboats/houseboatFaqs";
import GalleryPreviewHero from "@/components/shared/GalleryPreviewHero";
import { buildWhatsAppHref, buildInquiryMessage } from "@/lib/whatsapp";

const whatsappHref = buildWhatsAppHref(
  buildInquiryMessage({
    experience: "houseboat",
    option: "2-bedroom",
    message: "Please share availability, pricing, and route options for this stay.",
  }),
);

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
  {
    title: "Spacious Living",
    text: "A more spacious houseboat format that gives families and small groups room to settle in comfortably.",
  },
  {
    title: "Balanced Privacy",
    text: "Separate bedrooms, indoor lounge space, and open deck access create an easy rhythm between privacy and togetherness.",
  },
  {
    title: "The Full Experience",
    text: "Well-suited for overnight backwater routes when you want a fuller houseboat experience without feeling crowded.",
  },
];

const planningPrompts = [
  "Best for families and small groups",
  "Comfortable for overnight stays",
  "Extra room for shared time",
  "Great for 3-6 guests",
  "Relaxed upgrade from compact stays",
];

const galleryImages = [
  {
    src: "/images/two-bedroom-gallery-v2/WhatsApp_Image_2026-05-04_at_19_44_01.jpeg",
    alt: "2 bedroom houseboat exterior view on the backwaters",
  },
  {
    src: "/images/two-bedroom-gallery-v2/WhatsApp_Image_2026-05-04_at_19_44_01__1_.jpeg",
    alt: "2 bedroom houseboat bedroom with blue bedspread",
  },
  {
    src: "/images/two-bedroom-gallery-v2/WhatsApp_Image_2026-05-04_at_19_44_01__2_.jpeg",
    alt: "2 bedroom houseboat bedroom with green bedspread",
  },
  {
    src: "/images/two-bedroom-gallery-v2/WhatsApp_Image_2026-05-04_at_19_44_02__1_.jpeg",
    alt: "2 bedroom houseboat staircase to the upper deck",
  },
  {
    src: "/images/two-bedroom-gallery-v2/WhatsApp_Image_2026-05-04_at_19_44_02__2_.jpeg",
    alt: "2 bedroom houseboat upper deck seating area at night",
  },
  {
    src: "/images/two-bedroom-gallery-v2/WhatsApp_Image_2026-05-04_at_19_44_02.jpeg",
    alt: "2 bedroom houseboat interior corridor",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function TwoBedroomHouseboatPage() {
  return (
    <main className="overflow-x-hidden bg-white pb-24 font-sans antialiased sm:pb-32">
      {/* HERO SECTION */}
      <section className="mx-auto max-w-7xl px-4 pb-12 pt-10 sm:px-6 sm:pb-24 sm:pt-24">
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <GalleryPreviewHero
            galleryImages={galleryImages}
            eyebrow="Family Houseboat Collection"
            title={
              <>
                More room to gather,
                <span className="mt-2 block text-sand/70">unwind, and cruise slowly.</span>
              </>
            }
            description={
              <p>
                Step into a fuller houseboat experience with broader shared spaces, separate
                bedrooms, and an easy pace for families or small groups.
              </p>
            }
            actions={[{ href: whatsappHref, label: "Book Now" }]}
            aside={
              <div className="group relative w-full rounded-[2rem] border border-navy/8 bg-white/92 p-6 text-center shadow-[0_18px_40px_rgba(47,79,104,0.08)] backdrop-blur-sm sm:p-8">
                <div className="mb-2 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-teal/70 sm:mb-3 sm:text-xs sm:tracking-[0.2em]">
                  Best for
                </div>
                <div className="text-3xl font-bold tracking-tight text-sand sm:text-5xl">
                  Families and small groups
                </div>
                <div className="mt-2 text-sm leading-7 text-foreground/50 sm:text-base">
                  More shared lounge space and separate bedrooms for a comfortable private
                  backwater stay.
                </div>
                <div className="mt-6 border-t border-navy/5 pt-5 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-foreground/40 sm:mt-8 sm:pt-6 sm:text-[0.65rem] sm:tracking-widest">
                  Spacious Family Layout
                </div>
              </div>
            }
            bottomTags={
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="flex flex-wrap justify-center gap-2.5 sm:gap-3 lg:justify-start"
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
            }
          />
        </motion.div>
      </section>

      {/* BENTO SECTION */}
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
                    <h4 className="mb-1 font-bold text-sand text-sm">{reason.title}</h4>
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

      {/* EXPERIENCE & ESSENTIALS SECTION */}
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
                A spacious houseboat stay for
                <span className="hidden sm:inline"> <br /></span>{" "}
                <span className="text-teal-300">longer, slower moments.</span>
              </h3>
              <p className="mb-7 max-w-md text-sm leading-7 text-white/70 sm:mb-12 sm:text-lg sm:leading-relaxed">
                This option is shaped for guests who want more room to spread out without losing the charm of backwater cruising.
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
              Everything for a shared, comfortable stay.
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

      {/* FAQ SECTION */}
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
            Quick answers to help you plan your journey.
          </p>
        </div>

        <div className="grid gap-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-[1.6rem] border border-navy/5 bg-white transition-all duration-300 open:shadow-xl open:shadow-navy-500/5 sm:rounded-[2rem]"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 p-5 text-left transition-all group-hover:bg-[#fbfbfc] sm:items-center sm:p-6">
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
