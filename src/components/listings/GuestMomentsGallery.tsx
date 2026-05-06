"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type GalleryItem = {
  src: string;
  alt: string;
  title: string;
  note: string;
};

const galleryItems: GalleryItem[] = [
  {
    src: "/images/guest-moments/customer-01.jpg",
    alt: "Soft coral evening sky over the backwaters.",
    title: "Coral glow",
    note: "The kind of sky guests pause for.",
  },
  {
    src: "/images/guest-moments/customer-02.jpg",
    alt: "Palm silhouettes under a blush pink sky.",
    title: "Palm hour",
    note: "Warm light settling over the waterline.",
  },
  {
    src: "/images/guest-moments/customer-03.jpg",
    alt: "Golden sun dropping behind palm trees and village lines.",
    title: "Golden frame",
    note: "Village sunsets from the slower routes.",
  },
  {
    src: "/images/guest-moments/customer-04.jpg",
    alt: "Backwater canal at sunset with boats and warm reflections.",
    title: "Evening canal",
    note: "A favorite guest capture from the ride home.",
  },
  {
    src: "/images/guest-moments/customer-05.jpg",
    alt: "Backwater horizon with violet twilight and a passing boat.",
    title: "Blue hour",
    note: "When the lake turns ink-blue and quiet.",
  },
  {
    src: "/images/guest-moments/customer-06.jpg",
    alt: "Guest on a boat photographing the sunset across the water.",
    title: "Caught in the moment",
    note: "Guests photographing the exact scene in front of them.",
  },
  {
    src: "/images/guest-moments/customer-07.jpg",
    alt: "Gentle pastel dusk over the backwaters.",
    title: "Pastel dusk",
    note: "A softer side of the same shoreline.",
  },
  {
    src: "/images/guest-moments/customer-08.jpg",
    alt: "Sky in deep blue and pink tones above the backwaters.",
    title: "Afterglow",
    note: "The sky keeps changing long after sunset.",
  },
  {
    src: "/images/guest-moments/customer-09.jpg",
    alt: "Blurred pastel scene near the water at twilight.",
    title: "Soft blur",
    note: "A fleeting frame that still holds the feeling.",
  },
  {
    src: "/images/guest-moments/customer-10.jpg",
    alt: "Wide backwater stretch with evening color and calm water.",
    title: "Open water",
    note: "Wide views from the quieter edges of town.",
  },
  {
    src: "/images/guest-moments/customer-11.jpg",
    alt: "Sunset reflections along the backwaters.",
    title: "Low light reflections",
    note: "Soft ripples and long reflections before nightfall.",
  },
  {
    src: "/images/guest-moments/customer-12.jpg",
    alt: "Backwater passage with warm evening tones and boats.",
    title: "Ride back",
    note: "The route home always looks a little cinematic.",
  },
  {
    src: "/images/guest-moments/customer-13.jpg",
    alt: "Vertical sunset scene with palms and evening light.",
    title: "Last light",
    note: "One final stop before the colors fade.",
  },
  {
    src: "/images/guest-moments/customer-14.jpg",
    alt: "Dusky sky with layered color over the backwater horizon.",
    title: "Day's end",
    note: "A calm finish to the gallery sequence.",
  },
  {
    src: "/images/guest-moments/customer-15.png",
    alt: "Guest photo from a tranquil cruise experience on the backwaters.",
    title: "Guest moment 15",
    note: "A fresh memory added from your latest gallery set.",
  },
  {
    src: "/images/guest-moments/customer-16.png",
    alt: "Guest photo from a tranquil cruise experience on the backwaters.",
    title: "Guest moment 16",
    note: "Another candid frame from the water.",
  },
  {
    src: "/images/guest-moments/customer-17.png",
    alt: "Guest photo from a tranquil cruise experience on the backwaters.",
    title: "Guest moment 17",
    note: "Captured during a calm stretch of the ride.",
  },
  {
    src: "/images/guest-moments/customer-18.png",
    alt: "Guest photo from a tranquil cruise experience on the backwaters.",
    title: "Guest moment 18",
    note: "A new highlight added to the guest gallery.",
  },
  {
    src: "/images/guest-moments/customer-19.png",
    alt: "Guest photo from a tranquil cruise experience on the backwaters.",
    title: "Guest moment 19",
    note: "One more view from the backwater journey.",
  },
  {
    src: "/images/guest-moments/customer-20.png",
    alt: "Guest photo from a tranquil cruise experience on the backwaters.",
    title: "Guest moment 20",
    note: "A quiet scene from the latest photo batch.",
  },
  {
    src: "/images/guest-moments/customer-21.png",
    alt: "Guest photo from a tranquil cruise experience on the backwaters.",
    title: "Guest moment 21",
    note: "Added to extend the guest story collection.",
  },
  {
    src: "/images/guest-moments/customer-22.png",
    alt: "Guest photo from a tranquil cruise experience on the backwaters.",
    title: "Guest moment 22",
    note: "Another scenic stop from the latest uploads.",
  },
  {
    src: "/images/guest-moments/customer-23.png",
    alt: "Guest photo from a tranquil cruise experience on the backwaters.",
    title: "Guest moment 23",
    note: "Part of the newest gallery additions.",
  },
  {
    src: "/images/guest-moments/customer-24.png",
    alt: "Guest photo from a tranquil cruise experience on the backwaters.",
    title: "Guest moment 24",
    note: "A guest capture from the later part of the journey.",
  },
  {
    src: "/images/guest-moments/customer-25.png",
    alt: "Guest photo from a tranquil cruise experience on the backwaters.",
    title: "Guest moment 25",
    note: "The newest addition in this gallery update.",
  },
];

