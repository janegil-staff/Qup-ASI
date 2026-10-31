// src/app/search/page.js
import { getT, targetLabel } from '@/i18n';
import { apiGet } from '@/lib/api';
import { Card, Empty, PageHero } from '@/components/ui';

export const metadata = { title: 'Search' };

const SECTIONS = [
  { key: 'concepts', titleKey: 'sections.concepts' },
  { key: 'forecasts', titleKey: 'tabs.forecasts' },
  { key: 'organizations', titleKey: 'sections.organizations' },
  { key: 'milestones', titleKey: 'sections.milestones' },
];

function describe(section, item, t) {
  switch (section) {
    case 'concepts':
      return { title: item.name, text: item.summary, href: `/concepts/${item.slug}` };
    case 'forecasts':
      return {
        title: item.forecaster,
        text: `${targetLabel(t, item.target)} · ${t('forecasts.made', { year: item.madeYear })}${
          item.medianYear ? ` · ${t('forecasts.median', { year: item.medianYear })}` : ''
        }`,
        href: `/forecasts/${item.slug}`,
      };
    case 'organizations':
      return { title: item.name, text: item.focus, href: `/organizations/${item.slug}` };
    default:
      return { title: `${item.year} · ${item.title}`, text: item.description, href: '/timeline' };
  }
}

export default async function SearchPage({ searchParams }) {
  const { q = '' } = await searchParams;
  const { t } = await getT();
  const term = String(q).trim();
  const result = term.length >= 2 ? await apiGet('/search', { q: term }) : null;
  const sections = result
    ? SECTIONS.map((s) => ({ ...s, items: result[s.key] || [] })).filter((s) => s.items.length)
    : [];

  return (
    <div className="container">
      <PageHero eyebrow={t('tabs.search')} title={t('search.title')}>
        <form action="/search" method="get" className="search-form" role="search">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
          <input
            type="search"
            name="q"
            defaultValue={term}
            placeholder="alignment, Bostrom, 2047…"
            autoComplete="off"
            aria-label={t('tabs.search')}
          />
          <button type="submit" className="button primary small">
            {t('tabs.search')}
          </button>
        </form>
      </PageHero>

      {!term && <Empty text={t('search.hint')} />}
      {term && sections.length === 0 && <Empty text={t('search.noResults', { q: term })} />}

      {sections.map((s) => (
        <section key={s.key} className="search-section">
          <h2 className="block-title">{t(s.titleKey)}</h2>
          <div className="grid-2">
            {s.items.map((item, i) => {
              const d = describe(s.key, item, t);
              return (
                <Card key={item.slug || i} href={d.href}>
                  <h3>{d.title}</h3>
                  <p className="clamp-2">{d.text}</p>
                </Card>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
