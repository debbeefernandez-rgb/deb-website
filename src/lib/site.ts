export const site = {
  name: "Deb Fernandez",
  title: "Deb Fernandez · Web Designer & Product Developer",
  description:
    "Web designer and developer in the Philippines. I design brands and build fast, modern websites and software with AI tools like Claude and Cursor. Working with clients across the Philippines and worldwide.",
  keywords: [
    "web designer Bukidnon",
    "web developer Bukidnon",
    "website design Bukidnon",
    "web designer Philippines",
    "web developer Philippines",
    "freelance web developer Bukidnon",
    "Next.js developer Philippines",
    "AI product developer",
    "brand designer Bukidnon",
    "Deb Fernandez",
  ],
  url: "https://debfernandez.com",
  email: "deb@debfernandez.com",
  calendly: "https://calendly.com/debfernandez/15min?back=1",
  instagram: "https://www.instagram.com/zebijin/",
  blog: "https://blog.debfernandez.com",
  liveDemo: "https://socialmedia.debfernandez.com/queue",
  location: "Philippines · GMT+8",
  availability: "Booking new projects",
};

export const stats: {
  value: number;
  suffix: string;
  label: string;
  size: number;
  big?: boolean;
}[] = [
  { value: 5, suffix: " yrs", label: "Building for funded teams", size: 150 },
  { value: 40, suffix: "+", label: "Projects delivered", size: 175 },
  { value: 2000, suffix: "+", label: "Designs shipped", size: 235, big: true },
  { value: 5, suffix: "", label: "AI products in production", size: 185 },
];

export const tools = [
  "Claude",
  "Claude Code",
  "Cursor",
  "Lovable",
  "Next.js",
  "React",
  "Tailwind",
  "Vercel",
  "Figma",
  "Shopify",
  "Klaviyo",
  "Airtable",
  "Webflow",
  "Retool",
  "Photoshop",
  "Illustrator",
];

export type Service = {
  index: string;
  title: string;
  pitch: string;
  deliverables: string[];
  goodFor: string;
  timeline: string;
};

export const services: Service[] = [
  {
    index: "01",
    title: "Product build",
    pitch: "Your idea as working software, live in a week.",
    deliverables: [
      "Web app, dashboard, or tool",
      "Landing page or full site",
      "Shopify or headless store",
    ],
    goodFor: "Founders who need an MVP",
    timeline: "1 week max",
  },
  {
    index: "02",
    title: "Brand and content",
    pitch: "The face of your business, built to convert.",
    deliverables: [
      "Logo and brand system",
      "Social and email content",
      "Ad creative at volume",
    ],
    goodFor: "Teams that need to look bigger",
    timeline: "1 week max",
  },
  {
    index: "03",
    title: "AI systems",
    pitch: "Software that does the boring work for you.",
    deliverables: [
      "Custom agents and assistants",
      "Content automation",
      "Review and approval pipelines",
    ],
    goodFor: "Teams stuck in repetitive work",
    timeline: "2 weeks max",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Call",
    body: "15 minutes. You tell me what you need. I tell you if I can build it and what it roughly costs. No pitch deck.",
    detail: "Same week",
  },
  {
    step: "02",
    title: "Scope",
    body: "You get a one page brief: what I will build, what it costs, when it ships. Fixed scope, fixed price. You sign off before anything starts.",
    detail: "Within 48 hours",
  },
  {
    step: "03",
    title: "Build",
    body: "You get a live link from day one and you watch the product grow on it daily. No big reveal, no surprises in week four.",
    detail: "Daily updates",
  },
  {
    step: "04",
    title: "Ship",
    body: "It goes live. You own everything: the code, the design files, the accounts, the domain. I stay around for fixes after launch.",
    detail: "You own it all",
  },
];

export const testimonials = [
  {
    quote:
      "Deb built in two weeks what our last agency couldn't in three months. And it looked like us.",
    name: "Founder",
    role: "Series A SaaS, NYC",
  },
  {
    quote:
      "She doesn't just make things pretty, she makes them work. That automation still saves us money.",
    name: "Head of Marketing",
    role: "DTC apparel brand",
  },
  {
    quote:
      "Hired her twice. Will hire her a third time. Designers who can build working software are unicorns.",
    name: "TEDx Speaker & Founder",
    role: "Professional services firm",
  },
];

export const faqs = [
  {
    q: "If it's just AI, why can't I do it myself?",
    a: "You can start. Most people stall at the hard 80%, because raw AI output is generic. You bring the idea, I bring the taste, the judgment, and the time to actually finish it.",
  },
  {
    q: "Isn't AI-built work just generic?",
    a: "By default, yes. That's the problem I solve. Left alone, AI gives everyone the same result. You're not paying for the AI, you're paying for the human directing it.",
  },
  {
    q: "How fast is fast?",
    a: "A landing page in days. A product build or brand package in a week, tops. AI systems in two. You get a real date upfront and a live link from day one.",
  },
  {
    q: "Who owns the work?",
    a: "You do, all of it. The code, the files, the domain, in your name. No lock-in, no hostage fees.",
  },
  {
    q: "What do you charge?",
    a: "Fixed price per project, agreed before we start. No hourly billing, no surprise invoices, no agency markup. The honest number comes after a 15 minute call.",
  },
];

