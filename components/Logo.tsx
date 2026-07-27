import Image from 'next/image';
import Link from 'next/link';
import { brandAssets } from '@/lib/assets';

export function Logo({ variant = 'full', className = '' }: { variant?: 'full' | 'icon'; className?: string }) {
  return (
    <Link href="/" className={`flex items-center ${className}`} aria-label="Peptide Brand home">
      {variant === 'full' ? (
        <Image src={brandAssets.logoFull} alt="Peptide Brand" width={2172} height={724} priority sizes="200px" className="h-7 w-auto sm:h-8" />
      ) : (
        <Image src={brandAssets.logoIcon} alt="Peptide Brand" width={1254} height={1254} sizes="40px" className="h-8 w-8 shrink-0 sm:h-9 sm:w-9" />
      )}
    </Link>
  );
}
