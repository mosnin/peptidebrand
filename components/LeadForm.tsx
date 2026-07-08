'use client';

import { useId, useState, type FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { trackConversion, type ConversionEventName } from '@/lib/analytics';

export type LeadFormVariant = 'quote' | 'supplier' | 'white-label' | 'lab-testing' | 'newsletter' | 'contact';

type FieldType = 'text' | 'email' | 'url' | 'select' | 'textarea' | 'checkbox';

type Field = {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  placeholder?: string;
  options?: string[];
};

const variantConfig: Record<LeadFormVariant, { formName: string; title: string; submitLabel: string; action: string; event: ConversionEventName; fields: Field[] }> = {
  quote: {
    formName: 'main-quote',
    title: 'Get a sourcing quote',
    submitLabel: 'Submit quote request',
    action: '/quote-submitted',
    event: 'lead_form_submit',
    fields: [
      { name: 'name', label: 'Name', type: 'text', required: true },
      { name: 'email', label: 'Email', type: 'email', required: true },
      { name: 'company', label: 'Company', type: 'text', required: true },
      { name: 'website', label: 'Website', type: 'url', placeholder: 'https://example.com' },
      { name: 'product_category', label: 'Product category', type: 'select', required: true, options: ['Research peptides', 'White label catalog', 'Private label catalog', 'Testing documentation', 'Fulfillment infrastructure'] },
      { name: 'monthly_volume', label: 'Estimated monthly volume', type: 'select', required: true, options: ['Exploring', '1-100 units', '100-500 units', '500+ units'] },
      { name: 'needed_services', label: 'Needed services', type: 'select', required: true, options: ['Wholesale sourcing', 'White label support', 'COA workflows', 'HPLC/LCMS testing coordination', 'Packaging and labels', 'Fulfillment setup'] },
      { name: 'timeline', label: 'Timeline', type: 'select', required: true, options: ['Immediately', '30-60 days', '60-90 days', 'Planning phase'] },
      { name: 'budget_range', label: 'Budget range', type: 'select', required: true, options: ['Under $5k', '$5k-$15k', '$15k-$50k', '$50k+', 'Not sure yet'] },
      { name: 'message', label: 'Message', type: 'textarea', required: true, placeholder: 'Tell us about sourcing, documentation, packaging, or fulfillment needs.' },
      { name: 'consent', label: 'I agree to be contacted about research-use sourcing, documentation, testing, packaging, and fulfillment support.', type: 'checkbox', required: true },
    ],
  },
  supplier: {
    formName: 'supplier-sourcing',
    title: 'Supplier sourcing inquiry',
    submitLabel: 'Request supplier help',
    action: '/thank-you',
    event: 'lead_form_submit',
    fields: [
      { name: 'name', label: 'Name', type: 'text', required: true },
      { name: 'email', label: 'Email', type: 'email', required: true },
      { name: 'company', label: 'Company', type: 'text' },
      { name: 'target_catalog', label: 'Target catalog', type: 'text', placeholder: 'Research peptide categories or SKU count' },
      { name: 'supplier_need', label: 'Primary supplier need', type: 'select', required: true, options: ['New supplier shortlist', 'Supplier comparison', 'Wholesale sourcing', 'COA review', 'Packaging compatibility'] },
      { name: 'message', label: 'Message', type: 'textarea', required: true },
      { name: 'consent', label: 'I agree to be contacted about research-use supplier sourcing support.', type: 'checkbox', required: true },
    ],
  },
  'white-label': {
    formName: 'white-label-inquiry',
    title: 'White label inquiry',
    submitLabel: 'Request white label support',
    action: '/thank-you',
    event: 'lead_form_submit',
    fields: [
      { name: 'name', label: 'Name', type: 'text', required: true },
      { name: 'email', label: 'Email', type: 'email', required: true },
      { name: 'company', label: 'Company', type: 'text' },
      { name: 'website', label: 'Website', type: 'url' },
      { name: 'launch_stage', label: 'Launch stage', type: 'select', required: true, options: ['Idea stage', 'Supplier research', 'Packaging planning', 'Ready to launch', 'Existing brand'] },
      { name: 'message', label: 'Message', type: 'textarea', required: true },
      { name: 'consent', label: 'I agree to be contacted about research-use white label support.', type: 'checkbox', required: true },
    ],
  },
  'lab-testing': {
    formName: 'lab-testing-inquiry',
    title: 'Lab testing inquiry',
    submitLabel: 'Request testing coordination',
    action: '/thank-you',
    event: 'lead_form_submit',
    fields: [
      { name: 'name', label: 'Name', type: 'text', required: true },
      { name: 'email', label: 'Email', type: 'email', required: true },
      { name: 'company', label: 'Company', type: 'text' },
      { name: 'testing_need', label: 'Testing need', type: 'select', required: true, options: ['COA workflow', 'HPLC documentation', 'LCMS documentation', 'Batch review', 'Supplier documentation review'] },
      { name: 'batch_count', label: 'Estimated batch count', type: 'select', options: ['1-5', '6-20', '20+', 'Not sure'] },
      { name: 'message', label: 'Message', type: 'textarea', required: true },
      { name: 'consent', label: 'I agree to be contacted about research-use testing documentation support.', type: 'checkbox', required: true },
    ],
  },
  newsletter: {
    formName: 'resource-download',
    title: 'Get the launch resource',
    submitLabel: 'Request resource',
    action: '/resource-requested',
    event: 'resource_form_submit',
    fields: [
      { name: 'name', label: 'Name', type: 'text', required: true },
      { name: 'email', label: 'Email', type: 'email', required: true },
      { name: 'company', label: 'Company', type: 'text' },
      { name: 'resource_interest', label: 'Resource interest', type: 'select', required: true, options: ['Launch checklist', 'Supplier checklist', 'COA guide', 'Packaging guide', 'Fulfillment checklist'] },
      { name: 'consent', label: 'I agree to receive research-use brand launch resources and follow-up.', type: 'checkbox', required: true },
    ],
  },
  contact: {
    formName: 'contact',
    title: 'Contact PeptideBrand',
    submitLabel: 'Send message',
    action: '/thank-you',
    event: 'contact_form_submit',
    fields: [
      { name: 'name', label: 'Name', type: 'text', required: true },
      { name: 'email', label: 'Email', type: 'email', required: true },
      { name: 'company', label: 'Company', type: 'text' },
      { name: 'topic', label: 'Topic', type: 'select', required: true, options: ['Sourcing', 'White label', 'Lab testing', 'COAs', 'Fulfillment', 'General question'] },
      { name: 'message', label: 'Message', type: 'textarea', required: true },
      { name: 'consent', label: 'I agree to be contacted about my research-use business inquiry.', type: 'checkbox', required: true },
    ],
  },
};

export function LeadForm({ variant = 'quote', dark = false }: { variant?: LeadFormVariant; dark?: boolean }) {
  const id = useId();
  const router = useRouter();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const config = variantConfig[variant];
  const labelClass = dark ? 'text-white/90' : 'text-ink';
  const inputClass = dark
    ? 'rounded-2xl border border-white/10 bg-midnight/60 px-4 py-3 text-white placeholder:text-white/40 outline-none ring-cyan/25 transition focus:border-cyan/60 focus:ring-4'
    : 'rounded-2xl border border-slate-200 bg-white px-4 py-3 text-ink outline-none ring-teal/20 transition focus:border-teal focus:ring-4';

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus('idle');
    if (!form.checkValidity()) {
      setStatus('error');
      form.reportValidity();
      return;
    }
    setStatus('loading');
    const formData = new FormData(form);
    const honeypot = String(formData.get('honeypot') ?? '');
    const fields = Object.fromEntries(config.fields.map((field) => [field.name, formData.get(field.name)]));
    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formName: config.formName, honeypot, fields }),
      });
      if (!response.ok) throw new Error('Submission failed');
      trackConversion({ event: config.event, formName: config.formName, formVariant: variant, pagePath: typeof window === 'undefined' ? undefined : window.location.pathname });
      setStatus('success');
      router.push(config.action);
    } catch {
      setStatus('error');
    }
  }

  return (
    <form name={config.formName} onSubmit={handleSubmit} className={`grid gap-5 rounded-4xl p-6 ${dark ? 'glass-panel' : 'border border-slate-200 bg-white shadow-soft'}`} noValidate>
      <p className="hidden"><label htmlFor={`${id}-honeypot`}>Do not fill this out<input id={`${id}-honeypot`} name="honeypot" tabIndex={-1} autoComplete="off" /></label></p>
      <div>
        <h2 className={`font-display text-3xl font-bold ${dark ? 'text-white' : 'text-navy'}`}>{config.title}</h2>
        <p className={`mt-2 text-sm ${dark ? 'text-white/70' : 'text-slate-500'}`}>Fields marked with * are required.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {config.fields.map((field) => {
          const fieldId = `${id}-${field.name}`;
          const label = `${field.label}${field.required ? ' *' : ''}`;
          if (field.type === 'textarea') {
            return <label key={field.name} htmlFor={fieldId} className={`grid gap-2 text-sm font-semibold sm:col-span-2 ${labelClass}`}>{label}<textarea id={fieldId} name={field.name} required={field.required} rows={4} placeholder={field.placeholder} className={inputClass} /></label>;
          }
          if (field.type === 'select') {
            return <label key={field.name} htmlFor={fieldId} className={`grid gap-2 text-sm font-semibold ${labelClass}`}>{label}<select id={fieldId} name={field.name} required={field.required} defaultValue="" className={inputClass}><option value="" disabled>Select one</option>{field.options?.map((option) => <option key={option}>{option}</option>)}</select></label>;
          }
          if (field.type === 'checkbox') {
            return <label key={field.name} htmlFor={fieldId} className={`flex gap-3 text-sm font-semibold sm:col-span-2 ${labelClass}`}><input id={fieldId} name={field.name} type="checkbox" required={field.required} value="yes" className="mt-1 h-4 w-4 rounded border-slate-300 text-teal" /><span>{label}</span></label>;
          }
          return <label key={field.name} htmlFor={fieldId} className={`grid gap-2 text-sm font-semibold ${labelClass}`}>{label}<input id={fieldId} name={field.name} type={field.type} required={field.required} placeholder={field.placeholder} className={inputClass} /></label>;
        })}
      </div>
      {status === 'error' && <p role="alert" className="rounded-2xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">Please complete the required fields before submitting.</p>}
      {status === 'loading' && <p role="status" className={`text-sm font-semibold ${dark ? 'text-white/75' : 'text-slate-600'}`}>Submitting securely…</p>}
      {status === 'success' && <p role="status" className="rounded-2xl bg-teal/10 px-4 py-3 text-sm font-semibold text-teal">Submission received. Redirecting to the confirmation page…</p>}
      <button disabled={status === 'loading'} className="rounded-full border border-cyan/40 bg-cyan px-5 py-3 font-black text-midnight shadow-glow transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-70">{status === 'loading' ? 'Submitting…' : config.submitLabel}</button>
      <p className={`text-xs ${dark ? 'text-white/60' : 'text-slate-500'}`}>Privacy note: your details are used to respond to this research-use business inquiry.</p>
    </form>
  );
}
