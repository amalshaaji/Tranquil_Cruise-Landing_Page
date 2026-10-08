import { Eyebrow, Heading, Lead } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { type Houseboat, groupBySize } from "@/lib/houseboats";
import { BookingProvider } from "./Booking";
import { HouseboatCard } from "./HouseboatCard";

/** The houseboat categories as a card grid: one column on phones, two on tablets, three on desktop. */
export function Fleet({
  boats,
  eyebrow = "Choose your boat",
  heading = "Sized to your party.",
  lead,
  tone,
}: {
  boats: Houseboat[];
  eyebrow?: string;
  heading?: string;
  lead?: string;
  tone?: "paper" | "sand";
}) {
  const sizes = groupBySize(boats);
  return (
    <Section id="fleet" tone={tone}>
      <Reveal className="mb-12 max-w-2xl">
        <Eyebrow>{eyebrow}</Eyebrow>
        <Heading>{heading}</Heading>
        {lead && <Lead className="mt-5">{lead}</Lead>}
      </Reveal>
      <BookingProvider boats={boats}>
        <ul className="border-b border-stone">
          {sizes.map((options, i) => (
            <li key={options[0].bedrooms}>
              <Reveal>
                <HouseboatCard options={options} index={i} />
              </Reveal>
            </li>
          ))}
        </ul>
      </BookingProvider>
    </Section>
  );
}
