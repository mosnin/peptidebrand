import type { Metadata } from 'next';
import { Inter, Source_Serif_4 } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { GoogleAnalytics } from '@/components/GoogleAnalytics';
import { StickyMobileCTA } from '@/components/StickyMobileCTA';
import { SEOJsonLd } from '@/components/SEOJsonLd';
import { createMetadata, organizationSchema, websiteSchema } from '@/lib/seo';
import { professionalServiceSchema } from '@/lib/schema';
import { siteConfig } from '@/lib/site';

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' });
const sourceSerif = Source_Serif_4({ subsets: ['latin'], display: 'swap', variable: '--font-display', weight: ['500', '600', '700'] });

export const metadata: Metadata = createMetadata({ title: siteConfig.name });

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const professionalService = professionalServiceSchema();
  const identitySchema = [organizationSchema(), websiteSchema(), ...(professionalService ? [professionalService] : [])];

  return (
    <html lang="en" className={`${inter.variable} ${sourceSerif.variable}`}>
      <body>
        <GoogleAnalytics />
        <SEOJsonLd data={identitySchema} />
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
