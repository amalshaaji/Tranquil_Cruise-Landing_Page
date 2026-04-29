"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const whatsappHref = useMemo(() => {
    const base = "https://wa.me/917994073491";
    const parts = [
      name ? `Name: ${name}` : "",
      email ? `Email: ${email}` : "",
      message ? `Message: ${message}` : "",
    ].filter(Boolean);
    const text =
      parts.length > 0
        ? `Hi Tranquil Cruise,%0A%0A${encodeURIComponent(parts.join("%0A"))}`
        : encodeURIComponent("Hi Tranquil Cruise, I would like to enquire about backwater bookings.");
    return `${base}?text=${text}`;
  }, [email, message, name]);

  return (
    <form
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        setStatus("sent");
        window.setTimeout(() => {
          setStatus("idle");
          setName("");
          setEmail("");
          setMessage("");
        }, 3500);
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-xs font-semibold text-foreground/70">
            Name
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-navy/30 px-3 py-3 text-sm text-foreground outline-none ring-teal/20 focus:ring-2"
            placeholder="Your name"
            required
          />
        </div>
        <div>
          <label className="mb-1 block text-xs font-semibold text-foreground/70">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-navy/30 px-3 py-3 text-sm text-foreground outline-none ring-teal/20 focus:ring-2"
            placeholder="you@example.com"
            required
          />
        </div>
      </div>

      <div>
        <label className="mb-1 block text-xs font-semibold text-foreground/70">
          Message
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="min-h-[120px] w-full resize-y rounded-2xl border border-white/10 bg-navy/30 px-3 py-3 text-sm text-foreground outline-none ring-teal/20 focus:ring-2"
          placeholder="Tell us what you'd like to book..."
          required
        />
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <motion.button
          type="submit"
          className="inline-flex w-full items-center justify-center rounded-xl bg-teal px-4 py-3 text-sm font-semibold text-ink shadow-sm shadow-teal/20 transition hover:bg-teal/90"
          whileTap={{ scale: 0.99 }}
          disabled={status === "sent"}
        >
          {status === "sent" ? "Message sent (demo)" : "Send message"}
        </motion.button>

        <motion.a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-teal/40 bg-navy/40 px-4 py-3 text-sm font-semibold text-sand shadow-sm shadow-navy/40 transition hover:border-teal/70 hover:bg-navy/60"
          whileTap={{ scale: 0.99 }}
        >
          <span>Chat on WhatsApp</span>
        </motion.a>
      </div>

      <div className="text-xs text-foreground/60">
        This static demo does not submit to a backend.
      </div>
    </form>
  );
}

