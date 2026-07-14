export const site = {
  name: "Deb Fernandez",
  title: "Deb Fernandez · Web Designer & Product Developer",
  description:
    "Web designer and developer based in Bukidnon, Philippines. I design brands and build fast, modern websites and software with AI tools like Claude and Cursor. Working with clients across the Philippines and worldwide.",
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
  location: "Bukidnon, Philippines · GMT+8",
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
    pitch:
      "Your idea as working software. I design it, build it with Claude and Cursor, and put it live on Vercel. You watch it take shape daily.",
    deliverables: [
      "Web app, dashboard, or internal tool",
      "Landing page or full marketing site",
      "Custom Shopify or headless storefront",
      "Deployed, tested, and handed over",
    ],
    goodFor: "Founders who need an MVP without hiring a dev team",
    timeline: "1 week max",
  },
  {
    index: "02",
    title: "Brand and content",
    pitch:
      "The face of your company. Identity, social content, email campaigns. Five years and 2,000+ designs deep, this is where I started.",
    deliverables: [
      "Logo, brand system, and guidelines",
      "Social content systems and templates",
      "Email flows, campaigns, and newsletters",
      "Ad creative at volume",
    ],
    goodFor: "Teams that need to look bigger than they are",
    timeline: "1 week max",
  },
  {
    index: "03",
    title: "AI systems",
    pitch:
      "Software that does the boring work for you. Content engines, compliance checks, internal copilots. Built around your real workflow, not a demo.",
    deliverables: [
      "Custom AI agents and assistants",
      "Content and marketing automation",
      "Review and approval pipelines",
      "SEO and AI search setup",
    ],
    goodFor: "Teams drowning in repetitive work",
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
    q: "You're not a software engineer. Why should I trust you with code?",
    a: "I never claim to be one. I'm a product developer: I direct AI tools like Claude and Cursor to write the code, and I review, test, and ship the result. The products on this site run in production right now, and you can test one live before you pay me anything. If your project needs deep systems engineering or a security audit, I'll say so and help you find the right person.",
  },
  {
    q: "What does vibe coding actually mean?",
    a: "Building software by directing AI instead of typing every line by hand. I describe what I want, AI writes the code, and I steer, test, and refine until it works. It compresses months of dev work into days. The catch is you still need taste and judgment, and that's the part I bring.",
  },
  {
    q: "How fast is fast?",
    a: "A landing page in days. A product build or a brand package in a week, tops. AI systems in two. I give you a real date in the brief before we start, and you see progress on a live link daily, so you never have to wonder.",
  },
  {
    q: "Who owns the work?",
    a: "You do. All of it. The code lives in your repo, the design files in your accounts, the domain in your name. No lock-in, no hostage fees, no monthly ransom to keep your own product.",
  },
  {
    q: "What happens if it breaks after launch?",
    a: "I fix it. Every build includes a support window after launch, and because everything is documented and in your hands, any developer can pick it up later. You're not stuck with me, you just might want to keep me.",
  },
  {
    q: "What do you charge?",
    a: "Fixed price per project, agreed before we start. It depends on scope, so the honest answer comes after a 15 minute call. What I can promise: no hourly billing, no surprise invoices, and no agency markup, because there's no agency.",
  },
  {
    q: "Are you based in Bukidnon? Can you work with clients elsewhere?",
    a: "Yes to both. I'm a web designer and developer based in Bukidnon, Philippines. I work with businesses here at home and remotely with clients across the Philippines and worldwide. I rebuilt the website for RotyPeaks Ridge Camp in Impasug-ong, Bukidnon, and made it load 7 times faster. You get a live link from day one and you own everything at the end, wherever you are.",
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
