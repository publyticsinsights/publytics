interface LogoProps {
  className?: string;
  showWordmark?: boolean;
}

export function Logo({ className = "", showWordmark = true }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 64 64"
        role="img"
        aria-label="Publytics logo"
        className="h-8 w-8 shrink-0 text-current"
      >
        <path
          d="M32 4C16.536 4 4 15.64 4 30c0 8.05 3.94 15.25 10.12 20.02V60l9.3-6.02c2.72.65 5.6 1 8.58 1 15.464 0 28-11.64 28-24.98C60 15.64 47.464 4 32 4Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
        />
        <rect x="19" y="30" width="6" height="12" rx="1.5" fill="currentColor" />
        <rect x="29" y="20" width="6" height="22" rx="1.5" fill="currentColor" />
        <rect x="39" y="26" width="6" height="16" rx="1.5" fill="currentColor" />
      </svg>
      {showWordmark && (
        <span className="font-display text-lg font-extrabold tracking-[0.14em] text-current">
          PUBLYTICS
        </span>
      )}
    </span>
  );
}
