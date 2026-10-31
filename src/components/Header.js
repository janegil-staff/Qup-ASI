// src/components/Header.js
import Link from 'next/link';
import NavLinks from './NavLinks';
import LanguagePicker from './LanguagePicker';
import { LANGUAGES } from '@/i18n/languages';

export default function Header({ t, lang }) {
  const links = [
    { href: '/concepts', label: t('tabs.explore') },
    { href: '/forecasts', label: t('tabs.forecasts') },
    { href: '/timeline', label: t('tabs.timeline') },
    { href: '/organizations', label: t('tabs.orgs') },
    { href: '/search', label: t('tabs.search') },
  ];

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand">
          <img src="/logo-mark.svg" alt="" width={34} height={34} />
          <span>
            Qup <b>ASI</b>
          </span>
        </Link>
        <NavLinks links={links} />
        <LanguagePicker lang={lang} languages={LANGUAGES} label={t('common.language')} />
      </div>
    </header>
  );
}

