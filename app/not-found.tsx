import Link from 'next/link'
import Nav from './components/Nav'
import Footer from './components/Footer'

export default function NotFound() {
  return (
    <>
      <Nav />
      <div style={{ paddingTop: '120px', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <section style={{
          flex: 1, display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          padding: '80px 60px', textAlign: 'center',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', width: '500px', height: '400px',
            background: 'radial-gradient(ellipse, rgba(232,56,13,0.10), transparent 70%)',
            top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
          }} />
          <div style={{
            fontFamily: "'Satoshi', sans-serif",
            fontSize: 'clamp(100px, 18vw, 180px)',
            fontWeight: 900, lineHeight: 1,
            letterSpacing: '-0.06em', color: 'rgba(232,56,13,0.15)',
            position: 'relative', marginBottom: '16px',
          }}>404</div>
          <h1 style={{
            fontFamily: "'Satoshi', sans-serif",
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 700, lineHeight: 1.1,
            letterSpacing: '-0.03em', marginBottom: '16px',
            position: 'relative',
          }}>Page not found</h1>
          <p style={{ fontSize: '16px', color: 'var(--ak-muted)', maxWidth: '380px', lineHeight: 1.7, marginBottom: '40px', position: 'relative' }}>
            Looks like this page doesn't exist. It may have been moved or deleted.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', position: 'relative' }}>
            <Link href="/" style={{
              background: 'var(--ak-red)', color: '#fff',
              fontWeight: 600, fontSize: '15px',
              padding: '14px 32px', borderRadius: '100px',
            }}>Go Home</Link>
            <Link href="/contact" style={{
              fontWeight: 600, fontSize: '15px',
              padding: '14px 32px', borderRadius: '100px',
              border: '1px solid var(--ak-border)', color: 'var(--ak-muted)',
            }}>Contact Us</Link>
          </div>
        </section>
        <Footer />
      </div>
    </>
  )
}
