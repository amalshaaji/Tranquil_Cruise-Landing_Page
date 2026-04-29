"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Listing, ListingType } from "@/lib/tranquil-data";
import ImageGallery from "./ImageGallery";

function labelFor(type: ListingType) {
  switch (type) {
    case "houseboat":
      return "Houseboat";
    case "shikkara":
      return "Shikkara Ride";
    case "kayaking":
      return "Kayaking";
    case "room":
      return "Room / Homestay";
  }
}

function Stars({ rating }: { rating: number }) {
  const rounded = Math.round(rating * 10) / 10;
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
      <span className="text-sm font-semibold text-sand">{rounded}</span>
      <span className="text-xs text-foreground/60">rating</span>
    </div>
  );
}

export default function ListingDetailClient({ listing }: { listing: Listing }) {
  const cover = listing.images[0];
  const whatsappHref = `https://wa.me/917994073491?text=${encodeURIComponent(
    `Hi Tranquil Cruise, I would like to check availability for "${listing.title}" in ${listing.location}.`
  )}`;

  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 sm:pb-24">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 text-sm text-foreground/70">
          <Link href="/experience" className="hover:text-foreground">
            Experience
          </Link>
          <span>/</span>
          <span className="text-foreground/90">{labelFor(listing.type)}</span>
        </div>
        <div className="text-xs text-foreground/60">
          Static demo - Client navigation - Fast SSG
        </div>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr,0.8fr] lg:items-start">
        <div className="space-y-6">
          <ImageGallery images={listing.images} title={listing.title} />

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold text-sand">What you will love</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {listing.highlights.map((h) => (
                <motion.div
                  key={h}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  className="rounded-2xl border border-white/10 bg-navy/30 p-4"
                >
                  <div className="text-sm font-semibold text-foreground">
                    {h}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold text-sand">Details</h2>
            <p className="mt-4 text-sm leading-relaxed text-foreground/75">
              {listing.about}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {listing.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-navy/30 px-3 py-1 text-xs text-foreground/75"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <aside className="sticky top-24 space-y-4">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2">
                <div className="text-xs font-semibold text-foreground/70">
                  {labelFor(listing.type)}
                </div>
                <h1 className="text-2xl font-semibold text-sand">
                  {listing.title}
                </h1>
                <div className="text-sm text-foreground/70">
                  {listing.location}
                </div>
              </div>
              <Stars rating={listing.rating} />
            </div>

            <div className="mt-5 grid gap-3">
              <div className="rounded-2xl border border-white/10 bg-navy/30 p-4">
                <div className="text-xs font-semibold text-foreground/70">
                  Starting from
                </div>
                <div className="mt-1 text-2xl font-semibold text-teal">
                  Rs. {listing.priceFrom.toLocaleString("en-IN")}
                  <span className="ml-2 text-sm font-semibold text-foreground/60">
                    / {listing.minGuests}+ guests
                  </span>
                </div>
                <div className="mt-2 text-xs text-foreground/60">
                  {listing.duration} - up to {listing.maxGuests} guests
                </div>
              </div>

              <div className="grid gap-2 sm:grid-cols-2">
                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-teal px-4 py-3 text-sm font-semibold text-ink shadow-sm shadow-teal/20 transition hover:bg-teal/90"
                  onClick={() => {
                    // Static demo UI only: no backend.
                    window.alert(
                      "Request sent (demo). In a real app, this would start a booking flow."
                    );
                  }}
                >
                  Request availability
                </button>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-xl border border-teal/40 bg-navy/40 px-4 py-3 text-sm font-semibold text-sand shadow-sm shadow-navy/40 transition hover:border-teal/70 hover:bg-navy/60"
                >
                  WhatsApp enquiry
                </a>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-xs font-semibold text-foreground/70">
                  Facilities
                </div>
                <ul className="mt-2 space-y-2 text-sm text-foreground/75">
                  {listing.facilities.slice(0, 6).map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-teal" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="hidden overflow-hidden rounded-3xl border border-white/10 bg-navy/20 md:block">
            <div className="relative aspect-[16/10]">
              <Image src={cover} alt="" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/20 to-transparent" />
            </div>
            <div className="p-5">
              <div className="text-xs font-semibold text-foreground/70">
                Luxury moments, curated
              </div>
              <div className="mt-2 text-sm text-foreground/75">
                Premium routes across Alleppey, Kumarakom and beyond.
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

