"use client";

import { type FormEvent, useState } from "react";

const fieldClass =
  "mt-2 w-full rounded-2xl border border-black/10 bg-[#fcfaf5] px-4 py-3 text-sm text-foreground outline-none ring-gold/20 transition placeholder:text-foreground/40 focus:border-gold/40 focus:ring-2";

const labelClass = "text-sm font-semibold text-foreground";

export default function ContactForm() {
  const [experience, setExperience] = useState("houseboat");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.currentTarget.reset();
    setExperience("houseboat");
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">
          Enquiry Preview
        </div>
        <h2 className="mt-2 text-2xl font-semibold text-sand">
          Begin your private enquiry
        </h2>
        <p className="mt-2 text-sm leading-6 text-foreground/70">
          Tell us how you would like to experience the backwaters and we will
          shape the details around your dates, group size, and preferred style.
        </p>
        <div className="mt-4 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.15em] text-foreground/55">
          <span className="rounded-full border border-gold/20 bg-gold/8 px-3 py-1.5">
            Tailored planning
          </span>
          <span className="rounded-full border border-gold/20 bg-gold/8 px-3 py-1.5">
            Fast response
          </span>
          <span className="rounded-full border border-gold/20 bg-gold/8 px-3 py-1.5">
            Client-side demo
          </span>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label>
          <span className={labelClass}>Name</span>
          <input
            className={fieldClass}
            name="name"
            autoComplete="name"
            placeholder="Your name"
            required
          />
        </label>

        <label>
          <span className={labelClass}>Phone</span>
          <input
            className={fieldClass}
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+91 98765 43210"
            required
          />
        </label>
      </div>

      <label className="block">
        <span className={labelClass}>Email</span>
        <input
          className={fieldClass}
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          required
        />
      </label>

      <div className="grid gap-4 sm:grid-cols-2">
        <label>
          <span className={labelClass}>Experience</span>
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
        </label>

        <label>
          <span className={labelClass}>Guests</span>
          <input
            className={fieldClass}
            name="guests"
            type="number"
            min={1}
            max={20}
            defaultValue={2}
            required
          />
        </label>
      </div>

      <label className="block">
        <span className={labelClass}>Preferred date</span>
        <input className={fieldClass} name="date" type="date" />
      </label>

      <label className="block">
        <span className={labelClass}>Trip notes</span>
        <textarea
          className={`${fieldClass} min-h-32 resize-y`}
          name="message"
          placeholder="Tell us about your ideal backwater escape."
        />
      </label>

      {submitted && (
        <div
          role="status"
          className="rounded-2xl border border-gold/25 bg-gold/10 px-4 py-3 text-sm text-foreground"
        >
          Your enquiry was captured for preview. This demo does not send data yet.
        </div>
      )}

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-xl bg-gold px-5 py-3 text-sm font-semibold text-ink shadow-sm shadow-gold/20 transition hover:bg-gold/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
      >
        Check Availability
      </button>
    </form>
  );
}
