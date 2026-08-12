import { LINKS, TICKETS } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import CtaButton from "./CtaButton";

export default function TicketSelection() {
  return (
    <section id="tickets" className="bg-navy-950 py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Tickets"
          title="Choose the ticket that's right for you."
          align="center"
          dark
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {TICKETS.map((ticket) => (
            <div
              key={ticket.name}
              className={`flex flex-col rounded-2xl border p-6 sm:p-8 ${
                ticket.featured
                  ? "border-brand-amber-500 bg-brand-amber-500/10 sm:-translate-y-4"
                  : "border-white/10 bg-white/[0.03]"
              }`}
            >
              {ticket.featured && (
                <span className="mb-4 inline-block w-fit rounded-full bg-brand-amber-500 px-3 py-1 text-xs font-bold uppercase tracking-wide text-navy-950">
                  Most Popular
                </span>
              )}
              <h3 className="text-lg font-bold">{ticket.name}</h3>
              <div className="mt-2 text-4xl font-extrabold">{ticket.price}</div>
              <ul className="mt-6 flex flex-col gap-3">
                {ticket.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-white/70">
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="mt-0.5 h-4 w-4 shrink-0 text-brand-amber-500"
                    >
                      <path d="M16.7 5.3a1 1 0 010 1.4l-7.4 7.4a1 1 0 01-1.4 0L3.3 9.5a1 1 0 111.4-1.4l3.6 3.6 6.7-6.7a1 1 0 011.4 0z" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <CtaButton
                href={LINKS.getTickets}
                variant={ticket.featured ? "primary" : "outline"}
                size="md"
                className="mt-8"
              >
                Reserve Now
              </CtaButton>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
