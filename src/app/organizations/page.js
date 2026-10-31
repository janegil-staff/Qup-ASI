// src/app/organizations/page.js
import { getT } from '@/i18n';
import { apiGet } from '@/lib/api';
import { orgYears, typeColors } from '@/lib/format';
import { Badge, Card, ChipLinks, Empty, PageHero } from '@/components/ui';

export const metadata = { title: 'Organizations' };

const TYPES = ['all', 'lab', 'research', 'nonprofit', 'government'];

export default async function OrganizationsPage({ searchParams }) {
  const { type } = await searchParams;
  const { t } = await getT();
  const active = TYPES.includes(type) ? type : 'all';
  const data = await apiGet('/organizations', { limit: 100, type: active === 'all' ? undefined : active });
  const items = data?.items || [];

  return (
    <div className="container">
      <PageHero eyebrow={t('sections.organizations')} title={t('orgs.title')} subtitle={t('orgs.subtitle')}>
        <ChipLinks
          basePath="/organizations"
          param="type"
          value={active}
          options={TYPES.map((v) => ({
            value: v,
            label: v === 'all' ? t('categories.all') : t(`orgTypes.${v}`),
            color: typeColors[v],
          }))}
        />
      </PageHero>

      {items.length === 0 ? (
        <Empty text={t('orgs.empty')} />
      ) : (
        <div className="grid-3">
          {items.map((o) => (
            <Card key={o.slug} href={`/organizations/${o.slug}`} accent={typeColors[o.type]}>
              <Badge label={t(`orgTypes.${o.type}`)} color={typeColors[o.type]} />
              <h3>{o.name}</h3>
              <span className="highlight-line">{[orgYears(o, t), o.country].filter(Boolean).join(' · ')}</span>
              <p className="clamp-3">{o.focus}</p>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
