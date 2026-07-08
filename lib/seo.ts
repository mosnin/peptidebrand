import type { Metadata } from 'next';
import { brandAssets } from './assets';
import { getImageAlt } from './image-alt';
import { siteConfig } from './site';

type SEOInput = { title: string; description?: string; path?: string; image?: string; noIndex?: boolean };

export function absoluteUrl(path = '/') {
  return new URL(path, siteConfig.url).toString();
}

export function createMetadata({ title, description = siteConfig.description, path = '/', image = brandAssets.heroScientists, noIndex = false }: SEOInput): Metadata {
  const fullTitle = title === siteConfig.name ? title : `${title} | ${siteConfig.name}`;
  const canonical = absoluteUrl(path);
  const imageUrl = image.startsWith('http') ? image : absoluteUrl(image);
  return {
    title: fullTitle,
    description,
    alternates: { canonical },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    icons: { icon: brandAssets.logoIcon },
    openGraph: { title: fullTitle, description, url: canonical, siteName: siteConfig.name, type: 'website', images: [{ url: imageUrl, width: 1200, height: 630, alt: getImageAlt('og-default') }] },
    twitter: { card: 'summary_large_image', title: fullTitle, description, images: [imageUrl] },
  };
}

export function organizationSchema() {
  return { '@context': 'https://schema.org', '@type': 'Organization', name: siteConfig.name, url: siteConfig.url, email: siteConfig.email };
}

export function websiteSchema() {
  return { '@context': 'https://schema.org', '@type': 'WebSite', name: siteConfig.name, url: siteConfig.url };
}
