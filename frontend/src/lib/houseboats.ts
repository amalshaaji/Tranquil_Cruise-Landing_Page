import type { PhotoSpec } from "@/components/ui/Photo";
import type { FaqItem } from "@/components/sections/Faq";

// Placeholder prices, capacities and copy — replace with real operating details.
// The UI only talks to getHouseboats() / getHouseboat(); to move to the backend, change those two
// functions to call `api<Houseboat[]>("/houseboats")` and nothing else needs to change.
export type Tier = "deluxe" | "premium";

export const tiers: Array<{ tier: Tier; label: string; blurb: string }> = [
  { tier: "deluxe", label: "Deluxe", blurb: "Comfortable air-conditioned cabins, a skilled crew and Kerala meals cooked on board." },
  { tier: "premium", label: "Premium", blurb: "The same boats, upgraded: larger cabins with king beds, finer linens, a candle-lit dinner and extra touches throughout." },
];

export type Houseboat = {
  slug: string;
  tier: Tier;
  bedrooms: number;
  name: string;
  /** Short "best for" label shown on the photo. */
  tag: string;
  /** Maximum guests on board (adults + children). */
  capacity: number;
  /** Rupees per night. */
  pricePerNight: number;
  /** Top of a price range (e.g. by season). Quotes use pricePerNight, the lower figure. */
  priceUpTo?: number;
  summary: string;
  description: string[];
  photo: PhotoSpec;
  gallery: PhotoSpec[];
  bedroomConfig: Array<readonly [room: string, bedding: string]>;
  amenities: string[];
  facilities: Array<readonly [string, string]>;
  availability: {
    note: string;
    /** Inclusive ISO date ranges that can't be booked. */
    blocked: Array<{ from: string; to: string }>;
  };
};

const lake: PhotoSpec = {
  src: "/images/houseboats-lake.webp",
  alt: "Two traditional kettuvallam houseboats gliding across a still, misty Alleppey lake dotted with water hyacinth",
};
const calm: PhotoSpec = {
  src: "/images/hero-calm-lake.webp",
  alt: "A houseboat cruising across a calm, glassy lake under a soft grey sky on the Alleppey backwaters",
};
const sunset: PhotoSpec = {
  src: "/images/hero-sunset.webp",
  alt: "A traditional houseboat silhouetted against a blazing orange sunset on the Alleppey backwaters, with birds in the sky",
};
const canal: PhotoSpec = {
  src: "/images/shikkara-canal.webp",
  alt: "A houseboat moored beside coconut palms on a calm Alleppey backwater in warm evening light",
};

const availability = { note: "Open through the season. We confirm your dates by phone or WhatsApp.", blocked: [] };

const standard: Array<readonly [string, string]> = [
  ["Crew", "Captain, cook and host"],
  ["Meals", "Breakfast, lunch, dinner, tea"],
  ["Cruising hours", "12 pm – 9 am"],
  ["Parking", "At the jetty, no charge"],
];

const baseAmenities = [
  "Air-conditioned cabins at night",
  "Private bathroom, hot water",
  "Open front deck",
  "Cotton linen and towels",
  "Fresh-cooked Kerala meals",
  "Welcome drink on arrival",
];

const intro = "Woven from bamboo and coir over a jackwood hull, the way kettuvallams have been made for centuries.";