export const briefServices = [
  {
    code: "A",
    key: "product",
    title: "Product build",
    delivers: "Web app, MVP, dashboard, or internal tool",
  },
  {
    code: "B",
    key: "web",
    title: "Website or landing page",
    delivers: "Marketing site or landing page that converts",
  },
  {
    code: "C",
    key: "brand",
    title: "Brand and creative",
    delivers: "Identity, logo, brand system, content templates",
  },
  {
    code: "D",
    key: "ai",
    title: "AI automation",
    delivers: "Agents, content engines, internal copilots",
  },
  {
    code: "E",
    key: "email",
    title: "Email and lifecycle",
    delivers: "Flows, campaigns, newsletters, win-back",
  },
  {
    code: "F",
    key: "commerce",
    title: "eCommerce",
    delivers: "Custom Shopify or headless storefront",
  },
];

export const briefDepths = [
  { key: "mvp", label: "Scrappy MVP", note: "The smallest thing that works" },
  { key: "polish", label: "Polished", note: "Production ready, on brand" },
  { key: "system", label: "Full system", note: "Documented so your team can extend it" },
];

/* Me vs a typical agency vs doing it yourself. */
export const compareDims = [
  "Who builds it",
  "The design",
  "The AI",
  "Security & compliance",
  "The cost",
  "The result",
];

export type CompareColumn = {
  key: string;
  label: string;
  sub: string;
  featured?: boolean;
  rows: string[];
};

export const compareColumns: CompareColumn[] = [
  {
    key: "diy",
    label: "Do it yourself",
    sub: "You plus a template or an AI builder",
    rows: [
      "You, learning as you go at night",
      "Looks like the template it is",
      "You fight the tool, the tool wins",
      "Not on your radar until it breaks",
      "Cheap upfront, expensive in your hours",
      "Looks DIY, and customers notice",
    ],
  },
  {
    key: "agency",
    label: "A typical agency",
    sub: "A team, an office, and a markup",
    rows: [
      "A junior you never meet",
      "On-brand-ish, by committee",
      "AI as a buzzword, same slow process",
      "A checklist item, if that",
      "Markup for the team and the overhead",
      "Fine, forgettable, over budget",
    ],
  },
  {
    key: "me",
    label: "Me",
    sub: "One expert, end to end",
    featured: true,
    rows: [
      "Me, start to finish. You talk to the person building it",
      "Editorial, and built to convert",
      "An expert operator. I direct the AI, not the reverse",
      "Cyber-aware, from years inside a cybersecurity company",
      "Fixed price, no agency markup",
      "Premium, working, shipped on time",
    ],
  },
];

/* Unlisted pricing page. Not in nav, footer, or sitemap; noindex. */
export const pricingDeal = [
  "Fixed price, agreed upfront",
  "Live link from day one",
  "You own the repo",
  "Replies within 24h",
];

export type Tier = {
  tag: string;
  name: string;
  who: string;
  price: string;
  unit: string;
  usd: string;
  features: string[];
  ships: string;
  revisions: string;
  cta: string;
  featured?: boolean;
};

export const tiers: Tier[] = [
  {
    tag: "Tier 01",
    name: "Landing",
    who: "You need one page that converts.",
    price: "₱20,000",
    unit: "one-time",
    usd: "≈ $350 USD",
    features: [
      "Single-page marketing site",
      "Built on Next.js, deployed to Vercel",
      "Mobile-first, fast by default",
      "Domain and hosting setup (1 year)",
      "Contact form to your inbox",
      "Basic on-page SEO",
    ],
    ships: "Ships in 7 days",
    revisions: "2 revision rounds included. Extra rounds ₱1,500 each.",
    cta: "Start this",
  },
  {
    tag: "Most booked",
    name: "Website",
    who: "You need to look bigger than you are.",
    price: "₱35,000",
    unit: "one-time",
    usd: "≈ $600 USD",
    features: [
      "Full marketing site, custom design",
      "Brand system: logo, colors, type",
      "Booking flow with email alerts",
      "Photo and video galleries",
      "Domain and hosting setup (1 year)",
      "Analytics and on-page SEO",
      "Social integration",
    ],
    ships: "Ships in 14 days",
    revisions: "3 revision rounds included. Extra rounds ₱2,500 each.",
    cta: "Start this",
    featured: true,
  },
  {
    tag: "Tier 03",
    name: "Product",
    who: "You need an MVP without hiring a dev team.",
    price: "₱65,000",
    unit: "one-time",
    usd: "≈ $1,150 USD",
    features: [
      "Web app, dashboard, or internal tool",
      "Designed and built end to end",
      "Auth, database, admin panel",
      "Custom Shopify or headless storefront",
      "Deployed, tested, handed to you",
      "Advanced SEO and speed optimization",
    ],
    ships: "Ships in 21 days",
    revisions: "5 revision rounds included. Extra rounds ₱3,500 each.",
    cta: "Start this",
  },
  {
    tag: "Tier 04",
    name: "AI system",
    who: "You are drowning in repetitive work.",
    price: "₱120,000+",
    unit: "custom",
    usd: "≈ $2,100+ USD",
    features: [
      "Custom AI agents and assistants",
      "Content and marketing automation",
      "Review and approval pipelines",
      "Payments, members area, login",
      "Premium hosting and full SEO",
      "30 days post-launch support",
    ],
    ships: "Ships in 4 weeks",
    revisions: "Unlimited revisions within scope. Changes billed per scope.",
    cta: "Request quote",
  },
];
