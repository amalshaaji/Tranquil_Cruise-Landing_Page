"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Eyebrow, Heading } from "@/components/ui/Heading";
import { Modal } from "@/components/ui/Modal";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Field, input } from "@/components/sections/EnquiryForm";
import { whatsappLink } from "@/lib/enquiry";
import { party } from "@/lib/houseboats";

/** Large groups and parties of 30+, arranged as a custom plan. */
export function PartySection({ tone }: { tone?: "paper" | "sand" }) {
  const [open, setOpen] = useState(false);
  return (
    <Section id="parties" tone={tone}>
      <Reveal>
        <div className="relative isolate overflow-hidden rounded-soft bg-moss-deep text-paper">
          <Photo {...party.photos[0]} sizes="(min-width:1024px) 1100px, 100vw" className="-z-20" />
          <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-moss-deep via-moss-deep/85 to-moss-deep/40 max-lg:bg-moss-deep/80" />

          <div className="grid gap-8 p-6 sm:p-10 lg:grid-cols-12 lg:gap-12 lg:p-14">
            <div className="lg:col-span-5">
              <Eyebrow className="bg-gold/20 text-gold">Groups and parties</Eyebrow>
              <Heading className="text-paper">{party.minGuests} guests or more?</Heading>
              <p className="mt-4 max-w-md text-paper/80">
                Celebrate on the water. We plan the boat, the menu and the evening around you.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button type="button" variant="light" onClick={() => setOpen(true)} className="w-full sm:w-auto">
                  Plan your party
                </Button>
                <Button
                  href={whatsappLink(`Hello Tranquil Cruise, I'd like to plan a party for ${party.minGuests}+ guests on a houseboat.`)}
                  target="_blank"
                  rel="noopener"
                  variant="outline"
                  className="w-full border-paper/50 text-paper hover:border-paper hover:bg-paper/10 sm:w-auto"
                >
                  Ask on WhatsApp
                </Button>
              </div>
              <p className="mt-4 text-sm text-paper/70">
                <span className="rounded-full bg-gold px-2.5 py-0.5 font-medium text-ink">
                  {party.minGuests} to {party.maxGuests} guests
                </span>{" "}
                Tell us your numbers and we&apos;ll propose the setup.
              </p>
            </div>

            <div className="lg:col-span-7">
              <ul className="grid grid-cols-2 gap-3">
                {party.occasions.map((o) => (
                  <li key={o.title} className="rounded-soft bg-paper/10 p-4 ring-1 ring-paper/20 backdrop-blur-sm sm:p-5">
                    <h3 className="font-serif text-base leading-snug sm:text-xl">{o.title}</h3>
                    <p className="mt-2 text-sm text-paper/70 max-sm:hidden">{o.body}</p>
                  </li>
                ))}
              </ul>
              <p className="mb-3 mt-6 text-xs font-medium uppercase tracking-[0.18em] text-gold">We can arrange</p>
              <ul className="flex flex-wrap gap-2">
                {party.arrangements.map((a) => (
                  <li key={a} className="rounded-full bg-paper/15 px-3.5 py-1.5 text-[13px] ring-1 ring-paper/20 sm:text-sm">
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Reveal>
      {open && (
        <Modal eyebrow="Groups and parties" title="Plan your party." onClose={() => setOpen(false)}>
          <PartyForm />
        </Modal>
      )}
    </Section>
  );
}

function PartyForm() {
  const [sent, setSent] = useState(false);
  const errors: Record<string, string> = {};

  type Values = { occasion: string; travel_date: string; guests: string; name: string; phone: string; email: string; message: string; arrange: string[] };
  const read = (form: HTMLFormElement): Values => {
    const f = new FormData(form);
    return { ...(Object.fromEntries(f) as Omit<Values, "arrange">), arrange: f.getAll("arrange").map(String) };
  };

  const message = (d: Values) =>
    [
      `Party / group booking: ${d.occasion}`,
      `Guests: ${d.guests}`,
      d.arrange.length && `Arrangements wanted: ${d.arrange.join(", ")}`,
      d.message && `Details: ${d.message}`,
    ]
      .filter(Boolean)
      .join("\n");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    openWhatsApp(e.currentTarget);
    setSent(true);
  }

  function openWhatsApp(form: HTMLFormElement | null) {
    const d = form ? read(form) : undefined;
    const text = ["Hello Tranquil Cruise, I'd like to plan a party on a houseboat.", d && d.travel_date && message(d), d?.name && `Name: ${d.name}`]
      .filter(Boolean)
      .join("\n");
    window.open(whatsappLink(text), "_blank", "noopener");
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 px-5 py-6 sm:grid-cols-2 sm:px-8">
      <Field label="Occasion" name="occasion" errors={errors}>
        <select name="occasion" className={input}>
          {party.occasions.map((o) => (
            <option key={o.title}>{o.title}</option>
          ))}
          <option>Something else</option>
        </select>
      </Field>
      <Field label="Date" name="travel_date" errors={errors}>
        <input name="travel_date" type="date" required min={new Date().toISOString().slice(0, 10)} suppressHydrationWarning className={input} />
      </Field>
      <Field label="Number of guests" name="guests" errors={errors}>
        <input name="guests" type="number" inputMode="numeric" required min={party.minGuests} max={party.maxGuests} defaultValue={party.minGuests} className={input} />
      </Field>
      <Field label="Your name" name="name" errors={errors}>
        <input name="name" required minLength={2} autoComplete="name" className={input} />
      </Field>
      <Field label="Phone" name="phone" errors={errors}>
        <input name="phone" type="tel" inputMode="tel" required autoComplete="tel" placeholder="+91 98765 43210" className={input} />
      </Field>
      <Field label="Email" name="email" errors={errors}>
        <input name="email" type="email" inputMode="email" required autoComplete="email" className={input} />
      </Field>

      <fieldset className="sm:col-span-2">
        <legend className="mb-2 text-sm text-mist">What should we arrange?</legend>
        <ul className="grid gap-x-8 sm:grid-cols-2">
          {party.arrangements.map((a) => (
            <li key={a}>
              <label className="flex min-h-11 items-center gap-3 border-b border-stone text-sm">
                <input type="checkbox" name="arrange" value={a} className="size-4 accent-moss" />
                {a}
              </label>
            </li>
          ))}
        </ul>
      </fieldset>

      <Field label="Anything else (optional)" name="message" errors={errors} className="sm:col-span-2">
        <textarea name="message" rows={3} placeholder="Timings, menu, budget, anything we should know" className={input} />
      </Field>

      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center">
        <Button type="submit" className="w-full sm:w-auto">
          Send on WhatsApp
        </Button>
      </div>
      <p className="text-sm text-mist sm:col-span-2" aria-live="polite">
        {sent
          ? "WhatsApp should have opened with your details ready. Press send there and we'll reply with a plan and a quote within a day."
          : "No payment now. Sending opens WhatsApp with your details ready to send. We reply there within a day with a plan and a quote."}
      </p>
    </form>
  );
}
