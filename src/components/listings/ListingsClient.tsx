"use client";

import { useMemo, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import type { Category, Listing, ListingType } from "@/lib/tranquil-data";
import FilterPanel from "./FilterPanel";
import ListingCard from "./ListingCard";

function normalizeType(value: string | null): ListingType | null {
  if (!value) return null;
  const v = value.toLowerCase();
  if (v === "houseboat") return "houseboat";
  if (v === "shikkara") return "shikkara";
  if (v === "kayaking") return "kayaking";
  if (v === "room") return "room";
  return null;
}

export default function ListingsClient({
  listings,
  categories,
}: {
  listings: Listing[];
  categories: Category[];
}) {
  const searchParams = useSearchParams();
  const categoryParam = normalizeType(searchParams.get("category"));

  const [selectedTypes, setSelectedTypes] = useState<ListingType[]>([]);
  const [minGuests, setMinGuests] = useState(1);
  const [priceMax, setPriceMax] = useState(15000);
  const [keyword, setKeyword] = useState("");
  const [sort, setSort] = useState<
    "recommended" | "priceAsc" | "priceDesc" | "ratingDesc"
  >("recommended");

  useEffect(() => {
    // Sync the initial type filter with the URL query param.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSelectedTypes(categoryParam ? [categoryParam] : []);
  }, [categoryParam]);

  const filtered = useMemo(() => {
    let result = listings.slice();

    if (selectedTypes.length > 0) {
      result = result.filter((l) => selectedTypes.includes(l.type));
    }

    result = result.filter((l) => l.maxGuests >= minGuests);
    result = result.filter((l) => l.priceFrom <= priceMax);

    const q = keyword.trim().toLowerCase();
    if (q) {
      result = result.filter((l) => {
        const hay = [
          l.title,
          l.subtitle,
          l.location,
          l.duration,
          ...l.tags,
          ...l.highlights,
        ]
          .join(" ")
          .toLowerCase();
        return hay.includes(q);
      });
    }

    const sortKey = sort;
    if (sortKey === "priceAsc") {
      result.sort((a, b) => a.priceFrom - b.priceFrom);
    } else if (sortKey === "priceDesc") {
      result.sort((a, b) => b.priceFrom - a.priceFrom);
    } else if (sortKey === "ratingDesc") {
      result.sort((a, b) => b.rating - a.rating);
    } else {
      // recommended
      result.sort(
        (a, b) => (b.rating - a.rating) || (b.reviewsCount - a.reviewsCount)
      );
    }

    return result;
  }, [keyword, listings, minGuests, priceMax, selectedTypes, sort]);

  const resultsKey = useMemo(() => {
    return JSON.stringify({
      selectedTypes,
      minGuests,
      priceMax,
      keyword: keyword.trim(),
      sort,
    });
  }, [keyword, minGuests, priceMax, selectedTypes, sort]);

  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 sm:pb-20">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-sand sm:text-4xl">
            Experience
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-foreground/75 sm:text-base">
            Filter the static inventory in your browser - no backend required.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground/70">
          Showing <span className="font-semibold text-sand">{filtered.length}</span>{" "}
          options
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[340px,1fr]">
        <div className="lg:sticky lg:top-24">
          <FilterPanel
            categories={categories}
            selectedTypes={selectedTypes}
            setSelectedTypes={setSelectedTypes}
            minGuests={minGuests}
            setMinGuests={setMinGuests}
            priceMax={priceMax}
            setPriceMax={setPriceMax}
            keyword={keyword}
            setKeyword={setKeyword}
            sort={sort}
            setSort={setSort}
          />

          <div className="mt-4 rounded-3xl border border-white/10 bg-navy/30 p-5">
            <div className="text-xs font-semibold text-foreground/70">
              Luxury promise
            </div>
            <div className="mt-2 space-y-2 text-sm text-foreground/75">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-teal" />
                Smooth booking flow (demo UI)
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-teal" />
                Premium Kerala theme & transitions
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-teal" />
                All data from `/data`
              </div>
            </div>
          </div>
        </div>

        <div>
          <AnimatePresence mode="wait">
            <motion.div
              key={resultsKey}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {filtered.length === 0 ? (
                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
                  <div className="text-lg font-semibold text-sand">
                    No matching stays
                  </div>
                  <div className="mt-2 text-sm text-foreground/70">
                    Try widening your price or guest range.
                  </div>
                </div>
              ) : (
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
                  {filtered.map((l) => (
                    <ListingCard key={l.id} listing={l} />
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

