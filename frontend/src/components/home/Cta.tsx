import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { PalmSilhouette } from "@/components/ui/Illustrations";
import { Kasavu } from "@/components/ui/Kasavu";
import { Reveal } from "@/components/ui/Reveal";
import { whatsappLink } from "@/lib/enquiry";
import { site } from "@/lib/site";

export function Cta({
  heading = "Let the water set the pace.",
  text = "Tell us your dates and who's coming. We'll reply personally within a day.",
  label = "Plan your journey",
  href = "/contact",
}: {
  heading?: string;
  text?: string;
  label?: string;
  href?: string;
}) {
  const options = [
    { title: "Call us", value: site.phone, href: `tel:${site.phone.replace(/[^\d+]/g, "")}` },
    { title: "WhatsApp", value: "Chat with us", href: whatsappLink("Hello Tranquil Cruise, I'd like to enquire."), external: true },
    { title: "Email", value: site.email, href: `mailto:${site.email}` },
  ];
  return (
    <div>
      <Kasavu />
      <div className="relative overflow-hidden bg-moss-deep py-20 text-paper sm:py-28">
        <PalmSilhouette className="pointer-events-none absolute -bottom-6 -right-6 h-[110%] text-paper/10 sm:right-10" />
        <svg aria-hidden viewBox="0 0 1200 120" preserveAspectRatio="none" className="pointer-events-none absolute inset-x-0 bottom-0 h-24 w-full text-paper">
          <path className="drift" d="M-40 50 Q 100 20 240 50 T 520 50 T 800 50 T 1080 50 T 1240 50" fill="none" stroke="currentColor" strokeOpacity="0.14" strokeWidth="2" />
          <path className="drift-slow" d="M-40 85 Q 100 55 240 85 T 520 85 T 800 85 T 1080 85 T 1240 85" fill="none" stroke="currentColor" strokeOpacity="0.1" strokeWidth="2" />
        </svg>
        <Container className="relative">
          <Reveal>
            <p className="mb-5 inline-block rounded-full bg-gold/15 px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-gold">Let&apos;s talk</p>
            <Heading className="max-w-2xl">{heading}</Heading>
            <p className="mt-6 max-w-md text-paper/70">{text}</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href={href} variant="light" className="w-full sm:w-auto">
                {label}
              </Button>
              <Button
                href={whatsappLink("Hello Tranquil Cruise, I'd like to enquire.")}
                target="_blank"
                rel="noopener"
                variant="outline"
                className="w-full border-paper/30 text-paper hover:border-paper hover:bg-paper/10 sm:w-auto"
              >
                WhatsApp us
              </Button>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <ul className="mt-14 grid gap-3 sm:grid-cols-3">
              {options.map((o) => (
                <li key={o.title}>
                  <a
                    href={o.href}
                    {...(o.external ? { target: "_blank", rel: "noopener" } : {})}
                    className="block h-full rounded-soft border border-paper/15 bg-paper/5 px-5 py-4 backdrop-blur transition-colors duration-300 ease-calm hover:border-gold/60 hover:bg-paper/10"
                  >
                    <span className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-gold">
                      <span aria-hidden className="size-1.5 rotate-45 bg-gold" />
                      {o.title}
                    </span>
                    <span className="mt-2 block break-words text-sm">{o.value}</span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </div>
    </div>
  );
}
