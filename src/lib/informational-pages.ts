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
  "alappuzha-houseboat-booking": {
    title: "Alappuzha Houseboat Booking",
    eyebrow: "Local Booking Intent",
    description:
      "Plan your Alappuzha houseboat booking with direct guidance on routes, room types, inclusions, overnight stays, and the right private backwater format for your group.",
    path: "/alappuzha-houseboat-booking",
    keywords: [
      "alappuzha houseboat booking",
      "book alappuzha houseboat",
      "private alappuzha houseboat booking",
      "alleppey houseboat booking",
    ],
    intro: [
      "An Alappuzha houseboat booking usually goes best when the decision starts with group size, overnight intent, and route style rather than with a generic rate list alone.",
      "This page is built for guests who already know they want a houseboat in Alappuzha or Alleppey and now need a clearer route into the right private stay, day cruise, or overnight format.",
    ],
    highlights: [
      "Best for direct booking-intent searches rather than broad backwater research",
      "Helps narrow the right houseboat type before final availability is checked",
      "Connects booking intent with route fit, room count, and comfort level",
    ],
    sections: [
      {
        title: "How to choose the right Alappuzha houseboat before you book",
        body: [
          "The most useful first step is to decide whether the booking is for a couple, a family, or a private group, because that changes the room-count logic immediately.",
          "After that, the main decisions are whether the stay should be a shorter day cruise or a slower overnight houseboat experience with dinner, AC timing, and a morning on the water.",
        ],
      },
      {
        title: "What guests usually want clarified during booking",
        body: [
          "Most guests ask about inclusions, AC timing, food, boarding point, route type, and whether the selected boat really suits their group instead of just fitting the keyword.",
          "That is why a stronger booking page should answer the practical planning questions early and then direct each guest to the best supporting page for luxury, budget, family, or overnight intent.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is included in an Alappuzha houseboat booking?",
        answer:
          "Most Alappuzha houseboat bookings include the private boat, crew, cruising time, lounge and deck access, and meals or refreshments depending on whether the plan is a day cruise or overnight stay.",
      },
      {
        question: "How do I book the best houseboat in Alappuzha?",
        answer:
          "Start with group size, room count, overnight versus day-cruise intent, and how private or premium you want the trip to feel. Those details usually matter more than category labels alone.",
      },
      {
        question: "Is Alleppey houseboat booking the same as Alappuzha houseboat booking?",
        answer:
          "Yes. Alleppey and Alappuzha refer to the same houseboat destination in Kerala, so both terms are used for the same local backwater region.",
      },
    ],
    ctas: [
      { label: "Open Alappuzha houseboat guide", href: "/alappuzha-houseboat" },
      { label: "Check availability", href: "/contact", variant: "secondary" },
    ],
  },
  "houseboat-in-alappuzha": {
    title: "Houseboat In Alappuzha",
    eyebrow: "Destination-Led Booking Guide",
    description:
      "Compare the best houseboat in Alappuzha for couples, families, overnight stays, and private backwater routes with clearer local planning support.",
    path: "/houseboat-in-alappuzha",
    keywords: [
      "houseboat in alappuzha",
      "best houseboat in alappuzha",
      "private houseboat in alappuzha",
      "overnight houseboat in alappuzha",
    ],
    intro: [
      "Guests who search for a houseboat in Alappuzha are usually already committed to the destination and mainly need help choosing the right format.",
      "That makes this page useful for comparing who each houseboat type fits best, from couples and families to groups who need more rooms and a steadier overnight layout.",
    ],
    highlights: [
      "Best for destination-first houseboat searches",
      "Helps narrow the best houseboat in Alappuzha by trip style",
      "Connects broad local intent with room-count and overnight pages",
    ],
    sections: [
      {
        title: "Who each houseboat format usually fits best",
        body: [
          "One-bedroom formats are usually strongest for couples, while two-bedroom and three-bedroom layouts work better for families and mixed-age private groups.",
          "Larger room-count boats make more sense when the trip is group-led and shared deck space matters as much as the bedrooms themselves.",
        ],
      },
      {
        title: "Why route and boarding details still matter",
        body: [
          "The best houseboat in Alappuzha is not only about the room count. It is also about whether the route mood, boarding convenience, food timing, and overnight flow suit the trip.",
          "That is why this page should sit close to the route, booking, and boarding-point pages instead of trying to stand alone as a single generic local guide.",
        ],
      },
    ],
    faqs: [
      {
        question: "Which is the best houseboat in Alappuzha for families?",
        answer:
          "For most families, the strongest starting point is a two-bedroom or three-bedroom private houseboat because it creates better room balance and a calmer overnight rhythm.",
      },
      {
        question: "Can I choose a houseboat in Alappuzha for a day cruise only?",
        answer:
          "Yes. Day cruises are available if you want the houseboat feel and route scenery without staying overnight on the water.",
      },
      {
        question: "What makes a houseboat in Alappuzha feel premium?",
        answer:
          "Premium stays usually feel stronger because of room comfort, route pacing, food service, and overall privacy rather than because of one feature alone.",
      },
    ],
    ctas: [
      { label: "Compare houseboats", href: "/houseboats/compare" },
      { label: "Ask about local options", href: "/contact", variant: "secondary" },
    ],
  },
  "boarding-point-alappuzha-houseboat": {
    title: "Boarding Point Alappuzha Houseboat",
    eyebrow: "Arrival & Logistics Guide",
    description:
      "Understand the boarding-point side of an Alappuzha houseboat booking, including arrival planning, local timing, route context, and what to confirm before departure.",
    path: "/boarding-point-alappuzha-houseboat",
    keywords: [
      "boarding point alappuzha houseboat",
      "alappuzha houseboat boarding point",
      "alleppey houseboat boarding point",
      "alappuzha houseboat pickup point",
    ],
    intro: [
      "One of the most common local planning questions is not only which houseboat to book, but where the houseboat trip actually begins in Alappuzha.",
      "This page helps guests understand arrival planning, map checks, and what to confirm before the day of boarding so the houseboat experience starts more smoothly.",
    ],
    highlights: [
      "Useful for arrival planning and local trust-building",
      "Supports Google Business Profile relevance with location detail",
      "Works best when paired with booking and route pages",
    ],
    sections: [
      {
        title: "What to confirm before you arrive",
        body: [
          "Guests should confirm the final boarding point, arrival time, contact number, and whether the trip is a day cruise or overnight stay before traveling to the Alappuzha base.",
          "This helps avoid confusion around route timing and makes the handoff from transport to houseboat much easier.",
        ],
      },
      {
        title: "Why boarding details matter for local SEO too",
        body: [
          "A real boarding-point page helps guests trust that the business is actually operating locally in Alappuzha rather than functioning as a generic lead-generation site.",
          "That kind of location clarity can also strengthen how Google understands the relationship between the business profile, the contact page, and the local booking pages.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do all Alappuzha houseboats start from the same boarding point?",
        answer:
          "Not always. The exact boarding point can depend on the selected boat, route plan, and local scheduling, so it is best to confirm the final location directly before the trip.",
      },
      {
        question: "Should I check the map before traveling to the houseboat base?",
        answer:
          "Yes. Opening the map in advance and confirming the final contact details helps make arrival smoother, especially during a tight same-day schedule.",
      },
      {
        question: "Can the boarding point affect the route mood?",
        answer:
          "Yes. Boarding logistics can affect how quickly the trip enters quieter canals or wider water, so route feel and boarding details are often connected.",
      },
    ],
    ctas: [
      { label: "Open contact page", href: "/contact" },
      { label: "Read the booking guide", href: "/alappuzha-houseboat-booking", variant: "secondary" },
    ],
  },
  "alappuzha-houseboat-price-guide": {
    title: "Alappuzha Houseboat Price Guide",
    eyebrow: "Price Intent Guide",
    description:
      "Understand Alappuzha houseboat prices, what changes the final rate, and how budget, luxury, overnight, and room-count choices affect the booking.",
    path: "/alappuzha-houseboat-price-guide",
    keywords: [
      "alappuzha houseboat price",
      "alappuzha houseboat rates",
      "budget houseboat alappuzha price",
      "luxury houseboat alappuzha price",
    ],
    intro: [
      "Alappuzha houseboat prices are usually shaped by room count, overnight versus day-cruise timing, route style, food, and service level rather than one flat public rate.",
      "That means the strongest price guide should help guests understand how rates move before they decide whether the right fit is budget, luxury, family, or overnight.",
    ],
    highlights: [
      "Price is usually driven by layout, route, stay length, and service level",
      "Budget and luxury are different booking paths, not just different numbers",
      "A clear price page should send guests into the right format page quickly",
    ],
    sections: [
      {
        title: "What usually changes the price most",
        body: [
          "The biggest rate drivers are the number of bedrooms, whether the plan is a daytime cruise or an overnight stay, the route pace, and the food or service level expected on board.",
          "That is why a price-led query should not stop at one answer but move quickly into the pages that explain budget, luxury, family, and overnight fit.",
        ],
      },
      {
        title: "How to use a price guide without choosing the wrong boat",
        body: [
          "Price alone is not enough to choose the best Alappuzha houseboat. The quote should still be checked against room count, route mood, and whether the stay is meant to feel simple, premium, or family-led.",
          "A stronger booking flow uses the price page as an entry point into the right stay format rather than as a stand-alone answer.",
        ],
      },
    ],
    faqs: [
      {
        question: "Why does Alappuzha houseboat price vary so much?",
        answer:
          "The rate can change based on room count, day cruise versus overnight stay, route style, food inclusions, and the overall service level of the selected boat.",
      },
      {
        question: "Is a budget houseboat in Alappuzha always the cheapest option?",
        answer:
          "Not always. The right value depends on how the layout, route, and overnight comfort match the group rather than on the lowest number alone.",
      },
      {
        question: "Does luxury houseboat pricing usually include better route pacing and comfort?",
        answer:
          "Yes. Luxury pricing is usually tied to stronger room comfort, more polished service, and a better overall overnight or private-cruise feel.",
      },
    ],
    ctas: [
      { label: "Compare budget vs luxury", href: "/houseboats" },
      { label: "Ask for a quote", href: "/contact", variant: "secondary" },
    ],
  },
  "alappuzha-houseboat-routes-guide": {
    title: "Alappuzha Houseboat Routes Guide",
    eyebrow: "Route Intent Guide",
    description:
      "Compare Alappuzha houseboat routes across canal stretches, open-water views, quieter village sections, and overnight route pacing before you book.",
    path: "/alappuzha-houseboat-routes-guide",
    keywords: [
      "alappuzha houseboat route guide",
      "alappuzha houseboat routes",
      "alleppey houseboat route",
      "best alappuzha houseboat route",
    ],
    intro: [
      "One of the biggest quality differences between houseboat experiences in Alappuzha is not only the boat itself but the route mood it follows.",
      "Some guests want village canals, some want wider lake views, and others want a balanced overnight route that leaves room for dinner service and calmer evening time.",
    ],
    highlights: [
      "Route mood changes the experience more than many first-time guests expect",
      "Village canals and wider water suit different kinds of trips",
      "The best route depends on group type, overnight intent, and pace",
    ],
    sections: [
      {
        title: "Canal-led routes versus wider-water routes",
        body: [
          "Canal-led sections usually feel greener, more local, and more intimate, while wider-water routes often deliver the classic open-backwater houseboat mood many travelers picture first.",
          "A stronger route guide should help guests decide which one suits the trip rather than treating every Alappuzha houseboat plan as interchangeable.",
        ],
      },
      {
        title: "Why overnight route pacing matters",
        body: [
          "On overnight stays, the route needs to leave enough room for afternoon cruising, dinner flow, quieter evening time, and a slower morning rather than feeling rushed for daytime sightseeing only.",
          "That makes route guidance especially important for couples, families, and private groups who are not just choosing a boat but a complete rhythm for the stay.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the best Alappuzha houseboat route for first-time guests?",
        answer:
          "For many first-time guests, a balanced route that includes both calmer canals and wider backwater sections gives the clearest feel for the Alappuzha experience.",
      },
      {
        question: "Are overnight routes different from day-cruise routes?",
        answer:
          "Yes. Overnight routes are usually planned with more attention to pacing, dinner flow, evening calm, and morning comfort instead of fitting everything into one daytime block.",
      },
      {
        question: "Do route choices affect which houseboat I should book?",
        answer:
          "Yes. The best route and the best boat often work together, especially when family comfort, privacy, or premium pacing are part of the trip.",
      },
    ],
    ctas: [
      { label: "Open Alappuzha houseboat guide", href: "/alappuzha-houseboat" },
      { label: "Compare overnight options", href: "/overnight-houseboat-alappuzha", variant: "secondary" },
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
