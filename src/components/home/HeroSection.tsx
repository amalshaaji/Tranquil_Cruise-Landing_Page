"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PremiumHeroSection() {
  const breadcrumbs = [
    { label: "Destinations", href: "/experience" },
    { label: "Kerala", href: "/about" },
    { label: "Alleppey", href: "/experience" },
  ];

  const stats = [
    { label: "BEST TIME TO VISIT", value: "October - March" },
    { label: "CURRENCY", value: "Indian Rupee (INR)" },
    { label: "LANGUAGE", value: "Malayalam, English" },
    { label: "CRUISING STYLE", value: "Luxury houseboats, backwater hopping" },
  ];

  return (
    <section className="relative min-h-[calc(100svh-73px)] w-full overflow-hidden md:min-h-[calc(100svh-57px)]">
      <div className="absolute inset-0">
        <Image
          src="/images/home-hero-backwater-canoe.jpg"
          alt="Traditional canoe on Kerala backwaters"
          fill
          preload
          sizes="100vw"
          className="object-cover object-[center_58%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/62 via-black/24 to-black/6" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/68 via-black/10 to-transparent" />
      </div>

      <div className="relative z-20 mx-auto flex min-h-[calc(100svh-73px)] w-full max-w-7xl flex-col justify-between px-4 pb-10 pt-20 sm:px-6 sm:pb-12 sm:pt-24 md:min-h-[calc(100svh-57px)] lg:pb-10 lg:pt-24">
        <div className="flex flex-col gap-8 sm:gap-9 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex items-center gap-3 sm:gap-4"
          >
            {breadcrumbs.map((crumb, idx) => (
              <div key={crumb.label} className="flex items-center gap-3 sm:gap-4">
                <Link
                  href={crumb.href}
                  className="text-xs font-medium text-[#f4ead3]/88 transition-colors duration-300 hover:text-[#ddb56f] sm:text-sm"
                >
                  {crumb.label}
                </Link>
                {idx < breadcrumbs.length - 1 && (
                  <span className="text-[#f4ead3]/42">/</span>
                )}
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
            className="max-w-5xl"
          >
            <h1 className="text-4xl font-medium leading-[0.95] text-[#fff5df] text-balance drop-shadow-[0_8px_26px_rgba(0,0,0,0.58)] sm:text-6xl md:text-7xl lg:text-8xl">
              Discover Alappuzha
            </h1>
            <h2 className="bg-gradient-to-r from-[#d7a64f] via-[#f4dfad] to-[#7fa397] bg-clip-text text-4xl font-normal leading-[0.95] text-transparent text-balance drop-shadow-[0_8px_24px_rgba(0,0,0,0.54)] sm:text-6xl md:text-7xl lg:text-8xl">
              Backwaters
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-2xl text-sm font-normal leading-relaxed tracking-wide text-[#f1eadc]/90 drop-shadow-[0_4px_16px_rgba(0,0,0,0.52)] sm:text-base md:text-lg"
          >
            Serene coconut-lined canals, traditional houseboats, and golden sunsets.
            Experience the soul of Kerala on the water.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center gap-4 sm:gap-6"
          >
            <Link
              href="/experience"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#d7a64f] px-8 py-3.5 text-xs font-bold tracking-widest text-[#152523] shadow-2xl shadow-black/28 transition-all duration-500 hover:bg-[#e1b767] hover:shadow-black/36 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d7a64f] sm:px-10 sm:py-4 sm:text-sm"
            >
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                EXPLORE
              </span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-full border border-[#f1dfb8]/58 bg-black/18 px-8 py-3.5 text-xs font-semibold tracking-widest text-[#f7edd7] shadow-xl shadow-black/20 backdrop-blur-md transition-all duration-500 hover:border-[#e1b767]/80 hover:bg-black/28 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f7edd7] sm:px-10 sm:py-4 sm:text-sm"
            >
              LEARN MORE
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="border-t border-white/15 pt-6 sm:pt-8"
        >
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + idx * 0.05 }}
                className="flex min-w-0 flex-col gap-2 sm:gap-3"
              >
                <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#d7a64f]/88 drop-shadow-[0_3px_12px_rgba(0,0,0,0.45)] sm:text-xs">
                  {stat.label}
                </div>
                <div className="text-xs font-normal leading-snug text-[#f1eadc]/92 drop-shadow-[0_3px_12px_rgba(0,0,0,0.45)] sm:text-sm md:text-base">
                  {stat.value}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
