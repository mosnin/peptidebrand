import Image from 'next/image';
import { Button } from './Button';
import { Container } from './Container';
import { brandAssets } from '@/lib/assets';
import type { SEOPage } from '@/lib/seo-page-map';

export function PageHero({ page, eyebrow }: { page: SEOPage; eyebrow: string }) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-mist py-16 text-navy sm:py-24">
      <Image src={brandAssets.molecularMap} alt="" fill priority sizes="100vw" className="object-cover opacity-[0.05]" quality={90} />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-white/60" />
      <Container className="relative mx-auto max-w-3xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue">{eyebrow}</p>
        <h1 className="mx-auto mt-5 font-display text-5xl font-bold tracking-tight sm:text-6xl">{page.h1}</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">{page.intro}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href={page.cta.href} size="lg">{page.cta.label}</Button>
          <Button href="/compliance" variant="secondary" size="lg">Compliance stance</Button>
        </div>
      </Container>
    </section>
  );
}
