import Image from "next/image";
import Link from "next/link";
import type { GooglePlaceReviewData } from "@/lib/google-place-reviews";
import { BUSINESS_PHONE, WHATSAPP_URL } from "@/lib/site";

type ReviewsPageContentProps = {
  googleReviewData: GooglePlaceReviewData | null;
  mapsUrl: string;
  reviewSourceNote: string;
};

const GOOGLE_MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9520.364581431742!2d76.3650316!3d9.489526800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0883007b443735%3A0x25dbd7f30db0c25c!2sTranquil%20cruise!5e1!3m2!1sen!2sin!4v1783068623726!5m2!1sen!2sin";

const AVATAR_PALETTE = [
  { background: "#d9f2ee", foreground: "#0f766e" },
  { background: "#e3eefb", foreground: "#1d4ed8" },
  { background: "#f9e7d8", foreground: "#c2410c" },
  { background: "#efe4ff", foreground: "#7c3aed" },
  { background: "#fde2e8", foreground: "#be123c" },
  { background: "#e8f3df", foreground: "#3f6212" },
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0] ?? "")
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function getAvatarPalette(name: string) {
  const index = Array.from(name).reduce((sum, char) => sum + char.charCodeAt(0), 0) % AVATAR_PALETTE.length;
  return AVATAR_PALETTE[index];
}

