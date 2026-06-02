"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Category, ListingType } from "@/lib/tranquil-data";

type ServiceType = ListingType | "canoe" | "spa";

function iconFor(type: ServiceType) {
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
    case "canoe":
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
    case "spa":
      return (
        <svg {...common}>
          <path
            d="M12 20c4-3.2 6-6.4 6-9.5A6 6 0 0 0 12 4a6 6 0 0 0-6 6.5C6 13.6 8 16.8 12 20Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M9 11c1.3.3 2.3 1 3 2 0-2.4 1-4 3-5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.9"
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

export interface ServiceCardCategory extends Omit<Category, "type"> {
  type: ServiceType;
  image?: string;
  price?: string;
  description?: string;
  href?: string;
}

export default function ServiceCards({
  categories,
}: {
  categories: ServiceCardCategory[];
}) {
  function categoryHref(type: ServiceType) {
    if (type === "kayaking") return "/kayaking";
    return `/gallery?category=${encodeURIComponent(type)}`;
  }

  return (
    <section className="relative w-full bg-background px-4 pb-8 pt-12 sm:px-6 sm:pb-10 sm:pt-20">
      {/* Header */}
      <div className="relative z-10 mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <h2 className="text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
            Discover Your
            <span className="block text-sand">
              Next Escape
            </span>
          </h2>
          <p className="mt-4 text-base font-light text-foreground/70 sm:text-lg">
            Choose from calm boat rides, backwater stays, and local
            experiences that suit your trip.
          </p>
        </motion.div>
      </div>

      {/* Cards Grid */}
      <div className="relative z-20 mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
            className="group relative min-h-[32rem] w-full"
          >
            <div className="pointer-events-none absolute -inset-0.5 rounded-3xl bg-white/20 opacity-0 blur transition-all duration-500 group-hover:opacity-100" />

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
              href={c.href ?? categoryHref(c.type)}
              className="group/link relative block h-full w-full overflow-hidden rounded-3xl shadow-2xl transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/40"
            >
              {/* Background Image with Advanced Effects */}
              {c.image && (
                <>
                  <Image
                    src={c.image}
                    alt={
                      c.title === "Houseboats"
                        ? "Private houseboat cruise in Alleppey backwaters"
                        : c.title === "Shikkara"
                          ? "Shikkara ride through Alappuzha canals"
                          : c.title === "Kayaking"
                            ? "Kerala backwater kayaking near Alleppey"
                            : c.title === "Rooms"
                              ? "Backwater room stay in Alappuzha"
                              : `${c.title} experience in the Alleppey backwaters`
                    }
                    fill
                    className="object-cover transition-transform duration-700 group-hover/link:scale-125"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Image Overlay Shimmer */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover/link:opacity-100 transition-opacity duration-500" />
                </>
              )}

              {/* Fallback gradient */}
              {!c.image && (
                <div
                  className={`absolute inset-0 ${c.type === "houseboat"
                      ? "bg-teal"
                      : c.type === "shikkara"
                        ? "bg-gold"
                        : c.type === "kayaking" || c.type === "canoe"
                          ? "bg-navy"
                          : "bg-sand"
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
                className="absolute inset-0 bg-white/5 opacity-0 transition-opacity duration-500 group-hover/link:opacity-100"
                aria-hidden="true"
              />

              {/* Content Container */}
              <div className="absolute inset-0 z-10 flex flex-col justify-between p-8">
                {/* Top: Category Badge with Enhanced Animation */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + idx * 0.1, duration: 0.4 }}
                  className="flex items-start pr-12"
                >
                  <div
                    className={`inline-flex max-w-full items-center gap-2.5 rounded-full border px-4 py-2 text-sm font-semibold text-white ring-1 backdrop-blur-lg transition-all duration-300 group-hover/link:scale-105 ${c.type === "houseboat"
                        ? "border-teal/45 bg-teal/30 ring-teal/50"
                        : c.type === "shikkara"
                          ? "border-gold/45 bg-gold/35 ring-gold/55"
                          : c.type === "kayaking" || c.type === "canoe"
                            ? "border-teal/45 bg-navy/35 ring-teal/55"
                            : "border-sand/45 bg-sand/35 ring-sand/55"
                      }`}
                  >
                    <span className="text-white transition-transform duration-300 group-hover/link:scale-110">
                      {iconFor(c.type)}
                    </span>
                    <span className="min-w-0 font-medium leading-tight">
                      {c.title}
                    </span>
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
                    <h3 className="text-3xl font-bold leading-tight text-white transition-transform duration-300 group-hover/link:translate-y-0 sm:text-[2rem]">
                      {c.subtitle}
                    </h3>
                    {idx === 2 && (
                      <span className="inline-flex items-center rounded-full bg-white/15 border border-white/20 backdrop-blur-sm px-3 py-0.5 text-xs font-medium text-white/90">
                        Open boat
                      </span>
                    )}
                  </div>

                  {c.description && (
                    <p className="break-normal whitespace-normal text-left text-sm font-light text-white/70 [word-break:normal] [overflow-wrap:break-word]">
                      {c.description}
                    </p>
                  )}

                  {/* CTA Button with Enhanced Styling */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/45 bg-[#edf5f9] px-6 py-3 text-sm font-semibold text-ink backdrop-blur-sm transition-all duration-200 hover:bg-[#f8fbfd] hover:shadow-lg hover:shadow-black/20 active:shadow-none"
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
