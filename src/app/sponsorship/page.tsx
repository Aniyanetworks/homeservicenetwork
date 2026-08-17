import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import CtaButton from "@/components/CtaButton";
import SponsorForm from "@/components/SponsorForm";
import Reveal from "@/components/motion/Reveal";
import HoverLift from "@/components/motion/HoverLift";
import { EVENT, SPONSOR_TIERS, SPONSOR_DINNER, SPONSOR_CLARITY } from "@/lib/content";

export const metadata: Metadata = {
  title: `Sponsorship | ${EVENT.name}`,
  description: `Become a Founding Partner of the ${EVENT.name} ${EVENT.eventTitle} in ${EVENT.city}.`,
};

const CHECK_ICON = (
  <svg viewBox="0 0 20 20" fill="currentColor" className="mt-0.5 h-4 w-4 shrink-0 text-brand-amber-500">
    <path d="M16.7 5.3a1 1 0 010 1.4l-7.4 7.4a1 1 0 01-1.4 0L3.3 9.5a1 1 0 111.4-1.4l3.6 3.6 6.7-6.7a1 1 0 011.4 0z" />
  </svg>
);

export default function SponsorshipPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <Reveal>
              <SectionHeading
                eyebrow="Founding Partners"
                title="The Founding Partners of Home Service Network+"
                body="Meet the sponsorship packages helping us launch a new business community built to connect, support, and grow the Home Service industry."
                align="center"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <CtaButton href="#apply" size="lg" className="mt-8">
                Apply to Become a Founding Partner
              </CtaButton>
            </Reveal>
          </div>
        </section>

        <section className="bg-navy-950/[0.02] py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {SPONSOR_TIERS.map((tier, i) => (
                <Reveal key={tier.name} delay={i * 0.06} className="h-full">
                  <HoverLift className="h-full">
                    <div className="flex h-full flex-col rounded-2xl border border-navy-900/10 bg-white p-7">
                      <div className="flex items-start justify-between gap-3">
                        <span className="text-base font-extrabold uppercase tracking-wide text-brand-blue-600">
                          {tier.name}
                        </span>
                        {tier.price && (
                          <span className="shrink-0 text-xl font-extrabold text-navy-950">{tier.price}</span>
                        )}
                      </div>
                      <p className="mt-3 text-sm text-navy-700/60">{tier.blurb}</p>
                      {tier.perks.length > 0 && (
                        <ul className="mt-5 flex flex-col gap-2.5 border-t border-navy-900/10 pt-5">
                          {tier.perks.map((perk) => (
                            <li key={perk} className="flex items-start gap-2.5 text-sm text-navy-900">
                              {CHECK_ICON}
                              {perk}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </HoverLift>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-navy-950 py-20 text-white sm:py-28">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-amber-400">
                {SPONSOR_DINNER.eyebrow}
              </span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
                {SPONSOR_DINNER.title}
              </h2>
              <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-white/60">
                {SPONSOR_DINNER.dateLabel}
              </p>
              <p className="mt-6 text-base text-white/70 sm:text-lg">{SPONSOR_DINNER.body}</p>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 inline-block rounded-full border border-brand-amber-500/30 bg-brand-amber-500/10 px-5 py-2 text-sm font-semibold text-brand-amber-400">
                {SPONSOR_DINNER.note}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-12 grid gap-4 sm:grid-cols-2">
                {SPONSOR_CLARITY.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-left"
                  >
                    <span className="text-sm font-extrabold uppercase tracking-wide text-white">
                      {item.label}
                    </span>
                    <p className="mt-1.5 text-sm text-white/60">{item.detail}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section id="apply" className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <SectionHeading
                eyebrow="Apply Now"
                title="Ready to become a Founding Partner?"
                body="Tell us about your company and we'll follow up with next steps."
                align="center"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-10 text-left">
                <SponsorForm />
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
