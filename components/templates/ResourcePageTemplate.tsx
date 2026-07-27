import Link from 'next/link';
import { Container } from '@/components/Container';
import { CTASection } from '@/components/CTASection';
import { FAQSection } from '@/components/FAQSection';
import { InternalLinks } from '@/components/InternalLinks';
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

      {detail && (
        <div className="border-b border-slate-200 bg-mist">
          <Container className="flex flex-wrap items-center justify-between gap-4 py-4 text-sm text-slate-600">
            <span>Last updated {detail.lastUpdated}</span>
            <div className="flex flex-wrap gap-2">
              {detail.sections.map((section) => (
                <a key={section.id} href={`#${section.id}`} className="rounded-full border border-slate-200 bg-white px-3 py-1 font-semibold text-slate-700 hover:border-blue hover:text-blue">{section.title}</a>
              ))}
            </div>
          </Container>
        </div>
      )}

      <Section>
        <Container className="max-w-3xl">
          <article className="space-y-14">
            {detail && (
              <>
                <p className="text-lg leading-8 text-slate-600">{detail.complianceNote}</p>

                <div className="rounded-3xl border border-blue/20 bg-blue/5 p-6">
                  <h2 className="font-display text-2xl font-semibold text-navy">{detail.conversionCta.heading}</h2>
                  <p className="mt-3 text-slate-600">{detail.conversionCta.body}</p>
                  <Link href={detail.conversionCta.href} className="mt-5 inline-flex rounded-full bg-blue px-5 py-3 text-sm font-bold text-white transition hover:bg-navy">
                    {detail.conversionCta.label}
                  </Link>
                </div>

                {detail.sections.map((section) => (
                  <section key={section.id} id={section.id} className="scroll-mt-24">
                    <h2 className="font-display text-3xl font-semibold text-navy">{section.title}</h2>
                    <p className="mt-4 text-lg leading-8 text-slate-600">{section.body}</p>
                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      {section.points.map((point) => (
                        <div key={point.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
                          <h3 className="text-lg font-bold text-navy">{point.title}</h3>
                          <p className="mt-2 leading-7 text-slate-600">{point.body}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                ))}

                <div>
                  <h2 className="font-display text-2xl font-semibold text-navy">Commercial service pages mentioned in this guide</h2>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {detail.serviceLinks.map((item) => (
                      <Link key={item.href} href={item.href} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 transition hover:border-blue hover:text-blue">
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </>
            )}

            <div className="space-y-8">
              <h2 className="font-display text-2xl font-semibold text-navy">More on this topic</h2>
              {page.sections.map((section) => (
                <div key={section.heading}>
                  <h3 className="text-xl font-bold text-navy">{section.heading}</h3>
                  <p className="mt-2 text-lg leading-8 text-slate-600">{section.body}</p>
                </div>
              ))}
            </div>
          </article>
        </Container>
      </Section>

      <section className="border-y border-slate-200 bg-mist py-16">
        <Container className="max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
          <h2 className="font-display text-2xl font-semibold text-navy">{page.cta.heading}</h2>
          <p className="mt-3 text-slate-600">{page.cta.body}</p>
          <Link href={page.cta.href} className="mt-5 inline-flex rounded-full bg-blue px-5 py-3 text-sm font-bold text-white transition hover:bg-navy">
            {page.cta.label}
          </Link>
        </Container>
      </section>

      <Section>
        <Container className="max-w-3xl space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-navy">Frequently asked questions</h2>
            <div className="mt-6">
              <FAQSection items={page.faq} />
            </div>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold text-navy">Continue exploring</h2>
            <div className="mt-6 space-y-6">
              <RelatedLinks page={page} />
              <InternalLinks page={page} />
            </div>
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
