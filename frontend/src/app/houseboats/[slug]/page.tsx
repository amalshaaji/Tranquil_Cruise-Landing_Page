import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  BookingProvider,
  BookNowButton,
} from "@/components/houseboats/Booking";
import { DetailGallery } from "@/components/houseboats/DetailGallery";
import { Faq } from "@/components/sections/Faq";
import { JsonLd } from "@/components/seo/JsonLd";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { DetailList } from "@/components/ui/DetailList";
import { Eyebrow, Heading, Lead } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import {
  bedroomsLabel,
  faqsFor,
  getHouseboat,
  getHouseboats,
  priceLabel,
  rupees,
} from "@/lib/houseboats";
import { breadcrumbSchema, faqSchema, pageMetadata } from "@/lib/seo";

export async function generateStaticParams() {
  return (await getHouseboats()).map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const boat = await getHouseboat((await params).slug);
  if (!boat) return {};
  return pageMetadata({
    title: `${boat.name}: Alleppey houseboat`,
    description: `${boat.summary} From ${rupees(boat.pricePerNight)} a night.`,
    path: `/houseboats/${boat.slug}`,
  });
}

export default async function HouseboatPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [boat, boats] = await Promise.all([
    getHouseboat(slug),
    getHouseboats(),
  ]);
  if (!boat) notFound();

  return (
    <BookingProvider boats={boats}>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Houseboats", path: "/houseboats" },
            { name: boat.name, path: `/houseboats/${boat.slug}` },
          ]),
          faqSchema(faqsFor(boat)),
        ]}
      />
      <div className="bg-paper">
        <Container className="pb-10 pt-10 sm:pt-16">
          <Reveal>
            <Link
              href="/houseboats#fleet"
              className="mb-8 inline-flex min-h-11 items-center text-sm text-mist transition-colors hover:text-ink"
            >
              ← All houseboats
            </Link>
            <Eyebrow>{bedroomsLabel(boat.bedrooms)}</Eyebrow>
            <Heading as="h1" className="max-w-3xl">
              {boat.name}, on the water.
            </Heading>
            <Lead className="mt-6">{boat.summary}</Lead>
          </Reveal>
        </Container>
      </div>

      <Section className="!pt-0 sm:!pt-0">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <DetailGallery
                photos={boat.gallery}
                label={`${bedroomsLabel(boat.bedrooms)} · ${boat.tag}`}
              />
            </Reveal>
            <Reveal className="mt-12">
              <Eyebrow>The boat</Eyebrow>
              <Heading as="h3">About this houseboat.</Heading>
              <div className="mt-5 grid gap-4 text-mist">
                {boat.description.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </Reveal>
            <Reveal className="mt-12">
              <Eyebrow>Bedrooms</Eyebrow>
              <DetailList items={boat.bedroomConfig} />
            </Reveal>
          </div>

          <Reveal delay={120} className="lg:col-span-5">
            <Card className="lg:sticky lg:top-24">
              <Eyebrow className="mb-0">From</Eyebrow>
              <p className="mt-2">
                <span className="rounded-soft bg-gold/15 px-3 py-0.5 font-serif text-4xl text-moss-deep">
                  {priceLabel(boat)}
                </span>
                <span className="text-mist"> / night</span>
              </p>
              <p className="mt-1 text-sm text-mist">Meals and crew included.</p>
              <div className="mt-6">
                <DetailList
                  items={[
                    ["Bedrooms", String(boat.bedrooms)],
                    [
                      "Availability",
                      boat.availability.blocked.length
                        ? "Some dates taken"
                        : "Open for booking",
                    ],
                  ]}
                />
              </div>
              <p className="mt-4 text-sm text-mist">{boat.availability.note}</p>
              {boat.availability.blocked.length > 0 && (
                <ul className="mt-3 text-sm text-mist">
                  {boat.availability.blocked.map((r) => (
                    <li key={r.from}>
                      Unavailable {r.from} to {r.to}
                    </li>
                  ))}
                </ul>
              )}
              <BookNowButton slug={boat.slug} className="mt-6 w-full" />
            </Card>
          </Reveal>
        </div>
      </Section>

      <Section tone="sand">
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <Eyebrow>Amenities</Eyebrow>
            <Heading>On board.</Heading>
          </Reveal>
          <Reveal delay={100} className="lg:col-span-8">
            <ul className="grid gap-x-10 sm:grid-cols-2">
              {boat.amenities.map((a) => (
                <li
                  key={a}
                  className="flex gap-4 border-b border-stone py-4 text-sm"
                >
                  <span
                    aria-hidden
                    className="mt-1.5 size-2 shrink-0 rotate-45 bg-gold"
                  />
                  {a}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Eyebrow>Facilities</Eyebrow>
              <DetailList items={boat.facilities} />
            </div>
          </Reveal>
        </div>
      </Section>

      <Faq items={faqsFor(boat)} />
    </BookingProvider>
  );
}
