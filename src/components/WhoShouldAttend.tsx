import { TARGET_INDUSTRIES } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./motion/Reveal";

export default function WhoShouldAttend() {
  return (
    <section className="bg-navy-950 py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Who Should Attend"
            title="Built for home services owners & leadership."
            body="If you own, lead, or run a home services business, this event is built for you and your leadership team."
            dark
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap gap-3">
            {TARGET_INDUSTRIES.map((industry) => (
              <span
                key={industry}
                className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white/80 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-amber-500/50 hover:bg-brand-amber-500/10"
              >
                {industry}
              </span>
            ))}
            <span className="rounded-full border border-dashed border-white/20 px-5 py-2.5 text-sm font-semibold text-white/50">
              + more home service industries
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