// Photos are shared until each boat has its own — swap `photo` and `gallery` per boat.
const deluxeBoats: Houseboat[] = [
  {
    slug: "one-bedroom-deluxe",
    tier: "deluxe",
    tag: "Couples",
    bedrooms: 1,
    name: "One bedroom Deluxe",
    capacity: 2,
    pricePerNight: 9000,
    summary: "An intimate boat for two, with a front deck and a dining table by the water.",
    description: [intro, "One cabin, one deck and no one else on board. A quiet choice for couples and honeymoons."],
    photo: { ...lake, position: "28% 50%" },
    gallery: [{ ...lake, position: "28% 50%" }, { ...calm, position: "50% 70%" }, { ...sunset, position: "45% 55%" }],
    bedroomConfig: [["Cabin", "Queen bed, private bathroom"]],
    amenities: [...baseAmenities, "Candle-lit dinner on request"],
    facilities: [...standard, ["Sleeps", "2 guests"]],
    availability,
  },
  {
    slug: "two-bedroom-deluxe",
    tier: "deluxe",
    tag: "Most loved",
    bedrooms: 2,
    name: "Two bedrooms Deluxe",
    capacity: 4,
    pricePerNight: 12000,
    priceUpTo: 14000,
    summary: "Our most-loved size: two cabins, a shared lounge and a sun deck above.",
    description: [intro, "Two cabins either side of a shared lounge, with a sun deck above for the afternoon."],
    photo: { ...lake, position: "72% 50%" },
    gallery: [{ ...lake, position: "72% 50%" }, { ...sunset, position: "45% 55%" }, { ...calm, position: "50% 70%" }],
    bedroomConfig: [["Cabin one", "Queen bed, private bathroom"], ["Cabin two", "Queen or twin, private bathroom"]],
    amenities: [...baseAmenities, "Shared lounge and sun deck"],
    facilities: [...standard, ["Sleeps", "4 guests"]],
    availability,
  },
  {
    slug: "three-bedroom-deluxe",
    tier: "deluxe",
    tag: "Families",
    bedrooms: 3,
    name: "Three bedrooms Deluxe",
    capacity: 6,
    pricePerNight: 18000,
    priceUpTo: 20000,
    summary: "For families and friends travelling together, with a wide upper deck.",
    description: [intro, "Three cabins and an upper deck wide enough for the whole party to sit down together."],
    photo: { ...calm, position: "50% 60%" },
    gallery: [{ ...calm, position: "50% 60%" }, { ...lake, position: "72% 50%" }, { ...canal, position: "50% 60%" }],
    bedroomConfig: [["Cabin one", "Queen bed, private bathroom"], ["Cabin two", "Queen bed, private bathroom"], ["Cabin three", "Twin beds, private bathroom"]],
    amenities: [...baseAmenities, "Upper sun deck", "Child-friendly railed decks"],
    facilities: [...standard, ["Sleeps", "6 guests"]],
    availability,
  },
  {
    slug: "four-bedroom-deluxe",
    tier: "deluxe",
    tag: "Groups of friends",
    bedrooms: 4,
    name: "Four bedrooms Deluxe",
    capacity: 8,
    pricePerNight: 26000,
    summary: "Four cabins and a long dining deck, made for two families or a group of friends.",
    description: [intro, "Four cabins, a long dining table and generous deck space, with the crew expanded to match."],
    photo: { ...sunset, position: "45% 55%" },
    gallery: [{ ...sunset, position: "45% 55%" }, { ...lake, position: "28% 50%" }, { ...canal, position: "50% 60%" }],
    bedroomConfig: [["Cabin one", "Queen bed, private bathroom"], ["Cabin two", "Queen bed, private bathroom"], ["Cabin three", "Queen or twin, private bathroom"], ["Cabin four", "Twin beds, private bathroom"]],
    amenities: [...baseAmenities, "Upper sun deck", "Long dining deck"],
    facilities: [...standard, ["Sleeps", "8 guests"]],
    availability,
  },
  {
    slug: "five-bedroom-deluxe",
    tier: "deluxe",
    tag: "Large families",
    bedrooms: 5,
    name: "Five bedrooms Deluxe",
    capacity: 10,
    pricePerNight: 25000,
    summary: "Our largest everyday boat, with a lounge, dining deck and room for everyone.",
    description: [intro, "Five cabins arranged over two levels, with a lounge, a dining deck and an open sun deck."],
    photo: { ...canal, position: "50% 60%" },
    gallery: [{ ...canal, position: "50% 60%" }, { ...calm, position: "50% 70%" }, { ...sunset, position: "45% 55%" }],
    bedroomConfig: [["Cabin one", "Queen bed, private bathroom"], ["Cabin two", "Queen bed, private bathroom"], ["Cabin three", "Queen bed, private bathroom"], ["Cabin four", "Twin beds, private bathroom"], ["Cabin five", "Twin beds, private bathroom"]],
    amenities: [...baseAmenities, "Shared lounge", "Upper sun deck"],
    facilities: [...standard, ["Sleeps", "10 guests"]],
    availability,
  },
  {
    slug: "six-bedroom-deluxe",
    tier: "deluxe",
    tag: "Big groups",
    bedrooms: 6,
    name: "Six bedrooms Deluxe",
    capacity: 12,
    pricePerNight: 29000,
    summary: "Six cabins over two levels, with a lounge and a wide deck for a big family or group.",
    description: [intro, "Six cabins over two decks, a lounge and a long dining table. Room for three families, or a party of friends."],
    photo: { ...calm, position: "30% 60%" },
    gallery: [{ ...calm, position: "30% 60%" }, { ...canal, position: "50% 60%" }, { ...lake, position: "72% 50%" }],
    bedroomConfig: [["Cabins one to four", "Queen bed, private bathroom"], ["Cabins five and six", "Twin beds, private bathroom"]],
    amenities: [...baseAmenities, "Shared lounge", "Upper sun deck", "Long dining deck"],
    facilities: [...standard, ["Sleeps", "12 guests"]],
    availability,
  },
  {
    slug: "seven-bedroom-deluxe",
    tier: "deluxe",
    tag: "Celebrations",
    bedrooms: 7,
    name: "Seven bedrooms Deluxe",
    capacity: 14,
    pricePerNight: 34000,
    summary: "A full-length boat for weddings, reunions and large parties, with a larger crew.",
    description: [intro, "Seven cabins over two decks and a wide lounge, for celebrations and extended families. Please book early."],
    photo: { ...lake, position: "50% 50%" },
    gallery: [{ ...lake, position: "50% 50%" }, { ...sunset, position: "45% 55%" }, { ...canal, position: "50% 60%" }],
    bedroomConfig: [["Cabins one to four", "Queen bed, private bathroom"], ["Cabins five to seven", "Twin beds, private bathroom"]],
    amenities: [...baseAmenities, "Shared lounge", "Upper sun deck", "Space for celebrations"],
    facilities: [...standard, ["Crew", "Captain, two cooks and hosts"], ["Sleeps", "14 guests"]],
    availability,
  },
  {
    slug: "eight-bedroom-deluxe",
    tier: "deluxe",
    tag: "Grand parties",
    bedrooms: 8,
    name: "Eight bedrooms Deluxe",
    capacity: 16,
    pricePerNight: 38000,
    summary: "Our grandest boat: eight cabins, a wide lounge and a long dining deck, with a full crew.",
    description: [intro, "Eight cabins over two decks, a wide lounge and a long dining table, with the crew expanded to match. Please book early."],
    photo: { ...canal, position: "50% 60%" },
    gallery: [{ ...canal, position: "50% 60%" }, { ...lake, position: "50% 50%" }, { ...sunset, position: "45% 55%" }],
    bedroomConfig: [["Cabins one to five", "Queen bed, private bathroom"], ["Cabins six to eight", "Twin beds, private bathroom"]],
    amenities: [...baseAmenities, "Shared lounge", "Upper sun deck", "Long dining deck"],
    facilities: [...standard, ["Crew", "Captain, two cooks and hosts"], ["Sleeps", "16 guests"]],
    availability,
  },
];

