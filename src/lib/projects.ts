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
    slug: "rotypeaks",
    title: "RotyPeaks Ridge Camp",
    category: "Website",
    year: "2026",
    client: "Mountain campsite, Bukidnon",
    blurb:
      "A redesign and full rebuild for a viral mountain campsite in Bukidnon. Sell the right product, load 7x faster, and feel like standing on the ridge.",
    outcome: "6.7s to 0.9s load, 7x faster",
    stack: ["HTML", "CSS", "Vanilla JS", "Cloudways"],
    image: "/images/work-rotypeaks.webp",
    imageAlt:
      "The RotyPeaks homepage: a scenic mountain view hero over a sea of clouds in Bukidnon",
    problem:
      "RotyPeaks is a ridge campground famous for 360 mountain views, a sea of clouds, and a comfort room that went viral on TikTok. The site matched none of it. It led with camping when most of the revenue comes from ₱300 day tours, the main photo took 6.7 seconds to appear on mobile data, and duplicate listings plus an open contact form were pulling in spam and fake bookings.",
    approach:
      "I redesigned the brand experience and rebuilt the site from scratch in plain HTML, CSS, and vanilla JavaScript. No framework, no build step, nothing between the visitor and the view. The hero now opens with the scenery, the day tours that actually earn sit at the top, and every stay has its own page.",
    highlights: [
      {
        heading: "Revenue-first, and 7x faster",
        body: "The main photo went from 6.7 seconds to 0.9, and Google PageSpeed from 60 to 95, with 100 on best practices and SEO. Day tours lead, duplicates are gone, and guests arrive with the right expectations.",
      },
      {
        heading: "Immersive without a framework",
        body: "Clouds drift across the hero, fog rolls under the ridge, the logo rises out of the mountains on scroll, and a slider compares sunrise against sunset. A webp photo pipeline and a closed booking funnel ended the spam problem outright.",
      },
    ],
    brief: "sell the day tours, load fast",
    liveUrl: "https://rotypeaks.com",
  },
  {
    slug: "social-agent",
    title: "Social Agent",
    category: "AI product",
    year: "2025",
    client: "A brand client · now a public sandbox",
    blurb:
      "An AI social media generator: it drafts the posts, builds the visuals, and queues everything for one-click approval. Built for a brand client, then stripped of their data and rebranded as a sandbox you can try.",
    outcome: "10x output, same headcount",
    stack: ["Claude Code", "Claude", "Publer"],
    image: "/images/demo-queue.webp",
    imageAlt:
      "The Social Agent queue: drafted posts awaiting approval, with retry, reschedule, and regenerate controls",
    problem:
      "One content lead, an impossible backlog, and a publishing goal the team could not reach by hand.",
    approach:
      "I built the pipeline end to end: brand voice cards, AI drafting, image generation, and a review queue where a human approves, rejects, or regenerates before anything publishes. Then I stripped the client data, rebranded the raw build, and put it online as a live sandbox.",
    highlights: [
      {
        heading: "Human in the loop",
        body: "AI never publishes on its own. Drafts land in the queue. One click approves, one regenerates, one edits. Failed publishes float to the top so you can retry them first.",
      },
      {
        heading: "Don't trust the screenshot",
        body: "The screenshot is the real app. So is the demo: the same build I shipped, client data stripped, rebranded, live for anyone to click through.",
      },
    ],
    brief: "content at scale without hiring",
    liveUrl: "https://socialmedia.debfernandez.com/queue",
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
    client: "B2B SaaS, a Salesforce vendor, startups",
    blurb:
      "2,000+ designs across every brand and platform: carousels, statics, stories, ad creative, quote cards.",
    outcome: "2,000+ designs shipped to date",
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
    outcome: "Designed like posters, shipped as HTML",
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
