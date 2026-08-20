import { WHY_ATTEND } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./motion/Reveal";

export default function WhyAttend() {
  return (
    <section id="why-attend" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Why Attend"
            title="One night. Real return."
            body="This isn't a trade show. It's a room full of people making the same decisions you are."
          />
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-navy-900/10 bg-navy-900/10 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_ATTEND.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="h-full bg-white p-6 transition-colors duration-200 hover:bg-navy-950/[0.02] sm:p-8">
                <span className="text-sm font-bold text-brand-blue-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg font-bold text-navy-950">{item.title}</h3>
                <p className="mt-2 text-sm text-navy-700/60">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
