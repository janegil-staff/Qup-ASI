// src/app/organizations/[slug]/page.js
import { notFound } from 'next/navigation';
import { getT } from '@/i18n';
import { apiGet } from '@/lib/api';
import { orgYears, typeColors } from '@/lib/format';
import { BackLink, Badge } from '@/components/ui';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const o = await apiGet(`/organizations/${slug}`);
  return o ? { title: o.name, description: o.focus } : { title: 'Organization' };
}

export default async function OrganizationPage({ params }) {
  const { slug } = await params;
  const { t } = await getT();
  const o = await apiGet(`/organizations/${slug}`);
  if (!o) notFound();

  return (
    <article className="container detail">
      <BackLink href="/organizations" label={t('sections.organizations')} />
      <Badge label={t(`orgTypes.${o.type}`)} color={typeColors[o.type]} />
      <h1>{o.name}</h1>
      <p className="detail-meta">{[orgYears(o, t), o.country].filter(Boolean).join(' · ')}</p>
      <p className="detail-body">{o.focus}</p>

      {o.website && (
        <a href={o.website} target="_blank" rel="noopener noreferrer" className="button primary">
          {t('orgs.visitWebsite')} ↗
        </a>
      )}

      {o.tags?.length > 0 && (
        <section className="detail-block">
          <div className="chips">
            {o.tags.map((tag) => (
              <span key={tag} className="chip static">
                #{tag}
              </span>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
