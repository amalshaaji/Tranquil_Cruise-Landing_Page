import { Feature } from "@/components/home/Feature";
import { Hero } from "@/components/home/Hero";
import { Testimonials } from "@/components/home/Testimonials";
import { Photo } from "@/components/ui/Photo";
import { homestays } from "@/lib/homestays";
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
              src="/images/day-cruise-dusk.webp"
              alt="A two-deck houseboat gliding across still blue water at dusk, its windows glowing amber and reflected in the lake"
              position="50% 62%"
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

      <Feature
        id="rooms"
        badge={`From ${rupees(homestays[1].price)} / night`}
        index="05"
        eyebrow="Rooms"
        title="Sleep to the sound of water."
        lead="Two homestays beside the backwaters: a private pool villa and a heritage Kerala home. Quiet rooms, soft linen and a kitchen that cooks for you."
        details={[
          ["Kayal Pool Villa", `${rupees(homestays[0].price)} a night, whole villa`],
          ["Tharavadu Heritage Homestay", `${rupees(homestays[1].price)} per AC room`],
          ["Rooms", "Air-conditioned, private bathroom"],
          ["Meals", "Home-cooked Kerala food"],
        ]}
        href="/rooms"
        cta="See the rooms"
        tone="paper"
        scene={
          <div className="relative h-full w-full">
            <Photo
              src="/images/villa-living-pool.webp"
              alt="Living room with a built-in brown sofa and a glass wall opening onto tropical plants and the blue pool"
              position="50% 55%"
              sizes="(min-width:1024px) 58vw, 100vw"
            />
          </div>
        }
      />

      <Testimonials />
    </>
  );
}
