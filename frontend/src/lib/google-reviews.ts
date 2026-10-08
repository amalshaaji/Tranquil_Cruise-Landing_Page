import "server-only";
import { reviews as staticReviews, type Review } from "./reviews";
import { site } from "./site";

/**
 * Live Google reviews via the Places API (New). Server-side only, so the key never reaches the browser.
 *
 * Needs GOOGLE_PLACES_API_KEY. GOOGLE_PLACE_ID is optional: without it the place is found by name
 * near the listing's coordinates. Results are cached for an hour (Next ISR), so Google is called
 * about once an hour at most. Google returns up to five reviews per place.
 *
 * Falls back to the hand-pasted reviews in ./reviews.ts, then to just the rating, if the key
 * is missing or Google can't be reached.
 */
const API = process.env.GOOGLE_PLACES_API_BASE ?? "https://places.googleapis.com/v1";
const REVALIDATE = 60 * 60;

export type ReviewsResult = {
  rating: string;
  /** Total number of Google reviews, when known. */
  count?: number;
  reviews: Review[];
  live: boolean;
};

type ApiReview = {
  rating?: number;
  relativePublishTimeDescription?: string;
  text?: { text?: string };
  originalText?: { text?: string };
  authorAttribution?: { displayName?: string; uri?: string };
};

type ApiPlace = { rating?: number; userRatingCount?: number; reviews?: ApiReview[] };

export function parsePlace(place: ApiPlace): ReviewsResult {
  const reviews = (place.reviews ?? []).flatMap((r): Review[] => {
    const text = (r.text?.text ?? r.originalText?.text ?? "").trim();
    const author = r.authorAttribution?.displayName?.trim();
    if (!text || !author) return [];
    return [
      {
        text,
        author,
        when: r.relativePublishTimeDescription,
        rating: r.rating,
        authorUrl: r.authorAttribution?.uri,
      },
    ];
  });
  return {
    rating: place.rating ? place.rating.toFixed(1) : site.googleRating,
    count: place.userRatingCount,
    reviews,
    live: true,
  };
}

async function findPlaceId(key: string): Promise<string | null> {
  if (process.env.GOOGLE_PLACE_ID) return process.env.GOOGLE_PLACE_ID;
  const res = await fetch(`${API}/places:searchText`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": key,
      "X-Goog-FieldMask": "places.id,places.displayName",
    },
    body: JSON.stringify({
      textQuery: "Tranquil Cruise Alappuzha",
      // Pin the search to the listing's location so a same-named business elsewhere can't match.
      locationBias: { circle: { center: { latitude: 9.4895268, longitude: 76.3650316 }, radius: 1000 } },
      maxResultCount: 3,
    }),
    next: { revalidate: 24 * REVALIDATE },
  });
  if (!res.ok) return null;
  const data = (await res.json()) as { places?: Array<{ id: string; displayName?: { text?: string } }> };
  return data.places?.find((p) => p.displayName?.text?.toLowerCase().includes("tranquil"))?.id ?? null;
}

export async function getGoogleReviews(): Promise<ReviewsResult> {
  const fallback: ReviewsResult = { rating: site.googleRating, count: site.googleReviewCount, reviews: staticReviews, live: false };
  const key = process.env.GOOGLE_PLACES_API_KEY;
  if (!key) return fallback;

  try {
    const id = await findPlaceId(key);
    if (!id) return fallback;
    const res = await fetch(`${API}/places/${id}?languageCode=en`, {
      headers: {
        "X-Goog-Api-Key": key,
        "X-Goog-FieldMask":
          "rating,userRatingCount,reviews.rating,reviews.relativePublishTimeDescription,reviews.text,reviews.originalText,reviews.authorAttribution",
      },
      next: { revalidate: REVALIDATE },
    });
    if (!res.ok) return fallback;
    const live = parsePlace((await res.json()) as ApiPlace);
    // Nothing usable from Google (e.g. no written reviews yet): keep pasted ones.
    return live.reviews.length ? live : { ...fallback, rating: live.rating, count: live.count };
  } catch {
    return fallback;
  }
}
