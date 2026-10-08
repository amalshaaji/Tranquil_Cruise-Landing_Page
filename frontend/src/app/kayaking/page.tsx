import type { Metadata } from "next";
import { ExperiencePage } from "@/components/templates/ExperiencePage";
import { kayaking } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(kayaking.seo);

export default function Page() {
  return <ExperiencePage data={kayaking} />;
}
