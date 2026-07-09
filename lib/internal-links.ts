import { seoPages, servicePages, resourcePages, type SEOPage } from './seo-page-map';
import { topicPages } from './topic-pages';

export type InternalLink = {
  href: string;
  label: string;
  group: 'service' | 'resource' | 'core' | 'topic';
};

export const coreInternalLinks: InternalLink[] = [
  { href: '/', label: 'Home', group: 'core' },
  { href: '/services', label: 'Services', group: 'core' },
  { href: '/resources', label: 'Resources', group: 'core' },
  { href: '/quote', label: 'Request a quote', group: 'core' },
  { href: '/compliance', label: 'Compliance stance', group: 'core' },
];

export function getInternalLinks(): InternalLink[] {
  return [
    ...coreInternalLinks,
    ...servicePages.map((page) => ({ href: page.path, label: page.h1, group: 'service' as const })),
    ...resourcePages.map((page) => ({ href: page.path, label: page.h1, group: 'resource' as const })),
    ...topicPages.map((page) => ({ href: page.path, label: page.h1, group: 'topic' as const })),
  ];
}

export function getInternalLinksForPage(page: SEOPage, limit = 8): InternalLink[] {
  const related = page.related.map((path) => seoPages.find((item) => item.path === path)).filter((item): item is SEOPage => Boolean(item));
  const relatedLinks = related.map((item) => ({ href: item.path, label: item.h1, group: item.kind as 'service' | 'resource' }));
  const fallback = getInternalLinks().filter((item) => item.href !== page.path);
  return [...relatedLinks, ...fallback.filter((item) => !relatedLinks.some((relatedItem) => relatedItem.href === item.href))].slice(0, limit);
}
