import type { FaqItem } from "@/lib/seo";

export type InformationalPageData = {
  title: string;
  eyebrow: string;
  description: string;
  path: string;
  keywords: string[];
  intro: string[];
  highlights: string[];
  sections: {
    title: string;
    body: string[];
  }[];
  faqs: FaqItem[];
  faqEyebrow?: string;
  faqTitle?: string;
  faqIntro?: string;
  ctas: {
    label: string;
    href: string;
    variant?: "primary" | "secondary";
  }[];
};

export const informationalPages: Record<string, InformationalPageData> = {
  "premium-houseboat-alappuzha": {
    title: "Premium Houseboat Alappuzha",
    eyebrow: "Elevated Houseboat Stay",
    description:
      "Compare premium houseboats in Alappuzha for upgraded comfort, better route planning, polished service, and a more intentional Kerala backwater stay.",
    path: "/premium-houseboat-alappuzha",
    keywords: [
      "premium houseboat alappuzha",
      "premium houseboat alleppey",
      "upgraded houseboat kerala",
      "private premium houseboat stay",
    ],
    intro: [
      "A premium houseboat in Alappuzha is usually less about flashy language and more about how the whole stay feels once you are actually on board.",
      "Guests searching for this route are often comparing whether the trip includes better room comfort, a calmer route, more polished food service, and enough private space to make the stay feel relaxed from start to finish.",
    ],
    highlights: [
      "Better suited to guests who care about comfort and pacing, not just boat size",
      "Strong fit for couples, families, and private groups who want a more polished stay",
      "Usually compared alongside luxury and overnight houseboat routes",
    ],
    sections: [
      {
        title: "What usually makes the stay feel premium",
        body: [
          "The difference is often found in route quality, room finish, deck comfort, meal flow, and how easy the whole experience feels rather than in a single feature list.",
          "A premium stay should still feel balanced after boarding, during meals, and through the quieter evening part of the cruise, not just look good at first glance.",
        ],
      },
      {
        title: "Who this route is best for",
        body: [
          "This page usually fits guests who already know they want a private houseboat and are now deciding whether it is worth stepping above a more standard format.",
          "It is especially useful for travelers who care about privacy, upgraded service, calmer timing, and an overnight rhythm that feels more intentional.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the difference between a premium and luxury houseboat in Alappuzha?",
        answer:
          "They often overlap, but premium usually signals a clearly upgraded experience while luxury leans even more into polished service, space, and overall finish. The best choice depends on how much comfort and privacy matter for your trip.",
      },
      {
        question: "Is a premium houseboat worth it for one night?",
        answer:
          "Yes, especially if your priority is a calmer route, better meals, a more comfortable bedroom, and a smoother overall flow rather than simply getting onto the water.",
      },
      {
        question: "Who usually books a premium houseboat?",
        answer:
          "Couples, families, and private groups often choose this tier when they want a more refined stay without moving straight into the broadest luxury positioning.",
      },
    ],
    ctas: [
      { label: "Compare luxury houseboats", href: "/luxury-houseboat-alappuzha" },
      { label: "Check availability", href: "/contact", variant: "secondary" },
    ],
  },
  "houseboat-food-experience": {
    title: "Houseboat Food Experience",
    eyebrow: "Onboard Dining Guide",
    description:
      "Understand the houseboat food experience in Alleppey, from meal timing and Kerala flavors to how onboard dining shapes the pace of a private backwater stay.",
    path: "/houseboat-food-experience",
    keywords: [
      "houseboat food experience",
      "alleppey houseboat food",
      "kerala houseboat meals",
      "houseboat lunch and dinner alleppey",
    ],
    intro: [
      "For many guests, food is one of the most memorable parts of a private houseboat stay because it changes the whole rhythm of the cruise.",
      "A well-planned meal on board is not just about what is served. It is also about timing, how relaxed the route feels around lunch or dinner, and whether the stay gives you enough space to actually enjoy being on the water.",
    ],
    highlights: [
      "Lunch often anchors day cruises while dinner shapes the overnight feel",
      "Meal pacing matters almost as much as the menu itself",
      "Best experience comes from matching food timing with route flow and group comfort",
    ],
    sections: [
      {
        title: "What guests usually expect",
        body: [
          "Most guests want fresh Kerala-style meals, a relaxed serving pace, and enough deck or lounge comfort to make the meal feel like part of the experience rather than a stop in the middle of it.",
          "Families and couples often care less about a long menu and more about whether the food service feels calm, timely, and easy to enjoy in the middle of the cruise.",
        ],
      },
      {
        title: "Why food changes the trip",
        body: [
          "A day cruise often revolves around lunch, while an overnight plan usually gains more value from evening dining and a slower breakfast rhythm the next morning.",
          "That is why food is usually best discussed alongside route timing, group size, and whether the stay is meant to feel simple, romantic, or family-friendly.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is food included on most houseboat stays?",
        answer:
          "Meals are commonly part of the houseboat experience, but the exact format depends on whether you book a day cruise or an overnight stay and how the route is planned.",
      },
      {
        question: "Is lunch or dinner more important on a houseboat?",
        answer:
          "Lunch usually matters most on a day cruise, while dinner often becomes the more memorable anchor on an overnight houseboat stay.",
      },
      {
        question: "Can food be planned around families or couples?",
        answer:
          "Yes. Meal pacing and the overall dining experience are usually shaped around the group, the timing of the route, and the mood of the stay.",
      },
    ],
    ctas: [
      { label: "See overnight houseboats", href: "/overnight-houseboat-alappuzha" },
      { label: "Ask about meals and routes", href: "/contact", variant: "secondary" },
    ],
  },
  faq: {
    title: "FAQ",
    eyebrow: "Trip Planning Answers",
    description:
      "Find quick answers about houseboats, route timing, booking help, family travel, and Kerala backwater planning with Tranquil Cruise.",
    path: "/faq",
    keywords: [
      "tranquil cruise faq",
      "alleppey houseboat faq",
      "alappuzha backwater questions",
      "kerala houseboat booking help",
    ],
    intro: [
      "This FAQ page brings together the questions guests usually ask before choosing between a houseboat, a shorter canal ride, or another backwater experience.",
      "If you are still deciding on trip length, group fit, route style, or what kind of stay matches your travel plan, this page is meant to give you a clear first pass.",
    ],
    highlights: [
      "Best for quick booking, timing, and route-fit questions",
      "Useful if you are comparing day cruise, overnight, family, or couple-focused options",
      "Pairs well with the main houseboats and backwaters guide pages",
    ],
    sections: [
      {
        title: "The most common planning questions",
        body: [
          "Guests usually start by asking whether a houseboat or shikara ride is better, how long a cruise should be, and which layout works for their group.",
          "From there, the next layer is usually timing: whether to choose a day plan, sunset window, or overnight stay based on how much time they want on the water.",
        ],
      },
      {
        title: "When to contact us directly",
        body: [
          "If the trip involves children, mixed-age family members, celebration plans, or a custom route preference, direct planning help is usually more useful than trying to compare every page alone.",
          "That way, the route, comfort level, and timing can all be shaped around the actual trip rather than around a generic package.",
        ],
      },
    ],
    faqs: [
      {
        question: "Should I book a day cruise or an overnight houseboat?",
        answer:
          "Choose a day cruise if you want the houseboat feel within one daytime window. Choose an overnight stay if dinner, evening calm, and more time on the water matter most.",
      },
      {
        question: "Is a houseboat better than a shikara ride?",
        answer:
          "A houseboat is better when you want more comfort, space, and time on the water. A shikara ride is better when you want a shorter scenic canal experience at a lighter pace.",
      },
      {
        question: "Which houseboat works best for families?",
        answer:
          "Two-bedroom and three-bedroom formats are often the easiest fit for families because they create more privacy, shared lounge space, and a smoother overnight rhythm.",
      },
      {
        question: "Can you help if I am not sure which route to book?",
        answer:
          "Yes. Route planning is usually shaped around your dates, group size, comfort expectations, and whether you want village canals, open water, or a mix of both.",
      },
    ],
    faqEyebrow: "Booking & Planning FAQs",
    faqTitle: "Alleppey Houseboat & Backwater Cruise FAQs",
    faqIntro:
      "Answers to common questions about houseboats, shikkara rides, kayaking, pricing, routes, and booking in Alappuzha.",
    ctas: [
      { label: "Explore all houseboats", href: "/houseboats" },
      { label: "Contact us for help", href: "/contact", variant: "secondary" },
    ],
  },
  "privacy-policy": {
    title: "Privacy Policy",
    eyebrow: "How We Handle Information",
    description:
      "Read how Tranquil Cruise handles enquiry details, contact information, and basic website usage when guests reach out about houseboats and backwater trips.",
    path: "/privacy-policy",
    keywords: [
      "privacy policy tranquil cruise",
      "houseboat booking privacy policy",
      "alappuzha travel enquiry privacy",
    ],
    intro: [
      "When guests contact Tranquil Cruise, the information they share is used to answer booking enquiries, shape travel guidance, and help with trip coordination.",
      "We keep this page simple so you can understand what information is usually collected, why it may be used, and how to reach us if you want anything clarified.",
    ],
    highlights: [
      "Contact details are used mainly for booking support and trip coordination",
      "We do not need unnecessary personal information to answer basic enquiries",
      "Guests can contact us directly with privacy-related questions",
    ],
    sections: [
      {
        title: "Information we usually receive",
        body: [
          "This can include your name, phone number, email address, travel dates, group size, and the kind of backwater experience you are asking about through forms, calls, or messaging.",
          "That information helps us respond clearly, suggest suitable experiences, and keep follow-up conversations relevant to your enquiry.",
        ],
      },
      {
        title: "How the information is used",
        body: [
          "The main use is to answer booking questions, coordinate travel details, and share route or stay options that fit what you asked for.",
          "If you need information corrected or want us to clarify how your details are being handled, you can contact us directly.",
        ],
      },
    ],
    faqs: [
      {
        question: "Why do you ask for travel dates and group size?",
        answer:
          "Those details help us suggest the right houseboat or backwater experience and avoid giving generic booking advice that does not fit your trip.",
      },
      {
        question: "Can I contact you to update my enquiry details?",
        answer:
          "Yes. If your plans change or you want us to correct shared details, you can reach out directly and we will help from there.",
      },
    ],
    ctas: [
      { label: "Contact us", href: "/contact" },
      { label: "Read terms", href: "/terms", variant: "secondary" },
    ],
  },
  terms: {
    title: "Terms",
    eyebrow: "Booking Basics",
    description:
      "Review the general terms used for Tranquil Cruise enquiries, bookings, trip planning, and travel-service coordination in Alappuzha and the Kerala backwaters.",
    path: "/terms",
    keywords: [
      "tranquil cruise terms",
      "houseboat booking terms",
      "kerala backwater booking conditions",
    ],
    intro: [
      "These terms give a simple overview of how bookings, trip coordination, and guest communication are usually handled through Tranquil Cruise.",
      "They are meant to set expectations around enquiries, confirmations, pricing context, and changes before the trip takes place.",
    ],
    highlights: [
      "Pricing and availability depend on dates, route, and group details",
      "Bookings are only considered confirmed once direct confirmation is provided",
      "Changes may affect timing, availability, or rates",
    ],
    sections: [
      {
        title: "Enquiries and confirmations",
        body: [
          "An enquiry helps begin the planning process, but availability and pricing can still change until the booking is directly confirmed for your dates and group.",
          "Because many trips are shaped around route timing and the size of the party, accurate information from the guest helps avoid confusion later.",
        ],
      },
      {
        title: "Changes and trip coordination",
        body: [
          "Changes to dates, group size, or experience type can affect the route, the boat format, and the final booking structure.",
          "When that happens, we work from the latest request details and the practical availability for those dates.",
        ],
      },
    ],
    faqs: [
      {
        question: "When is a booking considered confirmed?",
        answer:
          "A booking should be treated as confirmed only after direct confirmation is provided for the dates, group details, and selected experience.",
      },
      {
        question: "Can trip changes affect the final plan?",
        answer:
          "Yes. Changes to dates, route timing, or group size can affect availability, format, and pricing, especially for private houseboats.",
      },
    ],
    ctas: [
      { label: "Contact us about a booking", href: "/contact" },
      { label: "Read refund policy", href: "/refund-policy", variant: "secondary" },
    ],
  },
  "refund-policy": {
    title: "Refund Policy",
    eyebrow: "Cancellation Guidance",
    description:
      "Understand the refund and cancellation approach for Tranquil Cruise bookings, date changes, and backwater trip adjustments in Alappuzha.",
    path: "/refund-policy",
    keywords: [
      "tranquil cruise refund policy",
      "houseboat cancellation policy",
      "alappuzha booking refund policy",
    ],
    intro: [
      "Refund outcomes for backwater bookings usually depend on the timing of the cancellation, whether the trip was custom-planned, and what stage the booking is in when changes are requested.",
      "This page gives a clear overview so guests know that refund questions are handled in the context of the actual booking details rather than with one generic answer for every trip.",
    ],
    highlights: [
      "Refund decisions depend on timing, booking stage, and the type of experience reserved",
      "Date changes can sometimes work better than a full cancellation",
      "Direct communication usually leads to the clearest outcome",
    ],
    sections: [
      {
        title: "How cancellations are usually handled",
        body: [
          "Because houseboats and curated backwater trips are often blocked off for specific dates, the cancellation timeline matters. Earlier communication generally gives more room to reshape the booking or discuss next steps.",
          "The exact refund position can also depend on the boat category, route planning, and whether vendors or crews were already locked in for your date.",
        ],
      },
      {
        title: "Why direct review matters",
        body: [
          "Private travel bookings are not always interchangeable, so the best way to handle refund requests is to review the actual booking details and timing directly.",
          "If travel plans shift, date changes or a different experience format may sometimes be the most practical alternative.",
        ],
      },
    ],
    faqs: [
      {
        question: "Are all cancellations refunded in the same way?",
        answer:
          "No. The outcome depends on the booking stage, the timing of the request, and the kind of experience that was reserved.",
      },
      {
        question: "Can I ask for a date change instead of cancelling?",
        answer:
          "Yes. In many cases, changing the date or adjusting the plan may be more workable than cancelling the trip outright.",
      },
    ],
    ctas: [
      { label: "Contact us about changes", href: "/contact" },
      { label: "Read terms", href: "/terms", variant: "secondary" },
    ],
  },
};

export function getInformationalPage(slug: keyof typeof informationalPages) {
  return informationalPages[slug];
}
