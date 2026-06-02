 "use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type ScrollableImage = {
  src: string;
  alt: string;
  objectPosition?: string;
  objectFit?: "cover" | "contain";
  containerClassName?: string;
  aspectRatio?: string;
};

export default function ScrollableImageRow({
  images,
}: {
  images: ScrollableImage[];
  showFeaturedSpace?: boolean;
  showIntroCopy?: boolean;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const imageCount = images.length;
  const activeImage = images[activeIndex] ?? images[0];

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (imageCount <= 1 || prefersReducedMotion) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % imageCount);
    }, 4500);

    return () => window.clearInterval(interval);
  }, [imageCount, prefersReducedMotion]);

  if (!activeImage) return null;

  const goToPrevious = () => {
    setActiveIndex((current) => (current - 1 + imageCount) % imageCount);
  };

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % imageCount);
  };

  return (
    <div className={`relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 ${activeImage.containerClassName ?? ""}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/10 to-transparent" />
      <div
        className="relative aspect-[16/10]"
        style={activeImage.aspectRatio ? { aspectRatio: activeImage.aspectRatio } : undefined}
      >
        <Image
          src={activeImage.src}
          alt={activeImage.alt}
          fill
          priority={activeIndex === 0}
          loading={activeIndex === 0 ? "eager" : "lazy"}
          fetchPriority={activeIndex === 0 ? "high" : "auto"}
          decoding="async"
          className={activeImage.objectFit === "contain" ? "object-contain" : "object-cover"}
          style={{
            ...(activeImage.objectPosition ? { objectPosition: activeImage.objectPosition } : {}),
            ...(activeImage.objectFit ? { objectFit: activeImage.objectFit } : {}),
          }}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 92vw, 72vw"
        />
      </div>

      {imageCount > 1 ? (
        <>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#173247]/55 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 p-4 sm:p-5">
            <div className="flex items-center gap-2">
              {images.map((image, index) => (
                <button
                  key={`${image.src}-${index}`}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show slide ${index + 1}`}
                  className={`h-2.5 rounded-full transition-all ${
                    index === activeIndex ? "w-8 bg-white" : "w-2.5 bg-white/55 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={goToPrevious}
                aria-label="Previous slide"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                <span aria-hidden="true">←</span>
              </button>
              <button
                type="button"
                onClick={goToNext}
                aria-label="Next slide"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