const premium1br = (file: string, alt: string, position = "50% 50%"): PhotoSpec => ({ src: `/images/premium-1br-${file}.webp`, alt, position });

/** Real photos for the one bedroom Premium boat. */
const premiumOneBedroomGallery: PhotoSpec[] = [
  premium1br("exterior", "The one bedroom Premium houseboat Mithram moored at the jetty, with a two-level thatched roof", "50% 35%"),
  premium1br("cabin", "Premium cabin with a large bed, crystal chandelier, arched leaf-print headboard and warm wall lights", "50% 55%"),
  premium1br("cabin-2", "Second view of the Premium cabin with gold-panelled wall, towel art and ambient ceiling lights", "50% 55%"),
  premium1br("cabin-3", "Premium cabin seen from the foot of the bed, with a chandelier and leaf-print headboard", "50% 55%"),
  premium1br("lounge", "Lounge with teal sofas, gold-trimmed mirror ceiling and polished wood floor", "50% 60%"),
  premium1br("lounge-2", "Lounge with a teal sofa against a floral feature wall, under a mirrored ceiling with coloured lights", "50% 60%"),
  premium1br("dining-deck", "Upper-deck dining area with a wooden table, teal sofa and a view over the water", "50% 65%"),
  premium1br("dining-deck-2", "Upper-deck lounge and dining table beneath a patterned ceiling and chandelier", "50% 65%"),
  premium1br("stairs", "Wood-and-white staircase leading up to the upper deck", "50% 60%"),
  premium1br("kitchen", "Fully fitted on-board kitchen with green cabinets, gas hob and refrigerator", "50% 60%"),
];

const deluxe1br = (file: string, alt: string, position = "50% 50%"): PhotoSpec => ({ src: `/images/deluxe-1br-${file}.webp`, alt, position });

/** Real photos for the one bedroom Deluxe boat. */
const deluxeOneBedroomGallery: PhotoSpec[] = [
  deluxe1br("exterior", "The one bedroom Deluxe houseboat Diamond Cruise on the water at dusk, with a thatched two-level roof", "50% 55%"),
  deluxe1br("cabin", "Deluxe cabin with a double bed, teak headboard with shelves, red curtains and a warm backlit wall"),
  deluxe1br("lounge", "Upper-deck lounge with a pink sofa, wooden coffee table and a waterside view"),
  deluxe1br("deck", "Covered deck with a bench seat, artificial grass corner and views of palms and the water"),
  deluxe1br("dining", "Dining area with a wooden table and chairs under a chandelier with warm cove lighting"),
  deluxe1br("dining-2", "Dining table and chairs beneath a round wooden ceiling feature and crystal chandelier", "50% 40%"),
  deluxe1br("corridor", "Teak-floored corridor with a window, wash basin and cabin doors", "50% 40%"),
  deluxe1br("stairs", "Wooden staircase with a steel handrail leading to the upper deck", "50% 60%"),
];

