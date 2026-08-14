import { AGENDA, EVENT } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./motion/Reveal";
import HoverLift from "./motion/HoverLift";

export default function Agenda() {
  return (
    <section id="agenda" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Event Agenda"
            title={`${EVENT.time} · ${EVENT.date}`}
            body="The full run of show for the Grand Opening — subject to change as we finalize final details."
          />
        </Reveal>

        <div className="mt-12 flex flex-col">
          {AGENDA.map((item) => (
            <div key={item.time}>
              {item.sectionLabel && (
                <Reveal>
                  <div className="mb-4 mt-10 text-center text-xs font-extrabold uppercase tracking-[0.2em] text-brand-amber-500 first:mt-0">
                    {item.sectionLabel}
                  </div>
                </Reveal>
              )}

              <Reveal>
                <HoverLift scale={1.01}>
                  <div
                    className={`mb-3 rounded-2xl border p-5 sm:p-6 ${
                      item.featured
                        ? "border-brand-amber-500 bg-navy-950"
                        : "border-navy-900/10 bg-navy-950/[0.02]"
                    }`}
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-8">
                      <div
                        className={`text-sm font-bold sm:w-40 sm:shrink-0 ${
                          item.featured ? "text-brand-amber-400" : "text-brand-blue-600"
                        }`}
                      >
                        {item.time}
                      </div>

                      <div className="flex-1">
                        <h3
                          className={`font-extrabold tracking-tight ${
                            item.featured ? "text-xl sm:text-2xl" : "text-base sm:text-lg"
                          } ${item.featured ? "text-white" : "text-navy-950"}`}
                        >
                          {item.title}
                        </h3>

                        {item.subtitle && (
                          <p
                            className={`mt-1 text-sm font-semibold ${
                              item.featured ? "text-brand-amber-400" : "text-navy-700/70"
                            }`}
                          >
                            {item.subtitle}
                          </p>
                        )}

                        {item.bullets && item.bullets.length > 0 && (
                          <ul className="mt-3 grid gap-1.5 sm:grid-cols-2">
                            {item.bullets.map((bullet) => (
                              <li
                                key={bullet}
                                className={`flex items-start gap-2 text-sm ${
                                  item.featured ? "text-white/70" : "text-navy-700/60"
                                }`}
                              >
                                <span
                                  className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${
                                    item.featured ? "bg-brand-amber-500" : "bg-brand-blue-600"
                                  }`}
                                />
                                {bullet}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                </HoverLift>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
