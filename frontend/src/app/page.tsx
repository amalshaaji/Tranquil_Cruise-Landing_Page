import { Feature } from "@/components/home/Feature";
import { Gallery } from "@/components/home/Gallery";
import { Hero } from "@/components/home/Hero";
import { Testimonials } from "@/components/home/Testimonials";
import { Photo } from "@/components/ui/Photo";
import { houseboatList, rupees } from "@/lib/houseboats";

export default function Home() {
  return (
    <>
      <Hero />

      <Feature
        id="houseboats"
        badge={`From ${rupees(houseboatList[0].pricePerNight)} / night`}
        index="01"
        eyebrow="Houseboats"
        title="A kettuvallam of your own."
        lead="Woven from bamboo, coir and jackwood in the old way, then fitted for a calm stay. One boat, one party, no one else on board."
        details={[
          ["Bedrooms", "1 to 7, air-conditioned"],
          ["Crew", "Captain, cook and host"],
          ["Meals", "Kerala kitchen, three times a day"],
          ["Stay", "One night or longer"],
        ]}
        href="/houseboats"
        cta="View houseboats"
        scene={
          <div className="relative h-full w-full">
            <Photo
              src="/images/houseboats-lake.webp"
              alt="Two traditional kettuvallam houseboats gliding across a still, misty Alleppey lake dotted with water hyacinth"
              position="72% 50%"
              sizes="(min-width:1024px) 58vw, 100vw"
            />
          </div>
        }
      />

      <Feature
        id="day-cruise"
        badge="11 am – 4 pm"
        index="02"
        eyebrow="Day cruise"
        title="One unhurried day."
        lead="Short on time? Spend a day afloat, with lunch cooked on board and the canals all to yourselves."
        details={[
          ["11:00", "Welcome with tender coconut"],
          ["13:00", "Lunch — fish curry, thoran, red rice"],
          ["15:00", "Tea and banana fritters on deck"],
          ["16:00", "Back at the jetty"],
        ]}
        href="/day-cruise"
        cta="Plan a day cruise"
        reverse
        tone="sand"
        scene={
          <div className="relative h-full w-full">
            <Photo
              src="/images/hero-sunset.webp"
              alt="A traditional houseboat silhouetted against a blazing orange sunset on the Alleppey backwaters, with birds in the sky"
              position="45% 55%"
              sizes="(min-width:1024px) 58vw, 100vw"
            />
          </div>
        }
      />

      <Feature
        id="shikara"
        badge="2 hours"
        index="03"
        eyebrow="Shikkara"
        title="Narrow canals, softly."
        lead="A shikkara slips into the waterways no houseboat can reach — past toddy tappers, duck herds and village jetties."
        details={[
          ["Length", "Two hours, or longer on request"],
          ["Seats", "Up to six, with cushions"],
          ["Best at", "Early morning or golden hour"],
        ]}
        href="/shikkara"
        cta="Book a shikkara"
        scene={
          <div className="relative h-full w-full">
            <Photo
              src="/images/shikkara-canal.webp"
              alt="A canopied shikkara boat gliding past coconut palms and a moored houseboat on a calm Alleppey backwater in warm evening light"
              position="50% 45%"
              sizes="(min-width:1024px) 58vw, 100vw"
            />
          </div>
        }
      />

      <Feature
        id="kayaking"
        badge="6:30 am start"
        index="04"
        eyebrow="Kayaking"
        title="Your own pace, your own paddle."
        lead="Guided morning paddles through narrow canals, before the heat and long before the crowds."
        details={[
          ["Start", "6:30 am from our jetty"],
          ["Guide", "Local, always alongside"],
          ["Level", "Easy — no experience needed"],
        ]}
        href="/kayaking"
        cta="Join a paddle"
        reverse
        tone="sand"
        scene={
          <div className="relative h-full w-full">
            <Photo
              src="/images/kayaking-river.webp"
              alt="Two kayakers in red life jackets paddling an orange kayak on a calm river toward a bridge, with green forested hills under a cloudy sky"
              position="50% 85%"
              sizes="(min-width:1024px) 58vw, 100vw"
            />
          </div>
        }
      />

      <Gallery />
      <Testimonials />
    </>
  );
}
