"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ServiceHero from "./ServiceHero";
import HighlightsGrid from "./HighlightsGrid";
import ServiceGallery from "./ServiceGallery";
import PricingCard from "./PricingCard";
import type { ServicePage } from "@/lib/services-data";

export default function ServicePageTemplate({
  service,
}: {
  service: ServicePage;
}) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <main className="pb-24 sm:pb-32 bg-white font-sans antialiased">
      <ServiceHero
        title={service.title}
        subtitle={service.subtitle}
        eyebrow={service.eyebrow}
        heroImage={service.heroImage}
      />

      {/* Overview Section - UNCHANGED */}
      <section className="px-6 py-24 sm:py-40 max-w-6xl mx-auto">
        <div className="grid gap-16 lg:grid-cols-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <span className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-teal/80 mb-4 block">
              Overview
            </span>
            <h2 className="text-4xl font-semibold tracking-tight text-sand sm:text-6xl leading-[0.98]">
              {service.subtitle}
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="grid gap-6 text-lg leading-relaxed text-foreground/72 font-normal">
              {service.description.map((p, idx) => (
                <p key={idx} className={`${idx === 0 ? "text-xl text-foreground/90 leading-relaxed font-medium" : ""}`}>
                  {p}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* OVERLAY LUXE CARDS SECTION */}
      {service.options && service.options.length > 0 && (
        <section className="px-6 py-24 bg-[#eef5f8]">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-teal/80 mb-3 block">
                  Curated Selection
                </span>
                <h2 className="text-3xl font-semibold tracking-tight text-sand sm:text-5xl">
                  Choose your sanctuary
                </h2>
                <div className="mt-4 w-12 h-1 bg-[#173247] mx-auto rounded-full" />
              </motion.div>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid gap-10 lg:grid-cols-2"
            >
              {service.options.map((option) => (
                <motion.div
                  key={option.title}
                  variants={itemVariants}
                  className="group relative aspect-[4/5] sm:aspect-auto lg:h-[600px] rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:-translate-y-2 shadow-xl"
                >
                  {/* Background Image - Full Bleed */}
                  <Image
                    src={option.image}
                    alt={option.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />

                  {/* Gradient Overlay - Essential for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#173247] via-[#173247]/40 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-500" />

                  {/* Content Container - Positioned at the bottom */}
                  <div className="absolute inset-x-0 bottom-0 p-8 sm:p-12 flex flex-col justify-end h-full">

                    {/* Title */}
                    <h3 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                      {option.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-4 text-white/80 leading-relaxed font-normal mb-8 max-w-md text-sm sm:text-base">
                      {option.description}
                    </p>

                    {/* Tags / Details - Styled as the "4.5 Star / 3 Night Stay" pills */}
                    <div className="flex flex-wrap gap-3 mb-8">
                      {option.details.slice(0, 2).map((detail) => (
                        <div key={detail} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-medium">
                          <div className="h-1 w-1 rounded-full bg-teal-300" />
                          {detail}
                        </div>
                      ))}
                    </div>

                    {/* Full-width Button - The "Reserve Now" style */}
                    {option.href && (
                      <Link
                        href={option.href}
                        className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white text-[#173247] text-sm font-bold transition-all duration-300 hover:bg-sand hover:text-white shadow-2xl group/btn"
                      >
                        <span className="uppercase tracking-wider">{option.ctaLabel ?? "Reserve now"}</span>
                        <span className="text-lg transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                      </Link>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Other sections - UNCHANGED */}
      {service.slug !== "houseboats" && (
        <div className="space-y-24 py-24 px-4 sm:px-6 max-w-7xl mx-auto">
          <HighlightsGrid highlights={service.highlights} />
          <ServiceGallery images={service.gallery} title={service.title} />
          <PricingCard
            priceLabel={service.priceLabel}
            priceNote={service.priceNote}
            facilities={service.facilities}
            ctaText={service.ctaText}
            ctaHref={service.ctaHref}
          />
        </div>
      )}

      {/* Final CTA - UNCHANGED */}
      <section className="px-4 sm:px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-5xl rounded-[2rem] bg-[#173247] py-16 px-8 text-center text-white overflow-hidden shadow-[0_24px_80px_rgba(23,50,71,0.2)]"
        >
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-teal/10 rounded-full blur-3xl" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-teal/70 mb-4 block">
              Ready to Experience
            </span>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl mb-8">
              Start planning your <span className="text-teal/80">{service.title.toLowerCase()}</span> journey
            </h2>
            <p className="text-sm leading-7 text-white/70 sm:text-base mb-12 max-w-xl mx-auto">
              Share your dates, group size, and preferences. We&apos;ll shape
              the perfect backwater experience around your pace.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-navy shadow-lg transition-all hover:-translate-y-0.5 hover:bg-sand hover:text-white"
              >
                {service.ctaText}
              </Link>
              <Link
                href="/experience"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
              >
                Explore All Experiences
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
