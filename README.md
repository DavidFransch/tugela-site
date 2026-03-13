# Tugela — tugela.ai

Marketing website built with Vite + React + TypeScript.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## Build for production

```bash
npm run build
npm run preview
```

## Pages

- `/` — Home (hero, problem, solution, how it works, testimonials, differentiators, CTA)
- `/services` — Services (4 service lines, industries, process, FAQs)
- `/about` — About (founder bio, experience timeline, values, partners)
- `/contact` — Contact (intake form with chips, sidebar, success state)

## Things to update before launch

1. **About page** — Replace `Your Name` and the avatar placeholder with your real name and photo
2. **Contact form** — Wire up `handleSubmit` in `src/pages/Contact.tsx` to a real endpoint:
   - [Formspree](https://formspree.io) — easiest, free tier available
   - [Resend](https://resend.com) — if you want email via API
   - Any backend endpoint you control
3. **Email** — Update `hello@tugela.ai` in `Contact.tsx` and `Footer.tsx` once the domain is live
4. **Testimonials** — The quotes in `Home.tsx` are placeholder copy — replace with real quotes once you have them
5. **Client logos** — The client strip shows text names; swap these for SVG logos when available
6. **Analytics** — Add Plausible or Fathom script tag in `index.html` (privacy-friendly, good for SA)

## Fonts

Uses Google Fonts:
- **Syne** — headings and display text
- **DM Sans** — body copy

Both loaded via `index.html`. No additional config needed.

## Deployment

Works out of the box on:
- [Vercel](https://vercel.com) — `npm run build`, deploy `dist/` folder
- [Netlify](https://netlify.com) — same
- [Cloudflare Pages](https://pages.cloudflare.com) — same, good option for SA latency

For SPA routing (so `/services` works on direct load), add a `_redirects` file to `/public`:
```
/*  /index.html  200
```
This is already standard on Netlify. On Vercel, add a `vercel.json`:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
