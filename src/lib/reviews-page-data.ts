export type ReviewMomentImage = {
  src: string;
  alt: string;
  title: string;
  caption: string;
};

export type VideoTestimonialHighlight = {
  title: string;
  description: string;
  posterSrc: string;
  posterAlt: string;
  ctaLabel: string;
};

export const reviewMomentImages: ReviewMomentImage[] = [
  {
    src: "/images/guest-moments/customer-14.jpg",
    alt: "Guest smiling on a private houseboat in the Alleppey backwaters",
    title: "Private houseboat stays that feel easy from the start",
    caption:
      "Used here as a guest-moment image alongside a real Google review excerpt.",
  },
  {
    src: "/images/guest-moments/customer-21.png",
    alt: "Family guest moment during a calm Kerala backwater cruise",
    title: "Family-friendly cruising with calm routes and clear planning",
    caption:
      "Guest imagery helps show the trip atmosphere but does not necessarily depict the reviewer.",
  },
  {
    src: "/images/guest-moments/customer-25.png",
    alt: "Couple enjoying golden-hour views on the Kerala backwaters",
    title: "Relaxed evening trips that guests remember long after checkout",
    caption:
      "Paired with verified Google feedback to give future guests more visual context.",
  },
];

export const videoTestimonialHighlights: VideoTestimonialHighlight[] = [
  {
    title: "Guest reels from the houseboat deck",
    description:
      "Short-form clips from recent stays, useful if you want to see the mood, deck views, and on-water pace before booking.",
    posterSrc: "/images/guest-moments/customer-20.png",
    posterAlt: "Guest video moment from a houseboat deck in Alleppey",
    ctaLabel: "Watch recent Instagram clips",
  },
  {
    title: "Canal-side reactions and ride snippets",
    description:
      "Quick video moments that show how narrow canal routes, village stretches, and slower cruising feel in real life.",
    posterSrc: "/images/guest-moments/customer-18.png",
    posterAlt: "Guest enjoying a country boat or canal ride in Kerala",
    ctaLabel: "Open the latest guest moments",
  },
  {
    title: "Sunset testimonial-style story moments",
    description:
      "A good fit if you want video-led proof of the atmosphere around golden hour, couple trips, and quiet backwater evenings.",
    posterSrc: "/images/guest-moments/customer-24.png",
    posterAlt: "Golden-hour guest moment from the Kerala backwaters",
    ctaLabel: "See the live Instagram feed",
  },
];
