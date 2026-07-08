import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({ title: 'Blog', path: '/blog', description: 'Research-use peptide brand articles covering sourcing, documentation, COAs, testing workflows, packaging, fulfillment, and compliant launch planning.' });
export default function BlogPage() { return <Section><Container><h1 className="text-4xl font-black text-navy">Blog</h1><p className="mt-4 max-w-3xl text-slate-600">Upcoming research-use-only articles for brand builders and wholesale peptide supply operators.</p></Container></Section>; }
