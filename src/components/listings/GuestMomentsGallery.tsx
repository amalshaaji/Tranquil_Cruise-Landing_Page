"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const galleryItems = [
  { src: "/images/experience-gallery/IMG_1810.webp", alt: "Guests enjoying a blue country boat ride across the backwaters" },
  { src: "/images/experience-gallery/IMG_3677.webp", alt: "Couple on a country boat ride through the palm-lined backwaters" },
  { src: "/images/experience-gallery/IMG_3781.webp", alt: "Traditional backwater boat resting by the shore" },
  { src: "/images/experience-gallery/IMG_4387.webp", alt: "Golden canal route through the backwaters at sunset" },
  { src: "/images/experience-gallery/IMG_4390.webp", alt: "Kayakers crossing the calm backwaters at dusk" },
  { src: "/images/experience-gallery/IMG_4441.webp", alt: "Soft pink sky above a quiet backwater channel" },
  { src: "/images/experience-gallery/IMG_4442.webp", alt: "Sunset light over a narrow backwater passage" },
  { src: "/images/experience-gallery/IMG_4499.webp", alt: "Evening reflections across a peaceful village canal" },
  { src: "/images/experience-gallery/IMG_4535.webp", alt: "Warm sunset glow over the Kerala backwaters" },
  { src: "/images/experience-gallery/IMG_4536.webp", alt: "Silhouetted trees and canal under a late-evening sky" },
  { src: "/images/experience-gallery/IMG_4539.webp", alt: "Sunset over the canal with palm silhouettes" },
  { src: "/images/experience-gallery/IMG_4575.webp", alt: "Calm orange sunset reflected on the backwaters" },
  { src: "/images/experience-gallery/IMG_4642.webp", alt: "Guest photographing the sunset from a country boat" },
  { src: "/images/experience-gallery/IMG_4699.webp", alt: "Sunlit backwater route with palm trees and open sky" },
  { src: "/images/experience-gallery/IMG_4700.webp", alt: "Boat ride along a canal in the evening light" },
  { src: "/images/experience-gallery/IMG_4709.webp", alt: "Sunset clouds above houseboats on the water" },
  { src: "/images/experience-gallery/IMG_4787.webp", alt: "Wide sunset horizon across the open backwaters" },
  { src: "/images/experience-gallery/IMG_4945.webp", alt: "Orange evening sun over a still canal" },
  { src: "/images/experience-gallery/IMG_6789.webp", alt: "Quiet canal lined with leaning coconut palms" },
  { src: "/images/experience-gallery/IMG_7239.webp", alt: "Guests cruising slowly through a shaded narrow canal" },
] as const;

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
  const activeImage = activeImageIndex !== null ? galleryItems[activeImageIndex] : null;

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
          {galleryItems.map((item, index) => {
            const gallerySize = gallerySizes[index % gallerySizes.length];

            return (
              <motion.button
                key={item.src}
                type="button"
                className={[
                  "group relative overflow-hidden rounded-2xl border border-white/50 shadow-md shadow-black/8 lg:rounded-3xl lg:border-white/40 lg:shadow-lg lg:shadow-black/10",
                  "cursor-zoom-in text-left",
                  gallerySize === "tall"
                    ? "aspect-[3/4] lg:aspect-[4/5]"
                    : "aspect-[4/3] lg:aspect-[5/4]",
                ].join(" ")}
                onClick={() => setActiveImageIndex(index)}
                initial={{ opacity: 0, y: 24, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.04,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                whileHover={{
                  scale: 1.03,
                  zIndex: 20,
                  transition: { duration: 0.25, ease: "easeOut" },
                }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  priority={index < 4}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-3 right-3 rounded-full border border-white/30 bg-black/35 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                  Zoom
                </div>
              </motion.button>
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
              priority
            />
          </div>
        </div>
      ) : null}
    </section>
  );
}
