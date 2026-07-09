import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/Container';
import { CTASection } from '@/components/CTASection';
import { FAQSection } from '@/components/FAQSection';
import { InternalLinks } from '@/components/InternalLinks';
import { LeadForm, type LeadFormVariant } from '@/components/LeadForm';
import { PageHero } from '@/components/PageHero';
import { RelatedLinks } from '@/components/RelatedLinks';
import { SEOJsonLd } from '@/components/SEOJsonLd';
import { Section } from '@/components/Section';
import { TrustBadges } from '@/components/TrustBadges';
import { brandAssets } from '@/lib/assets';
import { breadcrumbSchema, faqSchema, serviceSchema } from '@/lib/schema';
import { getServicePageDetail, researchUseDisclaimer } from '@/lib/service-page-details';
import type { SEOPage } from '@/lib/seo-page-map';

function formVariantForSlug(slug: string): LeadFormVariant {
  if (slug === 'white-label-peptides') return 'white-label';
  if (slug === 'peptide-lab-testing' || slug === 'peptide-coa-testing') return 'lab-testing';
  if (slug === 'research-peptide-supplier' || slug === 'wholesale-peptides') return 'supplier';
  return 'quote';
}

const contextImageBySlug: Record<string, { src: string; alt: string }> = {
  'white-label-peptides': { src: brandAssets.whiteLabelInventory, alt: 'White label peptide packaging, boxes, and vials ready for brand creation' },
  'private-label-peptides': { src: brandAssets.whiteLabelInventory, alt: 'Private label peptide packaging and custom labels ready for launch' },
  'peptide-packaging': { src: brandAssets.whiteLabelInventory, alt: 'Custom peptide packaging, labels, and lot codes staged for fulfillment' },
  'wholesale-peptides': { src: brandAssets.vialsColdStorage, alt: 'Rows of research peptide vials in cold storage at a USA-based manufacturing facility' },
  'research-peptide-supplier': { src: brandAssets.vialsColdStorage, alt: 'USA-based manufacturer cold storage inventory of research peptide vials' },
  'peptide-lab-testing': { src: brandAssets.hplcInterface, alt: 'HPLC analysis dashboard confirming 99.12 percent research peptide purity with a pass result' },
  'peptide-coa-testing': { src: brandAssets.coaStack, alt: 'Certificate of analysis showing 99.7 percent peptide purity results from independent lab testing' },
};

export function ServicePageTemplate({ page }: { page: SEOPage }) {
  const detail = getServicePageDetail(page.slug);
  const formVariant = formVariantForSlug(page.slug);
  const contextImage = contextImageBySlug[page.slug];

  return (
    <>
      <SEOJsonLd data={[breadcrumbSchema([{ name: 'Home', path: '/' }, { name: page.h1, path: page.path }]), serviceSchema(page), faqSchema(page.faq)]} />
      <PageHero page={page} eyebrow="Commercial service" />
      <Section>
        <Container className="grid gap-10 lg:grid-cols-[1fr_340px]">
          <div className="space-y-12">
            <div className="rounded-3xl border border-blue/20 bg-blue/5 p-6">
              <h2 className="text-xl font-black text-navy">Research-use-only disclaimer</h2>
              <p className="mt-3 leading-7 text-slate-700">{researchUseDisclaimer}</p>
            </div>

            <section>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue">Overview</p>
              <h2 className="mt-3 text-3xl font-black text-navy">{page.h1}</h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">{page.intro}</p>
              {contextImage && (
                <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200 shadow-soft">
                  <Image src={contextImage.src} alt={contextImage.alt} width={1200} height={800} className="h-auto w-full object-cover" />
                </div>
              )}
            </section>

            {detail && (
              <>
                <section>
                  <h2 className="text-3xl font-black text-navy">Who this is for</h2>
                  <div className="mt-6 grid gap-4 md:grid-cols-3">
                    {detail.audience.map((item) => (
                      <div key={item} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
                        <p className="leading-7 text-slate-600">{item}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-3xl font-black text-navy">What we help with</h2>
                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    {detail.helpWith.map((item) => (
                      <div key={item} className="rounded-2xl bg-mist p-5">
                        <p className="leading-7 text-slate-700">{item}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-3xl font-black text-navy">Process</h2>
                  <div className="mt-6 grid gap-4 md:grid-cols-4">
                    {detail.process.map((item, index) => (
                      <div key={item.step} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
                        <p className="text-sm font-black text-blue">0{index + 1}</p>
                        <h3 className="mt-3 text-xl font-black text-navy">{item.step}</h3>
                        <p className="mt-3 text-sm leading-6 text-slate-600">{item.body}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-3xl font-black text-navy">{detail.checklistTitle}</h2>
                  <ul className="mt-6 grid gap-3">
                    {detail.checklist.map((item) => (
                      <li key={item} className="rounded-2xl border border-slate-200 bg-white p-4 text-slate-700 shadow-soft">✓ {item}</li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h2 className="text-3xl font-black text-navy">Common mistakes to avoid</h2>
                  <div className="mt-6 grid gap-4 md:grid-cols-3">
                    {detail.mistakes.map((item) => (
                      <div key={item} className="rounded-2xl border border-gold/30 bg-gold/10 p-5">
                        <p className="leading-7 text-slate-700">{item}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-3xl font-black text-navy">Adjacent service pages</h2>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {detail.adjacentLinks.map((item) => (
                      <Link key={item.href} href={item.href} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 transition hover:border-blue hover:text-blue">
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </section>
              </>
            )}

            <section>
              <h2 className="text-3xl font-black text-navy">Key considerations</h2>
              <div className="mt-6 space-y-6">
                {page.sections.map((section) => (
                  <div key={section.heading}>
                    <h3 className="text-2xl font-black text-navy">{section.heading}</h3>
                    <p className="mt-3 text-lg leading-8 text-slate-600">{section.body}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-black text-navy">Related resources</h2>
              <div className="mt-6">
                <RelatedLinks page={page} />
              <InternalLinks page={page} />
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-black text-navy">Frequently asked questions</h2>
              <div className="mt-6">
                <FAQSection items={page.faq} />
              </div>
            </section>
          </div>
          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-3xl border border-slate-200 bg-mist p-6">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue">Why work with us</p>
              <h2 className="mt-3 text-xl font-black text-navy">USA-based, 99%+ purity, always free to connect</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">Every consultation is 100% free. We only work with USA-based, lab-created manufacturers, and you get 1-on-1 support from the first reply.</p>
              <TrustBadges className="mt-5" />
            </div>
            <LeadForm variant={formVariant} />
          </aside>
        </Container>
      </Section>
      <CTASection />
    </>
  );
}
