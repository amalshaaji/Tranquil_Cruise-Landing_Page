import type { Metadata } from "next";
import { ExperiencePage } from "@/components/templates/ExperiencePage";
import { shikkara } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(shikkara.seo);

export default function Page() {
  return <ExperiencePage data={shikkara} />;
}
