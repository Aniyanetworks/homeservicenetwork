import SectionHeading from "./SectionHeading";

export default function PadelExperience() {
  return (
    <section className="bg-navy-900 py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="order-2 aspect-[4/3] w-full rounded-2xl border border-white/10 bg-white/5 lg:order-1" />

          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Padel Experience"
              title="Compete, connect, and have a little fun."
              body="Padel courts are open throughout the afternoon — no experience required. It's networking with a racquet in your hand instead of a business card."
              dark
            />
            <p className="mt-4 max-w-xl text-sm text-white/50">
              Court time, equipment, and format details will be shared closer to the event.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
