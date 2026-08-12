import SectionHeading from "./SectionHeading";

const POINTS = [
  "Structured networking sessions between speakers",
  "Lunch designed around conversation, not just food",
  "A closing reception to keep the conversations going",
  "A room built entirely of home services owners and leaders",
];

export default function Networking() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            eyebrow="Networking Experience"
            title="Built for real conversations, not business cards."
            body="Every part of the day is designed to put you in front of the right people — other owners and leaders solving the same problems you are."
          />

          <ul className="grid gap-4">
            {POINTS.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 rounded-xl border border-navy-900/10 bg-navy-950/[0.02] p-4"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-blue-600 text-white">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
                    <path d="M16.7 5.3a1 1 0 010 1.4l-7.4 7.4a1 1 0 01-1.4 0L3.3 9.5a1 1 0 111.4-1.4l3.6 3.6 6.7-6.7a1 1 0 011.4 0z" />
                  </svg>
                </span>
                <span className="text-sm font-medium text-navy-900 sm:text-base">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
