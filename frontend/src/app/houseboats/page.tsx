import type { Metadata } from "next";
import { Fleet } from "@/components/houseboats/Fleet";
import { Faq } from "@/components/sections/Faq";
import { PartySection } from "@/components/houseboats/PartySection";
import { ExperiencePage } from "@/components/templates/ExperiencePage";
import { houseboats } from "@/lib/content";
import { getHouseboats, party } from "@/lib/houseboats";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(houseboats.seo);

export default async function Page() {
  const boats = await getHouseboats();
  return <ExperiencePage data={houseboats} extraFaqs={party.faqs} fleet={(tone) => (
        <>
          <Fleet boats={boats} tone={tone()} />
          <PartySection tone={tone()} />
          <Faq items={party.faqs} tone={tone()} eyebrow="Groups and parties" heading="Party questions." />
        </>
      )} />;
}
