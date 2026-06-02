"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#8fb3d1] text-white sm:min-h-screen">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-rainbow-houseboat.webp"
          alt="Alappuzha houseboat view across the Kerala backwaters"
          fill
          preload
          fetchPriority="high"
          decoding="async"
          sizes="100vw"
          className="object-cover object-[55%_58%] sm:object-[center_58%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(7,20,31,0.68)_4%,rgba(7,20,31,0.34)_36%,rgba(7,20,31,0.18)_64%,rgba(7,20,31,0.32)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_30%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,20,31,0.1)_0%,rgba(7,20,31,0.08)_24%,rgba(7,20,31,0.16)_52%,rgba(7,20,31,0.5)_100%)] sm:hidden" />
        <div className="absolute inset-x-0 bottom-0 h-[38svh] bg-[linear-gradient(180deg,rgba(7,20,31,0)_0%,rgba(7,20,31,0.14)_42%,rgba(7,20,31,0.52)_100%)] sm:h-[32svh]" />
      </div>

      <div className="relative z-10 flex min-h-[100svh] flex-col justify-between px-4 pb-5 pt-20 sm:min-h-screen sm:px-8 sm:pb-10 sm:pt-32 lg:px-10">
        <div className="mx-auto flex w-full max-w-7xl flex-1 items-start justify-center pt-8 sm:pt-12 lg:pt-16">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            animate={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0, rotate: 0.2 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="mx-auto max-w-[22rem] text-center sm:max-w-[28rem] lg:max-w-[34rem]"
          >
            <div className="font-[var(--font-display)] [text-shadow:0_16px_36px_rgba(0,0,0,0.28)]">
              <motion.span
                className="block whitespace-nowrap bg-[linear-gradient(90deg,rgba(255,255,255,0.7)_0%,rgba(180,245,255,0.96)_28%,rgba(122,210,228,0.98)_52%,rgba(79,173,201,0.94)_76%,rgba(255,255,255,0.7)_100%)] bg-[length:220%_100%] bg-clip-text text-[clamp(2.15rem,8.8vw,5.6rem)] font-semibold uppercase leading-[0.9] tracking-[0.08em] text-transparent sm:tracking-[0.12em] lg:tracking-[0.14em]"
                animate={
                  shouldReduceMotion
                    ? undefined
                    : { backgroundPosition: ["0% 50%", "78% 50%", "0% 50%"], x: [0, 2, 0] }
                }
                transition={shouldReduceMotion ? undefined : { duration: 9, repeat: Infinity, ease: "easeInOut" }}
              >
                TRANQUIL
              </motion.span>
              <motion.span
                className="mt-1 block whitespace-nowrap bg-[linear-gradient(90deg,rgba(255,255,255,0.68)_0%,rgba(130,224,240,0.96)_26%,rgba(75,187,212,0.98)_54%,rgba(190,248,255,0.92)_78%,rgba(255,255,255,0.68)_100%)] bg-[length:220%_100%] bg-clip-text text-[clamp(1.55rem,6.4vw,3.8rem)] font-semibold uppercase leading-[0.92] tracking-[0.18em] text-transparent sm:tracking-[0.24em]"
                animate={
                  shouldReduceMotion
                    ? undefined
                    : { backgroundPosition: ["100% 50%", "18% 50%", "100% 50%"], x: [0, -2, 0] }
                }
                transition={shouldReduceMotion ? undefined : { duration: 9, repeat: Infinity, ease: "easeInOut" }}
              >
                CRUISE
              </motion.span>
            </div>
            <motion.p
              className="mx-auto mt-3 max-w-[20rem] text-[0.72rem] uppercase tracking-[0.28em] text-white/72 sm:max-w-[24rem] sm:text-xs sm:tracking-[0.34em]"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
              animate={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7, ease: "easeOut" }}
            >
              Alleppey Backwaters
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
