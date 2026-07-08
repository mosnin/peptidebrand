import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StickyMobileCTA } from '@/components/StickyMobileCTA';
import { SEOJsonLd } from '@/components/SEOJsonLd';
import { createMetadata, organizationSchema, websiteSchema } from '@/lib/seo';
import { professionalServiceSchema } from '@/lib/schema';

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' });

export const metadata: Metadata = createMetadata({ title: 'PeptideBrand' });

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const professionalService = professionalServiceSchema();
  const identitySchema = [organizationSchema(), websiteSchema(), ...(professionalService ? [professionalService] : [])];

  return (
    <html lang="en" className={inter.variable}>
      <body>
        <SEOJsonLd data={identitySchema} />
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
