export default function AppIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="4" y="5" width="16" height="14" rx="3" stroke="currentColor" strokeWidth="1.8" />
      <path d="M9 3V7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M15 3V7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M8 11H16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}
