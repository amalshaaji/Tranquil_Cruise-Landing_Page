"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Stars } from "@/components/ui/Stars";
import type { Review } from "@/lib/reviews";

const INITIAL = 6;

// Google shows each reviewer with a coloured initial; keep ours on the site palette.
const avatars = ["bg-moss", "bg-clay", "bg-moss-deep", "bg-gold", "bg-mist"];
const avatar = (name: string) => avatars[[...name].reduce((n, c) => n + c.charCodeAt(0), 0) % avatars.length];

function GoogleG() {
  return (
    <svg aria-label="Google" role="img" viewBox="0 0 24 24" className="size-5 shrink-0">
      <path fill="#4285F4" d="M23 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.2a5.3 5.3 0 0 1-2.3 3.5v2.9h3.7c2.2-2 3.4-5 3.4-8.6z" />
      <path fill="#34A853" d="M12 23.5c3.1 0 5.7-1 7.6-2.8l-3.7-2.9c-1 .7-2.3 1.1-3.9 1.1-3 0-5.5-2-6.4-4.7H1.8v3A11.5 11.5 0 0 0 12 23.5z" />
      <path fill="#FBBC05" d="M5.6 14.2a6.9 6.9 0 0 1 0-4.4v-3H1.8a11.5 11.5 0 0 0 0 10.4l3.8-3z" />
      <path fill="#EA4335" d="M12 5.5c1.7 0 3.2.6 4.4 1.7l3.3-3.3A11.5 11.5 0 0 0 1.8 6.8l3.8 3C6.500 7.500 9 5.500 12 5.500z" />
    </svg>
  );
}

export function ReviewCards({ reviews }: { reviews: Review[] }) {
  const [all, setAll] = useState(false);
  const shown = all ? reviews : reviews.slice(0, INITIAL);
  return (
    <>
      {/* Swipeable row on phones, grid from tablet up. */}
      <ul
        className={
          all
            ? "mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            : "-mx-5 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3"
        }
      >
        {shown.map((r, i) => (
          <li key={r.author + i} className={all ? undefined : "w-[85%] shrink-0 snap-center sm:w-auto"}>
            <Reveal delay={(i % 3) * 80} className="h-full">
              <figure className="flex h-full flex-col rounded-soft border border-stone/70 bg-paper p-6">
                <figcaption className="flex items-center gap-3">
                  <span
                    aria-hidden
                    className={`grid size-11 shrink-0 place-items-center rounded-full font-serif text-lg text-paper ${avatar(r.author)}`}
                  >
                    {r.author.trim().charAt(0).toUpperCase()}
                  </span>
                  <span className="min-w-0 flex-1 text-sm leading-snug">
                    <span className="block truncate font-medium text-ink">
                      {r.authorUrl ? (
                        <a href={r.authorUrl} target="_blank" rel="noopener" className="hover:underline">
                          {r.author}
                        </a>
                      ) : (
                        r.author
                      )}
                    </span>
                    <span className="block text-xs text-mist">
                      {r.localGuide && <span className="font-medium text-clay">Local Guide</span>}
                      {r.localGuide && r.stats && " · "}
                      {r.stats}
                    </span>
                  </span>
                  <GoogleG />
                </figcaption>

                <div className="mt-4 flex items-center gap-3">
                  <span role="img" aria-label={`${r.rating ?? 5} out of 5 stars`}>
                    <Stars count={r.rating ?? 5} className="size-3.5" />
                  </span>
                  {r.when && <span className="text-xs text-mist">{r.when}</span>}
                </div>

                <blockquote className="mt-3 flex-1 whitespace-pre-line text-[0.95rem] leading-relaxed">{r.text}</blockquote>

                {r.reply && (
                  <div className="mt-5 rounded-soft bg-sand px-4 py-3 text-sm">
                    <p className="flex flex-wrap items-baseline gap-x-2">
                      <span className="font-medium text-ink">Response from the owner</span>
                      {r.reply.when && <span className="text-xs text-mist">{r.reply.when}</span>}
                    </p>
                    <p className="mt-1 leading-relaxed text-mist">{r.reply.text}</p>
                  </div>
                )}
              </figure>
            </Reveal>
          </li>
        ))}
      </ul>
      {reviews.length > INITIAL && (
        <div className="mt-8 flex justify-center">
          <Button type="button" variant="outline" className="w-full sm:w-auto" onClick={() => setAll(!all)} aria-expanded={all}>
            {all ? "Show fewer reviews" : `Show all ${reviews.length} reviews`}
          </Button>
        </div>
      )}
    </>
  );
}
