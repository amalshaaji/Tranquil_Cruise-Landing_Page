"use client";

import Image from "next/image";

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
        <div className="mx-auto flex w-full max-w-7xl flex-1 items-end justify-start" />
      </div>
    </section>
  );
}
