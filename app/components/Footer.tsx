import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="ak-footer" style={{
      borderTop: '1px solid var(--ak-border)',
      padding: '40px 60px',
    }}>
      <div className="ak-footer-inner" style={{
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
          <li><a href="mailto:jonahrchirika@gmail.com" className="footer-link">jonahrchirika@gmail.com</a></li>
          <li><a href="tel:+2349071752006" className="footer-link">+234 907 175 2006</a></li>
          <li style={{ color: 'var(--ak-muted)' }}>Lagos, Nigeria</li>
        </ul>

        <nav aria-label="Footer navigation" style={{ display: 'flex', gap: '24px', fontSize: '13px' }}>
          <Link href="/about" className="footer-link">About</Link>
          <Link href="/work" className="footer-link">Work</Link>
          <Link href="/contact" className="footer-link">Contact</Link>
          <Link href="/privacy" className="footer-link">Privacy</Link>
        </nav>
      </div>

      <div style={{
        marginTop: '32px', paddingTop: '24px',
        borderTop: '1px solid var(--ak-border)',
        fontSize: '12px', color: '#555',
      }}>© {year} Apps Kitchen. All rights reserved.</div>

      <style>{`
        .footer-link {
          color: var(--ak-muted);
          transition: color 0.2s;
        }
        .footer-link:hover { color: var(--ak-white); }
        @media (max-width: 900px) {
          .ak-footer {
            padding: 28px 18px !important;
          }
          .ak-footer-inner {
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