const gallerySizes: ("tall" | "short")[] = [
  "tall", "short", "short", "tall",
  "tall", "short", "tall", "short",
  "short", "tall", "short", "tall",
  "tall", "short",
];

function GalleryImage({
  item,
  index,
  onOpen,
}: {
  item: GalleryItem;
  index: number;
  onOpen?: (item: GalleryItem) => void;
}) {
  const gallerySize = gallerySizes[index % gallerySizes.length];

  return (
    <motion.div
      className={[
        "relative overflow-hidden rounded-2xl shadow-md shadow-black/8 border border-white/50",
        gallerySize === "tall"
          ? "aspect-[3/4] lg:aspect-[4/5]"
          : "aspect-[4/3] lg:aspect-[5/4]",
        "lg:rounded-3xl lg:shadow-lg lg:shadow-black/10 lg:border-white/40",
        "group cursor-zoom-in",
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
        scale: 1.04,
        zIndex: 20,
        transition: { duration: 0.25, ease: "easeOut" },
      }}
      onClick={() => onOpen?.(item)}
    >
      <Image
        src={item.src}
        alt={item.alt}
        fill
        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 25vw"
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        priority={index < 4}
      />
      {/* Hover overlay */}
      <div className="absolute inset-0 flex flex-col items-start justify-end bg-gradient-to-t from-black/70 via-transparent to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:p-4">
        <span className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-white/70 sm:text-xs">
          Guest capture
        </span>
        <span className="mt-0.5 text-sm font-semibold text-white sm:mt-1 sm:text-base">
          {item.title}
        </span>
        <span className="mt-0.5 text-[0.65rem] leading-tight text-white/80 line-clamp-2 sm:text-xs">
          {item.note}
        </span>
      </div>
    </motion.div>
  );
}





export default function GuestMomentsGallery() {
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  useEffect(() => {
    if (!activeImage) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveImage(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeImage]);

  return (
    <section className="relative mt-8 overflow-hidden sm:mt-12">
      {/* ─── Large background typography (desktop only) ─── */}
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

      {/* ─── Mobile background text ─── */}
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
          {galleryItems.map((item, index) => (
            <GalleryImage key={item.src} item={item} index={index} onOpen={setActiveImage} />
          ))}
        </div>

        {activeImage ? (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#061018]/88 p-4 backdrop-blur-sm"
            onClick={() => setActiveImage(null)}
          >
            <button
              type="button"
              aria-label="Close image preview"
              className="absolute right-4 top-4 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-white/20"
              onClick={() => setActiveImage(null)}
            >
              Close
            </button>

            <div
              className="relative w-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/12 bg-black/30 shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative aspect-[4/3] max-h-[85vh] w-full">
                <Image
                  src={activeImage.src}
                  alt={activeImage.alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>

              <div className="border-t border-white/10 bg-black/35 px-5 py-4 text-white">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-white/70">
                  Guest capture
                </p>
                <h3 className="mt-2 text-xl font-semibold">{activeImage.title}</h3>
                <p className="mt-2 max-w-2xl text-sm leading-7 text-white/78">
                  {activeImage.note}
                </p>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
