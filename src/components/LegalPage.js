// src/components/LegalPage.js
import { site } from '@/config/site';

export default function LegalPage({ eyebrow, title, showUpdated = true, children }) {
  return (
    <article className="container legal">
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <h1>{title}</h1>
      {showUpdated ? <p className="updated">Last updated: {site.legalUpdated}</p> : <div style={{ height: 24 }} />}
      {children}
    </article>
  );
}
