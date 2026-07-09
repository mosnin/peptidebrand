import Image from 'next/image';
import { Button } from './Button';
import { ChromatogramVisual } from './ChromatogramVisual';
import { Container } from './Container';
import { brandAssets } from '@/lib/assets';
import type { SEOPage } from '@/lib/seo-page-map';

export function PageHero({ page, eyebrow }: { page: SEOPage; eyebrow: string }) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-mist py-16 text-navy sm:py-24">
      <Image src={brandAssets.molecularMap} alt="" fill priority sizes="100vw" className="object-cover opacity-[0.07]" />
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/50" />
      <Container className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue">{eyebrow}</p>
          <h1 className="mt-5 max-w-4xl font-display text-5xl font-bold tracking-tight sm:text-6xl">{page.h1}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">{page.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={page.cta.href} size="lg">{page.cta.label}</Button>
            <Button href="/compliance" variant="secondary" size="lg">Compliance stance</Button>
          </div>
        </div>
        <ChromatogramVisual />
      </Container>
    </section>
  );
}
