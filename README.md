# Qup ASI website

Next.js (App Router, plain JavaScript) website for Qup ASI, with the same content as the app:

- `/` landing page with live forecast numbers
- `/concepts` + `/concepts/[slug]` key ideas, filter by category
- `/forecasts` + `/forecasts/[slug]` chart, list, filter by target, probabilities and sources
- `/timeline` milestones from 1950, click to expand
- `/organizations` + `/organizations/[slug]` filter by type
- `/search?q=` search across everything
- `/privacy`, `/terms`, `/support`

All data comes from the ASI API (`src/config/site.js` → `apiUrl`), rendered on the server and cached for an hour.

## Languages

35 languages, same as the app (`src/locales/*.json`). The language picker in the header stores the choice in a
`lang` cookie; English is the default. Arabic and Hebrew switch the layout to right-to-left.
Content from the API (concepts, summaries) and the legal pages are in English.

## Configure

Edit `src/config/site.js`: `supportEmail`, and `appStoreUrl` / `playStoreUrl` when the app is live.

## Run and deploy

```bash
npm install
npm run dev          # http://localhost:3000
npx vercel --prod    # deploy
```
