"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { Suspense } from "react";
import { motion } from "framer-motion";

const GuestMomentsGallery = dynamic(() => import("./GuestMomentsGallery"), {
  loading: () => (
    <div className="mx-auto mt-8 grid max-w-7xl grid-cols-2 gap-4 px-4 sm:mt-10 sm:grid-cols-3 sm:px-6 lg:grid-cols-4 lg:px-8">
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="aspect-[4/5] animate-pulse rounded-[1.5rem] border border-[#d8e3e7] bg-white/80 shadow-[0_18px_40px_rgba(7,18,26,0.05)]"
        />
      ))}
    </div>
  ),
});

export default function ListingsClient() {
  return (
    <section className="home-water-theme relative overflow-hidden pb-16 sm:pb-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-[24rem] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.78),transparent_28%),radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_30%)]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 pt-8 sm:px-6 sm:pt-12 lg:px-8 lg:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="rounded-[2rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.9)_0%,rgba(247,250,251,0.86)_100%)] p-6 text-[#173247] shadow-[0_24px_70px_rgba(24,44,55,0.08)] backdrop-blur-xl sm:p-8 lg:p-10"
        >
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-teal/80">
            Gallery
          </p>
          <h1 className="mt-3 max-w-3xl font-[var(--font-display)] text-[clamp(2.2rem,5vw,4.8rem)] leading-[0.94] tracking-[-0.05em] text-[#173247]">
            Alleppey backwater moments.
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-foreground/72 sm:text-base sm:leading-8">
            A quieter gallery of canals, open water, sunset light, and a few night frames. Tap any
            image to open it full-screen.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/houseboats"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-navy px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-ink"
            >
              Explore houseboats
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-navy/12 bg-white/80 px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-navy transition hover:bg-white"
            >
              Plan a trip
            </Link>
          </div>
        </motion.div>
      </div>

      <Suspense fallback={null}>
        <GuestMomentsGallery />
      </Suspense>
    </section>
  );
}
