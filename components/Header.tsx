'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Container } from './Container';

const nav = [
  ['Services', '/services'],
  ['Resources', '/resources'],
  ['Topics', '/topics'],
  ['Compliance', '/compliance'],
  ['Contact', '/contact'],
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-midnight/90 text-white backdrop-blur-xl">
      <Container>
        <div className="flex h-[4.5rem] items-center justify-between py-3">
          <Link href="/" className="group flex items-center gap-3" aria-label="PeptideBrand home">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan/40 bg-cyan/10 font-mono text-sm font-black text-cyan shadow-glow">PB</span>
            <span className="text-lg font-black tracking-tight">PeptideBrand</span>
          </Link>
          <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
            {nav.map(([label, href]) => <Link key={href} href={href} className="text-sm font-semibold text-white/70 transition hover:text-cyan">{label}</Link>)}
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <Link href="/resources/how-to-start-a-peptide-brand" className="text-sm font-semibold text-white/70 hover:text-white">Launch guide</Link>
            <Link href="/quote" className="rounded-full border border-cyan/40 bg-cyan px-4 py-2 text-sm font-black text-midnight shadow-glow transition hover:bg-white">Get a Quote</Link>
          </div>
          <button type="button" className="rounded-full border border-white/15 px-4 py-2 text-sm font-bold text-white md:hidden" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-navigation">
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
        {open && (
          <nav id="mobile-navigation" className="grid gap-2 border-t border-white/10 py-4 md:hidden" aria-label="Mobile navigation">
            {nav.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)} className="rounded-2xl bg-white/10 px-4 py-3 text-sm font-semibold text-white/80">{label}</Link>)}
            <Link href="/quote" onClick={() => setOpen(false)} className="rounded-2xl bg-cyan px-4 py-3 text-center text-sm font-black text-midnight">Get a Quote</Link>
          </nav>
        )}
      </Container>
    </header>
  );
}
