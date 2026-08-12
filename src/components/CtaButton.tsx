import Link from "next/link";
import type { ReactNode } from "react";

type CtaButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  size?: "md" | "lg";
  className?: string;
};

const VARIANT_CLASSES: Record<NonNullable<CtaButtonProps["variant"]>, string> = {
  primary:
    "bg-brand-amber-500 text-navy-950 hover:bg-brand-amber-400 shadow-lg shadow-brand-amber-500/20",
  outline:
    "border border-white/30 text-white hover:bg-white/10",
  ghost: "border border-navy-900/20 text-navy-900 hover:bg-navy-900/5",
};

const SIZE_CLASSES: Record<NonNullable<CtaButtonProps["size"]>, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export default function CtaButton({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
}: CtaButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-semibold uppercase tracking-wide transition-colors duration-200 ${VARIANT_CLASSES[variant]} ${SIZE_CLASSES[size]} ${className}`}
    >
      {children}
    </Link>
  );
}
