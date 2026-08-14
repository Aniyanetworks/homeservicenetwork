import { NextResponse } from "next/server";
import { upsertContact } from "@/lib/ghl";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, company, website, industry, sponsorshipLevel, notes } = body;

    if (!firstName || !lastName || !email || !company) {
      return NextResponse.json({ error: "Please fill in all required fields." }, { status: 400 });
    }

    await upsertContact({
      firstName,
      lastName,
      email,
      phone,
      website,
      tags: ["hsn", "hsn-austin-sept-12-2026", "hsn sponsor lead"],
      customFields: {
        company,
        industry,
        sponsorshipLevel,
        notes,
      },
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("sponsor-signup error", err);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
