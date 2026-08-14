import Image from "next/image";
import { FEATURED_SPEAKER } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./motion/Reveal";
import HoverLift from "./motion/HoverLift";

export default function FeaturedSpeaker() {
  return (
    <section id="speaker" className="bg-navy-950 py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading eyebrow="Featured Speaker" title="Taking the main stage." dark />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-col items-center gap-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-10 lg:flex-row lg:items-start">
            <HoverLift className="shrink-0">
              <div className="relative h-40 w-40 overflow-hidden rounded-2xl bg-white/10 sm:h-48 sm:w-48">
                {FEATURED_SPEAKER.photo ? (
                  <Image
                    src={FEATURED_SPEAKER.photo}
                    alt={FEATURED_SPEAKER.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-4xl font-extrabold text-white/40">
                    ?
                  </div>
                )}
              </div>
            </HoverLift>

            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-extrabold sm:text-3xl">{FEATURED_SPEAKER.name}</h3>
              <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-brand-amber-400">
                {FEATURED_SPEAKER.title}
              </p>
              <p className="mt-3 max-w-xl text-base font-semibold italic text-white/90">
                {FEATURED_SPEAKER.tagline}
              </p>
              <p className="mt-4 max-w-xl text-white/70">{FEATURED_SPEAKER.bio}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
