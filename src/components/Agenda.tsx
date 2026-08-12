import { AGENDA } from "@/lib/content";
import SectionHeading from "./SectionHeading";

export default function Agenda() {
  return (
    <section id="agenda" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Event Agenda"
          title={`Your day at ${"Home Services Network"}.`}
          body="A full schedule for the day — subject to change as we finalize speakers and sessions."
        />

        <div className="mt-12 flex flex-col divide-y divide-navy-900/10 overflow-hidden rounded-2xl border border-navy-900/10">
          {AGENDA.map((item) => (
            <div
              key={item.time}
              className="flex flex-col gap-2 p-5 sm:flex-row sm:items-center sm:gap-8 sm:p-6"
            >
              <div className="text-sm font-bold text-brand-blue-600 sm:w-28 sm:shrink-0">
                {item.time}
              </div>
              <div>
                <h3 className="text-base font-bold text-navy-950 sm:text-lg">{item.title}</h3>
                <p className="mt-0.5 text-sm text-navy-700/60">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