const premium2br = (file: string, alt: string, position = "50% 50%"): PhotoSpec => ({ src: `/images/premium-2br-${file}.webp`, alt, position });

/** Real photos for the two bedrooms Deluxe boat. */
const deluxeTwoBedroomGallery: PhotoSpec[] = [
  premium2br("exterior", "The two bedrooms Premium houseboat cruising across open water at dusk, with palms along the far bank", "50% 62%"),
  premium2br("lounge", "Spacious lounge with teak armchairs, a brown sofa, a glass-top table and wide windows over the lake"),
  premium2br("cabin", "Cabin with a double bed, carved teak headboard, blue quilt and arched windows", "50% 60%"),
  premium2br("cabin-2", "Second view of the cabin with a green quilt, wall lights and a sloped ceiling", "50% 60%"),
  premium2br("deck", "Upper deck lit in blue at night, with carved wooden armchairs, a sofa and a coffee table", "50% 65%"),
  premium2br("corridor", "Teak-floored corridor with arched windows and floral glass doors to the cabins", "50% 55%"),
  premium2br("stairs", "Wooden staircase leading up to the upper deck", "50% 60%"),
];

const premiumTwo = (file: string, alt: string, position = "50% 50%"): PhotoSpec => ({ src: `/images/premium2-${file}.webp`, alt, position });

/** Real photos for the two bedrooms Premium boat. */
const premiumTwoBedroomRealGallery: PhotoSpec[] = [
  premiumTwo("exterior", "The two bedrooms Premium houseboat moored under coconut palms, with a glass-fronted upper deck", "50% 55%"),
  premiumTwo("cabin", "Premium cabin with a large bed, backlit golden headboard, wood-panelled wall and navy bed runner"),
  premiumTwo("cabin-2", "Cabin with a curtained window and an attached bathroom with tiled walls and a wash basin"),
  premiumTwo("cabin-3", "Cabin with a maroon throw, wooden wardrobe and a bathroom doorway, under a layered ceiling"),
  premiumTwo("lounge", "Lounge with two brown sofas, a glass-top coffee table and a wall-mounted smart TV"),
  premiumTwo("lounge-2", "Wider view of the lounge with sofas, TV panel, pendant light and a teak-floored passage"),
  premiumTwo("vanity", "Passage with a marble-topped vanity, oval basin and a backlit mirror", "50% 50%"),
];

const premium3br = (file: string, alt: string, position = "50% 50%"): PhotoSpec => ({ src: `/images/premium-3br-${file}.webp`, alt, position });

/** Real photos for the three bedrooms Premium boat. */
const premiumThreeBedroomGallery: PhotoSpec[] = [
  premium3br("exterior", "The three bedrooms Premium houseboat Mithram on the water, with a railed upper deck and a golden thatched roof", "50% 45%"),
  premium3br("lounge", "Lounge with a grey velvet sofa, navy and gold feature wall and a lattice ceiling with marble panels", "50% 55%"),
  premium3br("lounge-2", "Side view of the lounge with a sofa, mirrored coffee table and polished wood floor", "50% 55%"),
  premium3br("cabin", "Cabin with a double bed, golden panelled headboard with lit mirrors and a crimson quilt", "50% 55%"),
  premium3br("cabin-2", "Cabin with a grey quilt, slatted wood ceiling and a tall golden headboard", "50% 50%"),
  premium3br("cabin-3", "Second cabin with a wood-fronted bed, lit headboard and wooden blinds", "50% 60%"),
  premium3br("vanity", "Washroom vanity with a textured green wall, framed mirror and a pendant lamp", "50% 50%"),
  premium3br("vanity-2", "Double-basin vanity with a marble-effect counter and mint-green tiles", "50% 50%"),
  premium3br("corridor", "Teak-floored corridor with a patterned glass door and windows over the water", "50% 55%"),
  premium3br("corridor-2", "Corridor with lantern lights, a lifejacket and a view down to the staircase", "50% 55%"),
];

const deluxe3br = (file: string, alt: string, position = "50% 50%"): PhotoSpec => ({ src: `/images/deluxe-3br-${file}.webp`, alt, position });

