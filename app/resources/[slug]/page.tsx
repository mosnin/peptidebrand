import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ResourcePageTemplate } from '@/components/templates/ResourcePageTemplate';
import { createMetadata } from '@/lib/seo';
import { getResourcePage, resourcePages } from '@/lib/seo-page-map';

type Params = { slug: string };

type RouteProps = { params: Promise<Params> };

export function generateStaticParams(): Params[] {
  return resourcePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: RouteProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getResourcePage(slug);
  if (!page) return {};
  return createMetadata({ title: page.title, description: page.metaDescription, path: page.path });
}

export default async function ResourceRoute({ params }: RouteProps) {
  const { slug } = await params;
  const page = getResourcePage(slug);
  if (!page) {
    notFound();
    return null;
  }
  return <ResourcePageTemplate page={page} />;
}
