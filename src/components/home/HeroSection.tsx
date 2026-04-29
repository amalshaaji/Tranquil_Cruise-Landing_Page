"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PremiumHeroSection() {
  const breadcrumbs = [
    { label: "Destinations", href: "#" },
    { label: "Kerala", href: "#" },
    { label: "Alleppey", href: "#" }
  ];

  const stats = [
    { label: "BEST TIME TO VISIT", value: "October - March" },
    { label: "CURRENCY", value: "Indian Rupee (INR)" },
    { label: "LANGUAGE", value: "Malayalam, English" },
    { label: "CRUISING STYLE", value: "Luxury houseboats, backwater hopping" }
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* ─── BACKGROUND IMAGE & OVERLAYS ─── */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-home-bg.jpeg"
          alt="Kerala backwater houseboat"
          fill
          priority
          className="object-cover opacity-95 brightness-[0.78] contrast-[1.12] saturate-[0.85] sepia-[0.15]
                     will-change-auto"
        />
        
        {/* Primary overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/55 via-navy/35 to-navy/80" />
        
        {/* Radial light accents */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_15%,rgba(28,181,182,0.25),transparent_40%),radial-gradient(circle_at_70%_30%,rgba(232,217,183,0.15),transparent_50%)]" />
      </div>

      {/* ─── MAIN CONTENT ─── */}
      <div className="relative z-20 mx-auto flex h-screen w-full max-w-7xl flex-col justify-between px-4 pt-24 pb-12 sm:px-6 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20">
        
        {/* ─── TOP SECTION: BREADCRUMBS & MAIN CONTENT ─── */}
        <div className="flex flex-col gap-10 sm:gap-12">
          
          {/* Navigation Breadcrumbs */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex items-center gap-3 sm:gap-4"
          >
            {breadcrumbs.map((crumb, idx) => (
              <div key={idx} className="flex items-center gap-3 sm:gap-4">
                <Link href={crumb.href}>
                  <span className="text-xs sm:text-sm font-light text-white/85 hover:text-sand 
                                 transition-colors duration-300 cursor-pointer">
                    {crumb.label}
                  </span>
                </Link>
                {idx < breadcrumbs.length - 1 && (
                  <span className="text-white/40">/</span>
                )}
              </div>
            ))}
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
            className="max-w-3xl"
          >
            <h1 className="font-['Playfair_Display',_serif] text-4xl sm:text-6xl md:text-7xl lg:text-8xl 
                           font-normal text-white leading-[0.95] text-balance
                           tracking-tight drop-shadow-lg
                           will-change-transform">
              Discover Alappuzha
            </h1>
            <h2 className="font-['Playfair_Display',_serif] text-4xl sm:text-6xl md:text-7xl lg:text-8xl 
                          font-light text-sand/95 leading-[0.95] text-balance
                          tracking-tight drop-shadow-lg
                          will-change-transform">
              Backwaters
            </h2>
          </motion.div>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed text-white/85 
                       font-light tracking-wide"
          >
            Serene coconut-lined canals, traditional houseboats, and golden sunsets—
            experience the soul of Kerala on the water.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center gap-4 sm:gap-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              <Link
                href="/experience"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-teal via-teal to-teal/75 px-8 py-3.5 text-xs font-bold text-ink shadow-2xl shadow-teal/50 transition-all duration-500 hover:shadow-teal/70 hover:shadow-[0_20px_40px_-10px] active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal sm:px-10 sm:py-4 sm:text-sm tracking-widest relative overflow-hidden before:absolute before:inset-0 before:bg-white/25 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100 after:absolute after:inset-0 after:rounded-full after:bg-teal/20 after:opacity-0 after:blur-lg after:transition-opacity after:duration-500 hover:after:opacity-100"
              >
                <span className="relative z-10 group-hover:translate-x-0.5 transition-transform duration-300">EXPLORE</span>
                <svg className="relative z-10 w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link
                href="/about"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-gradient-to-br from-white/10 to-white/4 px-8 py-3.5 text-xs font-light text-white/95 backdrop-blur-xl transition-all duration-500 hover:border-white/50 hover:bg-gradient-to-br hover:from-white/20 hover:to-white/10 hover:shadow-xl hover:shadow-white/20 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:px-10 sm:py-4 sm:text-sm tracking-widest relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/0 before:via-white/20 before:to-white/0 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100 after:absolute after:inset-0 after:rounded-full after:shadow-lg after:shadow-white/10 after:opacity-0 after:transition-opacity after:duration-500 hover:after:opacity-100"
              >
                <span className="relative z-10 group-hover:translate-x-0.5 transition-transform duration-300">LEARN MORE</span>
                <svg className="relative z-10 w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* ─── BOTTOM SECTION: STATS GRID ─── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="border-t border-white/15 pt-8 sm:pt-10"
        >
          <div className="grid gap-6 sm:gap-8 grid-cols-2 sm:grid-cols-4">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + idx * 0.05 }}
                className="flex flex-col gap-2 sm:gap-3"
              >
                <div className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] 
                              text-white/60 letter-spacing-tight">
                  {stat.label}
                </div>
                <div className="text-xs sm:text-sm md:text-base font-light text-white/90 
                              leading-snug">
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