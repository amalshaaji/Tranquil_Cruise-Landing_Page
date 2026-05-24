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
  createServiceSchema,
  createSpeakableSchema,
  createTouristTripSchema,
  generatePageMetadata,
} from "@/lib/seo";
import { BUSINESS_COORDINATES, INSTAGRAM_URL, WHATSAPP_URL } from "@/lib/site";

const INTRO_IMAGE = "/images/home-backwater-houseboats.jpg";

const homepageFaqs = [
  {
    question: "Which is the best houseboat in Alleppey for families?",
    answer:
      "The best houseboat in Alleppey for families is usually a private two-bedroom or three-bedroom option. These houseboats give families separate rooms, more shared lounge space, and a calmer overnight pace on the Kerala backwaters than smaller couple-focused boats.",
  },
  {
    question: "Houseboat vs shikkara in Alleppey: which is better?",
    answer:
      "A houseboat is better when you want more comfort, onboard meals, and enough time to settle into the backwaters. A shikkara is better when you want a shorter, lighter, and more affordable canal ride through Alleppey and Alappuzha.",
  },
  {
    question: "What is the day cruise price in Alleppey?",
    answer:
      "The day cruise price in Alleppey depends on the boat category, route length, meal plan, and guest count. The clearest way to get an accurate quote is to share your date and group size, because private day cruises are usually priced around the exact plan rather than one fixed public rate.",
  },
  {
    question: "Which honeymoon houseboat in Kerala is best for couples?",
    answer:
      "For most couples, the best honeymoon houseboat in Kerala is a private one-bedroom overnight houseboat in Alleppey or Alappuzha. That format gives you sunset cruising, dinner on board, privacy, and a slower romantic backwater rhythm.",
  },
  {
    question: "What is the best time to visit Alleppey?",
    answer:
      "The best time to visit Alleppey depends on whether you want easier sightseeing weather or a greener monsoon mood. Many travelers prefer the more comfortable cruising months for longer open-deck time, while others choose monsoon for a quieter and more atmospheric Kerala backwaters experience.",
  },
];

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata({
    title: "Alleppey Houseboat & Backwater Cruises | Tranquil Cruise",
    description:
      "Book private Alleppey houseboats, shikkara rides, kayaking trails, country boat cruises, and Kerala backwater stays with Tranquil Cruise in Alappuzha.",
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
      googleReviewData?.rating && googleReviewData.reviewCount
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

  const homepageServiceSchemas = [
    createServiceSchema({
      name: "Private Alleppey Houseboats",
      description:
        "Private houseboat stays and day cruises in Alleppey with one-bedroom, family, and group-friendly options across the Kerala backwaters.",
      path: "/houseboats",
      serviceType: "Houseboat cruise",
    }),
    createServiceSchema({
      name: "Private Shikkara Rides in Alleppey",
      description:
        "Private shikkara rides through Alleppey canals for village routes, scenic sightseeing, and slower backwater cruising in Alappuzha.",
      path: "/shikkara",
      serviceType: "Shikkara ride",
    }),
    createServiceSchema({
      name: "Backwater Kayaking in Alappuzha",
      description:
        "Guided kayaking trails through quieter canals and backwater routes in Alleppey and Alappuzha for sunrise, sunset, and beginner-friendly paddling.",
      path: "/kayaking",
      serviceType: "Kayaking tour",
    }),
    createServiceSchema({
      name: "Country Boat Cruises in Alleppey",
      description:
        "Country boat cruises through village canals and quieter Kerala backwater routes for guests who want local scenery and a calmer pace.",
      path: "/canoe-boats",
      serviceType: "Country boat cruise",
    }),
  ];

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
          ...homepageServiceSchemas,
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
