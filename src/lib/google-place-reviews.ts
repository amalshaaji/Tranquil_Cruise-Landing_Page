import "server-only";
import scrapedPlaceData from "../../data/google-place-scrape.json";

const GOOGLE_MAPS_PAGE_URL = "https://maps.app.goo.gl/qiCGqqA2R2u7nVYK7";
const DEFAULT_TEXT_QUERY =
  "Tranquil Cruise, 8/308B Chungam Road, Pallathuruthy, Alappuzha, Kerala 688011";

type GoogleLocalizedText = {
  text?: string;
  languageCode?: string;
};

type GoogleAuthorAttribution = {
  displayName?: string;
  uri?: string;
  photoUri?: string;
};

type GoogleReview = {
  name?: string;
  relativePublishTimeDescription?: string;
  text?: GoogleLocalizedText;
  originalText?: GoogleLocalizedText;
  rating?: number;
  authorAttribution?: GoogleAuthorAttribution;
  publishTime?: string;
  googleMapsUri?: string;
};

type GooglePlace = {
  id?: string;
  displayName?: GoogleLocalizedText;
  rating?: number;
  userRatingCount?: number;
  reviews?: GoogleReview[];
  googleMapsUri?: string;
};

export type PlaceReview = {
  authorName: string;
  authorPhotoUrl: string | null;
  authorProfileUrl: string | null;
  text: string;
  rating: number;
  publishedLabel: string;
  reviewUrl: string | null;
};

export type GooglePlaceReviewData = {
  placeName: string;
  rating: number | null;
  reviewCount: number | null;
  reviews: PlaceReview[];
  mapsUrl: string;
  sortLabel: string;
};

type ScrapedGooglePlaceReviewData = GooglePlaceReviewData & {
  sourceUrl: string;
  resolvedUrl: string;
  scrapedAt: string;
  address: string;
  hours: string;
  category: string;
  instagramUrl: string;
  description: string;
};

function extractText(review: GoogleReview) {
  return review.originalText?.text ?? review.text?.text ?? "";
}

function mapPlace(place: GooglePlace): GooglePlaceReviewData {
  return {
    placeName: place.displayName?.text ?? "Tranquil Cruise",
    rating: place.rating ?? null,
    reviewCount: place.userRatingCount ?? null,
    reviews: (place.reviews ?? [])
      .map((review) => ({
        authorName: review.authorAttribution?.displayName ?? "Google guest",
        authorPhotoUrl: review.authorAttribution?.photoUri ?? null,
        authorProfileUrl: review.authorAttribution?.uri ?? null,
        text: extractText(review),
        rating: review.rating ?? 0,
        publishedLabel:
          review.relativePublishTimeDescription ??
          (review.publishTime
            ? new Intl.DateTimeFormat("en", {
                dateStyle: "medium",
              }).format(new Date(review.publishTime))
            : "Google review"),
        reviewUrl: review.googleMapsUri ?? null,
      }))
      .filter((review) => review.text),
    mapsUrl: GOOGLE_MAPS_PAGE_URL,
    sortLabel: "Sorted by Google relevance",
  };
}

function getScrapedFallbackData(): GooglePlaceReviewData {
  const data = scrapedPlaceData as ScrapedGooglePlaceReviewData;

  return {
    placeName: data.placeName,
    rating: data.rating,
    reviewCount: data.reviewCount,
    reviews: data.reviews,
    mapsUrl: data.mapsUrl,
    sortLabel: data.sortLabel,
  };
}

async function fetchPlaceById(apiKey: string, placeId: string) {
  const response = await fetch(`https://places.googleapis.com/v1/places/${placeId}`, {
    headers: {
      "X-Goog-Api-Key": apiKey,
      "X-Goog-FieldMask":
        "displayName,rating,userRatingCount,reviews,googleMapsUri",
    },
    cache: "no-store",
  });

  if (!response.ok) {
    console.warn("Google Place Details request failed", {
      status: response.status,
      placeId,
    });
    return null;
  }

  return (await response.json()) as GooglePlace;
}

async function fetchPlaceByText(apiKey: string, textQuery: string) {
  const response = await fetch("https://places.googleapis.com/v1/places:searchText", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": apiKey,
      "X-Goog-FieldMask":
        "places.id,places.displayName,places.rating,places.userRatingCount,places.reviews,places.googleMapsUri",
    },
    body: JSON.stringify({
      textQuery,
      maxResultCount: 1,
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    console.warn("Google Text Search request failed", {
      status: response.status,
      textQuery,
    });
    return null;
  }

  const data = (await response.json()) as { places?: GooglePlace[] };
  return data.places?.[0] ?? null;
}

export async function getGooglePlaceReviewData(): Promise<GooglePlaceReviewData | null> {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    return getScrapedFallbackData();
  }

  try {
    const placeId = process.env.GOOGLE_PLACE_ID;
    const textQuery = process.env.GOOGLE_PLACE_TEXT_QUERY ?? DEFAULT_TEXT_QUERY;

    const place = placeId
      ? await fetchPlaceById(apiKey, placeId)
      : await fetchPlaceByText(apiKey, textQuery);

    if (!place) {
      return getScrapedFallbackData();
    }

    return mapPlace(place);
  } catch (error) {
    console.error("Unable to load Google reviews", error);
    return getScrapedFallbackData();
  }
}

export { GOOGLE_MAPS_PAGE_URL };
