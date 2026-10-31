// src/app/concepts/[slug]/page.js
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getT } from '@/i18n';
import { apiGet } from '@/lib/api';
import { categoryColors, humanize } from '@/lib/format';
import { BackLink, Badge } from '@/components/ui';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const c = await apiGet(`/concepts/${slug}`);
  return c ? { title: c.name, description: c.summary } : { title: 'Concept' };
}

export default async function ConceptPage({ params }) {
  const { slug } = await params;
  const { t } = await getT();
  const c = await apiGet(`/concepts/${slug}`);
  if (!c) notFound();
  const color = categoryColors[c.category];

  return (
    <article className="container detail">
      <BackLink href="/concepts" label={t('tabs.explore')} />
      <Badge label={t(`categories.${c.category}`)} color={color} />
      <h1>{c.name}</h1>
      {(c.originator || c.year) && (
        <p className="detail-meta">{[c.originator, c.year].filter(Boolean).join(' · ')}</p>
      )}
      <p className="detail-body">{c.summary}</p>

      {c.related?.length > 0 && (
        <section className="detail-block">
          <h2 className="block-title">{t('concept.related')}</h2>
          <div className="chips">
            {c.related.map((r) => (
              <Link key={r} href={`/concepts/${r}`} className="chip active" style={{ '--c': color }}>
                {humanize(r)}
              </Link>
            ))}
          </div>
        </section>
      )}

      {c.tags?.length > 0 && (
        <section className="detail-block">
          <h2 className="block-title">{t('concept.tags')}</h2>
          <div className="chips">
            {c.tags.map((tag) => (
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
