"use client";

import { Suspense } from "react";
import GuestMomentsGallery from "./GuestMomentsGallery";
import InnerPageHeader from "@/components/layout/InnerPageHeader";

export default function ListingsClient() {
  return (
    <section className="pb-16 sm:pb-20">
      <InnerPageHeader
        eyebrow="Gallery"
        title="Backwater stories, captured by guests."
        description="A living scrapbook of twilight rides, sunrise silhouettes, and the quiet in-between moments — all shot by real guests on the water."
        crumbs={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
      />

      <Suspense fallback={null}>
        <GuestMomentsGallery />
      </Suspense>
    </section>
  );
}
