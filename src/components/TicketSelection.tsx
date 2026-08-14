import { EVENT, LINKS } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import CtaButton from "./CtaButton";
import Reveal from "./motion/Reveal";

export default function TicketSelection() {
  return (
    <section id="tickets" className="bg-navy-950 py-20 text-white sm:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Tickets"
            title="Choose the ticket that's right for you."
            body={`General Admission, VIP, and Group/Team tickets are available for the ${EVENT.name} ${EVENT.eventTitle} — ${EVENT.date}, ${EVENT.time} in ${EVENT.city}.`}
            align="center"
            dark
          />
        </Reveal>

        <Reveal delay={0.15}>
          <CtaButton href={LINKS.getTickets} size="lg" className="mt-8">
            Get Tickets Now
          </CtaButton>
        </Reveal>
      </div>
    </section>
  );
}
