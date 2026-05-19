"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { galleryImages } from "@/lib/gallery-data";

const gallerySizes: ("tall" | "wide")[] = [
  "tall",
  "tall",
  "wide",
  "wide",
  "wide",
  "tall",
  "tall",
  "wide",
];

export default function GuestMomentsGallery() {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const activeImage = activeImageIndex !== null ? galleryImages[activeImageIndex] : null;

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
    <section className="relative mt-8 overflow-hidden sm:mt-12">
      <div className="pointer-events-none absolute inset-0 hidden select-none flex-col items-center justify-center lg:flex">
        <motion.div
          className="whitespace-nowrap font-[var(--font-display)] text-[11vw] font-bold uppercase leading-[0.85] tracking-[-0.02em] text-[#173247]/[0.04]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          BACKWATER
        </motion.div>
        <motion.div
          className="whitespace-nowrap font-[var(--font-display)] text-[11vw] font-bold uppercase leading-[0.85] tracking-[-0.02em] text-[#173247]/[0.04]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          STORIES
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-0 flex select-none flex-col items-center justify-center lg:hidden">
        <motion.div
          className="whitespace-nowrap font-[var(--font-display)] text-[18vw] font-bold uppercase leading-[0.85] tracking-[-0.02em] text-[#173247]/[0.04]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          BACK
        </motion.div>
        <motion.div
          className="whitespace-nowrap font-[var(--font-display)] text-[18vw] font-bold uppercase leading-[0.85] tracking-[-0.02em] text-[#173247]/[0.04]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          WATER
        </motion.div>
      </div>

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
          {galleryImages.map((item, index) => {
            const gallerySize = gallerySizes[index % gallerySizes.length];

            return (
              <motion.figure
                key={item.src}
                className={[
                  "group overflow-hidden rounded-2xl border border-white/50 bg-white/92 shadow-md shadow-black/8 lg:rounded-3xl lg:border-white/40 lg:shadow-lg lg:shadow-black/10",
                ].join(" ")}
                initial={{ opacity: 0, y: 24, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.04,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                whileHover={{
                  scale: 1.02,
                  zIndex: 20,
                  transition: { duration: 0.25, ease: "easeOut" },
                }}
              >
                <button
                  type="button"
                  className="relative block w-full cursor-zoom-in text-left"
                  onClick={() => setActiveImageIndex(index)}
                  aria-label={`Open image: ${item.alt}`}
                >
                  <div
                    className={[
                      "relative overflow-hidden",
                      gallerySize === "tall"
                        ? "aspect-[3/4] lg:aspect-[4/5]"
                        : "aspect-[4/3] lg:aspect-[5/4]",
                    ].join(" ")}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="absolute bottom-4 right-4 rounded-full border border-white/30 bg-black/35 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
                      Zoom
                    </div>
                  </div>
                </button>
                <figcaption className="space-y-3 px-4 py-4 sm:px-5">
                  <div>
                    <p className="text-sm font-semibold leading-snug text-[#173247]">
                      {item.title}
                    </p>
                    <p className="mt-1 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-teal/75">
                      {item.location}
                    </p>
                  </div>
                  <p className="text-sm leading-6 text-foreground/72">{item.caption}</p>
                </figcaption>
              </motion.figure>
            );
          })}
        </div>
      </div>

      {activeImage ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#06131c]/88 p-4 backdrop-blur-md sm:p-6"
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
            className="relative h-[80vh] w-full max-w-6xl overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/20 shadow-[0_24px_80px_rgba(0,0,0,0.35)]"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              sizes="100vw"
              className="object-contain"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/88 via-black/45 to-transparent px-5 py-6 text-white sm:px-7">
              <p className="text-lg font-semibold leading-tight sm:text-xl">
                {activeImage.title}
              </p>
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
