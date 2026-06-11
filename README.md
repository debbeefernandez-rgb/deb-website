# debfernandez.com

Service portfolio for Deb Fernandez: designer turned product developer. Built with Next.js, TypeScript, Tailwind CSS v4, and Motion. Deploys on Vercel with zero config.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint     # eslint
```

## Deploy on Vercel

1. Push this repo to GitHub.
2. In Vercel, click **Add New Project** and import the repo.
3. Framework preset: Next.js. No environment variables needed. Deploy.
4. Point your domain at the project, then update `site.url` in `src/lib/site.ts` if the domain changes.

## Where things live

| Path | What it is |
| --- | --- |
| `src/lib/site.ts` | All copy that repeats: services, stats, FAQs, testimonials, contact links, availability status |
| `src/lib/projects.ts` | The six case studies. Add a project here and it appears on the home page, /work, the sitemap, and gets its own page |
| `src/app/` | Routes: home, /work, /work/[slug], /about, /contact, 404, sitemap, robots |
| `src/components/home/` | Home page sections in order |
| `src/components/` | Shared pieces: nav, footer, command menu, cursor, reveals, marquee |
| `src/app/globals.css` | Design tokens. The three accent themes (caramel, pink, plum) live here |
| `public/images/` | Optimized webp images |
| `public/og.png` | Social share image |

## Everyday edits

- **Change availability**: edit `site.availability` in `src/lib/site.ts`.
- **Add a project**: add an object to `src/lib/projects.ts` and drop an image in `public/images/`.
- **Change a price, FAQ, or service**: all in `src/lib/site.ts`.
- **Swap the accent**: visitors can click the dot in the logo. Default colors are in `globals.css`.

## Details worth knowing

- Press `⌘K` (or `Ctrl+K`) anywhere for the command menu.
- The intro animation runs once per browser session.
- Every animation respects `prefers-reduced-motion`.
- All pages are static. No server code, no database, nothing to maintain.
