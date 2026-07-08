import Link from 'next/link';
import type { ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

const variants: Record<ButtonVariant, string> = {
  primary: 'border border-cyan/40 bg-cyan text-midnight shadow-glow hover:-translate-y-0.5 hover:bg-white',
  secondary: 'border border-white/20 bg-white/10 text-white hover:-translate-y-0.5 hover:border-cyan/50 hover:bg-white/20',
  ghost: 'border border-transparent bg-transparent text-cyan hover:bg-cyan/10',
};

const sizes: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-3 text-sm',
  lg: 'px-6 py-4 text-base',
};

export function Button({ href, children, variant = 'primary', size = 'md', className = '' }: { href: string; children: ReactNode; variant?: ButtonVariant; size?: ButtonSize; className?: string }) {
  return <Link href={href} className={`inline-flex items-center justify-center rounded-full font-bold transition duration-200 ${variants[variant]} ${sizes[size]} ${className}`}>{children}</Link>;
}
