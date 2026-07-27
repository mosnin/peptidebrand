import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { createMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = createMetadata({ title: 'Privacy Policy', path: '/privacy-policy', description: 'How Peptide Brand collects, uses, and protects information submitted through this website.' });

const effectiveDate = 'July 9, 2026';

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-mist py-16 sm:py-20">
        <Container className="max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue">Legal</p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-navy sm:text-5xl">Privacy Policy</h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">Effective {effectiveDate}</p>
        </Container>
      </section>

      <Section>
        <Container className="max-w-3xl space-y-10 text-slate-700">
          <div>
            <h2 className="font-display text-2xl font-semibold text-navy">Overview</h2>
            <p className="mt-3 leading-7">{siteConfig.name} (“we,” “us,” or “our”) operates {siteConfig.url}. This policy explains what information we collect when you use this website, why we collect it, how it is used, and the choices you have. By using this site, you agree to the practices described here.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-navy">Information we collect</h2>
            <p className="mt-3 leading-7">We collect information you provide directly through our quote, contact, and resource request forms, which may include your name, email address, company name, website, phone number, and details about your sourcing, white label, testing, or fulfillment needs.</p>
            <p className="mt-3 leading-7">We also collect limited technical information automatically, such as pages visited, referring pages, device and browser type, and approximate location, through analytics tools described below.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-navy">How we use your information</h2>
            <ul className="mt-3 grid gap-2 leading-7">
              <li>To respond to quote requests, contact form submissions, and resource requests.</li>
              <li>To connect you with a USA-based manufacturer or supplier from our network when you request an introduction.</li>
              <li>To improve this website and understand how visitors use it.</li>
              <li>To send information you have specifically requested, such as a checklist or guide.</li>
            </ul>
            <p className="mt-3 leading-7">We do not sell your personal information. We do not use form submissions to generate unsolicited marketing lists.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-navy">Sharing with manufacturers and suppliers</h2>
            <p className="mt-3 leading-7">When you request a supplier introduction, quote, or sourcing connection, we share the relevant details from your submission with the manufacturer or supplier best suited to your request, so that they can follow up with you directly. We only share what is necessary to make that introduction useful.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-navy">Analytics and cookies</h2>
            <p className="mt-3 leading-7">This site uses Google Analytics to understand aggregate visitor behavior, such as which pages are viewed and how visitors arrive at the site. Google Analytics uses cookies and similar technologies to collect this information. You can opt out of Google Analytics tracking using your browser’s cookie settings or a browser extension such as the Google Analytics opt-out add-on.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-navy">Data retention</h2>
            <p className="mt-3 leading-7">We retain form submissions for as long as reasonably necessary to respond to your inquiry and maintain records of business communications, after which they are deleted or anonymized.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-navy">Your rights</h2>
            <p className="mt-3 leading-7">You may ask us to access, correct, or delete the personal information we hold about you at any time by emailing {siteConfig.email}. We will respond within a reasonable timeframe.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-navy">Children’s privacy</h2>
            <p className="mt-3 leading-7">This site is intended for business use by adults evaluating research supply operations. We do not knowingly collect information from children under 16.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-navy">Changes to this policy</h2>
            <p className="mt-3 leading-7">We may update this policy from time to time. Material changes will be reflected by updating the effective date above.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-navy">Contact us</h2>
            <p className="mt-3 leading-7">Questions about this policy can be sent to {siteConfig.email} or {siteConfig.phoneDisplay}.</p>
          </div>
        </Container>
      </Section>
    </>
  );
}
