import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — Apps Kitchen',
  description: 'Apps Kitchen is a Lagos-based software studio with 8+ years building production-grade fintech and mobile applications across Nigeria and beyond.',
  openGraph: {
    title: 'About — Apps Kitchen',
    description: 'A software studio built by engineers who ship. Learn about our origin, team, and principles.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About — Apps Kitchen',
    description: 'A software studio built by engineers who ship.',
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