/** Real photos for the three bedrooms Deluxe boat. */
const deluxeThreeBedroomGallery: PhotoSpec[] = [
  deluxe3br("exterior", "The three bedrooms Deluxe houseboat lit up at night, with a glowing name board on the upper deck", "50% 50%"),
  deluxe3br("cabin", "Cabin with a round bed, tufted green headboard and a backlit pampas-grass mural on a marble-effect wall", "50% 55%"),
  deluxe3br("cabin-2", "Round bed with white linen and rolled towels, set against golden leaf-print walls", "50% 55%"),
  deluxe3br("cabin-3", "Cabin with a double bed, quilted green headboard and mirrored gold wall panel", "50% 55%"),
  deluxe3br("cabin-4", "Low view of the green tufted headboard beneath the arched mural and glowing mirrors", "50% 50%"),
  deluxe3br("cabin-5", "Close view of the round bed's green headboard, pillows and matching round bedside stools", "50% 50%"),
  deluxe3br("dining", "Dining and lounge hall with a crystal chandelier, gold light strips and marble-look feature wall", "50% 50%"),
  deluxe3br("dining-2", "Wide view of the dining hall with two chandeliers, lit windows and a mirrored counter", "50% 50%"),
  deluxe3br("lamps", "Hanging mosaic glass lamps in jewel colours above the lounge", "50% 50%"),
];

const premium4br = (file: string, alt: string, position = "50% 50%"): PhotoSpec => ({ src: `/images/premium-4br-${file}.webp`, alt, position });

/** Real photos for the four bedrooms Premium boat. */
const premiumFourBedroomGallery: PhotoSpec[] = [
  premium4br("exterior", "The four bedrooms Premium houseboat gliding along a tree-lined bank, with an open upper deck and thatched roofs", "30% 55%"),
  premium4br("cabin", "Cabin with a double bed, red and gold cushions, a backlit teardrop mirror and a mandala-patterned feature wall", "50% 60%"),
  premium4br("cabin-2", "Cabin with a marble-effect headboard, teal and gold bed runner, rolled towels and a glowing arched niche", "50% 60%"),
  premium4br("cabin-3", "Second view of the cabin with a layered gold-lit ceiling, blinds and gilded wall mouldings", "50% 60%"),
  premium4br("dining", "Dining room with a six-seat table, two teal sofas, a TV and a mirrored ceiling panel", "50% 55%"),
  premium4br("dining-2", "Angled view of the dining room with teal sofas, globe pendant lights and a wash basin", "50% 55%"),
  premium4br("lounge", "Upper-deck lounge with grey leather armchairs, a sofa, a wooden coffee table and bench seating by the water", "50% 55%"),
  premium4br("deck", "Open upper deck with armchairs and benches looking out over banana plantations", "50% 55%"),
  premium4br("passage", "Teak-floored passage with gilded wall mouldings, a marble-look panel and the staircase rail", "50% 55%"),
  premium4br("stairs", "Wooden staircase with glass-panel doors leading up to the upper deck", "50% 55%"),
];

const deluxe4br = (file: string, alt: string, position = "50% 50%"): PhotoSpec => ({ src: `/images/deluxe-4br-${file}.webp`, alt, position });

/** Real photos for the four bedrooms Deluxe boat. */
const deluxeFourBedroomGallery: PhotoSpec[] = [
  deluxe4br("exterior", "The four bedrooms Deluxe houseboat cruising across open water, with a wooden-panelled hull and an open upper deck", "50% 60%"),
  deluxe4br("cabin", "Cabin with a double bed, navy bed runner, textured golden headboard wall and a patterned tray ceiling", "50% 55%"),
  deluxe4br("cabin-2", "Second cabin with a purple bed runner, wood-panelled walls and an inlaid gold-green ceiling", "50% 55%"),
  deluxe4br("cabin-3", "Cabin seen from the doorway, with cream curtains and a honeycomb-patterned lit ceiling", "50% 55%"),
  deluxe4br("lounge", "Lounge with grey sofas, a glass-top coffee table, a patterned rug and a wall-mounted TV", "50% 55%"),
  deluxe4br("lounge-2", "Lounge with grey sofas and a carved coffee table beside wide windows over the water", "50% 55%"),
  deluxe4br("deck", "Upper-deck dining hall with a long wooden table and benches, open to the breeze on both sides", "50% 55%"),
  deluxe4br("corridor", "Polished-teak corridor with amber pendant lights and windows along one side", "50% 55%"),
];

const premium5br = (file: string, alt: string, position = "50% 50%"): PhotoSpec => ({ src: `/images/premium-5br-${file}.webp`, alt, position });

