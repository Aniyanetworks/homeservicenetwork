// Central place for editable event copy, config, and GHL links.
// Swap NEXT_PUBLIC_GHL_TICKETS_URL / NEXT_PUBLIC_GHL_SPONSOR_URL in .env.local
// once the GHL funnel pages are live — everything else here is placeholder
// content meant to be edited directly.

export const EVENT = {
  name: "Home Service Network+",
  shortName: "HSN+",
  eventTitle: "Grand Opening",
  tagline: "Connect • Learn • Build Relationships • Have Fun",
  subTagline:
    "The official Grand Opening of Home Service Network+ — an evening of business connections, Padel, and community for Home Service industry leaders in Austin, Texas.",
  closingHeadline: "One Night. Hundreds Of Connections. The Beginning Of A Community.",
  closingBody: "Where the Home Service industry comes together to connect, grow, and build relationships.",
  city: "Austin, Texas",
  cityShort: "Austin, TX",
  date: "September 12, 2026",
  dateShort: "Sept 12, 2026",
  dateISO: "2026-09-12",
  time: "4:00 PM – 11:00 PM",
  venue: "Venue to be announced",
  founder: {
    name: "Isael Garcia",
    title: "Founder, Home Service Network+",
  },
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
    title: "A Night Off the Clock",
    body: "Step away from the job site and spend an evening thinking like an owner, not an operator.",
  },
  {
    title: "Community That Lasts",
    body: "Home Service Network+ is built to be a relationship, not a one-night event.",
  },
];

export const NETWORKING_AUDIENCE = [
  "Home Service business owners",
  "Contractors",
  "Suppliers",
  "Manufacturers",
  "Technology companies",
  "Finance & service providers",
  "Industry leaders",
  "Potential referral partners",
];

export const NETWORKING_HIGHLIGHTS = [
  "Open networking",
  "Sponsor booth experiences",
  "Padel social play & challenges",
  "Business networking games",
  "Raffles & giveaways",
  "Food and drinks",
];

export const PADEL_CHALLENGES = [
  "Target Challenge",
  "Serve Accuracy Challenge",
  "King of the Court",
  "Beat the Pro Challenge",
  "Partner Challenge",
  "Longest Rally Challenge",
];

export const FEATURED_SPEAKER = {
  name: "Sean Michael Crane",
  title: "Featured Keynote Speaker",
  tagline: "From Prison to Purpose. From Adversity to an Unstoppable Life.",
  bio: "Entrepreneur, keynote speaker, coach, and founder of Unstoppable 365, Sean Michael Crane transformed his life through discipline, mindset, and relentless personal accountability. At the Home Service Network+ Grand Opening, Sean will deliver a powerful one-hour keynote focused on leadership, discipline, mindset, business, and personal growth — with lessons designed to challenge business owners and leaders to raise their standards and take action.",
  photo: "/sean-michael-crane.jpeg" as string | null,
};

type AgendaItem = {
  time: string;
  title: string;
  subtitle?: string;
  bullets?: string[];
  sectionLabel?: string;
  featured?: boolean;
};

