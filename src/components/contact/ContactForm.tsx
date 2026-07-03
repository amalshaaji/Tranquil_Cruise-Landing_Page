"use client";

import { type FormEvent, useState } from "react";
import { useSearchParams } from "next/navigation";
import { trackConversionStep, trackEvent } from "@/lib/analytics";
import {
  buildInquiryMessage,
  buildTripNotesTemplate,
  buildWhatsAppHref,
} from "@/lib/whatsapp";

const fieldClass =
  "mt-2 w-full rounded-[1.1rem] border border-[#d7e6eb] bg-white px-4 py-3.5 text-sm text-foreground outline-none transition placeholder:text-foreground/35 focus:border-teal/45 focus:ring-4 focus:ring-teal/10";

const labelClass =
  "mb-1 ml-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[#58758b]";

function buildDefaultMessage(experience: string, option?: string | null) {
  return buildTripNotesTemplate(experience, option);
}

export default function ContactForm() {
  const searchParams = useSearchParams();
  const selectedExperience = searchParams.get("experience") ?? "houseboat";
  const selectedOption = searchParams.get("option");
  const [experience, setExperience] = useState(selectedExperience);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const whatsappHref = buildWhatsAppHref(
      buildInquiryMessage({
        name: String(formData.get("name") ?? "").trim(),
        phone: String(formData.get("phone") ?? "").trim(),
        email: String(formData.get("email") ?? "").trim(),
        experience: String(formData.get("experience") ?? experience).trim(),
        option: selectedOption,
        guests: String(formData.get("guests") ?? "").trim(),
        date: String(formData.get("date") ?? "").trim(),
        message: String(formData.get("message") ?? "").trim(),
      }),
    );

    trackEvent("contact_form_submit", {
      experience: String(formData.get("experience") ?? experience).trim(),
      guests: String(formData.get("guests") ?? "").trim(),
      has_date: Boolean(String(formData.get("date") ?? "").trim()),
      has_message: Boolean(String(formData.get("message") ?? "").trim()),
    });
    trackConversionStep("contact_form_submit", {
      experience: String(formData.get("experience") ?? experience).trim(),
    });
    trackEvent("whatsapp_enquiry_opened", {
      source: "contact_form",
      experience: String(formData.get("experience") ?? experience).trim(),
    });

    window.open(whatsappHref, "_blank", "noopener,noreferrer");
    form.reset();
    setExperience(selectedExperience);
    setSubmitted(true);

    // Reset submitted state after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-3xl space-y-8">
      <div className="rounded-[2rem] border border-[#dbe8ec] bg-[linear-gradient(180deg,#f9fcfd_0%,#eef5f7_100%)] p-8 shadow-[0_18px_50px_rgba(23,50,71,0.06)] sm:p-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#cfe0e6] bg-white px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-teal">
          <span className="h-1.5 w-1.5 rounded-full bg-teal" />
          Direct Enquiry
        </div>
        <h2 className="mt-5 text-3xl font-semibold leading-tight text-sand sm:text-4xl">
          Tell us what kind of backwater trip you want.
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-foreground/66 sm:text-base">
          Share your dates, group details, and the kind of experience you have in mind.
          We will help shape the right houseboat, ride, stay, or slower custom plan.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {[
          { label: "Response", text: "Personal follow-up", icon: "01" },
          { label: "Planning", text: "Dates, pace, and route", icon: "02" },
          { label: "Style", text: "Houseboat to wellness", icon: "03" },
        ].map((item, i) => (
          <div
            key={i}
            className="rounded-[1.5rem] border border-[#dbe8ec] bg-white p-5 shadow-[0_12px_28px_rgba(23,50,71,0.05)]"
          >
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#edf5f8] text-xs font-semibold text-teal">
              {item.icon}
            </div>
            <div className="text-[0.6rem] font-semibold uppercase tracking-widest text-[#6f95ab]">
              {item.label}
            </div>
            <div className="mt-1 text-sm font-medium text-navy/70">
              {item.text}
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-12 rounded-[2rem] border border-[#dbe8ec] bg-white p-8 shadow-[0_20px_60px_rgba(23,50,71,0.06)] sm:p-10">
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#173247] text-xs font-bold text-white">
              01
            </span>
            <h3 className="text-lg font-semibold tracking-tight text-sand">Your Details</h3>
            <div className="h-px flex-1 bg-[#dbe8ec]" />
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="flex flex-col">
              <label className={labelClass}>Full Name</label>
              <input className={fieldClass} name="name" placeholder="e.g. Julianne Moore" required />
            </div>
            <div className="flex flex-col">
              <label className={labelClass}>Phone Number</label>
              <input className={fieldClass} name="phone" type="tel" placeholder="+91 00000 00000" required />
            </div>
          </div>

          <div className="flex flex-col">
            <label className={labelClass}>Email Address</label>
            <input className={fieldClass} name="email" type="email" placeholder="you@luxurytravel.com" required />
          </div>
        </div>

        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#173247] text-xs font-bold text-white">
              02
            </span>
            <h3 className="text-lg font-semibold tracking-tight text-sand">Trip Details</h3>
            <div className="h-px flex-1 bg-[#dbe8ec]" />
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="flex flex-col">
              <label className={labelClass}>Preferred Experience</label>
              <select
                className={fieldClass}
                name="experience"
                value={experience}
                onChange={(event) => setExperience(event.target.value)}
              >
                <option value="houseboat">Houseboat cruise</option>
                <option value="shikkara">Shikkara ride</option>
                <option value="kayaking">Kayaking session</option>
                <option value="room">Room or homestay</option>
                <option value="custom">Custom Kerala plan</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className={labelClass}>Number of Guests</label>
              <input className={fieldClass} name="guests" type="number" min={1} max={20} defaultValue={2} required />
            </div>
          </div>

          <div className="flex flex-col">
            <label className={labelClass}>Anticipated Date</label>
            <input className={fieldClass} name="date" type="date" />
          </div>

          <div className="flex flex-col">
              <label className={labelClass}>Trip Notes & Desires</label>
              <textarea
                className={`${fieldClass} min-h-32 resize-none`}
                name="message"
                defaultValue={buildDefaultMessage(selectedExperience, selectedOption)}
                placeholder="Tell us about your ideal backwater escape... (e.g. 'We are celebrating an anniversary and prefer a slower pace')"
              />
            </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-8">
        {submitted && (
          <div
            role="status"
            className="animate-in fade-in zoom-in-95 duration-500 rounded-2xl border border-teal/20 bg-teal/8 px-8 py-4 text-sm font-medium text-navy/80 shadow-sm"
          >
            WhatsApp is ready with your enquiry details. Send the message and our concierge will take it from there.
          </div>
        )}

        <button
          type="submit"
          className="inline-flex w-full max-w-md items-center justify-center rounded-2xl bg-[#173247] px-10 py-5 text-sm font-bold uppercase tracking-[0.2em] text-white shadow-[0_16px_40px_rgba(23,50,71,0.18)] transition hover:bg-[#234760] active:scale-[0.98]"
        >
          Send on WhatsApp
        </button>

        <div className="flex flex-col items-center gap-2">
          <p className="text-[0.6rem] font-medium uppercase tracking-widest text-foreground/40">
            Private enquiry form
          </p>
          <div className="flex gap-1">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-1 w-1 rounded-full bg-navy/20" />
            ))}
          </div>
        </div>
      </div>
    </form>
  );
}
