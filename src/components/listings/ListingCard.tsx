"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Listing } from "@/lib/tranquil-data";

function Stars({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const remainder = rating - full;
  const stars = Array.from({ length: 5 }, (_, i) => {
    const idx = i + 1;
    const opacity =
      idx <= full ? 1 : idx === full + 1 ? Math.max(0, remainder) : 0.25;
    return (
      <svg
        key={i}
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className="text-teal"
        style={{ opacity }}
      >
        <path
          d="M12 17.3l-6.18 3.25 1.18-6.88L2 8.9l6.91-1L12 1.7l3.09 6.2 6.91 1-4.99 4.77 1.18 6.88L12 17.3Z"
          fill="currentColor"
        />
      </svg>
    );
  });
  return <div className="flex items-center gap-1">{stars}</div>;
}

export default function ListingCard({ listing }: { listing: Listing }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.28, ease: "easeOut" }}
      className="group rounded-3xl border border-white/10 bg-white/5 p-4 shadow-sm shadow-navy/20 transition hover:-translate-y-0.5 hover:border-white/20"
    >
      <Link href={`/experience/${listing.id}`}>
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
          <Image
            src={listing.images[0]}
            alt={listing.title}
            fill
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent opacity-95" />
          <div className="absolute left-3 top-3 rounded-full bg-navy/70 px-3 py-1 text-xs font-semibold text-sand">
            {listing.type === "houseboat"
              ? "Houseboat"
              : listing.type === "shikkara"
              ? "Shikkara"
              : listing.type === "kayaking"
              ? "Kayaking"
              : "Stay"}
          </div>
        </div>

        <div className="mt-4 space-y-2">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-base font-semibold text-foreground">
                {listing.title}
              </h3>
              <p className="mt-1 text-sm text-foreground/70">
                {listing.location}
              </p>
            </div>
            <div className="text-right">
              <div className="text-sm font-semibold text-sand">
                Rs. {listing.priceFrom.toLocaleString("en-IN")}
              </div>
              <div className="text-xs text-foreground/60">from / guest</div>
            </div>
          </div>

          <div className="flex items-center justify-between gap-3">
            <Stars rating={listing.rating} />
            <div className="text-xs text-foreground/60">
              ({listing.reviewsCount})
            </div>
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            {listing.tags.slice(0, 3).map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-navy/30 px-2.5 py-1 text-xs text-foreground/70 transition group-hover:bg-navy/50"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-1 flex items-center justify-between text-xs text-foreground/60">
            <span>Up to {listing.maxGuests} guests</span>
            <span>{listing.duration}</span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

