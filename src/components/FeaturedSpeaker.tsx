import { FEATURED_SPEAKER } from "@/lib/content";
import SectionHeading from "./SectionHeading";

export default function FeaturedSpeaker() {
  return (
    <section id="speaker" className="bg-navy-950 py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Featured Speaker" title="Taking the main stage." dark />

        <div className="mt-12 flex flex-col items-center gap-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-10 lg:flex-row lg:items-start">
          <div className="flex h-40 w-40 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-4xl font-extrabold text-white/40 sm:h-48 sm:w-48">
            {FEATURED_SPEAKER.photo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={FEATURED_SPEAKER.photo}
                alt={FEATURED_SPEAKER.name}
                className="h-full w-full rounded-2xl object-cover"
              />
            ) : (
              "?"
            )}
          </div>

          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-extrabold sm:text-3xl">{FEATURED_SPEAKER.name}</h3>
            <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-brand-amber-400">
              {FEATURED_SPEAKER.title}
            </p>
            <p className="mt-4 max-w-xl text-white/70">{FEATURED_SPEAKER.bio}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
