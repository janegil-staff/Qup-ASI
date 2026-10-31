// src/app/privacy/page.js
import LegalPage from '@/components/LegalPage';
import { site } from '@/config/site';

export const metadata = {
  title: 'Privacy Policy',
  description: `Privacy policy for the ${site.name} app and website.`,
};

export default function PrivacyPage() {
  return (
    <LegalPage eyebrow="Legal" title="Privacy Policy">
      <p>
        This policy explains how the {site.name} app (“the app”) and this website handle information. The app
        is developed by {site.developer} (“we”, “us”).
      </p>

      <h2>The short version</h2>
      <ul>
        <li>The app has no accounts and no sign-in.</li>
        <li>We do not collect, store or sell personal data.</li>
        <li>There are no ads, no analytics and no tracking in the app.</li>
      </ul>

      <h2>Information we do not collect</h2>
      <p>
        We do not ask for or collect your name, email address, phone number, location, contacts, photos, or
        any other personal information. We do not use advertising identifiers and we do not track you across
        apps or websites.
      </p>

      <h2>How the app gets its content</h2>
      <p>
        The app loads its content (concepts, forecasts, organizations and milestones) from our own server.
        These requests contain no personal information. Like any web server, our hosting provider may
        automatically record standard technical data such as IP address, time of request and device type in
        server logs. These logs are used only to keep the service running and secure, are not used to identify
        you, and are not combined with other data.
      </p>

      <h2>Data stored on your device</h2>
      <p>
        The app saves your chosen language on your device so it is remembered next time. This setting never
        leaves your device. Deleting the app removes it.
      </p>

      <h2>Links to other websites</h2>
      <p>
        The app links to original sources and to organizations’ websites. These open in your browser and are
        covered by those websites’ own privacy policies.
      </p>

      <h2>This website</h2>
      <p>
        This website does not use cookies, analytics or tracking. It is hosted by Vercel, which may process
        standard technical data such as IP address in server logs to deliver and protect the site.
      </p>

      <h2>Children</h2>
      <p>
        The app is suitable for all ages and does not knowingly collect personal information from anyone,
        including children.
      </p>

      <h2>Your rights</h2>
      <p>
        Because we do not collect personal data, there is normally no personal data for us to access, correct
        or delete. If you have questions about your rights under the GDPR or other privacy laws, contact us
        and we will help.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        If we change how the app handles information, we will update this page and the date at the top.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about privacy: <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>
      </p>
    </LegalPage>
  );
}
