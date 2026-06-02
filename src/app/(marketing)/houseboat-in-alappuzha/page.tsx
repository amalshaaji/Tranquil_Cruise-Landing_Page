import type { Metadata } from "next";
import InformationalPage from "@/components/content/InformationalPage";
import { getInformationalPage } from "@/lib/informational-pages";
import { generatePageMetadata } from "@/lib/seo";

const page = getInformationalPage("houseboat-in-alappuzha");

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata({
    title: `${page.title} | Tranquil Cruise`,
    description: page.description,
    path: page.path,
    keywords: page.keywords,
  });
}

export default function HouseboatInAlappuzhaPage() {
  return <InformationalPage page={page} />;
}
