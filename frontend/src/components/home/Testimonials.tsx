import { Button } from "@/components/ui/Button";
import { Eyebrow, Heading } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { ReviewCards } from "./ReviewCards";
import { Stars } from "@/components/ui/Stars";
import { getGoogleReviews } from "@/lib/google-reviews";
import { site } from "@/lib/site";

export async function Testimonials() {
  const { rating, count, reviews } = await getGoogleReviews();
  return (
    <Section tone="sand">
      <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <Eyebrow>Guest reviews</Eyebrow>
          <Heading>{reviews.length ? "In their words." : `Rated ${rating} on Google.`}</Heading>
          <div
            className="mt-5 flex items-center gap-3"
            role="img"
            aria-label={`${rating} out of 5 stars on Google`}
          >
            <Stars className="size-5" />
            <span className="text-sm text-mist">
              {rating} on Google{count ? ` · ${count} reviews` : ""}
            </span>
          </div>
        </div>
        <Button href={site.googleMapsUrl} target="_blank" rel="noopener" variant="outline" className="w-full md:w-auto">
          {reviews.length ? "Read all reviews on Google" : "Read our reviews on Google"}
        </Button>
      </Reveal>

      {reviews.length > 0 && <ReviewCards reviews={reviews} />}
    </Section>
  );
}
