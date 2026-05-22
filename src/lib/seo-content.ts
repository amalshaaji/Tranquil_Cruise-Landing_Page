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

const serviceFaqMap: Record<string, FaqItem[]> = {
  houseboats: [
    {
      question: "How much does a private houseboat in Alleppey cost?",
      answer:
        "Pricing depends on the season, boat size, route, meal plan, and whether you want a day cruise or an overnight stay. Contact Tranquil Cruise for current private houseboat rates for your dates.",
    },
    {
      question: "What is included in a Tranquil Cruise houseboat stay?",
      answer:
        "A typical private houseboat stay includes the boat, crew, cruising time, bedroom access, meals or refreshments based on the plan, and help shaping the route around your group and timing.",
    },
    {
      question: "Which is better: houseboat or shikara ride?",
      answer:
        "A houseboat is better if you want more comfort, privacy, dining space, and time on the water. A shikara ride is better if you want a shorter, more intimate canal experience through narrower Alleppey routes.",
    },
    {
      question: "Is the houseboat suitable for families?",
      answer:
        "Yes. Families often choose the two-bedroom, three-bedroom, or five-bedroom houseboats because they offer more shared space, private rooms, and an easier pace for children and older guests.",
    },
    {
      question: "Where does the cruise start?",
      answer:
        "Houseboat departures are arranged in the Alappuzha area. Your exact starting point depends on the route, boat selection, and date, and we confirm those details during booking.",
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
  ],
};

const pageLinkGraphs: Record<string, InternalLinkGraph> = {
  "/houseboats": {
    eyebrow: "Houseboat Hub",
    title: "Use the main houseboats page as your hub, then branch into the stay that fits your group.",
    intro:
      "Start with the main houseboats hub if you are still deciding on layout, pace, or stay style. Then move into the spoke pages that match your group size or route preference.",
    hub: {
      title: "Alleppey Backwater Tour Guide",
      href: "/alleppey-backwater-tour",
      description:
        "Start higher up the funnel if you are still comparing houseboats with shikara rides, country boats, or kayaking.",
    },
    contextualLinks: [
      {
        title: "Day Cruise Alappuzha",
        href: "/day-cruise-alappuzha",
        description:
          "Choose this if you want the houseboat feel and onboard comfort without staying overnight.",
      },
      {
        title: "Overnight Houseboat Alappuzha",
        href: "/overnight-houseboat-alappuzha",
        description:
          "Choose this if dinner, evening calm, and a slower overnight rhythm matter most.",
      },
      {
        title: "Private Shikara Rides",
        href: "/shikkara",
        description:
          "Move here if a shorter, narrower-canal ride makes more sense than a larger houseboat.",
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

export function getInternalLinkGraph(path: string): InternalLinkGraph | undefined {
  return pageLinkGraphs[path];
}
