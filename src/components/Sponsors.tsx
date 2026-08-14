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
              title="Backed by the companies launching Home Service Network+."
            />
            <CtaButton href={LINKS.becomeSponsor} variant="ghost" size="md" className="shrink-0">
              Become a Sponsor
            </CtaButton>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {SPONSOR_TIERS.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 0.06}>
              <HoverLift>
                <div className="flex h-full flex-col rounded-2xl border border-navy-900/10 bg-navy-950/[0.02] p-6">
                  <span className="text-sm font-extrabold uppercase tracking-wide text-brand-blue-600">
                    {tier.name}
                  </span>
                  <p className="mt-2 text-sm text-navy-700/60">{tier.blurb}</p>
                  <div className="mt-6 flex h-12 items-center justify-center rounded-lg border border-dashed border-navy-900/15 text-xs font-medium text-navy-700/40">
                    Logo placeholder
                  </div>
                </div>
              </HoverLift>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
