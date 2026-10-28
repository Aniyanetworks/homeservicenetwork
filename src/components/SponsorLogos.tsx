import Image from "next/image";
import { SPONSOR_LOGOS } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./motion/Reveal";

export default function SponsorLogos() {
  return (
    <section className="bg-white pb-20 sm:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Our Sponsors"
            title="Thank you to our Founding Partners"
            align="center"
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {SPONSOR_LOGOS.map((logo, i) => (
            <Reveal key={logo.name} delay={i * 0.05}>
              <div
                className={`relative h-28 rounded-2xl border border-navy-900/10 p-4 sm:h-36 ${
                  logo.dark ? "bg-black" : "bg-white"
                }`}
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                  className="object-contain p-4"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