/** Real photos for the five bedrooms Premium boat. */
const premiumFiveBedroomGallery: PhotoSpec[] = [
  premium5br("exterior", "The five bedrooms Premium houseboat Kingster at speed on open water, with a two-deck cabin and a dark hull", "50% 62%"),
  premium5br("lounge", "Lounge with cream leather sofas, a round glass-top table, a marble-look feature wall and a lotus-shaped ceiling", "50% 45%"),
  premium5br("cabin", "Cabin with a double bed, a sculpted arched canopy of backlit perforated panels and a maroon bed runner", "50% 55%"),
  premium5br("cabin-2", "Cabin with a tufted dark headboard, a gold cut-out ceiling light and cream blinds", "50% 55%"),
  premium5br("cabin-3", "Cabin with a scalloped headboard, arched lit niches and a layered ceiling with a crystal light", "50% 55%"),
  premium5br("cabin-4", "Cabin with a crystal chandelier, a dressing shelf and a doorway to the attached bathroom", "50% 55%"),
  premium5br("dining", "Upper-deck dining hall with a long marble-top table, wooden chairs, cushioned bench seating and a TV", "50% 55%"),
  premium5br("dining-2", "Dining hall looking along the table beneath a sweeping lit lattice ceiling", "50% 50%"),
  premium5br("exterior-night", "The Kingster houseboat at night, with its blue glowing name board and a lit upper deck", "50% 50%"),
  premium5br("bathroom", "Attached bathroom with large pale tiles, a rain shower and a warm cove light", "50% 50%"),
];

const premium6br = (file: string, alt: string, position = "50% 50%"): PhotoSpec => ({ src: `/images/premium-6br-${file}.webp`, alt, position });

/** Real photos for the six bedrooms Premium boat. */
const premiumSixBedroomGallery: PhotoSpec[] = [
  premium6br("exterior", "The six bedrooms Premium houseboat on open water at dusk, with a long red hull, thatched roofs and an open upper-deck lounge", "50% 55%"),
  premium6br("lounge", "Bright lounge with pink velvet sofas, a chandelier, a polished teak floor and wide windows over the water", "50% 55%"),
  premium6br("cabin", "Cabin with a king-size bed, navy cushions, a mirrored feature wall and orange window blinds", "50% 55%"),
  premium6br("cabin-2", "Cabin with a diamond-patterned headboard, copper cushions and a red-trimmed bed base", "50% 55%"),
  premium6br("cabin-3", "Cabin with a slatted wood headboard, mauve cushions and warm cove lighting", "50% 55%"),
  premium6br("cabin-4", "Cabin with a patterned black-and-gold ceiling, a round mirror and a doorway to the bathroom", "50% 55%"),
  premium6br("dining", "Upper-deck dining hall with a long black table, wooden chairs and cushioned benches along both sides", "50% 55%"),
  premium6br("corridor", "Curved corridor with gold-framed blue wall panels and windows over the water", "50% 55%"),
];

const premium7br = (file: string, alt: string, position = "50% 50%"): PhotoSpec => ({ src: `/images/premium-7br-${file}.webp`, alt, position });

/** Real photos for the seven bedrooms Premium boat. */
const premiumSevenBedroomGallery: PhotoSpec[] = [
  premium7br("exterior", "The seven bedrooms Premium houseboat on the water at sunset, with a long two-deck thatched body and a lit upper deck", "50% 50%"),
  premium7br("lounge", "Lounge with a tan tufted corner sofa, a carved-wood and brass feature wall and a crystal chandelier", "50% 50%"),
  premium7br("cabin", "Cabin with a double bed, turquoise bed runner, a striped gold-and-cream headboard and a carved gold ceiling border", "50% 55%"),
  premium7br("cabin-2", "Cabin with gold cushions, towel swans on the bed and mirrored gold wall panels", "50% 55%"),
  premium7br("cabin-3", "Spacious cabin with a chequered headboard, a beamed ceiling with patterned panels and a wooden wardrobe", "50% 55%"),
  premium7br("dining", "Long dining hall with cream tufted chairs, cushioned benches along both sides and chandeliers overhead", "50% 50%"),
  premium7br("dining-night", "Dining table laid for dinner beneath a blue-and-violet lit ceiling with carved gold lanterns", "50% 50%"),
  premium7br("bathroom", "Bathroom with striped marble tiles, a rain shower and a towel rack", "50% 50%"),
];

const premium8br = (file: string, alt: string, position = "50% 50%"): PhotoSpec => ({ src: `/images/premium-8br-${file}.webp`, alt, position });

/** Real photos for the eight bedrooms Premium boat. */
const premiumEightBedroomGallery: PhotoSpec[] = [
  premium8br("exterior-night", "The eight bedrooms Premium houseboat lit up at night, with three glowing decks and carved lattice panels", "50% 50%"),
  premium8br("lounge", "Lounge with an olive and grey corner sofa, a tan quilted feature wall and a glass staircase beside it", "50% 50%"),
  premium8br("dining", "Upper-deck dining hall with wooden tables and chairs under a golden-lit ceiling of carved lattice panels", "50% 50%"),
  premium8br("cabin", "Cabin with a purple bedspread and a tan chevron-padded headboard against a mirrored wall", "50% 50%"),
  premium8br("cabin-2", "Cabin with a burgundy bedspread and an orange petal-shaped headboard, glowing in warm gold light", "50% 50%"),
  premium8br("cabin-3", "Cabin with a cream diamond-panelled headboard edged in gold and a dark green bed runner", "50% 50%"),
];

