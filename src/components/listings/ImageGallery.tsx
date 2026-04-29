"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";

export default function ImageGallery({ images, title }: { images: string[]; title: string }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = images[activeIndex] ?? images[0];

  const thumbs = useMemo(() => {
    // Keep thumbs compact: at most 5.
    return images.slice(0, 5);
  }, [images]);

  return (
    <div className="space-y-4">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/10 to-transparent" />
        <div className="relative aspect-[16/10]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.99 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <Image
                src={active}
                alt={`${title} photo ${activeIndex + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 60vw"
                priority={activeIndex === 0}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-1">
        {thumbs.map((src, idx) => {
          const absoluteIndex = idx; // thumbs are slice(0,5)
          const selected = absoluteIndex === activeIndex;
          return (
            <button
              key={src}
              type="button"
              onClick={() => setActiveIndex(absoluteIndex)}
              className={[
                "relative h-14 w-20 shrink-0 overflow-hidden rounded-2xl border bg-navy/20 transition",
                selected ? "border-teal/60 ring-2 ring-teal/20" : "border-white/10 hover:border-white/20",
              ].join(" ")}
              aria-label={`View photo ${absoluteIndex + 1}`}
            >
              <Image src={src} alt="" fill className="object-cover" sizes="80px" />
            </button>
          );
        })}
      </div>
    </div>
  );
}

