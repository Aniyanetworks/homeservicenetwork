import type { Metadata } from "next";
import Header from "@/components/Header";
import CtaButton from "@/components/CtaButton";
import Reveal from "@/components/motion/Reveal";
import { EVENT } from "@/lib/content";

export const metadata: Metadata = {
  title: `You're Registered! | ${EVENT.name}`,
  description: `You're registered for the ${EVENT.name} ${EVENT.eventTitle} on ${EVENT.date}.`,
};

function toGCalTimestamp(date: Date) {
  return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
}

function buildCalendarUrl() {
  const start = new Date(EVENT.eventDateTime);
  const end = new Date(start.getTime() + 7 * 60 * 60 * 1000); // 4:00 PM – 11:00 PM span

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: `${EVENT.name} ${EVENT.eventTitle}`,
    dates: `${toGCalTimestamp(start)}/${toGCalTimestamp(end)}`,
    details: `${EVENT.name} — ${EVENT.city}. ${EVENT.subTagline}`,
    location: EVENT.city,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

const WHAT_TO_BRING = [
  "Business casual attire",
  "Comfortable shoes",
  "Athletic wear if joining the Padel Experience",
];

export default function ConfirmationPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <section className="mx-auto max-w-2xl px-4 py-20 text-center sm:px-6 sm:py-28 lg:px-8">
          <Reveal>
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-amber-500/15 text-brand-amber-500">
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-7 w-7">
                <path d="M16.7 5.3a1 1 0 010 1.4l-7.4 7.4a1 1 0 01-1.4 0L3.3 9.5a1 1 0 111.4-1.4l3.6 3.6 6.7-6.7a1 1 0 011.4 0z" />
              </svg>
            </span>

            <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
              You&apos;re Registered!
            </h1>
            <p className="mt-3 text-base text-navy-700/70 sm:text-lg">
              You&apos;re all set for the {EVENT.name} {EVENT.eventTitle}. A confirmation email
              and text are on the way — additional event details will follow.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 grid gap-4 rounded-2xl border border-navy-900/10 bg-navy-950/[0.02] p-6 sm:grid-cols-3 sm:p-8">
              <div className="flex flex-col items-center gap-1.5">
                <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-brand-amber-500">
                  <path d="M6 2a1 1 0 011 1v1h6V3a1 1 0 112 0v1h1a2 2 0 012 2v11a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2h1V3a1 1 0 011-1zm12 6H4v9h14V8z" />
                </svg>
                <span className="text-sm font-semibold text-navy-950">{EVENT.date}</span>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-brand-amber-500">
                  <path d="M10 2a6 6 0 00-6 6c0 4.5 6 10 6 10s6-5.5 6-10a6 6 0 00-6-6zm0 8.5A2.5 2.5 0 1110 5a2.5 2.5 0 010 5.5z" />
                </svg>
                <span className="text-sm font-semibold text-navy-950">{EVENT.city}</span>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-brand-amber-500">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13v4.586l3.293 3.293-1.414 1.414L9 10.414V5h2z" />
                </svg>
                <span className="text-sm font-semibold text-navy-950">{EVENT.time}</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-6 text-sm text-navy-700/60">
              Venue: {EVENT.venue}. Parking details will be emailed to registered attendees
              closer to the event.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 rounded-2xl border border-navy-900/10 bg-navy-950/[0.02] p-6 text-left sm:p-8">
              <h2 className="text-sm font-bold uppercase tracking-wide text-navy-700/60">
                What to Bring
              </h2>
              <ul className="mt-4 grid gap-2.5">
                {WHAT_TO_BRING.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-navy-900 sm:text-base">
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="mt-0.5 h-4 w-4 shrink-0 text-brand-amber-500"
                    >
                      <path d="M16.7 5.3a1 1 0 010 1.4l-7.4 7.4a1 1 0 01-1.4 0L3.3 9.5a1 1 0 111.4-1.4l3.6 3.6 6.7-6.7a1 1 0 011.4 0z" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <CtaButton href={buildCalendarUrl()} size="lg">
                Add to Calendar
              </CtaButton>
              <CtaButton href="/" variant="ghost" size="lg">
                Back to Home
              </CtaButton>
            </div>
          </Reveal>
        </section>
      </main>
    </>
  );
}
