import Image from "next/image";
import Link from "next/link";
import type { GooglePlaceReviewData } from "@/lib/google-place-reviews";
import {
  reviewMomentImages,
  videoTestimonialHighlights,
} from "@/lib/reviews-page-data";
import { BUSINESS_PHONE, WHATSAPP_URL } from "@/lib/site";

type ReviewsPageContentProps = {
  googleReviewData: GooglePlaceReviewData | null;
  mapsUrl: string;
  instagramUrl: string | null;
  reviewSourceNote: string;
};

function StarRow({ rating = 5, size = "md" }: { rating?: number; size?: "sm" | "md" }) {
  const sizeClass = size === "sm" ? "h-3.5 w-3.5" : "h-4.5 w-4.5";

  return (
    <div className="flex text-yellow-500" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          className={`${sizeClass} fill-current ${index >= rating ? "text-gray-300" : ""}`}
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.461c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.185l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.503-1.838-.264-1.539-1.185l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-1.185-1.81.588-1.81h3.461a1 1 0 0 0 .95-.69l1.07-3.292Z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsPageContent({
  googleReviewData,
  mapsUrl,
  instagramUrl,
  reviewSourceNote,
}: ReviewsPageContentProps) {
  const displayedReviews = googleReviewData?.reviews.slice(0, 6) ?? [];
  const pairedPhotoReviews = reviewMomentImages.map((moment, index) => ({
    ...moment,
    review: displayedReviews[index % Math.max(displayedReviews.length, 1)] ?? null,
  }));

  return (
    <main className="bg-[linear-gradient(180deg,#f7fbfc_0%,#eef4f7_22%,#f8fbfc_100%)] pb-20 pt-28 sm:pt-32">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2.6rem] border border-white/75 bg-[linear-gradient(145deg,rgba(255,255,255,0.98)_0%,rgba(238,246,249,0.94)_100%)] shadow-[0_30px_90px_rgba(23,50,71,0.12)]">
          <div className="relative px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14">
            <div className="pointer-events-none absolute -left-14 top-0 h-52 w-52 rounded-full bg-[radial-gradient(circle,rgba(111,149,171,0.22)_0%,rgba(111,149,171,0)_72%)] blur-3xl" />
            <div className="pointer-events-none absolute right-0 top-6 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(241,203,123,0.18)_0%,rgba(241,203,123,0)_72%)] blur-3xl" />

            <div className="relative grid gap-10 lg:grid-cols-[1.05fr,0.95fr] lg:items-start">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/85 bg-white/90 px-4 py-1.5 shadow-[0_12px_28px_rgba(23,50,71,0.08)]">
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
                  <span className="text-xs font-medium text-navy/60">Reviews & Testimonials</span>
                </div>

                <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight text-sand sm:text-5xl">
                  Reviews, photo moments, and guest proof before you book.
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-8 text-foreground/70 sm:text-lg">
                  This page brings together verified Google reviews, guest-moment
                  imagery, and live social proof so future travellers can judge
                  the experience with more confidence.
                </p>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-foreground/56">
                  Guest photos are used here to show the atmosphere of real trips.
                  They do not necessarily depict the reviewer quoted on the card.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-[#173247] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#234760]"
                  >
                    Read all Google reviews
                  </Link>
                  <Link
                    href={WHATSAPP_URL}
                    className="inline-flex items-center justify-center rounded-full border border-navy/10 bg-white px-6 py-3 text-sm font-semibold text-navy transition hover:bg-[#f3f8fa]"
                  >
                    Ask about your dates on WhatsApp
                  </Link>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.8rem] border border-white/90 bg-white/88 p-6 shadow-[0_18px_40px_rgba(23,50,71,0.08)]">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-teal/80">
                    Google Rating
                  </p>
                  <div className="mt-3 flex items-end gap-3">
                    <span className="text-5xl font-semibold tracking-tight text-navy">
                      {googleReviewData?.rating?.toFixed(1) ?? "5.0"}
                    </span>
                    <span className="pb-1 text-sm font-medium text-foreground/56">out of 5</span>
                  </div>
                  <div className="mt-4">
                    <StarRow rating={5} />
                  </div>
                  <p className="mt-4 text-sm leading-6 text-foreground/60">
                    Verified guest feedback pulled from Google or the latest saved review snapshot.
                  </p>
                </div>

                <div className="rounded-[1.8rem] border border-white/90 bg-[linear-gradient(180deg,#f7fbfd_0%,#edf5f8_100%)] p-6 shadow-[0_18px_40px_rgba(23,50,71,0.08)]">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-teal/80">
                    Review Volume
                  </p>
                  <div className="mt-3 text-5xl font-semibold tracking-tight text-navy">
                    {googleReviewData?.reviewCount ?? 0}
                  </div>
                  <p className="mt-4 text-sm leading-6 text-foreground/60">
                    Enough volume to help new guests compare comfort, service, food, and route experience.
                  </p>
                </div>

                <div className="rounded-[1.8rem] border border-white/90 bg-[#173247] p-6 text-white shadow-[0_18px_40px_rgba(23,50,71,0.16)] sm:col-span-2">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#d8e8ef]/72">
                    Review Source
                  </p>
                  <p className="mt-3 text-base leading-7 text-white/86">
                    {reviewSourceNote}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-white/60">
                    Prefer to confirm directly? Call {BUSINESS_PHONE} or open the live Google listing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-teal/80">
              Latest Verified Reviews
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-sand sm:text-4xl">
              Real guest comments from Google
            </h2>
          </div>
          <Link
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-navy/10 bg-white px-5 py-3 text-sm font-semibold text-navy transition hover:bg-[#f4f8fa]"
          >
            Open Google listing
          </Link>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {displayedReviews.map((review, index) => {
            const initials = review.authorName
              .split(" ")
              .map((part) => part[0] ?? "")
              .join("")
              .slice(0, 2)
              .toUpperCase();

            return (
              <article
                key={`${review.authorName}-${index}`}
                className={`flex h-full flex-col rounded-[1.8rem] border border-white/80 bg-white/92 p-5 shadow-[0_18px_44px_rgba(23,50,71,0.08)] sm:p-6 ${
                  index === 0 ? "lg:col-span-2" : ""
                }`}
              >
                <div className="mb-5 flex items-start gap-3">
                  <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/85 bg-[linear-gradient(180deg,#eef5f8_0%,#e4eef3_100%)]">
                    {review.authorPhotoUrl ? (
                      <Image
                        src={review.authorPhotoUrl}
                        alt={review.authorName}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    ) : (
                      <span className="text-xs font-semibold tracking-[0.16em] text-teal">
                        {initials}
                      </span>
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    {review.authorProfileUrl ? (
                      <Link
                        href={review.authorProfileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-semibold text-navy transition hover:text-teal"
                      >
                        {review.authorName}
                      </Link>
                    ) : (
                      <h3 className="text-base font-semibold text-navy">{review.authorName}</h3>
                    )}
                    <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-navy/10 bg-[#f4f8fa] px-3 py-1 text-[0.68rem] font-medium tracking-[0.12em] text-foreground/58">
                      <span className="h-1.5 w-1.5 rounded-full bg-teal/65" />
                      {review.publishedLabel === "Google review"
                        ? "Verified on Google"
                        : review.publishedLabel}
                    </div>
                  </div>
                </div>

                <div className="mb-4 flex items-center justify-between gap-3">
                  <StarRow rating={review.rating} size="sm" />
                  <span className="rounded-full border border-navy/10 bg-white px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-foreground/50">
                    {review.rating.toFixed(1)}
                  </span>
                </div>

                <p className="flex-1 text-[0.98rem] leading-8 text-foreground/72 italic">
                  &ldquo;{review.text}&rdquo;
                </p>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-navy/8 pt-5">
                  <span className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-teal/75">
                    Google review
                  </span>
                  <Link
                    href={review.reviewUrl ?? mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-navy/10 bg-white px-4 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-teal transition hover:bg-[#f7fbfd] hover:text-navy"
                  >
                    Open review
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-teal/80">
            Image Reviews
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-sand sm:text-4xl">
            Guest-photo moments paired with real review excerpts
          </h2>
          <p className="mt-4 text-base leading-8 text-foreground/66">
            This makes the reviews easier to picture, especially for guests deciding
            between an overnight houseboat, a shorter canal ride, or a quieter sunset slot.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {pairedPhotoReviews.map((moment) => (
            <article
              key={moment.src}
              className="overflow-hidden rounded-[1.9rem] border border-white/80 bg-white/92 shadow-[0_20px_52px_rgba(23,50,71,0.08)]"
            >
              <div className="relative aspect-[4/4.35]">
                <Image
                  src={moment.src}
                  alt={moment.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent p-5">
                  <p className="max-w-xs text-lg font-semibold leading-tight text-white">
                    {moment.title}
                  </p>
                </div>
              </div>

              <div className="p-5 sm:p-6">
                {moment.review ? (
                  <>
                    <div className="flex items-center gap-3">
                      <StarRow rating={moment.review.rating} size="sm" />
                      <span className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-teal/75">
                        {moment.review.authorName}
                      </span>
                    </div>
                    <p className="mt-4 text-[0.98rem] leading-8 text-foreground/72 italic">
                      &ldquo;{moment.review.text}&rdquo;
                    </p>
                  </>
                ) : (
                  <p className="text-sm leading-7 text-foreground/66">
                    Fresh review snippets will appear here when Google review data is available.
                  </p>
                )}

                <p className="mt-4 text-sm leading-6 text-foreground/55">{moment.caption}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2.4rem] border border-white/75 bg-[linear-gradient(145deg,rgba(12,33,46,0.96)_0%,rgba(23,50,71,0.94)_100%)] px-5 py-8 text-white shadow-[0_28px_80px_rgba(10,24,35,0.22)] sm:px-8 sm:py-10 lg:px-10">
          <div className="mb-8 max-w-3xl">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-[#cfe0ea]/70">
              Video Testimonials
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Watch guest moments where new clips get posted first
            </h2>
            <p className="mt-4 text-base leading-8 text-white/72">
              We do not keep every short-form testimonial video duplicated on the website.
              The freshest guest clips usually land on Instagram first, so this section points
              to the live source.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {videoTestimonialHighlights.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-[1.9rem] border border-white/10 bg-white/6 backdrop-blur-sm"
              >
                <div className="relative aspect-[16/11]">
                  <Image
                    src={item.posterSrc}
                    alt={item.posterAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover opacity-88"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/18 to-transparent" />
                  <div className="absolute left-5 top-5 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/18 bg-white/14 backdrop-blur-sm">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M8 6.5v11l9-5.5-9-5.5Z" />
                    </svg>
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <h3 className="text-xl font-semibold leading-tight text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/70">{item.description}</p>

                  <div className="mt-5">
                    <Link
                      href={instagramUrl ?? mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full border border-white/16 bg-white/10 px-4 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-[#173247]"
                    >
                      {item.ctaLabel}
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
