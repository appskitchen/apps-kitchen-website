import type { Metadata } from 'next'
import './globals.css'
import Preloader from './components/Preloader'

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
<<<<<<< HEAD
      <body suppressHydrationWarning>
        <Preloader />
        {children}
=======
      <head>
        {/* Preconnect to font CDN to reduce latency */}
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="" />
      </head>
      <body suppressHydrationWarning>
        <a href="#main-content" className="skip-nav">Skip to main content</a>
        <main id="main-content">{children}</main>
>>>>>>> 235fa4f1ab58cb9421129efd72581e810113184a
      </body>
    </html>
  )
}
