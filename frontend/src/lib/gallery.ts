import "server-only";
import { existsSync } from "node:fs";
import path from "node:path";
import { galleryItems, type GalleryItem } from "./gallery-data";

const EXTENSIONS = ["webp", "avif", "jpg", "jpeg", "png"];

/** Gallery items, with `src` set for each one that has a real file in public/gallery/. */
export function getGallery(): GalleryItem[] {
  const dir = path.join(process.cwd(), "public", "gallery");
  return galleryItems.map((item) => {
    if (item.src) return item;
    const ext = EXTENSIONS.find((e) => existsSync(path.join(dir, `${item.id}.${e}`)));
    return ext ? { ...item, src: `/gallery/${item.id}.${ext}` } : item;
  });
}
