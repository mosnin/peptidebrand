import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { FAQSection } from '@/components/FAQSection';
import { SEOJsonLd } from '@/components/SEOJsonLd';
import { Section } from '@/components/Section';
import { breadcrumbSchema, faqSchema } from '@/lib/schema';
import { createMetadata } from '@/lib/seo';
import { getTopicPage, topicDisclaimer, topicPages, validateTopicPage, type TopicPage } from '@/lib/topic-pages';

type Params = { slug: string };
type RouteProps = { params: Promise<Params> };

const sectionLabels: Record<keyof Pick<TopicPage, 'sourcing' | 'documentation' | 'testing' | 'packaging' | 'fulfillment' | 'compliance'>, string> = {
  sourcing: 'Sourcing questions to answer',
  documentation: 'Documentation records to request',
  testing: 'Testing and quality record review',
  packaging: 'Packaging and label planning',
  fulfillment: 'Fulfillment readiness',
  compliance: 'Compliance review points',
};

export function generateStaticParams(): Params[] {
  return topicPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: RouteProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getTopicPage(slug);
  if (!page) return {};
  return createMetadata({ title: page.title, description: page.description, path: page.path });
}

function DetailSection({ title, items, entity }: { title: string; items: string[]; entity: string }) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
      <h2 className="text-2xl font-bold text-navy">{title}</h2>
      <p className="mt-3 text-slate-600">
        Use these checkpoints to turn {entity} research into a repeatable operating file. The goal is to make sourcing decisions traceable, packaging decisions reviewable, and fulfillment handoffs clear before a page or quote flow goes live.
      </p>
      <div className="mt-5 grid gap-4">
        {items.map((item) => (
          <div key={item} className="rounded-2xl bg-slate-50 p-4">
            <h3 className="text-base font-semibold text-navy">Checkpoint</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default async function TopicRoute({ params }: RouteProps) {
  const { slug } = await params;
  const page = getTopicPage(slug);
  if (!page) {
    notFound();
    return null;
  }

  const validation = validateTopicPage(page);
  if (validation.errors.length > 0) {
    throw new Error(`Topic page validation failed for ${page.slug}: ${validation.errors.join(', ')}`);
  }

  const jsonLd = [
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Topics', path: '/topics' },
      { name: page.h1, path: page.path },
    ]),
    faqSchema(page.faq),
  ];

  return (
    <>
      <SEOJsonLd data={jsonLd} />
      <Section className="bg-hero text-white">
        <Container>
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan">Safe programmatic SEO topic</p>
            <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">{page.h1}</h1>
            <p className="mt-6 text-xl leading-8 text-slate-200">{page.intro}</p>
            <div className="mt-8 rounded-3xl border border-cyan/30 bg-midnight/40 p-5 text-sm leading-6 text-white/80">
              <strong className="block text-white">Research-use-only disclaimer</strong>
              {topicDisclaimer}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href={page.primaryService.href}>{page.primaryService.label}</Button>
              <Button href="/quote" variant="secondary">Request sourcing support</Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          {validation.warnings.length > 0 && (
            <div className="mb-8 rounded-2xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900" role="status">
              <strong>Quality gate warning:</strong> {validation.warnings.join(' ')} This warning is intentionally visible until the page is expanded beyond the programmatic minimum.
            </div>
          )}
          <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
            <div className="space-y-8">
              <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
                <h2 className="text-2xl font-bold text-navy">Who this topic is for</h2>
                <p className="mt-3 text-slate-600">{page.audience}</p>
                <p className="mt-4 text-slate-600">
                  This page is designed for teams that want a compliant research-supply decision framework, not a short keyword doorway. Use it to brief supplier conversations, organize batch documentation, prepare label copy, and connect the topic to a commercial service page for deeper sourcing help.
                </p>
              </section>
              {(['sourcing', 'documentation', 'testing', 'packaging', 'fulfillment', 'compliance'] as const).map((key) => (
                <DetailSection key={key} title={sectionLabels[key]} items={page[key]} entity={page.entity} />
              ))}
            </div>
            <aside className="space-y-6">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
                <h2 className="text-xl font-bold text-navy">Primary service path</h2>
                <p className="mt-3 text-sm text-slate-600">Continue from this informational topic into a commercial service workflow.</p>
                <Link href={page.primaryService.href} className="mt-4 inline-flex font-semibold text-teal">{page.primaryService.label} →</Link>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
                <h2 className="text-xl font-bold text-navy">Related internal links</h2>
                <div className="mt-4 grid gap-3">
                  {page.related.map((item) => (
                    <Link key={item.href} href={item.href} className="rounded-2xl bg-slate-50 p-3 text-sm font-semibold text-navy hover:text-teal">{item.label}</Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-50">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal">FAQ schema enabled</p>
              <h2 className="mt-3 text-3xl font-black text-navy">Questions teams ask before acting on this topic</h2>
              <p className="mt-4 text-slate-600">These answers keep the conversation focused on supplier operations, documentation, testing records, packaging systems, fulfillment workflows, and compliance review.</p>
            </div>
            <FAQSection items={page.faq} />
          </div>
        </Container>
      </Section>
    </>
  );
}
