import type { Metadata } from 'next';
import { getImageAlt } from './image-alt';
import { siteConfig } from './site';

type SEOInput = { title: string; description?: string; path?: string; image?: string; noIndex?: boolean };

export function absoluteUrl(path = '/') {
  return new URL(path, siteConfig.url).toString();
}

export function createMetadata({ title, description = siteConfig.description, path = '/', image = '/og-image.png', noIndex = false }: SEOInput): Metadata {
  const fullTitle = title === siteConfig.name ? title : `${title} | ${siteConfig.name}`;
  const canonical = absoluteUrl(path);
  return {
    title: fullTitle,
    description,
    alternates: { canonical },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: { title: fullTitle, description, url: canonical, siteName: siteConfig.name, type: 'website', images: [{ url: absoluteUrl(image), width: 1200, height: 630, alt: getImageAlt('og-default') }] },
    twitter: { card: 'summary_large_image', title: fullTitle, description, images: [absoluteUrl(image)] },
  };
}

export function organizationSchema() {
  return { '@context': 'https://schema.org', '@type': 'Organization', name: siteConfig.name, url: siteConfig.url, email: siteConfig.email };
}

export function websiteSchema() {
  return { '@context': 'https://schema.org', '@type': 'WebSite', name: siteConfig.name, url: siteConfig.url };
}
