"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import InnerPageHeader from "@/components/layout/InnerPageHeader";

const GuestMomentsGallery = dynamic(() => import("./GuestMomentsGallery"), {
  loading: () => (
    <div className="mx-auto mt-8 grid max-w-[1400px] grid-cols-2 gap-3 px-4 sm:mt-12 sm:grid-cols-3 sm:gap-4 sm:px-6 lg:grid-cols-4 lg:gap-5 lg:px-8">
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="aspect-[4/3] animate-pulse rounded-2xl bg-white/60 shadow-sm lg:rounded-3xl"
        />
      ))}
    </div>
  ),
});

export default function ListingsClient() {
  return (
    <section className="pb-16 sm:pb-20">
      <InnerPageHeader
        eyebrow="Gallery"
        title="Alleppey backwater stories, captured by guests."
        description="A descriptive Tranquil Cruise gallery of Alleppey, Alappuzha, Kuttanad, and Vembanad Lake moments, with real guest photography and captioned backwater scenes."
        crumbs={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
      />

      <Suspense fallback={null}>
        <GuestMomentsGallery />
      </Suspense>
    </section>
  );
}
