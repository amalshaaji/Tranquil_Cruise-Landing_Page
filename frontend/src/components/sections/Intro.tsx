import { DetailList } from "@/components/ui/DetailList";
import { Eyebrow, Heading } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function Intro({
  eyebrow,
  heading,
  paragraphs,
  facts,
  tone,
}: {
  eyebrow: string;
  heading: string;
  paragraphs: string[];
  facts?: ReadonlyArray<readonly [string, string]>;
  tone?: "paper" | "sand";
}) {
  return (
    <Section tone={tone}>
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-7">
          <Eyebrow>{eyebrow}</Eyebrow>
          <Heading>{heading}</Heading>
          <div className="mt-6 max-w-xl space-y-4 text-lg leading-relaxed text-mist">
            {paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Reveal>
        {facts && (
          <Reveal delay={120} className="self-end lg:col-span-5">
            <DetailList items={facts} />
          </Reveal>
        )}
      </div>
    </Section>
  );
}
