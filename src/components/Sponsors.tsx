import { LINKS, SPONSOR_TIERS } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import CtaButton from "./CtaButton";
import Reveal from "./motion/Reveal";
import HoverLift from "./motion/HoverLift";

export default function Sponsors() {
  return (
    <section id="sponsors" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Founding Partners"
              title="The Founding Partners of Home Service Network+"
              body="Meet the companies helping us launch a new business community built to connect, support, and grow the Home Service industry."
            />
            <CtaButton href={LINKS.becomeSponsor} variant="ghost" size="md" className="shrink-0">
              Become a Founding Partner
            </CtaButton>
          </div>
        </Reveal>

        <div className="mt-12 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {SPONSOR_TIERS.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 0.06}  className="h-full">
              <HoverLift className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-navy-900/10 bg-navy-950/[0.02] p-6">
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-sm font-extrabold uppercase tracking-wide text-brand-blue-600">
                      {tier.name}
                    </span>
                    {tier.price && (
                      <span className="shrink-0 text-sm font-extrabold text-navy-950">{tier.price}</span>
                    )}
                  </div>
                  <p className="mt-2 text-sm text-navy-700/60">{tier.blurb}</p>
                </div>
              </HoverLift>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
