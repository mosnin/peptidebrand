import Link from 'next/link';
import type { ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

const variants: Record<ButtonVariant, string> = {
  primary: 'border border-blue bg-blue text-white shadow-glow hover:-translate-y-0.5 hover:bg-navy hover:border-navy',
  secondary: 'border border-slate-300 bg-white text-navy hover:-translate-y-0.5 hover:border-blue hover:text-blue',
  ghost: 'border border-transparent bg-transparent text-blue hover:bg-blue/10',
};

const sizes: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-3 text-sm',
  lg: 'px-6 py-4 text-base',
};

export function Button({ href, children, variant = 'primary', size = 'md', className = '' }: { href: string; children: ReactNode; variant?: ButtonVariant; size?: ButtonSize; className?: string }) {
  return <Link href={href} className={`inline-flex items-center justify-center rounded-full font-bold transition duration-200 ${variants[variant]} ${sizes[size]} ${className}`}>{children}</Link>;
}
