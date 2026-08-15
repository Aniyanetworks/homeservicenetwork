import { EVENT, LINKS } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./motion/Reveal";
import CtaButton from "./CtaButton";

export default function VipRegistration() {
  return (
    <section id="vip" className="bg-navy-950 py-20 text-white sm:py-28">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="VIP Registration"
            title="Reserve your VIP spot."
            body={`Sign up now to secure VIP access to the ${EVENT.name} ${EVENT.eventTitle} in ${EVENT.city}. Ticket purchase isn't required to register.`}
            align="center"
            dark
          />
        </Reveal>
        <Reveal delay={0.15}>
          <CtaButton href={LINKS.vipRegistration} size="lg" className="mt-8">
            Register as VIP
          </CtaButton>
        </Reveal>
      </div>
    </section>
  );
}
