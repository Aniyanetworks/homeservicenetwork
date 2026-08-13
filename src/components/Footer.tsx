import Image from "next/image";
import Link from "next/link";
import { EVENT, LINKS, NAV_LINKS } from "@/lib/content";
import CtaButton from "./CtaButton";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-2xl text-2xl font-extrabold tracking-tight sm:text-3xl">
            {EVENT.closingHeadline}
          </h2>
          <p className="max-w-md text-white/60">{EVENT.closingBody}</p>
          <p className="text-sm text-white/40">
            {EVENT.city} · {EVENT.date} · {EVENT.time}
          </p>
          <CtaButton href={LINKS.getTickets} size="lg">
            Get Tickets
          </CtaButton>
        </div>

        <div className="mt-16 flex flex-col items-center gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <span className="inline-flex items-center rounded-lg  px-3 py-1.5 shadow-sm">
            <Image
              src="/logo-trimmed-removebg-preview.png"
              // src="/logo-trimmed.png"
              alt="Home Service Network TX"
              width={1376}
              height={185}
              className="h-6 w-auto sm:h-7"
            />
          </span>

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

      <div className="border-t border-white/10 bg-navy-900 py-4">
        <p className="text-center text-xs text-white/40">
          Designed &amp; Developed by{" "}
          <a
            href="https://aniyanetworks.net"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-white/70 hover:text-white"
          >
            © {new Date().getFullYear()} Aniya Network Solutions Inc.
          </a>
        </p>
      </div>
    </footer>
  );
}
