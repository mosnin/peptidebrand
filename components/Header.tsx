'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Container } from './Container';
import { Logo } from './Logo';
import { resourceLinks, serviceMegaMenu } from '@/lib/nav';

const simpleNav = [
  ['Resources', '/resources'],
  ['Compliance', '/compliance'],
  ['Contact', '/contact'],
];

export function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const servicesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!servicesOpen) return;
    function handlePointerDown(event: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) setServicesOpen(false);
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setServicesOpen(false);
    }
    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [servicesOpen]);

  function openServices() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  }

  function scheduleCloseServices() {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 150);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 text-navy backdrop-blur-xl">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Logo />
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
            <div ref={servicesRef} className="relative" onMouseEnter={openServices} onMouseLeave={scheduleCloseServices}>
              <button
                type="button"
                className="flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-bold text-ink transition hover:bg-mist hover:text-blue"
                aria-haspopup="true"
                aria-expanded={servicesOpen}
                onClick={() => setServicesOpen(true)}
              >
                Services
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true" className={`transition ${servicesOpen ? 'rotate-180' : ''}`}><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
              </button>
              {servicesOpen && (
                <div className="absolute left-1/2 top-full z-40 mt-3 w-[min(90vw,880px)] -translate-x-1/2 rounded-3xl border border-slate-200 bg-white p-6 shadow-glow" role="menu">
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {serviceMegaMenu.map((group) => (
                      <div key={group.title}>
                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal">{group.title}</p>
                        <div className="mt-3 grid gap-3">
                          {group.links.map((link) => (
                            <Link key={link.href} href={link.href} onClick={() => setServicesOpen(false)} className="block rounded-2xl p-2 transition hover:bg-mist">
                              <span className="block text-sm font-bold text-navy">{link.label}</span>
                              <span className="mt-0.5 block text-xs leading-5 text-slate-500">{link.description}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-navy px-6 py-5 text-white">
                    <div>
                      <p className="text-sm font-black">100% free 1-on-1 consultations — every time.</p>
                      <p className="mt-1 text-xs text-white/70">USA-based manufacturers only. 99%+ purity. No cost to connect with a supplier.</p>
                    </div>
                    <Link href="/quote" onClick={() => setServicesOpen(false)} className="shrink-0 rounded-full bg-cyan px-5 py-2.5 text-sm font-black text-midnight transition hover:bg-white">Get a Free Quote</Link>
                  </div>
                </div>
              )}
            </div>
            {simpleNav.map(([label, href]) => (
              <Link key={href} href={href} className="rounded-full px-4 py-2 text-sm font-bold text-ink transition hover:bg-mist hover:text-blue">{label}</Link>
            ))}
          </nav>
          <div className="hidden items-center gap-3 lg:flex">
            <Link href="/quote" className="rounded-full border border-blue/20 bg-blue px-5 py-2.5 text-sm font-black text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-teal">Get a Free Quote</Link>
          </div>
          <button type="button" className="rounded-full border border-slate-200 px-4 py-2 text-sm font-bold text-navy lg:hidden" onClick={() => setMobileOpen((value) => !value)} aria-expanded={mobileOpen} aria-controls="mobile-navigation">
            {mobileOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </Container>

      {mobileOpen && (
        <div id="mobile-navigation" className="fixed left-0 right-0 top-20 z-40 h-[calc(100vh-5rem)] overflow-y-auto bg-white lg:hidden" aria-label="Mobile navigation">
          <Container className="grid gap-8 py-8">
            <div className="rounded-3xl bg-navy p-5 text-white">
              <p className="text-sm font-black">100% free 1-on-1 consultations</p>
              <p className="mt-1 text-xs text-white/70">USA-based manufacturers, 99%+ purity, hundreds of vetted partners — free to connect, always.</p>
            </div>
            {serviceMegaMenu.map((group) => (
              <div key={group.title}>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal">{group.title}</p>
                <div className="mt-3 grid gap-1">
                  {group.links.map((link) => (
                    <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="rounded-2xl px-4 py-3 text-base font-bold text-navy transition hover:bg-mist">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal">Resources</p>
              <div className="mt-3 grid gap-1">
                {resourceLinks.map((link) => (
                  <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="rounded-2xl px-4 py-3 text-base font-bold text-navy transition hover:bg-mist">{link.label}</Link>
                ))}
              </div>
            </div>
            <div className="grid gap-1">
              {simpleNav.map(([label, href]) => (
                <Link key={href} href={href} onClick={() => setMobileOpen(false)} className="rounded-2xl px-4 py-3 text-base font-bold text-navy transition hover:bg-mist">{label}</Link>
              ))}
            </div>
            <Link href="/quote" onClick={() => setMobileOpen(false)} className="rounded-full bg-blue px-5 py-4 text-center text-base font-black text-white shadow-glow">Get a Free Quote</Link>
          </Container>
        </div>
      )}
    </header>
  );
}