function StarRow({ rating = 5, size = "md" }: { rating?: number; size?: "sm" | "md" }) {
  const sizeClass = size === "sm" ? "h-3.5 w-3.5" : "h-4.5 w-4.5";

  return (
    <div className="flex text-[#fbbc04]" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          className={`${sizeClass} fill-current ${index >= rating ? "text-[#d9dbe0]" : ""}`}
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
  reviewSourceNote,
}: ReviewsPageContentProps) {
  const displayedReviews = googleReviewData?.reviews ?? [];

  return (
    <main className="bg-[linear-gradient(180deg,#fbfcfc_0%,#f1f7f8_26%,#f8fafb_100%)] pb-20 pt-28 sm:pt-32">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2.4rem] border border-[#dce8ed] bg-white shadow-[0_24px_70px_rgba(23,50,71,0.08)]">
          <div className="relative px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14">
            <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
              <div>
                <div className="inline-flex items-center gap-3 rounded-full border border-[#dce8ed] bg-[#f7fbfc] px-4 py-2">
                  <span className="text-sm font-semibold tracking-[-0.04em] text-[#173247]" aria-hidden="true">
                    <span className="text-[#4285F4]">G</span>
                    <span className="text-[#EA4335]">o</span>
                    <span className="text-[#FBBC05]">o</span>
                    <span className="text-[#4285F4]">g</span>
                    <span className="text-[#34A853]">l</span>
                    <span className="text-[#EA4335]">e</span>
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#68b9b0]" />
                  <span className="text-xs font-medium uppercase tracking-[0.16em] text-[#173247]/58">
                    Google Reviews
                  </span>
                </div>

                <h1 className="mt-5 max-w-3xl font-[var(--font-display)] text-4xl font-semibold leading-[0.96] tracking-[-0.04em] text-[#173247] sm:text-5xl lg:text-[3.5rem]">
                  Real guest reviews for a clearer booking decision.
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-8 text-[#173247]/72 sm:text-lg">
                  Read recent guest feedback in one place so it is easier to judge comfort, service,
                  route quality, and the overall backwater experience before you plan your dates.
                </p>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#173247]/58">
                  Prefer to confirm directly? Open the public Google listing or message Tranquil
                  Cruise on WhatsApp for help choosing the right route or stay format.
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
                    className="inline-flex items-center justify-center rounded-full border border-[#173247]/10 bg-white px-6 py-3 text-sm font-semibold text-[#173247] transition hover:bg-[#f3f8fa]"
                  >
                    Ask about your dates on WhatsApp
                  </Link>
                </div>
              </div>

              <div className="grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.8rem] border border-[#dce8ed] bg-[#f8fbfc] p-6">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-teal/80">
                        Rating
                    </p>
                    <div className="mt-2 flex items-end gap-3">
                      <span className="text-5xl font-semibold tracking-tight text-[#173247]">
                        {googleReviewData?.rating?.toFixed(1) ?? "5.0"}
                      </span>
                      <span className="pb-1 text-sm font-medium text-[#173247]/56">out of 5</span>
                    </div>
                    <div className="mt-3">
                      <StarRow rating={5} />
                    </div>
                  </div>

                  <div className="rounded-[1.8rem] border border-[#dce8ed] bg-white p-6">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-teal/80">
                      Reviews
                    </p>
                    <div className="mt-2 text-5xl font-semibold tracking-tight text-[#173247]">
                      {googleReviewData?.reviewCount ?? 0}
                    </div>
                    <p className="mt-3 text-sm leading-6 text-[#173247]/60">
                      Enough volume to compare service, comfort, and route quality with confidence.
                    </p>
                  </div>
                </div>

                <div className="rounded-[1.8rem] border border-[#dce8ed] bg-[#f7fbfc] p-6">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-teal/80">
                    Review Source
                  </p>
                  <p className="mt-3 text-base leading-7 text-[#173247]/72">{reviewSourceNote}</p>
                  <p className="mt-3 text-sm leading-6 text-[#173247]/56">
                    Call {BUSINESS_PHONE} or open the live Google listing if you want to verify the
                    latest public feedback before booking.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="latest-google-reviews"
        className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-teal/80">
              Latest Verified Reviews
            </p>
            <h2 className="mt-3 font-[var(--font-display)] text-3xl font-semibold text-[#173247] sm:text-4xl">
              Real guest comments from Google
            </h2>
          </div>
          <Link
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-[#173247]/10 bg-white px-5 py-3 text-sm font-semibold text-[#173247] transition hover:bg-[#f4f8fa]"
          >
            Open Google listing
          </Link>
        </div>

        {displayedReviews.length ? (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {displayedReviews.map((review, index) => {
              const initials = getInitials(review.authorName);
              const avatarPalette = getAvatarPalette(review.authorName);

              return (
                <article
                  key={`${review.authorName}-${index}`}
                  className="flex h-full flex-col rounded-[1.15rem] border border-[#e5e7eb] bg-white p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition hover:shadow-[0_6px_20px_rgba(0,0,0,0.08)] sm:p-6"
                >
                  <div className="flex h-full flex-col">
                    <div className="mb-4 flex items-start gap-3">
                      <div
                        className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#f1f3f4]"
                        style={
                          review.authorPhotoUrl
                            ? undefined
                            : {
                                background: `linear-gradient(180deg, ${avatarPalette.background} 0%, #ffffff 100%)`,
                              }
                        }
                      >
                        {review.authorPhotoUrl ? (
                          <Image
                            src={review.authorPhotoUrl}
                            alt={review.authorName}
                            fill
                            className="object-cover"
                            unoptimized
                          />
                        ) : (
                          <span
                            className="text-xs font-semibold"
                            style={{ color: avatarPalette.foreground }}
                          >
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
                            className="block text-[0.95rem] font-medium text-[#202124] hover:underline"
                          >
                            {review.authorName}
                          </Link>
                        ) : (
                          <h3 className="text-[0.95rem] font-medium text-[#202124]">{review.authorName}</h3>
                        )}
                        <p className="mt-0.5 text-[0.8rem] text-[#5f6368]">
                          {review.publishedLabel === "Google review"
                            ? "Verified Google review"
                            : review.publishedLabel}
                        </p>
                      </div>
                    </div>

                    <div className="mb-3 flex items-center gap-2">
                      <StarRow rating={review.rating} size="sm" />
                      <span className="text-[0.8rem] font-medium text-[#5f6368]">
                        {review.rating.toFixed(1)}
                      </span>
                    </div>

                    <p className="flex-1 text-[0.95rem] leading-7 text-[#3c4043]">
                      {review.text}
                    </p>

                    <div className="mt-5 flex items-center justify-between gap-3 border-t border-[#e8eaed] pt-4">
                      <span className="text-[0.78rem] text-[#5f6368]">Google review</span>
                      <Link
                        href={review.reviewUrl ?? mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-full border border-[#dadce0] bg-white px-4 py-2 text-[0.78rem] font-medium text-[#1a73e8] transition hover:bg-[#f8fbff]"
                      >
                        Open review
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="rounded-[1.5rem] border border-[#dce8ed] bg-white p-8 text-center text-[#5f6368] shadow-[0_10px_30px_rgba(23,50,71,0.05)]">
            No Google reviews are available to show right now.
          </div>
        )}

        <div className="mt-8 flex justify-center">
          <Link
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[#173247] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#234760]"
          >
            Read more guest reviews on Google
          </Link>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-[#dce8ed] bg-white shadow-[0_20px_56px_rgba(23,50,71,0.08)]">
          <div className="flex flex-col gap-6 border-b border-[#dce8ed] px-5 py-6 sm:px-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-teal/80">
                Find Us
              </p>
              <h2 className="mt-3 font-[var(--font-display)] text-3xl font-semibold text-[#173247] sm:text-4xl">
                Visit the Tranquil Cruise location on Google Maps
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#173247]/64 sm:text-base">
                Open the map for directions, nearby landmarks, and the live business listing before
                you book your backwater ride.
              </p>
            </div>

            <Link
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#173247] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#234760]"
            >
              Open in Google Maps
            </Link>
          </div>

          <iframe
            title="Tranquil Cruise on Google Maps"
            src={GOOGLE_MAP_EMBED_URL}
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            className="block w-full"
          />
        </div>
      </section>

    </main>
  );
}
