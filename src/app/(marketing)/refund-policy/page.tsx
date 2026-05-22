import type { Metadata } from "next";
import InformationalPage from "@/components/content/InformationalPage";
import { getInformationalPage } from "@/lib/informational-pages";
import { generatePageMetadata } from "@/lib/seo";

const page = getInformationalPage("refund-policy");

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata({
    title: `${page.title} | Tranquil Cruise`,
    description: page.description,
    path: page.path,
    keywords: page.keywords,
  });
}

export default function RefundPolicyPage() {
  return <InformationalPage page={page} />;
}
