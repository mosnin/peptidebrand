export type ConversionEventName = 'lead_form_submit' | 'resource_form_submit' | 'contact_form_submit';

type ConversionEvent = {
  event: ConversionEventName;
  formName: string;
  formVariant: string;
  pagePath?: string;
};

declare global {
  interface Window {
    dataLayer?: ConversionEvent[];
  }
}

export function trackConversion(event: ConversionEvent) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(event);
  window.dispatchEvent(new CustomEvent('peptidebrand:conversion', { detail: event }));
}
