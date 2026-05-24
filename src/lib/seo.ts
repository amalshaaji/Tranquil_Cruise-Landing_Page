import type { Metadata } from "next";
import {
  BUSINESS_COORDINATES,
  BUSINESS_EMAIL,
  BUSINESS_HOURS,
  BUSINESS_LOCATION,
  BUSINESS_PHONE,
  DEFAULT_OG_IMAGE,
  INSTAGRAM_URL,
  SITE_NAME,
  SITE_URL,
  SERVICE_AREAS,
  WHATSAPP_URL,
} from "@/lib/site";

export type FaqItem = {
  question: string;
  answer: string;
};

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export type ImageObjectInput = {
  path: string;
  alt: string;
  width?: number;
  height?: number;
  caption?: string;
};

export type ReviewInput = {
  authorName: string;
  reviewBody: string;
  reviewRating: number;
  datePublished?: string | null;
  publisherName?: string;
  reviewUrl?: string | null;
};

export type GeoCoordinatesInput = {
  latitude: number;
  longitude: number;
};

export type AggregateRatingInput = {
  ratingValue: number;
  reviewCount: number;
};

export type OfferInput = {
  name: string;
  path: string;
  description?: string;
  category?: string;
  price?: number | string;
  priceCurrency?: string;
  availability?: string;
};

export type VideoObjectInput = {
  name: string;
  description: string;
  thumbnail: ImageObjectInput;
  path?: string;
  url?: string;
  embedUrl?: string;
  contentUrl?: string;
  uploadDate?: string;
  duration?: string;
  inLanguage?: string;
};

export type SpeakableInput = {
  path: string;
  name: string;
  description: string;
  cssSelectors?: string[];
  xpaths?: string[];
  pageType?: "WebPage" | "Article";
};

export type TouristTripInput = {
  name: string;
  description: string;
  path: string;
  image?: ImageObjectInput;
  itinerary?: string[];
  touristType?: string[];
  keywords?: string[];
};

export type LocalBusinessInput = {
  description: string;
  path?: string;
  image?: ImageObjectInput;
  images?: ImageObjectInput[];
  sameAs?: string[];
  aggregateRating?: AggregateRatingInput;
  makesOffer?: OfferInput[];
  geo?: GeoCoordinatesInput;
};

export type TravelAgencyInput = {
  description: string;
  path?: string;
  image?: ImageObjectInput;
  sameAs?: string[];
  aggregateRating?: AggregateRatingInput;
  makesOffer?: OfferInput[];
  geo?: GeoCoordinatesInput;
};

export type LodgingBusinessInput = {
  name: string;
  description: string;
  path: string;
  image?: ImageObjectInput;
  amenities?: string[];
};

export type MetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  openGraphType?: "website" | "article";
  robots?: Metadata["robots"];
  image?: {
    url: string;
    width?: number;
    height?: number;
    alt?: string;
  };
};

export function absoluteUrl(path = "/") {
  return new URL(normalizeSitePath(path), SITE_URL).toString();
}

export function normalizeSitePath(path = "/") {
  if (!path || path === "/") {
    return "/";
  }

  const withLeadingSlash = path.startsWith("/") ? path : `/${path}`;
  return withLeadingSlash.replace(/\/+$/, "");
}

function resolveSchemaUrl(url: string) {
  if (/^https?:\/\//.test(url)) {
    return url;
  }

  return absoluteUrl(url);
}

