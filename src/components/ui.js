// src/components/ui.js
// Small shared building blocks used across pages.
import Link from 'next/link';
import { site } from '@/config/site';

export function Badge({ label, color = '#8b6cff' }) {
  return (
    <span className="badge" style={{ '--c': color }}>
      {label}
    </span>
  );
}

export function PageHero({ eyebrow, title, subtitle, children }) {
  return (
    <section className="page-hero">
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <h1>{title}</h1>
      {subtitle && <p className="lead">{subtitle}</p>}
      {children}
    </section>
  );
}

// Filter chips as links, e.g. ?category=safety
export function ChipLinks({ basePath, param, options, value }) {
  return (
    <div className="chips">
      {options.map((o) => {
        const href = o.value === 'all' ? basePath : `${basePath}?${param}=${encodeURIComponent(o.value)}`;
        const active = (value || 'all') === o.value;
        return (
          <Link
            key={o.value}
            href={href}
            scroll={false}
            className={`chip${active ? ' active' : ''}`}
            style={o.color ? { '--c': o.color } : undefined}
          >
            {o.label}
          </Link>
        );
      })}
    </div>
  );
}

export function Card({ href, accent, className = '', children }) {
  const style = accent ? { '--c': accent } : undefined;
  const cls = `card${accent ? ' has-accent' : ''}${href ? ' link-card' : ''} ${className}`;
  if (href) {
    return (
      <Link href={href} className={cls} style={style}>
        {children}
      </Link>
    );
  }
  return (
    <div className={cls} style={style}>
      {children}
    </div>
  );
}

export function Empty({ text }) {
  return <p className="empty">{text}</p>;
}

export function BackLink({ href, label }) {
  return (
    <Link href={href} className="back-link">
      <span aria-hidden="true">←</span> {label}
    </Link>
  );
}

export function StoreButtons({ t }) {
  const items = [
    { href: site.appStoreUrl, store: 'App Store' },
    { href: site.playStoreUrl, store: 'Google Play' },
  ];
  return (
    <div className="store-buttons">
      {items.map((i) =>
        i.href ? (
          <a key={i.store} className="store-button live" href={i.href} target="_blank" rel="noopener noreferrer">
            <small>{t('home.downloadOn')}</small>
            <strong>{i.store}</strong>
          </a>
        ) : (
          <span key={i.store} className="store-button" aria-disabled="true">
            <small>{t('home.comingSoon')}</small>
            <strong>{i.store}</strong>
          </span>
        )
      )}
    </div>
  );
}
