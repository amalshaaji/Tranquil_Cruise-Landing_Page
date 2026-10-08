import { site } from "./site";

export const services = [
  { value: "houseboat", label: "Houseboat stay" },
  { value: "day-cruise", label: "Day cruise" },
  { value: "shikkara", label: "Shikkara" },
  { value: "kayaking", label: "Kayaking" },
] as const;

export type Service = (typeof services)[number]["value"];

export const serviceLabel = (v: string) => services.find((s) => s.value === v)?.label ?? v;

export type Confirmation = {
  reference: string;
  service: Service;
  travel_date: string;
  guests: number;
  first_name: string;
};

export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function whatsappLink(text: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}

/** Point a window opened at click time to WhatsApp (opening it later, after a network call, gets blocked by browsers). */
export function openChat(win: Window | null, text: string) {
  const url = whatsappLink(text);
  if (win) {
    win.opener = null;
    win.location.href = url;
  } else {
    window.open(url, "_blank", "noopener");
  }
}