export function createPageMetadata({
  title,
  description,
  path,
  keywords,
  openGraphType = "website",
  robots,
  image,
}: MetadataInput): Metadata {
  const canonicalPath = normalizeSitePath(path);
  const canonicalUrl = absoluteUrl(canonicalPath);
  const ogImage = image ?? {
    url: DEFAULT_OG_IMAGE,
    width: 4640,
    height: 3739,
    alt: "Private Kerala houseboat in the Alleppey backwaters",
  };
  const ogImageUrl = resolveSchemaUrl(ogImage.url);

  return {
    title,
    description,
    keywords,
    category: "travel",
    robots: robots ?? {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      locale: "en_US",
      type: openGraphType,
      images: [
        {
          ...ogImage,
          url: ogImageUrl,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
    },
  };
}

export async function generatePageMetadata(
  input: MetadataInput,
): Promise<Metadata> {
  return createPageMetadata(input);
}

export function createBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function createFaqSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function createImageObjectSchema({
  path,
  alt,
  width,
  height,
  caption,
}: ImageObjectInput) {
  return {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    contentUrl: absoluteUrl(path),
    url: absoluteUrl(path),
    description: alt,
    caption: caption ?? alt,
    width,
    height,
  };
}

export function createGeoCoordinatesSchema({
  latitude,
  longitude,
}: GeoCoordinatesInput) {
  return {
    "@type": "GeoCoordinates",
    latitude,
    longitude,
  };
}

export function createAggregateRatingSchema({
  ratingValue,
  reviewCount,
}: AggregateRatingInput) {
  return {
    "@type": "AggregateRating",
    ratingValue,
    reviewCount,
    bestRating: 5,
    worstRating: 1,
  };
}

export function createOfferSchema({
  name,
  path,
  description,
  category,
  price,
  priceCurrency,
  availability,
}: OfferInput) {
  return {
    "@type": "Offer",
    availability,
    price,
    priceCurrency,
    itemOffered: {
      "@type": "Service",
      name,
      description,
      category,
      url: absoluteUrl(path),
    },
  };
}

export function createVideoObjectSchema({
  name,
  description,
  thumbnail,
  path,
  url,
  embedUrl,
  contentUrl,
  uploadDate,
  duration,
  inLanguage = "en",
}: VideoObjectInput) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name,
    description,
    url: resolveSchemaUrl(url ?? path ?? "/"),
    mainEntityOfPage: path ? absoluteUrl(path) : undefined,
    embedUrl: embedUrl ? resolveSchemaUrl(embedUrl) : undefined,
    contentUrl: contentUrl ? resolveSchemaUrl(contentUrl) : undefined,
    thumbnailUrl: absoluteUrl(thumbnail.path),
    uploadDate,
    duration,
    inLanguage,
  };
}

export function createSpeakableSchema({
  path,
  name,
  description,
  cssSelectors,
  xpaths,
  pageType = "WebPage",
}: SpeakableInput) {
  return {
    "@context": "https://schema.org",
    "@type": pageType,
    name,
    description,
    url: absoluteUrl(path),
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: cssSelectors?.length ? cssSelectors : undefined,
      xpath: xpaths?.length ? xpaths : undefined,
    },
  };
}

export function createReviewSchema({
  authorName,
  reviewBody,
  reviewRating,
  datePublished,
  publisherName = "Google",
  reviewUrl,
}: ReviewInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    author: {
      "@type": "Person",
      name: authorName,
    },
    reviewBody,
    reviewRating: {
      "@type": "Rating",
      ratingValue: reviewRating,
      bestRating: 5,
      worstRating: 1,
    },
    publisher: {
      "@type": "Organization",
      name: publisherName,
    },
    datePublished: datePublished ?? undefined,
    url: reviewUrl ?? undefined,
    itemReviewed: {
      "@type": "LocalBusiness",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

type ServiceSchemaInput = {
  name: string;
  description: string;
  path: string;
  serviceType?: string;
  aggregateRating?: AggregateRatingInput;
  makesOffer?: OfferInput[];
};

export function createServiceSchema({
  name,
  description,
  path,
  serviceType,
  aggregateRating,
  makesOffer,
}: ServiceSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: absoluteUrl(path),
    serviceType,
    provider: {
      "@type": "TravelAgency",
      name: SITE_NAME,
      url: SITE_URL,
    },
    aggregateRating: aggregateRating
      ? createAggregateRatingSchema(aggregateRating)
      : undefined,
    offers: makesOffer?.map((offer) => createOfferSchema(offer)),
    areaServed: [
      { "@type": "Place", name: "Alleppey" },
      { "@type": "Place", name: "Alappuzha" },
      { "@type": "Place", name: "Kuttanad" },
      { "@type": "Place", name: "Vembanad Lake" },
      { "@type": "Place", name: "Kerala Backwaters" },
    ],
  };
}

export function createLocalBusinessSchema({
  description,
  path = "/",
  image,
  images,
  sameAs,
  aggregateRating,
  makesOffer,
  geo = BUSINESS_COORDINATES,
}: LocalBusinessInput) {
  const primaryImage = image ?? {
    path: DEFAULT_OG_IMAGE,
    alt: "Private Kerala houseboat in the Alleppey backwaters",
    width: 4640,
    height: 3739,
  };

  return {
    "@context": "https://schema.org",
    "@type": ["TravelAgency", "LocalBusiness"],
    name: SITE_NAME,
    description,
    url: absoluteUrl(path),
    image: absoluteUrl(primaryImage.path),
    email: BUSINESS_EMAIL,
    telephone: BUSINESS_PHONE,
    openingHours: "Mo-Su 08:00-20:00",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "08:00",
        closes: "20:00",
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "8/308B Chungam Road, Pallathuruthy",
      addressLocality: "Alappuzha",
      addressRegion: "Kerala",
      postalCode: "688011",
      addressCountry: "IN",
    },
    geo: createGeoCoordinatesSchema(geo),
    areaServed: SERVICE_AREAS.map((area) => ({
      "@type": "Place",
      name: area,
    })),
    sameAs,
    makesOffer: makesOffer?.map((offer) => createOfferSchema(offer)),
    aggregateRating: aggregateRating
      ? createAggregateRatingSchema(aggregateRating)
      : undefined,
    photo: (images?.length ? images : [primaryImage]).map((item) => ({
      "@type": "ImageObject",
      contentUrl: absoluteUrl(item.path),
      url: absoluteUrl(item.path),
      description: item.alt,
      caption: item.caption ?? item.alt,
      width: item.width,
      height: item.height,
    })),
  };
}

