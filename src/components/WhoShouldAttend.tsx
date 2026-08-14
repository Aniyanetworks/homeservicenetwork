import { TARGET_INDUSTRIES } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./motion/Reveal";

export default function WhoShouldAttend() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Who Should Attend"
            title="Built for home services owners & leadership."
            body="If you own, lead, or run a home services business, this event is built for you and your leadership team."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap gap-3">
            {TARGET_INDUSTRIES.map((industry) => (
              <span
                key={industry}
                className="rounded-full border border-navy-900/15 bg-navy-950/[0.03] px-5 py-2.5 text-sm font-semibold text-navy-900 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-amber-500/50 hover:bg-brand-amber-500/10"
              >
                {industry}
              </span>
            ))}
            <span className="rounded-full border border-dashed border-navy-900/20 px-5 py-2.5 text-sm font-semibold text-navy-700/60">
              + more home service industries
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
