// Usage: npm run images
// Resizes every photo in gallery-source/ to max 1800px on the long side, converts to WebP
// (EXIF/location data stripped) and writes it to public/gallery/ under the same name.
// Name originals after gallery ids, e.g. gallery-source/houseboats-1.jpg.
import { mkdir, readdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const SRC = "gallery-source";
const OUT = "public/gallery";
await mkdir(OUT, { recursive: true });

const files = (await readdir(SRC)).filter((f) => /\.(jpe?g|png|webp|avif|tiff?|heic)$/i.test(f));
if (!files.length) console.log(`No images found in ${SRC}/`);

for (const f of files) {
  const out = path.join(OUT, `${path.parse(f).name}.webp`);
  const info = await sharp(path.join(SRC, f))
    .rotate() // respect camera orientation before metadata is dropped
    .resize({ width: 1800, height: 1800, fit: "inside", withoutEnlargement: true })
    .webp({ quality: 78 })
    .toFile(out);
  console.log(`${f} → ${out}  ${info.width}×${info.height}  ${(info.size / 1024).toFixed(0)} KB`);
}
