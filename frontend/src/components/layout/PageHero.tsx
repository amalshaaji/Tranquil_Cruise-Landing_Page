import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow, Heading, Lead } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";

export function PageHero({
  eyebrow,
  title,
  lead,
  visual,
  size,
  cta,
  links,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  /** Full-width illustration or photo shown beneath the heading. */
  visual?: React.ReactNode;
  /** Height of the image band: slideshows default to tall; "half" is half of that; "card" is a small rounded picture. */
  size?: "tall" | "half" | "card";
  /** A booking button shown under the image. */
  cta?: { label: string; href: string; note?: string; external?: boolean };
  /** Quick links to sections further down the page. */
  links?: Array<{ label: string; href: string }>;
}) {
  const ctaBlock = (stack?: boolean) =>
    cta && (
      <div
        className={`flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5 ${stack ? "lg:flex-col lg:items-start lg:gap-4" : ""}`}
      >
        <Button
          href={cta.href}
          {...(cta.external ? { target: "_blank", rel: "noopener" } : {})}
          className="min-h-14 px-9 text-base shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl max-sm:w-full"
        >
          {cta.label}
        </Button>
        {cta.note && (
          <p className="flex items-center gap-2 text-sm text-mist max-sm:justify-center">
            <span aria-hidden className="size-1.5 shrink-0 rotate-45 bg-gold" />
            {cta.note}
          </p>
        )}
      </div>
    );

  if (visual && size === "card") {
    // Phones: heading, picture, then the button. Desktop: text and button left, picture right.
    return (
      <div className="bg-paper">
        <Container className="pb-4 pt-10 sm:pt-20">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-16">
            <Reveal>
              <Eyebrow>{eyebrow}</Eyebrow>
              <Heading as="h1" className="max-w-3xl">
                {title}
              </Heading>
              {lead && <Lead className="mt-6">{lead}</Lead>}
              {cta && (
                <div className="mt-9 max-lg:hidden">{ctaBlock(true)}</div>
              )}
            </Reveal>
            <Reveal delay={150}>
              <div className="aspect-[4/3] w-full max-w-xl overflow-hidden rounded-soft shadow-lg lg:ml-auto">
                {visual}
              </div>
            </Reveal>
          </div>
          {cta && <div className="pt-8 lg:hidden">{ctaBlock()}</div>}
        </Container>
      </div>
    );
  }

  return (
    <div className="bg-paper">
      <Container
        className={
          visual
            ? "pb-8 pt-10 sm:pb-10 sm:pt-20"
            : "pb-12 pt-10 sm:pb-20 sm:pt-20"
        }
      >
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
          <Heading as="h1" className="max-w-3xl">
            {title}
          </Heading>
          {lead && <Lead className="mt-6">{lead}</Lead>}
          {links && (
            <nav
              aria-label="On this page"
              className="mt-7 flex flex-wrap gap-3"
            >
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="rounded-full border border-moss/30 bg-gold/10 px-5 py-2.5 text-sm font-medium text-moss-deep transition-colors hover:border-moss hover:bg-gold/25"
                >
                  {l.label} <span aria-hidden>↓</span>
                </a>
              ))}
            </nav>
          )}
        </Reveal>
      </Container>
      {visual && (
        <Reveal delay={150}>
          <div
            className={
              size === "half"
                ? "h-[19vw] max-h-[200px] min-h-[120px] w-full"
                : size === "tall"
                  ? "h-[56vw] max-h-[580px] min-h-[260px] w-full"
                  : "h-[44vw] max-h-[480px] min-h-[240px] w-full"
            }
          >
            {visual}
          </div>
        </Reveal>
      )}
      {cta && (
        <Container className="pb-4 pt-8 sm:pt-10">{ctaBlock()}</Container>
      )}
    </div>
  );
}
