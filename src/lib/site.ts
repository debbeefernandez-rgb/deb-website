export const site = {
  name: "Deb Fernandez",
  title: "Deb Fernandez · Product Developer & Designer",
  description:
    "Designer turned product developer in the Philippines. I design brands and build working software with AI tools like Claude and Cursor. One person, idea to live product.",
  url: "https://debfernandez.com",
  email: "deb@debfernandez.com",
  calendly: "https://calendly.com/debfernandez/15min?back=1",
  instagram: "https://www.instagram.com/zebijin/",
  blog: "https://blog.debfernandez.com",
  liveDemo: "https://socialmedia.debfernandez.com/queue",
  location: "Philippines · GMT+8",
  availability: "Booking new projects",
};

export const stats = [
  { value: 5, suffix: " yrs", label: "Building for funded teams" },
  { value: 40, suffix: "+", label: "Projects delivered" },
  { value: 5, suffix: "", label: "AI products in production" },
  { value: 2000, suffix: "+", label: "Designs shipped" },
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
    timeline: "2 to 6 weeks",
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
    timeline: "1 to 4 weeks",
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
    timeline: "2 to 5 weeks",
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
    a: "Building software by directing AI instead of typing every line by hand. I describe what I want, AI writes the code, and I steer, test, and refine until it works. It compresses months of dev work into weeks. The catch is you still need taste and judgment, and that's the part I bring.",
  },
  {
    q: "How fast is fast?",
    a: "A landing page in days. An MVP in 2 to 6 weeks. A brand system in 1 to 4. I give you a real date in the brief before we start, and you see progress on a live link daily, so you never have to wonder.",
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
