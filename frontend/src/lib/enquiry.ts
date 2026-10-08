import { site } from "./site";

export const services = [
  { value: "houseboat", label: "Houseboat stay" },
  { value: "day-cruise", label: "Day cruise" },
  { value: "shikkara", label: "Shikkara" },
  { value: "kayaking", label: "Kayaking" },
] as const;

export type Service = (typeof services)[number]["value"];

export const serviceLabel = (v: string) => services.find((s) => s.value === v)?.label ?? v;

export function whatsappLink(text: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}
