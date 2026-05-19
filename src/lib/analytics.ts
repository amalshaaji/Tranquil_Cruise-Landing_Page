"use client";

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

export type AnalyticsEventParams = Record<string, unknown>;

export function ensureDataLayer() {
  if (typeof window === "undefined") {
    return [];
  }

  window.dataLayer = window.dataLayer || [];
  return window.dataLayer;
}

export function pushDataLayerEvent(event: string, params: AnalyticsEventParams = {}) {
  if (typeof window === "undefined") {
    return;
  }

  ensureDataLayer().push({
    event,
    ...params,
  });
}

export function trackEvent(event: string, params: AnalyticsEventParams = {}) {
  if (typeof window === "undefined") {
    return;
  }

  pushDataLayerEvent(event, params);

  if (typeof window.gtag === "function") {
    window.gtag("event", event, params);
  }
}

export function trackPageView(url: string) {
  if (typeof window === "undefined") {
    return;
  }

  const pageParams = {
    page_location: window.location.href,
    page_path: url,
    page_title: document.title,
  };

  pushDataLayerEvent("page_view", pageParams);

  if (typeof window.gtag === "function") {
    window.gtag("event", "page_view", pageParams);
  }
}

export function trackConversionStep(step: string, params: AnalyticsEventParams = {}) {
  trackEvent("conversion_step", {
    funnel_name: "booking_enquiry",
    funnel_step: step,
    ...params,
  });
}
