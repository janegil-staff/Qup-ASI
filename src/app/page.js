// src/app/page.js
import Link from 'next/link';
import { getT, targetLabel } from '@/i18n';
import { apiGet } from '@/lib/api';
import { targetColors } from '@/lib/format';
import { Card, StoreButtons } from '@/components/ui';

const HIGHLIGHT = ['agi', 'hlmi', 'asi'];

const ICONS = {
  explore: (
    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm4.2 5.8-2.1 6.3-6.3 2.1 2.1-6.3 6.3-2.1Z" />
  ),
  forecasts: <path d="M3 17l6-6 4 4 8-8M15 7h6v6" />,
  timeline: <path d="M12 6v6l4 2M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z" />,
  orgs: <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6M9 10h.01M15 10h.01" />,
};

export default async function HomePage() {
  const { t } = await getT();
  const data = await apiGet('/forecasts/summary');
  const summary = Object.fromEntries((data?.summary || []).map((s) => [s.target, s]));

  const features = [
    { key: 'explore', href: '/concepts', title: t('tabs.explore'), text: t('home.f1'), color: '#8b6cff' },
    { key: 'forecasts', href: '/forecasts', title: t('tabs.forecasts'), text: t('home.f2'), color: '#22d3ee' },
    { key: 'timeline', href: '/timeline', title: t('tabs.timeline'), text: t('home.f3'), color: '#f472b6' },
    { key: 'orgs', href: '/organizations', title: t('sections.organizations'), text: t('home.f4'), color: '#34d399' },
  ];

  return (
    <div className="container">
      <section className="home-hero">
        <div className="home-hero-text">
          <div className="eyebrow">{t('explore.title')}</div>
          <h1 className="display">{t('home.title')}</h1>
          <p className="lead">{t('home.lead')}</p>
          <div className="hero-actions">
            <Link href="/concepts" className="button primary">
              {t('home.cta')} <span aria-hidden="true">→</span>
            </Link>
            <Link href="/forecasts" className="button ghost">
              {t('tabs.forecasts')}
            </Link>
          </div>
          <StoreButtons t={t} />
        </div>
        <div className="home-hero-art" aria-hidden="true">
          <div className="orbit orbit-1" />
          <div className="orbit orbit-2" />
          <img src="/logo-mark.svg" alt="" width={420} height={420} />
        </div>
      </section>

      {HIGHLIGHT.some((k) => summary[k]?.medianOfMedians) && (
        <section className="section">
          <div className="section-head">
            <div>
              <div className="eyebrow">{t('tabs.forecasts')}</div>
              <h2>{t('home.forecastsTitle')}</h2>
            </div>
            <Link href="/forecasts" className="see-all">
              {t('tabs.forecasts')} →
            </Link>
          </div>
          <div className="grid-3 stats">
            {HIGHLIGHT.filter((k) => summary[k]?.medianOfMedians).map((k) => (
              <Card key={k} href={`/forecasts?target=${k}`} accent={targetColors[k]} className="stat-card">
                <span className="stat-label">{targetLabel(t, k)}</span>
                <span className="stat-year" style={{ '--c': targetColors[k] }}>
                  {Math.round(summary[k].medianOfMedians)}
                </span>
                <span className="stat-meta">
                  {summary[k].earliest !== summary[k].latest
                    ? `${summary[k].earliest} – ${summary[k].latest}`
                    : ' '}
                </span>
              </Card>
            ))}
          </div>
          <p className="note">{t('home.forecastsNote')}</p>
        </section>
      )}

      <section className="section">
        <div className="section-head">
          <div>
            <div className="eyebrow">Qup ASI</div>
            <h2>{t('home.featuresTitle')}</h2>
          </div>
        </div>
        <div className="grid-2">
          {features.map((f) => (
            <Card key={f.key} href={f.href} className="feature-card">
              <span className="feature-icon" style={{ '--c': f.color }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {ICONS[f.key]}
                </svg>
              </span>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
              <span className="arrow" aria-hidden="true">→</span>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
