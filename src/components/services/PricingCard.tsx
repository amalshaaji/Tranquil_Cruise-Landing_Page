"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function PricingCard({
  priceLabel,
  priceNote,
  facilities,
  ctaText,
  ctaHref,
}: {
  priceLabel: string;
  priceNote: string;
  facilities: string[];
  ctaText: string;
  ctaHref: string;
}) {
  return (
    <section className="px-4 pb-14 sm:px-6 sm:pb-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid gap-6 lg:grid-cols-[1.15fr,0.85fr] lg:items-start"
        >
          {/* Pricing Card */}
          <div className="relative overflow-hidden rounded-[28px] border border-gold/30 bg-white p-7 shadow-[0_24px_70px_rgba(23,50,71,0.1)] sm:p-9">
            <div className="relative">
              <div className="text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-teal/80">
                Pricing
              </div>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-4xl font-semibold text-foreground sm:text-5xl">
                  {priceLabel.split("/")[0].replace("From ", "")}
                </span>
                {priceLabel.includes("/") && (
                  <span className="text-base text-foreground/60">
                    / {priceLabel.split("/")[1].trim()}
                  </span>
                )}
              </div>
              {priceLabel.startsWith("From") && (
                <div className="mt-1 inline-flex items-center rounded-full bg-teal/10 px-3 py-1 text-xs font-medium text-teal">
                  Starting from
                </div>
              )}
              <p className="mt-5 text-sm leading-7 text-foreground/68">
                {priceNote}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href={ctaHref}
                  className="inline-flex items-center justify-center rounded-xl bg-[#173247] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(23,50,71,0.18)] transition hover:translate-y-[-1px] hover:bg-[#234760]"
                >
                  {ctaText}
                </Link>
                <Link
                  href="https://wa.me/917994073491"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-navy/12 bg-white px-6 py-3.5 text-sm font-semibold text-foreground transition hover:bg-navy/4"
                >
                  WhatsApp
                </Link>
              </div>
            </div>
          </div>

          {/* Facilities Card */}
          <div className="rounded-[28px] border border-navy/10 bg-white p-7 shadow-[0_16px_44px_rgba(23,50,71,0.06)] sm:p-9">
            <div className="text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-teal/80">
              What&apos;s Included
            </div>
            <h3 className="mt-3 text-xl font-semibold text-sand">
              Facilities & Amenities
            </h3>
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {facilities.map((f, idx) => (
                <motion.div
                  key={f}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    ease: "easeOut",
                    delay: idx * 0.05,
                  }}
                  className="flex items-center gap-3 rounded-xl border border-navy/6 bg-[#f8fbfc] px-4 py-3 text-sm text-foreground/78"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="shrink-0 text-teal"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 12l5 5L20 7"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {f}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
