"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Category, ListingType } from "@/lib/tranquil-data";

function iconFor(type: ListingType) {
  const common = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true,
  } as const;

  switch (type) {
    case "houseboat":
      return (
        <svg {...common}>
          <path
            d="M4 14c0 2 2 4 8 4s8-2 8-4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M6 14V9l6-3 6 3v5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M8 10h8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.9"
          />
        </svg>
      );
    case "shikkara":
      return (
        <svg {...common}>
          <path
            d="M3 16c4-2 6-6 9-10 3 4 5 8 9 10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 16c2 2 4 3 6 3s4-1 6-3"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "kayaking":
      return (
        <svg {...common}>
          <path
            d="M5 16h14l-2 4H7l-2-4Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M7 16l5-12 5 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 4v7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.85"
          />
        </svg>
      );
    case "room":
      return (
        <svg {...common}>
          <path
            d="M4 10l8-6 8 6v10H4V10Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M9 20v-6h6v6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}

interface CategoryWithImage extends Category {
  image?: string;
  price?: string;
  description?: string;
}

export default function ServiceCards({
  categories,
}: {
  categories: CategoryWithImage[];
}) {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Ambient Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Header */}
      <div className="relative z-10 mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Discover Your
            <span className="block bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Next Escape
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-light">
            Curated experiences tailored to your travel style—from serene
            water journeys to immersive cultural stays.
          </p>
        </motion.div>
      </div>

      {/* Cards Grid */}
      <div className="relative z-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {categories.map((c, idx) => (
          <motion.div
            key={c.type}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: idx * 0.1,
            }}
            className="group relative h-96 w-full"
          >
            {/* Card Border Glow Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500/20 via-transparent to-cyan-500/20 rounded-3xl opacity-0 group-hover:opacity-100 blur transition-all duration-500 pointer-events-none" />

            {/* Wishlist Heart */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              className="absolute right-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 backdrop-blur-md transition-all duration-200 hover:bg-white/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60 border border-white/20"
              aria-label="Add to wishlist"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-white transition-colors duration-200"
                aria-hidden="true"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </motion.button>

            <Link
              href={`/experience?category=${encodeURIComponent(c.type)}`}
              className="group/link relative block h-full w-full overflow-hidden rounded-3xl shadow-2xl transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/40"
            >
              {/* Background Image with Advanced Effects */}
              {c.image && (
                <>
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover/link:scale-125"
                    priority={idx < 2}
                  />
                  {/* Image Overlay Shimmer */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover/link:opacity-100 transition-opacity duration-500" />
                </>
              )}

              {/* Fallback gradient */}
              {!c.image && (
                <div
                  className={`absolute inset-0 ${
                    c.type === "houseboat"
                      ? "bg-gradient-to-br from-teal-500 via-teal-600 to-teal-700"
                      : c.type === "shikkara"
                      ? "bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700"
                      : c.type === "kayaking"
                      ? "bg-gradient-to-br from-cyan-400 via-blue-500 to-blue-700"
                      : "bg-gradient-to-br from-rose-400 via-rose-500 to-rose-700"
                  }`}
                  aria-hidden="true"
                />
              )}

              {/* Advanced Multi-Layer Overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/20 to-black/75"
                aria-hidden="true"
              />

              {/* Dynamic Glow Overlay (appears on hover) */}
              <div
                className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/link:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle at 30% 20%, rgba(26, 163, 159, 0.35), transparent 40%), radial-gradient(circle at 70% 30%, rgba(228, 213, 180, 0.25), transparent 55%)",
                }}
                aria-hidden="true"
              />

              {/* Content Container */}
              <div className="absolute inset-0 flex flex-col justify-between p-6 z-10">
                {/* Top: Category Badge with Enhanced Animation */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + idx * 0.1, duration: 0.4 }}
                  className="flex items-start"
                >
                  <div
                    className={`inline-flex items-center gap-2.5 rounded-full px-4 py-2 backdrop-blur-lg ring-1 text-sm font-semibold text-white transition-all duration-300 group-hover/link:scale-105 border ${
                      c.type === "houseboat"
                        ? "bg-teal-500/40 ring-teal-400/60 border-teal-400/40"
                        : c.type === "shikkara"
                        ? "bg-amber-500/40 ring-amber-400/60 border-amber-400/40"
                        : c.type === "kayaking"
                        ? "bg-cyan-500/40 ring-cyan-400/60 border-cyan-400/40"
                        : "bg-rose-500/40 ring-rose-400/60 border-rose-400/40"
                    }`}
                  >
                    <span className="text-white transition-transform duration-300 group-hover/link:scale-110">
                      {iconFor(c.type)}
                    </span>
                    <span className="font-medium">{c.title}</span>
                  </div>
                </motion.div>

                {/* Bottom: Details Container */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1, duration: 0.4 }}
                  className="space-y-4"
                >
                  {/* Headline */}
                  <div className="space-y-1">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight transition-transform duration-300 group-hover/link:translate-y-0">
                      {c.subtitle}
                    </h3>
                  </div>

                  {/* Price & Description */}
                  {c.price && (
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-3 text-white/90 text-sm font-light">
                        <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                          </svg>
                          {c.price}
                        </span>
                      </div>
                      {c.description && (
                        <p className="text-white/70 text-sm font-light">
                          {c.description}
                        </p>
                      )}
                    </div>
                  )}

                  {/* CTA Button with Enhanced Styling */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-white to-slate-100 px-6 py-3 text-sm font-semibold text-slate-950 transition-all duration-200 hover:shadow-lg hover:shadow-white/20 hover:from-slate-100 hover:to-white active:shadow-none backdrop-blur-sm border border-white/50"
                    aria-hidden="true"
                  >
                    <span>Explore</span>
                    <motion.svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      whileHover={{ x: 4, y: -4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path d="M7 17L17 7" />
                      <path d="M9 7h8v8" />
                    </motion.svg>
                  </motion.div>
                </motion.div>
              </div>

              {/* Refined Border Ring */}
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/15 pointer-events-none group-hover/link:ring-white/30 transition-all duration-300" />
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}