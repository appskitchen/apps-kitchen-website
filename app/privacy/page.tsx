import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy — Apps Kitchen',
  description: 'Privacy Policy for Apps Kitchen — how we collect, use, and protect your information.',
}

export default function PrivacyPage() {
  const lastUpdated = 'May 2026'

  return (
    <>
      <Nav />
      <div style={{ paddingTop: '120px', minHeight: '100vh' }}>
        <section style={{ padding: '60px 60px 120px', maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ak-red)', marginBottom: '20px' }}>Legal</div>
          <h1 style={{
            fontFamily: "'Satoshi', sans-serif",
            fontSize: 'clamp(36px, 5vw, 56px)',
            fontWeight: 900, lineHeight: 1.05,
            letterSpacing: '-0.03em', marginBottom: '12px',
          }}>Privacy Policy</h1>
          <p style={{ fontSize: '14px', color: 'var(--ak-muted)', marginBottom: '60px' }}>Last updated: {lastUpdated}</p>

          {[
            {
              title: '1. Who we are',
              body: 'Apps Kitchen is a software development studio based in Lagos, Nigeria. We build mobile and web applications for startups and financial institutions. You can contact us at jonahrchirika@gmail.com.',
            },
            {
              title: '2. What information we collect',
              body: 'When you submit our contact form, we collect your name, email address, company name (optional), and the message you send. We do not collect any information passively unless you have explicitly provided it.',
            },
            {
              title: '3. How we use your information',
              body: 'We use your contact information solely to respond to your inquiry and communicate about potential projects. We do not use your information for marketing without your explicit consent, and we do not sell or share your data with third parties for any commercial purpose.',
            },
            {
              title: '4. Data storage and security',
              body: 'Contact form submissions are delivered to our email inbox via Resend (resend.com), a transactional email service. We retain inquiry data for as long as is reasonably necessary to manage our business relationship with you.',
            },
            {
              title: '5. Cookies',
              body: 'This website stores your theme preference (light or dark mode) in your browser\'s localStorage. No tracking cookies or third-party analytics cookies are set.',
            },
            {
              title: '6. Your rights',
              body: 'You have the right to request access to, correction of, or deletion of any personal data we hold about you. To exercise these rights, contact us at jonahrchirika@gmail.com and we will respond within 30 days.',
            },
            {
              title: '7. Changes to this policy',
              body: 'We may update this privacy policy from time to time. The date at the top of this page reflects when it was last revised. Continued use of the site after changes constitutes acceptance of the updated policy.',
            },
            {
              title: '8. Contact',
              body: 'For any privacy-related questions or requests, please email jonahrchirika@gmail.com or write to us at: Apps Kitchen, Lagos, Nigeria.',
            },
          ].map((section) => (
            <div key={section.title} style={{ marginBottom: '40px' }}>
              <h2 style={{
                fontFamily: "'Satoshi', sans-serif",
                fontSize: '20px', fontWeight: 700,
                letterSpacing: '-0.01em', marginBottom: '12px',
              }}>{section.title}</h2>
              <p style={{ fontSize: '15px', color: 'var(--ak-muted)', lineHeight: 1.75 }}>{section.body}</p>
            </div>
          ))}

          <div style={{ marginTop: '60px', paddingTop: '40px', borderTop: '1px solid var(--ak-border)' }}>
            <Link href="/" style={{ fontSize: '14px', color: 'var(--ak-red)', fontWeight: 600 }}>← Back to Home</Link>
          </div>
        </section>
      </div>
      <Footer />
      <style>{`
        @media (max-width: 900px) {
          section { padding-left: 24px !important; padding-right: 24px !important; }
        }
      `}</style>
    </>
  )
}
