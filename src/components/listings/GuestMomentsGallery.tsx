"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { galleryImages } from "@/lib/gallery-data";

const moodLabels = {
  calm: "Calm Routes",
  sunset: "Golden Hour",
  shared: "Shared Trips",
  night: "Night Light",
} as const;

const moodOrder = ["calm", "sunset", "shared", "night"] as const;

export default function GuestMomentsGallery() {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const activeImage = activeImageIndex !== null ? galleryImages[activeImageIndex] : null;
  const featuredIndexes = [10, 0, 11] as const;
  const featuredIndexSet = new Set<number>(featuredIndexes);
  const featuredImages = featuredIndexes.map((index) => ({ image: galleryImages[index], index }));
  const remainingImages = galleryImages
    .map((image, index) => ({ image, index }))
    .filter(({ index }) => !featuredIndexSet.has(index));

  useEffect(() => {
    if (activeImageIndex === null) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveImageIndex(null);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeImageIndex]);

  return (
    <section className="relative mx-auto mt-10 max-w-7xl px-4 sm:mt-14 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-[#d8e3e7] bg-[linear-gradient(180deg,rgba(255,255,255,0.94)_0%,rgba(241,247,249,0.9)_100%)] p-4 shadow-[0_24px_70px_rgba(8,31,45,0.06)] sm:p-6 lg:p-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-teal/80">
              Curated Frames
            </p>
            <h2 className="mt-3 font-[var(--font-display)] text-[1.8rem] leading-[0.96] text-[#173247] sm:text-4xl">
              A cleaner wall of canal, lake, and sunset scenes.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {moodOrder.map((mood) => (
              <span
                key={mood}
                className="rounded-full border border-[#d8e3e7] bg-white px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#173247] shadow-[0_10px_22px_rgba(8,31,45,0.04)]"
              >
                {moodLabels[mood]}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-[1.4fr_0.9fr]">
          {featuredImages.map(({ image, index }, featuredPosition) => (
            <motion.figure
              key={image.src}
              className={`group overflow-hidden rounded-[2rem] border border-white/90 bg-[linear-gradient(180deg,#ffffff_0%,#f7f5ef_100%)] shadow-[0_18px_46px_rgba(8,31,45,0.08)] ${
                featuredPosition === 0 ? "lg:row-span-2" : ""
              }`}
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{
                duration: 0.45,
                delay: featuredPosition * 0.04,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{ y: -4, transition: { duration: 0.2, ease: "easeOut" } }}
            >
              <button
                type="button"
                className="relative block h-full w-full cursor-zoom-in text-left"
                onClick={() => setActiveImageIndex(index)}
                aria-label={`Open image: ${image.alt}`}
              >
                <div
                  className={`relative overflow-hidden ${
                    featuredPosition === 0 ? "aspect-[16/11] min-h-[20rem] lg:min-h-[34rem]" : "aspect-[4/3] min-h-[16rem]"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes={
                      featuredPosition === 0
                        ? "(max-width: 1024px) 100vw, 60vw"
                        : "(max-width: 1024px) 100vw, 30vw"
                    }
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,20,29,0)_0%,rgba(7,20,29,0.05)_38%,rgba(7,20,29,0.66)_100%)]" />
                  <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                    <span className="rounded-full border border-white/24 bg-white/16 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
                      {moodLabels[image.mood]}
                    </span>
                    <span className="rounded-full border border-white/24 bg-[#f2c98f]/24 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
                      Featured
                    </span>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                    <p className="text-base font-semibold leading-tight text-white sm:text-lg">
                      {image.title}
                    </p>
                    <p className="mt-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white/70">
                      {image.location}
                    </p>
                  </div>
                </div>
              </button>
            </motion.figure>
          ))}
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {remainingImages.map(({ image, index }, cardIndex) => (
            <motion.figure
              key={image.src}
              className="group overflow-hidden rounded-[1.75rem] border border-white/90 bg-[linear-gradient(180deg,#ffffff_0%,#f7f5ef_100%)] shadow-[0_16px_38px_rgba(8,31,45,0.07)]"
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{
                duration: 0.4,
                delay: cardIndex * 0.02,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{ y: -4, transition: { duration: 0.2, ease: "easeOut" } }}
            >
              <button
                type="button"
                className="relative block w-full cursor-zoom-in text-left"
                onClick={() => setActiveImageIndex(index)}
                aria-label={`Open image: ${image.alt}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,20,29,0)_0%,rgba(7,20,29,0.03)_45%,rgba(7,20,29,0.42)_100%)]" />
                  <div className="absolute left-4 top-4">
                    <span className="rounded-full border border-white/24 bg-white/16 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
                      {moodLabels[image.mood]}
                    </span>
                  </div>
                </div>
                <figcaption className="bg-white px-4 py-4">
                  <p className="text-base font-semibold leading-tight text-[#173247]">{image.title}</p>
                  <p className="mt-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#6f95ab]">
                    {image.location}
                  </p>
                </figcaption>
              </button>
            </motion.figure>
          ))}
        </div>
      </div>

      {activeImage ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#08151b]/82 p-4 backdrop-blur-md sm:p-6"
          onClick={() => setActiveImageIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label={activeImage.alt}
        >
          <button
            type="button"
            className="absolute right-4 top-4 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm transition hover:bg-white/20 sm:right-6 sm:top-6"
            onClick={() => setActiveImageIndex(null)}
          >
            Close
          </button>
          <div
            className="relative h-[80vh] w-full max-w-6xl overflow-hidden rounded-[1.75rem] border border-white/12 bg-[#f5efe4]/10 shadow-[0_24px_80px_rgba(0,0,0,0.34)]"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              sizes="100vw"
              className="object-contain"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#08151b]/88 via-[#08151b]/50 to-transparent px-5 py-6 text-white sm:px-7">
              <p className="text-lg font-semibold leading-tight sm:text-xl">{activeImage.title}</p>
              <p className="mt-2 text-sm font-medium uppercase tracking-[0.18em] text-white/72">
                {activeImage.location}
              </p>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-white/82 sm:text-base">
                {activeImage.caption}
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
