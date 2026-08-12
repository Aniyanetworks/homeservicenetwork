import { WHY_ATTEND } from "@/lib/content";
import SectionHeading from "./SectionHeading";

export default function WhyAttend() {
  return (
    <section id="why-attend" className="bg-navy-950 py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Attend"
          title="One day. Real return."
          body="This isn't a trade show. It's a room full of people making the same decisions you are."
          dark
        />

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_ATTEND.map((item, i) => (
            <div key={item.title} className="bg-navy-950 p-6 sm:p-8">
              <span className="text-sm font-bold text-brand-amber-500">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-bold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-white/60">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
