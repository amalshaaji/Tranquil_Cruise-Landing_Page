import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { EnquiryFormWithPreselect } from "@/components/sections/EnquiryForm";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { DetailList } from "@/components/ui/DetailList";
import { Eyebrow } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { Stars } from "@/components/ui/Stars";
import { whatsappLink } from "@/lib/enquiry";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Contact & Booking Enquiry",
  description: "Enquire about an Alleppey houseboat, day cruise, shikkara ride or kayaking trip. Tell us your dates and we reply personally within a day.",
  path: "/contact",
});

const contacts = [
  { title: "Call us", value: site.phone, href: `tel:${site.phone.replace(/[^\d+]/g, "")}` },
  { title: "WhatsApp", value: "Chat with us", href: whatsappLink("Hello Tranquil Cruise, I'd like to enquire."), external: true },
  { title: "Email", value: site.email, href: `mailto:${site.email}` },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us how you'd like to travel."
        lead="Dates, guests, and the kind of days you imagine. We'll reply personally within a day."
      />
      <Section tone="sand">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7">
            <EnquiryFormWithPreselect />
          </div>
          <aside className="lg:col-span-5">
            <Card className="lg:sticky lg:top-28">
              <Eyebrow>Find us</Eyebrow>
              <ul>
                {contacts.map((c) => (
                  <li key={c.title}>
                    <a
                      href={c.href}
                      {...(c.external ? { target: "_blank", rel: "noopener" } : {})}
                      className="group flex items-center justify-between gap-4 border-t border-stone py-4 transition-colors duration-300 ease-calm hover:text-clay"
                    >
                      <span>
                        <span className="block text-xs uppercase tracking-[0.18em] text-mist">{c.title}</span>
                        <span className="mt-1 block break-words font-serif text-lg">{c.value}</span>
                      </span>
                      <span aria-hidden className="text-clay transition-transform duration-300 ease-calm group-hover:translate-x-1">
                        →
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              <DetailList
                items={[
                  ["Address", `${site.address.street}, ${site.address.locality}, ${site.address.region} ${site.address.postalCode}`],
                  ["Departs from", site.jetty],
                  ["Hours", site.hours],
                  ["Replies", "Within a day"],
                ]}
              />
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <Button href={site.googleMapsUrl} target="_blank" rel="noopener" variant="outline" className="w-full sm:w-auto">
                  Get directions
                </Button>
                <span className="flex items-center justify-center gap-2 text-sm text-mist" role="img" aria-label={`${site.googleRating} out of 5 stars on Google`}>
                  <Stars className="size-3.5" />
                  {site.googleRating} · {site.googleReviewCount} reviews
                </span>
              </div>
            </Card>
          </aside>
        </div>
      </Section>
    </>
  );
}
