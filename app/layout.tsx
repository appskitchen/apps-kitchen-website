import type { Metadata } from 'next'
import './globals.css'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://appskitchen.io'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Apps Kitchen — We Build What Grows',
    template: '%s | Apps Kitchen',
  },
  description: 'Apps Kitchen is a Lagos-based software studio specialising in fintech and asset management mobile applications. Flutter, NestJS, Laravel.',
  keywords: ['mobile app development', 'fintech', 'Flutter', 'NestJS', 'Lagos', 'Nigeria', 'investment app', 'software studio'],
  authors: [{ name: 'Apps Kitchen' }],
  creator: 'Apps Kitchen',
  openGraph: {
    title: 'Apps Kitchen — We Build What Grows',
    description: 'Mobile app studio specialising in fintech and asset management applications. Based in Lagos, Nigeria.',
    type: 'website',
    url: SITE_URL,
    siteName: 'Apps Kitchen',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apps Kitchen — We Build What Grows',
    description: 'Mobile app studio specialising in fintech and asset management applications.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to font CDN to reduce latency */}
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="" />
      </head>
      <body>
        <a href="#main-content" className="skip-nav">Skip to main content</a>
        <main id="main-content">{children}</main>
      </body>
    </html>
  )
}
