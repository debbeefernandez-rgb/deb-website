export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  client: string;
  blurb: string;
  outcome: string;
  stack: string[];
  image: string;
  imageAlt: string;
  problem: string;
  approach: string;
  highlights: { heading: string; body: string }[];
  brief: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "adreil-co",
    title: "Adreil & Co.",
    category: "Website",
    year: "2026",
    client: "Destination wedding photographer",
    blurb:
      "An editorial website for a Filipino destination wedding photographer working across the US, the Philippines, and worldwide. Built to feel like a fashion magazine and turn international browsers into booked inquiries.",
    outcome: "Every inquiry lands, none dropped",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind 4",
      "Motion",
      "Lenis",
      "Web3Forms",
      "Vercel",
    ],
    image: "/images/work-adreil.webp",
    imageAlt:
      "The Adreil & Co. homepage: a cinematic golden-hour hero for a destination wedding photographer",
    problem:
      "Adreil's photography is warm, cinematic, editorial. His site didn't match it. Couples planning an international wedding have to trust a photographer they have never met before they book, and the old presence gave them no reason to.",
    approach:
      "I designed and built the whole thing from scratch: the editorial visual language, the component system, the content, a conversational inquiry flow, the SEO and AI-discoverability layer, and the production deploy. Restrained, premium, and mobile-first, because most couples browse on their phones.",
    highlights: [
      {
        heading: "A portfolio built for browsing",
        body: "Full wedding stories instead of highlight reels, filterable by region, each opening into its own cinematic gallery. The inquiry flow is a short, conversational path, not a wall of form fields.",
      },
      {
        heading: "Engineered to never lose a lead",
        body: "I rebuilt the inquiry pipeline on Web3Forms after diagnosing an outage-prone backend, added a silent honeypot so bots drop without captcha friction, and hardened the site with a full security-header suite. 100% static, sub-second loads, and readable by AI answer engines.",
      },
    ],
    brief: "look as good as my photos",
    liveUrl: "https://adreil.com",
  },
  {
    slug: "ai-compliance-checker",
    title: "AI Compliance Checker",
    category: "AI product",
    year: "2025",
    client: "Professional services firm",
    blurb:
      "An AI pipeline that flags non-compliant copy in seconds. It replaced a 3 hour manual review.",
    outcome: "92% less time on legal review",
    stack: ["Claude", "Python", "Retool", "Vercel"],
    image: "/images/work-compliance.webp",
    imageAlt: "Compliance dashboard showing posts reviewed, compliance score, and flagged categories",
    problem:
      "Compliance was the bottleneck on every launch. Write, flag, rewrite, flag again. Average turnaround: 11 days.",
    approach:
      "An AI classifier trained on five years of red-lined documents, a review console with confidence scores, and a Slack bot that files review tickets the moment a doc goes live.",
    highlights: [
      {
        heading: "What I designed",
        body: "A calm, dense review console. Three states, keyboard shortcuts, dark by default. Built for legal teams who hate software.",
      },
      {
        heading: "What I built",
        body: "Model first, rules for edge cases. Humans only see the gray-area 18%. The rest clears or blocks automatically.",
      },
    ],
    brief: "flag risky copy before legal sees it",
  },
  {
    slug: "ai-content-engine",
    title: "AI Content Engine",
    category: "AI product",
    year: "2025",
    client: "Multi-brand DTC company",
    blurb:
      "An end to end content factory: brief to draft to image to schedule. One person, ten brands, sixty posts a week.",
    outcome: "10x output, same headcount",
    stack: ["Claude Code", "Airtable", "Webflow"],
    image: "/images/work-content-engine.webp",
    imageAlt: "Content automation studio with live generation runs and a scheduled post pipeline",
    problem:
      "Five brands, one content lead, an impossible backlog. Fifteen posts a week when the goal was sixty.",
    approach:
      "Brand voice cards plus a pipeline that drafts copy, generates imagery, queues everything for review, and pushes approved posts to Webflow. The quality gate is one thumbs-up button.",
    highlights: [
      {
        heading: "Brand voice as data",
        body: "Each brand gets a voice card: adjectives, banned words, sentence length. The model reads it before every prompt.",
      },
      {
        heading: "Human in the loop",
        body: "AI never publishes. Drafts land in a review board. One click approves, one re-rolls, one escalates to a human.",
      },
    ],
    brief: "60 posts a week without hiring",
  },
  {
    slug: "brand-identity-system",
    title: "Brand Identity System",
    category: "Brand",
    year: "2025",
    client: "B2B fintech",
    blurb:
      "Wordmark, colorways, motion rules, and a Figma library for a fintech that needed to look like the grown-up in the room.",
    outcome: "Closed Series A two months later",
    stack: ["Figma", "After Effects", "Tokens Studio"],
    image: "/images/work-brand-identity.webp",
    imageAlt: "Brand identity case study board with wordmark, color system, and motion principles",
    problem:
      "A pre-Series-A fintech with a logo a friend made in Canva. The deck looked like a side project. Investors noticed.",
    approach:
      "One confident wordmark. A token system tying brand to product to marketing. A 40 page guideline an intern can follow.",
    highlights: [
      {
        heading: "Tokens, not files",
        body: "Color, type, spacing, and motion live in Tokens Studio and flow into Figma and Tailwind. Brand updates take minutes, not weeks.",
      },
      {
        heading: "Motion as a language",
        body: "Three easings, three durations, one rule: nothing animates without a reason. A one-pager engineering actually read.",
      },
    ],
    brief: "look fundable before the raise",
  },
  {
    slug: "ecommerce-campaign",
    title: "E-Commerce Campaign",
    category: "Brand + AI",
    year: "2024",
    client: "DTC apparel startup",
    blurb:
      "A holiday campaign built in five days: 200 ad variants and 30 emails, all on brand.",
    outcome: "3.4x ROAS vs the year before",
    stack: ["Figma", "Midjourney", "Photoshop", "Klaviyo"],
    image: "/images/work-email-campaigns.webp",
    imageAlt: "Holiday campaign email designs in a layered grid",
    problem:
      "Holiday season, no campaign, no time. A full creative system due by Black Friday, five weeks out, one designer.",
    approach:
      "One hero illustration, AI-generated supporting imagery tuned to the brand palette, and an automated Figma layout system. One direction, infinite variations.",
    highlights: [
      {
        heading: "One key art, infinite reframes",
        body: "I painted one hero illustration, then generated 60+ supporting scenes tuned to the brand palette. Every piece felt handmade. One actually was.",
      },
      {
        heading: "Layouts as components",
        body: "Six master layouts as Figma components with variable slots. A new region took 90 seconds, not 9 hours.",
      },
    ],
    brief: "a Black Friday campaign in 5 days",
  },
  {
    slug: "social-content-system",
    title: "Social Content at Scale",
    category: "Brand",
    year: "2020–now",
    client: "Various brands",
    blurb:
      "Thousands of posts across every brand and platform: carousels, statics, stories, ad creative, quote cards.",
    outcome: "5,000+ posts shipped to date",
    stack: ["Figma", "Photoshop", "Canva", "Illustrator", "After Effects"],
    image: "/images/work-social-posts.webp",
    imageAlt: "Grid of social media posts across multiple brands and platforms",
    problem:
      "Different brands, tones, and platforms every week. The job wasn't one system forever. It was fluency: the right answer landing every time.",
    approach:
      "Tool agnostic, fastest path from brief to build. Figma for systems, Photoshop for photo work, Canva for end-of-day turnarounds, Illustrator for vector polish.",
    highlights: [
      {
        heading: "Every brand, every platform",
        body: "Carousels, statics, stories, ad sets, quote cards. Different systems and tones, same standard of polish.",
      },
      {
        heading: "Whatever builds fastest",
        body: "The tool serves the brief, not the reverse. The output matters, the workflow stays invisible.",
      },
    ],
    brief: "daily content that stays on brand",
  },
  {
    slug: "email-campaigns",
    title: "Email Campaigns",
    category: "Brand",
    year: "2021–now",
    client: "Various brands",
    blurb:
      "Promos, launches, invites, and win-back flows. Bold type, custom illustration, built straight into Klaviyo or Mailchimp.",
    outcome: "38% average open rate",
    stack: ["Figma", "Photoshop", "Klaviyo", "Mailchimp", "HTML"],
    image: "/images/work-email-campaign.webp",
    imageAlt: "Five email campaign designs side by side",
    problem:
      "Email is where most brands give up on design. Stock template, beige background, hope for the best.",
    approach:
      "Treat each campaign like a poster. Bold hero, clear hierarchy, one job per email. Designed in Figma, built as production-ready HTML.",
    highlights: [
      {
        heading: "Five campaigns, five voices",
        body: "Holiday promos, launches, brand-pivot announcements. Each email earns its own logic without breaking the system underneath.",
      },
      {
        heading: "Built to survive the inbox",
        body: "Mobile first, dark-mode aware, tested in the real sending platform. No design that dies on contact with the inbox.",
      },
    ],
    brief: "emails people actually open",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
