export type HouseboatComparisonItem = {
  slug: "single-bed" | "2-bedroom" | "3-bedroom" | "5-bedroom";
  title: string;
  shortTitle: string;
  href: string;
  image: string;
  priceLabel: string;
  guestRange: string;
  bestFor: string;
  bedrooms: string;
  washrooms: string;
  commonArea: string;
  routeFeel: string;
  overnightStyle: string;
  standout: string;
  features: string[];
};

export const houseboatComparisonItems: HouseboatComparisonItem[] = [
  {
    slug: "single-bed",
    title: "Single Bedroom Houseboat",
    shortTitle: "Single Bedroom",
    href: "/houseboats/single-bed",
    image: "/images/single-bed-gallery/exterior-view.jpeg",
    priceLabel: "From Rs. 12,500 / night",
    guestRange: "1-2 guests",
    bestFor: "Couples, solo travellers, and quieter private stays",
    bedrooms: "1 private air-conditioned bedroom",
    washrooms: "1 attached washroom",
    commonArea: "Shared lounge and upper-deck access",
    routeFeel: "Quieter cruising with a more intimate pace",
    overnightStyle: "Compact, calm, and easy to settle into",
    standout: "The most intimate format in the collection, with a slower and more private feel.",
    features: [
      "Private air-conditioned bedroom",
      "Attached washroom",
      "Upper-deck access",
      "Good fit for compact overnight routes",
    ],
  },
  {
    slug: "2-bedroom",
    title: "Two Bedroom Houseboat",
    shortTitle: "Two Bedroom",
    href: "/houseboats/2-bedroom",
    image: "/images/two-bedroom-gallery-v2/WhatsApp_Image_2026-05-04_at_19_44_01.jpeg",
    priceLabel: "From Rs. 17,500 / night",
    guestRange: "3-6 guests",
    bestFor: "Families and small groups",
    bedrooms: "2 private air-conditioned bedrooms",
    washrooms: "2 attached washrooms",
    commonArea: "Spacious indoor lounge and dining area",
    routeFeel: "Balanced between privacy and shared time",
    overnightStyle: "A fuller family-friendly houseboat experience",
    standout: "The strongest middle-ground option for guests who want more room without moving into a large group boat.",
    features: [
      "Family-friendly layout",
      "Indoor lounge and dining space",
      "Upper-deck views",
      "Comfortable for overnight cruising",
    ],
  },
  {
    slug: "3-bedroom",
    title: "Three Bedroom Houseboat",
    shortTitle: "Three Bedroom",
    href: "/houseboats/3-bedroom",
    image: "/images/three-bedroom-gallery/WhatsApp_Image_2026-05-14_at_18_13_06.jpeg",
    priceLabel: "Ask for group pricing",
    guestRange: "5-9 guests",
    bestFor: "Extended families and close-knit groups",
    bedrooms: "3 private air-conditioned bedrooms",
    washrooms: "Attached washroom access",
    commonArea: "Spacious lounge and dining layout",
    routeFeel: "Smoother group flow with extra breathing room",
    overnightStyle: "Group-ready without feeling oversized",
    standout: "A comfortable upgrade for guests who want more privacy across rooms and a better shared overnight rhythm.",
    features: [
      "Three private bedrooms",
      "Large group-friendly layout",
      "Indoor lounge space",
      "Overnight-ready stay",
    ],
  },
  {
    slug: "5-bedroom",
    title: "Five Bedroom Houseboat",
    shortTitle: "Five Bedroom",
    href: "/houseboats/5-bedroom",
    image: "/images/five-bedroom-gallery/WhatsApp_Image_2026-05-14_at_18_04_14.jpeg",
    priceLabel: "Ask for group pricing",
    guestRange: "8-14 guests",
    bestFor: "Reunions, celebrations, and larger families",
    bedrooms: "5 private air-conditioned bedrooms",
    washrooms: "Attached washroom access",
    commonArea: "Expanded lounge, dining, and common areas",
    routeFeel: "Celebration-ready with stronger shared energy",
    overnightStyle: "A larger-format group stay with more occasion value",
    standout: "Best suited to bigger gatherings that need more bedrooms without splitting into multiple boats.",
    features: [
      "Celebration-friendly layout",
      "Larger common areas",
      "Good for reunions and group trips",
      "Comfortable for longer stays",
    ],
  },
];

export const houseboatComparisonRows = [
  { label: "Starting price", key: "priceLabel" },
  { label: "Guest fit", key: "guestRange" },
  { label: "Best for", key: "bestFor" },
  { label: "Bedrooms", key: "bedrooms" },
  { label: "Washrooms", key: "washrooms" },
  { label: "Common space", key: "commonArea" },
  { label: "Route feel", key: "routeFeel" },
  { label: "Overnight style", key: "overnightStyle" },
] as const satisfies ReadonlyArray<{
  label: string;
  key: keyof HouseboatComparisonItem;
}>;

