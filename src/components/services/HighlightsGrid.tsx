"use client";

import { motion } from "framer-motion";

type IconName =
  | "anchor"
  | "sun"
  | "leaf"
  | "star"
  | "heart"
  | "compass"
  | "home"
  | "drop"
  | "flame"
  | "moon"
  | "shield"
  | "music";

function HighlightIcon({ name }: { name: IconName }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true,
  } as const;

  switch (name) {
    case "anchor":
      return (
        <svg {...common}>
          <circle cx="12" cy="5" r="2" stroke="currentColor" strokeWidth="2" />
          <path
            d="M12 7v10m0 0c-3 0-6-2-6-5m6 5c3 0 6-2 6-5M12 7v-2"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "sun":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
          <path
            d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32 1.41-1.41"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "leaf":
      return (
        <svg {...common}>
          <path
            d="M17 8C8 10 5.9 16.17 3.82 21.34M17 8c2-1 5-1 5 4-2 4-5.34 7.5-8 8-2 .5-3-1-3-1m6-11s-1.5 3.5-5 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "star":
      return (
        <svg {...common}>
          <path
            d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "heart":
      return (
        <svg {...common}>
          <path
            d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "compass":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
          <path
            d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "home":
      return (
        <svg {...common}>
          <path
            d="M4 10 12 4l8 6v10H4V10Z"
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
    case "drop":
      return (
        <svg {...common}>
          <path
            d="M12 2c0 4-6 8-6 13a6 6 0 0 0 12 0c0-5-6-9-6-13Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "flame":
      return (
        <svg {...common}>
          <path
            d="M12 22c4-2 6-5 6-9 0-3-2-5-3-7-1 2-3 3-3 6-1-1-2-2-2-4-2 3-4 6-4 9 0 3 2 5 6 5Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "moon":
      return (
        <svg {...common}>
          <path
            d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path
            d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "music":
      return (
        <svg {...common}>
          <path
            d="M9 18V5l12-2v13"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="6" cy="18" r="3" stroke="currentColor" strokeWidth="2" />
          <circle cx="18" cy="16" r="3" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
  }
}

export default function HighlightsGrid({
  highlights,
}: {
  highlights: {
    title: string;
    description: string;
    icon: IconName;
  }[];
}) {
  return (
    <section className="px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-10 sm:mb-12"
        >
          <div className="text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-teal/80">
            Why Choose Us
          </div>
          <h2 className="mt-3 max-w-xl text-2xl font-semibold leading-tight text-sand sm:text-3xl">
            Highlights & Features
          </h2>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((h, idx) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                ease: "easeOut",
                delay: idx * 0.08,
              }}
              className="group relative overflow-hidden rounded-[1.75rem] border border-navy/10 bg-white p-6 shadow-sm transition-all duration-300 hover:border-gold/30 hover:shadow-[0_16px_48px_rgba(23,50,71,0.1)]"
            >
              <div className="relative">
                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#edf5f8] text-teal transition-transform duration-300 group-hover:scale-105">
                  <HighlightIcon name={h.icon} />
                </div>

                {/* Title */}
                <h3 className="mt-5 text-base font-semibold text-foreground">
                  {h.title}
                </h3>

                {/* Description */}
                <p className="mt-2.5 text-sm leading-relaxed text-foreground/68">
                  {h.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
