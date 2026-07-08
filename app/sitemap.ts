import type { MetadataRoute } from 'next';
import { absoluteUrl } from '@/lib/seo';
import { getLastModified, seoPages } from '@/lib/seo-page-map';
import { topicPages } from '@/lib/topic-pages';

const coreRoutes = ['/', '/services', '/resources', '/topics', '/blog', '/contact', '/quote', '/compliance', '/privacy-policy', '/terms-of-use'];
const defaultLastModified = new Date('2026-07-08');

export default function sitemap(): MetadataRoute.Sitemap {
  const coreEntries = coreRoutes.map((route) => ({
    url: absoluteUrl(route),
    lastModified: defaultLastModified,
    changeFrequency: route === '/' ? ('weekly' as const) : ('monthly' as const),
    priority: route === '/' ? 1 : 0.7,
  }));

  const mappedEntries = seoPages.map((page) => ({
    url: absoluteUrl(page.path),
    lastModified: getLastModified(page),
    changeFrequency: page.kind === 'resource' ? ('monthly' as const) : ('weekly' as const),
    priority: page.kind === 'resource' ? 0.75 : 0.8,
  }));

  const topicEntries = topicPages.map((page) => ({
    url: absoluteUrl(page.path),
    lastModified: new Date(page.lastModified),
    changeFrequency: 'monthly' as const,
    priority: 0.65,
  }));

  return [...coreEntries, ...mappedEntries, ...topicEntries];
}
