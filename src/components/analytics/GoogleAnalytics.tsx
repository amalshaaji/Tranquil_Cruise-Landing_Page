"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const measurementId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

export default function GoogleAnalytics() {
  useEffect(() => {
    if (!measurementId) return;

    const existingScript = document.querySelector<HTMLScriptElement>(
      `script[data-google-analytics="${measurementId}"]`,
    );

    window.dataLayer = window.dataLayer || [];
    window.gtag =
      window.gtag ||
      function gtag(...args: unknown[]) {
        window.dataLayer.push(args);
      };

    window.gtag("js", new Date());
    window.gtag("config", measurementId);

    if (existingScript) return;

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    script.setAttribute("data-google-analytics", measurementId);
    document.head.appendChild(script);
  }, []);

  return null;
}
