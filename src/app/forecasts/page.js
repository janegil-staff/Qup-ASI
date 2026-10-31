// src/app/forecasts/page.js
import { getT, targetLabel } from '@/i18n';
import { apiGet } from '@/lib/api';
import { forecastLine, targetColors } from '@/lib/format';
import { Badge, Card, ChipLinks, Empty, PageHero } from '@/components/ui';
import ForecastChart from '@/components/ForecastChart';

export const metadata = { title: 'Forecasts' };

const TARGETS = ['all', 'agi', 'hlmi', 'tai', 'asi', 'singularity', 'faol'];

export default async function ForecastsPage({ searchParams }) {
  const { target } = await searchParams;
  const { t } = await getT();
  const active = TARGETS.includes(target) ? target : 'all';
  const data = await apiGet('/forecasts', {
    limit: 100,
    sort: '-madeYear',
    target: active === 'all' ? undefined : active,
  });
  const items = data?.items || [];

  const rows = items
    .filter((f) => !f.supersededBy && f.medianYear)
    .sort((a, b) => a.medianYear - b.medianYear)
    .map((f) => ({
      key: f.slug,
      href: `/forecasts/${f.slug}`,
      label: `${targetLabel(t, f.target)} · ${f.forecaster.replace(/\s*\(.*\)/, '')}`,
      year: f.medianYear,
      color: targetColors[f.target],
    }));

  return (
    <div className="container">
      <PageHero eyebrow={t('tabs.forecasts')} title={t('forecasts.title')} subtitle={t('forecasts.subtitle')}>
        <ChipLinks
          basePath="/forecasts"
          param="target"
          value={active}
          options={TARGETS.map((v) => ({
            value: v,
            label: v === 'all' ? t('categories.all') : targetLabel(t, v),
            color: targetColors[v],
          }))}
        />
      </PageHero>

      {rows.length > 0 && <ForecastChart rows={rows} legend={t('forecasts.legend')} />}

      {items.length === 0 ? (
        <Empty text={t('forecasts.empty')} />
      ) : (
        <div className="grid-2 section-tight">
          {items.map((f) => (
            <Card
              key={f.slug}
              href={`/forecasts/${f.slug}`}
              accent={targetColors[f.target]}
              className={f.supersededBy ? 'dimmed' : ''}
            >
              <div className="badges">
                <Badge label={targetLabel(t, f.target)} color={targetColors[f.target]} />
                {f.supersededBy && <Badge label={t('forecasts.updatedLater')} color="#5a6178" />}
              </div>
              <h3>{f.forecaster}</h3>
              <span className="highlight-line">{forecastLine(f, t)}</span>
              <p className="clamp-2">{f.summary}</p>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
