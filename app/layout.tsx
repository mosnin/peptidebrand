import type { Metadata } from 'next';
import { Cormorant_Garamond, Lora } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StickyMobileCTA } from '@/components/StickyMobileCTA';
import { SEOJsonLd } from '@/components/SEOJsonLd';
import { createMetadata, organizationSchema, websiteSchema } from '@/lib/seo';
import { professionalServiceSchema } from '@/lib/schema';
import { siteConfig } from '@/lib/site';

const lora = Lora({ subsets: ['latin'], display: 'swap', variable: '--font-lora' });
const cormorant = Cormorant_Garamond({ subsets: ['latin'], display: 'swap', variable: '--font-cormorant', weight: ['500', '600', '700'] });

export const metadata: Metadata = createMetadata({ title: siteConfig.name });

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const professionalService = professionalServiceSchema();
  const identitySchema = [organizationSchema(), websiteSchema(), ...(professionalService ? [professionalService] : [])];

  return (
    <html lang="en" className={`${lora.variable} ${cormorant.variable}`}>
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