export const AGENDA: AgendaItem[] = [
  {
    time: "4:00 PM – 4:30 PM",
    title: "Arrival • Check-In • Welcome",
    subtitle: "The Home Service Network+ Grand Opening officially begins.",
    bullets: [
      "Guest and VIP check-in",
      "Welcome drinks",
      "Sponsor booths open",
      "Meet the Founding Partners",
      "Music and social atmosphere",
      "Padel courts open",
      "Registration for games, challenges, raffles, and prizes",
    ],
  },
  {
    time: "4:30 PM – 6:00 PM",
    title: "Business Networking Experience",
    subtitle: "The first part of the event is dedicated to creating genuine business connections.",
    bullets: NETWORKING_HIGHLIGHTS,
  },
  {
    time: "6:00 PM – 6:10 PM",
    title: "Official Opening Ceremony",
    subtitle: `${EVENT.founder.name} — ${EVENT.founder.title}`,
    sectionLabel: "Main Program",
    bullets: [
      "Why Home Service Network+ was created",
      "The vision for building the Home Service business community",
      "Recognition of Founding Partners",
      "Introduction to the evening program",
    ],
  },
  {
    time: "6:10 PM – 6:20 PM",
    title: "Presenting Founding Partner Spotlight",
    subtitle: "10-Minute Stage Presentation",
    bullets: [
      "Their company",
      "Their mission",
      "Products or services",
      "How they support Home Service businesses",
      "Opportunities available to attendees",
    ],
  },
  {
    time: "6:20 PM – 6:45 PM",
    title: "Gold Founding Partner Spotlights",
    subtitle: "Up to 5 minutes on stage, each",
    bullets: ["An opportunity to introduce their company and explain how they can help Home Service business owners."],
  },
  {
    time: "6:45 PM – 7:00 PM",
    title: "Founding Partner Recognition & Giveaways",
    bullets: [
      "Silver Founding Partner recognition",
      "Bronze Founding Partner recognition",
      "Sponsor acknowledgments",
      "Giveaways",
      "Raffle winners",
      "Special announcements",
    ],
  },
  {
    time: "7:00 PM – 7:25 PM",
    title: "Networking • Food • Drinks",
    subtitle: "A short networking break before the keynote. Guests begin moving toward the keynote area at 7:20 PM.",
    bullets: [
      "Food and drinks",
      "Sponsor booth visits",
      "Business introductions",
      "Photos",
      "Meet other attendees",
      "Connect with Founding Partners",
    ],
  },
  {
    time: "7:25 PM – 7:30 PM",
    title: "Keynote Introduction",
    subtitle: "Official introduction of our featured keynote speaker.",
  },
  {
    time: "7:30 PM – 8:30 PM",
    title: `Featured Keynote: ${FEATURED_SPEAKER.name}`,
    subtitle: "Leadership • Discipline • Mindset • Business • Personal Growth",
    featured: true,
    bullets: [
      "The centerpiece presentation of the Home Service Network+ Grand Opening",
      "Networking activities and games pause so attendees can participate in the full experience",
    ],
  },
  {
    time: "8:30 PM – 8:45 PM",
    title: "Keynote Closing • Recognition • Group Photo",
    bullets: [
      `Thank you and recognition for ${FEATURED_SPEAKER.name}`,
      "Founding Partner recognition",
      "Official Home Service Network+ group photo",
      "Announcement of evening prizes and activities",
    ],
  },
  {
    time: "8:45 PM – 10:30 PM",
    title: "Networking After Hours",
    subtitle: "The business program transitions into a high-energy social networking experience.",
    bullets: [
      "Open networking",
      "Padel social play & challenges",
      "Business connection games",
      "Sponsor experiences",
      "Music",
      "Food and drinks",
      "Raffles & giveaways",
      "Prize challenges",
    ],
  },
  {
    time: "10:30 PM – 10:45 PM",
    title: "Grand Prizes & Final Raffle",
    bullets: [
      "Padel challenge winners",
      "Game winners",
      "Sponsor prizes",
      "Grand raffle",
      "Special giveaways",
    ],
  },
  {
    time: "10:45 PM – 11:00 PM",
    title: "Closing Ceremony",
    bullets: [
      "Thank you to attendees",
      "Thank you to Founding Partners",
      "Final sponsor recognition",
      "Community vision",
      "Announcement of what's next for Home Service Network+",
    ],
  },
];

export const SPONSOR_TIERS = [
  {
    name: "Presenting Founding Partner",
    blurb: "The exclusive main sponsor spotlight, including a 10-minute stage presentation to the full room.",
  },
  {
    name: "Gold Founding Partner",
    blurb: "Up to 5 minutes on stage to introduce your company and how you support Home Service businesses.",
  },
  { name: "Silver Founding Partner", blurb: "Founding Partner recognition on stage during the program." },
  { name: "Bronze Founding Partner", blurb: "Founding Partner recognition on stage during the program." },
  { name: "Community Partner", blurb: "Support the Grand Opening and get listed as a community partner." },
];

export const FAQS = [
  {
    q: `Who should attend ${EVENT.name}?`,
    a: "Owners, leaders, and executives across HVAC, Plumbing, Electrical, Roofing, Restoration, Remodeling, Pest Control, Landscaping, and related home service industries.",
  },
  {
    q: "Where and when is the event held?",
    a: `Austin, Texas on ${EVENT.date}, from ${EVENT.time}. Exact venue details will be sent after registration.`,
  },
  {
    q: "Is this just a networking event?",
    a: `Networking, Padel, and giveaways are featured parts of the evening, but ${EVENT.name} is primarily a business community event focused on real connections and growth.`,
  },
  {
    q: "Is this a padel tournament?",
    a: "No — instead of a traditional tournament, attendees can join short, fun Padel challenges and games throughout the event for prizes. No experience required.",
  },
  {
    q: "What's included in my ticket?",
    a: "See the Tickets section above for what's included in each tier.",
  },
  {
    q: "How do I become a sponsor?",
    a: "Use the \"Become a Sponsor\" button anywhere on this page to submit your application and become a Founding Partner.",
  },
  {
    q: "What should I bring?",
    a: "Business casual attire, comfortable shoes, and athletic wear if you plan to join the Padel Experience.",
  },
];
