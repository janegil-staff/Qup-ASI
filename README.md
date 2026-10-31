# ASI website

Next.js (App Router, plain JavaScript) site for the ASI app: landing page, privacy policy, support and terms.

## Before you deploy

Edit `src/config/site.js`:

- `supportEmail`: your real support email (used on privacy, support and terms)
- `appStoreUrl` / `playStoreUrl`: add when the app is live; the buttons show "Coming soon" until then

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
```

## Deploy to Vercel

```bash
npx vercel          # first time: log in, accept the defaults → preview URL
npx vercel --prod   # production URL
```

Or push to GitHub and import the repo at vercel.com/new (framework: Next.js, no settings needed).

## Store URLs

- Privacy Policy URL: `https://<your-domain>/privacy`
- Support URL: `https://<your-domain>/support`
- Marketing URL (optional): `https://<your-domain>/`

The landing page shows live forecast numbers from the ASI API, refreshed every hour.
