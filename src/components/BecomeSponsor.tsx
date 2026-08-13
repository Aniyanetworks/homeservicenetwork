import { EVENT, LINKS } from "@/lib/content";
import CtaButton from "./CtaButton";

export default function BecomeSponsor() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 rounded-3xl bg-navy-950 px-6 py-14 text-center text-white sm:px-16">
          <h2 className="max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
            Become a Founding Partner.
          </h2>
          <p className="max-w-xl text-white/70">
            Sponsor the {EVENT.name} {EVENT.eventTitle} in {EVENT.city} and put your brand in
            front of Home Service industry owners and executives from day one.
          </p>
          <CtaButton href={LINKS.becomeSponsor} size="lg">
            Become a Sponsor
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
