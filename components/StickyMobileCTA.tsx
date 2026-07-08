import Link from 'next/link';

export function StickyMobileCTA() {
  return <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-midnight/95 p-3 backdrop-blur md:hidden"><Link href="/quote" className="flex w-full items-center justify-center rounded-full bg-cyan px-5 py-3 text-sm font-black text-midnight shadow-glow">Get sourcing quote</Link></div>;
}
