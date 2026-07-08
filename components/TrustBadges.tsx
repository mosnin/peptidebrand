import { brandAssets } from '@/lib/assets';

const badges = [
  { src: brandAssets.madeInUsaBadge, alt: 'Made in the USA' },
  { src: brandAssets.labTestedBadge, alt: 'Lab tested for purity' },
  { src: brandAssets.catalogBadge, alt: '100+ peptide catalog' },
];

export function TrustBadges({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-6 ${className}`}>
      {badges.map((badge) => (
        <img key={badge.alt} src={badge.src} alt={badge.alt} width={96} height={96} className="h-16 w-16 sm:h-20 sm:w-20" />
      ))}
    </div>
  );
}
