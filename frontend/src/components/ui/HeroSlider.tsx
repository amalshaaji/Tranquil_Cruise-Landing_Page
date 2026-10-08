"use client";

import { useEffect, useState } from "react";
import { Photo, type PhotoSpec } from "@/components/ui/Photo";

/** Full-bleed photos that crossfade every few seconds, with dots to jump between them. */
export function HeroSlider({
  photos,
  interval = 5000,
}: {
  photos: PhotoSpec[];
  interval?: number;
}) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || photos.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(
      () => setActive((i) => (i + 1) % photos.length),
      interval,
    );
    return () => clearInterval(t);
  }, [paused, photos.length, interval]);

  return (
    <div
      className="relative h-full w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Photos"
    >
      {photos.map((p, i) => (
        <div
          key={p.src}
          aria-hidden={i !== active}
          className={`absolute inset-0 transition-opacity duration-1000 ease-calm ${i === active ? "opacity-100" : "opacity-0"}`}
        >
          <Photo {...p} sizes="100vw" priority={i === 0} />
        </div>
      ))}
      {photos.length > 1 && (
        <>
          {(["prev", "next"] as const).map((dir) => (
            <button
              key={dir}
              type="button"
              aria-label={dir === "prev" ? "Previous photo" : "Next photo"}
              onClick={() =>
                setActive(
                  (i) =>
                    (i + (dir === "prev" ? -1 : 1) + photos.length) %
                    photos.length,
                )
              }
              className={`absolute top-1/2 z-10 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-paper/85 text-lg text-moss-deep shadow-md backdrop-blur transition hover:bg-paper ${dir === "prev" ? "left-3" : "right-3"}`}
            >
              <span aria-hidden>{dir === "prev" ? "←" : "→"}</span>
            </button>
          ))}
        </>
      )}
      {photos.length > 1 && (
        <div className="absolute inset-x-0 bottom-4 z-10 flex justify-center gap-2">
          {photos.map((p, i) => (
            <button
              key={p.src}
              type="button"
              aria-label={`Show photo ${i + 1} of ${photos.length}`}
              aria-current={i === active}
              onClick={() => setActive(i)}
              className={`h-2 rounded-full transition-all duration-500 ${i === active ? "w-7 bg-paper" : "w-2 bg-paper/60 hover:bg-paper"}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
