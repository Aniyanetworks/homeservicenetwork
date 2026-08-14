import Image from "next/image";
import { EVENT, LINKS } from "@/lib/content";
import CtaButton from "./CtaButton";
import Reveal from "./motion/Reveal";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-navy-950 text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(23,166,163,0.35), transparent 45%), radial-gradient(circle at 80% 0%, rgba(226,103,46,0.25), transparent 40%)",
        }}
      />

      <div className="relative mx-auto flex max-w-7xl flex-col items-start px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24 lg:px-8">
        {/* <span className="inline-flex items-center rounded-lg bg-white/95 px-4 py-2 shadow-sm">
          <Image
            src="/logo-trimmed.png"
            alt="Home Service Network TX"
            width={1376}
            height={185}
            priority
            className="h-8 w-auto sm:h-9"
          />
        </span> */}

        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/80">
            {EVENT.cityShort} · {EVENT.dateShort} · {EVENT.time}
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <span className="mt-6 block text-sm font-extrabold uppercase tracking-[0.2em] text-brand-amber-500">
            {EVENT.eventTitle}
          </span>
        </Reveal>

        <Reveal delay={0.15}>
          <h1 className="mt-2 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            {EVENT.name}
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-5 max-w-2xl text-lg font-medium text-brand-amber-400 sm:text-xl">
            {EVENT.tagline}
          </p>
        </Reveal>

        <Reveal delay={0.25}>
          <p className="mt-4 max-w-xl text-base text-white/70 sm:text-lg">
            {EVENT.subTagline}
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <CtaButton href={LINKS.getTickets} size="lg">
              Get Tickets
            </CtaButton>
            <CtaButton href={LINKS.becomeSponsor} variant="outline" size="lg">
              Become a Sponsor
            </CtaButton>
          </div>
        </Reveal>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/10 pt-6 text-sm text-white/60">
          <span className="flex items-center gap-2">
            <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-brand-amber-500">
              <path d="M10 2a6 6 0 00-6 6c0 4.5 6 10 6 10s6-5.5 6-10a6 6 0 00-6-6zm0 8.5A2.5 2.5 0 1110 5a2.5 2.5 0 010 5.5z" />
            </svg>
            {EVENT.city}
          </span>
          <span className="flex items-center gap-2">
            <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-brand-amber-500">
              <path d="M6 2a1 1 0 011 1v1h6V3a1 1 0 112 0v1h1a2 2 0 012 2v11a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2h1V3a1 1 0 011-1zm12 6H4v9h14V8z" />
            </svg>
            {EVENT.date}
          </span>
          <span className="flex items-center gap-2">
            <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-brand-amber-500">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13v4.586l3.293 3.293-1.414 1.414L9 10.414V5h2z" />
            </svg>
            {EVENT.time}
          </span>
        </div>
      </div>
    </section>
  );
}
