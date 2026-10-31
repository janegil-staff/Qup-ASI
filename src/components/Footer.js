// src/components/Footer.js
import Link from 'next/link';
import { site } from '@/config/site';

export default function Footer({ t }) {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <img src="/logo-mark.svg" alt="" width={28} height={28} />
          <span>
            © {new Date().getFullYear()} {site.developer}
          </span>
        </div>
        <nav>
          <Link href="/concepts">{t('tabs.explore')}</Link>
          <Link href="/forecasts">{t('tabs.forecasts')}</Link>
          <Link href="/timeline">{t('tabs.timeline')}</Link>
          <Link href="/privacy">{t('nav.privacy')}</Link>
          <Link href="/terms">{t('nav.terms')}</Link>
          <Link href="/support">{t('nav.support')}</Link>
        </nav>
      </div>
    </footer>
  );
}
