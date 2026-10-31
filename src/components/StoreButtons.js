// src/components/StoreButtons.js
import { site } from '@/config/site';

function StoreButton({ href, store }) {
  if (!href) {
    return (
      <span className="store-button" aria-disabled="true">
        <small>Coming soon to</small>
        <strong>{store}</strong>
      </span>
    );
  }
  return (
    <a className="store-button live" href={href} target="_blank" rel="noopener noreferrer">
      <small>Download on</small>
      <strong>{store}</strong>
    </a>
  );
}

export default function StoreButtons() {
  return (
    <div className="store-buttons">
      <StoreButton href={site.appStoreUrl} store="App Store" />
      <StoreButton href={site.playStoreUrl} store="Google Play" />
    </div>
  );
}
