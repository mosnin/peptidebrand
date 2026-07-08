const formDefinitions = [
  { name: 'main-quote', fields: ['name', 'email', 'company', 'website', 'product_category', 'monthly_volume', 'needed_services', 'timeline', 'budget_range', 'message', 'consent'], action: '/quote-submitted' },
  { name: 'supplier-sourcing', fields: ['name', 'email', 'company', 'target_catalog', 'supplier_need', 'message', 'consent'], action: '/thank-you' },
  { name: 'white-label-inquiry', fields: ['name', 'email', 'company', 'website', 'launch_stage', 'message', 'consent'], action: '/thank-you' },
  { name: 'lab-testing-inquiry', fields: ['name', 'email', 'company', 'testing_need', 'batch_count', 'message', 'consent'], action: '/thank-you' },
  { name: 'resource-download', fields: ['name', 'email', 'company', 'resource_interest', 'consent'], action: '/resource-requested' },
  { name: 'contact', fields: ['name', 'email', 'company', 'topic', 'message', 'consent'], action: '/thank-you' },
];

export function NetlifyFormDefinitions() {
  return (
    <div hidden aria-hidden="true">
      {formDefinitions.map((form) => (
        <form key={form.name} name={form.name} method="POST" action={form.action} data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value={form.name} />
          <input name="bot-field" />
          {form.fields.map((field) => <input key={field} name={field} />)}
        </form>
      ))}
    </div>
  );
}
