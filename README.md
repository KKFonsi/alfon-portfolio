# Kevin Kyle S. Alfon Portfolio

Personal portfolio website for Kevin Kyle S. Alfon, an Information Technology student building web, Android, desktop, and academic software projects.

## Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS

## Local Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000` to view the site locally. If that port is already in use, run Next.js on another port.

## Commands

```bash
npm run lint
npm run build
```

## Main Routes

- `/`
- `/about`
- `/projects`
- `/projects/transity`
- `/projects/kitatrack`
- `/projects/reviewvault`
- `/projects/campus-creatives`

## Configuration

Set `NEXT_PUBLIC_SITE_URL` to the verified production site origin before deployment. It is used for metadata, canonical URLs, `robots.txt`, and `sitemap.xml`.

Email and resume actions are centralized in `src/data/site.ts`. The resume PDF path is configured, but the public PDF should only be added after confirming it is safe for public distribution.

## Content Updates

- Site identity and public contact configuration: `src/data/site.ts`
- Navigation items: `src/data/navigation.ts`
- Skills: `src/data/skills.ts`
- Project summaries and case-study data: `src/data/projects.ts`

## Deployment Notes

The project uses the standard Next.js build command:

```bash
npm run build
```

No custom Vercel configuration is required for the current implementation. Deployment has not been verified from this workspace.

## Repository Safety

Do not commit secrets, API keys, credentials, private documents, personal identification numbers, home addresses, or unapproved resume files.
