import { EVENT } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import SponsorForm from "./SponsorForm";
import Reveal from "./motion/Reveal";

export default function BecomeSponsor() {
  return (
    <section id="sponsor" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Become a Founding Partner"
            title="Put your brand in front of Home Service industry leaders."
            body={`Sponsor the ${EVENT.name} ${EVENT.eventTitle} in ${EVENT.city} and connect directly with owners and executives across the industry.`}
            align="center"
          />
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 text-left">
            <SponsorForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
