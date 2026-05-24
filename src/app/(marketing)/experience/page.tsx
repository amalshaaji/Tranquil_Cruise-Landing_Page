import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { generatePageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata({
    title: "Experience Gallery | Alleppey Backwater Moments | Tranquil Cruise",
    description:
      "Browse Tranquil Cruise experience moments across Alleppey houseboats, shikkara rides, kayaking, and Kerala backwater routes in Alappuzha.",
    path: "/experience",
    keywords: [
      "Alleppey experience gallery",
      "Alappuzha backwater experiences",
      "Kerala houseboat moments",
      "Tranquil Cruise gallery",
    ],
    image: {
      url: "/images/guest-moments/customer-01.webp",
      alt: "Guest experience moment on the Alleppey backwaters",
      width: 1200,
      height: 900,
    },
  });
}

export default function ExperienceRedirectPage() {
  redirect("/gallery");
}
