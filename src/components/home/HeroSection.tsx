"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const heroDetails = [
  "Private houseboats in Alleppey",
  "Scenic canal cruises",
  "Easy Kerala backwater stays",
];

export default function HeroSection() {
  function scrollToExperiences() {
    const section = document.getElementById("explore-experiences");
    if (!section) return;

    section.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", "#explore-experiences");
  }

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#8fb3d1] text-white sm:min-h-screen">
      <div className="absolute inset-0">
        <Image
          src="/images/home-hero-rainbow-houseboat.jpg"
          alt="Private Alleppey houseboat cruising through the Kerala backwaters beneath a rainbow"
          fill
          preload
          sizes="100vw"
          className="object-cover object-[58%_54%] scale-[1.08] sm:object-[center_57%] sm:scale-100"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(24,63,88,0.12)_0%,rgba(24,63,88,0.18)_34%,rgba(8,20,31,0.34)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.22),transparent_32%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,28,40,0.18)_0%,rgba(11,28,40,0.08)_24%,rgba(11,28,40,0.14)_48%,rgba(7,20,31,0.4)_100%)] sm:hidden" />
        <div className="absolute inset-x-0 bottom-0 h-[38svh] bg-[linear-gradient(180deg,rgba(7,20,31,0)_0%,rgba(7,20,31,0.18)_42%,rgba(7,20,31,0.46)_100%)] sm:h-[32svh]" />
      </div>

      <div className="relative z-10 flex min-h-[100svh] flex-col justify-between px-4 pb-7 pt-24 sm:min-h-screen sm:px-8 sm:pb-10 sm:pt-32 lg:px-10">
        <div className="flex flex-1 items-center pt-8 sm:items-start sm:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mx-auto flex w-full max-w-7xl justify-center"
          >
            <div className="flex max-w-[22rem] flex-col items-center sm:max-w-none">
              <span className="mb-3 h-px w-14 bg-white/45 sm:mb-4 sm:w-20" aria-hidden="true" />
              <div className="text-center font-[var(--font-display)] text-white/95 [text-shadow:0_12px_30px_rgba(0,0,0,0.16)]">
                <span className="block text-[clamp(2.35rem,12vw,6.2rem)] font-semibold uppercase leading-[0.84] tracking-[0.2em] sm:tracking-[0.28em]">
                  Tranquil
                </span>
                <span className="mt-1 block pl-[0.18em] text-[clamp(2.55rem,13vw,6.9rem)] uppercase leading-[0.8] tracking-[0.23em] text-white/98 sm:pl-[0.26em] sm:tracking-[0.34em]">
                  Cruise
                </span>
              </div>
              <span className="mt-3 max-w-[15rem] text-center text-[0.56rem] font-medium uppercase tracking-[0.26em] text-white/72 sm:mt-5 sm:max-w-none sm:text-[0.68rem] sm:tracking-[0.52em]">
                Alleppey Backwater Houseboats
              </span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut", delay: 0.1 }}
          className="mx-auto flex w-full max-w-7xl flex-col items-center gap-6 sm:gap-8"
        >
          <div className="flex w-full items-end justify-center gap-6">
            <div className="mx-auto flex max-w-4xl flex-1 flex-col items-center text-center">
              <div className="mb-4 grid w-full max-w-[19rem] grid-cols-1 gap-2 text-[0.58rem] font-medium uppercase tracking-[0.18em] text-white/82 sm:mb-5 sm:flex sm:max-w-none sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-4 sm:gap-y-2 sm:text-[0.68rem] sm:tracking-[0.42em]">
                {heroDetails.map((detail, index) => (
                  <div
                    key={detail}
                    className="flex items-center justify-center rounded-full border border-white/18 bg-white/10 px-3 py-2 backdrop-blur-[2px] sm:gap-4 sm:rounded-none sm:border-0 sm:bg-transparent sm:px-0 sm:py-0 sm:backdrop-blur-0"
                  >
                    <span>{detail}</span>
                    {index < heroDetails.length - 1 ? (
                      <span className="hidden h-3 w-px bg-white/45 sm:block" />
                    ) : null}
                  </div>
                ))}
              </div>

              <h1 className="max-w-[19rem] text-balance text-[1rem] font-semibold uppercase leading-[1.45] tracking-[0.16em] text-white/96 sm:max-w-4xl sm:text-[1.7rem] sm:leading-normal sm:tracking-[0.34em]">
                Private Houseboats &amp; Backwater Stays in Alleppey
              </h1>

              <button
                type="button"
                onClick={scrollToExperiences}
                className="mt-5 inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/50 bg-white/6 text-white transition duration-300 hover:scale-[1.04] hover:bg-white/12 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:mt-7 sm:h-16 sm:w-16"
                aria-label="Scroll to explore experiences"
              >
                <svg
                  width="24"
                  height="24"
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
