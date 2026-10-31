// src/app/forecasts/[slug]/page.js
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getT, targetLabel } from '@/i18n';
import { apiGet } from '@/lib/api';
import { targetColors } from '@/lib/format';
import { BackLink, Badge } from '@/components/ui';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const f = await apiGet(`/forecasts/${slug}`);
  return f ? { title: `${f.forecaster} forecast`, description: f.summary } : { title: 'Forecast' };
}

export default async function ForecastPage({ params }) {
  const { slug } = await params;
  const { t } = await getT();
  const f = await apiGet(`/forecasts/${slug}`);
  if (!f) notFound();
  const color = targetColors[f.target];

  return (
    <article className="container detail">
      <BackLink href="/forecasts" label={t('tabs.forecasts')} />
      <Badge label={targetLabel(t, f.target)} color={color} />
      <h1>{f.forecaster}</h1>
      <p className="detail-meta">
        {t(`types.${f.forecasterType}`)} · {t('forecasts.made', { year: f.madeYear })}
      </p>

      <div className="big-year card" style={{ '--c': color }}>
        <span className="big-year-value">{f.medianYear || '—'}</span>
        <span className="big-year-label">
          {f.medianYear ? t('forecasts.medianLabel') : f.rangeText || t('forecasts.noYear')}
        </span>
      </div>

      <p className="detail-body">{f.summary}</p>

      {f.probabilities?.length > 0 && (
        <section className="card detail-block">
          <h2 className="block-title">{t('forecasts.byYear')}</h2>
          <div className="probs" dir="ltr">
            {f.probabilities.map((p) => (
              <div key={p.year} className="prob-row">
                <span className="prob-year">{p.year}</span>
                <span className="prob-track">
                  <span className="prob-fill" style={{ width: `${p.p * 100}%`, '--c': color }} />
                </span>
                <span className="prob-value">{Math.round(p.p * 100)}%</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {f.supersededBy && (
        <Link href={`/forecasts/${f.supersededBy}`} className="notice">
          ↻ {t('forecasts.updatedNotice')} →
        </Link>
      )}

      <section className="card detail-block">
        <h2 className="block-title">{t('forecasts.source')}</h2>
        <p className="source-title">{f.sourceTitle}</p>
        {f.sourceUrl && (
          <a href={f.sourceUrl} target="_blank" rel="noopener noreferrer" className="button ghost small">
            {t('forecasts.openSource')} ↗
          </a>
        )}
      </section>
    </article>
  );
}
