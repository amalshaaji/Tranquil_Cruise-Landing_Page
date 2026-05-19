"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

type ScrollableImage = {
  src: string;
  alt: string;
};

export default function ScrollableImageRow({
  images,
  showFeaturedSpace = true,
  showIntroCopy = true,
}: {
  images: ScrollableImage[];
  showFeaturedSpace?: boolean;
  showIntroCopy?: boolean;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(images.length > 1);
  const activeImage = images[activeIndex];
  const progressPercent = ((activeIndex + 1) / images.length) * 100;

  const updateThumbnailButtons = () => {
    const element = scrollRef.current;
    if (!element) return;
    const maxScrollLeft = element.scrollWidth - element.clientWidth;
    setCanScrollLeft(element.scrollLeft > 8);
    setCanScrollRight(element.scrollLeft < maxScrollLeft - 8);
  };

  const handleThumbnailScroll = (direction: "left" | "right") => {
    const element = scrollRef.current;
    if (!element) return;
    const distance = Math.max(element.clientWidth * 0.72, 220);
    element.scrollBy({
      left: direction === "left" ? -distance : distance,
      behavior: "smooth",
    });
  };

  const selectImage = (index: number) => {
    setActiveIndex(index);
    const element = scrollRef.current;
    if (!element) return;
    const thumbnail = element.children[index] as HTMLElement | undefined;
    thumbnail?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  const showPreviousImage = () => {
    const nextIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
    selectImage(nextIndex);
  };

  const showNextImage = () => {
    const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;
    selectImage(nextIndex);
  };

  useEffect(() => {
    updateThumbnailButtons();
    const element = scrollRef.current;
    if (!element) return;
    element.addEventListener("scroll", updateThumbnailButtons, { passive: true });
    window.addEventListener("resize", updateThumbnailButtons);
    return () => {
      element.removeEventListener("scroll", updateThumbnailButtons);
      window.removeEventListener("resize", updateThumbnailButtons);
    };
  }, []);

  if (images.length === 0) return null;

  return (
    <div className="w-full max-w-full space-y-4 sm:space-y-6">
      {/* --- HEADER SECTION --- */}
      <div className="flex flex-col gap-3 rounded-[1.35rem] border border-navy/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(238,245,248,0.92))] p-3.5 shadow-[0_18px_45px_rgba(23,50,71,0.08)] sm:flex-row sm:items-end sm:justify-between sm:gap-4 sm:rounded-[2rem] sm:p-5">
        <div className="min-w-0 space-y-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-200/70 bg-white/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-teal-700 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
            Gallery Preview
          </div>
          {showIntroCopy ? (
            <div className="space-y-1">
              <h3 className="text-base font-semibold tracking-tight text-[#173247] sm:text-xl">
                Explore the gallery with a cleaner visual flow
              </h3>
              <p className="max-w-xl text-xs leading-relaxed text-foreground/55 sm:text-sm">
                Swipe through the highlights, then tap any frame below to jump to a
                specific view.
              </p>
            </div>
          ) : null}
        </div>

        <div className="hidden sm:flex sm:flex-col sm:items-end sm:justify-end sm:gap-4">
          <div className="min-w-0 text-right">
            <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/35">
              Current View
            </div>
            <div className="mt-1 text-sm font-semibold leading-tight text-[#173247] sm:max-w-[14rem]">
              {activeImage.alt}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={showPreviousImage}
              aria-label="Show previous image"
              className="rounded-full border border-navy/10 bg-white p-3 text-[#173247] shadow-sm transition-all hover:bg-navy-50 active:scale-95"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={showNextImage}
              aria-label="Show next image"
              className="rounded-full bg-[#173247] p-3 text-white shadow-md transition-all hover:bg-[#234760] active:scale-95"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* --- MAIN VIEWER --- */}
      <div className="group relative overflow-hidden rounded-[1.25rem] border border-navy/10 bg-neutral-100 shadow-2xl sm:rounded-[2.5rem]">

        {/* The Image Stage */}
        <div className="relative aspect-[4/5] w-full overflow-hidden min-[420px]:aspect-[1/1] sm:aspect-[16/9]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                sizes="(max-width: 639px) 100vw, (max-width: 1200px) 80vw, 60rem"
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>

          {/* Gradient Overlay for Text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d2231]/80 via-[#0d2231]/10 to-transparent" />

          {/* Mobile Navigation (Floating Glassmorphism) */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-2.5 sm:hidden">
            <button
              onClick={showPreviousImage}
              aria-label="Show previous image"
              className="pointer-events-auto rounded-full border border-white/30 bg-white/20 p-2 text-white backdrop-blur-md active:scale-90"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={showNextImage}
              aria-label="Show next image"
              className="pointer-events-auto rounded-full border border-white/30 bg-white/20 p-2 text-white backdrop-blur-md active:scale-90"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Bottom Info HUD */}
          <div className="absolute bottom-0 left-0 right-0 p-2.5 text-white sm:p-8">
            <div className="flex items-end justify-between gap-2.5 sm:gap-4">
              {showFeaturedSpace ? (
                <div className="max-w-[72%] rounded-[0.95rem] border border-white/15 bg-black/20 px-2.5 py-2 backdrop-blur-md sm:max-w-md sm:rounded-[1.25rem] sm:px-4 sm:py-3">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/65">
                    Featured Space
                  </div>
                  <div className="mt-1 text-xs font-semibold leading-snug text-white sm:text-base">
                    {activeImage.alt}
                  </div>
                </div>
              ) : null}

              <div className="shrink-0 rounded-full border border-white/20 bg-white/20 px-2 py-1 text-[10px] font-bold font-mono backdrop-blur-md sm:px-3 sm:text-xs">
                {activeIndex + 1} / {images.length}
              </div>
            </div>
          </div>
        </div>

        {/* --- THUMBNAIL STRIP --- */}
        <div className="space-y-3 border-t border-navy/5 bg-white p-3 sm:space-y-4 sm:p-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between gap-3">
              <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground/40">
                Selected Frame
              </div>
              <div className="hidden text-xs font-medium text-foreground/45 sm:block">
                Tap thumbnails to switch
              </div>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-[#e6eef2]">
              <motion.div
                className="h-full rounded-full bg-[linear-gradient(90deg,#173247,#2c657d,#3fb8b0)]"
                animate={{ width: `${progressPercent}%` }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              />
            </div>
          </div>

          <div className="rounded-[1.1rem] border border-navy/5 bg-[#f8fbfc] p-2.5 sm:rounded-[1.5rem] sm:p-3">
            <div className="mb-2 text-xs font-semibold leading-relaxed text-[#173247] sm:mb-3 sm:text-[0.95rem]">
              {activeImage.alt}
            </div>

            <div className="flex items-center gap-2 overflow-hidden sm:gap-3">
          {/* Thumbnail Scroll Controls (Desktop Only) */}
              <div className="mr-1 hidden sm:flex items-center gap-2">
                <button
                  onClick={() => handleThumbnailScroll("left")}
                  disabled={!canScrollLeft}
                  aria-label="Scroll thumbnails left"
                  className="rounded-full border border-navy/10 bg-white p-1.5 text-[#173247] disabled:opacity-30"
                >
                  <ChevronLeft size={14} />
                </button>
                <button
                  onClick={() => handleThumbnailScroll("right")}
                  disabled={!canScrollRight}
                  aria-label="Scroll thumbnails right"
                  className="rounded-full border border-navy/10 bg-white p-1.5 text-[#173247] disabled:opacity-30"
                >
                  <ChevronRight size={14} />
                </button>
              </div>

              <div
                ref={scrollRef}
                className="flex min-w-0 w-full snap-x snap-mandatory touch-pan-x flex-nowrap gap-2 overflow-x-auto overscroll-x-contain pb-1 [scrollbar-width:none] [-ms-overflow-style:none] sm:gap-3 [&::-webkit-scrollbar]:hidden"
              >
                {images.map((image, index) => (
                  <button
                    key={image.src}
                    onClick={() => selectImage(index)}
                    aria-label={`Show image ${index + 1}: ${image.alt}`}
                    className={`group relative h-14 w-14 shrink-0 snap-start overflow-hidden rounded-xl border-2 transition-all duration-300 min-[420px]:h-16 min-[420px]:w-16 sm:h-20 sm:w-20 ${index === activeIndex
                        ? "scale-[0.97] border-[#173247] shadow-[0_10px_24px_rgba(23,50,71,0.16)]"
                        : "border-transparent opacity-70 hover:opacity-100"
                      }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="5rem"
                      className="object-cover transition duration-300 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#173247]/35 to-transparent" />
                    {index === activeIndex && (
                      <div className="absolute inset-x-2 bottom-2 h-1 rounded-full bg-white/85" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