const roundTo500 = (n: number) => Math.round(n / 500) * 500;

/** Premium prices that are set, not derived from Deluxe. */
const premiumPrices: Record<string, [from: number, upTo?: number]> = {
  "two-bedroom-premium": [15000, 18000],
  "three-bedroom-premium": [20000, 22000],
  "four-bedroom-premium": [30000],
  "five-bedroom-premium": [36000],
  "six-bedroom-premium": [40000],
  "seven-bedroom-premium": [45000],
  "eight-bedroom-premium": [52000],
};

// Placeholder: every Premium boat is its Deluxe sibling upgraded, at about 25% more per night.
// Replace the price, copy or photos per boat by editing the object below when you have real details.
const premiumBoats: Houseboat[] = deluxeBoats.map((b): Houseboat => ({
  ...b,
  slug: b.slug.replace("-deluxe", "-premium"),
  tier: "premium",
  name: b.name.replace("Deluxe", "Premium"),
  tag: "Premium",
  pricePerNight: premiumPrices[b.slug.replace("-deluxe", "-premium")]?.[0] ?? roundTo500(b.pricePerNight * 1.25),
  priceUpTo: premiumPrices[b.slug.replace("-deluxe", "-premium")]?.[1],
  summary: `${b.summary} Upgraded with larger cabins and king beds.`,
  description: [...b.description, "The Premium upgrade adds larger cabins, king beds, finer linens and a candle-lit dinner."],
  gallery: [...b.gallery].reverse(),
  bedroomConfig: b.bedroomConfig.map(([room, bedding]) => [room, bedding.replace("Queen bed", "King bed")] as const),
  amenities: [...b.amenities, "Larger cabins, king beds", "Premium linen and decor", "Candle-lit dinner included"],
}));

const realDeluxePhotos: Record<string, PhotoSpec[]> = {
  "one-bedroom-deluxe": deluxeOneBedroomGallery,
  "two-bedroom-deluxe": deluxeTwoBedroomGallery,
  "three-bedroom-deluxe": deluxeThreeBedroomGallery,
  "four-bedroom-deluxe": deluxeFourBedroomGallery,
};

const realPremiumPhotos: Record<string, PhotoSpec[]> = {
  "one-bedroom-premium": premiumOneBedroomGallery,
  "two-bedroom-premium": premiumTwoBedroomRealGallery,
  "three-bedroom-premium": premiumThreeBedroomGallery,
  "four-bedroom-premium": premiumFourBedroomGallery,
  "five-bedroom-premium": premiumFiveBedroomGallery,
  "six-bedroom-premium": premiumSixBedroomGallery,
  "seven-bedroom-premium": premiumSevenBedroomGallery,
  "eight-bedroom-premium": premiumEightBedroomGallery,
};

/** Swap in a boat's real photos when it has them; otherwise it keeps the shared stock photos. */
const withRealPhotos = (b: Houseboat): Houseboat => {
  const gallery = (b.tier === "deluxe" ? realDeluxePhotos : realPremiumPhotos)[b.slug];
  return gallery ? { ...b, photo: gallery[0], gallery } : b;
};

/** Sizes offered in Premium only. Their Deluxe version is not listed, so the card has no class switch. */
const premiumOnly = new Set(["five-bedroom-deluxe", "six-bedroom-deluxe", "seven-bedroom-deluxe", "eight-bedroom-deluxe"]);

export const houseboatList: Houseboat[] = [...deluxeBoats, ...premiumBoats].filter((b) => !premiumOnly.has(b.slug)).map(withRealPhotos);

/** One entry per bedroom count, holding that size's Deluxe and Premium boats (Deluxe first). */
export function groupBySize(boats: Houseboat[]): Houseboat[][] {
  const bySize = new Map<number, Houseboat[]>();
  for (const b of boats) bySize.set(b.bedrooms, [...(bySize.get(b.bedrooms) ?? []), b]);
  return [...bySize.values()]
    .map((g) => g.sort((x, y) => tiers.findIndex((t) => t.tier === x.tier) - tiers.findIndex((t) => t.tier === y.tier)))
    .sort((x, y) => x[0].bedrooms - y[0].bedrooms);
}

export const sizeName = (b: Houseboat) => b.name.replace(/ (Deluxe|Premium)$/, "");

export async function getHouseboats(): Promise<Houseboat[]> {
  return houseboatList;
}

export async function getHouseboat(slug: string): Promise<Houseboat | undefined> {
  return houseboatList.find((b) => b.slug === slug);
}

export const rupees = (n: number) => `₹${Math.round(n).toLocaleString("en-IN")}`;

