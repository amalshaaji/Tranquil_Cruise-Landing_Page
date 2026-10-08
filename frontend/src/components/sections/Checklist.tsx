import { Eyebrow, Heading } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function Checklist({
  eyebrow = "Included",
  heading,
  items,
  tone,
}: {
  eyebrow?: string;
  heading: string;
  items: string[];
  tone?: "paper" | "sand";
}) {
  return (
    <Section tone={tone}>
      <div className="grid gap-10 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <Eyebrow>{eyebrow}</Eyebrow>
          <Heading>{heading}</Heading>
        </Reveal>
        <Reveal delay={100} className="lg:col-span-8">
          <ul className="grid gap-x-10 sm:grid-cols-2">
            {items.map((it) => (
              <li key={it} className="flex gap-4 border-b border-stone py-4 text-sm">
                <span aria-hidden className="mt-1.5 size-2 shrink-0 rotate-45 bg-gold" />
                {it}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
