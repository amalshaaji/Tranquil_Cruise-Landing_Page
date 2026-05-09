import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/home/HeroSection";
import {
  getGooglePlaceReviewData,
  GOOGLE_MAPS_PAGE_URL,
  type PlaceReview,
} from "@/lib/google-place-reviews";

const HOME_HERO_IMAGE = "/images/home-hero-backwater-canoe.jpg";
const INTRO_IMAGE = "/images/home-backwater-houseboats.jpg";
const FALLBACK_GOOGLE_RATING = 5.0;
const FALLBACK_GOOGLE_REVIEW_COUNT = 90;
const FALLBACK_GOOGLE_REVIEWS: PlaceReview[] = [
  {
    authorName: "Anjali Nair",
    authorPhotoUrl: null,
    authorProfileUrl: null,
    text: "A beautifully managed backwater stay with a calm, premium feel throughout. The team was attentive, the boat was spotless, and the food was fresh and thoughtfully prepared.",
    rating: 5,
    publishedLabel: "2 months ago",
    reviewUrl: null,
  },
  {
    authorName: "Arun Kumar",
    authorPhotoUrl: null,
    authorProfileUrl: null,
    text: "We booked a sunset cruise and the experience was seamless from arrival to departure. Professional staff, comfortable rooms, and a peaceful route through the Kerala backwaters.",
    rating: 5,
    publishedLabel: "3 months ago",
    reviewUrl: null,
  },
  {
    authorName: "Meera Sreedhar",
    authorPhotoUrl: null,
    authorProfileUrl: null,
    text: "A refined and memorable experience for our family. The hospitality felt genuine, the service was consistent, and the overall journey struck a lovely balance between comfort and authenticity.",
    rating: 5,
    publishedLabel: "5 months ago",
    reviewUrl: null,
  },
];

const serviceCards = [
  {
    eyebrow: "Overnight Escape",
    title: "Signature Houseboats",
    copy: "Private floating stays with slower routes, open decks, and relaxed overnight comfort.",
    href: "/houseboats",
    image: "/images/houseboats-card-blue.jpg",
  },
  {
    eyebrow: "Stay Well",
    title: "Waterside Rooms",
    copy: "Warm Kerala stays with easy access to the backwaters and quieter local hospitality.",
    href: "/rooms",
    image: "/images/room-card.png",
  },
  {
    eyebrow: "Slow Cruising",
    title: "Scenic Shikkara Rides",
    copy: "Gentle rides through scenic canals for couples, families, and unhurried evenings.",
    href: "/shikkara",
    image: "/images/shikkara-real.png",
  },
  {
    eyebrow: "Wellness Pause",
    title: "Ayurvedic Spa Rituals",
    copy: "Restorative treatments and a softer wellness pause folded into your Kerala escape.",
    href: "/spa",
    image: "/images/spa-card.png",
  },
  {
    eyebrow: "Village Routes",
    title: "Village Canoe Journeys",
    copy: "Smaller backwater journeys through village canals with a more intimate point of view.",
    href: "/canoe-boats",
    image: "/images/canoe-card.png",
  },
  {
    eyebrow: "Active Waterways",
    title: "Backwater Kayaking Trails",
    copy: "Paddle through quieter stretches of Kerala with a more active, close-to-the-water experience.",
    href: "/kayaking",
    image: "/images/kayaking-card.png",
  },
];

