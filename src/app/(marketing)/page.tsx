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
  createOrganizationSchema,
  createReviewSchema,
  createServiceSchema,
  createSpeakableSchema,
  createTouristTripSchema,
  createWebPageSchema,
  createWebSiteSchema,
  generatePageMetadata,
} from "@/lib/seo";
import { BUSINESS_COORDINATES, INSTAGRAM_URL, WHATSAPP_URL } from "@/lib/site";

const INTRO_IMAGE = "/images/home-backwater-houseboats.jpg";

const homepageFaqs = [
  {
    question: "What is the best Shikara boat ride in Alleppey?",
    answer:
      "For most guests, the best Shikara boat ride in Alleppey is a private ride that gives you a quieter route, more flexible timing, and a calmer pace through the backwaters. Tranquil Cruise usually helps guests choose between open stretches, village canals, and softer sunset timing based on the kind of trip they want.",
  },
  {
    question: "How much does a private boat ride in Alleppey cost?",
    answer:
      "The cost of a private boat ride in Alleppey depends on the ride duration, route type, guest count, and whether you want a Shikara ride, a sunset cruise, or a longer backwater experience. The easiest way to get the exact price is to share your date and group size on WhatsApp.",
  },
  {
    question: "Is Shikara better than a houseboat?",
    answer:
      "It depends on the experience you want. A Shikara is usually better for shorter sightseeing, village canal routes, and lighter private rides, while a houseboat is better for guests who want more onboard comfort, meals, deck time, or an overnight backwater stay.",
  },
  {
    question: "How long is the sunset boat ride in Alleppey?",
    answer:
      "A sunset boat ride in Alleppey is usually planned around the evening light window, but the final duration depends on the route and boat type you choose. Many guests prefer a private ride that gives enough time for slower cruising, photos, and a calmer return after sunset.",
  },
  {
    question: "What is the best time for a boat ride in Alleppey?",
    answer:
      "The best time for a boat ride in Alleppey depends on the mood you want. Morning rides are usually calmer and quieter, while sunset rides are popular for softer light and a more romantic backwater atmosphere. Many families also prefer daytime rides for easier sightseeing.",
  },
  {
    question: "Can couples and families book private rides?",
    answer:
      "Yes. Couples, families, and small groups can all book private rides in Alleppey. Private bookings are usually the best option if you want more comfort, flexible pacing, and a route that feels more personal to your trip.",
  },
  {
    question: "Is advance booking required?",
    answer:
      "Advance booking is recommended, especially for sunset slots, weekends, holiday travel, and private rides during busy seasons. Booking early usually gives you better timing options and makes it easier to match the right route and boat format.",
  },
  {
    question: "What is the difference between a private boat ride and a village boat tour in Alleppey?",
    answer:
      "A private boat ride is the broader booking idea, while a village boat tour is a more specific route style focused on quieter canals, local life, and a stronger rural backwater feel in Alappuzha and Alleppey.",
  },
  {
    question: "Are sunrise boat rides in Alleppey worth it?",
    answer:
      "Yes. Sunrise rides are often worth it for travelers who want calmer water, cooler air, softer reflections, and a more peaceful Kerala backwater atmosphere than the busier parts of the day.",
  },
  {
    question: "Are sunset boat rides in Alleppey good for couples?",
    answer:
      "Yes. Sunset rides are one of the strongest choices for couples because the evening light, wider backwater views, and slower pace create a more romantic setting.",
  },
  {
    question: "Which Alleppey boat ride is best for families with children?",
    answer:
      "A private family boat ride or a comfortable shikara ride is usually best because the route can be kept moderate, the seating is easier, and the pace can match children and older family members.",
  },
  {
    question: "Can I do Alleppey in one day?",
    answer:
      "Yes. Many travelers enjoy Alleppey in one day by choosing one strong backwater experience such as a private shikara, sunrise ride, sunset ride, or village tour and then keeping the rest of the itinerary simple.",
  },
  {
    question: "What parts of Alleppey and Alappuzha do the rides usually cover?",
    answer:
      "Routes can include quieter village canals, sections near Kainakary, broader water around Punnamada Lake, and backwater stretches connected to the wider Vembanad Lake system depending on the ride type and timing.",
  },
  {
    question: "Is WhatsApp the best way to book with Tranquil Cruise?",
    answer:
      "For most travelers, yes. WhatsApp is usually the quickest way to share your date, group size, preferred timing, and the kind of Kerala backwater experience you want so the right route and boat can be suggested quickly.",
  },
];

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata({
    title: "Alleppey Shikara Boat Ride | Private Backwater Cruise",
    description:
      "Book a private Alleppey Shikara boat ride with Tranquil Cruise. Explore Kerala backwaters, sunset cruises, village tours, and family-friendly experiences.",
    path: "/",
    keywords: [
      "Alappuzha houseboat",
      "Alappuzha houseboat booking",
      "Alleppey houseboat",
      "Alappuzha Alleppey houseboat",
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
  const displayedReviews = googleReviewData?.reviews ?? [];
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
      "Tranquil Cruise is a local Alleppey and Alappuzha, Kerala backwater business offering private shikara boat rides, private boat rides, sunset boat rides, and backwater cruise experiences, along with houseboats, kayaking, rooms, and wellness options.",
    image: {
      path: "/images/home-hero-rainbow-houseboat.jpg",
      alt: "Private Shikara boat ride in Alleppey backwaters",
      width: 1200,
      height: 630,
    },
    images: [
      {
        path: "/images/home-hero-rainbow-houseboat.jpg",
        alt: "Private Shikara boat ride in Alleppey backwaters",
        width: 1200,
        height: 630,
      },
      {
        path: INTRO_IMAGE,
        alt: "Kerala backwater cruise through Alleppey canals",
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
      { name: "Alleppey Shikara Boat Ride", path: "/shikkara" },
      { name: "Private Boat Ride Alleppey", path: "/shikkara" },
      { name: "Sunset Boat Ride Alleppey", path: "/shikkara" },
      { name: "Best Backwater Cruise Alleppey", path: "/alleppey-backwater-tour" },
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
  const websiteJsonLd = createWebSiteSchema({
    description:
      "Book private Alappuzha houseboats, shikkara rides, day cruises, kayaking, and overnight backwater stays with Tranquil Cruise in Alappuzha.",
    searchTarget: "/alappuzha-houseboat",
  });
  const organizationJsonLd = createOrganizationSchema(
    "Tranquil Cruise is a Kerala backwater travel business focused on Alleppey houseboat booking, private cruises, shikkara rides, kayaking, country boat rides, day cruises, and overnight backwater stays.",
    "Tranquil Cruise is a Kerala backwater travel business focused on Alappuzha and Alleppey houseboat booking, private cruises, shikkara rides, kayaking, country boat rides, day cruises, and overnight backwater stays.",
  );
  const webPageJsonLd = createWebPageSchema({
    path: "/",
    name: "Alleppey Shikara Boat Ride and Private Backwater Cruise Homepage",
    description:
      "Homepage for private Alleppey shikara rides, private boat rides, village tours, sunrise rides, sunset rides, and Kerala backwater travel planning with Tranquil Cruise.",
    image: {
      path: "/images/home-hero-rainbow-houseboat.jpg",
      alt: "Private Alleppey houseboat and backwater skyline",
      width: 1200,
      height: 630,
    },
    breadcrumbName: "Home",
  });
  const speakableJsonLd = createSpeakableSchema({
    path: "/",
    name: "Alleppey Houseboat Booking and Private Backwater Cruises",
    description:
      "Private houseboats, shikkara rides, day cruises, and backwater stays in Alleppey with direct local planning help.",
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
  const reviewJsonLd = displayedReviews.slice(0, 3).map((review) =>
    createReviewSchema({
      authorName: review.authorName,
      reviewBody: review.text,
      reviewRating: review.rating,
      datePublished: review.publishedAt ?? null,
      reviewUrl: review.reviewUrl ?? review.authorProfileUrl ?? null,
    }),
  );

  return (
    <>
      <JsonLd
        data={[
          localBusinessJsonLd,
          websiteJsonLd,
          webPageJsonLd,
          organizationJsonLd,
          speakableJsonLd,
          geoJsonLd,
          breadcrumbJsonLd,
          touristTripJsonLd,
          homepageImageSchema,
          introImageSchema,
          faqJsonLd,
          ...reviewJsonLd,
          ...homepageServiceSchemas,
        ]}
      />
      <ReferenceHomePage
        displayedReviews={displayedReviews}
        reviewSourceNote={reviewSourceNote}
        homepageFaqs={homepageFaqs}
        rating={googleReviewData?.rating ?? null}
        reviewCount={googleReviewData?.reviewCount ?? null}
      />
    </>
  );
}
