"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ScrollableImageRow from "@/components/services/ScrollableImageRow";
import FaqSection from "@/components/seo/FaqSection";
import InternalLinksSection from "@/components/seo/InternalLinksSection";
import PageBreadcrumbs from "@/components/seo/PageBreadcrumbs";
import ExperienceComparisonSection from "@/components/seo/ExperienceComparisonSection";
import { getInternalLinkGraph, getServiceFaqs } from "@/lib/seo-content";

const whatsappHref = "https://wa.me/917994073491";

const highlights = [
  "Traditional canopy-covered ride for 2-6 guests",
  "Ideal for sunset drifts, village canal routes, and softer-paced sightseeing",
  "A more intimate way to move through backwaters than larger boats",
];

const features = [
  "Cushioned seating",
  "Traditional rain canopy cover",
  "Flexible ride timings",
  "Quiet village canal access",
];

const favoriteFacilities = [
  "Sunset-friendly route",
  "Private small-group ride",
  "Village canal access",
  "Canopied comfort",
  "Gentle scenic pace",
];

const reasonsToLove = [
  {
    title: "Closer to the water",
    text: "A shikkara moves more quietly and more closely through Kerala's smaller canals, so the ride feels personal rather than tour-like.",
  },
  {
    title: "Beautifully paced",
    text: "It suits guests who want a slower, more cinematic rhythm with time for conversations, photos, and unhurried views.",
  },
  {
    title: "Easy for couples and families",
    text: "The format works especially well for small groups who want comfort, shade, and a shorter curated experience on the water.",
  },
];

const planningPrompts = [
  "Best for couples and small families",
  "Great for 1-3 hour rides",
  "Ideal for softer sightseeing",
  "Excellent at sunrise or sunset",
  "Perfect for narrow canal routes",
];