export function createOrganizationSchema(description: string) {
  return createLocalBusinessSchema({ description });
}

export function createTravelAgencySchema({
  description,
  path = "/",
  image,
  sameAs = [WHATSAPP_URL, INSTAGRAM_URL],
  aggregateRating,
  makesOffer,
  geo = BUSINESS_COORDINATES,
}: TravelAgencyInput) {
  const primaryImage = image ?? {
    path: DEFAULT_OG_IMAGE,
    alt: "Private Kerala houseboat in the Alleppey backwaters",
    width: 4640,
    height: 3739,
  };

  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: SITE_NAME,
    description,
    url: absoluteUrl(path),
    image: absoluteUrl(primaryImage.path),
    email: BUSINESS_EMAIL,
    telephone: BUSINESS_PHONE,
    slogan: "Private Kerala backwater journeys with a calmer local pace.",
    areaServed: SERVICE_AREAS.map((area) => ({
      "@type": "Place",
      name: area,
    })),
    sameAs,
    openingHours: BUSINESS_HOURS,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "08:00",
        closes: "20:00",
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "8/308B Chungam Road, Pallathuruthy",
      addressLocality: "Alappuzha",
      addressRegion: "Kerala",
      postalCode: "688011",
      addressCountry: "IN",
    },
    geo: createGeoCoordinatesSchema(geo),
    aggregateRating: aggregateRating
      ? createAggregateRatingSchema(aggregateRating)
      : undefined,
    makesOffer: makesOffer?.map((offer) => createOfferSchema(offer)),
  };
}

export function createTouristTripSchema({
  name,
  description,
  path,
  image,
  itinerary,
  touristType,
  keywords,
}: TouristTripInput) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name,
    description,
    url: absoluteUrl(path),
    image: image ? absoluteUrl(image.path) : absoluteUrl(DEFAULT_OG_IMAGE),
    keywords,
    touristType,
    itinerary: itinerary?.map((stop) => ({
      "@type": "TouristAttraction",
      name: stop,
      address: {
        "@type": "PostalAddress",
        addressLocality: BUSINESS_LOCATION,
        addressRegion: "Kerala",
        addressCountry: "IN",
      },
    })),
    provider: {
      "@type": "TravelAgency",
      name: SITE_NAME,
      url: SITE_URL,
      telephone: BUSINESS_PHONE,
      email: BUSINESS_EMAIL,
    },
  };
}

export function createLodgingBusinessSchema({
  name,
  description,
  path,
  image,
  amenities,
}: LodgingBusinessInput) {
  return {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name,
    description,
    url: absoluteUrl(path),
    image: image ? absoluteUrl(image.path) : absoluteUrl(DEFAULT_OG_IMAGE),
    address: {
      "@type": "PostalAddress",
      streetAddress: "8/308B Chungam Road, Pallathuruthy",
      addressLocality: "Alappuzha",
      addressRegion: "Kerala",
      postalCode: "688011",
      addressCountry: "IN",
    },
    amenityFeature: amenities?.map((amenity) => ({
      "@type": "LocationFeatureSpecification",
      name: amenity,
      value: true,
    })),
  };
}
