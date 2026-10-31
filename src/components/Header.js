// src/components/Header.js
import Link from 'next/link';
import { site } from '@/config/site';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <Link href="/" className="brand">
          <img src="/logo-mark.svg" alt="" width={32} height={32} />
          {site.name}
        </Link>
        <nav className="nav">
          <Link href="/support">Support</Link>
          <Link href="/privacy">Privacy</Link>
        </nav>
      </div>
    </header>
  );
}
