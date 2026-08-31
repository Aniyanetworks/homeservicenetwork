import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BUSINESS, EVENT } from "@/lib/content";

export const metadata: Metadata = {
  title: `Terms of Service | ${EVENT.name}`,
  description: `The terms that govern use of the ${EVENT.name} website and event registration.`,
};

const UPDATED = "August 31, 2026";

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-blue-600">
            Terms of Service
          </span>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
            Terms of Service &amp; SMS Terms
          </h1>
          <p className="mt-3 text-sm text-navy-700/60">Last updated: {UPDATED}</p>

          <div className="mt-10 flex flex-col gap-10 text-navy-900">
            <p className="text-base leading-relaxed text-navy-700/80">
              These Terms of Service govern your use of this website and your registration, ticket
              purchase, or sponsorship application for the {EVENT.name} {EVENT.eventTitle}. By using this
              site or submitting a form, you agree to these terms.
            </p>

            <section>
              <h2 className="text-lg font-extrabold text-navy-950">Event Registration &amp; Tickets</h2>
              <p className="mt-3 text-base leading-relaxed text-navy-700/80">
                Ticket purchases are processed through our third-party payment provider. Ticket prices,
                availability, and the event agenda are subject to change. Please review your order details
                carefully before completing checkout.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-extrabold text-navy-950">Sponsorship Applications</h2>
              <p className="mt-3 text-base leading-relaxed text-navy-700/80">
                Submitting a sponsorship application does not guarantee a sponsorship placement.
                Confirmation of your tier and benefits is provided separately once your application is
                reviewed.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-extrabold text-navy-950">SMS Terms &amp; Conditions</h2>
              <p className="mt-3 text-base leading-relaxed text-navy-700/80">
                By providing your phone number on this website and opting in, you consent to receive
                text messages from {BUSINESS.legalName} related to your ticket, sponsorship application, or
                the {EVENT.name} {EVENT.eventTitle} event (such as confirmations, reminders, and updates).
              </p>
              <ul className="mt-3 flex flex-col gap-2 text-base leading-relaxed text-navy-700/80">
                <li>• Consent to receive texts is not a condition of any purchase.</li>
                <li>• Message frequency varies.</li>
                <li>• Message and data rates may apply.</li>
                <li>
                  • Reply <strong>STOP</strong> at any time to opt out, or <strong>HELP</strong> for
                  assistance.
                </li>
                <li>
                  • Carriers are not liable for delayed or undelivered messages. Supported carriers may vary.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-extrabold text-navy-950">Website Use</h2>
              <p className="mt-3 text-base leading-relaxed text-navy-700/80">
                This website and its content are provided for informational purposes about the {EVENT.name}{" "}
                {EVENT.eventTitle}. You agree not to misuse the site, interfere with its normal operation,
                or submit false information through our forms.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-extrabold text-navy-950">Disclaimer</h2>
              <p className="mt-3 text-base leading-relaxed text-navy-700/80">
                Event details, including date, time, venue, speakers, and agenda, are subject to change.
                We are not liable for indirect or incidental damages arising from your use of this website
                or attendance at the event.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-extrabold text-navy-950">Governing Law</h2>
              <p className="mt-3 text-base leading-relaxed text-navy-700/80">
                These terms are governed by the laws of the State of Texas, without regard to conflict of
                law principles.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-extrabold text-navy-950">Changes to These Terms</h2>
              <p className="mt-3 text-base leading-relaxed text-navy-700/80">
                We may update these Terms from time to time. Continued use of this website after changes
                are posted means you accept the updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-extrabold text-navy-950">Contact Us</h2>
              <p className="mt-3 text-base leading-relaxed text-navy-700/80">
                Questions about these terms? Contact us at{" "}
                <a href={`mailto:${BUSINESS.supportEmail}`} className="font-semibold text-brand-blue-600">
                  {BUSINESS.supportEmail}
                </a>
                {BUSINESS.supportPhone ? ` or ${BUSINESS.supportPhone}.` : "."}
              </p>
              {BUSINESS.mailingAddress && (
                <p className="mt-2 text-base leading-relaxed text-navy-700/80">
                  {BUSINESS.legalName} — {BUSINESS.mailingAddress}
                </p>
              )}
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
