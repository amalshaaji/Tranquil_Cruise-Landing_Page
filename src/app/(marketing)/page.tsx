import type { Metadata } from "next";
import ReferenceHomePage from "@/components/home/ReferenceHomePage";
import JsonLd from "@/components/seo/JsonLd";
import {
  getGooglePlaceReviewData,
  GOOGLE_MAPS_PAGE_URL,
} from "@/lib/google-place-reviews";
import {
  createBreadcrumbSchema,
  createFaqSchema,
  createImageObjectSchema,
  createLocalBusinessSchema,
  createReviewSchema,
  createSpeakableSchema,
  createTouristTripSchema,
  generatePageMetadata,
} from "@/lib/seo";
import { BUSINESS_COORDINATES, INSTAGRAM_URL, WHATSAPP_URL } from "@/lib/site";

const INTRO_IMAGE = "/images/home-backwater-houseboats.jpg";

const homepageFaqs = [
  {
    question: "Which is the best houseboat in Alappuzha for families?",
    answer:
      "For families, two-bedroom and three-bedroom houseboats are usually the easiest fit because they offer separate rooms, more shared lounge space, and a slower overnight rhythm on the backwaters.",
  },
  {
    question: "Is Alleppey the same as Alappuzha when booking a houseboat?",
    answer:
      "Yes. Alleppey and Alappuzha refer to the same destination, so searches for an Alleppey houseboat or a houseboat in Alappuzha usually mean the same backwater region.",
  },
  {
    question: "Should I book a houseboat or a shikkara ride in Alleppey?",
    answer:
      "Choose a houseboat if you want more comfort, onboard time, meals, and an overnight stay. Choose a shikkara ride if you want a shorter scenic trip through narrower canals at a lighter budget.",
  },
  {
    question: "Can I plan a Kerala backwater cruise with custom timing?",
    answer:
      "Yes. Guests often choose morning, afternoon, sunset, or overnight plans based on mood, route type, group size, and how much time they want on the water.",
  },
];

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata({
    title: "Alleppey Houseboat & Backwater Cruises | Tranquil Cruise",
    description:
      "Private houseboats, shikkara rides, country boats, kayaking, backwater rooms, and Ayurvedic wellness in Alleppey, Alappuzha, and the Kerala backwaters.",
    path: "/",
    keywords: [
      "Alleppey houseboat",
      "Alappuzha backwater cruise",
      "Kerala backwaters",
      "private shikkara ride Alleppey",
      "backwater kayaking Alleppey",
      "Alleppey rooms and homestays",
    ],
    image: {
      url: "/images/home-hero-rainbow-houseboat.jpg",
      width: 1200,
      height: 630,
      alt: "Private Kerala houseboat in the Alleppey backwaters",
    },
  });
}

export default async function Home() {
  const googleReviewData = await getGooglePlaceReviewData();
  const displayedReviews = googleReviewData?.reviews.slice(0, 4) ?? [];
  const reviewSortLabel = displayedReviews.length ? googleReviewData?.sortLabel ?? "" : "";
  const reviewSourceNote = reviewSortLabel.startsWith("Visible snippets scraped")
    ? "Showing recent Google review highlights."
    : reviewSortLabel;

  const homepageImageSchema = createImageObjectSchema({
    path: "/images/home-hero-rainbow-houseboat.jpg",
    alt: "Private Alleppey houseboat cruising through the Kerala backwaters beneath a rainbow",
    width: 1200,
    height: 630,
  });

  const introImageSchema = createImageObjectSchema({
    path: INTRO_IMAGE,
    alt: "Houseboats and backwater scenery in Alleppey",
    width: 1200,
    height: 630,
  });

  const reviewSchemas = displayedReviews.map((review) =>
    createReviewSchema({
      authorName: review.authorName,
      reviewBody: review.text,
      reviewRating: review.rating,
      datePublished: review.publishedAt,
      reviewUrl: review.reviewUrl,
    }),
  );

  const localBusinessJsonLd = createLocalBusinessSchema({
    description:
      "Tranquil Cruise offers private houseboats, shikkara rides, country boat tours, kayaking, backwater rooms, and Ayurvedic wellness in Alleppey and the Kerala backwaters.",
    image: {
      path: "/images/home-hero-rainbow-houseboat.jpg",
      alt: "Private Kerala houseboat in the Alleppey backwaters",
      width: 1200,
      height: 630,
    },
    images: [
      {
        path: "/images/home-hero-rainbow-houseboat.jpg",
        alt: "Private Kerala houseboat in the Alleppey backwaters",
        width: 1200,
        height: 630,
      },
      {
        path: INTRO_IMAGE,
        alt: "Houseboats and backwater scenery in Alleppey",
        width: 1200,
        height: 630,
      },
    ],
    sameAs: [GOOGLE_MAPS_PAGE_URL, WHATSAPP_URL, INSTAGRAM_URL],
    aggregateRating:
      googleReviewData?.rating && googleReviewData?.reviewCount
        ? {
            ratingValue: googleReviewData.rating,
            reviewCount: googleReviewData.reviewCount,
          }
        : undefined,
    makesOffer: [
      { name: "Luxury Houseboat Stay", path: "/houseboats" },
      { name: "Shikkara Rides", path: "/shikkara" },
      { name: "Village Country Boat Rides", path: "/canoe-boats" },
      { name: "Backwater Kayaking", path: "/kayaking" },
      { name: "Ayurvedic Spa", path: "/spa" },
      { name: "Waterside Rooms", path: "/rooms" },
    ],
    geo: BUSINESS_COORDINATES,
  });

  const touristTripJsonLd = createTouristTripSchema({
    name: "Alleppey Houseboat and Backwater Experience",
    description:
      "Private Kerala backwater experiences in Alleppey including houseboats, shikkara rides, village country boats, kayaking, and waterside stays.",
    path: "/houseboats",
    image: {
      path: "/images/home-hero-rainbow-houseboat.jpg",
      alt: "Private Kerala houseboat in the Alleppey backwaters",
      width: 1200,
      height: 630,
    },
    itinerary: ["Alleppey", "Alappuzha", "Kuttanad", "Vembanad Lake"],
    touristType: ["Couples", "Families", "Private groups"],
    keywords: ["Alleppey houseboat", "Kerala backwater cruise", "Alappuzha boat tour"],
  });

  const breadcrumbJsonLd = createBreadcrumbSchema([{ name: "Home", path: "/" }]);
  const faqJsonLd = createFaqSchema(homepageFaqs);
  const speakableJsonLd = createSpeakableSchema({
    path: "/",
    name: "Alleppey Houseboat & Backwater Cruises",
    description:
      "Private houseboats, shikkara rides, and backwater stays in Alleppey with direct planning help.",
    cssSelectors: ["main h1", "main section:nth-of-type(3) h2"],
  });

  const geoJsonLd = {
    "@context": "https://schema.org",
    "@type": "Place",
    name: "Tranquil Cruise Alappuzha",
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS_COORDINATES.latitude,
      longitude: BUSINESS_COORDINATES.longitude,
    },
  };

  return (
    <>
      <JsonLd
        data={[
          localBusinessJsonLd,
          speakableJsonLd,
          geoJsonLd,
          breadcrumbJsonLd,
          touristTripJsonLd,
          homepageImageSchema,
          introImageSchema,
          faqJsonLd,
          ...reviewSchemas,
        ]}
      />

      <ReferenceHomePage
        displayedReviews={displayedReviews}
        reviewSourceNote={reviewSourceNote}
        homepageFaqs={homepageFaqs}
      />
    </>
  );
}
