# PeptideBrand

Production foundation for a Next.js App Router lead generation site focused on laboratory research-use peptide brand creation, sourcing, white label support, lab testing, COAs, wholesale supply, fulfillment, and launch operations.

## Compliance positioning

All peptide-related content is written for laboratory research use only. The site avoids human consumption, veterinary, treatment, diagnosis, medical benefit, dosing, cycle, protocol, and injection guidance.

## Local development

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Validation

```bash
npm run typecheck
npm run lint
npm run build
```

## Netlify deployment

The repository includes `netlify.toml` configured to run `npm run build`, publish `.next`, and use Netlify's Next.js runtime plugin.

1. Push this repository to GitHub/GitLab/Bitbucket.
2. Create a new Netlify site from the repository.
3. Keep the build command as `npm run build`.
4. Keep the publish directory as `.next`.
5. Deploy.

## Structure

- `app/` — App Router pages, layout, sitemap, robots, and global CSS.
- `components/` — Reusable UI and lead generation components.
- `lib/` — Site configuration, disclaimers, SEO metadata, and schema helpers.

## Compliance copy scanner

Run the peptide marketing copy safety scanner before publishing content:

```bash
npm run compliance:scan
```

The scanner checks `app/`, `components/`, and `lib/` content/page files for risky language categories such as human consumption claims, dosing guidance, injection guidance, treatment or disease claims, cure claims, bodybuilding protocol language, before/after claims, medical benefit claims, and veterinary-use claims. It prints the file path, line, column, matched term, category, and severity for each finding.

High-severity matches fail CI. The `prebuild` script runs the scanner automatically before `next build`, so Netlify and local production builds stop if risky peptide marketing language is introduced. Allowed operational language includes research-use-only positioning, laboratory research, analytical testing, certificates of analysis, HPLC/LCMS, batch documentation, supplier verification, white label, private label, wholesale, fulfillment, packaging, and labeling.

## Production deployment checklist

Before deploying to Netlify, run:

```bash
npm run compliance:scan
npm run audit:production
npm run typecheck
npm run lint
npm run build
```

Deployment checks:

- Confirm `SITE_URL` or the production domain matches `lib/site.ts` before launch.
- Confirm `netlify.toml` uses `npm run build` and publishes `.next`.
- Confirm Netlify detects the Next.js App Router site and applies the modern Next.js/OpenNext adapter during deploy.
- Confirm quote, contact, supplier, white label, lab testing, and resource forms appear in Netlify Forms after the first deploy.
- Confirm thank-you pages remain noindex and excluded from the sitemap.
- Confirm the generated sitemap and robots files are reachable at `/sitemap.xml` and `/robots.txt` after deploy.
- Run a Lighthouse check on mobile and desktop after Netlify deploy.

## Environment variables

No required environment variables are needed for local development. Recommended deployment variables:

- `NEXT_PUBLIC_SITE_URL` — optional canonical site URL override for future multi-environment deployments. The current source of truth is `siteConfig.url` in `lib/site.ts`.
- `NETLIFY_NEXT_PLUGIN_SKIP` — leave unset; Netlify should apply its modern Next.js/OpenNext adapter automatically.
- Form notifications, spam controls, and routing are configured in the Netlify dashboard after forms are detected on deploy.

## Netlify build settings

- Build command: `npm run build`
- Publish directory: `.next`
- Runtime: Netlify modern Next.js/OpenNext adapter is applied automatically for Next.js apps
- Node: use the current Netlify LTS runtime compatible with Next.js 15.
