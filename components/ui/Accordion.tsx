'use client';

import { Accordion as AccordionPrimitive } from 'radix-ui';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Accordion = AccordionPrimitive.Root;

export function AccordionItem({ className, ...props }: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return <AccordionPrimitive.Item className={cn('rounded-3xl border border-slate-200 bg-white shadow-soft', className)} {...props} />;
}

export function AccordionTrigger({ className, children, ...props }: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        className={cn(
          'group flex flex-1 items-center justify-between gap-4 px-5 py-5 text-left text-lg font-black text-navy transition hover:text-blue',
          className,
        )}
        {...props}
      >
        {children}
        <ChevronDown size={20} className="shrink-0 text-blue transition-transform duration-200 group-data-[state=open]:rotate-180" aria-hidden="true" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

export function AccordionContent({ className, children, ...props }: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      className="overflow-hidden data-[state=closed]:animate-[accordion-up_200ms_ease-out] data-[state=open]:animate-[accordion-down_200ms_ease-out]"
      {...props}
    >
      <div className={cn('px-5 pb-5 leading-7 text-slate-600', className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}
