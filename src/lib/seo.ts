import type { Metadata } from "next";
import {
  BUSINESS_EMAIL,
  BUSINESS_LOCATION,
  BUSINESS_PHONE,
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  SITE_URL,
  SERVICE_AREAS,
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
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
  makesOffer?: Record<string, unknown>[];
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

export function createPageMetadata({
  title,
  description,
  path,
  keywords,
  image,
}: MetadataInput): Metadata {
  const canonicalPath = normalizeSitePath(path);
  const ogImage = image ?? {
    url: DEFAULT_OG_IMAGE,
    width: 4640,
    height: 3739,
    alt: "Private Kerala houseboat in the Alleppey backwaters",
  };

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl(canonicalPath),
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.url],
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
};

export function createServiceSchema({
  name,
  description,
  path,
  serviceType,
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
    address: {
      "@type": "PostalAddress",
      streetAddress: "8/308B Chungam Road, Pallathuruthy",
      addressLocality: "Alappuzha",
      addressRegion: "Kerala",
      postalCode: "688011",
      addressCountry: "IN",
    },
    areaServed: SERVICE_AREAS.map((area) => ({
      "@type": "Place",
      name: area,
    })),
    sameAs,
    makesOffer,
    aggregateRating: aggregateRating
      ? {
          "@type": "AggregateRating",
          ratingValue: aggregateRating.ratingValue,
          reviewCount: aggregateRating.reviewCount,
          bestRating: 5,
          worstRating: 1,
        }
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
