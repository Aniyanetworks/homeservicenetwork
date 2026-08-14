"use client";

import { useState, type FormEvent } from "react";

const inputClass =
  "w-full rounded-lg border border-navy-900/15 bg-white px-4 py-2.5 text-sm text-navy-950 placeholder:text-navy-700/40 focus:border-brand-blue-600 focus:outline-none focus:ring-1 focus:ring-brand-blue-600";

const labelClass = "mb-1.5 block text-xs font-semibold uppercase tracking-wide text-navy-700/60";

export default function SponsorForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    const form = e.currentTarget;
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

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-2 inline-flex cursor-pointer items-center justify-center rounded-full border border-navy-900/20 px-7 py-3.5 text-base font-semibold uppercase tracking-wide text-navy-900 transition-colors duration-200 hover:bg-navy-900/5 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Submitting..." : "Submit Application"}
      </button>
    </form>
  );
}
