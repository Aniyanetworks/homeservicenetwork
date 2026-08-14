// Server-only GHL API client. Never import this from a "use client" component or
// anything bundled to the browser — it reads GHL_PRIVATE_INTEGRATION_TOKEN, which
// must never reach the client bundle. Only import from route.ts files under src/app/api.

const GHL_API_BASE = "https://services.leadconnectorhq.com";
const GHL_API_VERSION = "2021-07-28";

const CUSTOM_FIELD_IDS = {
  company: "1qIRlYiReQRsx4Lu6Pkz",
  industry: "3eHtNcdFqzMnS2KPmLL5",
  ticketType: "4unCO7PTQrdHIIwhyHzy",
  notes: "SQh8M0jlb84o86fXhsZI",
  paymentStatus: "X39hPYwref3YsTIkjAlr",
  role: "YNoXZotRNpieebN1YQvG",
  checkinStatus: "o5y7T3Dqr85jp3ebAELb",
  sponsorshipLevel: "xFSfzrpcldkm3zLRJBnt",
} as const;

function ghlHeaders() {
  const token = process.env.GHL_PRIVATE_INTEGRATION_TOKEN;
  if (!token) {
    throw new Error("GHL_PRIVATE_INTEGRATION_TOKEN is not set");
  }
  return {
    Authorization: `Bearer ${token}`,
    Version: GHL_API_VERSION,
    "Content-Type": "application/json",
    Accept: "application/json",
  };
}

type CustomFieldValues = Partial<Record<keyof typeof CUSTOM_FIELD_IDS, string>>;

type UpsertContactInput = {
  firstName?: string;
  lastName?: string;
  email: string;
  phone?: string;
  website?: string;
  tags?: string[];
  customFields?: CustomFieldValues;
};

// GHL's /contacts/upsert REPLACES the tags array wholesale — it does not merge with
// whatever tags the contact already has (custom fields merge automatically, tags do
// not — confirmed by direct testing). So before upserting, look up any existing tags
// for this email and union them in, or a second submission (e.g. the payment webhook
// tagging someone "paid" after the signup form already tagged them "attendee") would
// silently wipe out the earlier tags.
async function getExistingTags(email: string, locationId: string): Promise<string[]> {
  const res = await fetch(
    `${GHL_API_BASE}/contacts/?locationId=${locationId}&query=${encodeURIComponent(email)}&limit=1`,
    { headers: ghlHeaders() },
  );
  if (!res.ok) return [];
  const data = await res.json();
  return data.contacts?.[0]?.tags ?? [];
}

export async function upsertContact(input: UpsertContactInput) {
  const locationId = process.env.GHL_LOCATION_ID;
  if (!locationId) {
    throw new Error("GHL_LOCATION_ID is not set");
  }

  const customFields = Object.entries(input.customFields ?? {})
    .filter(([, value]) => typeof value === "string" && value.trim() !== "")
    .map(([key, value]) => ({
      id: CUSTOM_FIELD_IDS[key as keyof typeof CUSTOM_FIELD_IDS],
      value,
    }));

  let tags = input.tags ?? [];
  if (tags.length > 0) {
    const existingTags = await getExistingTags(input.email, locationId);
    tags = Array.from(new Set([...existingTags, ...tags]));
  }

  const res = await fetch(`${GHL_API_BASE}/contacts/upsert`, {
    method: "POST",
    headers: ghlHeaders(),
    body: JSON.stringify({
      locationId,
      firstName: input.firstName,
      lastName: input.lastName,
      email: input.email,
      phone: input.phone,
      website: input.website,
      tags,
      customFields,
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`GHL upsertContact failed: ${res.status} ${body}`);
  }

  return res.json() as Promise<{ new: boolean; contact: { id: string } }>;
}
