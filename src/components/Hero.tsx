import Image from "next/image";
import Link from "next/link";
import { EVENT, FEATURED_SPEAKER, LINKS } from "@/lib/content";
import CtaButton from "./CtaButton";
import Countdown from "./Countdown";
import HeroBackground from "./HeroBackground";
import Reveal from "./motion/Reveal";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-navy-950 text-white">
      <HeroBackground />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-28">
        {/* Left: brand story */}
        <div className="flex flex-col items-start">
          <Reveal delay={0.1}>
            <span className="block text-sm font-extrabold uppercase tracking-[0.2em] text-brand-amber-500">
              {EVENT.eventTitle}
            </span>
          </Reveal>

          <Reveal delay={0.15}>
            <h1 className="mt-2 max-w-xl text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              {EVENT.name}
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-5 max-w-lg text-lg font-medium text-brand-amber-400 sm:text-xl">
              {EVENT.tagline}
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <p className="mt-4 max-w-md text-base text-white/70 sm:text-lg">{EVENT.subTagline}</p>
          </Reveal>

          {FEATURED_SPEAKER.photo && (
            <Reveal delay={0.3}>
              <Link
                href="#speaker"
                className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 py-1.5 pl-1.5 pr-4 transition-colors duration-200 hover:bg-white/10"
              >
                <span className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full">
                  <Image
                    src={FEATURED_SPEAKER.photo}
                    alt={FEATURED_SPEAKER.name}
                    fill
                    className="object-cover"
                  />
                </span>
                <span className="text-xs font-semibold text-white/80 sm:text-sm">
                  Featuring Keynote{" "}
                  <span className="text-brand-amber-400">{FEATURED_SPEAKER.name}</span>
                </span>
              </Link>
            </Reveal>
          )}
        </div>

        {/* Right: action panel — countdown + CTAs */}
        <Reveal delay={0.35} from="right">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/80">
              {EVENT.cityShort} · {EVENT.dateShort} · {EVENT.time}
            </span>

            <div className="mt-6">
              <Countdown />
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <CtaButton href={LINKS.getTickets} size="md">
                Get Tickets
              </CtaButton>
              <CtaButton href={LINKS.becomeSponsor} variant="outline" size="md">
                Become a Sponsor
              </CtaButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
