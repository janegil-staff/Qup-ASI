// src/app/page.js
import StoreButtons from '@/components/StoreButtons';
import { site } from '@/config/site';
import styles from './page.module.css';

const FEATURES = [
  {
    title: 'Key ideas, explained',
    text: 'From the intelligence explosion to AI alignment: the concepts behind the debate, in plain language and linked together.',
  },
  {
    title: 'Sourced forecasts',
    text: 'Expert surveys, forecasting communities and lab leaders on when AGI and superintelligence could arrive, with every source linked.',
  },
  {
    title: 'A timeline from 1950',
    text: 'The papers, books, statements and policies that shaped thinking about superintelligence, from Turing to today.',
  },
  {
    title: 'Who is working on it',
    text: 'Frontier labs, safety researchers and government institutes, with what they focus on and when they started.',
  },
];

const HIGHLIGHT = [
  { target: 'agi', label: 'Artificial general intelligence' },
  { target: 'hlmi', label: 'Machines better than humans at every task' },
  { target: 'asi', label: 'Artificial superintelligence' },
];

// Latest forecast summary from the ASI API, refreshed every hour
async function getSummary() {
  try {
    const res = await fetch(`${site.apiUrl}/forecasts/summary`, { next: { revalidate: 3600 } });
    if (!res.ok) return null;
    const data = await res.json();
    return Object.fromEntries((data.summary || []).map((s) => [s.target, s]));
  } catch {
    return null;
  }
}

export default async function HomePage() {
  const summary = await getSummary();

  return (
    <div className="container">
      <section className={styles.hero}>
        <div>
          <div className="eyebrow">Artificial superintelligence</div>
          <h1 className={styles.title}>
            When could AI <span>surpass us?</span>
          </h1>
          <p className={styles.lead}>{site.description}</p>
          <StoreButtons />
        </div>
        <div className={styles.logoWrap}>
          <img className={styles.logo} src="/logo-mark.svg" alt="ASI logo" width={380} height={380} />
        </div>
      </section>

      {summary && (
        <section className={styles.section}>
          <div className="eyebrow">Forecasts</div>
          <h2 className={styles.sectionTitle}>What the forecasts say</h2>
          <div className={styles.forecasts}>
            {HIGHLIGHT.filter((h) => summary[h.target]?.medianOfMedians).map((h) => (
              <div key={h.target} className={`card ${styles.forecast}`}>
                <div className="eyebrow">{h.target.toUpperCase()}</div>
                <div className={styles.forecastYear}>{Math.round(summary[h.target].medianOfMedians)}</div>
                <p>{h.label}</p>
              </div>
            ))}
          </div>
          <p className={styles.note}>
            Middle value of current forecasts that give a year. Definitions differ between sources; the app
            shows each forecast with its source.
          </p>
        </section>
      )}

      <section className={styles.section}>
        <div className="eyebrow">Inside the app</div>
        <h2 className={styles.sectionTitle}>Everything in one place</h2>
        <div className={styles.features}>
          {FEATURES.map((f) => (
            <div key={f.title} className={`card ${styles.feature}`}>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
