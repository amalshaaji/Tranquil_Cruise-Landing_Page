"use client";

import { useSearchParams } from "next/navigation";
import ScrollableImageRow from "@/components/services/ScrollableImageRow";

const threeBedroomGalleryImages = [
  {
    src: "/images/three-bedroom-gallery/WhatsApp_Image_2026-05-14_at_18_13_05.jpeg",
    alt: "3 bedroom houseboat vanity area with twin wash basins",
  },
  {
    src: "/images/three-bedroom-gallery/WhatsApp_Image_2026-05-14_at_18_13_05__1_.jpeg",
    alt: "3 bedroom houseboat side corridor with water-facing windows",
  },
  {
    src: "/images/three-bedroom-gallery/WhatsApp_Image_2026-05-14_at_18_13_05__2_.jpeg",
    alt: "3 bedroom houseboat lounge with geometric feature wall",
  },
  {
    src: "/images/three-bedroom-gallery/WhatsApp_Image_2026-05-14_at_18_13_06.jpeg",
    alt: "3 bedroom houseboat exterior view on the backwaters",
  },
  {
    src: "/images/three-bedroom-gallery/WhatsApp_Image_2026-05-14_at_18_13_06__1_.jpeg",
    alt: "3 bedroom houseboat vanity with mirror and textured wall tiles",
  },
  {
    src: "/images/three-bedroom-gallery/WhatsApp_Image_2026-05-14_at_18_13_06__2_.jpeg",
    alt: "3 bedroom houseboat bedroom with floral accent wall",
  },
  {
    src: "/images/three-bedroom-gallery/WhatsApp_Image_2026-05-14_at_18_13_07.jpeg",
    alt: "3 bedroom houseboat bedroom with illuminated golden headboard",
  },
  {
    src: "/images/three-bedroom-gallery/WhatsApp_Image_2026-05-14_at_18_13_07__1_.jpeg",
    alt: "3 bedroom houseboat lounge from a side angle",
  },
  {
    src: "/images/three-bedroom-gallery/WhatsApp_Image_2026-05-14_at_18_13_07__2_.jpeg",
    alt: "3 bedroom houseboat bedroom with red bedspread and warm lighting",
  },
  {
    src: "/images/three-bedroom-gallery/WhatsApp_Image_2026-05-14_at_18_13_08.jpeg",
    alt: "3 bedroom houseboat bedroom view with warm ceiling lighting",
  },
  {
    src: "/images/three-bedroom-gallery/WhatsApp_Image_2026-05-14_at_18_13_08__1_.jpeg",
    alt: "3 bedroom houseboat bedroom front view with red bedspread",
  },
  {
    src: "/images/three-bedroom-gallery/WhatsApp_Image_2026-05-14_at_18_13_08__2_.jpeg",
    alt: "3 bedroom houseboat interior hallway with Mithram sign",
  },
  {
    src: "/images/three-bedroom-gallery/WhatsApp_Image_2026-05-14_at_18_13_09.jpeg",
    alt: "3 bedroom houseboat attached washroom with toilet",
  },
];

export default function ContactHouseboatShowcase() {
  const searchParams = useSearchParams();
  const selectedExperience = searchParams.get("experience");
  const selectedOption = searchParams.get("option");
  const isThreeBedroomHouseboat =
    selectedExperience === "houseboat" && selectedOption === "3-bedroom";

  if (!isThreeBedroomHouseboat) {
    return null;
  }

  return (
    <section className="mb-8 overflow-hidden rounded-[2rem] border border-gold/20 bg-[linear-gradient(135deg,rgba(243,248,250,0.95),rgba(255,255,255,0.98))] p-4 shadow-[0_24px_70px_rgba(23,50,71,0.08)] sm:p-6">
      <div className="mb-5 flex flex-col gap-4 sm:mb-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-teal/78">
            3 Bedroom Houseboat
          </div>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-sand sm:text-4xl">
            Preview the stay before you enquire.
          </h2>
        </div>
        <p className="max-w-2xl text-sm leading-7 text-foreground/68 sm:text-base">
          These photos are now attached to the 3 bedroom enquiry flow, so
          guests landing from the houseboat option can browse the layout,
          bedrooms, lounge, and washroom finishes before sending their request.
        </p>
      </div>

      <ScrollableImageRow images={threeBedroomGalleryImages} />
    </section>
  );
}
