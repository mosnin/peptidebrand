import Image from 'next/image';
import { Button } from './Button';
import { Container } from './Container';
import { brandAssets } from '@/lib/assets';

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-white sm:py-28">
      <Image src={brandAssets.heroScientists} alt="USA-based laboratory scientists preparing and reviewing research peptide vials" fill sizes="100vw" className="object-cover" quality={90} />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/60" />
      <Container className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-white/70">100% free consultation</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold sm:text-4xl">Plan a compliant research-use peptide brand.</h2>
          <p className="mt-3 max-w-xl text-white/75">Discuss sourcing, white label packaging, COA workflows, testing documentation, and fulfillment with a USA-based manufacturer, at no cost.</p>
        </div>
        <Button href="/quote" variant="onDark" size="lg" className="shrink-0">Request a Quote</Button>
      </Container>
    </section>
  );
}
