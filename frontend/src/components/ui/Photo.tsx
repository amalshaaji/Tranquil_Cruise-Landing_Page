import Image from "next/image";
import { cn } from "@/lib/cn";

// Neutral sand shown while the photo streams in.
const BLUR =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNlY2U0ZDYiLz48L3N2Zz4=";

export type PhotoSpec = {
  /** Path under /public, e.g. /images/houseboats-lake.webp */
  src: string;
  alt: string;
  /** CSS object-position, e.g. "70% 50%", to keep the subject in frame when cropped. */
  position?: string;
};

/** Optimised photo that fills its (relatively positioned) parent. */
export function Photo({
  src,
  alt,
  position,
  sizes,
  priority,
  quality = 75,
  className,
}: PhotoSpec & { sizes: string; priority?: boolean; quality?: number; className?: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      quality={quality}
      placeholder="blur"
      blurDataURL={BLUR}
      className={cn("object-cover", className)}
      style={position ? { objectPosition: position } : undefined}
    />
  );
}
