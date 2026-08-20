import Image from "next/image";
import { PADEL_CHALLENGES } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./motion/Reveal";
import HoverLift from "./motion/HoverLift";

export default function PadelExperience() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            <Reveal from="left">
              <HoverLift scale={1.015}>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-navy-900/10 bg-navy-950/[0.02]">
                  <Image
                    src="/padel-court.jpg"
                    alt="Padel court with glass walls"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </HoverLift>
            </Reveal>

            <Reveal from="left" delay={0.1}>
              <div className="mt-6">
                <h3 className="text-sm font-bold uppercase tracking-wide text-navy-700/60">
                  Padel Challenges &amp; Games
                </h3>
                <p className="mt-1 text-sm text-navy-700/60">
                  Instead of a traditional tournament, jump into short, fun challenges throughout
                  the evening — no experience required.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {PADEL_CHALLENGES.map((challenge) => (
                    <span
                      key={challenge}
                      className="rounded-full border border-navy-900/15 bg-navy-950/[0.03] px-4 py-2 text-sm font-semibold text-navy-900 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-blue-600/40 hover:bg-brand-blue-600/5"
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
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
