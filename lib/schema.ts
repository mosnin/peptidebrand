import { absoluteUrl } from './seo';
import { siteConfig } from './site';
import type { FAQItem, SEOPage } from './seo-page-map';

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(items: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}

export function articleSchema(page: SEOPage) {
  if (!page.article) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: page.article.headline,
    description: page.article.description,
    datePublished: page.article.datePublished,
    dateModified: page.article.dateModified,
    author: { '@type': 'Organization', name: siteConfig.name, url: siteConfig.url },
    publisher: { '@type': 'Organization', name: siteConfig.name, url: siteConfig.url },
    mainEntityOfPage: absoluteUrl(page.path),
  };
}


export function serviceSchema(page: SEOPage) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: page.h1,
    description: page.metaDescription,
    provider: { '@type': 'Organization', name: siteConfig.name, url: siteConfig.url },
    areaServed: 'United States',
    serviceType: page.targetKeyword,
    url: absoluteUrl(page.path),
    audience: { '@type': 'BusinessAudience', audienceType: 'Research supply brand operators' },
  };
}

export function professionalServiceSchema() {
  if (!siteConfig.publicLocation) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: { '@type': 'PostalAddress', ...siteConfig.publicLocation },
  };
}
