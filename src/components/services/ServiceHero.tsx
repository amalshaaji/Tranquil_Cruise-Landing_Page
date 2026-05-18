"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ServiceHero({
  title,
  subtitle,
  eyebrow,
  heroImage,
}: {
  title: string;
  subtitle: string;
  eyebrow: string;
  heroImage: string;
}) {
  return (
    <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-navy text-white sm:min-h-[80vh]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt={title}
          fill
          preload
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Multi-layer overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,27,42,0.85)] via-[rgba(10,27,42,0.35)] to-[rgba(10,27,42,0.08)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(143,179,209,0.18),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(111,149,171,0.12),transparent_40%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-14 pt-40 sm:px-8 sm:pb-20 sm:pt-48 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-4">
            <span
              className="h-px w-10 bg-white/50 sm:w-14"
              aria-hidden="true"
            />
            <span className="text-[0.68rem] font-semibold uppercase tracking-[0.36em] text-white/75 sm:text-xs">
              {eyebrow}
            </span>
          </div>

          {/* Title */}
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[0.95] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:mt-6 sm:text-lg">
            {subtitle}
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-10 flex items-center gap-3 sm:mt-14"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="flex h-10 w-6 items-start justify-center rounded-full border border-white/30 pt-2"
          >
            <div className="h-1.5 w-1.5 rounded-full bg-white/70" />
          </motion.div>
          <span className="text-[0.62rem] font-medium uppercase tracking-[0.3em] text-white/50">
            Scroll to explore
          </span>
        </motion.div>
      </div>
    </section>
  );
}
