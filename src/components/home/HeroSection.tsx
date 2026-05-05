"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const heroDetails = [
  "Houseboats",
  "Private journeys",
  "Kerala stays",
];

export default function HeroSection() {
  function scrollToExperiences() {
    const section = document.getElementById("explore-experiences");
    if (!section) return;

    section.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", "#explore-experiences");
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#8fb3d1] text-white">
      <div className="absolute inset-0">
        <Image
          src="/images/home-hero-backwater-canoe.jpg"
          alt="Traditional canoe gliding across the Kerala backwaters"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_57%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(24,63,88,0.12)_0%,rgba(24,63,88,0.18)_34%,rgba(8,20,31,0.34)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.22),transparent_32%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[32svh] bg-[linear-gradient(180deg,rgba(7,20,31,0)_0%,rgba(7,20,31,0.16)_42%,rgba(7,20,31,0.42)_100%)]" />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col justify-between px-5 pb-8 pt-28 sm:px-8 sm:pb-10 sm:pt-32 lg:px-10">
        <div className="flex flex-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mx-auto flex max-w-7xl justify-center"
          >
            <div className="flex flex-col items-center">
              <span className="mb-4 h-px w-16 bg-white/45 sm:w-20" aria-hidden="true" />
              <div className="text-center font-[var(--font-display)] text-white/95 [text-shadow:0_12px_30px_rgba(0,0,0,0.16)]">
                <span className="block text-[clamp(2.9rem,6vw,6.2rem)] font-semibold uppercase leading-[0.82] tracking-[0.28em]">
                  Tranquil
                </span>
                <span className="mt-1 block pl-[0.26em] text-[clamp(3.05rem,6.5vw,6.9rem)] uppercase leading-[0.78] tracking-[0.34em] text-white/98">
                  Cruise
                </span>
              </div>
              <span className="mt-5 text-[0.62rem] font-medium uppercase tracking-[0.52em] text-white/70 sm:text-[0.68rem]">
                Alleppey Backwater Houseboats
              </span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut", delay: 0.1 }}
          className="mx-auto flex w-full max-w-7xl flex-col items-center gap-8"
        >
          <div className="flex w-full items-end justify-center gap-6">
            <div className="mx-auto flex max-w-3xl flex-1 flex-col items-center text-center">
              <div className="mb-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[0.64rem] font-medium uppercase tracking-[0.42em] text-white/78 sm:text-[0.68rem]">
                {heroDetails.map((detail, index) => (
                  <div key={detail} className="flex items-center gap-4">
                    <span>{detail}</span>
                    {index < heroDetails.length - 1 ? (
                      <span className="hidden h-3 w-px bg-white/45 sm:block" />
                    ) : null}
                  </div>
                ))}
              </div>

              <h1 className="max-w-4xl text-balance text-[1.38rem] font-semibold uppercase tracking-[0.42em] text-white/96 sm:text-[1.9rem]">
                The Curated Backwater House
              </h1>

              <button
                type="button"
                onClick={scrollToExperiences}
                className="mt-8 inline-flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full border-2 border-white/85 bg-white/6 text-white transition duration-300 hover:scale-[1.04] hover:bg-white/12 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:h-20 sm:w-20"
                aria-label="Scroll to explore experiences"
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M7 10l5 5 5-5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
