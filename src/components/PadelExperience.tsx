import { PADEL_CHALLENGES } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./motion/Reveal";
import HoverLift from "./motion/HoverLift";

export default function PadelExperience() {
  return (
    <section className="bg-navy-900 py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            <Reveal from="left">
              <HoverLift scale={1.015}>
                <div className="aspect-[4/3] w-full rounded-2xl border border-white/10 bg-white/5" />
              </HoverLift>
            </Reveal>

            <Reveal from="left" delay={0.1}>
              <div className="mt-6">
                <h3 className="text-sm font-bold uppercase tracking-wide text-white/50">
                  Padel Challenges &amp; Games
                </h3>
                <p className="mt-1 text-sm text-white/50">
                  Instead of a traditional tournament, jump into short, fun challenges throughout
                  the evening — no experience required.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {PADEL_CHALLENGES.map((challenge) => (
                    <span
                      key={challenge}
                      className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-amber-500/50 hover:bg-brand-amber-500/10"
                    >
                      {challenge}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal from="right" delay={0.15} className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Padel Experience"
              title="Compete, connect, and have a little fun."
              body="Padel courts are open throughout the evening — no experience required. It's networking with a racquet in your hand instead of a business card. Winners of the challenges and games receive prizes throughout the evening."
              dark
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
