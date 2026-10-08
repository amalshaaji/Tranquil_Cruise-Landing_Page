import { Eyebrow, Heading } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export type TimelineItem = { time: string; title: string; body: string };

export function Timeline({
  eyebrow = "The day",
  heading,
  items,
  tone,
}: {
  eyebrow?: string;
  heading: string;
  items: TimelineItem[];
  tone?: "paper" | "sand";
}) {
  return (
    <Section tone={tone}>
      <div className="grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <Eyebrow>{eyebrow}</Eyebrow>
          <Heading>{heading}</Heading>
        </Reveal>
        <ol className="relative lg:col-span-8">
          <span aria-hidden className="absolute bottom-2 left-[5px] top-2 w-px bg-gold/60" />
          {items.map((it, i) => (
            <li key={it.time}>
              <Reveal delay={i * 60} className="relative pb-10 pl-9 last:pb-0">
                <span className="absolute left-0 top-2 size-[11px] rotate-45 bg-gold" />
                <p className="text-xs uppercase tracking-[0.18em] text-clay">{it.time}</p>
                <h3 className="mt-1 font-serif text-2xl">{it.title}</h3>
                <p className="mt-2 max-w-lg text-mist">{it.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
