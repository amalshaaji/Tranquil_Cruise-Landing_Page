import type { InternalLinkGraph } from "@/lib/seo-content";
import type { FaqItem } from "@/lib/seo";

export type ProgrammaticSeoPage = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  path: string;
  keywords: string[];
  heroImage: {
    src: string;
    alt: string;
  };
  intro: {
    directAnswer: string;
    supporting: string[];
  };
  quickFacts: string[];
  whyThisPageWins: {
    title: string;
    description: string;
  }[];
  routeFit: {
    title: string;
    description: string;
  }[];
  bookingPointers: string[];
  gallery: {
    src: string;
    alt: string;
  }[];
  faqs: FaqItem[];
  internalLinks: InternalLinkGraph;
  touristTripName: string;
  touristTripDescription: string;
  touristTypes: string[];
};

export const programmaticSeoPages: ProgrammaticSeoPage[] = [
  {
    slug: "2-bedroom-houseboat-alappuzha",
    title: "2 Bedroom Houseboat in Alappuzha for families and small private groups",
    eyebrow: "Programmatic Houseboat Guide",
    description:
      "Compare 2 bedroom houseboats in Alappuzha for family stays, small group overnight cruises, private Kerala backwater comfort, and better room balance in Alleppey.",
    path: "/2-bedroom-houseboat-alappuzha",
    keywords: [
      "2 bedroom houseboat alappuzha",
      "2 bedroom houseboat alleppey",
      "family houseboat alappuzha",
      "small group houseboat kerala",
    ],
    heroImage: {
      src: "/images/family-retreat-houseboat.jpg",
      alt: "2 bedroom family houseboat cruising in the Alappuzha backwaters",
    },
    intro: {
      directAnswer:
        "A 2 bedroom houseboat in Alappuzha is usually the best fit when a group needs two private sleeping spaces without moving into a larger and less efficient multi-room layout.",
      supporting: [
        "That makes it a strong option for parents with children, two couples traveling together, or a small private group that wants enough common space for meals and deck time without paying for a celebration-sized boat.",
        "Compared with a compact single-bedroom stay, the two-bedroom format usually feels easier to live with across an overnight cruise because the lounge, dining, and bedroom flow is more balanced.",
      ],
    },
    quickFacts: [
      "Usually the strongest houseboat format for small families",
      "Works well for two couples or mixed-age groups",
      "Better lounge-to-bedroom balance than compact single-room stays",
      "Often chosen for private overnight cruising rather than quick day use",
    ],
    whyThisPageWins: [
      {
        title: "Better privacy without over-scaling",
        description:
          "Two bedrooms create enough separation for families and paired travelers, while the overall boat still feels manageable, calm, and easy to enjoy.",
      },
      {
        title: "Shared space still matters",
        description:
          "Guests usually remember the deck, lounge, and meal pacing as much as the bedrooms, and this format keeps those shared spaces comfortable without forcing a jump to a much larger boat.",
      },
      {
        title: "A stronger overnight rhythm",
        description:
          "The layout suits dinner service, relaxed evening cruising, and a slower morning better than smaller formats that can start feeling tight once the stay extends beyond a short ride.",
      },
    ],
    routeFit: [
      {
        title: "Family overnight plans",
        description:
          "The two-bedroom format works especially well when parents want a dedicated room and children or relatives need a separate sleeping area without losing together time.",
      },
      {
        title: "Couples traveling together",
        description:
          "Two couples often prefer this over separate bookings because the shared deck and dining setup keeps the trip social while preserving privacy at night.",
      },
      {
        title: "Balanced canal and lake cruising",
        description:
          "This size usually pairs well with mixed itineraries that include quieter canal stretches and wider backwater sections instead of an all-day open-water route.",
      },
    ],
    bookingPointers: [
      "Ask about the actual bedroom split, bathroom layout, and whether both rooms carry the same comfort level.",
      "Confirm whether the trip is planned as a day cruise or a true overnight rhythm with dinner and morning time on the water.",
      "If your group needs more celebration space than privacy, compare the 3 bedroom and 5 bedroom formats before deciding.",
    ],
    gallery: [
      {
        src: "/images/family-retreat-houseboat.jpg",
        alt: "2 bedroom houseboat exterior for a family stay in Alleppey",
      },
      {
        src: "/images/two-bedroom-gallery-v2/WhatsApp_Image_2026-05-04_at_19_44_01.jpeg",
        alt: "Family-friendly 2 bedroom houseboat interior in Alappuzha",
      },
      {
        src: "/images/two-bedroom-gallery-v2/WhatsApp_Image_2026-05-04_at_19_44_24.jpeg",
        alt: "Lounge space inside a 2 bedroom houseboat in Kerala backwaters",
      },
    ],
    faqs: [
      {
        question: "Who should book a 2 bedroom houseboat in Alappuzha?",
        answer:
          "It is usually best for families, two couples, or a small private group that wants two sleeping spaces and a more comfortable overnight layout than a compact single-bedroom stay.",
      },
      {
        question: "Is a 2 bedroom houseboat better than a 3 bedroom houseboat?",
        answer:
          "It is better when your priority is efficiency, comfort, and the right amount of space for a smaller group. A 3 bedroom houseboat becomes more useful when you genuinely need extra rooms or a more social group setup.",
      },
      {
        question: "Can a 2 bedroom houseboat be used for an overnight cruise?",
        answer:
          "Yes. In fact, the format is often strongest on overnight routes because the room layout, lounge space, and mealtime flow feel more complete than on shorter-only plans.",
      },
      {
        question: "Does the route matter as much as the boat size?",
        answer:
          "Yes. A good two-bedroom experience usually comes from the combination of the right layout and a well-paced route that mixes village canals, open stretches, and calm evening timing.",
      },
    ],
    internalLinks: {
      eyebrow: "Related Houseboat Routes",
      title: "Compare the 2 bedroom format against the stay styles around it.",
      intro:
        "Most guests arrive here after deciding they want a private houseboat but before locking the best format for the group. These related pages help narrow that choice cleanly.",
      hub: {
        title: "Luxury Houseboats in Alleppey",
        href: "/houseboats",
        description:
          "Use the main houseboats hub if you want a broader comparison across all room counts and travel styles before booking.",
      },
      contextualLinks: [
        {
          title: "Family Houseboat Alappuzha",
          href: "/family-houseboat-alappuzha",
          description:
            "Open this if the group dynamic is clearly family-led and you want guidance that speaks more directly to privacy, pacing, and children.",
        },
        {
          title: "Overnight Houseboat Alappuzha",
          href: "/overnight-houseboat-alappuzha",
          description:
            "Move here if the main decision is route length and overnight experience rather than room count alone.",
        },
        {
          title: "Luxury Houseboat Alleppey",
          href: "/luxury-houseboat-alappuzha",
          description:
            "Compare this when premium service level and upgraded overall feel matter more than the exact bedroom number.",
        },
      ],
      spokeLinks: [
        {
          title: "Single Bedroom Houseboat",
          href: "/houseboats/single-bed",
          description:
            "Best if the stay is for a couple or solo guest and you want a smaller private format.",
        },
        {
          title: "3 Bedroom Houseboat",
          href: "/houseboats/3-bedroom",
          description:
            "A better fit when your group wants an extra room and more social flexibility.",
        },
        {
          title: "5 Bedroom Houseboat",
          href: "/houseboats/5-bedroom",
          description:
            "Compare this only if the trip involves a larger gathering, celebration, or reunion-style plan.",
        },
      ],
    },
    touristTripName: "2 Bedroom Houseboat Stay in Alappuzha",
    touristTripDescription:
      "A family-friendly Kerala backwater stay in Alappuzha built around two private bedrooms, balanced shared space, and a comfortable overnight cruising rhythm.",
    touristTypes: ["Families", "Two couples", "Small private groups"],
  },
  {
    slug: "houseboat-for-couples",
    title: "Houseboat for couples in Alleppey with a calmer, more private backwater pace",
    eyebrow: "Couples Travel Intent",
    description:
      "Find the right houseboat for couples in Alleppey with private overnight comfort, sunset route planning, romantic Kerala backwater pacing, and quieter Alappuzha cruising.",
    path: "/houseboat-for-couples",
    keywords: [
      "houseboat for couples",
      "romantic houseboat alleppey",
      "couple houseboat alappuzha",
      "private houseboat for couples kerala",
    ],
    heroImage: {
      src: "/images/single-bed-houseboat.jpeg",
      alt: "Private houseboat for couples in Alleppey at sunset",
    },
    intro: {
      directAnswer:
        "The best houseboat for couples is usually the one that feels private, well-paced, and intentionally quiet rather than the one with the most rooms or the biggest deck.",
      supporting: [
        "For most couples, that means comparing a single-bedroom houseboat first, then looking at route timing, sunset potential, food service, and how intimate the overall stay feels once the day visitors and busier hours fade out.",
        "If the trip is meant to feel romantic, privacy and pacing usually matter more than scale. A calmer canal segment, dinner on deck, and an overnight rhythm often do more for the experience than extra square footage.",
      ],
    },
    quickFacts: [
      "Single-bedroom formats are often the first comparison point for couples",
      "Sunset and overnight pacing usually matter more than large-group amenities",
      "Quieter canal sections often feel more romantic than crowded stretches",
      "Best booked as a private stay rather than a shared or mixed group plan",
    ],
    whyThisPageWins: [
      {
        title: "Privacy sets the tone",
        description:
          "Couples usually enjoy the stay more when the houseboat feels intentionally private, from bedroom placement to deck use and dining flow.",
      },
      {
        title: "Timing changes the mood",
        description:
          "Late afternoon light, slower evening cruising, and a quieter morning often shape the memory of the trip more than the boat category alone.",
      },
      {
        title: "Smaller can feel stronger",
        description:
          "An intimate single-bedroom format often feels more romantic than a larger boat sized for families or celebrations, especially when the route is curated around quieter water.",
      },
    ],
    routeFit: [
      {
        title: "Sunset-led plans",
        description:
          "Couples often prefer routes that save the wider views or the most peaceful canal stretch for the soft-light part of the day.",
      },
      {
        title: "Overnight stays with dinner",
        description:
          "An overnight plan usually gives couples more time to settle into the boat, enjoy dinner without rushing, and wake up to a calmer backwater mood.",
      },
      {
        title: "Short romantic add-ons",
        description:
          "If the trip already includes a room stay or another experience, a shorter private cruise can still work as long as the route and timing are chosen carefully.",
      },
    ],
    bookingPointers: [
      "Start by asking whether a single-bedroom houseboat is available for your dates before scaling up to larger formats.",
      "Confirm whether the route can be shaped around sunset, quieter canal stretches, or overnight timing rather than the busiest sightseeing window.",
      "If you want a smaller on-water format instead of a full houseboat stay, compare a private shikkara ride as well.",
    ],
    gallery: [
      {
        src: "/images/single-bed-houseboat.jpeg",
        alt: "Romantic single-bedroom houseboat for couples in Alappuzha",
      },
      {
        src: "/images/single-bed-gallery/open-deck-night.jpeg",
        alt: "Open deck evening setting on a couple-friendly houseboat in Kerala",
      },
      {
        src: "/images/single-bed-gallery/bedroom-floral.jpeg",
        alt: "Private bedroom setup on a romantic Alleppey houseboat",
      },
    ],
    faqs: [
      {
        question: "What is the best houseboat for couples in Alleppey?",
        answer:
          "Most couples start with the single-bedroom houseboat because it offers the most intimate private setup. After that, route timing and overnight pacing usually matter more than boat size.",
      },
      {
        question: "Is an overnight houseboat worth it for couples?",
        answer:
          "Usually yes. Overnight stays give couples more privacy, a softer evening mood, and time for dinner, deck views, and a slower morning rather than a rushed sightseeing-only cruise.",
      },
      {
        question: "Should couples choose a houseboat or a shikkara ride?",
        answer:
          "A houseboat is better if you want more comfort, privacy, dining, and time on the water. A shikkara ride is better if you want a shorter, lighter, canal-focused romantic experience.",
      },
      {
        question: "Do couples need a luxury houseboat?",
        answer:
          "Not always. What matters most is whether the boat feels private, clean, and well-paced for your plan. Luxury becomes more relevant when premium service and a more polished overnight feel are a priority.",
      },
    ],
    internalLinks: {
      eyebrow: "Couples Planning Links",
      title: "Keep the romantic intent, then compare the format that supports it best.",
      intro:
        "Couples are often choosing between intimacy, comfort, and trip length rather than just searching for a generic boat category. These related pages help sharpen that decision.",
      hub: {
        title: "Honeymoon Houseboat Alappuzha",
        href: "/honeymoon-houseboat-alappuzha",
        description:
          "Start here if the trip is specifically a honeymoon or anniversary-style stay and you want a more occasion-led version of the same intent.",
      },
      contextualLinks: [
        {
          title: "Single Bedroom Houseboat",
          href: "/houseboats/single-bed",
          description:
            "Open this first if you want the most direct layout match for a private couples stay.",
        },
        {
          title: "Luxury Houseboat Alleppey",
          href: "/luxury-houseboat-alappuzha",
          description:
            "Move here if your main question is whether premium service and a more polished stay are worth it for your trip.",
        },
        {
          title: "Private Shikkara Rides",
          href: "/shikkara",
          description:
            "Compare this if you want a shorter, scenic, more lightweight romantic ride rather than a full houseboat stay.",
        },
      ],
      spokeLinks: [
        {
          title: "Overnight Houseboat Alappuzha",
          href: "/overnight-houseboat-alappuzha",
          description:
            "Best when you already know the trip should include dinner, slower night pacing, and a morning on the water.",
        },
        {
          title: "Day Cruise Alappuzha",
          href: "/day-cruise-alappuzha",
          description:
            "Better if you want the houseboat feel but only have time for a shorter daytime plan.",
        },
      ],
    },
    touristTripName: "Private Houseboat for Couples in Alleppey",
    touristTripDescription:
      "A romantic Kerala backwater cruise for couples shaped around privacy, sunset timing, and a calmer private houseboat rhythm in Alleppey.",
    touristTypes: ["Couples", "Honeymoon travelers", "Anniversary trips"],
  },
  {
    slug: "luxury-ac-houseboat-kerala",
    title: "Luxury AC houseboat in Kerala for guests comparing comfort, route, and premium service",
    eyebrow: "Premium Comfort Search",
    description:
      "Explore luxury AC houseboats in Kerala with premium Alleppey comfort, air-conditioned overnight stays, private route planning, and polished backwater hospitality.",
    path: "/luxury-ac-houseboat-kerala",
    keywords: [
      "luxury ac houseboat kerala",
      "ac houseboat alleppey",
      "premium houseboat kerala",
      "air conditioned houseboat alappuzha",
    ],
    heroImage: {
      src: "/images/houseboats-card-blue.jpg",
      alt: "Luxury AC houseboat in Kerala backwaters near Alleppey",
    },
    intro: {
      directAnswer:
        "A luxury AC houseboat in Kerala should feel comfortable across the whole stay, not just inside the bedroom, which means air conditioning needs to be paired with good layout, calmer route pacing, and polished service.",
      supporting: [
        "Guests searching this term are usually not asking only for cooling. They are often comparing whether the boat feels genuinely premium once you factor in the lounge experience, privacy, route quality, dining flow, and the overall finish of the stay.",
        "That is why the strongest luxury AC houseboat choice usually combines an air-conditioned sleeping setup with a private backwater plan that still feels spacious and intentional once the trip moves between deck time, meals, and evening cruising.",
      ],
    },
    quickFacts: [
      "AC matters most when paired with a comfortable overnight layout",
      "Premium service quality is usually as important as the cooling setup",
      "Larger family and group boats can still feel luxurious if the route and pacing are well planned",
      "The best fit depends on whether you are booking for couples, families, or private groups",
    ],
    whyThisPageWins: [
      {
        title: "Comfort has to extend beyond the bedroom",
        description:
          "A premium AC houseboat should still feel easy to enjoy during meals, deck time, and transitions between open-air and indoor space, not just while sleeping.",
      },
      {
        title: "Premium is a full-stay experience",
        description:
          "Guests usually notice the service flow, route calmness, and how polished the common spaces feel just as much as they notice whether the room is air-conditioned.",
      },
      {
        title: "The right size protects the comfort level",
        description:
          "Choosing the right room count and social layout keeps the boat from feeling either cramped or oversized for the group, which is a major part of what makes a stay feel luxurious.",
      },
    ],
    routeFit: [
      {
        title: "Premium family comfort",
        description:
          "Families often look for AC-backed bedrooms plus enough common space that the stay still feels relaxed during daytime cruising and dinner hours.",
      },
      {
        title: "Curated private groups",
        description:
          "Private groups tend to value a more polished service rhythm, more intentional route design, and bedrooms that support a smoother overnight stay.",
      },
      {
        title: "Warm-season Kerala travel",
        description:
          "AC becomes a stronger decision factor when guests are booking in warmer periods and want dependable sleeping comfort without giving up the classic backwater atmosphere.",
      },
    ],
    bookingPointers: [
      "Ask exactly where AC is provided and how the sleeping setup differs from the lounge and deck areas.",
      "Confirm whether your group size fits the room count naturally, because too-small or too-large boats can both weaken the premium feel.",
      "Compare route quality and meal/service flow alongside the hardware details, since those usually define whether the stay feels truly luxurious.",
    ],
    gallery: [
      {
        src: "/images/houseboats-card-blue.jpg",
        alt: "Luxury AC houseboat exterior in Alleppey backwaters",
      },
      {
        src: "/images/three-bedroom-gallery/WhatsApp_Image_2026-05-14_at_18_13_06.jpeg",
        alt: "Premium air-conditioned houseboat bedroom layout in Kerala",
      },
      {
        src: "/images/five-bedroom-gallery/WhatsApp_Image_2026-05-14_at_18_04_14.jpeg",
        alt: "Luxury multi-bedroom AC houseboat for group stays in Alappuzha",
      },
    ],
    faqs: [
      {
        question: "What does a luxury AC houseboat in Kerala usually include?",
        answer:
          "It usually combines an air-conditioned sleeping setup with private cruising, better service flow, more polished common areas, and a route that feels calmer and more curated than a standard quick cruise.",
      },
      {
        question: "Is a luxury AC houseboat only for large groups?",
        answer:
          "No. Couples, families, and private groups all book premium AC houseboats. The key is matching the room count and overall layout to the size and style of your trip.",
      },
      {
        question: "Are AC houseboats better for overnight stays?",
        answer:
          "Usually yes, because overnight stays make sleeping comfort more important. But the strongest experience still depends on the whole stay feeling balanced, not just the presence of AC alone.",
      },
      {
        question: "How do I choose between a luxury AC houseboat and a standard one?",
        answer:
          "Compare privacy, room comfort, service, route pacing, and how well the boat fits your group. Luxury becomes more valuable when you care about a polished overnight experience rather than just getting on the water.",
      },
    ],
    internalLinks: {
      eyebrow: "Premium Comparison Paths",
      title: "Use the AC search intent as a starting point, then compare the premium path that fits your group.",
      intro:
        "Guests searching for luxury AC houseboats are often one step away from a booking decision. These related pages help narrow whether the real priority is group fit, romance, or broader premium guidance.",
      hub: {
        title: "Luxury Houseboat Alleppey",
        href: "/luxury-houseboat-alappuzha",
        description:
          "This is the best hub page if you want the broader premium comparison, not just the AC-specific keyword angle.",
      },
      contextualLinks: [
        {
          title: "2 Bedroom Houseboat Alappuzha",
          href: "/2-bedroom-houseboat-alappuzha",
          description:
            "Use this when you already know the group size is small and you want to test whether a two-bedroom premium format is enough.",
        },
        {
          title: "Family Houseboat Alappuzha",
          href: "/family-houseboat-alappuzha",
          description:
            "Move here if the decision is mainly family comfort and room planning rather than luxury language alone.",
        },
        {
          title: "Houseboat for Couples",
          href: "/houseboat-for-couples",
          description:
            "Compare this when the stay is romantic and the premium intent is really about privacy and atmosphere.",
        },
      ],
      spokeLinks: [
        {
          title: "3 Bedroom Houseboat",
          href: "/houseboats/3-bedroom",
          description:
            "A stronger format for extended families or private groups that need one more room without going fully large-scale.",
        },
        {
          title: "5 Bedroom Houseboat",
          href: "/houseboats/5-bedroom",
          description:
            "Best for larger group stays where premium common space matters as much as bedroom comfort.",
        },
      ],
    },
    touristTripName: "Luxury AC Houseboat Stay in Kerala",
    touristTripDescription:
      "A premium Kerala backwater stay centered on air-conditioned comfort, private cruising, and a polished overnight houseboat experience near Alleppey and Alappuzha.",
    touristTypes: ["Luxury travelers", "Families", "Private groups"],
  },
] as const;

export function getProgrammaticSeoPageBySlug(slug: string) {
  return programmaticSeoPages.find((page) => page.slug === slug);
}
