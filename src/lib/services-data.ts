export type ServicePage = {
  slug: string;
  title: string;
  subtitle: string;
  eyebrow: string;
  heroImage: string;
  description: string[];
  highlights: {
    title: string;
    description: string;
    icon: "anchor" | "sun" | "leaf" | "star" | "heart" | "compass" | "home" | "drop" | "flame" | "moon" | "shield" | "music";
  }[];
  facilities: string[];
  priceLabel: string;
  priceNote: string;
  gallery: string[];
  ctaText: string;
  ctaHref: string;
  options?: {
    title: string;
    description: string;
    details: string[];
    href?: string;
    ctaLabel?: string;
  }[];
};

export const services: ServicePage[] = [
  {
    slug: "houseboats",
    title: "Luxury Houseboats",
    subtitle: "Floating palaces on the serene Kerala backwaters",
    eyebrow: "Premium Experience",
    heroImage: "/images/houseboats-card-blue.jpg",
    description: [
      "Our luxury houseboats, known locally as kettuvallams, are meticulously crafted vessels that blend traditional Kerala craftsmanship with modern comforts. We offer both single-bed and double-bed houseboat options, each designed with panoramic windows, private sun decks, and a dedicated crew including a personal chef who prepares authentic Kerala cuisine.",
      "Drift through palm-fringed canals, serene lagoons, and expansive lake stretches as the backwater landscape unfolds at a calmer, more considered pace. Every journey is shaped around your preferences — sunrise departures, village stops, or unhurried overnight routes.",
    ],
    highlights: [
      {
        title: "Single & Double Bed Options",
        description:
          "Choose from cozy single-bed houseboats or more spacious double-bed options depending on your group and style of stay.",
        icon: "home",
      },
      {
        title: "Private Chef & Crew",
        description:
          "A dedicated team prepares fresh Kerala meals — seafood, traditional thalis, and sunset snacks on your private deck.",
        icon: "star",
      },
      {
        title: "Premium Suites",
        description:
          "Spacious air-conditioned bedrooms with lake-view windows, premium linens, and en-suite bathrooms.",
        icon: "home",
      },
      {
        title: "Curated Routes",
        description:
          "Choose from sunrise village canal routes, Vembanad Lake crossings, or overnight floating stays.",
        icon: "compass",
      },
      {
        title: "Panoramic Sun Deck",
        description:
          "Open-air lounging with cushioned seating, perfect for watching the backwater sunset unfold.",
        icon: "sun",
      },
      {
        title: "Traditional Craft",
        description:
          "Handbuilt using centuries-old kettuvallam techniques — coir-stitched planks, coconut fiber, and natural wood.",
        icon: "anchor",
      },
      {
        title: "Eco-Conscious",
        description:
          "Solar-powered lighting and responsible waste management to preserve the delicate backwater ecosystem.",
        icon: "leaf",
      },
    ],
    facilities: [
      "Single-bed houseboat options",
      "Double-bed houseboat options",
      "Air-conditioned bedrooms",
      "Attached western bathrooms",
      "Private sun deck",
      "Onboard kitchen",
      "Life jackets & safety gear",
      "Wi-Fi connectivity",
      "LED TV entertainment",
      "Fishing equipment",
    ],
    priceLabel: "From ₹8,000 / night",
    priceNote:
      "Rates vary by season, boat size, and route. Includes all meals, crew, and fuel. Custom multi-day packages available.",
    gallery: [
      "/images/houseboats-card-blue.jpg",
      "/images/home-backwater-houseboats.jpg",
      "/images/home-houseboat-backwater.jpg",
    ],
    options: [
      {
        title: "Single Bed Houseboat",
        description:
          "A cozy choice for solo guests or couples who want a more compact and peaceful stay on the backwaters.",
        details: [
          "Comfortable private bedroom layout",
          "Ideal for short stays and intimate getaways",
          "Private deck access and scenic cruising",
        ],
        href: "/contact?experience=houseboat&option=single-bed",
        ctaLabel: "Enquire About Single Bed",
      },
      {
        title: "2 Bedroom Houseboat",
        description:
          "A spacious two-bedroom houseboat designed for families, small groups, or guests who want more room to relax across the backwaters.",
        details: [
          "Two private air-conditioned bedrooms",
          "Large indoor lounge and dining space",
          "Open upper deck for sitting, views, and evening cruising",
        ],
        href: "/contact?experience=houseboat&option=2-bedroom",
        ctaLabel: "Enquire About 2 Bedroom",
      },
    ],
    ctaText: "Reserve Your Houseboat",
    ctaHref: "/contact",
  },
  {
    slug: "shikkara",
    title: "Shikkara Rides",
    subtitle: "Romantic boat rides through Kerala's most scenic canals",
    eyebrow: "Heritage Rides",
    heroImage: "/images/shikkara-real.png",
    description: [
      "The Shikkara is Kerala's iconic country boat — an elegant, canopied vessel that has been the heart of backwater transport for centuries. Our curated Shikkara rides offer an intimate way to experience the narrow canals, village waterways, and hidden lagoons that larger boats cannot reach.",
      "Perfect for couples, small families, or anyone seeking a slower, more personal connection with the water. Each ride includes a knowledgeable boatman who shares local stories, points out rare birdlife, and navigates the quieter, more magical waterways.",
    ],
    highlights: [
      {
        title: "Intimate Experience",
        description:
          "Small, canopied boats that carry 2–6 guests for a personal, unhurried backwater journey.",
        icon: "heart",
      },
      {
        title: "Sunset & Sunrise Rides",
        description:
          "Specially timed routes to catch the golden hour — when the backwaters are at their most magical.",
        icon: "sun",
      },
      {
        title: "Village Canal Access",
        description:
          "Navigate narrow waterways that only Shikkaras can reach — past toddy shops, temples, and local life.",
        icon: "compass",
      },
      {
        title: "Local Guide",
        description:
          "An experienced boatman shares stories, identifies birds, and takes you to hidden spots.",
        icon: "star",
      },
      {
        title: "Heritage Design",
        description:
          "Traditional canopy-covered design with cushioned seating, handcrafted from local materials.",
        icon: "anchor",
      },
      {
        title: "Refreshments Included",
        description:
          "Fresh coconut water, Kerala snacks, and chai served during your ride.",
        icon: "leaf",
      },
    ],
    facilities: [
      "Cushioned seating",
      "Rain canopy cover",
      "Life jackets",
      "Refreshment cooler",
      "Bluetooth speaker",
      "Photography assistance",
      "Flexible timing",
      "Multi-language guides",
    ],
    priceLabel: "From ₹1,500 / ride",
    priceNote:
      "Rates depend on duration (1–3 hours) and route. Sunset and sunrise premium slots available. Group discounts for 4+ guests.",
    gallery: [
      "/images/shikkara-real.png",
      "/images/shikkara.jpeg",
    ],
    ctaText: "Book a Shikkara Ride",
    ctaHref: "/contact",
  },
  {
    slug: "canoe-boats",
    title: "Canoe Boats",
    subtitle: "Paddle through untouched backwater villages",
    eyebrow: "Adventure & Nature",
    heroImage: "/images/canoe-card.png",
    description: [
      "Our canoe experiences offer the most authentic way to explore Kerala's backwaters. These open boats take you through the quietest, narrowest waterways — past village homes, coconut groves, coir-making workshops, and lush paddy fields stretching to the horizon.",
      "Whether you prefer a guided paddling adventure or a relaxed motorized canoe journey, each trip is designed to immerse you in the daily rhythms of backwater life. It's the closest you can get to the water, with nothing between you and nature.",
    ],
    highlights: [
      {
        title: "Open Boat Freedom",
        description:
          "No cabin, no walls — just you, the water, and uninterrupted 360° views of the backwater landscape.",
        icon: "sun",
      },
      {
        title: "Village Immersion",
        description:
          "Stop at local homes, watch coir-making, visit toddy tappers, and experience authentic village life.",
        icon: "home",
      },
      {
        title: "Guided or Self-Paddle",
        description:
          "Choose between a guided motorized canoe or grab a paddle and explore at your own pace.",
        icon: "compass",
      },
      {
        title: "Birdwatching Routes",
        description:
          "Quiet canoe paths through mangroves — ideal for spotting kingfishers, herons, and egrets.",
        icon: "leaf",
      },
      {
        title: "Eco-Friendly",
        description:
          "Zero-emission paddled canoes that leave no trace on the fragile backwater ecosystem.",
        icon: "heart",
      },
      {
        title: "Photography Paradise",
        description:
          "Low vantage point and slow pace create perfect conditions for backwater photography.",
        icon: "star",
      },
    ],
    facilities: [
      "Life jackets provided",
      "Waterproof bags",
      "Sun hats available",
      "Fresh drinking water",
      "Local snack stops",
      "Experienced guide",
      "Flexible routes",
      "Camera-friendly design",
    ],
    priceLabel: "From ₹800 / person",
    priceNote:
      "Rates vary by route length (1–4 hours) and group size. Private canoe options available. Morning slots recommended for birdwatching.",
    gallery: [
      "/images/canoe-card.png",
      "/images/home-hero-backwater-canoe.jpg",
    ],
    ctaText: "Book a Canoe Trip",
    ctaHref: "/contact",
  },
  {
    slug: "rooms",
    title: "Rooms & Homestays",
    subtitle: "Comfort stays with authentic Kerala charm",
    eyebrow: "Stays & Accommodation",
    heroImage: "/images/room-card.png",
    description: [
      "Our curated rooms and homestays bring you closer to the warmth of Kerala hospitality. From waterfront heritage rooms to cozy village homestays, each option is selected for its character, comfort, and connection to the local landscape.",
      "Wake up to the sound of water birds, enjoy home-cooked Kerala breakfasts on open verandas, and spend evenings watching the sun set over the backwaters from your private sitting area. Every stay is designed to feel personal rather than commercial.",
    ],
    highlights: [
      {
        title: "Waterfront Locations",
        description:
          "Many rooms overlook the backwaters, offering uninterrupted views of canals, boats, and palm-lined horizons.",
        icon: "anchor",
      },
      {
        title: "Home-Cooked Meals",
        description:
          "Authentic Kerala breakfast and dinner prepared by local hosts — fresh seafood, appam, and traditional curries.",
        icon: "heart",
      },
      {
        title: "Heritage Architecture",
        description:
          "Stay in restored heritage homes with traditional tiled roofs, wooden pillars, and courtyard gardens.",
        icon: "home",
      },
      {
        title: "Personal Hosts",
        description:
          "Your hosts are locals who know every hidden trail, the best toddy shops, and the quietest sunrise spots.",
        icon: "star",
      },
      {
        title: "Modern Comfort",
        description:
          "Air-conditioning, hot water, premium bedding, and Wi-Fi — traditional charm with modern essentials.",
        icon: "shield",
      },
      {
        title: "Activity Planning",
        description:
          "Your host arranges canoe rides, fishing trips, cooking classes, and village walks from your doorstep.",
        icon: "compass",
      },
    ],
    facilities: [
      "Air-conditioned rooms",
      "Attached bathroom",
      "Wi-Fi access",
      "Daily housekeeping",
      "Breakfast included",
      "Private veranda",
      "Parking available",
      "24-hour assistance",
    ],
    priceLabel: "From ₹2,500 / night",
    priceNote:
      "Rates depend on room type (standard, deluxe, heritage suite), season, and meal plan. Long-stay discounts available.",
    gallery: [
      "/images/room-card.png",
    ],
    ctaText: "Reserve a Room",
    ctaHref: "/contact",
  },
  {
    slug: "spa",
    title: "Spa & Wellness",
    subtitle: "Ayurvedic healing in the heart of the backwaters",
    eyebrow: "Wellness & Rejuvenation",
    heroImage: "/images/spa-card.png",
    description: [
      "Our spa experiences draw from Kerala's centuries-old Ayurvedic tradition — the world's oldest healing system. Treatments are administered by certified Ayurvedic therapists using natural oils, herbal preparations, and time-tested techniques passed down through generations.",
      "Whether on the deck of a houseboat or in a waterfront wellness room, each session is designed to restore balance, calm the mind, and rejuvenate the body. The sounds of the backwaters become your natural soundtrack as ancient healing meets serene surroundings.",
    ],
    highlights: [
      {
        title: "Ayurvedic Treatments",
        description:
          "Traditional therapies including Abhyanga, Shirodhara, and Pizhichil — administered by certified practitioners.",
        icon: "drop",
      },
      {
        title: "Natural Ingredients",
        description:
          "Cold-pressed coconut oil, herbal poultices, and medicated ghee sourced from local Ayurvedic gardens.",
        icon: "leaf",
      },
      {
        title: "Waterside Sessions",
        description:
          "Treatments on houseboat decks or in open-air pavilions overlooking the tranquil backwaters.",
        icon: "sun",
      },
      {
        title: "Wellness Consultation",
        description:
          "Begin with a personal dosha assessment to customize your treatment plan for optimal results.",
        icon: "heart",
      },
      {
        title: "Yoga & Meditation",
        description:
          "Morning yoga sessions and guided meditation by the water — the perfect complement to your spa journey.",
        icon: "moon",
      },
      {
        title: "Multi-Day Packages",
        description:
          "Extended rejuvenation programs combining daily treatments, yoga, Ayurvedic meals, and rest.",
        icon: "star",
      },
    ],
    facilities: [
      "Certified Ayurvedic therapists",
      "Private treatment rooms",
      "Herbal steam bath",
      "Yoga mat & props",
      "Organic herbal tea",
      "Post-treatment rest area",
      "Consultation included",
      "Couples treatment option",
    ],
    priceLabel: "From ₹3,000 / session",
    priceNote:
      "Single sessions, half-day, and multi-day wellness packages available. Combine with a houseboat stay for an on-water spa experience.",
    gallery: [
      "/images/spa-card.png",
    ],
    ctaText: "Book a Spa Session",
    ctaHref: "/contact",
  },
];

export function getServiceBySlug(slug: string): ServicePage | undefined {
  return services.find((s) => s.slug === slug);
}
