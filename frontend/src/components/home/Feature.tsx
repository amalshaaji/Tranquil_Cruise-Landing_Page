import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { DetailList } from "@/components/ui/DetailList";
import { PhotoChip } from "@/components/ui/PhotoChip";
import { Heading, Lead } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function Feature({
  id,
  index,
  eyebrow,
  title,
  lead,
  details,
  href,
  cta,
  scene,
  badge,
  reverse,
  tone = "paper",
}: {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  lead: string;
  details: ReadonlyArray<readonly [string, string]>;
  href: string;
  cta: string;
  scene: React.ReactNode;
  /** Key fact shown on the photo, e.g. a price or a time. */
  badge?: string;
  reverse?: boolean;
  tone?: "paper" | "sand";
}) {
  return (
    <Section id={id} tone={tone}>
      <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
        <Reveal className={cn("lg:col-span-7", reverse && "lg:order-2")}>
          <div className={cn("photo-frame relative", reverse && "mirror")}>
            <span
              aria-hidden
              className={cn(
                "frame-line absolute size-full rounded-soft border border-gold/70",
                reverse ? "-bottom-3 -left-3" : "-bottom-3 -right-3",
              )}
            />
            <span
              aria-hidden
              className={cn("absolute -top-1.5 z-20 size-3 rotate-45 bg-gold", reverse ? "-right-1.5" : "-left-1.5")}
            />
            <div className="zoom-img relative z-10 aspect-[4/3] overflow-hidden rounded-soft">{scene}
              {badge && <PhotoChip className="left-4 top-4">{badge}</PhotoChip>}
            </div>
          </div>
        </Reveal>
        <Reveal delay={120} className="lg:col-span-5">
          <p className="mb-5 flex items-center gap-3">
            <span className="font-serif text-4xl leading-none text-gold sm:text-5xl">{index}</span>
            <span aria-hidden className="h-px w-8 bg-clay/60" />
            <span className="rounded-full bg-clay/10 px-3.5 py-1.5 text-sm font-medium uppercase tracking-[0.18em] text-clay">
              {eyebrow}
            </span>
          </p>
          <Heading>{title}</Heading>
          <Lead className="mt-5">{lead}</Lead>
          <div className="mt-8">
            <DetailList items={details} />
          </div>
          <Button href={href} className="mt-8 w-full sm:w-auto">
            {cta}
          </Button>
        </Reveal>
      </div>
    </Section>
  );
}
