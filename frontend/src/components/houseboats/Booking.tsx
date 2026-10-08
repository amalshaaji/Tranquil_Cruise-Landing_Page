"use client";

import { useRouter } from "next/navigation";
import { createContext, useContext, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Heading";
import { Modal } from "@/components/ui/Modal";
import { Field, input } from "@/components/sections/EnquiryForm";
import { ApiError, api } from "@/lib/api";
import { Confirmation, openChat, whatsappLink } from "@/lib/enquiry";
import { type Houseboat, bedroomsLabel, nightsBetween, overlapsBlocked, quote, rupees } from "@/lib/houseboats";

const BookingContext = createContext<(slug: string) => void>(() => {});

/** One booking dialog for a group of houseboats. Buttons anywhere below it open it with a boat preselected. */
export function BookingProvider({ boats, children }: { boats: Houseboat[]; children: React.ReactNode }) {
  const [slug, setSlug] = useState<string | null>(null);
  return (
    <BookingContext.Provider value={setSlug}>
      {children}
      {slug && <BookingDialog boats={boats} initial={slug} onClose={() => setSlug(null)} />}
    </BookingContext.Provider>
  );
}

export function BookNowButton({ slug, variant, className, children = "Book now" }: React.ComponentProps<typeof Button> & { slug: string }) {
  const open = useContext(BookingContext);
  return (
    <Button type="button" variant={variant} className={className} onClick={() => open(slug)}>
      {children}
    </Button>
  );
}

function BookingDialog({ boats, initial, onClose }: { boats: Houseboat[]; initial: string; onClose: () => void }) {
  return (
    <Modal eyebrow="Book a houseboat" title="Tell us about your stay." onClose={onClose}>
      <BookingForm boats={boats} initial={initial} />
    </Modal>
  );
}

const today = () => new Date().toISOString().slice(0, 10);

function BookingForm({ boats, initial }: { boats: Houseboat[]; initial: string }) {
  const router = useRouter();
  const [slug, setSlug] = useState(initial);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [busy, setBusy] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [failed, setFailed] = useState(false);

  const boat = boats.find((b) => b.slug === slug) ?? boats[0];
  const nights = nightsBetween(checkIn, checkOut);
  const q = nights ? quote(boat, nights) : null;
  const guests = adults + children;

  function validate() {
    const e: Record<string, string> = {};
    if (checkIn && checkOut && !nights) e.check_out = "Check-out must be after check-in";
    else if (nights && overlapsBlocked(boat, checkIn, checkOut)) e.check_in = "This boat isn't available on those dates";
    if (guests > boat.capacity) e.adults = `${boat.name} sleeps up to ${boat.capacity} guests`;
    return e;
  }

  const message = (d: Record<string, string>) =>
    [
      `Houseboat booking request: ${boat.name}`,
      `Check-in: ${checkIn}`,
      `Check-out: ${checkOut} (${nights} ${nights === 1 ? "night" : "nights"})`,
      `Guests: ${adults} adults, ${children} children`,
      q && `Estimated total: ${rupees(q.total)}`,
      d.message && `Requests: ${d.message}`,
    ]
      .filter(Boolean)
      .join("\n");

  async function onSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const d = Object.fromEntries(new FormData(ev.currentTarget)) as Record<string, string>;
    const local = validate();
    setErrors(local);
    if (Object.keys(local).length) return;
    setBusy(true);
    setFailed(false);
    // Opened now, while the click still counts, and pointed at WhatsApp once the request is saved.
    const chat = window.open("", "_blank");
    const contact = [`Name: ${d.name}`, `Phone: ${d.phone}`, `Email: ${d.email}`].join("\n");
    try {
      const res = await api<Confirmation>("/enquiries", {
        method: "POST",
        body: JSON.stringify({
          service: "houseboat",
          travel_date: checkIn,
          guests,
          name: d.name,
          phone: d.phone,
          email: d.email,
          message: message(d),
        }),
      });
      openChat(chat, `Hello Tranquil Cruise, I'd like to confirm this booking (ref ${res.reference}).\n${message(d)}\n${contact}`);
      router.push(`/enquiry/${res.reference}`);
    } catch (err) {
      const invalid = err instanceof ApiError && Object.keys(err.fields).length > 0;
      if (invalid) chat?.close();
      else openChat(chat, `Hello Tranquil Cruise, I'd like to confirm this booking.\n${message(d)}\n${contact}`);
      if (err instanceof ApiError && Object.keys(err.fields).length) {
        const { travel_date, ...rest } = err.fields;
        setErrors(travel_date ? { ...rest, check_in: travel_date } : rest);
      } else setFailed(true);
      setBusy(false);
    }
  }

  function openWhatsApp(form: HTMLFormElement | null) {
    const d = form ? (Object.fromEntries(new FormData(form)) as Record<string, string>) : {};
    const text = ["Hello Tranquil Cruise, I'd like to book a houseboat.", checkIn && message(d), d.name && `Name: ${d.name}`].filter(Boolean).join("\n");
    window.open(whatsappLink(text), "_blank", "noopener");
  }

  return (
    <form onSubmit={onSubmit} className="grid lg:grid-cols-12">
      <div className="grid content-start gap-5 px-5 py-6 sm:grid-cols-2 sm:px-8 lg:col-span-7">
        <Field label="Houseboat" name="boat" errors={errors} className="sm:col-span-2">
          <select value={slug} onChange={(e) => setSlug(e.target.value)} className={input}>
            {boats.map((b) => (
              <option key={b.slug} value={b.slug}>
                {b.name} · up to {b.capacity} guests
              </option>
            ))}
          </select>
        </Field>
        <Field label="Check-in" name="check_in" errors={errors}>
          <input type="date" required min={today()} value={checkIn} onChange={(e) => setCheckIn(e.target.value)} suppressHydrationWarning className={input} />
        </Field>
        <Field label="Check-out" name="check_out" errors={errors}>
          <input type="date" required min={checkIn || today()} value={checkOut} onChange={(e) => setCheckOut(e.target.value)} suppressHydrationWarning className={input} />
        </Field>
        <Field label="Adults" name="adults" errors={errors}>
          <input type="number" inputMode="numeric" required min={1} max={boat.capacity} value={adults} onChange={(e) => setAdults(Number(e.target.value))} className={input} />
        </Field>
        <Field label="Children" name="children" errors={errors}>
          <input type="number" inputMode="numeric" min={0} max={boat.capacity} value={children} onChange={(e) => setChildren(Number(e.target.value))} className={input} />
        </Field>
        <Field label="Your name" name="name" errors={errors}>
          <input name="name" required minLength={2} autoComplete="name" className={input} />
        </Field>
        <Field label="Phone" name="phone" errors={errors}>
          <input name="phone" type="tel" inputMode="tel" required autoComplete="tel" placeholder="+91 98765 43210" className={input} />
        </Field>
        <Field label="Email" name="email" errors={errors} className="sm:col-span-2">
          <input name="email" type="email" inputMode="email" required autoComplete="email" className={input} />
        </Field>
        <Field label="Special requests (optional)" name="message" errors={errors} className="sm:col-span-2">
          <textarea name="message" rows={3} placeholder="Occasion, dietary needs, anything we should know" className={input} />
        </Field>
      </div>

      <aside className="border-t border-stone/70 bg-sand px-5 py-6 sm:px-8 lg:col-span-5 lg:border-l lg:border-t-0">
        <Eyebrow className="mb-0">Your stay</Eyebrow>
        <h3 className="mt-2 font-serif text-2xl">{boat.name}</h3>
        <p className="mt-1 text-sm text-mist">
          {bedroomsLabel(boat.bedrooms)} · up to {boat.capacity} guests
        </p>

        <dl className="mt-6 border-b border-stone">
          <Row k="Price per night" v={rupees(boat.pricePerNight)} />
          <Row k="Nights" v={q ? String(q.nights) : "Choose dates"} />
          <div className="flex justify-between gap-6 border-t border-stone py-4">
            <dt className="font-medium">Total</dt>
            <dd className="rounded-soft bg-gold/20 px-2.5 py-0.5 font-serif text-2xl text-moss-deep" aria-live="polite">
              {q ? rupees(q.total) : "—"}
            </dd>
          </div>
        </dl>
        <p className="mt-4 text-sm text-mist">No payment now. Confirming opens WhatsApp with your details ready to send. We confirm your dates there within a day.</p>

        <div className="mt-6 grid gap-3">
          <Button type="submit" disabled={busy} className="w-full disabled:opacity-60">
            {busy ? "Sending…" : "Confirm booking"}
          </Button>
          <Button type="button" variant="outline" className="w-full" onClick={(e) => openWhatsApp(e.currentTarget.form)}>
            Book on WhatsApp
          </Button>
        </div>
        {failed && (
          <p role="alert" className="mt-4 text-sm text-clay">
            We couldn&apos;t send that just now. Please try again, or message us on WhatsApp instead.
          </p>
        )}
      </aside>
    </form>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between gap-6 border-t border-stone py-3 text-sm">
      <dt className="text-mist">{k}</dt>
      <dd className="text-right">{v}</dd>
    </div>
  );
}
