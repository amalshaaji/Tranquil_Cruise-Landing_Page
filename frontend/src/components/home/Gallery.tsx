import { Button } from "@/components/ui/Button";
import { GalleryMedia } from "@/components/gallery/GalleryMedia";
import { Eyebrow, Heading } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/cn";
import { getGallery } from "@/lib/gallery";

// Picks from the full gallery: [id, grid span classes].
const picks: Array<[string, string]> = [
  ["backwaters-1", "md:col-span-2 md:row-span-2"],
  ["backwaters-3", ""],
  ["kayaking-river", ""],
  ["houseboats-lake", "md:col-span-2"],
];

export function Gallery() {
  const all = getGallery();
  const frames = picks.flatMap(([id, span]) => {
    const item = all.find((i) => i.id === id);
    return item ? [{ item, span }] : [];
  });

  return (
    <Section id="gallery">
      <Reveal className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <Eyebrow>Gallery</Eyebrow>
          <Heading>Hours on the water</Heading>
        </div>
        <Button href="/gallery" className="w-full sm:w-auto">
          View full gallery
        </Button>
      </Reveal>
      <div className="grid auto-rows-[220px] gap-4 sm:auto-rows-[240px] md:grid-cols-4">
        {frames.map(({ item, span }, i) => (
          <Reveal key={item.id} delay={i * 70} className={cn("relative min-h-[220px]", span)}>
            <figure className="group relative h-full overflow-hidden rounded-soft">
              <div className="relative h-full transition-transform duration-700 ease-calm group-hover:scale-105">
                <GalleryMedia item={item} sizes="(min-width:1024px) 50vw, 100vw" />
              </div>
              <figcaption className="absolute bottom-3 left-3 rounded-full bg-paper/90 px-3 py-1 text-xs text-ink">
                {item.caption}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
