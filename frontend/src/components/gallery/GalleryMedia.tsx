import Image from "next/image";
import { RoomScene, Scene } from "@/components/ui/Illustrations";
import type { GalleryItem } from "@/lib/gallery-data";

// 1×1 sand-coloured pixel shown while the real image streams in.
const BLUR =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNlY2U0ZDYiLz48L3N2Zz4=";

/** Fills its parent. Shows the real photo when present, otherwise the illustrated placeholder. */
export function GalleryMedia({
  item,
  sizes,
  priority,
}: {
  item: GalleryItem;
  sizes: string;
  priority?: boolean;
}) {
  if (item.src) {
    return (
      <Image
        src={item.src}
        alt={item.alt}
        fill
        sizes={sizes}
        quality={75}
        priority={priority}
        placeholder="blur"
        blurDataURL={BLUR}
        className="object-cover"
        style={item.position ? { objectPosition: item.position } : undefined}
      />
    );
  }
  const p = item.placeholder;
  if (!p) return <div className="h-full w-full bg-sand" role="img" aria-label={item.alt} />;
  return p.kind === "room" ? (
    <RoomScene label={item.alt} tone={p.tone} />
  ) : (
    <Scene mood={p.mood} subject={p.subject} label={item.alt} sunX={p.sunX} sunY={p.sunY} scale={p.scale} subjectX={p.subjectX} />
  );
}
