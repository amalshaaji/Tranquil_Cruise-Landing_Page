# Gallery images

1. Drop originals (JPG, PNG, HEIC converted to JPG) into `gallery-source/`, named by id,
   e.g. `backwaters-12.jpg`.
2. Run `npm run images`. It resizes to 1800px on the long side, converts to WebP and strips
   location/EXIF data, writing to this folder.
3. Add an entry to `galleryItems` in `src/lib/gallery-data.ts` (caption, alt text, category).

Filter chips appear automatically for categories that have photos.
If you replace a photo but keep the same file name and still see the old one, the image cache
(30 days) is holding it. Use a new file name, or delete `.next/cache/images` and restart.
