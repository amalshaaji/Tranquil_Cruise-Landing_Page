import { Eyebrow, Heading, Lead } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export type Row = { title: string; body: string; meta?: string; visual?: React.ReactNode };

/** Numbered offerings separated by hairlines — used for boat types, rooms, programmes. */
export function RowList({
  eyebrow,
  heading,
  lead,
  rows,
  tone,
}: {
  eyebrow: string;
  heading: string;
  lead?: string;
  rows: Row[];
  tone?: "paper" | "sand";
}) {
  return (
    <Section tone={tone}>
      <Reveal className="mb-12 max-w-2xl">
        <Eyebrow>{eyebrow}</Eyebrow>
        <Heading>{heading}</Heading>
        {lead && <Lead className="mt-5">{lead}</Lead>}
      </Reveal>
      <div className="border-b border-stone">
        {rows.map((r, i) => (
          <Reveal key={r.title}>
            <div className="grid items-center gap-6 border-t border-stone py-8 md:grid-cols-12 md:gap-10">
              {r.visual && (
                <div className="aspect-[4/3] overflow-hidden rounded-soft md:col-span-4">{r.visual}</div>
              )}
              <div className={r.visual ? "md:col-span-5" : "md:col-span-8"}>
                <p className="text-xs tracking-[0.18em] text-clay">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-1 font-serif text-2xl sm:text-3xl">{r.title}</h3>
                <p className="mt-3 max-w-md text-mist">{r.body}</p>
              </div>
              {r.meta && <p className="text-sm text-moss md:col-span-3 md:text-right">{r.meta}</p>}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
