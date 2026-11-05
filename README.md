# Daniel Rosario — Portfolio

Light, editorial portfolio for **Daniel Rosario** (Senior Full Stack AI Engineer). Built with Next.js so it stays free on Vercel’s hobby plan.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command        | What it does              |
| -------------- | ------------------------- |
| `npm run dev`  | Start local dev server    |
| `npm run build`| Production build          |
| `npm run start`| Serve the production build|
| `npm run lint` | Run ESLint                |

## Edit content

All copy lives in TypeScript modules — no CMS required:

- `src/content/site.ts` — name, hero line, about, contact links
- `src/content/projects.ts` — case studies
- `src/content/skills.ts` — craft flow + skill groups

Resume PDF: `public/Daniel_Rosario_Resume.pdf`

## Deploy to Vercel (free)

1. Push this repo to GitHub (or GitLab / Bitbucket).
2. Go to [https://vercel.com/new](https://vercel.com/new) and import the repo.
3. Framework preset: **Next.js** (auto-detected). Leave build settings default.
4. Click **Deploy**.

Every push to `main` redeploys for free on the Hobby plan. Custom domain is optional and free with Vercel DNS.

### CLI alternative

```bash
npm i -g vercel
vercel
```

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Google fonts via `next/font` (Fraunces + DM Sans)
