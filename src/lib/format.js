// src/lib/format.js
export const colors = {
  accent: '#8b6cff',
  accent2: '#22d3ee',
  faint: '#5a6178',
};

export const categoryColors = {
  definition: '#22d3ee',
  theory: '#8b6cff',
  safety: '#34d399',
  governance: '#fbbf24',
  capability: '#60a5fa',
};

export const targetColors = {
  agi: '#22d3ee',
  hlmi: '#60a5fa',
  tai: '#34d399',
  asi: '#8b6cff',
  singularity: '#f472b6',
  faol: '#fbbf24',
};

export const kindColors = {
  idea: '#8b6cff',
  publication: '#60a5fa',
  organization: '#34d399',
  statement: '#fbbf24',
  policy: '#f472b6',
  technical: '#22d3ee',
};

export const typeColors = {
  lab: '#8b6cff',
  research: '#60a5fa',
  nonprofit: '#34d399',
  government: '#fbbf24',
  other: '#5a6178',
};

export function forecastLine(f, t) {
  const made = t('forecasts.made', { year: f.madeYear });
  if (f.medianYear) return `${made} · ${t('forecasts.median', { year: f.medianYear })}`;
  if (f.rangeText) return `${made} · ${f.rangeText}`;
  return made;
}

export function orgYears(org, t) {
  if (!org.founded) return '';
  return org.closed ? `${org.founded}–${org.closed}` : t('orgs.since', { year: org.founded });
}

export function humanize(slug) {
  const s = String(slug || '').replace(/-/g, ' ');
  return s.charAt(0).toUpperCase() + s.slice(1);
}
