"use client";

import Image from "next/image";

const heroDetails = [
  "Featured Kerala Adventures",
];

export default function HeroSection() {
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
        <div className="flex flex-1 items-center pt-4 sm:items-start sm:pt-0">
          <div className="mx-auto flex w-full max-w-7xl justify-start">
            <div className="flex max-w-[20rem] flex-col items-start rounded-[1.7rem] border border-white/12 bg-[rgba(12,31,44,0.26)] px-4 py-5 shadow-[0_18px_50px_rgba(4,13,22,0.16)] backdrop-blur-[6px] sm:max-w-[28rem] sm:rounded-[2rem] sm:px-7 sm:py-8 lg:max-w-[34rem] lg:px-8">
              <span className="mb-2 h-px w-12 bg-white/45 sm:mb-4 sm:w-20" aria-hidden="true" />
              <div className="font-[var(--font-display)] [text-shadow:0_12px_30px_rgba(0,0,0,0.16)]">
                <span className="block bg-[linear-gradient(135deg,#ffffff_0%,#dff7ff_26%,#9fe0d7_52%,#f5d67a_78%,#ffffff_100%)] bg-clip-text text-[clamp(2.1rem,11vw,6.2rem)] font-semibold uppercase leading-[0.86] tracking-[0.14em] text-transparent sm:tracking-[0.24em] lg:max-w-[11ch] lg:text-balance lg:text-[clamp(3.7rem,5vw,5rem)] lg:leading-[0.88] lg:tracking-[0.14em]">
                  Tranquil Cruise
                </span>
              </div>
              <span className="mt-2 max-w-[14rem] bg-[linear-gradient(90deg,#7fd4ff_0%,#ffffff_18%,#ffd86f_48%,#8be0c4_74%,#ffffff_100%)] bg-clip-text text-[0.56rem] font-semibold uppercase tracking-[0.2em] text-transparent sm:mt-5 sm:max-w-none sm:text-[0.68rem] sm:tracking-[0.52em]">
                Alleppey Backwater Houseboats
              </span>
            </div>
          </div>
        </div>

        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-4 sm:gap-8">
          <div className="flex w-full items-end justify-start gap-6">
            <div className="flex max-w-[36rem] flex-1 flex-col items-start rounded-[1.7rem] border border-white/12 bg-[rgba(12,31,44,0.24)] px-4 py-5 text-left shadow-[0_18px_60px_rgba(4,13,22,0.16)] backdrop-blur-[6px] sm:rounded-[2.2rem] sm:px-7 sm:py-8">
              <div className="mb-3 grid w-full max-w-[18rem] grid-cols-1 gap-2 text-[0.56rem] font-medium uppercase tracking-[0.14em] text-white/82 sm:mb-5 sm:flex sm:max-w-none sm:flex-wrap sm:items-center sm:justify-start sm:gap-x-4 sm:gap-y-2 sm:text-[0.68rem] sm:tracking-[0.42em]">
                {heroDetails.map((detail, index) => (
                  <div
                    key={detail}
                    className="flex items-center justify-center rounded-full border border-white/18 bg-white/10 px-3 py-2 backdrop-blur-[2px] sm:gap-4 sm:rounded-none sm:border-0 sm:bg-transparent sm:px-0 sm:py-0 sm:backdrop-blur-0"
                  >
                    <span className="bg-[linear-gradient(90deg,#dff7ff_0%,#ffffff_26%,#9fe0d7_54%,#f5d67a_82%,#ffffff_100%)] bg-clip-text text-transparent">
                      {detail}
                    </span>
                    {index < heroDetails.length - 1 ? (
                      <span className="hidden h-3 w-px bg-white/45 sm:block" />
                    ) : null}
                  </div>
                ))}
              </div>

              <h1 className="max-w-[18rem] bg-[linear-gradient(90deg,#ffffff_0%,#dff7ff_24%,#8fd8cf_52%,#f5d67a_78%,#ffffff_100%)] bg-clip-text text-balance text-[0.92rem] font-semibold uppercase leading-[1.45] tracking-[0.12em] text-transparent sm:max-w-4xl sm:text-[1.7rem] sm:leading-normal sm:tracking-[0.34em]">
                Alappuzha Houseboat Booking and Private Backwater Cruises
              </h1>

              <a
                href="#packages-section"
                className="mt-4 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/50 bg-white/6 text-white transition duration-300 hover:scale-[1.04] hover:bg-white/12 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:mt-7 sm:h-16 sm:w-16"
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
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