/** A boat's nightly price, as a range when it has one. */
export const priceLabel = (b: Houseboat) => (b.priceUpTo ? `${rupees(b.pricePerNight)} – ${rupees(b.priceUpTo)}` : rupees(b.pricePerNight));

export const guestsLabel = (n: number) => `Up to ${n} guests`;

export const bedroomsLabel = (n: number) => `${n} ${n === 1 ? "bedroom" : "bedrooms"}`;

const DAY = 86_400_000;

export function nightsBetween(checkIn: string, checkOut: string) {
  if (!checkIn || !checkOut) return 0;
  const n = Math.round((Date.parse(checkOut) - Date.parse(checkIn)) / DAY);
  return Number.isFinite(n) && n > 0 ? n : 0;
}

export function quote(boat: Houseboat, nights: number) {
  const subtotal = boat.pricePerNight * nights;
  return { nights, perNight: boat.pricePerNight, total: subtotal };
}

/** True if any night of the stay falls inside a blocked range. */
export function overlapsBlocked(boat: Houseboat, checkIn: string, checkOut: string) {
  return boat.availability.blocked.some((r) => checkIn <= r.to && checkOut > r.from);
}

/** Group and party hosting for 30+ guests. Placeholder copy — replace with your real packages. */
export const party = {
  minGuests: 30,
  maxGuests: 100,
  photos: [
    { src: "/images/party-dining.webp", alt: "Long party dining hall with a glossy white table, brown tufted chairs and a sweeping gold-lit ceiling", position: "50% 55%" },
    { src: "/images/party-exterior.webp", alt: "The party houseboat Royal Caribbean at the jetty, its bow decorated with marigold garlands", position: "50% 40%" },
    { src: "/images/party-lounge.webp", alt: "Lounge with curved orange sofas, crystal chandeliers and a mirrored gold ceiling", position: "50% 55%" },
    { src: "/images/party-dining-tall.webp", alt: "Looking down a very long dining table beneath a rippling gold-lit ceiling", position: "50% 50%" },
    { src: "/images/party-cabin.webp", alt: "Cabin with a double bed, a curved gold-lit headboard and a wheat-motif wall", position: "50% 55%" },
  ] as PhotoSpec[],
  occasions: [
    { title: "Birthdays and anniversaries", body: "A decorated deck, a cake on board and a table laid for the whole party." },
    { title: "Corporate outings", body: "Team days afloat, with space to talk, a working lunch and calm water." },
    { title: "Reunions and family gatherings", body: "Three generations on one deck, with a menu that suits everyone." },
    { title: "Pre-wedding and bridal parties", body: "A private evening cruise, with music, flowers and photographers welcome." },
  ],
  faqs: [
    { q: "How many guests can a party have?", a: "Parties of 30 to 100 guests. Tell us your numbers and the occasion, and we'll propose the right setup." },
    { q: "Can you arrange decoration, music and a cake?", a: "Yes. Tick what you need in the party form, or tell us on WhatsApp, and we'll arrange it on board." },
    { q: "Is alcohol allowed on board?", a: "Please ask when you enquire. We'll explain what is permitted for your date and boat." },
    { q: "Can we bring our own caterer or DJ?", a: "Often, yes. Tell us what you have in mind and we'll confirm what's possible on your date." },
    { q: "How early should we book?", a: "As early as you can. Weekends, holidays and festival dates fill first." },
    { q: "How does payment work?", a: "Nothing is charged online. We send a plan and a quote, and confirm once we've spoken." },
  ] as FaqItem[],
  arrangements: [
    "Deck decoration and flowers",
    "Music and speaker setup",
    "Cake and special menu",
    "Photography and videography",
    "Transport from your hotel",
    "Extra crew for large groups",
  ],
};

/** Questions guests ask about one boat, answered from its own details. */
export function faqsFor(boat: Houseboat): FaqItem[] {
  return [
    { q: `How many guests does the ${boat.name.toLowerCase()} boat sleep?`, a: `Up to ${boat.capacity} guests in ${bedroomsLabel(boat.bedrooms)}, each with a private bathroom. Count adults and children together.` },
    { q: "What does the price include?", a: `${priceLabel(boat)} a night. That covers the boat, the crew, your meals and the air-conditioning at night.` },
    { q: "How does booking work?", a: "Choose Book now, pick your dates and send the request. We confirm availability by phone or WhatsApp within a day. Nothing is charged online." },
    { q: "Can we stay more than one night?", a: "Yes. The price is per night, so a longer stay is simply more nights. Ask us about routes for two or three nights." },
    { q: "We are more than this boat sleeps. What then?", a: boat.capacity >= 16 ? `For more than ${boat.capacity} guests, see our group and party options on the houseboats page.` : "Choose the next size up, or message us and we'll suggest the best fit for your group." },
  ];
}
