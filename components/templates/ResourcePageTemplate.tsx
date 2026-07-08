import Link from 'next/link';
import { Container } from '@/components/Container';
import { CTASection } from '@/components/CTASection';
import { FAQSection } from '@/components/FAQSection';
import { InternalLinks } from '@/components/InternalLinks';
import { KeywordPanel } from '@/components/KeywordPanel';
import { PageHero } from '@/components/PageHero';
import { RelatedLinks } from '@/components/RelatedLinks';
import { SEOJsonLd } from '@/components/SEOJsonLd';
import { Section } from '@/components/Section';
import { getResourceArticleDetail } from '@/lib/resource-article-details';
import { articleSchema, breadcrumbSchema, faqSchema } from '@/lib/schema';
import type { SEOPage } from '@/lib/seo-page-map';

export function ResourcePageTemplate({ page }: { page: SEOPage }) {
  const article = articleSchema(page);
  const detail = getResourceArticleDetail(page.slug);
  const schema = [
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Resources', path: '/resources' },
      { name: page.h1, path: page.path },
    ]),
    faqSchema(page.faq),
    ...(article ? [article] : []),
  ];

  return (
    <>
      <SEOJsonLd data={schema} />
      <PageHero page={page} eyebrow="Educational resource" />
      <Section>
        <Container className="grid gap-10 lg:grid-cols-[1fr_320px]">
          <article className="space-y-12">
            {detail && (
              <>
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
                  <p className="text-sm font-bold uppercase tracking-[0.25em] text-teal">Last updated</p>
                  <p className="mt-2 text-slate-700">{detail.lastUpdated}</p>
                  <p className="mt-4 leading-7 text-slate-600">{detail.complianceNote}</p>
                </div>

                <nav className="rounded-3xl bg-mist p-6" aria-label="Table of contents">
                  <h2 className="text-2xl font-black text-navy">Table of contents</h2>
                  <ol className="mt-4 grid gap-2 text-slate-700">
                    {detail.sections.map((section) => (
                      <li key={section.id}>
                        <a href={`#${section.id}`} className="font-semibold hover:text-teal">{section.title}</a>
                      </li>
                    ))}
                  </ol>
                </nav>

                <section className="rounded-3xl bg-navy p-6 text-white">
                  <h2 className="text-2xl font-black">{detail.conversionCta.heading}</h2>
                  <p className="mt-3 text-white/75">{detail.conversionCta.body}</p>
                  <Link href={detail.conversionCta.href} className="mt-5 inline-flex rounded-full bg-teal px-5 py-3 text-sm font-bold text-white transition hover:bg-teal/90">
                    {detail.conversionCta.label}
                  </Link>
                </section>

                {detail.sections.map((section) => (
                  <section key={section.id} id={section.id} className="scroll-mt-24">
                    <h2 className="text-3xl font-black text-navy">{section.title}</h2>
                    <p className="mt-4 text-lg leading-8 text-slate-600">{section.body}</p>
                    <div className="mt-6 grid gap-4 md:grid-cols-2">
                      {section.points.map((point) => (
                        <div key={point.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
                          <h3 className="text-xl font-black text-navy">{point.title}</h3>
                          <p className="mt-3 leading-7 text-slate-600">{point.body}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                ))}

                <section>
                  <h2 className="text-3xl font-black text-navy">Commercial service pages mentioned in this guide</h2>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {detail.serviceLinks.map((item) => (
                      <Link key={item.href} href={item.href} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 transition hover:border-teal hover:text-teal">
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </section>
              </>
            )}

            <section>
              <h2 className="text-3xl font-black text-navy">Additional notes</h2>
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
              <h2 className="text-3xl font-black text-navy">FAQ</h2>
              <div className="mt-6">
                <FAQSection items={page.faq} />
              </div>
            </section>
            <RelatedLinks page={page} />
              <InternalLinks page={page} />
          </article>
          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <KeywordPanel page={page} />
            <div className="rounded-3xl bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-black text-navy">{page.cta.heading}</h2>
              <p className="mt-3 text-slate-600">{page.cta.body}</p>
              <Link href={page.cta.href} className="mt-5 inline-flex rounded-full bg-teal px-5 py-3 text-sm font-bold text-white transition hover:bg-teal/90">
                {page.cta.label}
              </Link>
            </div>
          </aside>
        </Container>
      </Section>
      <CTASection />
    </>
  );
}
