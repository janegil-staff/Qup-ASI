// src/app/support/page.js
import LegalPage from '@/components/LegalPage';
import { site } from '@/config/site';

export const metadata = {
  title: 'Support',
  description: `Get help with the ${site.name} app.`,
};

const FAQ = [
  {
    q: 'Do I need an account?',
    a: 'No. The app works without sign-in, and it does not collect personal data.',
  },
  {
    q: 'How do I change the language?',
    a: 'Tap the globe button at the top of any screen and pick one of the 35 languages. The app interface is translated; the articles and forecast summaries are currently in English.',
  },
  {
    q: 'Where do the forecasts come from?',
    a: 'From published expert surveys, forecasting communities, researchers and AI lab leaders. Open any forecast in the app to see its source.',
  },
  {
    q: 'Why do the forecast years differ so much?',
    a: 'Sources define AGI, human-level AI and superintelligence differently, and they were made at different times. The app groups forecasts by what they predict so you can compare like with like.',
  },
  {
    q: 'The app shows an error or no content.',
    a: 'Check your internet connection and pull down to refresh. If the problem continues, email us and tell us which screen it happens on.',
  },
  {
    q: 'I found a mistake or want to suggest a source.',
    a: 'We would love to hear about it. Email us with the details and a link to the source.',
  },
];

export default function SupportPage() {
  return (
    <LegalPage eyebrow="Help" title="Support" showUpdated={false}>
      <div className="card">
        <p style={{ margin: 0 }}>
          Need help, found a bug or have feedback? Email{' '}
          <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>. We usually reply within a few
          days.
        </p>
      </div>

      <h2>Frequently asked questions</h2>
      {FAQ.map((item) => (
        <div key={item.q}>
          <h3 style={{ marginBottom: 4 }}>{item.q}</h3>
          <p style={{ marginTop: 0 }}>{item.a}</p>
        </div>
      ))}
    </LegalPage>
  );
}
