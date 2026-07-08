import Link from 'next/link';
import { brandAssets } from '@/lib/assets';

export function Logo({ variant = 'full', className = '' }: { variant?: 'full' | 'icon'; className?: string }) {
  return (
    <Link href="/" className={`flex items-center ${className}`} aria-label="Peptide Brand home">
      {variant === 'full' ? (
        <img src={brandAssets.logoFull} alt="Peptide Brand" width={168} height={34} className="h-7 w-auto sm:h-8" />
      ) : (
        <img src={brandAssets.logoIcon} alt="Peptide Brand" width={36} height={36} className="h-8 w-8 shrink-0 sm:h-9 sm:w-9" />
      )}
    </Link>
  );
}
