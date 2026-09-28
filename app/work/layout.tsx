import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Work — Apps Kitchen',
  description: 'Explore Apps Kitchen\'s portfolio of live fintech, investment, and mobile applications — shipped to the App Store and Google Play.',
  openGraph: {
    title: 'Our Work — Apps Kitchen',
    description: 'Live apps shipped to production: First Edge, NorrenWorld, Corper Invest, and more.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Work — Apps Kitchen',
    description: 'Live apps shipped to production: First Edge, NorrenWorld, Corper Invest, and more.',
  },
}

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
