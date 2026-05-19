import { GOOGLE_MAPS_PAGE_URL } from "@/lib/google-place-reviews";
import { INSTAGRAM_URL } from "@/lib/site";

export const authorityReferencePoints = [
  {
    title: "Verified Google Reviews",
    href: GOOGLE_MAPS_PAGE_URL,
    eyebrow: "Live External Proof",
    description:
      "The clearest public reference point for guest feedback, rating volume, and the latest review snippets tied to Tranquil Cruise.",
  },
  {
    title: "Guest Reviews Hub",
    href: "/reviews",
    eyebrow: "On-Site Proof",
    description:
      "A page that combines verified review excerpts, guest moments, and video-style social proof for quicker citation and sharing.",
  },
  {
    title: "Guest Gallery",
    href: "/gallery",
    eyebrow: "Visual Reference",
    description:
      "Geo-rich image assets that show Alleppey, Alappuzha, Kuttanad, and Vembanad scenes future partners can reference.",
  },
  {
    title: "About Tranquil Cruise",
    href: "/about",
    eyebrow: "Brand Background",
    description:
      "Useful when a writer, local directory, or Kerala travel mention needs business context, service positioning, and destination fit.",
  },
  {
    title: "Instagram Guest Moments",
    href: INSTAGRAM_URL,
    eyebrow: "Live Social Feed",
    description:
      "Short-form guest moments and recent trip atmosphere that often help bloggers and travel planners judge the on-water mood quickly.",
  },
] as const;

export const authorityLinkableAssets = [
  {
    title: "Alleppey Backwater Tour Guide",
    href: "/alleppey-backwater-tour",
    fit: "Tourism blogs comparing route formats",
    copy:
      "Strong when someone needs a practical explanation of the difference between houseboats, shikara rides, village boats, and kayaking.",
  },
  {
    title: "Kerala Backwaters Guide",
    href: "/kerala-backwaters-guide",
    fit: "Broader Kerala travel mentions",
    copy:
      "A better citation target for writers who are not covering only one booking page, but the wider Kerala backwater planning picture.",
  },
  {
    title: "Things To Do In Alappuzha",
    href: "/things-to-do-in-alappuzha",
    fit: "Destination roundups and local recommendation lists",
    copy:
      "Useful for local travel lists that need a calm, water-first version of what is actually worth planning in Alappuzha.",
  },
  {
    title: "Houseboats Hub",
    href: "/houseboats",
    fit: "Commercial travel roundups or stay comparisons",
    copy:
      "The strongest internal landing page for citations that need a central private-houseboat reference instead of a narrow subpage.",
  },
] as const;

export const authorityOutreachAngles = [
  {
    title: "Local tourism collaborations",
    text: "Useful for Alappuzha stay partners, drivers, local activity planners, and Kerala travel coordinators who want a stable page to reference when recommending backwater experiences.",
  },
  {
    title: "Travel writer references",
    text: "Good for destination guides that need a factual source page covering route style, review proof, guest visuals, and direct planning context in one place.",
  },
  {
    title: "PR and editorial mentions",
    text: "Helpful when a story angle touches honeymoon trips, family houseboats, quieter village routes, or slower Kerala wellness-led travel.",
  },
  {
    title: "Review-platform cross-checking",
    text: "Useful for guests and publishers who discover Tranquil Cruise elsewhere and want a direct page that points back to verified Google reviews and current guest moments.",
  },
] as const;

export const authorityFaqs = [
  {
    question: "What should a travel writer or tourism blog link to first?",
    answer:
      "If the topic is broad Kerala backwater planning, the best first references are usually the Kerala Backwaters Guide or the Alleppey Backwater Tour page. If the topic is more commercial or booking-led, the houseboats hub or reviews page is usually the better citation target.",
  },
  {
    question: "How can partners verify Tranquil Cruise before mentioning it?",
    answer:
      "The fastest cross-check is the live Google listing for review volume and guest feedback, followed by the reviews page, gallery, and about page for on-site context and visual proof.",
  },
  {
    question: "Do you have a TripAdvisor page linked here?",
    answer:
      "This site currently points partners first toward verified Google reviews, guest moments, and direct contact details. If a partner needs another review-platform reference, the safest approach is to confirm the current public profile directly before publishing a mention.",
  },
  {
    question: "Why build a dedicated partners page at all?",
    answer:
      "Because mentions and backlinks are stronger when writers, local partners, and destination roundups have one reliable place to verify the business, find the right internal pages, and understand what makes the experience citation-worthy.",
  },
] as const;
