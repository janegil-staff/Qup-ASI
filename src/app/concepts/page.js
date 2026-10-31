// src/app/concepts/page.js
import { getT } from '@/i18n';
import { apiGet } from '@/lib/api';
import { categoryColors } from '@/lib/format';
import { Badge, Card, ChipLinks, Empty, PageHero } from '@/components/ui';

export const metadata = { title: 'Concepts' };

const CATEGORIES = ['all', 'definition', 'theory', 'safety', 'governance'];

export default async function ConceptsPage({ searchParams }) {
  const { category } = await searchParams;
  const { t } = await getT();
  const active = CATEGORIES.includes(category) ? category : 'all';
  const data = await apiGet('/concepts', { limit: 100, category: active === 'all' ? undefined : active });
  const items = data?.items || [];

  return (
    <div className="container">
      <PageHero eyebrow="ASI" title={t('explore.title')} subtitle={t('explore.subtitle')}>
        <ChipLinks
          basePath="/concepts"
          param="category"
          value={active}
          options={CATEGORIES.map((c) => ({ value: c, label: t(`categories.${c}`), color: categoryColors[c] }))}
        />
      </PageHero>

      {items.length === 0 ? (
        <Empty text={t('explore.empty')} />
      ) : (
        <div className="grid-3">
          {items.map((c) => (
            <Card key={c.slug} href={`/concepts/${c.slug}`} accent={categoryColors[c.category]}>
              <Badge label={t(`categories.${c.category}`)} color={categoryColors[c.category]} />
              <h3>{c.name}</h3>
              <p className="clamp-3">{c.summary}</p>
              {(c.originator || c.year) && (
                <span className="meta">{[c.originator, c.year].filter(Boolean).join(' · ')}</span>
              )}
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
