"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type ScrollableImage = {
  src: string;
  alt: string;
};

export default function ScrollableImageRow({
  images,
}: {
  images: ScrollableImage[];
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(images.length > 1);

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
    <div className="mt-4">
      <div className="mb-5 flex items-center justify-between gap-4">
        <div>
          <div className="text-sm font-semibold text-[#173247]">
            Gallery Preview
          </div>
          <div className="mt-1 text-xs uppercase tracking-[0.18em] text-foreground/42">
            Browse the stay one frame at a time
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={showPreviousImage}
            aria-label="Show previous image"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy/10 bg-white text-xl font-semibold text-[#173247] shadow-[0_12px_30px_rgba(23,50,71,0.08)] transition hover:translate-y-[-1px] hover:bg-[#f4f9fb] disabled:cursor-not-allowed disabled:opacity-35"
          >
            ←
          </button>
          <button
            type="button"
            onClick={showNextImage}
            aria-label="Show next image"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#173247] bg-[#173247] text-xl font-semibold text-white shadow-[0_14px_35px_rgba(23,50,71,0.16)] transition hover:translate-y-[-1px] hover:bg-[#234760] disabled:cursor-not-allowed disabled:border-navy/10 disabled:bg-white disabled:text-[#173247] disabled:opacity-45"
          >
            →
          </button>
        </div>
      </div>

      <div className="overflow-hidden rounded-[2rem] border border-navy/8 bg-[linear-gradient(180deg,#ffffff_0%,#f7fbfc_100%)] p-3 shadow-[0_22px_55px_rgba(23,50,71,0.08)]">
        <div className="relative overflow-hidden rounded-[1.6rem] bg-[#edf4f7]">
          <div className="absolute left-4 top-4 z-10 rounded-full bg-white/88 px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#173247] shadow-[0_10px_24px_rgba(23,50,71,0.12)]">
            {activeIndex + 1} / {images.length}
          </div>
          <div className="relative aspect-[16/10] sm:aspect-[16/9]">
            <Image
              src={images[activeIndex].src}
              alt={images[activeIndex].alt}
              fill
              sizes="(max-width: 1024px) 100vw, 60rem"
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between gap-4">
          <div className="text-sm font-medium text-foreground/68">
            {images[activeIndex].alt}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => handleThumbnailScroll("left")}
              disabled={!canScrollLeft}
              aria-label="Scroll thumbnails left"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-navy/10 bg-white text-base font-semibold text-[#173247] shadow-sm transition hover:bg-[#f4f9fb] disabled:cursor-not-allowed disabled:opacity-35"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => handleThumbnailScroll("right")}
              disabled={!canScrollRight}
              aria-label="Scroll thumbnails right"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-navy/10 bg-white text-base font-semibold text-[#173247] shadow-sm transition hover:bg-[#f4f9fb] disabled:cursor-not-allowed disabled:opacity-35"
            >
              →
            </button>
          </div>
        </div>

        <div className="mt-4 overflow-hidden">
          <div
            ref={scrollRef}
            className="flex gap-3 overflow-x-auto pb-2 [scrollbar-width:thin]"
          >
            {images.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => selectImage(index)}
                className={`group relative h-24 w-24 shrink-0 overflow-hidden rounded-[1.1rem] border p-1 transition sm:h-28 sm:w-28 ${
                  index === activeIndex
                    ? "border-[#173247] bg-white shadow-[0_14px_30px_rgba(23,50,71,0.12)]"
                    : "border-navy/10 bg-white/80 hover:border-teal/40"
                }`}
              >
                <div className="relative h-full w-full overflow-hidden rounded-[0.85rem] bg-[#eef4f7]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="7rem"
                    className="object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
