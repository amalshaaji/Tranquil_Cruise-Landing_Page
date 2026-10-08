import { PageHero } from "@/components/layout/PageHero";
import { Checklist } from "@/components/sections/Checklist";
import { Faq, type FaqItem } from "@/components/sections/Faq";
import { Intro } from "@/components/sections/Intro";
import { RowList } from "@/components/sections/RowList";
import { Timeline } from "@/components/sections/Timeline";
import { HeroSlider } from "@/components/ui/HeroSlider";
import { Photo } from "@/components/ui/Photo";
import { Scene } from "@/components/ui/Illustrations";
import { JsonLd } from "@/components/seo/JsonLd";
import { whatsappLink } from "@/lib/enquiry";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/seo";
import type { Experience } from "@/lib/content";

/** Shared layout for the houseboat, day cruise, shikkara and kayaking pages. */
export function ExperiencePage({
  data,
  fleet,
  extraFaqs = [],
}: {
  data: Experience;
  fleet?: (tone: () => "paper" | "sand") => React.ReactNode;
  /** FAQs shown elsewhere on the page, added to the FAQ structured data. */
  extraFaqs?: FaqItem[];
}) {
  // Alternate section backgrounds automatically, whichever sections are present.
  let n = 0;
  const tone = () => (n++ % 2 === 0 ? "paper" : "sand") as "paper" | "sand";

  const { seo } = data;
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: seo.name,
            description: seo.description,
            path: seo.path,
          }),
          breadcrumbSchema([{ name: seo.name, path: seo.path }]),
          faqSchema([...data.faqs, ...extraFaqs]),
        ]}
      />
      <PageHero
        eyebrow={data.eyebrow}
        title={data.title}
        lead={data.lead}
        size={data.heroSize ?? (data.slides ? "tall" : undefined)}
        cta={
          data.heroCta
            ? {
                label: data.heroCta,
                href: whatsappLink(
                  `Hello Tranquil Cruise, I'd like to book: ${seo.name}.`,
                ),
                external: true,
                note: data.heroCtaNote,
              }
            : undefined
        }
        visual={
          data.slides ? (
            <HeroSlider photos={data.slides} />
          ) : data.photo ? (
            <div className="relative h-full w-full">
              <Photo {...data.photo} sizes="100vw" priority />
            </div>
          ) : (
            <Scene viewBox="0 70 400 190" {...data.scene} />
          )
        }
      />
      <Intro {...data.intro} tone={tone()} />
      {fleet
        ? fleet(tone)
        : data.options && (
            <RowList
              {...data.options}
              tone={tone()}
              rows={data.options.rows.map(({ subject, mood, ...r }) => ({
                ...r,
                visual: subject ? (
                  <Scene
                    mood={mood}
                    subject={subject}
                    label={r.title}
                    scale={1.1}
                  />
                ) : undefined,
              }))}
            />
          )}
      {data.timeline && <Timeline {...data.timeline} tone={tone()} />}
      <Checklist {...data.includes} tone={tone()} />
      <Faq items={data.faqs} tone={tone()} />
    </>
  );
}
