import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/Accordion';
import type { FAQItem } from '@/lib/seo-page-map';

export function FAQSection({ items }: { items: FAQItem[] }) {
  return (
    <Accordion type="single" collapsible className="grid gap-4">
      {items.map((item) => (
        <AccordionItem key={item.question} value={item.question}>
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionContent>{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
