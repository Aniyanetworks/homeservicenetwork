import { NextResponse } from "next/server";
import { CURRENT_PHASE, PRICING } from "@/lib/content";
import { upsertContact } from "@/lib/ghl";

const STRIPE_URLS: Record<typeof CURRENT_PHASE, string | undefined> = {
  earlyBird: process.env.STRIPE_EARLY_BIRD_URL,
  finalEarlyBird: process.env.STRIPE_FINAL_EARLY_BIRD_URL,
  regular: process.env.STRIPE_REGULAR_URL,
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, company, industry, role } = body;

    if (!firstName || !lastName || !email || !phone) {
      return NextResponse.json({ error: "Please fill in all required fields." }, { status: 400 });
    }

    await upsertContact({
      firstName,
      lastName,
      email,
      phone,
      tags: ["hsn", "hsn-austin-sept-12-2026", "attendee", PRICING.ghlTag],
      customFields: {
        company,
        industry,
        role,
        ticketType: "General Admission",
        paymentStatus: "Pending",
      },
    });

    const stripeUrl = STRIPE_URLS[CURRENT_PHASE];
    if (!stripeUrl) {
      return NextResponse.json(
        { error: "Ticket checkout isn't connected yet for this phase. Please try again shortly." },
        { status: 503 },
      );
    }

    return NextResponse.json({ redirectUrl: stripeUrl });
  } catch (err) {
    console.error("ticket-signup error", err);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
