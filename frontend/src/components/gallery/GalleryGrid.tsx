"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { categories, ratioClass, type Category, type GalleryItem } from "@/lib/gallery-data";
import { GalleryMedia } from "./GalleryMedia";

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [filter, setFilter] = useState<Category | "all">("all");
  const [open, setOpen] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const touchX = useRef<number | null>(null);

  const chips = categories.filter((c) => c.value === "all" || items.some((i) => i.category === c.value));
  const visible = filter === "all" ? items : items.filter((i) => i.category === filter);
  const current = open !== null ? visible[open] : null;

  const close = useCallback(() => {
    dialog.current?.close();
    setOpen(null);
  }, []);

  const step = useCallback(
    (d: number) => setOpen((i) => (i === null ? i : (i + d + visible.length) % visible.length)),
    [visible.length],
  );

  useEffect(() => {
    if (open !== null && !dialog.current?.open) dialog.current?.showModal();
  }, [open]);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, step]);

  return (
    <>
      <div className="-mx-5 mb-10 overflow-x-auto px-5 [scrollbar-width:none] sm:mx-0 sm:px-0" role="group" aria-label="Filter gallery">
        <div className="flex w-max gap-2 sm:w-auto sm:flex-wrap">
          {chips.map((c) => (
            <button
              key={c.value}
              aria-pressed={filter === c.value}
              onClick={() => {
                setFilter(c.value);
                setOpen(null);
              }}
              className={cn(
                "min-h-11 rounded-full border px-5 text-sm transition-colors duration-300",
                filter === c.value
                  ? "border-moss bg-moss text-paper"
                  : "border-stone text-mist hover:border-ink hover:text-ink",
              )}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      <ul className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>li]:mb-4">
        {visible.map((item, i) => (
          <li key={item.id} className="break-inside-avoid">
            <button
              onClick={() => setOpen(i)}
              aria-label={`View larger: ${item.caption}`}
              className="group relative block w-full overflow-hidden rounded-soft"
            >
              <div className={cn("relative w-full transition-transform duration-700 ease-calm group-hover:scale-[1.03]", ratioClass[item.ratio])}>
                <GalleryMedia item={item} sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" priority={i < 2} />
              </div>
              <span className="absolute inset-x-0 bottom-0 bg-moss-deep/70 px-4 py-3 text-left text-sm text-paper opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 max-sm:opacity-100">
                {item.caption}
              </span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialog}
        onClose={() => setOpen(null)}
        onClick={(e) => e.target === dialog.current && close()}
        aria-label="Gallery image"
        className="m-auto max-h-none max-w-none bg-transparent p-0 backdrop:bg-ink/85"
      >
        {current && (
          <div
            className="flex flex-col items-center gap-4 px-4 py-6"
            onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
            onTouchEnd={(e) => {
              if (touchX.current === null) return;
              const dx = e.changedTouches[0].clientX - touchX.current;
              touchX.current = null;
              if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
            }}
          >
            <div className={cn("relative h-[min(66dvh,720px)] overflow-hidden rounded-soft", ratioClass[current.ratio])} style={{ maxWidth: "92vw" }}>
              <GalleryMedia item={current} sizes="92vw" />
            </div>
            <div className="flex w-full max-w-md items-center justify-between text-paper">
              <button onClick={() => step(-1)} aria-label="Previous image" className="size-11 rounded-full border border-paper/30 hover:bg-paper/10">
                ←
              </button>
              <p className="px-3 text-center text-sm">
                {current.caption}
                <span className="block text-xs text-paper/50">
                  {(open ?? 0) + 1} / {visible.length}
                </span>
              </p>
              <button onClick={() => step(1)} aria-label="Next image" className="size-11 rounded-full border border-paper/30 hover:bg-paper/10">
                →
              </button>
            </div>
            <button onClick={close} className="min-h-11 px-4 text-sm text-paper/70 underline underline-offset-4 hover:text-paper">
              Close
            </button>
          </div>
        )}
      </dialog>
    </>
  );
}
