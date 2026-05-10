import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="ak-footer" style={{
      borderTop: '1px solid var(--ak-border)',
      padding: '40px 60px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      flexWrap: 'wrap', gap: '24px',
    }}>
      <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
        <Image src="/logo.svg" alt="Apps Kitchen" width={160} height={46} style={{ objectFit: 'contain', height: '34px', width: 'auto' }} />
      </Link>
      <ul className="ak-footer-links" style={{
        display: 'flex', gap: '32px', listStyle: 'none',
        fontSize: '13px', color: 'var(--ak-muted)', flexWrap: 'wrap',
      }}>
        <li><a href="mailto:jonahrchirika@gmail.com" style={{ transition: 'color 0.2s' }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--ak-white)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--ak-muted)')}>jonahrchirika@gmail.com</a></li>
        <li><a href="tel:+2349071752006" style={{ transition: 'color 0.2s' }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--ak-white)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--ak-muted)')}>+234 907 175 2006</a></li>
        <li style={{ color: 'var(--ak-muted)' }}>Lagos, Nigeria</li>
      </ul>
      <div style={{ fontSize: '12px', color: '#555' }}>© 2026 Apps Kitchen. All rights reserved.</div>
      <style>{`
        @media (max-width: 900px) {
          .ak-footer {
            padding: 28px 18px !important;
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 14px !important;
          }
          .ak-footer-links {
            width: 100% !important;
            gap: 12px !important;
            flex-direction: column !important;
            align-items: flex-start !important;
          }
        }
      `}</style>
    </footer>
  )
}
