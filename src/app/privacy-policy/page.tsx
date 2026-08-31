import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BUSINESS, EVENT } from "@/lib/content";

export const metadata: Metadata = {
  title: `Privacy Policy | ${EVENT.name}`,
  description: `How ${EVENT.name} collects, uses, and protects your information.`,
};

const UPDATED = "August 31, 2026";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-blue-600">
            Privacy Policy
          </span>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
            Your privacy matters to us.
          </h1>
          <p className="mt-3 text-sm text-navy-700/60">Last updated: {UPDATED}</p>

          <div className="prose-sections mt-10 flex flex-col gap-10 text-navy-900">
            <p className="text-base leading-relaxed text-navy-700/80">
              This Privacy Policy explains how {BUSINESS.legalName} (&quot;we,&quot; &quot;us,&quot; or
              &quot;our&quot;) collects, uses, and protects the information you share with us through this
              website, our event registration and sponsorship forms, and related communications, including
              SMS text messages and email.
            </p>

            <section>
              <h2 className="text-lg font-extrabold text-navy-950">Information We Collect</h2>
              <p className="mt-3 text-base leading-relaxed text-navy-700/80">
                When you register for the event, apply to become a sponsor, or otherwise contact us, we may
                collect:
              </p>
              <ul className="mt-3 flex flex-col gap-2 text-base leading-relaxed text-navy-700/80">
                <li>• Name, email address, and phone number</li>
                <li>• Company name, industry, and website (for sponsorship applications)</li>
                <li>• Ticket type, sponsorship level, and any notes you submit</li>
                <li>• Basic technical data such as browser type and pages visited</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-extrabold text-navy-950">How We Use Your Information</h2>
              <p className="mt-3 text-base leading-relaxed text-navy-700/80">We use the information you provide to:</p>
              <ul className="mt-3 flex flex-col gap-2 text-base leading-relaxed text-navy-700/80">
                <li>• Process ticket registrations and sponsorship applications</li>
                <li>• Send confirmations, event updates, and reminders by email and SMS</li>
                <li>• Respond to questions and provide event-day support</li>
                <li>• Improve this website and future Home Service Network TX events</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-extrabold text-navy-950">SMS &amp; Text Message Communications</h2>
              <p className="mt-3 text-base leading-relaxed text-navy-700/80">
                If you provide your phone number and opt in, we may send you text messages related to your
                registration, sponsorship application, or the event (such as confirmations, reminders, or
                important updates).
              </p>
              <ul className="mt-3 flex flex-col gap-2 text-base leading-relaxed text-navy-700/80">
                <li>• Message frequency varies.</li>
                <li>• Message and data rates may apply.</li>
                <li>
                  • You can opt out at any time by replying <strong>STOP</strong> to any message. Reply{" "}
                  <strong>HELP</strong> for assistance.
                </li>
                <li>• We do not sell or share your mobile opt-in information with third parties for their marketing purposes.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-extrabold text-navy-950">How We Share Your Information</h2>
              <p className="mt-3 text-base leading-relaxed text-navy-700/80">
                We do not sell or rent your personal information. We share information only with the
                service providers that power our event registration, communications, and payments (such as
                our CRM/SMS platform and payment processor), and only as needed to operate the event and
                fulfill your request. We may also disclose information if required by law.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-extrabold text-navy-950">Your Choices</h2>
              <p className="mt-3 text-base leading-relaxed text-navy-700/80">
                You can opt out of text messages at any time by replying STOP, and unsubscribe from emails
                using the link in any email we send. To request that we delete your information, contact us
                using the details below.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-extrabold text-navy-950">Children&apos;s Privacy</h2>
              <p className="mt-3 text-base leading-relaxed text-navy-700/80">
                This website and event are intended for business professionals and are not directed to
                children under 13. We do not knowingly collect information from children.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-extrabold text-navy-950">Changes to This Policy</h2>
              <p className="mt-3 text-base leading-relaxed text-navy-700/80">
                We may update this Privacy Policy from time to time. Changes will be posted on this page
                with an updated revision date.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-extrabold text-navy-950">Contact Us</h2>
              <p className="mt-3 text-base leading-relaxed text-navy-700/80">
                Questions about this policy or your information? Contact us at{" "}
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
