// src/components/LanguagePicker.js
'use client';

import { useTransition } from 'react';
import { useRouter } from 'next/navigation';

export default function LanguagePicker({ lang, languages, label }) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  const change = (e) => {
    document.cookie = `lang=${e.target.value}; path=/; max-age=31536000; samesite=lax`;
    startTransition(() => router.refresh());
  };

  return (
    <label className={`lang-picker${pending ? ' pending' : ''}`}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
      </svg>
      <span className="sr-only">{label}</span>
      <select value={lang} onChange={change} aria-label={label}>
        {languages.map((l) => (
          <option key={l.code} value={l.code}>
            {l.name}
          </option>
        ))}
      </select>
    </label>
  );
}
