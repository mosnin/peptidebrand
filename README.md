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

## Vercel deployment

This is a standard Next.js App Router project, so Vercel builds and deploys it with zero extra configuration.

1. Push this repository to GitHub/GitLab/Bitbucket.
2. Import the repository as a new Vercel project.
3. Vercel auto-detects the Next.js framework, build command (`npm run build`), and output — no overrides needed.
4. Deploy.

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

High-severity matches fail CI. The `prebuild` script runs the scanner automatically before `next build`, so Vercel and local production builds stop if risky peptide marketing language is introduced. Allowed operational language includes research-use-only positioning, laboratory research, analytical testing, certificates of analysis, HPLC/LCMS, batch documentation, supplier verification, white label, private label, wholesale, fulfillment, packaging, and labeling.

## Production deployment checklist

Before deploying to Vercel, run:

```bash
npm run compliance:scan
npm run audit:production
npm run typecheck
npm run lint
npm run build
```

Deployment checks:

- Confirm `SITE_URL` or the production domain matches `lib/site.ts` before launch.
- Confirm quote, contact, supplier, white label, lab testing, and resource forms submit successfully to `/api/lead` after the first deploy.
- Confirm thank-you pages remain noindex and excluded from the sitemap.
- Confirm the generated sitemap and robots files are reachable at `/sitemap.xml` and `/robots.txt` after deploy.
- Run a Lighthouse check on mobile and desktop after Vercel deploy.

## Environment variables

No required environment variables are needed for local development. Recommended deployment variables:

- `NEXT_PUBLIC_SITE_URL` — optional canonical site URL override for future multi-environment deployments. The current source of truth is `siteConfig.url` in `lib/site.ts`.

## Lead form handling

Forms post to the `app/api/lead/route.ts` Route Handler, which validates the honeypot field and logs each submission server-side. Wire up an email or CRM integration (e.g. Resend, SendGrid, HubSpot) inside that route handler before launch so leads reach the team instead of only appearing in Vercel function logs.
