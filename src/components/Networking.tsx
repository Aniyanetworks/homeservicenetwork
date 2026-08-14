import { NETWORKING_AUDIENCE, NETWORKING_HIGHLIGHTS } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./motion/Reveal";

export default function Networking() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Business Networking Experience"
            title="Built for real conversations, not business cards."
            body="The first part of the evening is dedicated to creating genuine business connections with the people who move the Home Service industry forward."
          />
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <Reveal delay={0.1}>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wide text-navy-700/60">
                You&apos;ll have the opportunity to meet
              </h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {NETWORKING_AUDIENCE.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-navy-900/15 bg-navy-950/[0.03] px-4 py-2 text-sm font-semibold text-navy-900 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-blue-600/40 hover:bg-brand-blue-600/5"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <ul className="grid gap-3">
              {NETWORKING_HIGHLIGHTS.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 rounded-xl border border-navy-900/10 bg-navy-950/[0.02] p-4 transition-colors duration-200 hover:bg-navy-950/[0.05]"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-blue-600 text-white">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
                      <path d="M16.7 5.3a1 1 0 010 1.4l-7.4 7.4a1 1 0 01-1.4 0L3.3 9.5a1 1 0 111.4-1.4l3.6 3.6 6.7-6.7a1 1 0 011.4 0z" />
                    </svg>
                  </span>
                  <span className="text-sm font-medium text-navy-900 sm:text-base">{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
