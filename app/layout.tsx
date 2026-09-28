import type { Metadata } from 'next'
import './globals.css'
import Preloader from './components/Preloader'

export const metadata: Metadata = {
  title: 'Apps Kitchen — We Build What Grows',
  description: 'Apps Kitchen is a product studio specialising in fintech and asset management applications.',
  openGraph: {
    title: 'Apps Kitchen — We Build What Grows',
    description: 'Mobile app studio specialising in fintech and asset management applications.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Preloader />
        {children}
      </body>
    </html>
  )
}
