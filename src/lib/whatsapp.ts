export const WHATSAPP_PHONE_NUMBER = "917994073491";

type InquiryExperience =
  | "houseboat"
  | "shikkara"
  | "kayaking"
  | "room"
  | "custom";

type InquiryDetails = {
  name?: string;
  phone?: string;
  email?: string;
  experience: InquiryExperience | string;
  option?: string | null;
  guests?: string;
  date?: string;
  message?: string;
};

function formatExperienceLabel(
  experience: InquiryExperience | string,
  option?: string | null,
) {
  if (experience === "houseboat" && option) {
    return `${option} houseboat`;
  }

  switch (experience) {
    case "houseboat":
      return "houseboat cruise";
    case "shikkara":
      return "shikkara ride";
    case "kayaking":
      return "kayaking session";
    case "room":
      return "room or homestay";
    case "custom":
      return "custom Kerala plan";
    default:
      return experience;
  }
}

export function buildWhatsAppHref(message: string) {
  return `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function buildInquiryMessage({
  name,
  phone,
  email,
  experience,
  option,
  guests,
  date,
  message,
}: InquiryDetails) {
  const lines = [
    "Hi Tranquil Cruise,",
    `I would like to enquire about a ${formatExperienceLabel(
      experience,
      option,
    )}.`,
  ];

  if (name) lines.push(`Name: ${name}`);
  if (phone) lines.push(`Phone: ${phone}`);
  if (email) lines.push(`Email: ${email}`);
  if (guests) lines.push(`Guests: ${guests}`);
  if (date) lines.push(`Preferred date: ${date}`);
  if (message) lines.push(`Trip notes: ${message}`);

  return lines.join("\n");
}
