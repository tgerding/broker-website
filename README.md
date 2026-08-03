# Gerding Commercial Real Estate

Portland multifamily brokerage site — Next.js + Tailwind, statically exported, hosted on Netlify. All content lives as JSON in `/content/` so it can be edited on GitHub and auto-deployed.

## Editing the site

Everything the broker changes lives in **`/content/`**:

| File | Controls |
| --- | --- |
| `site.json` | Brand, broker contact info, nav, footer |
| `home.json` | Homepage sections |
| `about.json` | About page |
| `markets.json` | Markets page (3 market profiles) |
| `contact.json` | Contact page copy + form dropdown |
| `properties.json` | Properties page copy (active + closed) |
| `listings-page.json` | `/listings` directory copy, past transactions, notify strip |
| `listings/<slug>.json` | One file per active listing |

### Add a new listing

1. Copy `content/listings/ne-alberta-12unit.json` to `content/listings/<new-slug>.json`.
2. Fill in the fields. The filename becomes the URL: `/listings/<new-slug>/`.
3. Drop photos in `public/images/listings/` and reference them from the JSON (e.g. `"/images/listings/<slug>-hero.jpg"`).
4. Commit — Netlify rebuilds and the new page is live.

## Local development

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # writes static site to /out
```

## Contact form (Netlify Forms)

The `Contact` and `Notify` forms use [Netlify Forms](https://docs.netlify.com/forms/setup/) — no third-party services required. Submissions appear in the Netlify dashboard under **Forms** once the site is deployed. Hidden static forms in `src/components/forms/NetlifyFormsHidden.tsx` allow the Netlify build to detect them at build time.

## Deployment

Netlify auto-detects Next.js. Build config in `netlify.toml`:

```toml
[build]
  command = "next build"
  publish = "out"
```

Static export is enabled in `next.config.ts` (`output: "export"`). No serverless runtime; every page is pre-rendered.
