// src/app/terms/page.js
import LegalPage from '@/components/LegalPage';
import { site } from '@/config/site';

export const metadata = {
  title: 'Terms of Use',
  description: `Terms of use for the ${site.name} app and website.`,
};

export default function TermsPage() {
  return (
    <LegalPage eyebrow="Legal" title="Terms of Use">
      <p>
        By using the {site.name} app or this website you agree to these terms. If you do not agree, please do
        not use them.
      </p>

      <h2>Educational content</h2>
      <p>
        {site.name} provides general, educational information about artificial intelligence and
        superintelligence. Forecasts are predictions made by third parties and are shown with their sources.
        They are not facts, guarantees or professional advice, and should not be relied on for financial,
        legal or other decisions.
      </p>

      <h2>Accuracy</h2>
      <p>
        We work to keep the content accurate and up to date, but we cannot guarantee that it is complete or
        free of errors. Some forecasts change over time; check the linked source for the latest version.
      </p>

      <h2>Third-party links and names</h2>
      <p>
        The app links to external websites we do not control. Names of organizations and people are used only
        to describe them. {site.name} is independent and is not affiliated with or endorsed by any of the
        organizations it describes.
      </p>

      <h2>Use of the app</h2>
      <p>
        You may use the app for personal, non-commercial purposes. Do not try to disrupt the service, overload
        our servers or copy the content in bulk.
      </p>

      <h2>Availability and liability</h2>
      <p>
        The app is provided “as is”. We may change or discontinue features at any time. To the extent
        permitted by law, we are not liable for any loss arising from your use of the app or this website.
      </p>

      <h2>Changes</h2>
      <p>We may update these terms. The date at the top shows when they last changed.</p>

      <h2>Contact</h2>
      <p>
        <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>
      </p>
    </LegalPage>
  );
}
