import { FAQS } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./motion/Reveal";

export default function Faq() {
  return (
    <section id="faq" className="bg-navy-950 py-20 text-white sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading eyebrow="FAQ" title="Frequently asked questions." align="center" dark />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-col divide-y divide-white/10 rounded-2xl border border-white/10">
            {FAQS.map((faq) => (
              <details
                key={faq.q}
                className="group p-5 transition-colors duration-200 hover:bg-white/5 sm:p-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-semibold text-white">
                  {faq.q}
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="h-5 w-5 shrink-0 text-white/50 transition-transform group-open:rotate-45"
                  >
                    <path d="M10 4v12M4 10h12" strokeLinecap="round" />
                  </svg>
                </summary>
                <p className="mt-3 text-sm text-white/70 sm:text-base">{faq.a}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
