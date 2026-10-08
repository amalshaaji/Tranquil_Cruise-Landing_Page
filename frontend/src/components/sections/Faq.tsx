import { Eyebrow, Heading } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export type FaqItem = { q: string; a: string };

export function Faq({
  items,
  tone,
  eyebrow = "Good to know",
  heading = "Questions, answered.",
}: {
  items: FaqItem[];
  tone?: "paper" | "sand";
  eyebrow?: string;
  heading?: string;
}) {
  return (
    <Section tone={tone}>
      <div className="grid gap-10 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <Eyebrow>{eyebrow}</Eyebrow>
          <Heading>{heading}</Heading>
        </Reveal>
        <Reveal delay={100} className="lg:col-span-8">
          <div className="border-b border-stone">
            {items.map((f) => (
              <details key={f.q} className="group border-t border-stone py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-serif text-xl">
                  {f.q}
                  <span aria-hidden className="text-2xl text-clay transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-xl text-mist">{f.a}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
