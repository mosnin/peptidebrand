import Link from 'next/link';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { createMetadata } from '@/lib/seo';
import { topicPages } from '@/lib/topic-pages';

export const metadata = createMetadata({
  title: 'Peptide Sourcing Guides by Compound',
  description: 'Compound-specific sourcing guides for research peptide brands covering supplier evaluation, COAs, HPLC and LCMS testing, packaging, and fulfillment.',
  path: '/topics',
});

export default function TopicsPage() {
  return (
    <Section>
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue">Sourcing guide library</p>
          <h1 className="mt-3 text-4xl font-black text-navy">Peptide sourcing guides by compound</h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">Compound-specific guides for research-use peptide brands, covering supplier evaluation, documentation, testing records, packaging systems, and fulfillment workflows.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {topicPages.map((page) => (
            <article key={page.slug} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue">{page.type.replaceAll('-', ' ')}</p>
              <h2 className="mt-3 text-xl font-bold text-navy"><Link href={page.path}>{page.entity}</Link></h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{page.description}</p>
              <Link href={page.path} className="mt-5 inline-flex font-semibold text-blue">Read guide →</Link>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
