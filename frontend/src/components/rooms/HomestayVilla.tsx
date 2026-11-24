import { Button } from "@/components/ui/Button";
import { Eyebrow, Heading, Lead } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { HeroSlider } from "@/components/ui/HeroSlider";
import type { Homestay } from "@/lib/homestays";
import { Section } from "@/components/ui/Section";
import { whatsappLink } from "@/lib/enquiry";

/** One land stay beside the houseboats: a slideshow of photos beside its name, facts and enquiry buttons. */
export function HomestayVilla({
  stay,
  tone,
  flip,
}: {
  stay: Homestay;
  tone?: "paper" | "sand";
  flip?: boolean;
}) {
  const {
    name,
    meaning,
    eyebrow,
    lead,
    facts,
    highlights,
    photos,
  } = stay;
  return (
    <Section id={stay.id} tone={tone}>
      <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
        <Reveal className={`lg:col-span-6 ${flip ? "lg:order-2" : ""}`}>
          <div className="aspect-[4/3] overflow-hidden rounded-soft shadow-lg">
            <HeroSlider photos={photos} />
          </div>
        </Reveal>
        <Reveal delay={120} className="lg:col-span-6">
          <Eyebrow>{eyebrow}</Eyebrow>
          <Heading>{name}</Heading>
          <p className="mt-2 text-sm text-moss">{meaning}</p>
          <Lead className="mt-5">{lead}</Lead>
          <dl className="mt-6 border-b border-stone">
            {facts.map(([k, v]) => (
              <div
                key={k}
                className="flex justify-between gap-6 border-t border-stone py-3 text-sm"
              >
                <dt className="text-mist">{k}</dt>
                <dd className="text-right">{v}</dd>
              </div>
            ))}
          </dl>
          <ul className="mt-5 flex flex-wrap gap-2">
            {highlights.map((h) => (
              <li
                key={h}
                className="rounded-full bg-gold/15 px-3.5 py-1.5 text-sm text-moss-deep ring-1 ring-gold/40"
              >
                {h}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              href={whatsappLink(
                `Hello Tranquil Alleppey Backwater Cruises, I'd like to book ${name}.`,
              )}
              target="_blank"
              rel="noopener"
              className="w-full sm:w-auto"
            >
              Book on WhatsApp
            </Button>
            <Button
              href={whatsappLink(
                `Hello Tranquil Alleppey Backwater Cruises, I'd like to know more about ${name}, the homestay.`,
              )}
              target="_blank"
              rel="noopener"
              variant="outline"
              className="w-full sm:w-auto"
            >
              Ask a question
            </Button>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
