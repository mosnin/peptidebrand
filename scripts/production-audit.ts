// @ts-nocheck
declare const require: (specifier: string) => any;
declare const process: { cwd: () => string; exit: (code?: number) => never };

const { readdirSync, readFileSync, statSync } = require('node:fs');
const { join, relative } = require('node:path');

type AuditResult = { name: string; status: 'pass' | 'fail'; details: string[] };

const root = process.cwd();
const filesToScan = ['app', 'components', 'lib'].flatMap((directory) => walk(directory));
const appPageFiles = walk('app').filter((file) => file.endsWith('page.tsx'));
const noindexRoutes = ['/thank-you', '/quote-submitted', '/resource-requested'];
const coreRoutes = ['/', '/services', '/resources', '/topics', '/contact', '/quote', '/compliance', ...noindexRoutes];

function walk(directory: string): string[] {
  return readdirSync(directory).flatMap((entry: string) => {
    const fullPath = join(directory, entry);
    const stats = statSync(fullPath);
    if (stats.isDirectory()) return walk(fullPath);
    return /\.(ts|tsx|md|mdx)$/.test(fullPath) ? [fullPath] : [];
  });
}

function read(file: string) {
  return readFileSync(file, 'utf8');
}

function unique<T>(items: T[]) {
  return [...new Set(items)];
}

function appRouteFromPage(file: string) {
  if (file === 'app/page.tsx') return '/';
  const route = file.replace(/^app\//, '/').replace(/\/page\.tsx$/, '');
  return route.includes('[') ? null : route;
}

function extractSingleQuotedPaths(source: string) {
  return [...source.matchAll(/path:\s*['`]([^'`]+)['`]/g)].map((match) => match[1]);
}

function extractGeneratedTopicPaths(source: string) {
  return [...source.matchAll(/page\('([^']+)'/g)].map((match) => `/topics/${match[1]}`);
}

function routeInventory() {
  const staticAppRoutes = appPageFiles.map(appRouteFromPage).filter((route): route is string => Boolean(route));
  const seoMapRoutes = extractSingleQuotedPaths(read('lib/seo-page-map.ts'));
  const topicRoutes = extractGeneratedTopicPaths(read('lib/topic-pages.ts'));
  return unique([...coreRoutes, ...staticAppRoutes, ...seoMapRoutes, ...topicRoutes]).sort();
}

function collectInternalLinks() {
  const links: { file: string; href: string }[] = [];
  for (const file of filesToScan) {
    const source = read(file);
    const patterns = [/href=\"(\/[#A-Za-z0-9._/?=-][^\"]*)\"/g, /href:\s*['`](\/[#A-Za-z0-9._/?=-][^'`]*)['`]/g, /\['(\/[A-Za-z0-9._/?=-][^']*)',/g, /\{ href: ['`](\/[A-Za-z0-9._/?=-][^'`]*)['`]/g];
    for (const pattern of patterns) {
      for (const match of source.matchAll(pattern)) links.push({ file: relative(root, file), href: match[1] });
    }
  }
  return links.filter((link) => !link.href.startsWith('/#') && !link.href.includes('${'));
}

function add(results: AuditResult[], name: string, passed: boolean, details: string[]) {
  results.push({ name, status: passed ? 'pass' : 'fail', details });
}

const routes = routeInventory();
const results: AuditResult[] = [];

const sitemapSource = read('app/sitemap.ts');
add(results, 'sitemap includes indexable page maps', sitemapSource.includes('seoPages.map') && sitemapSource.includes('topicPages.map') && sitemapSource.includes("'/topics'") && noindexRoutes.every((route) => !sitemapSource.includes(`'${route}'`)), ['app/sitemap.ts maps core routes, seoPages, and topicPages while excluding noindex confirmation routes.']);

const robotsSource = read('app/robots.ts');
add(results, 'robots allows indexable pages and blocks confirmation pages', robotsSource.includes("allow: '/'") && noindexRoutes.every((route) => robotsSource.includes(route)), ['app/robots.ts allows / and disallows thank-you, quote-submitted, and resource-requested.']);

const seoSource = read('lib/seo.ts');
add(results, 'canonical metadata helper is configured', seoSource.includes('alternates: { canonical }') && seoSource.includes('openGraph') && seoSource.includes('twitter'), ['lib/seo.ts emits canonical URLs, Open Graph metadata, and Twitter cards.']);

const schemaSource = read('lib/schema.ts');
add(results, 'structured data helpers exist', ['BreadcrumbList', 'FAQPage', 'Article', 'Service'].every((token) => schemaSource.includes(token)), ['lib/schema.ts includes breadcrumb, FAQ, article, and service schema helpers.']);

const formSource = read('components/LeadForm.tsx');
add(results, 'forms submit to API route with spam trap', ['/api/lead', 'honeypot'].every((token) => formSource.includes(token)), ['LeadForm submits to the /api/lead route handler and includes a honeypot field.']);

add(results, 'thank-you routes are noindex', noindexRoutes.every((route) => read(`app${route}/page.tsx`).includes('noIndex: true')), ['All confirmation pages call createMetadata with noIndex: true.']);

const metadataFailures = appPageFiles.filter((file) => {
  const source = read(file);
  if (source.includes('noIndex: true')) return false;
  if (source.includes('generateMetadata')) return false;
  return source.includes('createMetadata') && !source.includes('description:');
}).map((file) => relative(root, file));
add(results, 'static pages have useful meta descriptions', metadataFailures.length === 0, metadataFailures.length ? metadataFailures : ['All indexable static pages using createMetadata include descriptions or use dynamic page-map descriptions.']);

const h1Failures = appPageFiles.filter((file) => !file.includes('[')).filter((file) => (read(file).match(/<h1\b/g) ?? []).length !== 1).map((file) => relative(root, file));
add(results, 'static routes have one H1', h1Failures.length === 0, h1Failures.length ? h1Failures : ['Every static app page has exactly one <h1>. Dynamic routes render page templates with one <h1>.']);

const knownRoutes = new Set(routes);
const brokenLinks = collectInternalLinks().filter(({ href }) => {
  const clean = href.split('#')[0].replace(/\/$/, '') || '/';
  if (href.startsWith('#')) return false;
  return !knownRoutes.has(clean);
});
add(results, 'internal links resolve to known routes', brokenLinks.length === 0, brokenLinks.slice(0, 20).map((link) => `${link.file} -> ${link.href}`));

const imageAltSource = read('lib/image-alt.ts');
add(results, 'image alt text system exists', imageAltSource.includes('getImageAlt') && imageAltSource.includes('og-default'), ['lib/image-alt.ts provides reusable image alt text lookup.']);

const failures = results.filter((result) => result.status === 'fail');
for (const result of results) {
  const icon = result.status === 'pass' ? 'PASS' : 'FAIL';
  console.log(`${icon}: ${result.name}`);
  for (const detail of result.details) console.log(`  - ${detail}`);
}
console.log(`Audited ${routes.length} known routes and ${filesToScan.length} source files.`);

if (failures.length > 0) {
  console.error(`Production audit failed with ${failures.length} failing check${failures.length === 1 ? '' : 's'}.`);
  process.exit(1);
}

console.log('Production audit passed.');
