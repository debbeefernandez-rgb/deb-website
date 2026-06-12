# debfernandez.com

Service portfolio for Deb Fernandez: designer turned product developer. Built with Next.js, TypeScript, Tailwind CSS v4, and Motion. The build is a full static export (`out/`), so it deploys to Netlify, Vercel, or any host that serves files.

## Run it

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # builds the static site into out/
npx http-server out  # preview the production build
npm run lint         # eslint
```

## Deploy on Netlify

1. Log into Netlify, click **Add new site > Import an existing project**, pick GitHub, choose this repo.
2. Netlify reads `netlify.toml` automatically: build command `npm run build`, publish directory `out`. Change nothing.
3. Deploy. Every push to `main` redeploys.
4. Add your domain under **Domain management**, then update `site.url` in `src/lib/site.ts` if the domain changes.

No environment variables, no functions, no database. The 404 page works out of the box because Netlify serves `404.html`.

## Deploy on Vercel

Same idea: **Add New Project**, import the repo, deploy. Vercel detects Next.js and serves the static export. No settings needed.

## Where things live

| Path | What it is |
| --- | --- |
| `src/lib/site.ts` | All copy that repeats: services, stats, FAQs, testimonials, contact links, availability status |
| `src/lib/projects.ts` | The six case studies. Add a project here and it appears on the home page, /work, the sitemap, and gets its own page |
| `src/app/` | Routes: home, /work, /work/[slug], /about, /contact, 404, sitemap, robots |
| `src/components/home/` | Home page sections in order |
| `src/components/` | Shared pieces: nav, footer, command menu, cursor, reveals, marquee |
| `src/app/globals.css` | Design tokens. The three accent themes (caramel, pink, plum) live here |
| `src/fonts/` | Geist and Geist Mono variable fonts, self-hosted, pulled from the original site file |
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
