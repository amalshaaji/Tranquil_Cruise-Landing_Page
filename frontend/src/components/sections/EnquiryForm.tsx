"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { cloneElement, Suspense, useState } from "react";
import { Button } from "@/components/ui/Button";
import { ApiError, api } from "@/lib/api";
import { Confirmation, Service, serviceLabel, services, whatsappLink } from "@/lib/enquiry";
import { cn } from "@/lib/cn";

export const input =
  "w-full rounded-soft border border-stone bg-paper px-4 py-3.5 text-base text-ink placeholder:text-mist/60 focus:border-moss focus:outline-none aria-[invalid=true]:border-clay";

/** Preselects the service from ?service=… while keeping the page statically rendered. */
export function EnquiryFormWithPreselect() {
  return (
    <Suspense fallback={<EnquiryForm />}>
      <Preselected />
    </Suspense>
  );
}

function Preselected() {
  const value = useSearchParams().get("service");
  return <EnquiryForm defaultService={services.find((s) => s.value === value)?.value} />;
}

export function EnquiryForm({ defaultService }: { defaultService?: Service }) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [failed, setFailed] = useState(false);

  function values(form: HTMLFormElement) {
    return Object.fromEntries(new FormData(form)) as Record<string, string>;
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = values(e.currentTarget);
    setBusy(true);
    setErrors({});
    setFailed(false);
    try {
      const res = await api<Confirmation>("/enquiries", {
        method: "POST",
        body: JSON.stringify({
          service: d.service,
          travel_date: d.travel_date,
          guests: Number(d.guests),
          name: d.name,
          phone: d.phone,
          email: d.email,
          message: d.message,
        }),
      });
      router.push(`/enquiry/${res.reference}`);
    } catch (err) {
      if (err instanceof ApiError && Object.keys(err.fields).length) setErrors(err.fields);
      else setFailed(true);
      setBusy(false);
    }
  }

  function openWhatsApp(form: HTMLFormElement | null) {
    const d = form ? values(form) : {};
    const lines = [
      "Hello Tranquil Cruise, I'd like to enquire.",
      d.service && `Service: ${serviceLabel(d.service)}`,
      d.travel_date && `Date: ${d.travel_date}`,
      d.guests && `Guests: ${d.guests}`,
      d.name && `Name: ${d.name}`,
      d.message,
    ].filter(Boolean);
    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener");
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2" noValidate={false}>
      <Field label="Service" name="service" errors={errors}>
        <select name="service" defaultValue={defaultService ?? "houseboat"} className={input}>
          {services.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Date" name="travel_date" errors={errors}>
        <input name="travel_date" type="date" required min={new Date().toISOString().slice(0, 10)} suppressHydrationWarning className={input} />
      </Field>
      <Field label="Guests" name="guests" errors={errors}>
        <input name="guests" type="number" inputMode="numeric" required min={1} max={60} defaultValue={2} className={input} />
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
      <Field label="Message (optional)" name="message" errors={errors} className="sm:col-span-2">
        <textarea name="message" rows={4} placeholder="Occasion, dietary needs, anything we should know" className={input} />
      </Field>

      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center">
        <Button type="submit" disabled={busy} className="w-full disabled:opacity-60 sm:w-auto">
          {busy ? "Sending…" : "Send enquiry"}
        </Button>
        <Button
          type="button"
          variant="outline"
          className="w-full sm:w-auto"
          onClick={(e) => openWhatsApp(e.currentTarget.form)}
        >
          Enquire on WhatsApp
        </Button>
      </div>

      {failed && (
        <p role="alert" className="text-sm text-clay sm:col-span-2">
          We couldn&apos;t send that just now. Please try again, or message us on WhatsApp instead.
        </p>
      )}
    </form>
  );
}

export function Field({
  label,
  name,
  errors,
  className,
  children,
}: {
  label: string;
  name: string;
  errors: Record<string, string>;
  className?: string;
  children: React.ReactElement<{ "aria-invalid"?: boolean }>;
}) {
  const err = errors[name];
  return (
    <label className={cn("grid gap-2 text-sm text-mist", className)}>
      {label}
      {err ? cloneElement(children, { "aria-invalid": true }) : children}
      {err && <span className="text-clay">{err}</span>}
    </label>
  );
}
