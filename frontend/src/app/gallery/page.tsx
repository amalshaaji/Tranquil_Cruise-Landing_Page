import type { Metadata } from "next";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { pageMetadata } from "@/lib/seo";
import { getGallery } from "@/lib/gallery";

export const metadata: Metadata = pageMetadata({
  title: "Photo Gallery",
  description: "Houseboats, shikkara rides, kayaking, cabins and the Alleppey backwaters in pictures.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Hours on the water."
        lead="Houseboats, canals, cabins and the quiet in between."
      />
      <Section tone="sand">
        <GalleryGrid items={getGallery()} />
      </Section>
    </>
  );
}
