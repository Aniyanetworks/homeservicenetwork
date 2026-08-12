import Link from "next/link";
import { EVENT, LINKS, NAV_LINKS } from "@/lib/content";
import CtaButton from "./CtaButton";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            Ready to join {EVENT.shortName}?
          </h2>
          <p className="max-w-md text-white/60">
            {EVENT.city} · {EVENT.date}
          </p>
          <CtaButton href={LINKS.getTickets} size="lg">
            Get Tickets
          </CtaButton>
        </div>

        <div className="mt-16 flex flex-col items-center gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-lg font-extrabold">{EVENT.shortName}</span>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/60 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <span className="text-xs text-white/40">
            © {new Date().getFullYear()} {EVENT.name}. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
