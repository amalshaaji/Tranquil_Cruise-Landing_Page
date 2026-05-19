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

      <div className="mx-auto mt-8 grid max-w-6xl gap-5 px-4 sm:mt-10 sm:px-6 lg:grid-cols-[1.35fr_0.85fr] lg:px-8">
        <div className="rounded-[2rem] border border-navy/10 bg-white/80 p-6 shadow-[0_20px_60px_rgba(8,31,45,0.06)] backdrop-blur-sm sm:p-8">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-teal/80">
            Photo Notes
          </p>
          <h2 className="mt-3 font-[var(--font-display)] text-2xl font-semibold leading-tight text-[#173247] sm:text-[2rem]">
            Real Alleppey, Alappuzha, Kuttanad, and Vembanad backwater moments.
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-foreground/72 sm:text-[0.98rem]">
            This gallery brings together calm canal routes, open Vembanad Lake stretches,
            sunset houseboat scenes, and quieter Kuttanad village edges. Each image carries
            descriptive alt text, geo-relevant filenames, and visible captions so the page
            reads clearly for both guests and search engines.
          </p>
        </div>

        <div className="rounded-[2rem] border border-white/70 bg-[linear-gradient(180deg,#f4fafb_0%,#eef5f6_100%)] p-6 shadow-[0_20px_60px_rgba(8,31,45,0.05)] sm:p-8">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-teal/80">
            Featured Areas
          </p>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {["Alleppey", "Alappuzha", "Kuttanad", "Vembanad Lake", "Kerala Backwaters"].map(
              (area) => (
                <span
                  key={area}
                  className="rounded-full border border-teal/15 bg-white/85 px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#173247]"
                >
                  {area}
                </span>
              ),
            )}
          </div>
          <p className="mt-4 text-sm leading-7 text-foreground/68">
            Visible captions below each photo explain the setting, mood, and route context
            instead of keeping that detail hidden behind hover states alone.
          </p>
        </div>
      </div>

      <Suspense fallback={null}>
        <GuestMomentsGallery />
      </Suspense>
    </section>
  );
}
