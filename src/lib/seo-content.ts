import type { FaqItem } from "@/lib/seo";

export type InternalLinkItem = {
  title: string;
  href: string;
  description: string;
};

export type InternalLinkGraph = {
  eyebrow?: string;
  title: string;
  intro: string;
  hub?: InternalLinkItem;
  contextualLinks: InternalLinkItem[];
  spokeLinks?: InternalLinkItem[];
};

export const CORE_AEO_QUESTIONS = [
  "How much does an Alleppey houseboat cost?",
  "What is included in an Alleppey houseboat booking?",
  "What is the difference between a houseboat and a shikkara ride?",
  "Is an Alleppey houseboat good for couples?",
  "Is an Alleppey houseboat safe for families with kids?",
  "What time does an overnight houseboat start and end?",
  "Is AC available in Alleppey houseboats?",
  "Which is better: day cruise or overnight houseboat?",
  "How do I book with Tranquil Cruise?",
] as const;

const serviceFaqMap: Record<string, FaqItem[]> = {
  houseboats: [
    {
      question: "How much does an Alleppey houseboat cost?",
      answer:
        "An Alleppey or Alappuzha houseboat quote depends on boat type, route, season, meals, AC timing, and guest count. Private day cruises and overnight stays are priced around the exact plan, so the clearest way to get an accurate Alleppey houseboat booking quote is to share your dates and group size directly.",
    },
    {
      question: "What is included in an Alleppey houseboat booking?",
      answer:
        "A private Alleppey houseboat booking usually includes the boat, crew, cruising time, bedroom and deck access, and meals or refreshments based on whether you choose a day cruise or an overnight stay. Exact inclusions still depend on whether you book a luxury houseboat Alappuzha stay, a budget houseboat Alappuzha format, or a specific room-count layout.",
    },
    {
      question: "What is the difference between a houseboat and a shikkara ride?",
      answer:
        "A houseboat is better if you want more comfort, privacy, dining space, and time on the water. A shikkara ride is better if you want a shorter, more intimate canal experience through narrower Alleppey and Alappuzha village routes that larger boats do not handle as closely.",
    },
    {
      question: "Is an Alleppey houseboat good for couples?",
      answer:
        "Yes. Couples often choose a private one-bedroom houseboat because it gives them sunset cruise routes, dinner on board, and quieter stretches of the Kerala backwaters without the feel of a larger group boat. The best fit depends on whether you want a shorter day cruise or a slower overnight stay.",
    },
    {
      question: "Is an Alleppey houseboat safe for families with kids?",
      answer:
        "Yes, when the houseboat layout matches the group and the family follows the basic onboard safety guidance. Families usually prefer two-bedroom or three-bedroom formats because they offer steadier movement, more shared lounge space, and an easier pace for children, parents, and grandparents together.",
    },
    {
      question: "What time does an overnight houseboat start and end?",
      answer:
        "Overnight houseboat timing depends on the route and boat plan, but the stay is usually built around a daytime start, sunset cruising, dinner on board, and checkout the next morning. The exact start and end should always be confirmed before booking because route pace and AC timing can vary.",
    },
    {
      question: "Is AC available in Alleppey houseboats?",
      answer:
        "AC is available on many Alleppey houseboats, but the schedule and room setup can vary by boat type and stay format. It is best to confirm the AC timing, bedroom layout, and overnight comfort before booking so the plan matches your group and the season.",
    },
    {
      question: "Which is better: day cruise or overnight houseboat?",
      answer:
        "A day cruise is better if you want the houseboat atmosphere, scenic cruising, and onboard meals within one daytime schedule. An overnight houseboat is better if you want sunset time, dinner on board, a slower morning, and more time to settle into the Kerala backwaters.",
    },
    {
      question: "How do I book with Tranquil Cruise?",
      answer:
        "Booking is usually simplest through WhatsApp. Share your travel date, guest count, and whether you want a day cruise, overnight houseboat, shikkara ride, or another backwater experience, and Tranquil Cruise can guide you toward the right route, boat format, and next booking step.",
    },
  ],
  shikkara: [
    {
      question: "What is a shikara ride in Alleppey?",
      answer:
        "A shikara ride is a private, canopied boat experience that moves through Alleppey's narrower canals and quieter backwater routes at a slower pace than larger boats.",
    },
    {
      question: "How long is a shikara ride?",
      answer:
        "Most rides are planned around 1 to 3 hours depending on the route, timing, and whether you want a sunrise, daytime, or sunset experience.",
    },
    {
      question: "Is shikara better than a houseboat?",
      answer:
        "A shikara is better for a shorter scenic ride and quieter canal access. A houseboat is better if you want more comfort, more time on the water, meals, or an overnight Kerala backwater stay.",
    },
    {
      question: "Who is a shikkara ride best for in Alappuzha?",
      answer:
        "A shikkara ride is usually best for couples, small families, and guests who want a softer sightseeing plan without committing to a full houseboat stay. It works especially well when the trip is meant to feel scenic, calm, and easy rather than long or activity-heavy.",
    },
    {
      question: "What time of day is best for a shikkara ride?",
      answer:
        "Morning and sunset are usually the most comfortable times because the weather feels softer and the canal atmosphere is calmer. The best choice still depends on the season, your pace, and whether you want brighter sightseeing or a more romantic golden-hour mood.",
    },
    {
      question: "Is a shikkara ride private?",
      answer:
        "Private shikkara rides can be arranged, and many guests prefer them because the experience feels quieter, more flexible, and easier to shape around their own route and timing.",
    },
  ],
  kayaking: [
    {
      question: "Is kayaking in Alleppey safe for beginners?",
      answer:
        "Yes. Beginner-friendly kayaking routes are available, and we help match you with calmer backwater stretches and a suitable pace if you are new to paddling.",
    },
    {
      question: "What should I wear for backwater kayaking?",
      answer:
        "Wear light, quick-drying clothes, sun protection, and footwear that can handle water. Morning and sunset sessions are usually the most comfortable in Kerala's climate.",
    },
    {
      question: "Who is backwater kayaking best for in Alappuzha?",
      answer:
        "Backwater kayaking is usually best for couples, friends, and active travelers who want a quieter, closer-to-water experience than a larger sightseeing boat. It also works well for beginners who want movement without a highly technical route.",
    },
    {
      question: "Is kayaking better than a shikkara or country boat ride?",
      answer:
        "Kayaking is better if you want a more active experience and a closer feel to the water. A shikkara or country boat is better if you prefer to sit back, move more slowly, and focus on sightseeing without paddling.",
    },
    {
      question: "What time of day is best for kayaking in Alleppey?",
      answer:
        "Morning and late afternoon are usually the most comfortable times because the light is softer and the weather feels easier for paddling. The best session still depends on the season, your energy level, and the kind of route you want.",
    },
    {
      question: "How long does a kayaking session usually last?",
      answer:
        "Kayaking sessions can be shaped around shorter scenic paddles or longer guided trails depending on the route, the group, and how active you want the experience to feel.",
    },
  ],
  "canoe-boats": [
    {
      question: "What is a country boat ride in Alleppey?",
      answer:
        "A country boat ride is a slower, more local backwater experience through village canals and narrower waterways in Alleppey and Alappuzha. It is usually chosen by guests who want a softer sightseeing format rather than a larger houseboat cruise.",
    },
    {
      question: "Who is a country boat ride best for?",
      answer:
        "Country boat rides are best for guests who want a quieter village-canal experience, a more traditional local boat format, and a slower connection to the backwaters than a bigger cruise usually offers.",
    },
    {
      question: "Is a country boat better than a shikkara ride?",
      answer:
        "A country boat is better if you want a simpler, more local-feeling canal ride. A shikkara is better if you want cushioned seating, a more polished sightseeing setup, and a lighter private ride with more comfort.",
    },
    {
      question: "Are country boat rides private?",
      answer:
        "Private country boat rides can be arranged, and the exact setup depends on the route, guest count, and the kind of village-canal experience you want.",
    },
    {
      question: "What kind of route does a country boat usually follow?",
      answer:
        "Most country boat routes focus on quieter village canals, local scenery, coconut-lined waterways, and the slower everyday side of the Alappuzha backwaters that larger boats usually miss.",
    },
    {
      question: "How long does a country boat ride usually last?",
      answer:
        "The route length can vary based on your pace, the canal section, and whether you want a compact sightseeing ride or a longer village-focused experience.",
    },
  ],
  rooms: [
    {
      question: "Are rooms near the Alleppey backwaters available?",
      answer:
        "Yes. Tranquil Cruise can help arrange backwater rooms and homestays in the Alappuzha area based on your travel dates, comfort preferences, and whether you want water-facing surroundings.",
    },
    {
      question: "Can I combine a room stay with a houseboat or shikara ride?",
      answer:
        "Yes. Many guests pair a room stay with a private houseboat cruise, a Shikara or Shikkara ride, or another backwater activity so the trip feels more balanced.",
    },
    {
      question: "Who should choose a backwater room instead of an overnight houseboat?",
      answer:
        "A backwater room is usually better for guests who want a quieter land-based stay, more flexibility around check-in and sightseeing, or a simpler trip structure than sleeping overnight on a boat.",
    },
    {
      question: "Are these rooms suitable for couples and families?",
      answer:
        "Yes. Some stays are better suited to couples who want a quieter waterside atmosphere, while others work better for families who want more practical comfort and easier access to nearby activities.",
    },
    {
      question: "Do backwater stays work well with other Alleppey experiences?",
      answer:
        "Yes. Many guests use a room or homestay as the base for a houseboat cruise, shikkara ride, kayaking session, or a slower sightseeing day in Alappuzha.",
    },
  ],
  spa: [
    {
      question: "What wellness or spa services are available?",
      answer:
        "Spa and wellness options can include Ayurvedic massages, restorative treatments, and slower wellness-focused sessions shaped around your stay and timing.",
    },
    {
      question: "Can spa services be combined with a backwater stay?",
      answer:
        "Yes. Spa sessions can be paired with a room stay, a houseboat plan, or a slower Kerala backwater itinerary for guests who want both rest and sightseeing.",
    },
    {
      question: "Who is the spa experience best for?",
      answer:
        "Spa and wellness sessions are usually best for guests who want a calmer layer in the trip, whether that means recovery after travel, a slower couples plan, or a more restful break between sightseeing experiences.",
    },
    {
      question: "When is the best time to schedule a spa session?",
      answer:
        "The best time is usually when the session can sit comfortably beside the rest of your plan rather than being rushed in between activities. Many guests prefer to place it before a quieter evening or after a cruise or sightseeing day.",
    },
    {
      question: "Can Ayurvedic wellness be part of a wider Alleppey itinerary?",
      answer:
        "Yes. Wellness sessions often work best as part of a wider Alleppey plan that also includes a room stay, a houseboat experience, or a slower backwater sightseeing day.",
    },
  ],
};

