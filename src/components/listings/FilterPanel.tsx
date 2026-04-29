"use client";

import type { ListingType } from "@/lib/tranquil-data";

export default function FilterPanel({
  categories,
  selectedTypes,
  setSelectedTypes,
  minGuests,
  setMinGuests,
  priceMax,
  setPriceMax,
  keyword,
  setKeyword,
  sort,
  setSort,
}: {
  categories: { type: ListingType; title: string }[];
  selectedTypes: ListingType[];
  setSelectedTypes: (next: ListingType[]) => void;
  minGuests: number;
  setMinGuests: (n: number) => void;
  priceMax: number;
  setPriceMax: (n: number) => void;
  keyword: string;
  setKeyword: (s: string) => void;
  sort: "recommended" | "priceAsc" | "priceDesc" | "ratingDesc";
  setSort: (v: "recommended" | "priceAsc" | "priceDesc" | "ratingDesc") => void;
}) {
  return (
    <aside className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-base font-semibold text-sand">Filters</h3>
        <button
          type="button"
          onClick={() => {
            setSelectedTypes([]);
            setMinGuests(1);
            setPriceMax(15000);
            setKeyword("");
            setSort("recommended");
          }}
          className="text-xs font-semibold text-foreground/70 transition hover:text-foreground"
        >
          Reset
        </button>
      </div>

      <div className="mt-4 space-y-5">
        <section>
          <div className="text-xs font-semibold text-foreground/70">
            Category
          </div>
          <select
            value={selectedTypes[0] ?? ""}
            onChange={(e) => {
              const next = e.target.value as ListingType | "";
              setSelectedTypes(next ? [next] : []);
            }}
            className="mt-3 w-full rounded-2xl border border-white/10 bg-navy/30 px-3 py-3 text-sm outline-none ring-teal/20 focus:ring-2"
            aria-label="Category"
          >
            <option value="">All categories</option>
            {categories.map((c) => (
              <option key={c.type} value={c.type}>
                {c.title}
              </option>
            ))}
          </select>
        </section>

        <section className="space-y-3">
          <div className="text-xs font-semibold text-foreground/70">Guests</div>
          <select
            value={String(minGuests)}
            onChange={(e) => setMinGuests(Number(e.target.value))}
            className="w-full rounded-2xl border border-white/10 bg-navy/30 px-3 py-3 text-sm outline-none ring-teal/20 focus:ring-2"
          >
            {[1, 2, 3, 4, 5, 6, 8, 10].map((n) => (
              <option key={n} value={n}>
                {n}+
              </option>
            ))}
          </select>
        </section>

        <section className="space-y-3">
          <div className="flex items-center justify-between gap-3">
            <div className="text-xs font-semibold text-foreground/70">Max price</div>
            <div className="text-xs font-semibold text-sand">
              Rs. {priceMax.toLocaleString("en-IN")}
            </div>
          </div>
          <input
            type="range"
            min={1500}
            max={15000}
            step={500}
            value={priceMax}
            onChange={(e) => setPriceMax(Number(e.target.value))}
            className="w-full accent-teal"
          />
          <div className="flex items-center justify-between text-xs text-foreground/55">
            <span>Rs. 1.5k</span>
            <span>Rs. 15k</span>
          </div>
        </section>

        <section className="space-y-3">
          <div className="text-xs font-semibold text-foreground/70">Keyword</div>
          <input
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Try: Alappuzha, romantic, backwaters..."
            className="w-full rounded-2xl border border-white/10 bg-navy/30 px-3 py-3 text-sm text-foreground outline-none ring-teal/20 focus:ring-2"
          />
        </section>

        <section className="space-y-3">
          <div className="text-xs font-semibold text-foreground/70">Sort</div>
          <select
            value={sort}
            onChange={(e) =>
              setSort(e.target.value as typeof sort)
            }
            className="w-full rounded-2xl border border-white/10 bg-navy/30 px-3 py-3 text-sm outline-none ring-teal/20 focus:ring-2"
          >
            <option value="recommended">Recommended</option>
            <option value="priceAsc">Price: Low to High</option>
            <option value="priceDesc">Price: High to Low</option>
            <option value="ratingDesc">Top Rated</option>
          </select>
        </section>
      </div>
    </aside>
  );
}

