"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { LINKS, PRICING } from "@/lib/content";

const inputClass =
  "w-full rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-brand-amber-500 focus:outline-none focus:ring-1 focus:ring-brand-amber-500";

const labelClass = "mb-1.5 block text-xs font-semibold uppercase tracking-wide text-white/60";

export default function TicketForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "redirected" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      setStatus("error");
      setError("Please fill out all required fields before submitting.");
      return;
    }

    setStatus("submitting");
    setError("");

    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/ticket-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Something went wrong.");
      }

      window.open(result.redirectUrl, "_blank", "noopener,noreferrer");
      setStatus("redirected");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="firstName">
            First Name
          </label>
          <input className={inputClass} id="firstName" name="firstName" autoComplete="given-name" required />
        </div>
        <div>
          <label className={labelClass} htmlFor="lastName">
            Last Name
          </label>
          <input className={inputClass} id="lastName" name="lastName" autoComplete="family-name" required />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="email">
            Email
          </label>
          <input
            className={inputClass}
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="phone">
            Phone
          </label>
          <input
            className={inputClass}
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
          />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="company">
          Business Name
        </label>
        <input className={inputClass} id="company" name="company" autoComplete="organization" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="industry">
            Industry / Trade
          </label>
          <input className={inputClass} id="industry" name="industry" placeholder="e.g. HVAC, Roofing" />
        </div>
        <div>
          <label className={labelClass} htmlFor="role">
            Job Title / Role
          </label>
          <input className={inputClass} id="role" name="role" />
        </div>
      </div>

      {status === "error" && (
        <p className="rounded-lg bg-red-500/10 px-4 py-2.5 text-sm text-red-300">{error}</p>
      )}

      {status === "redirected" && (
        <p className="rounded-lg bg-brand-amber-500/10 px-4 py-2.5 text-sm text-brand-amber-300">
          Almost done! Complete your payment in the new tab that just opened.
        </p>
      )}

      <div className="flex flex-col gap-3 rounded-lg border border-white/10 bg-white/5 p-4">
        <label className="flex items-start gap-3 text-xs leading-relaxed text-white/60">
          <input
            type="checkbox"
            name="smsMarketingConsent"
            className="mt-0.5 h-4 w-4 shrink-0 accent-brand-amber-500"
          />
          I consent to receive marketing text messages about ticket promotions, sponsorship offers, and
          Home Service Network TX updates from Home Service Network TX at the phone number provided. Message
          frequency may vary. Message &amp; data rates may apply. Text HELP for assistance, reply STOP to
          opt out.
        </label>
        <label className="flex items-start gap-3 text-xs leading-relaxed text-white/60">
          <input
            type="checkbox"
            name="smsTransactionalConsent"
            className="mt-0.5 h-4 w-4 shrink-0 accent-brand-amber-500"
          />
          I consent to receive non-marketing text messages from Home Service Network TX about my ticket
          confirmation, event reminders, and event-day updates. Message frequency may vary, message &amp;
          data rates may apply. Text HELP for assistance, reply STOP to opt out.
        </label>
      </div>

      <button
        type="submit"
        disabled={status === "submitting" || status === "redirected"}
        className="mt-2 inline-flex cursor-pointer items-center justify-center rounded-full bg-brand-amber-500 px-7 py-3.5 text-base font-semibold uppercase tracking-wide text-navy-950 transition-colors duration-200 hover:bg-brand-amber-400 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Processing..." : status === "redirected" ? "Opened in new tab" : PRICING.ctaLabel}
      </button>

      <p className="text-center text-xs text-white/40">
        You&apos;ll be redirected to our secure Stripe checkout in a new tab to complete payment.
      </p>

      <p className="text-center text-xs text-white/40">
        <Link href={LINKS.privacyPolicy} className="text-brand-amber-400 hover:underline">
          Privacy Policy
        </Link>{" "}
        |{" "}
        <Link href={LINKS.terms} className="text-brand-amber-400 hover:underline">
          Terms of Service
        </Link>
      </p>
    </form>
  );
}
