// src/components/NavLinks.js
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLinks({ links }) {
  const pathname = usePathname();
  return (
    <nav className="main-nav">
      {links.map((l) => {
        const active = pathname === l.href || pathname.startsWith(`${l.href}/`);
        return (
          <Link key={l.href} href={l.href} className={active ? 'active' : undefined}>
            {l.label}
          </Link>
        );
      })}
    </nav>
  );
}
