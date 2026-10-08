import type { PhotoSpec } from "@/components/ui/Photo";

export type Homestay = {
  id: string;
  name: string;
  /** Short line under the name explaining it. */
  meaning: string;
  eyebrow: string;
  lead: string;
  facts: Array<readonly [string, string]>;
  highlights: string[];
  /** Rupees, per night. */
  price: number;
  /** What the price is for, e.g. "per villa" or "per AC room". */
  priceUnit: string;
  photos: PhotoSpec[];
};

// Placeholder facts and copy — replace with the real details of each property.
export const homestays: Homestay[] = [
  {
    id: "homestay",
    name: "Kayal Pool Villa",
    meaning: "Kayal means backwater in Malayalam.",
    eyebrow: "Homestay · Pool villa",
    lead: "A private pool villa at the water's edge, for the nights between cruises. Slow mornings, a cool dip, and a Kerala kitchen at home.",
    facts: [
      ["Stay", "Private homestay villa"],
      ["Pool", "Private swimming pool"],
      ["Inside", "Bedroom, living room, kitchenette"],
      ["Sleeps", "Up to 2 guests"],
    ],
    price: 7000,
    priceUnit: "per night, whole villa",
    highlights: [
      "Private pool and garden",
      "Home-cooked Kerala meals",
      "Hosted by the Tranquil Cruise family",
      "Backwater views",
      "Easy transfer to the jetty",
    ],
    photos: [
      {
        src: "/images/villa-exterior.webp",
        alt: "The pool villa from the gate: a white single-storey house with a spiral staircase to the roof and a pool courtyard behind a timber screen",
        position: "50% 50%",
      },
      {
        src: "/images/villa-living-pool.webp",
        alt: "Living room with a built-in brown sofa and a glass wall opening onto tropical plants and the blue pool",
        position: "50% 55%",
      },
      {
        src: "/images/villa-living.webp",
        alt: "Living room with a long maroon sofa, textured wall art and a sliding glass door to the garden",
        position: "50% 55%",
      },
      {
        src: "/images/villa-kitchen.webp",
        alt: "Open living area with a teak herringbone TV unit, a green kitchenette and a maroon built-in sofa on a marble floor",
        position: "50% 55%",
      },
      {
        src: "/images/villa-bedroom.webp",
        alt: "Bedroom with a white double bed, a carved dark headboard, pendant lamps and an arched mirror",
        position: "50% 62%",
      },
      {
        src: "/images/villa-bedroom-2.webp",
        alt: "Bedroom with two abstract paintings, an arched mirror and curtained window beside the bed",
        position: "50% 55%",
      },
      {
        src: "/images/villa-bathroom.webp",
        alt: "Bathroom with marble-look walls, bronze tiles and a rain shower",
        position: "50% 55%",
      },
      {
        src: "/images/villa-living-tall.webp",
        alt: "Living room with a ceiling fan, glass wall to the pool garden and a reflective marble floor",
        position: "50% 60%",
      },
    ],
  },
  {
    id: "heritage",
    name: "Tharavadu Heritage Homestay",
    meaning: "Tharavadu means ancestral family home in Malayalam.",
    eyebrow: "Homestay · Heritage home",
    lead: "A traditional Kerala home with a tiled roof, carved timber doors and dark wooden ceilings, refreshed with air-conditioned rooms and modern bathrooms.",
    facts: [
      ["Stay", "Heritage homestay"],
      ["Style", "Tiled-roof Kerala tharavadu"],
      ["Rooms", "Air-conditioned bedrooms, attached baths"],
      ["Sleeps", "Up to 6 guests"],
    ],
    price: 2500,
    priceUnit: "per AC room, per night",
    highlights: [
      "Carved timber doors",
      "Air-conditioned rooms",
      "Attached bathrooms with hot water",
      "Verandah and garden courtyard",
      "Home-cooked Kerala meals",
    ],
    photos: [
      {
        src: "/images/tharavadu-exterior.webp",
        alt: "The front of a white Kerala heritage home with a tiled roof, carved eaves, timber-barred windows and warm wall lamps",
        position: "50% 40%",
      },
      {
        src: "/images/tharavadu-garden.webp",
        alt: "The corner of the heritage house beside a leafy croton bush, with a tiled roof and a glowing wall lamp",
        position: "50% 55%",
      },
      {
        src: "/images/tharavadu-veranda.webp",
        alt: "A long verandah with a polished stone floor, a carved sofa, doors with ornate panels and a dark timber ceiling",
        position: "50% 55%",
      },
      {
        src: "/images/tharavadu-bedroom.webp",
        alt: "Bedroom with a double bed, a timber headboard, an air-conditioner and a dark beamed ceiling",
        position: "50% 62%",
      },
      {
        src: "/images/tharavadu-bedroom-2.webp",
        alt: "Spacious bedroom with a wardrobe, a barred window and a carved timber door onto the verandah",
        position: "50% 55%",
      },
      {
        src: "/images/tharavadu-bedroom-3.webp",
        alt: "Bedroom with a white double bed, a wall lamp and a dark wooden-beam ceiling with a fan",
        position: "50% 60%",
      },
      {
        src: "/images/tharavadu-dresser.webp",
        alt: "Bedroom with a dressing table, a wardrobe and a carved door opening onto a sofa beyond",
        position: "50% 50%",
      },
      {
        src: "/images/tharavadu-bath.webp",
        alt: "Bathroom with white marble-look tiles, a rain shower and a wall-hung toilet",
        position: "50% 55%",
      },
    ],
  },
];