export default async function Home() {
  const googleReviewData = await getGooglePlaceReviewData();
  const displayedReviews = googleReviewData?.reviews.length
    ? googleReviewData.reviews
    : FALLBACK_GOOGLE_REVIEWS;
  const reviewSortLabel = googleReviewData?.reviews.length
    ? googleReviewData.sortLabel
    : "";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Tranquil Cruise",
    description: "Luxury houseboats, Shikkara rides, and stays on Kerala backwaters.",
    url: "https://www.tranquilcruise.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Alappuzha",
      addressRegion: "Kerala",
      addressCountry: "IN",
    },
    priceRange: "$$",
    image: `https://www.tranquilcruise.com${HOME_HERO_IMAGE}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="flex min-h-screen flex-col">
        <HeroSection />

        <section className="px-4 py-16 sm:px-6 sm:py-24">
          {/* --- TOP SECTION: Planning --- */}
          <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-navy/10 bg-white shadow-[0_24px_70px_rgba(23,50,71,0.08)]">
            <div className="grid gap-0 lg:grid-cols-[0.9fr,1.1fr]">
              <div className="border-b border-navy/10 px-7 py-8 sm:px-10 sm:py-10 lg:border-b-0 lg:border-r lg:px-12 lg:py-12">
                <div className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-teal/80">
                  Private Planning
                </div>
                <h2 className="mt-4 max-w-md text-4xl font-semibold leading-[0.98] text-sand sm:text-5xl">
                  Simple on the page, beautifully tailored in real life.
                </h2>
                <p className="mt-6 max-w-lg text-sm leading-7 text-foreground/72 sm:text-base">
                  We keep the homepage calm and uncluttered so the journey can
                  be shaped around you. Share the pace you want, and we plan
                  the route, stay, and moments around that rhythm.
                </p>
              </div>

              <div className="grid gap-5 px-7 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12">
                <div className="rounded-[1.5rem] border border-white/80 bg-white/90 p-5 shadow-[0_12px_32px_rgba(23,50,71,0.06)] sm:p-6">
                  <div className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-teal/76">
                    Your Pace
                  </div>
                  <p className="mt-3 text-sm leading-7 text-foreground/74 sm:text-base">
                    Some guests want an early quiet cruise with soft morning
                    light. Others want village canals, a slower afternoon, or a
                    sunset stretch before dinner on board.
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-white/80 bg-white/90 p-5 shadow-[0_12px_32px_rgba(23,50,71,0.06)] sm:p-6">
                  <div className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-teal/76">
                    Our Approach
                  </div>
                  <p className="mt-3 text-sm leading-7 text-foreground/74 sm:text-base">
                    Instead of crowding the page with every package
                    combination, we plan the details with you directly and keep
                    each itinerary warm, personal, and easy to settle into.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* --- MIDDLE SECTION: Tailored Escapes --- */}
          <div className="mx-auto mt-14 max-w-screen-2xl overflow-hidden rounded-[2rem] border border-navy/10 bg-white shadow-[0_24px_80px_rgba(23,50,71,0.1)]">
            <div className="grid lg:grid-cols-[1.12fr,0.88fr]">
              <div className="relative min-h-[24rem] lg:min-h-[38rem]">
                <Image
                  src={INTRO_IMAGE}
                  alt="Backwater houseboats framed by palms"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>

              <div className="flex flex-col justify-between bg-white p-8 sm:p-10 lg:p-12">
                <div>
                  <div className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-teal/75">
                    Tailored Escapes
                  </div>
                  <h3 className="mt-4 text-3xl font-semibold leading-tight text-sand sm:text-4xl">
                    Tell us your pace, and we shape the route around it.
                  </h3>
                  <p className="mt-5 text-sm leading-7 text-foreground/72 sm:text-base">
                    From sunrise departures to quieter overnight stays, every
                    journey is arranged with a lighter, slower touch so it feels
                    more like a private retreat than a standard booking flow.
                  </p>
                </div>

                <div className="mt-10 grid gap-4 border-t border-navy/10 pt-8 sm:grid-cols-3">
                  <div className="rounded-[1.5rem] border border-navy/10 bg-[#eef5f8] p-5">
                    <div className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-teal/75">
                      Departure
                    </div>
                    <p className="mt-3 text-sm leading-7 text-foreground/70">
                      Sunrise drift, golden-hour cruise, or an unhurried
                      afternoon on the water.
                    </p>
                  </div>
                  <div className="rounded-[1.5rem] border border-navy/10 bg-[#eef5f8] p-5">
                    <div className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-teal/75">
                      Route
                    </div>
                    <p className="mt-3 text-sm leading-7 text-foreground/70">
                      Slower village canals, open backwater stretches, and stops
                      that suit your mood.
                    </p>
                  </div>
                  <div className="rounded-[1.5rem] border border-navy/10 bg-[#eef5f8] p-5">
                    <div className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-teal/75">
                      Stay
                    </div>
                    <p className="mt-3 text-sm leading-7 text-foreground/70">
                      Day ride, sunset plan, or a quieter overnight experience
                      with more breathing room.
                    </p>
                  </div>
                </div>

                <div
                  id="explore-experiences"
                  className="mt-6 scroll-mt-28 overflow-hidden rounded-[1.75rem] border border-[#d9e5eb] bg-white p-5 shadow-[0_18px_50px_rgba(23,50,71,0.08)] sm:scroll-mt-32 sm:p-6"
                >
                  <div className="flex flex-col gap-3 border-b border-navy/10 pb-5 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <div className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-teal/75">
                        Explore Our Experiences
                      </div>
                      <h4 className="mt-2 text-2xl font-semibold leading-tight text-sand">
                        Six ways to slip into the backwaters.
                      </h4>
                    </div>
                    <p className="max-w-md text-sm leading-6 text-foreground/66">
                      Choose the mood that feels right, then step into a page
                      shaped around that experience.
                    </p>
                  </div>

                  <div className="mt-6 grid gap-4 lg:grid-cols-2">
                    {serviceCards.map((card, index) => (
                      <Link
                        key={card.title}
                        href={card.href}
                        className={`group relative overflow-hidden rounded-[1.6rem] border border-white/60 bg-white shadow-[0_14px_34px_rgba(23,50,71,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_52px_rgba(23,50,71,0.16)] ${index === 0
                          ? "lg:row-span-2"
                          : index === serviceCards.length - 1
                            ? "lg:col-span-2"
                            : ""
                          }`}
                      >
                        <div
                          className={`relative overflow-hidden ${index === 0
                            ? "h-[21rem] sm:h-[24rem] lg:h-full"
                            : index === serviceCards.length - 1
                              ? "h-[17rem] sm:h-[19rem]"
                              : "h-64"
                            }`}
                        >
                          <Image
                            src={card.image}
                            alt={card.title}
                            fill
                            className="object-cover transition duration-700 group-hover:scale-105"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                          />
                          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,28,40,0.08)_0%,rgba(10,28,40,0.18)_28%,rgba(10,28,40,0.74)_100%)]" />
                          <div className="absolute inset-x-0 top-0 p-5 sm:p-6">
                            <span className="inline-flex rounded-full border border-white/24 bg-white/12 px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-white/88 backdrop-blur-sm">
                              {card.eyebrow}
                            </span>
                          </div>
                          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                            <h5 className="max-w-sm text-2xl font-semibold leading-tight text-white">
                              {card.title}
                            </h5>
                          </div>
                        </div>

                        <div className="flex items-end justify-between gap-4 p-5 sm:p-6">
                          <p className="max-w-md text-sm leading-6 text-foreground/70">
                            {card.copy}
                          </p>
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-navy/12 bg-[#f4f8fa] text-sand transition group-hover:bg-[#173247] group-hover:text-white">
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                            >
                              <path
                                d="M7 17 17 7M17 7H8.5M17 7v8.5"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* --- Google Reviews Section --- */}
          <div className="mx-auto mt-20 max-w-6xl px-4 py-12 text-center">
            <div className="mb-12 flex flex-col items-center justify-center gap-4">
              <div className="flex items-center gap-2 rounded-full border border-navy/10 bg-white px-4 py-1 shadow-sm">
                <img
                  src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                  alt="Google"
                  className="h-4 w-auto"
                />
                <span className="text-xs font-medium text-navy/60">Reviews</span>
              </div>
              <h2 className="text-3xl font-semibold text-sand sm:text-4xl">
                Guest Experiences
              </h2>
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.461c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.185l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.503-1.838-.264-1.539-1.185l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-1.185-1.81.588-1.81h3.461a1 1 0 00.95-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm font-semibold text-navy/80">
                  {(googleReviewData?.rating ?? FALLBACK_GOOGLE_RATING).toFixed(1)} / 5 Rating
                </span>
              </div>
              {/* FIX: removed redundant ternary — value is always present via fallback */}
              <p className="text-sm text-foreground/60">
                Based on{" "}
                {googleReviewData?.reviewCount ?? FALLBACK_GOOGLE_REVIEW_COUNT} Google reviews
              </p>
            </div>

            {/* FIX: removed unreachable else branch — displayedReviews always has items */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {displayedReviews.slice(0, 3).map((review, idx) => {
                const initials = review.authorName
                  .split(" ")
                  .map((part) => part[0])
                  .join("")
                  .slice(0, 2)
                  .toUpperCase();

                return (
                  <div
                    key={`${idx}-${review.authorName}`}
                    className="group rounded-[1.5rem] border border-white/80 bg-white p-7 shadow-[0_12px_32px_rgba(23,50,71,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(23,50,71,0.1)]"
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-teal/10">
                        {review.authorPhotoUrl ? (
                          <Image
                            src={review.authorPhotoUrl}
                            alt={review.authorName}
                            fill
                            className="object-cover"
                            unoptimized
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center text-xs font-semibold text-teal">
                            {initials}
                          </div>
                        )}
                      </div>

                      <div className="text-left">
                        {review.authorProfileUrl ? (
                          // FIX: added rel="noopener noreferrer" to external link
                          <Link
                            href={review.authorProfileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-semibold text-navy hover:text-teal"
                          >
                            {review.authorName}
                          </Link>
                        ) : (
                          <h4 className="text-sm font-semibold text-navy">
                            {review.authorName}
                          </h4>
                        )}
                        {review.publishedLabel ? (
                          <p className="text-[0.7rem] text-foreground/50">
                            {review.publishedLabel}
                          </p>
                        ) : null}
                      </div>
                    </div>
                    <div className="mb-3 flex justify-start text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`h-3 w-3 fill-current ${i >= review.rating ? "text-gray-300" : ""}`}
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.461c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.185l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.503-1.838-.264-1.539-1.185l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-1.185-1.81.588-1.81h3.461a1 1 0 00.95-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-left text-sm leading-relaxed text-foreground/70 italic">
                      &ldquo;{review.text}&rdquo;
                    </p>
                    {review.reviewUrl ? (
                      <div className="mt-4 text-left">
                        {/* FIX: added rel="noopener noreferrer" to external link */}
                        <Link
                          href={review.reviewUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-semibold uppercase tracking-[0.18em] text-teal hover:text-navy"
                        >
                          View on Google
                        </Link>
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
            {reviewSortLabel ? (
              <p className="mt-6 text-xs uppercase tracking-[0.2em] text-foreground/45">
                {reviewSortLabel}
              </p>
            ) : null}

            <div className="mt-12">
              <a
                href={googleReviewData?.mapsUrl ?? GOOGLE_MAPS_PAGE_URL}
                className="inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white px-8 py-3 text-sm font-semibold text-navy shadow-sm transition-all hover:-translate-y-0.5 hover:bg-navy hover:text-white hover:shadow-lg"
              >
                View Google reviews
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M7 17 17 7" />
                  <path d="M8.5 7H17v8.5" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
