"use client";

import { motion } from "framer-motion";
import GalleryPreviewHero from "@/components/shared/GalleryPreviewHero";
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
  "Great for 1-8 hour rides",
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
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <GalleryPreviewHero
            galleryImages={galleryImages.map((image) => ({ ...image }))}
            breadcrumbs={
              <PageBreadcrumbs
                crumbs={[
                  { label: "Home", href: "/" },
                  { label: "Shikkara Rides" },
                ]}
              />
            }
            eyebrow="Heritage Ride Collection"
            title={
              <>
                Private Shikkara Rides in Alleppey
                <span className="mt-2 block text-sand/70">with softer views and local rhythm.</span>
              </>
            }
            description={
              <p>
                Explore the backwaters in the more intimate language of a traditional shikkara.
                Scroll through the gallery to see the boat, the canopy, and the calm seating
                layout before you book.
              </p>
            }
            actions={[{ href: whatsappHref, label: "Book Now" }]}
            aside={
              <div className="group relative w-full rounded-[2rem] border border-navy/8 bg-white/92 p-6 text-center shadow-[0_18px_40px_rgba(47,79,104,0.08)] backdrop-blur-sm sm:p-8">
                <div className="mb-2 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-teal/70 sm:mb-3 sm:text-xs sm:tracking-[0.2em]">
                  Best fit
                </div>
                <div className="text-3xl font-bold tracking-tight text-sand sm:text-5xl">
                  1 to 8 hours
                </div>
                <div className="mt-3 text-sm leading-7 text-foreground/50 sm:text-base">
                  Best for couples, small families, and guests who want calm canal views without
                  committing to an overnight cruise.
                </div>
                <div className="mt-6 border-t border-navy/5 pt-5 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-foreground/40 sm:mt-8 sm:pt-6 sm:text-[0.65rem] sm:tracking-widest">
                  Private Scenic Ride
                </div>
              </div>
            }
            bottomTags={
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="flex flex-wrap justify-center gap-3 lg:justify-start"
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
        title="FAQs about private Shikkara rides in Alleppey"
        intro="Quick answers before you choose your backwater timing."
        faqs={faqs}
      />
      {internalLinkGraph ? <InternalLinksSection graph={internalLinkGraph} /> : null}
    </main>
  );
}
