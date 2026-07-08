import type { ReactNode } from 'react';

export function Section({ children, className = '' }: { children: ReactNode; className?: string }) {
  const usesDarkSection = /(?:^|\s)dark-section(?:\s|$)/.test(className);
  const hasBackgroundClass = usesDarkSection || /(?:^|\s)bg-/.test(className);
  const hasTextClass = usesDarkSection || /(?:^|\s)text-/.test(className);
  const defaultBackground = hasBackgroundClass ? '' : 'bg-white';
  const defaultText = hasTextClass ? '' : 'text-ink';

  return <section className={`py-16 sm:py-24 ${defaultBackground} ${defaultText} ${className}`}>{children}</section>;
}
