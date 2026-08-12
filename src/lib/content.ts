// Central place for editable event copy, config, and GHL links.
// Swap NEXT_PUBLIC_GHL_TICKETS_URL / NEXT_PUBLIC_GHL_SPONSOR_URL in .env.local
// once the GHL funnel pages are live — everything else here is placeholder
// content meant to be edited directly.

export const EVENT = {
  name: "Home Services Network",
  shortName: "HSN",
  tagline: "Where Home Service Leaders Build, Connect & Grow",
  subTagline:
    "A one-day business community event for owners, leaders, and executives across the home services industry.",
  city: "Austin, Texas",
  cityShort: "Austin, TX",
  date: "September 12, 2026",
  dateShort: "Sept 12, 2026",
  dateISO: "2026-09-12",
  venue: "Venue to be announced",
};

export const LINKS = {
  getTickets: process.env.NEXT_PUBLIC_GHL_TICKETS_URL || "#tickets",
  becomeSponsor: process.env.NEXT_PUBLIC_GHL_SPONSOR_URL || "#become-sponsor",
};

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Why Attend", href: "#why-attend" },
  { label: "Speaker", href: "#speaker" },
  { label: "Agenda", href: "#agenda" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "Tickets", href: "#tickets" },
  { label: "FAQ", href: "#faq" },
];

export const TARGET_INDUSTRIES = [
  "HVAC",
  "Plumbing",
  "Electrical",
  "Roofing",
  "Restoration",
  "Remodeling",
  "Pest Control",
  "Landscaping",
];

export const WHY_ATTEND = [
  {
    title: "Real Business Connections",
    body: "Meet owners and executives who run companies like yours — not vendors pitching you.",
  },
  {
    title: "Proven Growth Strategies",
    body: "Hear what's actually working in home services right now, from people running it.",
  },
  {
    title: "A Day Off the Truck",
    body: "Step out of the day-to-day and think like an owner, not an operator, for a day.",
  },
  {
    title: "Community That Lasts",
    body: "Home Services Network is built to be a relationship, not a one-day event.",
  },
];

export const FEATURED_SPEAKER = {
  name: "Speaker Name",
  title: "Title / Company — details coming soon",
  bio: "Bio placeholder — swap in the featured speaker's background, credentials, and why they're relevant to home services owners once confirmed.",
  photo: null as string | null,
};

export const AGENDA = [
  { time: "8:00 AM", title: "Doors Open & Check-In", detail: "Coffee, networking, and registration." },
  { time: "9:00 AM", title: "Welcome & Opening Remarks", detail: "Kicking off Home Services Network Austin." },
  { time: "9:30 AM", title: "Featured Speaker Session", detail: "Main stage keynote." },
  { time: "11:00 AM", title: "Panel: Scaling a Home Services Business", detail: "Owner-led discussion." },
  { time: "12:30 PM", title: "Lunch & Networking", detail: "Structured networking over lunch." },
  { time: "2:00 PM", title: "Padel Experience", detail: "Padel courts open for attendees." },
  { time: "5:00 PM", title: "Closing Reception", detail: "Drinks, giveaways, and final networking." },
];

export const SPONSOR_TIERS = [
  { name: "Presenting", blurb: "Top-tier brand visibility across the entire event." },
  { name: "Gold", blurb: "Premium placement and stage recognition." },
  { name: "Silver", blurb: "Strong visibility across event materials." },
  { name: "Bronze", blurb: "Logo placement and attendee list access." },
  { name: "Community", blurb: "Support the event and get listed as a partner." },
];

export const TICKETS = [
  {
    name: "General Admission",
    price: "$XX",
    features: ["Full-day event access", "Lunch & refreshments", "Networking sessions", "Padel Experience access"],
    featured: false,
  },
  {
    name: "VIP",
    price: "$XX",
    features: [
      "Everything in General",
      "Priority seating",
      "VIP networking reception",
      "Reserved Padel court time",
    ],
    featured: true,
  },
  {
    name: "Group / Team",
    price: "$XX",
    features: ["3+ attendees from one company", "Full-day event access", "Lunch & refreshments", "Networking sessions"],
    featured: false,
  },
];

export const FAQS = [
  {
    q: "Who should attend Home Services Network?",
    a: "Owners, leaders, and executives across HVAC, Plumbing, Electrical, Roofing, Restoration, Remodeling, Pest Control, Landscaping, and related home service industries.",
  },
  {
    q: "Where is the event held?",
    a: "Austin, Texas on September 12, 2026. Exact venue details will be sent after registration.",
  },
  {
    q: "Is this just a networking event?",
    a: "Networking, Padel, and giveaways are featured parts of the day, but Home Services Network is primarily a business community event focused on real connections and growth.",
  },
  {
    q: "What's included in my ticket?",
    a: "See the Tickets section above for what's included in each tier.",
  },
  {
    q: "How do I become a sponsor?",
    a: "Use the \"Become a Sponsor\" button anywhere on this page to submit your application.",
  },
  {
    q: "What should I bring?",
    a: "Business casual attire, comfortable shoes, and athletic wear if you plan to join the Padel Experience.",
  },
];
