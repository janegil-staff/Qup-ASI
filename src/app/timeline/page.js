// src/app/timeline/page.js
import { getT } from '@/i18n';
import { apiGet } from '@/lib/api';
import { kindColors } from '@/lib/format';
import { Badge, Empty, PageHero } from '@/components/ui';

export const metadata = { title: 'Timeline' };

export default async function TimelinePage() {
  const { t } = await getT();
  const data = await apiGet('/milestones', { limit: 100, sort: 'year' });
  const items = data?.items || [];

  return (
    <div className="container">
      <PageHero eyebrow={t('tabs.timeline')} title={t('timeline.title')} subtitle={t('timeline.subtitle')} />

      {items.length === 0 ? (
        <Empty text={t('timeline.empty')} />
      ) : (
        <ol className="timeline">
          {items.map((m) => {
            const color = kindColors[m.kind] || '#8b6cff';
            return (
              <li key={m.slug} className="tl-item" style={{ '--c': color }}>
                <span className="tl-year">{m.year}</span>
                <span className="tl-dot" aria-hidden="true" />
                <details className="tl-card card">
                  <summary>
                    <Badge label={t(`kinds.${m.kind}`)} color={color} />
                    <h3>{m.title}</h3>
                    <p className="clamp-2 tl-preview">{m.description}</p>
                  </summary>
                  <p className="tl-full">{m.description}</p>
                  {m.people?.length > 0 && <p className="meta">{m.people.join(', ')}</p>}
                </details>
              </li>
            );
          })}
        </ol>
      )}
    </div>
  );
}
