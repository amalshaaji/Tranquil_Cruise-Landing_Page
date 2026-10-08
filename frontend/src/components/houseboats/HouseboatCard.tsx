"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { PhotoChip } from "@/components/ui/PhotoChip";
import { type Houseboat, bedroomsLabel, guestsLabel, priceLabel, sizeName, tiers } from "@/lib/houseboats";
import { BookNowButton } from "./Booking";

/** One bedroom size as a hairline-separated row. A Deluxe / Premium switch changes the boat shown. */
export function HouseboatCard({ options, index }: { options: Houseboat[]; index: number }) {
  const [tier, setTier] = useState(options[0].tier);
  const boat = options.find((b) => b.tier === tier) ?? options[0];
  const href = `/houseboats/${boat.slug}`;
  return (
    <article className="grid items-center gap-6 border-t border-stone py-8 md:grid-cols-12 md:gap-8">
      <Link
        href={href}
        className="zoom-img relative block aspect-[4/3] overflow-hidden rounded-soft md:col-span-4"
        aria-label={`${boat.name} houseboat details`}
        tabIndex={-1}
      >
        <Photo {...boat.photo} sizes="(min-width:768px) 380px, 100vw" />
        <PhotoChip className={`left-3 top-3 ${boat.tier === "premium" ? "!bg-gold !text-ink" : ""}`}>{boat.tier === "premium" ? `★ ${boat.tag}` : boat.tag}</PhotoChip>
        <PhotoChip className="bottom-3 left-3">Sleeps {boat.capacity}</PhotoChip>
      </Link>

      <div className="md:col-span-5">
        <p className="text-xs tracking-[0.18em] text-clay">{String(index + 1).padStart(2, "0")}</p>
        <h4 className="mt-1 font-serif text-2xl sm:text-3xl">{sizeName(boat)}</h4>
        {options.length === 1 && boat.tier === "premium" && (
          <span className="mt-3 inline-block rounded-full bg-gradient-to-br from-gold to-clay px-4 py-1.5 font-serif text-sm text-ink shadow-md ring-2 ring-gold">★ Premium</span>
        )}
        {options.length > 1 && (
          <div
            role="radiogroup"
            aria-label={`${sizeName(boat)} class`}
            className="mt-4 grid max-w-sm grid-cols-2 gap-1.5 rounded-2xl bg-gold/15 p-1.5 ring-1 ring-gold/40"
          >
            {options.map((o) => {
              const label = tiers.find((t) => t.tier === o.tier)?.label;
              const on = o.tier === tier;
              return (
                <button
                  key={o.tier}
                  type="button"
                  role="radio"
                  aria-checked={on}
                  onClick={() => setTier(o.tier)}
                  className={`flex min-h-14 flex-col items-center justify-center rounded-xl px-3 py-2 transition-all duration-300 ease-calm ${
                    o.tier === "premium"
                      ? on
                        ? "bg-gradient-to-br from-gold to-clay text-ink shadow-lg ring-2 ring-gold"
                        : "bg-gold/25 text-moss-deep ring-1 ring-gold/60 hover:bg-gold/40"
                      : on
                        ? "bg-moss text-paper shadow-md"
                        : "text-moss-deep hover:bg-paper/70"
                  }`}
                >
                  <span className="font-serif text-lg leading-none">
                    {o.tier === "premium" && <span aria-hidden>★ </span>}
                    {label}
                  </span>
                  <span className={`mt-1 text-xs ${on ? (o.tier === "premium" ? "text-ink/80" : "text-paper/80") : "text-mist"}`}>
                    {priceLabel(o)} / night
                  </span>
                </button>
              );
            })}
          </div>
        )}
        <p className="mt-3 text-sm text-moss">
          {bedroomsLabel(boat.bedrooms)} · {guestsLabel(boat.capacity)}
        </p>
        <p className="mt-3 max-w-md text-mist">{boat.summary}</p>
        <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
          {boat.amenities.slice(0, 3).map((a) => (
            <li key={a} className="flex items-center gap-2.5 text-sm">
              <span aria-hidden className="size-1.5 shrink-0 rotate-45 bg-gold" />
              {a}
            </li>
          ))}
        </ul>
      </div>

      <div className="md:col-span-3 md:text-right">
        <p className="text-xs text-mist">From</p>
        <p>
          <span className="rounded-soft bg-gold/15 px-2.5 py-0.5 font-serif text-3xl text-moss-deep">{priceLabel(boat)}</span>
          <span className="text-sm text-mist"> / night</span>
        </p>
        <div className="mt-5 grid gap-3">
          <BookNowButton slug={boat.slug} />
          <Button href={href} variant="outline">
            View details
          </Button>
        </div>
      </div>
    </article>
  );
}
