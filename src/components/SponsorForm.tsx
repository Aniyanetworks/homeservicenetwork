"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { LINKS } from "@/lib/content";

const inputClass =
  "w-full rounded-lg border border-navy-900/15 bg-white px-4 py-2.5 text-sm text-navy-950 placeholder:text-navy-700/40 focus:border-brand-blue-600 focus:outline-none focus:ring-1 focus:ring-brand-blue-600";

const labelClass = "mb-1.5 block text-xs font-semibold uppercase tracking-wide text-navy-700/60";

export default function SponsorForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
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
      const res = await fetch("/api/sponsor-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Something went wrong.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-navy-900/10 bg-navy-950/[0.02] p-8 text-center">
        <h3 className="text-lg font-bold text-navy-950">Thanks for your interest!</h3>
        <p className="mt-2 text-sm text-navy-700/70">
          We&apos;ve received your sponsor application and will be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="grid gap-4 rounded-2xl border border-navy-900/10 bg-navy-950/[0.02] p-6 sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="s-firstName">
            First Name
          </label>
          <input className={inputClass} id="s-firstName" name="firstName" autoComplete="given-name" required />
        </div>
        <div>
          <label className={labelClass} htmlFor="s-lastName">
            Last Name
          </label>
          <input className={inputClass} id="s-lastName" name="lastName" autoComplete="family-name" required />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="s-company">
          Company
        </label>
        <input className={inputClass} id="s-company" name="company" autoComplete="organization" required />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="s-email">
            Email
          </label>
          <input className={inputClass} id="s-email" name="email" type="email" autoComplete="email" required />
        </div>
        <div>
          <label className={labelClass} htmlFor="s-phone">
            Phone
          </label>
          <input className={inputClass} id="s-phone" name="phone" type="tel" autoComplete="tel" />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="s-website">
            Website
          </label>
          <input className={inputClass} id="s-website" name="website" placeholder="https://" />
        </div>
        <div>
          <label className={labelClass} htmlFor="s-industry">
            Industry
          </label>
          <input className={inputClass} id="s-industry" name="industry" />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="s-level">
          Sponsorship Level
        </label>
        <select className={inputClass} id="s-level" name="sponsorshipLevel" defaultValue="">
          <option value="" disabled>
            Select a tier
          </option>
          <option>Presenting Founding Partner</option>
          <option>Gold Founding Partner</option>
          <option>Silver Founding Partner</option>
          <option>Bronze Founding Partner</option>
          <option>Community Partner</option>
        </select>
      </div>

      <div>
        <label className={labelClass} htmlFor="s-notes">
          Notes
        </label>
        <textarea className={inputClass} id="s-notes" name="notes" rows={3} />
      </div>

      {status === "error" && (
        <p className="rounded-lg bg-red-500/10 px-4 py-2.5 text-sm text-red-600">{error}</p>
      )}

      <div className="flex flex-col gap-3 rounded-lg border border-navy-900/10 bg-white p-4">
        <label className="flex items-start gap-3 text-sm leading-relaxed text-navy-700/70">
          <input
            type="checkbox"
            name="smsMarketingConsent"
            className="mt-0.5 h-4 w-4 shrink-0 accent-brand-blue-600"
          />
          I consent to receive marketing text messages about ticket promotions, sponsorship offers, and
          Home Service Network+ updates from Home Service Network+ at the phone number provided. Message
          frequency may vary. Message &amp; data rates may apply. Text HELP for assistance, reply STOP to
          opt out.
        </label>
        <label className="flex items-start gap-3 text-sm leading-relaxed text-navy-700/70">
          <input
            type="checkbox"
            name="smsTransactionalConsent"
            className="mt-0.5 h-4 w-4 shrink-0 accent-brand-blue-600"
          />
          I consent to receive non-marketing text messages from Home Service Network+ about my
          application, event reminders, and event-day updates. Message frequency may vary, message &amp;
          data rates may apply. Text HELP for assistance, reply STOP to opt out.
        </label>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-2 inline-flex cursor-pointer items-center justify-center rounded-full border border-navy-900/20 px-7 py-3.5 text-base font-semibold uppercase tracking-wide text-navy-900 transition-colors duration-200 hover:bg-navy-900/5 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Submitting..." : "Submit Application"}
      </button>

      <p className="text-center text-sm text-navy-700/50">
        <Link href={LINKS.privacyPolicy} className="text-brand-blue-600 hover:underline">
          Privacy Policy
        </Link>{" "}
        |{" "}
        <Link href={LINKS.terms} className="text-brand-blue-600 hover:underline">
          Terms of Service
        </Link>
      </p>
    </form>
  );
}