const galleryImages = [
  {
    src: "/images/shikkara-gallery/shikkara-exterior-day.webp",
    alt: "Shikkara exterior view by the canal in daylight",
  },
  {
    src: "/images/shikkara-gallery/shikkara-sunset-angle.webp",
    alt: "Shikkara boat from the front during sunset",
  },
  {
    src: "/images/shikkara-gallery/shikkara-seating-view.webp",
    alt: "Interior seating view with cushioned chairs inside the shikkara",
  },
  {
    src: "/images/shikkara-gallery/shikkara-canopy-interior.webp",
    alt: "Wide interior view showing the woven canopy and lounge seating",
  },
  {
    src: "/images/shikkara-gallery/shikkara-rear-lounge.webp",
    alt: "Rear lounge seating and helm area inside the shikkara",
  },
] as const;

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function ShikkaraExperiencePage() {
  const faqs = getServiceFaqs("shikkara");
  const internalLinkGraph = getInternalLinkGraph("/shikkara");

  return (
    <main className="overflow-x-hidden bg-white pb-24 font-sans antialiased sm:pb-32">
      <section className="mx-auto max-w-7xl px-4 pb-14 pt-24 sm:px-6 sm:pb-24 sm:pt-32 lg:pt-44">
        <div className="grid items-start gap-8 sm:gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="min-w-0 lg:col-span-8"
          >
            <PageBreadcrumbs
              crumbs={[
                { label: "Home", href: "/" },
                { label: "Shikara Rides" },
              ]}
            />
            <div className="mb-4 inline-block text-[0.65rem] font-bold uppercase tracking-[0.24em] text-teal-600/80 sm:text-[0.7rem] sm:tracking-[0.3em]">
              Heritage Ride Collection
            </div>
            <h1 className="mb-4 text-[clamp(2.15rem,10vw,4.5rem)] font-semibold leading-[1.02] tracking-tight text-sand sm:mb-6">
              Private Shikara Rides in Alleppey
              <span className="hidden sm:inline"> <br /></span>{" "}
              <span className="font-serif italic text-navy/40">with softer views and local rhythm.</span>
            </h1>
            <p className="mb-7 max-w-2xl text-sm leading-7 text-foreground/60 sm:mb-10 sm:text-lg sm:leading-relaxed">
              Explore the backwaters in the more intimate language of a
              traditional shikkara. Scroll through the gallery to see the boat,
              the canopy, and the calm seating layout before you book.
            </p>

            <div className="group relative">
              <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-tr from-teal-100/40 to-navy-100/20 blur-2xl opacity-60" />
              <div className="relative rounded-[2rem] border border-navy/10 bg-white/50 p-3 shadow-2xl backdrop-blur-sm sm:rounded-[2.5rem]">
                <ScrollableImageRow
                  images={galleryImages.map((image) => ({ ...image }))}
                  showFeaturedSpace={false}
                />
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 sm:mt-10 lg:justify-start">
              <Link
                href={whatsappHref}
                className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-[#173247] px-5 py-4 text-[0.78rem] font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:shadow-2xl active:scale-95 sm:w-auto sm:px-8 sm:text-sm sm:tracking-[0.18em]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <span className="relative z-10 rounded-full bg-white/10 px-2 py-0.5 text-[0.6rem] tracking-widest text-white/80 backdrop-blur-md">
                  RIDE
                </span>
                <span className="relative z-10">Book Now</span>
                <span className="relative z-10 text-lg transition-transform group-hover:translate-x-1">
                  →
                </span>
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
                Best Fit
              </div>
              <div className="text-3xl font-bold tracking-tight text-sand sm:text-5xl">
                1 to 3 hours
              </div>
              <div className="mt-3 text-sm leading-7 text-foreground/50 sm:text-base">
                Best for couples, small families, and guests who want calm canal
                views without committing to an overnight cruise.
              </div>
              <div className="mt-6 border-t border-navy/5 pt-5 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-foreground/40 sm:mt-8 sm:pt-6 sm:text-[0.65rem] sm:tracking-widest">
                Private Scenic Ride
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mt-12 flex flex-wrap justify-center gap-3 sm:mt-16 lg:justify-start"
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
            className="min-w-0 rounded-[2rem] border border-navy/5 bg-white p-6 shadow-sm sm:rounded-[3rem] sm:p-12 lg:col-span-2"
          >
            <div className="mb-4 block text-[0.68rem] font-bold uppercase tracking-[0.25em] text-teal-600/80">
              The Appeal
            </div>
            <h3 className="mb-8 text-2xl font-semibold tracking-tight text-sand sm:mb-10 sm:text-4xl">
              Why guests love this format
            </h3>
            <div className="grid gap-6 sm:grid-cols-2">
              {reasonsToLove.map((reason, idx) => (
                <div
                  key={reason.title}
                  className="group flex flex-col gap-4 rounded-3xl border border-navy/5 bg-[#FBFBFC] p-5 transition-all hover:border-teal-200 hover:bg-white hover:shadow-lg sm:flex-row sm:gap-5 sm:p-6"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy text-center text-xs font-bold text-white transition-colors group-hover:bg-teal-500">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="mb-1 text-sm font-bold text-sand">{reason.title}</h4>
                    <p className="text-sm leading-relaxed text-foreground/60">
                      {reason.text}
                    </p>
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
            className="min-w-0 rounded-[2rem] border border-navy/5 bg-gradient-to-b from-[#eef5f8] to-white p-6 shadow-sm sm:rounded-[3rem] sm:p-12"
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
                  className="flex items-center gap-3 rounded-2xl border border-white bg-white/70 px-4 py-4 text-sm font-medium text-foreground/70 backdrop-blur-md transition-all hover:translate-x-2 hover:shadow-md sm:gap-4 sm:px-5"
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
            className="group relative min-w-0 overflow-hidden rounded-[2rem] bg-[#173247] p-6 text-white shadow-2xl sm:rounded-[3rem] sm:p-16"
          >
            <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-teal-500/20 blur-3xl transition-all group-hover:bg-teal-500/30" />
            <div className="relative z-10">
              <span className="mb-6 block text-[0.68rem] font-bold uppercase tracking-[0.25em] text-teal-400/80">
                The Experience
              </span>
              <h3 className="mb-6 text-2xl font-semibold tracking-tight sm:text-4xl">
                A classic backwater ride
                <span className="hidden sm:inline"> <br /></span>{" "}
                <span className="text-teal-300">with intimacy and calm.</span>
              </h3>
              <p className="mb-8 max-w-md text-base leading-relaxed text-white/70 sm:mb-12 sm:text-lg">
                Shikkara rides are shaped for guests who want Kerala&apos;s scenic
                canals to feel closer, quieter, and more personal than a
                larger-boat cruise.
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
                    <span className="text-sm leading-6 text-white/90">
                      {highlight}
                    </span>
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
            className="min-w-0 rounded-[2rem] border border-navy/5 bg-white p-6 shadow-sm sm:rounded-[3rem] sm:p-16"
          >
            <div className="mb-4 block text-[0.68rem] font-bold uppercase tracking-[0.25em] text-teal-600/80">
              The Essentials
            </div>
            <h3 className="mb-8 text-2xl font-semibold tracking-tight text-sand sm:mb-10 sm:text-3xl">
              Everything for an easy, scenic ride.
            </h3>

            <div className="grid gap-5 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-4 rounded-2xl border border-navy/5 bg-[#FBFBFC] p-5 text-sm font-medium text-foreground/70 transition-all hover:border-teal-300 hover:bg-white hover:shadow-md sm:p-6"
                >
                  <div className="h-2 w-2 rounded-full bg-teal-500 shadow-[0_0_0_4px_rgba(20,184,166,0.15)]" />
                  {feature}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <ExperienceComparisonSection />
      <FaqSection
        title="FAQs about private Shikara rides in Alleppey"
        intro="Quick answers before you choose your backwater timing."
        faqs={faqs}
      />
      {internalLinkGraph ? <InternalLinksSection graph={internalLinkGraph} /> : null}
    </main>
  );
}
