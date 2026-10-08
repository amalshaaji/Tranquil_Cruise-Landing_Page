/** Border inspired by the gold-edged kasavu cloth worn across Kerala. */
export function Kasavu({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      width="100%"
      height="14"
      preserveAspectRatio="none"
    >
      <defs>
        <pattern id="kasavu" width="22" height="14" patternUnits="userSpaceOnUse">
          <path d="M11 3 L16 7 L11 11 L6 7 Z" fill="var(--color-gold)" />
        </pattern>
      </defs>
      <rect width="100%" height="14" fill="var(--color-paper)" />
      <rect width="100%" height="1.5" y="0.5" fill="var(--color-gold)" />
      <rect width="100%" height="1.5" y="12" fill="var(--color-gold)" />
      <rect width="100%" height="14" fill="url(#kasavu)" />
    </svg>
  );
}
