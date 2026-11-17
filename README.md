# System Inn — Corporate Website

Next.js (App Router) · TypeScript (strict) · Tailwind CSS v4 · Motion · Lucide React

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Configuration (`.env.example`)

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Production domain. Enables canonical URL, sitemap/robots URLs, JSON-LD `url`. |
| `NEXT_PUBLIC_FORM_ENDPOINT` | Optional form service (e.g. Formspree) accepting a JSON POST. If empty, the contact form uses a `mailto:` fallback. |

## Content

All company details, services, reasons, process steps and projects live in `src/data/company.ts`.
Add a project by appending to the `projects` array (record only verified facts).

## Logo

`public/logo/system-inn-logo.svg` and `src/app/icon.svg` are stand-in artwork. Replace them with the
official logo (same file names) and everything updates.

## Deploy to Vercel

Push to a Git repository, import it in Vercel (framework auto-detected as Next.js), set the
environment variables above, and deploy.
