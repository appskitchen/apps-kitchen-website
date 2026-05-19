import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact — Apps Kitchen',
  description: 'Start a project with Apps Kitchen. Share your idea and we\'ll map out a build plan together. We take on a limited number of projects each quarter.',
  openGraph: {
    title: 'Contact — Apps Kitchen',
    description: 'Start a project with Apps Kitchen. We partner with startups and financial institutions to turn ideas into deployed applications.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact — Apps Kitchen',
    description: 'Start a project with Apps Kitchen.',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
