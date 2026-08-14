import { NextResponse } from "next/server";
import Stripe from "stripe";
import { upsertContact } from "@/lib/ghl";

// Only used for local signature verification (stripe.webhooks.constructEvent), which
// doesn't make network calls — a real secret key isn't required for that specifically,
// but set STRIPE_SECRET_KEY too once available in case we need richer session data later.
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "sk_not_configured");

export async function POST(request: Request) {
  const signature = request.headers.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!signature || !webhookSecret) {
    console.error("Stripe webhook hit but STRIPE_WEBHOOK_SECRET isn't configured yet.");
    return NextResponse.json({ error: "Webhook not configured." }, { status: 400 });
  }

  // Must read the raw body — Stripe's signature is an HMAC over the exact bytes sent,
  // so this can't go through request.json() first.
  const rawBody = await request.text();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, signature, webhookSecret);
  } catch (err) {
    console.error("Stripe webhook signature verification failed:", err);
    return NextResponse.json({ error: "Invalid signature." }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const email = session.customer_details?.email;

    if (!email) {
      console.error("checkout.session.completed with no customer email:", session.id);
    } else {
      // Only apply "paid" + Payment Status here — the existing GHL "Payment success
      // workflow" (triggered on Tag Added: paid) handles the confirmation email/SMS.
      // upsertContact merges this with whatever tags the signup form already applied,
      // it does not replace them.
      await upsertContact({
        email,
        tags: ["paid"],
        customFields: {
          paymentStatus: "Paid",
        },
      });
    }
  }

  return NextResponse.json({ received: true });
}
