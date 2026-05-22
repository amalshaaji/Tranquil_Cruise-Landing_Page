"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function ServiceGallery({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  if (images.length === 0) return null;

  return (
    <section className="px-4 pb-14 sm:px-6 sm:pb-20">
      <div className="mx-auto max-w-7xl">
        {/* Gallery Grid */}
        {images.length === 1 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative overflow-hidden rounded-3xl border border-navy/10 shadow-[0_18px_50px_rgba(23,50,71,0.08)]"
          >
            <div className="relative aspect-[16/9]">
              <Image
                src={images[0]}
                alt={`${title} in the Alleppey and Alappuzha Kerala backwaters`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 80vw"
              />
            </div>
          </motion.div>
        ) : (
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {images.map((img, idx) => (
              <motion.div
                key={img}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  ease: "easeOut",
                  delay: idx * 0.1,
                }}
                className="group relative min-w-[75vw] flex-shrink-0 snap-start overflow-hidden rounded-3xl border border-navy/10 shadow-[0_16px_44px_rgba(23,50,71,0.08)] sm:min-w-[50vw] lg:min-w-[40vw]"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={img}
                    alt={`${title} gallery view ${idx + 1} in the Kerala backwaters`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 75vw, (max-width: 1024px) 50vw, 40vw"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
