import { EVENT } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import PricingBadge from "./PricingBadge";
import TicketForm from "./TicketForm";
import Reveal from "./motion/Reveal";

export default function TicketSelection() {
  return (
    <section id="tickets" className="bg-navy-950 py-20 text-white sm:py-28">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Tickets"
            title="Reserve your spot."
            body={`${EVENT.name} ${EVENT.eventTitle} — ${EVENT.date}, ${EVENT.time} in ${EVENT.city}.`}
            align="center"
            dark
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 flex justify-center">
            <PricingBadge />
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-8 text-left">
            <TicketForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
