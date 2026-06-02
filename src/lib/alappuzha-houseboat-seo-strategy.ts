export type SeoRequirementPage = {
  href: string;
  title: string;
  intent: "pillar" | "commercial" | "informational" | "local" | "comparison";
  priority: "high" | "medium";
  primaryKeyword: string;
};

export const alappuzhaHouseboatSeoStrategy = {
  primaryKeyword: "alappuzha houseboat",
  supportingKeywords: [
    "alappuzha houseboat booking",
    "best houseboat in alappuzha",
    "luxury houseboat alappuzha",
    "budget houseboat alappuzha",
    "overnight houseboat stay alappuzha",
  ],
  requiredPages: [
    {
      href: "/alappuzha-houseboat",
      title: "Alappuzha Houseboat",
      intent: "pillar",
      priority: "high",
      primaryKeyword: "alappuzha houseboat",
    },
    {
      href: "/alappuzha-houseboat-booking",
      title: "Alappuzha Houseboat Booking",
      intent: "commercial",
      priority: "high",
      primaryKeyword: "alappuzha houseboat booking",
    },
    {
      href: "/houseboat-in-alappuzha",
      title: "Houseboat In Alappuzha",
      intent: "local",
      priority: "high",
      primaryKeyword: "houseboat in alappuzha",
    },
    {
      href: "/luxury-houseboat-alappuzha",
      title: "Luxury Houseboat Alappuzha",
      intent: "commercial",
      priority: "high",
      primaryKeyword: "luxury houseboat alappuzha",
    },
    {
      href: "/budget-houseboat-alappuzha",
      title: "Budget Houseboat Alappuzha",
      intent: "commercial",
      priority: "high",
      primaryKeyword: "budget houseboat alappuzha",
    },
    {
      href: "/overnight-houseboat-alappuzha",
      title: "Overnight Houseboat Alappuzha",
      intent: "commercial",
      priority: "high",
      primaryKeyword: "overnight houseboat stay alappuzha",
    },
    {
      href: "/alappuzha-houseboat-price-guide",
      title: "Alappuzha Houseboat Price Guide",
      intent: "informational",
      priority: "high",
      primaryKeyword: "alappuzha houseboat price",
    },
    {
      href: "/alappuzha-houseboat-routes-guide",
      title: "Alappuzha Houseboat Routes Guide",
      intent: "informational",
      priority: "high",
      primaryKeyword: "alappuzha houseboat route guide",
    },
    {
      href: "/houseboats/compare",
      title: "Houseboat Comparison",
      intent: "comparison",
      priority: "high",
      primaryKeyword: "best houseboat in alappuzha",
    },
    {
      href: "/boarding-point-alappuzha-houseboat",
      title: "Boarding Point Alappuzha Houseboat",
      intent: "local",
      priority: "medium",
      primaryKeyword: "boarding point alappuzha houseboat",
    },
  ] satisfies SeoRequirementPage[],
  requiredSchema: [
    "BreadcrumbList",
    "FAQPage",
    "LocalBusiness",
    "TravelAgency",
    "Service",
    "TouristTrip",
    "ItemList",
  ] as const,
  requiredTechnicalFixes: [
    "Ensure the pillar and support pages are included in sitemap.xml with elevated priority.",
    "Keep one canonical NAP across the footer, contact page, schema, and local landing pages.",
    "Use crawlable internal links from the home page, contact page, houseboats hub, footer, and local pages into the pillar.",
    "Promote only the real LCP image on houseboat landing pages and keep supporting imagery lazy.",
  ] as const,
} as const;
