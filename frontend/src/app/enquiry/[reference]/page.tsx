import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { DetailList } from "@/components/ui/DetailList";
import { Section } from "@/components/ui/Section";
import { ApiError, api } from "@/lib/api";
import { Confirmation, formatDate, serviceLabel, whatsappLink } from "@/lib/enquiry";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Enquiry received", robots: { index: false } };

export default async function ConfirmationPage({ params }: { params: Promise<{ reference: string }> }) {
  const { reference } = await params;

  let e: Confirmation;
  try {
    e = await api<Confirmation>(`/enquiries/${encodeURIComponent(reference)}`, { cache: "no-store" });
  } catch (err) {
    if (err instanceof ApiError && err.status === 404) notFound();
    throw err;
  }

  const msg = `Hello Tranquil Cruise, I just sent an enquiry (ref ${e.reference}) for a ${serviceLabel(e.service).toLowerCase()} on ${e.travel_date}.`;

  return (
    <>
      <PageHero
        eyebrow="Enquiry received"
        title={`Thank you, ${e.first_name}.`}
        lead="We've got your request and will reply personally within a day. For anything urgent, message us on WhatsApp."
      />
      <Section tone="sand">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <DetailList
              items={[
                ["Reference", e.reference],
                ["Service", serviceLabel(e.service)],
                ["Date", formatDate(e.travel_date)],
                ["Guests", String(e.guests)],
                ["Status", "Awaiting our reply"],
              ]}
            />
            <p className="mt-4 text-sm text-mist">
              This is an enquiry, not a confirmed booking. We&apos;ll confirm availability and next steps with you.
            </p>
          </div>
          <div className="flex flex-col items-start gap-4 lg:col-span-5 lg:col-start-8">
            <Button href={whatsappLink(msg)} target="_blank" rel="noopener">
              Message us on WhatsApp
            </Button>
            <Button href="/" variant="outline">
              Back to home
            </Button>
            <p className="text-sm text-mist">Or call {site.phone}.</p>
          </div>
        </div>
      </Section>
    </>
  );
}
