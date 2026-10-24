"use client";

import { trackConnectClick } from "@/lib/track";

type ConnectButtonProps = {
  id: string;
  label: string;
  description: string;
  url: string;
  prominent: boolean;
};

export default function ConnectButton({ id, label, description, url, prominent }: ConnectButtonProps) {
  const base = "block w-full rounded-2xl text-center transition-colors duration-200";
  const style = prominent
    ? "bg-brand-amber-500 px-6 py-5 text-navy-950 shadow-lg shadow-brand-amber-500/20 hover:bg-brand-amber-400"
    : "border border-white/30 px-6 py-4 text-white hover:bg-white/10";
  const content = (
    <>
      <span className={`block font-extrabold ${prominent ? "text-lg sm:text-xl" : "text-base"}`}>{label}</span>
      <span className={`mt-1 block text-sm ${prominent ? "text-navy-950/70" : "text-white/60"}`}>
        {description}
      </span>
    </>
  );

  if (!url) {
    return (
      <span aria-disabled="true" className={`${base} ${style} cursor-not-allowed opacity-50`}>
        {content}
        <span className="mt-1 block text-xs font-semibold uppercase tracking-wide">Link coming soon</span>
      </span>
    );
  }

  const isExternal = /^https?:\/\//.test(url);
  return (
    <a
      href={url}
      // External pages open in a new tab so this page stays open for the next button.
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      onClick={() => trackConnectClick(id)}
      className={`${base} ${style}`}
    >
      {content}
    </a>
  );
}
