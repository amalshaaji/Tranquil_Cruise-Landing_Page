"use client";

import { useState } from "react";
import { Photo, type PhotoSpec } from "@/components/ui/Photo";
import { PhotoChip } from "@/components/ui/PhotoChip";
import { cn } from "@/lib/cn";

export function DetailGallery({ photos, label }: { photos: PhotoSpec[]; label?: string }) {
  const [i, setI] = useState(0);
  return (
    <div>
      <div className="zoom-img relative aspect-[4/3] overflow-hidden rounded-soft sm:aspect-[16/10]">
        <div key={i} className="photo-in absolute inset-0">
        <Photo {...photos[i]} sizes="(min-width:1024px) 700px, 100vw" priority={i === 0} />
        </div>
        {label && <PhotoChip className="left-4 top-4">{label}</PhotoChip>}
        {photos.length > 1 && (
          <PhotoChip className="right-4 top-4">
            {i + 1} / {photos.length}
          </PhotoChip>
        )}
      </div>
      {photos.length > 1 && (
        <div className="mt-3 grid grid-cols-3 gap-3">
          {photos.map((p, n) => (
            <button
              key={p.src + n}
              type="button"
              onClick={() => setI(n)}
              aria-label={`Show photo ${n + 1} of ${photos.length}`}
              aria-current={n === i}
              className={cn(
                "relative aspect-[4/3] overflow-hidden rounded-soft border transition-colors duration-300 ease-calm",
                n === i ? "border-moss" : "border-transparent opacity-80 hover:opacity-100",
              )}
            >
              <Photo {...p} alt="" sizes="220px" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
