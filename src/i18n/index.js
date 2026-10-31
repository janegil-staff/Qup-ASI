// src/i18n/index.js
// Server-side translations. The chosen language is stored in the "lang" cookie.
import { cookies } from 'next/headers';
import { resources } from './languages';

const RTL = ['ar', 'he'];

export async function getLang() {
  const store = await cookies();
  const value = store.get('lang')?.value;
  return value && resources[value] ? value : 'en';
}

export function makeT(lang) {
  const dict = resources[lang]?.translation || {};
  const en = resources.en.translation;
  return (key, vars) => {
    const [group, name] = key.split('.');
    let text = dict[group]?.[name] ?? en[group]?.[name] ?? key;
    if (vars) {
      for (const [k, v] of Object.entries(vars)) text = text.replaceAll(`{{${k}}}`, String(v));
    }
    return text;
  };
}

export async function getT() {
  const lang = await getLang();
  return { lang, dir: RTL.includes(lang) ? 'rtl' : 'ltr', t: makeT(lang) };
}

// AGI and HLMI stay as abbreviations in every language
export function targetLabel(t, target) {
  if (target === 'agi') return 'AGI';
  if (target === 'hlmi') return 'HLMI';
  return t(`targets.${target}`);
}
