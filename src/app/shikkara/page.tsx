import type { Metadata } from "next";
import ShikkaraExperiencePage from "@/components/services/ShikkaraExperiencePage";

export const metadata: Metadata = {
  title: "Shikkara Rides | Tranquil Cruise",
  description:
    "Romantic Shikkara boat rides through Kerala's scenic backwater canals. Sunset rides, village tours, and heritage boat experiences in Alleppey.",
  openGraph: {
    title: "Shikkara Rides | Tranquil Cruise",
    description:
      "Romantic boat rides through Kerala's most scenic canals.",
    images: [{ url: "/images/shikkara-real.jpg", width: 1200, height: 630 }],
  },
};

export default function ShikkaraPage() {
  return <ShikkaraExperiencePage />;
}
