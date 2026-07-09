import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { createMetadata } from '@/lib/seo';
import { researchDisclaimer, siteConfig } from '@/lib/site';

export const metadata: Metadata = createMetadata({ title: 'Terms of Service', path: '/terms-of-service', description: 'Terms governing use of the Peptide Brand website and sourcing introduction services.' });

const effectiveDate = 'July 9, 2026';

export default function TermsOfServicePage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-mist py-16 sm:py-20">
        <Container className="max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue">Legal</p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-navy sm:text-5xl">Terms of Service</h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">Effective {effectiveDate}</p>
        </Container>
      </section>

      <Section>
        <Container className="max-w-3xl space-y-10 text-slate-700">
          <div>
            <h2 className="font-display text-2xl font-semibold text-navy">Acceptance of terms</h2>
            <p className="mt-3 leading-7">By accessing or using {siteConfig.url} (the “Site”), you agree to these Terms of Service. If you do not agree, do not use the Site.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-navy">Description of service</h2>
            <p className="mt-3 leading-7">{siteConfig.name} operates an introduction and information service that connects research supply businesses with USA-based, lab-created peptide manufacturers for wholesale sourcing, white label, and private label brand creation. We are not a manufacturer, laboratory, or seller of peptides. We do not process product orders or payments for peptide products through this Site. Introductions and consultations arranged through this Site are provided at no cost to the party requesting them.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-navy">Research-use-only scope</h2>
            <p className="mt-3 leading-7">{researchDisclaimer} Nothing on this Site should be interpreted as a claim about human or animal use, safety, or efficacy of any product. You are solely responsible for ensuring your own compliance with applicable laws in your jurisdiction.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-navy">No professional or medical advice</h2>
            <p className="mt-3 leading-7">Content on this Site is provided for general business and informational purposes only and does not constitute legal, regulatory, medical, or professional advice. You should consult qualified professionals before making decisions based on information found here.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-navy">Manufacturer and supplier relationships</h2>
            <p className="mt-3 leading-7">Any agreement you enter into with a manufacturer or supplier introduced through this Site is solely between you and that manufacturer or supplier. {siteConfig.name} is not a party to that agreement and is not responsible for the quality, legality, delivery, or performance of any products or services provided by a third-party manufacturer or supplier.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-navy">Acceptable use</h2>
            <ul className="mt-3 grid gap-2 leading-7">
              <li>You will not submit false or misleading information through our forms.</li>
              <li>You will not use this Site to attempt to gain unauthorized access to our systems or data.</li>
              <li>You will not use this Site for any purpose that violates applicable law.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-navy">Intellectual property</h2>
            <p className="mt-3 leading-7">All content on this Site, including text, graphics, logos, and images, is owned by {siteConfig.name} or its licensors and may not be copied or reused without permission, except as permitted by law.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-navy">Disclaimer of warranties</h2>
            <p className="mt-3 leading-7">This Site and its content are provided “as is” without warranties of any kind, express or implied, including warranties of accuracy, merchantability, or fitness for a particular purpose.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-navy">Limitation of liability</h2>
            <p className="mt-3 leading-7">To the fullest extent permitted by law, {siteConfig.name} is not liable for any indirect, incidental, or consequential damages arising from your use of this Site or any introduction made through it.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-navy">Governing law</h2>
            <p className="mt-3 leading-7">These terms are governed by the laws of the State of Florida, without regard to conflict of law principles.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-navy">Changes to these terms</h2>
            <p className="mt-3 leading-7">We may update these terms from time to time. Continued use of the Site after changes are posted constitutes acceptance of the revised terms.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-navy">Contact us</h2>
            <p className="mt-3 leading-7">Questions about these terms can be sent to {siteConfig.email} or {siteConfig.phoneDisplay}.</p>
          </div>
        </Container>
      </Section>
    </>
  );
}
