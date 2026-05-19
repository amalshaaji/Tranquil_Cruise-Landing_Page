import type { Metadata } from "next";
import ListingsClient from "@/components/listings/ListingsClient";
import JsonLd from "@/components/seo/JsonLd";
import { galleryImages } from "@/lib/gallery-data";
import { SITE_URL } from "@/lib/site";
import {
  createBreadcrumbSchema,
  createImageObjectSchema,
  generatePageMetadata,
} from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata({
    title: "Gallery | Alleppey Backwaters Photos | Tranquil Cruise",
    description:
      "Browse geo-rich Alleppey, Alappuzha, Kuttanad, and Vembanad backwater gallery photos with descriptive captions from real Tranquil Cruise guest moments.",
    path: "/gallery",
    keywords: [
      "Alleppey gallery",
      "Alappuzha backwater photos",
      "Kuttanad canal images",
      "Vembanad Lake gallery",
      "Kerala backwaters photo gallery",
    ],
    image: {
      url: galleryImages[0].src,
      alt: galleryImages[0].alt,
      width: 1200,
      height: 900,
    },
  });
}

const breadcrumbJsonLd = createBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Gallery", path: "/gallery" },
]);

const collectionPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Tranquil Cruise Gallery",
  description:
    "A descriptive photo gallery of Alleppey, Alappuzha, Kuttanad, and Vembanad backwater moments captured during Tranquil Cruise experiences.",
  url: `${SITE_URL}/gallery`,
  isPartOf: {
    "@type": "WebSite",
    name: "Tranquil Cruise",
    url: SITE_URL,
  },
};

const imageSchemas = galleryImages.map((image) =>
  createImageObjectSchema({
    path: image.src,
    alt: image.alt,
    width: 1200,
    height: 900,
    caption: image.caption,
  }),
);

export default function GalleryPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={collectionPageJsonLd} />
      <JsonLd data={imageSchemas} />
      <ListingsClient />
    </>
  );
}
