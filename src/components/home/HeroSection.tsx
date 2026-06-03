"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { PlaceReview } from "@/lib/google-place-reviews";

type HeroSectionProps = {
  rating: number | null;
  reviewCount: number | null;
  reviews: PlaceReview[];
};

export default function HeroSection({ rating, reviewCount, reviews }: HeroSectionProps) {
  const shouldReduceMotion = useReducedMotion();
  const heroReviews = reviews.slice(0, 2);
  const trustItems = [
    { label: "Private bookings only", trending: true },
    { label: "Couples, families, and groups", trending: false },
    { label: "Local planning support", trending: false },
  ];
  const heroSummaryCards = [
    {
      title: "Guest trust",
      value: rating ? rating.toFixed(1) : "4.9",
      detail: reviewCount
        ? `${reviewCount}+ reviews from recent guests`
        : "Loved for warm planning and smooth hosting",
    },
    {
      title: "Why guests shortlist us",
      value: "Right format first",
      detail: "We help you compare the route, pace, and stay before you choose a quote.",
    },
    {
      title: "Recent guest note",
      value: heroReviews[0]?.authorName ?? "Recent guests",
      detail:
        heroReviews[0]?.text?.length && heroReviews[0].text.length > 84
          ? `${heroReviews[0].text.slice(0, 84).trim()}...`
          : heroReviews[0]?.text ?? "Real feedback from the latest trips and stays.",
    },
  ] as const;
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

      <div className="relative z-10 flex min-h-[100svh] flex-col justify-between px-4 pb-6 pt-24 sm:min-h-screen sm:px-8 sm:pb-10 sm:pt-32 lg:px-10">
        <div className="mx-auto flex w-full max-w-7xl flex-1 items-center">
          <div className="grid w-full gap-8 justify-start items-start lg:grid-cols-[3fr_2fr] lg:gap-10 xl:gap-14">
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
              animate={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="max-w-[42rem] pt-2 sm:pt-8 lg:pt-14"
            >
              <motion.p
                className="inline-flex rounded-full border border-white/18 bg-white/10 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white/84 shadow-[0_12px_30px_rgba(0,0,0,0.12)] backdrop-blur-md sm:text-[0.72rem]"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
                animate={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                transition={{ delay: 0.12, duration: 0.7, ease: "easeOut" }}
              >
                Alleppey Backwater Experiences
              </motion.p>
              <div className="mt-5 font-[var(--font-display)] [text-shadow:0_16px_36px_rgba(0,0,0,0.22)] sm:mt-6">
                <motion.h1
                  className="max-w-[12ch] bg-[linear-gradient(90deg,rgba(255,255,255,0.98)_0%,rgba(221,247,255,0.96)_28%,rgba(169,231,224,0.98)_58%,rgba(255,225,154,0.92)_84%,rgba(255,255,255,0.94)_100%)] bg-[length:220%_100%] bg-clip-text text-[clamp(2.1rem,9.6vw,5.6rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-transparent"
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : { backgroundPosition: ["0% 50%", "78% 50%", "0% 50%"] }
                  }
                  transition={shouldReduceMotion ? undefined : { duration: 9, repeat: Infinity, ease: "easeInOut" }}
                >
                  The Right One. At The Right Time.
                </motion.h1>
              </div>
              <p className="mt-4 max-w-[32rem] text-sm leading-6 text-white/80 sm:mt-5 sm:text-lg sm:leading-8">
                Choose from private houseboat stays, shikara rides, kayaking trips, and day cruises. Get local guidance on routes, boat types, and experiences that fit your travel style before you book.
              </p>

              <div className="mt-5 flex flex-wrap gap-2.5 sm:mt-7">
                {trustItems.map((item) => (
                  <div
                    key={item.label}
                    className={`relative inline-flex min-h-10 items-center rounded-full border border-white/14 bg-white/10 px-4 py-2 text-xs font-semibold tracking-[0.08em] text-white/80 backdrop-blur-sm ${item.trending ? "pr-8" : ""}`}
                  >
                    {item.trending ? (
                      <span
                        aria-hidden="true"
                        className="absolute -right-1.5 -top-1.5 inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/18 bg-[radial-gradient(circle_at_35%_30%,rgba(255,245,214,0.96)_0%,rgba(245,214,122,0.9)_34%,rgba(232,154,73,0.82)_68%,rgba(120,193,183,0.34)_100%)] text-[0.78rem] shadow-[0_8px_18px_rgba(232,154,73,0.18)] backdrop-blur-sm ring-1 ring-white/12"
                      >
                        🔥
                      </span>
                    ) : null}
                    {item.label}
                  </div>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-white/74 sm:mt-5">
                <span className="font-medium">Let&apos;s go, schedule a quick 10 min call.</span>
                <a
                  href="tel:+917994073491"
                  className="inline-flex items-center rounded-full border border-white/16 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-white hover:text-[#173247]"
                >
                  Call now
                </a>
              </div>
              <div className="mt-6 grid gap-3 lg:hidden sm:grid-cols-3">
                {heroSummaryCards.map((card) => (
                  <div
                    key={card.title}
                    className="rounded-[1.5rem] border border-white/16 bg-white/10 p-4 shadow-[0_16px_34px_rgba(0,0,0,0.12)] backdrop-blur-md"
                  >
                    <div className="text-[0.64rem] font-semibold uppercase tracking-[0.22em] text-white/56">
                      {card.title}
                    </div>
                    <div className="mt-2 text-lg font-semibold leading-tight text-white">
                      {card.value}
                    </div>
                    <p className="mt-2 text-sm leading-6 text-white/76">{card.detail}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, x: 18 }}
              animate={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
              transition={{ delay: 0.15, duration: 0.8, ease: "easeOut" }}
              className="relative hidden min-h-[35rem] lg:block"
            >
              <div className="absolute right-[10%] top-[8%] w-[17rem] rounded-[2rem] border border-white/16 bg-[linear-gradient(180deg,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.08)_100%)] p-5 shadow-[0_24px_60px_rgba(0,0,0,0.18)] backdrop-blur-xl">
                <div className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-white/55">
                  Guest Trust
                </div>
                <div className="mt-4 flex items-end gap-3">
                  <span className="text-5xl font-semibold leading-none text-white">
                    {rating ? rating.toFixed(1) : "4.9"}
                  </span>
                  <span className="pb-1 text-sm text-white/70">Google rating</span>
                </div>
                <div className="mt-3 text-sm leading-6 text-white/74">
                  {reviewCount ? `${reviewCount}+ guest reviews across recent stays and rides.` : "Loved by recent guests for smooth planning and warm hosting."}
                </div>
              </div>

              <div className="absolute left-[4%] top-[28%] w-[23rem] rounded-[2.2rem] border border-white/16 bg-[linear-gradient(180deg,rgba(11,24,36,0.34)_0%,rgba(11,24,36,0.16)_100%)] p-6 shadow-[0_26px_70px_rgba(0,0,0,0.2)] backdrop-blur-xl">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-white/52">
                      Why guests shortlist us
                    </div>
                    <div className="mt-2 font-[var(--font-display)] text-[1.7rem] leading-tight text-white">
                      Choose the right format before you choose the quote.
                    </div>
                  </div>
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/16 bg-white/10 text-lg text-white/86">
                    ↗
                  </div>
                </div>
                <div className="mt-5 grid gap-3">
                  {[
                    "Private stays with one-bedroom, family, and group-friendly layouts",
                    "Route guidance for wide-water cruising, canal rides, and quieter backwater moods",
                    "Simple WhatsApp planning without forcing guests through cluttered booking steps",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-[1.35rem] border border-white/12 bg-white/8 px-4 py-3"
                    >
                      <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#a8ddd7]" />
                      <span className="text-sm leading-6 text-white/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-[2%] right-[4%] w-[24rem] rounded-[2rem] border border-white/16 bg-[linear-gradient(180deg,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.08)_100%)] p-5 shadow-[0_24px_60px_rgba(0,0,0,0.18)] backdrop-blur-xl">
                <div className="flex items-center justify-between gap-3">
                  <div className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-white/55">
                    Recent guest notes
                  </div>
                  <Link
                    href="/reviews"
                    className="text-xs font-semibold uppercase tracking-[0.18em] text-white/74 transition hover:text-white"
                  >
                    Read more
                  </Link>
                </div>
                <div className="mt-4 grid gap-3">
                  {heroReviews.map((review) => (
                    <div
                      key={`${review.authorName}-${review.publishedLabel}`}
                      className="rounded-[1.35rem] border border-white/12 bg-[rgba(9,20,30,0.18)] p-4"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <div className="text-sm font-semibold text-white">{review.authorName}</div>
                          <div className="text-xs text-white/54">{review.publishedLabel}</div>
                        </div>
                        <div className="rounded-full border border-white/12 bg-white/10 px-2.5 py-1 text-xs font-semibold text-white/84">
                          {review.rating.toFixed(1)} / 5
                        </div>
                      </div>
                      <p className="mt-3 text-sm leading-6 text-white/76">
                        &ldquo;
                        {review.text.length > 118 ? `${review.text.slice(0, 118).trim()}...` : review.text}
                        &rdquo;
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
