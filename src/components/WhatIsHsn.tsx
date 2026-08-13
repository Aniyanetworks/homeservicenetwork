import { EVENT } from "@/lib/content";
import SectionHeading from "./SectionHeading";

export default function WhatIsHsn() {
  return (
    <section id="about" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            eyebrow={`What is ${EVENT.name}?`}
            title={`${EVENT.name} is a business community for home services leaders.`}
            body={`Owners, leaders, and executives across HVAC, Plumbing, Electrical, Roofing, Restoration, Remodeling, Pest Control, Landscaping, and more come together for one night in ${EVENT.city} to connect, learn, and grow. Padel, giveaways, and networking round out the evening — but at its core, ${EVENT.shortName} is about the relationships and ideas that move your business forward.`}
          />

          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {[
              { stat: "1", label: "Epic night in Austin" },
              { stat: "8+", label: "Industries represented" },
              { stat: "100%", label: "Owner & leadership focused" },
              { stat: "∞", label: "Long-term community" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-navy-900/10 bg-navy-950/[0.02] p-6 text-center"
              >
                <div className="text-3xl font-extrabold text-navy-950 sm:text-4xl">
                  {item.stat}
                </div>
                <div className="mt-2 text-sm font-medium text-navy-700/70">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
