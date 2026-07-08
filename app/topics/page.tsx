import Link from 'next/link';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { createMetadata } from '@/lib/seo';
import { topicPages } from '@/lib/topic-pages';

export const metadata = createMetadata({
  title: 'Research Peptide Sourcing Topics',
  description: 'Safe long-tail guides for research peptide sourcing, COAs, HPLC and LCMS testing, packaging, fulfillment, and brand launch planning.',
  path: '/topics',
});

export default function TopicsPage() {
  return (
    <Section>
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal">Programmatic SEO hub</p>
          <h1 className="mt-3 text-4xl font-black text-navy">Research peptide sourcing topic library</h1>
          <p className="mt-5 text-lg leading-8 text-slate-700">Explore safe, compliance-aware long-tail topic pages focused on sourcing, supplier documentation, testing records, packaging systems, fulfillment workflows, and brand launch infrastructure for research-use-only peptide businesses.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {topicPages.map((page) => (
            <article key={page.slug} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">{page.type.replaceAll('-', ' ')}</p>
              <h2 className="mt-3 text-xl font-bold text-navy"><Link href={page.path}>{page.entity}</Link></h2>
              <p className="mt-3 text-sm leading-6 text-slate-700">{page.description}</p>
              <Link href={page.path} className="mt-5 inline-flex font-semibold text-teal">Read topic →</Link>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
