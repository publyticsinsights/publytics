interface LogoProps {
  className?: string;
  showWordmark?: boolean;
}

/**
 * The mark is a public seal: a ring with a recorded bar-series inside it.
 * Never rendered in the live-data or seal colours — the reservation
 * applies to the identity too.
 */
export function Logo({ className = "", showWordmark = true }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg viewBox="0 0 24 24" role="img" aria-label="Publytics" className="h-[1.35rem] w-[1.35rem] shrink-0">
        <circle cx="12" cy="12" r="10.4" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <rect x="7.4" y="12.2" width="2.1" height="5.1" fill="currentColor" />
        <rect x="10.95" y="8.4" width="2.1" height="8.9" fill="currentColor" />
        <rect x="14.5" y="10.4" width="2.1" height="6.9" fill="currentColor" />
      </svg>
      {showWordmark && (
        <span className="font-display text-[1.0625rem] font-medium tracking-[-0.02em] text-current">
          Publytics
        </span>
      )}
    </span>
  );
}
