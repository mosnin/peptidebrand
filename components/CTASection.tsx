import { Button } from './Button';
import { Container } from './Container';

export function CTASection() {
  return <section className="bg-teal py-16 text-white">
<Container className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
<div>
<h2 className="text-3xl font-black">Plan a compliant research-use peptide brand.</h2>
<p className="mt-3 text-white/80">Discuss sourcing, white label packaging, COA workflows, testing documentation, and fulfillment.</p>
</div>
<Button href="/quote" variant="secondary">Request a Quote</Button>
</Container>
</section>;
}
