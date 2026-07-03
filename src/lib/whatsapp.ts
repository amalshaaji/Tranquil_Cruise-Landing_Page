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

function buildInquiryIntro(
  experience: InquiryExperience | string,
  option?: string | null,
) {
  if (experience === "houseboat" && option) {
    return `I would like to enquire about a ${option} houseboat.`;
  }

  switch (experience) {
    case "houseboat":
      return "I would like to enquire about a houseboat cruise.";
    case "shikkara":
      return "I would like to enquire about a shikkara ride.";
    case "kayaking":
      return "I would like to enquire about a kayaking session.";
    case "room":
      return "I would like to enquire about a room stay.";
    case "custom":
      return "I would like to enquire about a custom Kerala plan.";
    default:
      return `I would like to enquire about ${formatExperienceLabel(experience, option)}.`;
  }
}

export function buildWhatsAppHref(message: string) {
  return `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function buildTripNotesTemplate(
  experience: InquiryExperience | string,
  option?: string | null,
) {
  if (experience === "houseboat" && option) {
    return "Please share availability, pricing, and route options for this stay.";
  }

  switch (experience) {
    case "houseboat":
      return "Please share availability, pricing, meal plan, and route options for this cruise.";
    case "shikkara":
      return "Please share ride duration, pricing, route options, and boarding details.";
    case "kayaking":
      return "Please share session timing, pricing, route details, and whether this is beginner-friendly.";
    case "room":
      return "Please share room availability, pricing, check-in details, and nearby backwater access.";
    case "custom":
      return "Please suggest the best combination of experiences, timing, and pricing for this trip.";
    default:
      return "Please share availability, pricing, and the best options for this booking.";
  }
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
    buildInquiryIntro(experience, option),
  ];

  if (name) lines.push(`Name: ${name}`);
  if (phone) lines.push(`Phone: ${phone}`);
  if (email) lines.push(`Email: ${email}`);
  if (guests) lines.push(`Guests: ${guests}`);
  if (date) lines.push(`Preferred date: ${date}`);
  if (message) lines.push(`Trip notes: ${message}`);

  return lines.join("\n");
}
