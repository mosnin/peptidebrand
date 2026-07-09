import Link from 'next/link';

export function StickyMobileCTA() {
  return <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 p-3 shadow-soft backdrop-blur md:hidden"><Link href="/quote" className="flex w-full items-center justify-center rounded-full bg-blue px-5 py-3 text-sm font-black text-white shadow-glow">Get sourcing quote</Link></div>;
}
