import type { Metadata } from "next";
import ReviewsPageContent from "@/components/reviews/ReviewsPageContent";
import FaqSection from "@/components/seo/FaqSection";
import JsonLd from "@/components/seo/JsonLd";
import {
  GOOGLE_MAPS_PAGE_URL,
  getGooglePlaceReviewData,
} from "@/lib/google-place-reviews";
import { reviewMomentImages } from "@/lib/reviews-page-data";
import {
  createBreadcrumbSchema,
  createFaqSchema,
  createImageObjectSchema,
  createLocalBusinessSchema,
  createReviewSchema,
  generatePageMetadata,
} from "@/lib/seo";
import { SITE_URL, WHATSAPP_URL } from "@/lib/site";
import scrapedPlaceData from "../../../../data/google-place-scrape.json";

const reviewFaqs = [
  {
    question: "Are these Tranquil Cruise reviews taken from real guests?",
    answer:
      "Yes. The text reviews shown here come from Google review data or the latest saved Google review snapshot used by the site when the live feed is unavailable.",
  },
  {
    question: "Do the guest photos on this page match the exact reviewer?",
    answer:
      "Not always. The photos are guest-moment images that help show the trip atmosphere, while the written feedback remains the real verified review excerpt.",
  },
  {
    question: "Where can I verify the latest reviews before booking?",
    answer:
      "Use the Google listing linked on this page to read the most current public reviews, then message Tranquil Cruise on WhatsApp if you want help choosing the right route or stay format.",
  },
];

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata({
    title: "Tranquil Cruise Reviews & Testimonials | Alleppey Guest Feedback",
    description:
      "Read Tranquil Cruise Google reviews, browse guest-photo testimonials, and check live social proof before booking an Alleppey houseboat or Kerala backwater experience.",
    path: "/reviews",
    keywords: [
      "Tranquil Cruise reviews",
      "Alleppey houseboat reviews",
      "Alappuzha guest testimonials",
      "Kerala backwater cruise reviews",
      "Tranquil Cruise Google reviews",
    ],
    image: {
      url: "/images/guest-moments/customer-14.jpg",
      alt: "Guest enjoying a Tranquil Cruise houseboat experience in Alleppey",
      width: 1200,
      height: 1200,
    },
  });
}

export default async function ReviewsPage() {
  const googleReviewData = await getGooglePlaceReviewData();
  const mapsUrl = googleReviewData?.mapsUrl ?? GOOGLE_MAPS_PAGE_URL;
  const reviewSourceNote = googleReviewData?.sortLabel ?? "Showing recent guest review highlights.";
  const displayedReviews = googleReviewData?.reviews.slice(0, 6) ?? [];
  const instagramUrl =
    "instagramUrl" in scrapedPlaceData ? scrapedPlaceData.instagramUrl : null;

  const breadcrumbJsonLd = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Reviews", path: "/reviews" },
  ]);

  const collectionPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Tranquil Cruise Reviews & Testimonials",
    description:
      "A review hub for Tranquil Cruise featuring Google reviews, guest-photo moments, and live social proof for Alleppey backwater experiences.",
    url: `${SITE_URL}/reviews`,
    isPartOf: {
      "@type": "WebSite",
      name: "Tranquil Cruise",
      url: SITE_URL,
    },
  };

  const localBusinessJsonLd = createLocalBusinessSchema({
    path: "/reviews",
    description:
      "Tranquil Cruise guest review hub for Alleppey houseboats, shikara rides, country boats, kayaking, rooms, and Kerala backwater experiences.",
    image: {
      path: reviewMomentImages[0].src,
      alt: reviewMomentImages[0].alt,
      width: 1200,
      height: 1200,
    },
    images: reviewMomentImages.map((image) => ({
      path: image.src,
      alt: image.alt,
      width: 1200,
      height: 1200,
      caption: image.caption,
    })),
    sameAs: [mapsUrl, WHATSAPP_URL, ...(instagramUrl ? [instagramUrl] : [])],
    aggregateRating:
      googleReviewData?.rating && googleReviewData?.reviewCount
        ? {
            ratingValue: googleReviewData.rating,
            reviewCount: googleReviewData.reviewCount,
          }
        : undefined,
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

  const imageSchemas = reviewMomentImages.map((image) =>
    createImageObjectSchema({
      path: image.src,
      alt: image.alt,
      width: 1200,
      height: 1200,
      caption: image.caption,
    }),
  );

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={collectionPageJsonLd} />
      <JsonLd data={localBusinessJsonLd} />
      <JsonLd data={createFaqSchema(reviewFaqs)} />
      <JsonLd data={[...reviewSchemas, ...imageSchemas]} />
      <ReviewsPageContent
        googleReviewData={googleReviewData}
        mapsUrl={mapsUrl}
        instagramUrl={instagramUrl}
        reviewSourceNote={reviewSourceNote}
      />
      <FaqSection
        eyebrow="Review FAQs"
        title="Questions guests ask before trusting a review page"
        intro="Short, transparent answers about where these testimonials come from and how to verify the latest public feedback."
        faqs={reviewFaqs}
      />
    </>
  );
}
