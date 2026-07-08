import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ServicePageTemplate } from '@/components/templates/ServicePageTemplate';
import { createMetadata } from '@/lib/seo';
import { getServicePage, servicePages } from '@/lib/seo-page-map';

type Params = { slug: string };

type RouteProps = { params: Promise<Params> };

export function generateStaticParams(): Params[] {
  return servicePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: RouteProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getServicePage(slug);
  if (!page) return {};
  return createMetadata({ title: page.title, description: page.metaDescription, path: page.path });
}

export default async function ServiceRoute({ params }: RouteProps) {
  const { slug } = await params;
  const page = getServicePage(slug);
  if (!page) {
    notFound();
    return null;
  }
  return <ServicePageTemplate page={page} />;
}
