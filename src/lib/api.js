// src/lib/api.js
import { site } from '@/config/site';

// GET from the ASI API. Cached for an hour; returns null on any error.
export async function apiGet(path, params = {}) {
  const query = Object.entries(params)
    .filter(([, v]) => v !== undefined && v !== null && v !== '')
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join('&');
  try {
    const res = await fetch(`${site.apiUrl}${path}${query ? `?${query}` : ''}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}
