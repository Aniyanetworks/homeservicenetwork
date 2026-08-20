import { FOOD_AND_DRINKS } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./motion/Reveal";

const CHECK_ICON = (
  <svg viewBox="0 0 20 20" fill="currentColor" className="mt-0.5 h-4 w-4 shrink-0 text-brand-amber-400">
    <path d="M16.7 5.3a1 1 0 010 1.4l-7.4 7.4a1 1 0 01-1.4 0L3.3 9.5a1 1 0 111.4-1.4l3.6 3.6 6.7-6.7a1 1 0 011.4 0z" />
  </svg>
);

export default function WhatsIncluded() {
  return (
    <section id="whats-included" className="bg-navy-950 py-20 text-white sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="What's Included"
            title="More than a seat at a speaker event."
            body="Your ticket covers a full evening — not just admission."
            dark
          />
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-col gap-6 rounded-2xl border border-brand-amber-500/30 bg-brand-amber-500/6 p-6 sm:flex-row sm:items-start sm:gap-8 sm:p-8">
            <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-amber-500/15 text-brand-amber-400">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7">
                <path d="M4 4h16l-8 10z" strokeLinejoin="round" />
                <path d="M12 14v6M8 20h8" strokeLinecap="round" />
              </svg>
            </span>

            <div>
              <h3 className="text-xl font-extrabold text-white">{FOOD_AND_DRINKS.title}</h3>
              <p className="mt-2 max-w-2xl text-white/70">{FOOD_AND_DRINKS.body}</p>

              <p className="mt-5 text-xs font-bold uppercase tracking-wide text-white/50">
                Your ticket includes:
              </p>
              <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                {FOOD_AND_DRINKS.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-white/80">
                    {CHECK_ICON}
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-5 text-sm font-semibold italic text-brand-amber-400">
                {FOOD_AND_DRINKS.tagline}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
