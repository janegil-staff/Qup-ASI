// src/app/layout.js
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getT } from '@/i18n';
import { site } from '@/config/site';

const inter = Inter({ subsets: ['latin', 'latin-ext', 'cyrillic', 'greek', 'vietnamese'], display: 'swap' });

export const metadata = {
  metadataBase: new URL('https://qupasi.com'),
  title: {
    default: `${site.name} – ${site.tagline}`,
    template: `%s – ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: `${site.name} – ${site.tagline}`,
    description: site.description,
    url: 'https://qupasi.com',
    siteName: site.name,
    images: ['/og.png'],
  },
};

export const viewport = {
  themeColor: '#06070c',
};

export default async function RootLayout({ children }) {
  const { lang, dir, t } = await getT();

  return (
    <html lang={lang} dir={dir} className={inter.className}>
      <body>
        <div className="bg-glow" aria-hidden="true" />
        <Header t={t} lang={lang} />
        <main>{children}</main>
        <Footer t={t} />
      </body>
    </html>
  );
}
