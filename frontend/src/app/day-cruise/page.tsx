import type { Metadata } from "next";
import { ExperiencePage } from "@/components/templates/ExperiencePage";
import { dayCruise } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(dayCruise.seo);

export default function Page() {
  return <ExperiencePage data={dayCruise} />;
}