const pageLinkGraphs: Record<string, InternalLinkGraph> = {
  "/houseboats": {
    eyebrow: "Houseboat Hub",
    title: "Use the main Alappuzha houseboat hub to compare luxury, budget, and overnight booking paths before you choose a boat.",
    intro:
      "Start with the main houseboats hub if you are still deciding on layout, pace, or stay style. Then move into the next-step pages that match whether your trip needs the best houseboat in Alappuzha for comfort, a lighter budget plan, or a slower overnight stay.",
    hub: {
      title: "Alleppey Backwater Tour Guide",
      href: "/alleppey-backwater-tour",
      description:
        "Start higher up the funnel if you are still comparing houseboats with shikara rides, country boats, or kayaking.",
    },
    contextualLinks: [
      {
        title: "Luxury Houseboat Alappuzha",
        href: "/luxury-houseboat-alappuzha",
        description:
          "Choose this if your Alappuzha houseboat booking needs premium rooms, polished service, and a more curated private cruise feel.",
      },
      {
        title: "Budget Houseboat Alappuzha",
        href: "/budget-houseboat-alappuzha",
        description:
          "Move here if you want a value-focused Alleppey houseboat booking with practical layouts and a simpler spend.",
      },
      {
        title: "Overnight Houseboat Stay Alappuzha",
        href: "/overnight-houseboat-alappuzha",
        description:
          "Choose this if dinner, evening calm, bedroom access, and a slower night-on-the-water rhythm matter most.",
      },
    ],
    spokeLinks: [
      {
        title: "Single Bedroom Houseboat",
        href: "/houseboats/single-bed",
        description:
          "Best for couples or solo travelers who want a more compact private stay.",
      },
      {
        title: "2 Bedroom Houseboat",
        href: "/houseboats/2-bedroom",
        description:
          "Usually the strongest fit for small families or a more balanced group layout.",
      },
      {
        title: "Houseboat Comparison Page",
        href: "/houseboats/compare",
        description:
          "Use this when the main question is which room count, layout, or stay style makes the most sense before you commit to one format.",
      },
      {
        title: "3 Bedroom Houseboat",
        href: "/houseboats/3-bedroom",
        description:
          "A better match for multi-room group stays that still want a relaxed private feel.",
      },
      {
        title: "5 Bedroom Houseboat",
        href: "/houseboats/5-bedroom",
        description:
          "Best for celebrations, reunions, and larger private groups who need more shared space.",
      },
    ],
  },
  "/canoe-boats": {
    eyebrow: "Related Paths",
    title: "Keep the trip close to the water, but compare how active you want it to feel.",
    intro:
      "Country boats work well when you want village canals and local scenery. These related pages help you compare that softer pace with other lighter backwater formats.",
    hub: {
      title: "Alleppey Backwater Tour Guide",
      href: "/alleppey-backwater-tour",
      description:
        "Use the planning guide if you are still deciding between larger cruises and smaller route formats.",
    },
    contextualLinks: [
      {
        title: "Private Shikara Rides",
        href: "/shikkara",
        description:
          "Compare this if you want cushioned seating, shade, and a more polished sightseeing ride.",
      },
      {
        title: "Backwater Kayaking",
        href: "/kayaking",
        description:
          "Move here if you want the same quiet waterways with a more active pace.",
      },
      {
        title: "Things To Do In Alappuzha",
        href: "/things-to-do-in-alappuzha",
        description:
          "Zoom out into a broader local-activity hub if you are still shaping the itinerary.",
      },
    ],
  },
  "/shikkara": {
    eyebrow: "Ride Comparisons",
    title: "Use the shikkara page as the lighter canal-ride option, then compare it against the next closest formats.",
    intro:
      "Shikkara rides work best when guests quickly understand how they differ from a day cruise, a full houseboat, or a more active kayaking route.",
    hub: {
      title: "Things To Do In Alappuzha",
      href: "/things-to-do-in-alappuzha",
      description:
        "Step back into the broader ideas page if you are still comparing several Alleppey and Alappuzha experiences at once.",
    },
    contextualLinks: [
      {
        title: "Day Cruise Alappuzha",
        href: "/day-cruise-alappuzha",
        description:
          "Choose this if the shikkara plan needs more lounge comfort, onboard meals, and a longer daytime route.",
      },
      {
        title: "Luxury Houseboats",
        href: "/houseboats",
        description:
          "Move here if the ride should become a fuller private cruise with dinner, overnight pacing, or a larger deck-and-room setup.",
      },
      {
        title: "Best Time To Visit Alappuzha",
        href: "/best-time-to-visit-alappuzha",
        description:
          "Check seasonality if you are deciding between a cooler sunrise ride, a sunset canal plan, or a monsoon mood.",
      },
    ],
  },
  "/kayaking": {
    eyebrow: "Activity Planning",
    title: "Use the kayaking page when you want the most active route, then compare it with the calmer backwater formats around it.",
    intro:
      "Kayaking sits closest to shikkara rides and country boats in the planning graph, but it also works as an add-on beside houseboats and room stays.",
    hub: {
      title: "Things To Do In Alappuzha",
      href: "/things-to-do-in-alappuzha",
      description:
        "Step back into the broader ideas hub if you are still deciding whether the day should be activity-led or more relaxed.",
    },
    contextualLinks: [
      {
        title: "Private Shikkara Rides",
        href: "/shikkara",
        description:
          "Choose this if you want the same canal scenery without paddling and with a softer sightseeing pace.",
      },
      {
        title: "Country Boats",
        href: "/canoe-boats",
        description:
          "Move here if the appeal is village canals and local scenery, but you would rather sit back than kayak.",
      },
      {
        title: "Best Time To Visit Alappuzha",
        href: "/best-time-to-visit-alappuzha",
        description:
          "Use this if the best kayaking window depends on lighter weather, softer sunrise light, or a calmer seasonal route.",
      },
    ],
  },
  "/day-cruise-alappuzha": {
    eyebrow: "Related Cruise Paths",
    title: "Use the day-cruise page as the daytime houseboat option, then branch into the closest next-step pages.",
    intro:
      "Day cruises sit between lighter canal rides and full overnight houseboat stays. These links help guests compare the right next option without leaving the houseboat-planning flow.",
    hub: {
      title: "Luxury Houseboats in Alleppey",
      href: "/houseboats",
      description:
        "Step back into the main houseboats hub if you still want to compare room layouts, route styles, and private stay formats.",
    },
    contextualLinks: [
      {
        title: "Overnight Houseboat Alappuzha",
        href: "/overnight-houseboat-alappuzha",
        description:
          "Move here if the trip needs dinner on board, a bedroom stay, and a slower morning rhythm beyond a daytime cruise.",
      },
      {
        title: "Private Shikkara Rides",
        href: "/shikkara",
        description:
          "Choose this if the day-cruise idea feels too long and a lighter canal ride would suit the group better.",
      },
      {
        title: "Best Time To Visit Alappuzha",
        href: "/best-time-to-visit-alappuzha",
        description:
          "Use this if weather comfort, open-deck time, or the best season for a daytime houseboat plan is still part of the decision.",
      },
    ],
    spokeLinks: [
      {
        title: "Family Houseboat Alappuzha",
        href: "/family-houseboat-alappuzha",
        description:
          "Open this if the day cruise is being planned for parents, children, or a mixed-age group and you want the family-specific version of the booking advice.",
      },
    ],
  },
  "/family-houseboat-alappuzha": {
    eyebrow: "Family Planning Links",
    title: "Use the family houseboat page to narrow the group fit, then compare it against the next most relevant routes and guides.",
    intro:
      "Family bookings usually need a clearer next step after room-count planning. These links help connect the family stay page to timing, route style, and the closest couple or daytime alternatives.",
    hub: {
      title: "Luxury Houseboats in Alleppey",
      href: "/houseboats",
      description:
        "Return to the main houseboats hub if you still need to compare all private layouts before locking the family-friendly format.",
    },
    contextualLinks: [
      {
        title: "Day Cruise Alappuzha",
        href: "/day-cruise-alappuzha",
        description:
          "Compare this if the group may prefer a full daytime houseboat with meals rather than managing an overnight family stay.",
      },
      {
        title: "Best Time To Visit Alappuzha",
        href: "/best-time-to-visit-alappuzha",
        description:
          "Use this if the family decision still depends on weather comfort, school-holiday timing, or the season that feels easiest for children and grandparents.",
      },
      {
        title: "Alappuzha Vs Kumarakom",
        href: "/alappuzha-vs-kumarakom",
        description:
          "Open this if the family is still choosing the destination itself and needs help comparing Alappuzha with Kumarakom before booking the stay format.",
      },
    ],
    spokeLinks: [
      {
        title: "Honeymoon Houseboat Alappuzha",
        href: "/honeymoon-houseboat-alappuzha",
        description:
          "Useful when the trip shifts away from a family-led stay and toward a quieter couple-focused houseboat plan instead.",
      },
    ],
  },
  "/honeymoon-houseboat-alappuzha": {
    eyebrow: "Couple Stay Links",
    title: "Use the honeymoon page as the romantic houseboat route, then compare it against the closest next-step pages.",
    intro:
      "Couples usually decide between a romantic overnight stay, a lighter scenic ride, or a broader houseboat comparison. These links keep that decision natural and easy to follow.",
    hub: {
      title: "Luxury Houseboats in Alleppey",
      href: "/houseboats",
      description:
        "Return to the main houseboats hub if you still want a broader comparison across private formats, room counts, and route moods before choosing the romantic option.",
    },
    contextualLinks: [
      {
        title: "Private Shikkara Rides",
        href: "/shikkara",
        description:
          "Compare this if the couple wants a shorter canal-focused outing instead of a full overnight honeymoon houseboat.",
      },
      {
        title: "Best Time To Visit Alappuzha",
        href: "/best-time-to-visit-alappuzha",
        description:
          "Use this if the honeymoon decision still depends on sunset season, monsoon mood, or the most comfortable backwater weather window.",
      },
      {
        title: "Alappuzha Vs Kumarakom",
        href: "/alappuzha-vs-kumarakom",
        description:
          "Open this if the couple is still deciding which Kerala backwater destination fits the honeymoon mood better before locking the stay.",
      },
    ],
    spokeLinks: [
      {
        title: "Family Houseboat Alappuzha",
        href: "/family-houseboat-alappuzha",
        description:
          "Useful if the trip shifts from a couple-first stay toward a wider family or group houseboat plan.",
      },
    ],
  },
  "/rooms": {
    eyebrow: "Stay Planning",
    title: "Use rooms as the base layer, then connect the stay to the right on-water experience.",
    intro:
      "Rooms and homestays work best when they connect cleanly to the rest of the itinerary. These pages help guests branch from the stay into the experience that matches the trip mood.",
    hub: {
      title: "Things To Do In Alappuzha",
      href: "/things-to-do-in-alappuzha",
      description:
        "Start from the local ideas hub if you are still building the wider itinerary around the stay.",
    },
    contextualLinks: [
      {
        title: "Luxury Houseboats",
        href: "/houseboats",
        description:
          "Pair the room stay with a fuller backwater cruise when you want more comfort and time on the water.",
      },
      {
        title: "Private Shikara Rides",
        href: "/shikkara",
        description:
          "Choose this if you want a lighter sightseeing plan that fits easily around a room stay.",
      },
      {
        title: "Ayurvedic Spa & Wellness",
        href: "/spa",
        description:
          "Move here if the stay needs a calmer wellness layer rather than another boat route.",
      },
    ],
  },
  "/spa": {
    eyebrow: "Wellness Links",
    title: "Let the spa page support the trip, then connect it to the right stay or cruise format.",
    intro:
      "Spa and wellness are usually support pages in the graph rather than the main destination page. These related links help shape the wider Kerala backwater plan around that calmer intent.",
    hub: {
      title: "Kerala Backwaters Guide",
      href: "/kerala-backwaters-guide",
      description:
        "Step back into the broader planning hub if you still need the right destination and trip structure.",
    },
    contextualLinks: [
      {
        title: "Backwater Rooms & Homestays",
        href: "/rooms",
        description:
          "Add an easy stay layer if you want the wellness plan anchored on land.",
      },
      {
        title: "Luxury Houseboats",
        href: "/houseboats",
        description:
          "Combine the spa plan with a more immersive cruise if you want both rest and classic backwater scenery.",
      },
      {
        title: "Best Time To Visit Alappuzha",
        href: "/best-time-to-visit-alappuzha",
        description:
          "Check seasonality if comfort, weather, and trip pacing are still part of the decision.",
      },
    ],
  },
};

export function getServiceFaqs(slug: string): FaqItem[] {
  return serviceFaqMap[slug] ?? [];
}

export function getCoreAeoAnswers(
  questions: readonly string[] = CORE_AEO_QUESTIONS,
): FaqItem[] {
  const houseboatFaqs = serviceFaqMap.houseboats ?? [];

  return questions
    .map((question) => houseboatFaqs.find((item) => item.question === question))
    .filter((item): item is FaqItem => Boolean(item));
}

export function getInternalLinkGraph(path: string): InternalLinkGraph | undefined {
  return pageLinkGraphs[path];
}
