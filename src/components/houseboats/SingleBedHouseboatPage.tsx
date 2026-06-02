"use client";

import { motion } from "framer-motion";
import { singleBedFaqs as faqs } from "@/components/houseboats/houseboatFaqs";
import GalleryPreviewHero from "@/components/shared/GalleryPreviewHero";
import { buildInquiryMessage, buildWhatsAppHref } from "@/lib/whatsapp";

const whatsappHref = buildWhatsAppHref(
  buildInquiryMessage({
    experience: "houseboat",
    option: "single-bed",
    message: "Please share availability, pricing, and route options for this stay.",
  }),
);

const highlights = [
  "Private air-conditioned bedroom for one or two guests",
  "Compact lounge flow with easy upper-deck access",
  "A quieter overnight rhythm on the Alleppey backwaters",
];

const features = [
  "Private air-conditioned bedroom",
  "Attached washroom",
  "Shared lounge and upper-deck access",
  "Well-suited to one or two guests",
];

const favoriteFacilities = [
  "1 private bedroom",
  "Couple-friendly stay",
  "Attached washroom",
  "Upper deck access",
  "Overnight-ready format",
];

const reasonsToLove = [
  {
    title: "A More Intimate Scale",
    text: "This single-bedroom layout keeps the houseboat experience personal, private, and easier to settle into for couples or solo guests.",
  },
  {
    title: "Quieter Overnight Flow",
    text: "The smaller format often feels calmer through the evening, with less movement and a softer rhythm once the cruising day slows down.",
  },
  {
    title: "Simple Comfort",
    text: "You still get the essentials of a private backwater stay without moving into a larger family or multi-room layout.",
  },
];

const planningPrompts = [
  "Best for couples and solo travellers",
  "Comfortable for overnight stays",
  "Private format with a lighter footprint",
  "Ideal for 1-2 guests",
  "A calmer alternative to larger boats",
];

const galleryImages = [
  {
    src: "/images/single-bed-gallery/exterior-view.jpeg",
    alt: "Single bedroom houseboat exterior in Alleppey backwaters",
  },
  {
    src: "/images/single-bed-gallery-v2/WhatsApp_Image_2026-05-04_at_19_44_29__1_.jpeg",
    alt: "Private lounge on a single bedroom houseboat in Alappuzha",
  },
  {
    src: "/images/single-bed-gallery-v2/WhatsApp_Image_2026-05-04_at_19_44_28__1_.jpeg",
    alt: "Bedroom inside a single bedroom houseboat in Alleppey",
  },
  {
    src: "/images/single-bed-gallery-v2/WhatsApp_Image_2026-05-04_at_19_44_29__2_.jpeg",
    alt: "Single bed houseboat deck seating in Alleppey backwaters",
  },
  {
    src: "/images/single-bed-gallery-v2/WhatsApp_Image_2026-05-04_at_19_44_30.jpeg",
    alt: "Single bed houseboat interior stay detail in Alappuzha",
  },
  {
    src: "/images/single-bed-gallery-v2/WhatsApp_Image_2026-05-04_at_19_44_30__1_.jpeg",
    alt: "Single bedroom houseboat room detail in Alleppey",
  },
  {
    src: "/images/single-bed-gallery-v2/WhatsApp_Image_2026-05-04_at_19_44_28.jpeg",
    alt: "Compact single bedroom houseboat lounge in Alappuzha",
  },
  {
    src: "/images/single-bed-gallery-v2/WhatsApp_Image_2026-05-04_at_19_44_30__2_.jpeg",
    alt: "Single bedroom houseboat overnight setting in Alleppey",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function SingleBedHouseboatPage() {
  return (
    <main className="overflow-x-hidden bg-white pb-24 font-sans antialiased sm:pb-32">
      <section className="mx-auto max-w-7xl px-4 pb-12 pt-10 sm:px-6 sm:pb-24 sm:pt-24">
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <GalleryPreviewHero
            galleryImages={galleryImages}
            eyebrow="Couples Houseboat Collection"
            title={
              <>
                A private backwater stay,
                <span className="mt-2 block text-sand/70">designed for slower, quieter moments.</span>
              </>
            }
            description={
              <p>
                Designed for one or two guests, this compact houseboat format keeps the experience
                close, calm, and personal with an easier overnight rhythm on the Alleppey
                backwaters.
              </p>
            }
            actions={[
              { href: whatsappHref, label: "Ask availability" },
              { href: "/houseboats", label: "View all houseboats", variant: "secondary" },
            ]}
            aside={
              <div className="group relative w-full rounded-[2rem] border border-navy/8 bg-white/92 p-6 text-center shadow-[0_18px_40px_rgba(47,79,104,0.08)] backdrop-blur-sm sm:p-8">
                <div className="mb-2 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-teal/70 sm:mb-3 sm:text-xs sm:tracking-[0.2em]">
                  Best for
                </div>
                <div className="text-3xl font-bold tracking-tight text-sand sm:text-5xl">
                  Couples and solo stays
                </div>
                <div className="mt-2 text-sm leading-7 text-foreground/50 sm:text-base">
                  A quieter private houseboat format with a more intimate scale and an easy
                  overnight feel.
                </div>
                <div className="mt-6 border-t border-navy/5 pt-5 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-foreground/40 sm:mt-8 sm:pt-6 sm:text-[0.65rem] sm:tracking-widest">
                  Compact Private Stay
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
                A calmer private houseboat stay
                <span className="hidden sm:inline"> <br /></span>{" "}
                <span className="text-teal-300">for easier, slower evenings.</span>
              </h3>
              <p className="mb-7 max-w-md text-sm leading-7 text-white/70 sm:mb-12 sm:text-lg sm:leading-relaxed">
                The appeal of this boat is not excess. It is simplicity done well, with your own
                room, your own pace, and enough deck space to enjoy the changing light without the
                stay ever feeling too large or too busy.
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
              Everything for a comfortable private stay.
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
            Quick answers for guests comparing this compact houseboat with larger layouts.
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
                <p className="text-sm leading-relaxed text-foreground/70 sm:text-lg">
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
