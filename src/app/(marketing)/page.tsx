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
    question: "Which is the best houseboat in Alappuzha for families?",
    answer:
      "The best houseboat in Alappuzha for families is usually a two-bedroom or three-bedroom option. These Alleppey houseboat stays give families separate rooms, more shared lounge space, and a calmer overnight pace on the Kerala backwaters, which makes them a better fit than smaller boats for parents, children, or multi-generation trips.",
  },
  {
    question: "Is Alleppey the same as Alappuzha when booking a houseboat?",
    answer:
      "Yes, Alleppey and Alappuzha are the same destination when booking a houseboat. Travelers use both names for the same Kerala backwaters region, so an Alleppey houseboat, an Alappuzha houseboat, and a backwater cruise in Alappuzha usually refer to the same local area and boat routes.",
  },
  {
    question: "Should I book a houseboat or a shikkara ride in Alleppey?",
    answer:
      "Book a houseboat in Alleppey if you want more comfort, meals, and longer time on the water. Choose a shikkara ride in Alappuzha if you want a shorter and more affordable trip through narrow Kerala backwaters canals, especially for sightseeing, village routes, or a quick daytime experience.",
  },
  {
    question: "Can I plan a Kerala backwater cruise with custom timing?",
    answer:
      "Yes, you can plan a Kerala backwater cruise with custom timing in Alleppey or Alappuzha. Many guests choose morning, afternoon, sunset, or overnight houseboat schedules based on group size, route style, and how much time they want on the Kerala backwaters rather than following one fixed departure window.",
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
