import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow, Heading, Lead } from "@/components/ui/Heading";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

/**
 * Full-screen photo. The palms behind the headline are busy, so a dark scrim sits over the
 * top of the photo and the copy is set in light text; the boat, lower in the frame, stays clear.
 */
export function Hero() {
  return (
    <section className="relative isolate flex min-h-[calc(100svh-4rem)] items-start overflow-hidden bg-sand">
      <Photo
        src="/images/hero-backwaters.webp"
        alt="A traditional kettuvallam houseboat gliding along a palm-lined canal on the Kerala backwaters"
        sizes="100vw"
        className="-z-10 object-[50%_40%] max-sm:hidden"
        quality={95}
        priority
      />
      <Photo
        src="/gallery/backwaters-13.webp"
        alt="Looking down a narrow Alleppey canal from a boat, framed by coconut palms under a blue sky"
        sizes="100vw"
        className="-z-10 object-[50%_58%] sm:hidden"
        priority
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-black/65 via-black/20 to-transparent max-sm:from-black/55 max-sm:via-black/10 max-sm:to-black/45" />

      <Container className="pb-16 pt-10 max-sm:text-center sm:pt-14 lg:pt-20">
        <Reveal>
          <Eyebrow className="bg-paper/15 text-paper backdrop-blur-sm max-sm:bg-transparent max-sm:px-0 max-sm:text-[11px] max-sm:tracking-[0.2em]">
            {site.location}
          </Eyebrow>
          <Heading
            as="h1"
            className="max-w-3xl text-paper [text-shadow:0_2px_18px_rgb(0_0_0/0.35)] max-sm:mx-auto max-sm:max-w-[15ch] max-sm:text-[2.75rem] max-sm:leading-[1.05] lg:text-7xl"
          >
            Slow days on the Kerala backwaters.
          </Heading>
          <Lead className="mt-4 hidden text-paper/90 sm:mt-5 sm:block">{site.description}</Lead>
          <p className="mx-auto mt-4 max-w-[17rem] text-[0.95rem] leading-relaxed text-paper/90 [text-shadow:0_1px_10px_rgb(0_0_0/0.45)] sm:hidden">
            Private houseboat journeys, a local crew and a Kerala kitchen.
          </p>
          <div className="mt-7 flex gap-3 max-sm:justify-center">
            <Button href="/contact" variant="light" className="max-sm:px-8 max-sm:shadow-xl sm:bg-moss sm:text-paper sm:hover:bg-moss-deep">
              Plan your journey
            </Button>
            <Button href="/#houseboats" variant="outline" className="border-paper/60 text-paper hover:border-paper hover:bg-paper/10 max-sm:hidden">
              See the boats
            </Button>
          </div>
        </Reveal>
      </Container>

      <span aria-hidden className="absolute bottom-24 left-1/2 -translate-x-1/2 animate-bounce text-xl text-paper/80 sm:hidden">
        ˅
      </span>
    </section>
  );
}
