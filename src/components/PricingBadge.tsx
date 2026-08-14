import { PRICING } from "@/lib/content";

export default function PricingBadge() {
  return (
    <div className="inline-flex flex-col gap-1.5">
      <span className="text-xs font-extrabold uppercase tracking-widest text-brand-amber-500">
        {PRICING.badge}
      </span>
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <span className="text-4xl font-extrabold text-white sm:text-5xl">${PRICING.price}</span>
        {PRICING.regularPrice && (
          <span className="text-lg font-semibold text-white/40 line-through">
            ${PRICING.regularPrice} Regular Admission
          </span>
        )}
      </div>
      {(PRICING.savings || PRICING.urgency) && (
        <div className="flex flex-wrap items-center gap-3">
          {PRICING.savings && (
            <span className="rounded-full bg-brand-amber-500/15 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-amber-400">
              {PRICING.savings}
            </span>
          )}
          {PRICING.urgency && (
            <span className="text-sm font-medium text-white/60">{PRICING.urgency}</span>
          )}
        </div>
      )}
    </div>
  );
}
