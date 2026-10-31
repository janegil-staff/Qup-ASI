// src/components/ForecastChart.js
// Dot chart: one row per forecast, dot at its median year, dashed line at today.
import Link from 'next/link';

export default function ForecastChart({ rows, legend, min = 2025, max = 2125, step = 25 }) {
  const pct = (year) => Math.min(Math.max((year - min) / (max - min), 0), 1) * 100;
  const ticks = [];
  for (let y = min; y <= max; y += step) ticks.push(y);
  const now = new Date().getFullYear();

  return (
    <div className="chart card" dir="ltr">
      <div className="chart-rows">
        {rows.map((r) => (
          <Link key={r.key} href={r.href} className="chart-row">
            <span className="chart-label">{r.label}</span>
            <span className="chart-track">
              <span className="chart-now" style={{ left: `${pct(now)}%` }} />
              <span className="chart-line" style={{ left: `${pct(now)}%`, width: `${Math.max(pct(r.year) - pct(now), 0)}%`, '--c': r.color }} />
              <span className="chart-dot" style={{ left: `${pct(r.year)}%`, '--c': r.color }} />
              <span
                className="chart-year"
                style={pct(r.year) > 85 ? { right: `${100 - pct(r.year) + 2.5}%` } : { left: `${pct(r.year) + 2.5}%` }}
              >
                {r.year}
              </span>
            </span>
          </Link>
        ))}
      </div>
      <div className="chart-axis">
        <span className="chart-label" />
        <span className="chart-ticks">
          {ticks.map((tk) => (
            <span key={tk} style={{ left: `${pct(tk)}%` }}>
              {tk}
            </span>
          ))}
        </span>
      </div>
      <p className="chart-legend">{legend}</p>
    </div>
  );
}
