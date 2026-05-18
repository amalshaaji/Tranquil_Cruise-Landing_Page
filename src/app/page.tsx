import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/home/HeroSection";
import {
  getGooglePlaceReviewData,
  GOOGLE_MAPS_PAGE_URL,
} from "@/lib/google-place-reviews";

const HOME_HERO_IMAGE = "/images/home-hero-rainbow-houseboat.jpg";
const INTRO_IMAGE = "/images/home-backwater-houseboats.jpg";
const FALLBACK_GOOGLE_RATING = 5.0;
const FALLBACK_GOOGLE_REVIEW_COUNT = 90;

const serviceCards = [
  {
    eyebrow: "Overnight Escape",
    title: "Signature Houseboats",
    copy: "Private houseboat stays with open decks, good food, and enough time to actually slow down.",
    href: "/houseboats",
    image: "/images/houseboats-card-blue.jpg",
  },
  {
    eyebrow: "Stay Well",
    title: "Waterside Rooms",
    copy: "Comfortable rooms by the water with a simple, welcoming Kerala feel.",
    href: "/rooms",
    image: "/images/room-card.png",
  },
  {
    eyebrow: "Slow Cruising",
    title: "Scenic Shikkara Rides",
    copy: "Relaxed rides through quiet canals, perfect for couples, families, or a soft evening on the water.",
    href: "/shikkara",
    image: "/images/shikkara-card.webp",
  },
  {
    eyebrow: "Wellness Pause",
    title: "Ayurvedic Spa Rituals",
    copy: "A calm break for massage, rest, and a little extra care during your trip.",
    href: "/spa",
    image: "/images/spa-card.png",
  },
  {
    eyebrow: "Village Routes",
    title: "Village Country Boat Rides",
    copy: "Smaller boat rides through village canals where you can see everyday backwater life up close.",
    href: "/canoe-boats",
    image: "/images/canoe-card.png",
  },
  {
    eyebrow: "Active Waterways",
    title: "Backwater Kayaking Trails",
    copy: "Paddle through quieter stretches of the backwaters if you want something active and close to nature.",
    href: "/kayaking",
    image: "/images/kayaking-card.jpg",
  },
];

