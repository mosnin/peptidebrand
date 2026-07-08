import { getPageByPath, type SEOPage } from './seo-page-map';

export function getRelatedPages(page: SEOPage) {
  return page.related.map((path) => getPageByPath(path)).filter((item): item is SEOPage => Boolean(item));
}
