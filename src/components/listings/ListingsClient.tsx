"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { motion } from "framer-motion";
import ScrollableImageRow from "@/components/services/ScrollableImageRow";
import { galleryImages } from "@/lib/gallery-data";

const GuestMomentsGallery = dynamic(() => import("./GuestMomentsGallery"), {
  loading: () => (
    <div className="mx-auto mt-8 grid max-w-7xl grid-cols-2 gap-4 px-4 sm:mt-12 sm:grid-cols-3 sm:gap-5 sm:px-6 lg:grid-cols-4 lg:px-8">
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="aspect-[4/5] animate-pulse rounded-[1.75rem] border border-white/10 bg-white/12 shadow-[0_18px_40px_rgba(7,18,26,0.12)]"
        />
      ))}
    </div>
  ),
});

const featuredTiles = [
  {
    image: galleryImages[10],
    className: "sm:col-span-2",
  },
  {
    image: galleryImages[6],
    className: "",
  },
  {
    image: galleryImages[11],
    className: "",
  },
] as const;

const galleryHighlights = [
  "Cinematic daylight and sunset frames",
  "Night shots for contrast and mood",
  "Tap to zoom any image in place",
] as const;

export default function ListingsClient() {
  return (
    <section className="home-water-theme relative overflow-hidden pb-16 sm:pb-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-[28rem] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.75),transparent_28%),radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_32%)]" />
        <div className="absolute inset-x-0 top-[16rem] h-[26rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0)_100%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pt-8 sm:px-6 sm:pt-12 lg:px-8 lg:pt-16">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="rounded-[2.5rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.88)_0%,rgba(247,250,251,0.84)_100%)] p-6 text-[#173247] shadow-[0_24px_70px_rgba(24,44,55,0.08)] backdrop-blur-xl sm:p-8 lg:p-10"
          >
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-teal/80">
              Gallery
            </p>
            <h1 className="mt-3 font-[var(--font-display)] text-[clamp(2.4rem,6vw,5rem)] leading-[0.92] tracking-[-0.05em] text-[#173247]">
              A photo journal of Alleppey backwater moments.
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-foreground/72 sm:text-base sm:leading-8">
              This rebuild leans into mood and rhythm instead of a plain grid: quiet canals,
              bright daytime crossings, glowing sunsets, and a few night shots to keep the story
              moving.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {galleryHighlights.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center rounded-full border border-[#d8e3e7] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#173247]"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                { value: "15", label: "Fresh photos" },
                { value: "4", label: "Mood lanes" },
                { value: "Zoom", label: "Tap to open" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[1.4rem] border border-[#d8e3e7] bg-white px-4 py-4 shadow-[0_14px_28px_rgba(23,50,71,0.06)]"
                >
                  <div className="text-2xl font-semibold text-[#173247]">{stat.value}</div>
                  <div className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#6f95ab]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-navy px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-ink"
              >
                Plan a trip
              </Link>
              <Link
                href="/houseboats"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-navy/12 bg-white/80 px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-navy transition hover:bg-white"
              >
                Explore houseboats
              </Link>
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {featuredTiles.map((tile, index) => (
              <motion.article
                key={tile.image.src}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
                className={[
                  "group overflow-hidden rounded-[2rem] border border-white/80 bg-[linear-gradient(180deg,#ffffff_0%,#f5f8f9_100%)] shadow-[0_18px_50px_rgba(18,44,58,0.08)]",
                  tile.className,
                ].join(" ")}
              >
                <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[4/4.5]">
                  <Image
                    src={tile.image.src}
                    alt={tile.image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 30vw"
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,20,29,0)_0%,rgba(7,20,29,0.02)_36%,rgba(7,20,29,0.5)_100%)]" />
                  <div className="absolute left-4 top-4 rounded-full border border-white/28 bg-white/24 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
                    Featured
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="text-sm font-semibold">{tile.image.title}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/68">
                      {tile.image.location}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="mt-8 rounded-[2rem] border border-[#d8e3e7] bg-white/85 p-4 shadow-[0_18px_40px_rgba(18,44,58,0.05)] backdrop-blur-sm sm:p-5">
          <ScrollableImageRow
            images={galleryImages.slice(0, 4).map((image) => ({
              src: image.src,
              alt: image.alt,
              objectFit: "cover" as const,
              aspectRatio: "16/10",
            }))}
          />
        </div>
      </div>

      <div className="relative mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            {
              title: "Canal rhythm",
              copy: "The image set starts narrow and intimate, then opens into bigger views and brighter skies.",
            },
            {
              title: "Light shifts",
              copy: "Daytime, sunset, and night shots are mixed together so the page feels like a full journey.",
            },
            {
              title: "Simple zoom",
              copy: "Each card opens full-screen, so guests can inspect the scene without leaving the gallery.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-[1.6rem] border border-[#d8e3e7] bg-[linear-gradient(180deg,#ffffff_0%,#f7fbfc_100%)] p-5 shadow-[0_14px_34px_rgba(18,44,58,0.05)]"
            >
              <h2 className="text-lg font-semibold text-[#173247]">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-foreground/70">{item.copy}</p>
            </div>
          ))}
        </div>
      </div>

      <Suspense fallback={null}>
        <GuestMomentsGallery />
      </Suspense>
    </section>
  );
}