export default async function Home() {
  const googleReviewData = await getGooglePlaceReviewData();
  const displayedReviews = googleReviewData?.reviews.slice(0, 4) ?? [];
  const reviewSortLabel = displayedReviews.length ? googleReviewData?.sortLabel ?? "" : "";
  const reviewSourceNote = reviewSortLabel.startsWith("Visible snippets scraped")
    ? "Review snippets captured from Google on May 15, 2026."
    : reviewSortLabel;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["TravelAgency", "LocalBusiness"],
    name: "Tranquil Cruise",
    description:
      "Houseboats, shikkara rides, country boat trips, kayaking, spa, and waterside rooms in Alleppey's Kerala backwaters.",
    url: "https://www.tranquilcruise.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Alappuzha",
      addressRegion: "Kerala",
      addressCountry: "IN",
    },
    priceRange: "$$",
    image: `https://www.tranquilcruise.com${HOME_HERO_IMAGE}`,
    hasMap: "https://maps.google.com/?q=Tranquil+Cruise+Alappuzha+Kerala",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: (googleReviewData?.rating ?? FALLBACK_GOOGLE_RATING).toFixed(1),
      reviewCount: googleReviewData?.reviewCount ?? FALLBACK_GOOGLE_REVIEW_COUNT,
      bestRating: "5",
      worstRating: "1",
    },
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Luxury Houseboat Stay", url: "https://www.tranquilcruise.com/houseboats" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Shikkara Rides", url: "https://www.tranquilcruise.com/shikkara" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Village Country Boat Rides", url: "https://www.tranquilcruise.com/canoe-boats" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Backwater Kayaking", url: "https://www.tranquilcruise.com/kayaking" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Ayurvedic Spa", url: "https://www.tranquilcruise.com/spa" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Waterside Rooms", url: "https://www.tranquilcruise.com/rooms" },
      },
    ],
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.tranquilcruise.com" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <main className="home-water-theme flex min-h-screen flex-col">
        <HeroSection />

        <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-24">
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(143,179,209,0.28),transparent_72%)]"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute left-1/2 top-48 h-72 w-72 -translate-x-1/2 rounded-full bg-white/50 blur-3xl"
            aria-hidden="true"
          />

          <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.35rem] border border-white/65 bg-[linear-gradient(180deg,rgba(255,255,255,0.95)_0%,rgba(248,251,253,0.98)_100%)] shadow-[0_30px_90px_rgba(18,39,56,0.12)] backdrop-blur-sm">
            <div className="grid gap-0 lg:grid-cols-[0.95fr,1.05fr]">
              <div className="border-b border-navy/10 px-7 py-8 sm:px-10 sm:py-10 lg:border-b-0 lg:border-r lg:px-12 lg:py-12">
                <div className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-teal/80">
                  Why It Feels Different
                </div>
                <h2 className="mt-4 max-w-md text-4xl font-semibold leading-[0.94] text-sand sm:text-5xl">
                  Less package talk. More real help planning your stay.
                </h2>
                <p className="mt-6 max-w-lg text-sm leading-7 text-foreground/72 sm:text-[1.02rem]">
                  We do not push one fixed plan for everyone. Tell us your
                  dates, the kind of trip you want, and who you are traveling
                  with, and we will help you choose something that actually
                  fits.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-[1.5rem] border border-white/80 bg-[linear-gradient(180deg,#f7fbfd_0%,#edf5f8_100%)] px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.75)]">
                    <div className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-teal/75">
                      Houseboats
                    </div>
                    <p className="mt-2 text-sm leading-6 text-foreground/68">
                      From cozy private stays to bigger boats for families and
                      groups.
                    </p>
                  </div>
                  <div className="rounded-[1.5rem] border border-white/80 bg-[linear-gradient(180deg,#f7fbfd_0%,#edf5f8_100%)] px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.75)]">
                    <div className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-teal/75">
                      Water Routes
                    </div>
                    <p className="mt-2 text-sm leading-6 text-foreground/68">
                      Village canals, open stretches, sunset rides, and routes
                      that match your mood.
                    </p>
                  </div>
                  <div className="rounded-[1.5rem] border border-white/80 bg-[linear-gradient(180deg,#f7fbfd_0%,#edf5f8_100%)] px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.75)]">
                    <div className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-teal/75">
                      Personal Help
                    </div>
                    <p className="mt-2 text-sm leading-6 text-foreground/68">
                      Straightforward advice on timing, group size, comfort,
                      and what makes the most sense for your trip.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-5 bg-[linear-gradient(180deg,rgba(245,250,252,0.72)_0%,rgba(238,245,248,0.92)_100%)] px-7 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12">
                <div className="rounded-[1.7rem] border border-white/85 bg-white/88 p-5 shadow-[0_18px_42px_rgba(23,50,71,0.08)] backdrop-blur-sm sm:p-6">
                  <div className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-teal/76">
                    Your Pace
                  </div>
                  <p className="mt-3 text-sm leading-7 text-foreground/74 sm:text-base">
                    Some guests want an early morning cruise. Some want village
                    canals, a slow afternoon, or a sunset ride before dinner.
                    We plan around that.
                  </p>
                </div>

                <div className="rounded-[1.7rem] border border-white/85 bg-white/88 p-5 shadow-[0_18px_42px_rgba(23,50,71,0.08)] backdrop-blur-sm sm:p-6">
                  <div className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-teal/76">
                    Our Approach
                  </div>
                  <p className="mt-3 text-sm leading-7 text-foreground/74 sm:text-base">
                    Instead of overwhelming you with too many package options,
                    we talk through the details with you and help you choose
                    the right boat, route, and timing.
                  </p>
                </div>

                <div className="rounded-[1.7rem] border border-[#c7dbe4] bg-[linear-gradient(180deg,#edf5f8_0%,#e4eef3_100%)] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.72)] sm:p-6">
                  <div className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-teal/76">
                    Best Starting Point
                  </div>
                  <p className="mt-3 text-sm leading-7 text-foreground/74 sm:text-base">
                    Start with the experience that interests you most, and we
                    will help shape the rest from there.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-14 max-w-screen-2xl overflow-hidden rounded-[2.45rem] border border-white/60 bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(245,249,251,0.98)_100%)] shadow-[0_36px_100px_rgba(16,36,51,0.14)]">
            <div className="grid lg:grid-cols-[1.12fr,0.88fr]">
              <div className="relative min-h-[24rem] lg:min-h-[38rem]">
                <Image
                  src={INTRO_IMAGE}
                  alt="Backwater houseboats framed by palms"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,27,39,0.06)_0%,rgba(10,27,39,0.24)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(180deg,rgba(10,27,39,0)_0%,rgba(10,27,39,0.62)_100%)] lg:hidden" />
              </div>

              <div className="flex flex-col justify-between bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(243,248,250,1)_100%)] p-4 sm:p-10 lg:p-12">
                <div>
                  <div className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-teal/75">
                    Tailored Escapes
                  </div>
                  <h3 className="mt-4 max-w-lg text-3xl font-semibold leading-[1.02] text-sand sm:text-4xl">
                    Tell us what kind of day you want, and we will help build it.
                  </h3>
                  <p className="mt-5 max-w-xl text-sm leading-7 text-foreground/72 sm:text-[1.02rem]">
                    Whether you want a sunrise start, a simple day ride, or an
                    overnight stay, we keep the planning simple and easy.
                  </p>
                </div>

                <div className="mt-10 grid gap-4 border-t border-navy/10 pt-8 sm:grid-cols-3">
                  <div className="rounded-[1.6rem] border border-white/85 bg-[linear-gradient(180deg,#eff6f9_0%,#e6f0f4_100%)] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.75)]">
                    <div className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-teal/75">
                      Departure
                    </div>
                    <p className="mt-3 text-sm leading-7 text-foreground/70">
                      Choose morning, afternoon, or sunset depending on how you
                      want the day to feel.
                    </p>
                  </div>
                  <div className="rounded-[1.6rem] border border-white/85 bg-[linear-gradient(180deg,#eff6f9_0%,#e6f0f4_100%)] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.75)]">
                    <div className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-teal/75">
                      Route
                    </div>
                    <p className="mt-3 text-sm leading-7 text-foreground/70">
                      Pick from village canals, wider backwater stretches, or a
                      mix of both.
                    </p>
                  </div>
                  <div className="rounded-[1.6rem] border border-white/85 bg-[linear-gradient(180deg,#eff6f9_0%,#e6f0f4_100%)] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.75)]">
                    <div className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-teal/75">
                      Stay
                    </div>
                    <p className="mt-3 text-sm leading-7 text-foreground/70">
                      Go for a short ride, a sunset plan, or an overnight stay
                      with more privacy and time to unwind.
                    </p>
                  </div>
                </div>

                <div
                  id="explore-experiences"
                  className="-mx-4 mt-8 scroll-mt-28 overflow-hidden rounded-[2rem] border border-[#cfdee5] bg-[linear-gradient(180deg,#fbfdfe_0%,#f4f8fa_100%)] p-4 shadow-[0_24px_60px_rgba(23,50,71,0.1)] sm:mx-0 sm:scroll-mt-32 sm:p-6"
                >
                  <div className="flex flex-col gap-3 border-b border-navy/10 pb-5 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <div className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-teal/75">
                        Explore Our Experiences
                      </div>
                      <h4 className="mt-2 max-w-xl text-2xl font-semibold leading-tight text-sand sm:text-[2rem]">
                        A few good ways to experience the backwaters.
                      </h4>
                    </div>
                    <p className="max-w-md text-sm leading-6 text-foreground/66 sm:text-[0.98rem]">
                      Pick what feels right for you and explore the details
                      from there.
                    </p>
                  </div>

                  <div className="mt-6 grid gap-4 lg:grid-cols-2">
                    {serviceCards.map((card, index) => (
                      <Link
                        key={card.title}
                        href={card.href}
                        className={`group relative overflow-hidden rounded-[2rem] border border-navy/10 bg-[linear-gradient(180deg,#ffffff_0%,#f3f8fa_100%)] shadow-[0_20px_55px_rgba(23,50,71,0.08)] transition duration-500 hover:-translate-y-1.5 hover:border-gold/35 hover:shadow-[0_28px_68px_rgba(23,50,71,0.14)] ${
                          index === 0
                            ? "lg:row-span-2"
                            : index === serviceCards.length - 1
                              ? "lg:col-span-2"
                              : ""
                        }`}
                      >
                        <div
                          className={`relative overflow-hidden p-4 pb-0 sm:p-5 sm:pb-0 ${
                            index === 0
                              ? "min-h-[18rem] sm:min-h-[26rem] lg:min-h-[30rem]"
                              : index === serviceCards.length - 1
                                ? "min-h-[15rem] sm:min-h-[21rem]"
                                : "min-h-[14rem] sm:min-h-[18rem]"
                          }`}
                        >
                          <div className="absolute inset-x-8 top-0 h-24 rounded-full bg-[radial-gradient(circle,rgba(203,225,235,0.95)_0%,rgba(203,225,235,0)_72%)] blur-2xl" />
                          <div
                            className={`relative overflow-hidden rounded-[1.6rem] border border-white/80 bg-[linear-gradient(180deg,#d9e9ef_0%,#edf5f8_55%,#d6e5eb_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.72)] ${
                              index === 0
                              ? "h-[18rem] sm:h-[26rem] lg:h-[30rem]"
                              : index === serviceCards.length - 1
                                  ? "h-[15rem] sm:h-[21rem]"
                                  : "h-[14rem] sm:h-[18rem]"
                            }`}
                          >
                            <Image
                              src={card.image}
                              alt={card.title}
                              fill
                              className="object-cover transition duration-700 group-hover:scale-[1.04]"
                              sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,36,51,0.04)_0%,rgba(16,36,51,0.18)_100%)]" />
                          </div>
                        </div>

                        <div className="border-t border-navy/10 px-4 pb-5 pt-4 sm:px-6 sm:pb-6 sm:pt-5">
                          <span className="inline-flex rounded-full border border-[#cfe0e7] bg-white px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.26em] text-teal shadow-[0_10px_24px_rgba(16,36,51,0.05)]">
                            {card.eyebrow}
                          </span>
                          <h5 className="mt-3 max-w-none text-[1.35rem] font-semibold leading-[1.06] text-sand sm:mt-4 sm:max-w-sm sm:text-[1.95rem]">
                            {card.title}
                          </h5>
                          <div className="mt-3 flex flex-col gap-3 sm:mt-4 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
                            <p className="max-w-none text-sm leading-6 text-foreground/68 sm:max-w-md sm:text-[0.98rem]">
                              {card.copy}
                            </p>
                            <div className="inline-flex shrink-0 self-start items-center gap-2 rounded-full border border-gold/25 bg-[#edf5f8] px-3 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-sand transition duration-300 group-hover:border-gold/45 group-hover:bg-white group-hover:text-navy sm:self-auto">
                              Explore
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
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* --- Google Reviews Section --- */}
          <div className="mx-auto mt-20 max-w-6xl px-4 py-12">
            <div className="overflow-hidden rounded-[2.4rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(242,248,250,0.98)_100%)] shadow-[0_28px_80px_rgba(23,50,71,0.12)]">
              <div className="relative px-4 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
                <div className="pointer-events-none absolute -left-10 top-8 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(84,160,196,0.18)_0%,rgba(84,160,196,0)_70%)] blur-2xl" />
                <div className="pointer-events-none absolute right-0 top-0 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(241,203,123,0.16)_0%,rgba(241,203,123,0)_72%)] blur-3xl" />

                <div className="relative grid gap-8 lg:grid-cols-[0.88fr,1.12fr] lg:items-start">
                  <div className="text-left">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/95 px-4 py-1.5 shadow-[0_10px_24px_rgba(23,50,71,0.08)] backdrop-blur-sm">
                      <span
                        className="inline-flex items-center whitespace-nowrap text-[0.92rem] font-bold leading-none tracking-[-0.08em]"
                        aria-hidden="true"
                      >
                        <span className="text-[#4285F4]">G</span>
                        <span className="-ml-[0.08em] text-[#EA4335]">o</span>
                        <span className="-ml-[0.08em] text-[#FBBC05]">o</span>
                        <span className="-ml-[0.08em] text-[#4285F4]">g</span>
                        <span className="-ml-[0.08em] text-[#34A853]">l</span>
                        <span className="-ml-[0.08em] text-[#EA4335]">e</span>
                      </span>
                      <span className="text-xs font-medium text-navy/60">Reviews</span>
                    </div>
                    <h2 className="mt-5 max-w-none text-3xl font-semibold leading-tight text-sand sm:max-w-md sm:text-4xl">
                      What guests have been saying lately.
                    </h2>
                    <p className="mt-4 max-w-none text-sm leading-7 text-foreground/66 sm:max-w-lg sm:text-[0.98rem]">
                      These are real Google reviews from recent guests. We show
                      the latest available feedback first so this section feels
                      current and useful, not static.
                    </p>

                    <div className="mt-7 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-[1.6rem] border border-white/90 bg-white/85 p-5 shadow-[0_14px_32px_rgba(23,50,71,0.06)]">
                        <div className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-teal/75">
                          Google Rating
                        </div>
                        <div className="mt-3 flex flex-col items-start gap-1 sm:flex-row sm:items-end sm:gap-3">
                          <span className="text-4xl font-semibold tracking-tight text-navy">
                            {(googleReviewData?.rating ?? FALLBACK_GOOGLE_RATING).toFixed(1)}
                          </span>
                          <span className="pb-1 text-sm font-medium text-foreground/56">
                            out of 5
                          </span>
                        </div>
                        <div className="mt-4 flex text-yellow-500">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.461c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.185l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.503-1.838-.264-1.539-1.185l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-1.185-1.81.588-1.81h3.461a1 1 0 00.95-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>

                      <div className="rounded-[1.6rem] border border-white/90 bg-[linear-gradient(180deg,#f7fbfd_0%,#edf5f8_100%)] p-5 shadow-[0_14px_32px_rgba(23,50,71,0.06)]">
                        <div className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-teal/75">
                          Review Volume
                        </div>
                        <div className="mt-3 text-4xl font-semibold tracking-tight text-navy">
                          {googleReviewData?.reviewCount ?? FALLBACK_GOOGLE_REVIEW_COUNT}
                        </div>
                        <p className="mt-3 text-sm leading-6 text-foreground/62">
                          Taken from the Google business listing when live data
                          is available, with a saved fallback if it is not.
                        </p>
                      </div>
                    </div>

                    {reviewSourceNote ? (
                      <p className="mt-6 max-w-none text-sm leading-6 text-foreground/54 sm:max-w-xl">
                        {reviewSourceNote}
                      </p>
                    ) : null}

                    <div className="mt-7">
                      <a
                        href={googleReviewData?.mapsUrl ?? GOOGLE_MAPS_PAGE_URL}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-navy/10 bg-white px-6 py-3 text-sm font-semibold text-navy shadow-sm transition-all hover:-translate-y-0.5 hover:bg-navy hover:text-white hover:shadow-lg sm:w-auto"
                      >
                        See all Google reviews
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

                  {displayedReviews.length ? (
                    <div className="grid gap-4 sm:grid-cols-2">
                      {displayedReviews.map((review, idx) => {
                        const initials = review.authorName
                          .split(" ")
                          .map((part) => part[0])
                          .join("")
                          .slice(0, 2)
                          .toUpperCase();

                        return (
                          <div
                            key={`${idx}-${review.authorName}`}
                            className={`group flex h-full flex-col rounded-[1.6rem] border border-white/85 bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(246,250,252,0.98)_100%)] p-5 text-left shadow-[0_16px_38px_rgba(23,50,71,0.07)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_48px_rgba(23,50,71,0.12)] sm:p-6 ${
                              idx === 0 ? "sm:col-span-2" : ""
                            }`}
                          >
                            <div className="mb-5 flex items-start gap-3">
                              <div className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/80 bg-[linear-gradient(180deg,#eef5f8_0%,#e4eef3_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]">
                                {review.authorPhotoUrl ? (
                                  <Image
                                    src={review.authorPhotoUrl}
                                    alt={review.authorName}
                                    fill
                                    className="object-cover"
                                    unoptimized
                                  />
                                ) : (
                                  <div className="flex h-full w-full items-center justify-center text-xs font-semibold tracking-[0.14em] text-teal">
                                    {initials}
                                  </div>
                                )}
                              </div>

                              <div className="min-w-0 flex-1">
                                {review.authorProfileUrl ? (
                                  <Link
                                    href={review.authorProfileUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-base font-semibold leading-tight text-navy transition hover:text-teal"
                                  >
                                    {review.authorName}
                                  </Link>
                                ) : (
                                  <h4 className="text-base font-semibold leading-tight text-navy">
                                    {review.authorName}
                                  </h4>
                                )}
                                {review.publishedLabel ? (
                                  <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-navy/10 bg-[#f4f8fa] px-3 py-1 text-[0.68rem] font-medium tracking-[0.12em] text-foreground/58">
                                    <span className="h-1.5 w-1.5 rounded-full bg-teal/65" />
                                    {review.publishedLabel === "Google review"
                                      ? "Verified on Google"
                                      : review.publishedLabel}
                                  </div>
                                ) : null}
                              </div>
                            </div>

                            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                              <div className="flex justify-start text-yellow-500">
                                {[...Array(5)].map((_, i) => (
                                  <svg
                                    key={i}
                                    className={`h-3.5 w-3.5 fill-current ${
                                      i >= review.rating ? "text-gray-300" : ""
                                    }`}
                                    viewBox="0 0 20 20"
                                  >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.461c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.185l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.503-1.838-.264-1.539-1.185l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-1.185-1.81.588-1.81h3.461a1 1 0 00.95-.69l1.07-3.292z" />
                                  </svg>
                                ))}
                              </div>

                              <span className="rounded-full border border-navy/10 bg-white px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-foreground/50">
                                {review.rating.toFixed(1)}
                              </span>
                            </div>

                            <p className={`flex-1 text-[1rem] leading-8 text-foreground/72 italic ${
                              idx === 0 ? "max-w-2xl" : ""
                            }`}>
                              &ldquo;{review.text}&rdquo;
                            </p>

                            <div className="mt-6 flex flex-col items-start gap-3 border-t border-navy/8 pt-5 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-teal/75">
                                Google review
                              </span>
                              <Link
                                href={review.reviewUrl ?? googleReviewData?.mapsUrl ?? GOOGLE_MAPS_PAGE_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-navy/10 bg-white px-4 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-teal shadow-sm transition-all hover:-translate-y-0.5 hover:border-navy/20 hover:bg-[#f7fbfd] hover:text-navy sm:w-auto"
                              >
                                Open review
                                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#edf5f8] text-current">
                                  <svg
                                    width="11"
                                    height="11"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.1"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    aria-hidden="true"
                                  >
                                    <path d="M7 7h10v10" />
                                    <path d="M7 17 17 7" />
                                  </svg>
                                </span>
                              </Link>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="rounded-[2rem] border border-white/75 bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(243,248,250,0.98)_100%)] p-8 text-left shadow-[0_18px_50px_rgba(23,50,71,0.08)] sm:p-10">
                      <div className="flex flex-col gap-5">
                        <div className="max-w-xl">
                          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-teal/80">
                            Verified Google Feedback
                          </p>
                          <h3 className="mt-3 text-2xl font-semibold leading-tight text-sand sm:text-3xl">
                            Read recent guest reviews directly on Google.
                          </h3>
                          <p className="mt-4 text-sm leading-7 text-foreground/70 sm:text-base">
                            We only show live Google review snippets here. If the
                            latest feed is unavailable, you can still see all
                            verified guest feedback on our Google listing.
                          </p>
                        </div>

                        <div className="max-w-xs rounded-[1.4rem] border border-navy/10 bg-white/80 px-5 py-4 text-center shadow-sm backdrop-blur-sm">
                          <div className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-teal/80">
                            Google Rating
                          </div>
                          <div className="mt-2 text-3xl font-semibold text-navy">
                            {(googleReviewData?.rating ?? FALLBACK_GOOGLE_RATING).toFixed(1)}
                          </div>
                          <div className="mt-1 text-sm text-foreground/60">
                            {googleReviewData?.reviewCount ?? FALLBACK_GOOGLE_REVIEW_COUNT} reviews
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
