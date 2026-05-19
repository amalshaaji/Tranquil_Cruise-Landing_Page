"use client";

import { type FormEvent, useState } from "react";
import { useSearchParams } from "next/navigation";
import { trackConversionStep, trackEvent } from "@/lib/analytics";
import { buildInquiryMessage, buildWhatsAppHref } from "@/lib/whatsapp";

// Refined shared styles for a "High-Fashion" travel look
const fieldClass =
  "mt-2 w-full rounded-2xl border border-navy/10 bg-white/60 px-4 py-3.5 text-sm text-foreground outline-none ring-gold/20 transition-all placeholder:text-foreground/30 focus:border-gold/50 focus:bg-white focus:ring-4 focus:ring-gold/10 backdrop-blur-sm";

const labelClass = "text-[0.65rem] font-bold uppercase tracking-[0.15em] text-navy/50 ml-1 mb-1";

function buildDefaultMessage(experience: string, option?: string | null) {
  if (experience === "houseboat" && option) {
    return `I would like to enquire about the ${option} houseboat. Please share availability and pricing.`;
  }

  return "";
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
    <form onSubmit={handleSubmit} className="space-y-12 max-w-3xl mx-auto">

      {/* --- Header Section: The Welcome --- */}
      <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-navy/[0.03] via-white to-teal/[0.03] p-10 text-center sm:text-left border border-navy/5 shadow-sm">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal/5 px-3 py-1 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-teal">
            <span className="relative flex h-1.5 w-1.5 rounded-full bg-teal animate-pulse" />
            Bespoke Planning
          </div>
          <h2 className="mt-6 text-4xl font-semibold leading-[1.1] text-sand sm:text-5xl">
            Begin your <span className="italic text-navy/80">private enquiry</span>
          </h2>
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-foreground/60 sm:text-base font-light">
            We don&apos;t believe in standard packages. Tell us about your
            dream rhythm, and we will craft a journey that mirrors it.
          </p>
        </div>
        {/* Soft Ambient Glows */}
        <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute -left-10 -bottom-10 h-64 w-64 rounded-full bg-teal/10 blur-3xl" />
      </div>

      {/* --- Concierge Trust Bar --- */}
      <div className="grid gap-4 sm:grid-cols-3">
        {[
          { label: "Response", text: "Personal follow-up", icon: "✉️" },
          { label: "Planning", text: "Dates, pace, and route", icon: "🗺️" },
          { label: "Style", text: "Houseboat to wellness", icon: "🌿" },
        ].map((item, i) => (
          <div key={i} className="group relative overflow-hidden rounded-2xl border border-navy/10 bg-white/80 p-5 transition-all duration-500 hover:border-gold/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/5">
            <div className="text-xl mb-3 transform transition-transform group-hover:scale-110 duration-300">{item.icon}</div>
            <div className="text-[0.6rem] font-bold uppercase tracking-widest text-teal/70">
              {item.label}
            </div>
            <div className="mt-1 text-sm font-medium text-navy/70 group-hover:text-navy transition-colors">
              {item.text}
            </div>
          </div>
        ))}
      </div>

      {/* --- Main Form Body --- */}
      <div className="grid gap-12 rounded-[3rem] border border-navy/10 bg-white/40 p-8 sm:p-14 shadow-sm backdrop-blur-xl">

        {/* Section 1: The Guest */}
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-navy text-white text-xs font-bold">01</span>
            <h3 className="text-lg font-semibold text-sand tracking-tight">The Guest</h3>
            <div className="h-px flex-1 bg-navy/10" />
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

        {/* Section 2: The Vision */}
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-navy text-white text-xs font-bold">02</span>
            <h3 className="text-lg font-semibold text-sand tracking-tight">The Vision</h3>
            <div className="h-px flex-1 bg-navy/10" />
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

      {/* --- Footer / Submission --- */}
      <div className="flex flex-col items-center gap-8">
        {submitted && (
          <div
            role="status"
            className="animate-in fade-in zoom-in-95 duration-500 rounded-2xl border border-gold/30 bg-gold/10 px-8 py-4 text-sm font-medium text-navy/80 backdrop-blur-sm shadow-sm"
          >
            WhatsApp is ready with your enquiry details. Send the message and our concierge will take it from there.
          </div>
        )}

        <button
          type="submit"
          className="group relative inline-flex w-full max-w-md items-center justify-center overflow-hidden rounded-2xl bg-gold px-10 py-5 text-sm font-bold uppercase tracking-[0.2em] text-ink shadow-xl shadow-gold/20 transition-all hover:bg-gold/90 hover:scale-[1.02] active:scale-[0.98]"
        >
          <span className="relative z-10">Send on WhatsApp</span>
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full -translate-x-full" />
        </button>

        <div className="flex flex-col items-center gap-2">
          <p className="text-[0.6rem] uppercase tracking-widest text-foreground/40 font-medium">
            Secure & Private Enquiry System
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
