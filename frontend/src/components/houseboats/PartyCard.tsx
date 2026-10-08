import { Button } from "@/components/ui/Button";
import { party } from "@/lib/houseboats";

/** Closes the list: points larger parties to the planning section below. */
export function PartyCard() {
  return (
    <article className="mt-10 grid items-center gap-6 rounded-soft bg-moss-deep p-7 text-paper sm:p-10 md:grid-cols-12 md:gap-8">
      <div className="md:col-span-8">
        <p className="inline-block rounded-full bg-gold/15 px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-gold">Groups and parties</p>
        <h3 className="mt-3 font-serif text-2xl sm:text-3xl">{party.minGuests} guests or more?</h3>
        <p className="mt-3 max-w-lg text-paper/70">
          Birthdays, reunions, team days and celebrations. We plan the boat, the menu and the evening around you.
        </p>
      </div>
      <div className="md:col-span-4 md:text-right">
        <Button href="#parties" variant="light" className="w-full md:w-auto">
          Plan a party
        </Button>
      </div>
    </article>
  );
}
