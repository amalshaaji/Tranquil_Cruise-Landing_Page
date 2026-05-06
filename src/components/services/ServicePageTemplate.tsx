"use client";

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
  return (
    <main className="pb-16 sm:pb-24">
      {/* Hero */}
      <ServiceHero
        title={service.title}
        subtitle={service.subtitle}
        eyebrow={service.eyebrow}
        heroImage={service.heroImage}
      />

      {/* Introduction */}
      <section className="px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="grid gap-10 lg:grid-cols-[0.9fr,1.1fr] lg:items-start"
          >
            <div>
              <div className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-teal/80">
                Overview
              </div>
              <h2 className="mt-3 max-w-lg text-3xl font-semibold leading-tight text-sand sm:text-4xl">
                {service.subtitle}
              </h2>
            </div>

            <div className="grid gap-5 text-sm leading-7 text-foreground/72 sm:grid-cols-1 sm:text-base">
              {service.description.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {service.options && service.options.length > 0 ? (
        <section className="px-4 pb-14 sm:px-6 sm:pb-20">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mb-8 sm:mb-10"
            >
              <div className="text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-teal/80">
                Houseboat Options
              </div>
              <h2 className="mt-3 max-w-xl text-2xl font-semibold leading-tight text-sand sm:text-3xl">
                Choose the stay that suits your journey.
              </h2>
            </motion.div>

            <div className="grid gap-5 lg:grid-cols-2">
              {service.options.map((option, idx) => (
                <motion.div
                  key={option.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    ease: "easeOut",
                    delay: idx * 0.08,
                  }}
                  className="rounded-[1.75rem] border border-navy/10 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-xl font-semibold text-sand">
                    {option.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-foreground/72 sm:text-base">
                    {option.description}
                  </p>

                  <div className="mt-5 space-y-3">
                    {option.details.map((detail) => (
                      <div
                        key={detail}
                        className="rounded-2xl border border-navy/8 bg-[#f4f9fb] px-4 py-3 text-sm leading-6 text-foreground/74"
                      >
                        {detail}
                      </div>
                    ))}
                  </div>

                  {option.href ? (
                    <div className="mt-6">
                      <Link
                        href={option.href}
                        className="inline-flex items-center justify-center rounded-xl bg-[#173247] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(23,50,71,0.12)] transition hover:translate-y-[-1px] hover:bg-[#234760]"
                      >
                        {option.ctaLabel ?? "View Option"}
                      </Link>
                    </div>
                  ) : null}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {service.slug !== "houseboats" ? (
        <>
          {/* Highlights */}
          <HighlightsGrid highlights={service.highlights} />

          {/* Gallery */}
          <ServiceGallery images={service.gallery} title={service.title} />

          {/* Pricing & Facilities */}
          <PricingCard
            priceLabel={service.priceLabel}
            priceNote={service.priceNote}
            facilities={service.facilities}
            ctaText={service.ctaText}
            ctaHref={service.ctaHref}
          />
        </>
      ) : null}

      {/* CTA Banner */}
      <section className="px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[28px] border border-gold/35 bg-[#173247] px-6 py-12 text-white shadow-[0_24px_80px_rgba(23,50,71,0.2)] sm:px-10 sm:py-16"
        >
          <div className="relative flex flex-col items-center text-center">
            <div className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-white/60">
              Ready to Experience
            </div>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl">
              Start planning your {service.title.toLowerCase()} journey today
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
              Share your dates, group size, and preferences. We&apos;ll shape
              the perfect backwater experience around your pace.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-[#173247] shadow-[0_12px_30px_rgba(0,0,0,0.15)] transition hover:translate-y-[-1px] hover:bg-white/95"
              >
                {service.ctaText}
              </Link>
              <Link
                href="/experience"
                className="inline-flex items-center justify-center rounded-xl border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
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
