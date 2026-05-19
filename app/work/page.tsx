'use client'
import Link from 'next/link'
import Image from 'next/image'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import AppIcon from '../components/AppIcon'
import StoreIcon from '../components/StoreIcon'
import { useReveal } from '../hooks/useReveal'
import { apps } from '../data/apps'

const statusColor = (s: string) => {
  if (s === 'Live') return { bg: 'rgba(34,197,94,0.1)', border: 'rgba(34,197,94,0.3)', color: '#22c55e' }
  if (s === 'New') return { bg: 'rgba(232,56,13,0.1)', border: 'rgba(232,56,13,0.3)', color: '#E8380D' }
  return { bg: 'rgba(255,255,255,0.05)', border: 'var(--ak-border)', color: 'var(--ak-muted)' }
}

export default function WorkPage() {
  useReveal(0.05)

  return (
    <>
      <Nav />
      <div style={{ paddingTop: '120px', minHeight: '100vh' }}>
        {/* Header */}
        <section style={{ padding: '60px 60px 80px' }}>
          <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ak-red)', marginBottom: '20px' }}>Our Work</div>
          <h1 style={{ fontFamily: "'Satoshi', sans-serif", fontSize: 'clamp(48px, 6vw, 88px)', fontWeight: 900, lineHeight: 0.95, letterSpacing: '-0.04em', marginBottom: '24px' }}>
            Products that<br /><em style={{ color: 'var(--ak-red)', fontStyle: 'italic' }}>ship.</em>
          </h1>
          <p style={{ fontSize: '18px', color: 'var(--ak-muted)', maxWidth: '520px', lineHeight: 1.7 }}>
            Every project below is built with care — clean architecture, polished UX, and a relentless focus on what actually works in production.
          </p>
        </section>

        {/* Grid */}
        <section style={{ padding: '0 60px 120px', borderTop: '1px solid var(--ak-border)' }}>
          <div className="work-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginTop: '60px' }}>
            {apps.map((app) => {
              const sc = statusColor(app.badge || app.status)
              return (
                <div key={app.id} className="reveal work-card" style={{
                  background: 'var(--ak-card)', border: '1px solid var(--ak-border)',
                  borderRadius: '20px', padding: '32px 28px',
                  display: 'flex', flexDirection: 'column',
                  transition: 'all 0.3s', cursor: 'default',
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(232,56,13,0.35)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--ak-border)'; e.currentTarget.style.transform = 'translateY(0)' }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                    {app.image ? (
                      <a
                        href={app.android || app.ios}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="work-media"
                        style={{
                          width: '140px', height: '90px', borderRadius: '14px',
                          overflow: 'hidden', border: '1px solid var(--ak-border)',
                          display: 'block', background: 'rgba(255,255,255,0.03)', position: 'relative',
                        }}
                      >
                        <div style={{
                          position: 'absolute', top: '8px', left: '8px', zIndex: 2,
                          width: '30px', height: '30px', borderRadius: '10px',
                          background: 'rgba(10,10,10,0.65)', color: 'var(--ak-white)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          border: '1px solid rgba(255,255,255,0.2)',
                        }}><AppIcon size={20} /></div>
                        <Image
                          src={app.image}
                          alt={`${app.name} app screenshot`}
                          width={560}
                          height={360}
                          style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scale(1.03)' }}
                        />
                      </a>
                    ) : (
                      <div className="work-icon" style={{
                        width: '64px', height: '64px', borderRadius: '16px',
                        background: 'rgba(255,255,255,0.06)', border: '1px solid var(--ak-border)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--ak-white)',
                      }}><AppIcon size={20} /></div>
                    )}
                    <span style={{
                      fontSize: '10px', fontWeight: 600, letterSpacing: '0.08em',
                      textTransform: 'uppercase', padding: '4px 10px', borderRadius: '100px',
                      background: sc.bg, border: `1px solid ${sc.border}`, color: sc.color,
                    }}>{app.badge || app.status}</span>
                  </div>

                  <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ak-muted)', marginBottom: '8px' }}>{app.category}</div>
                  {app.downloads && (
                    <div style={{
                      marginBottom: '10px', display: 'inline-flex', alignItems: 'center', gap: '7px',
                      width: 'fit-content', color: 'var(--ak-white)',
                      border: '1px solid rgba(255,255,255,0.16)', borderRadius: '999px',
                      padding: '4px 10px', fontSize: '11px', fontWeight: 600, letterSpacing: '0.04em',
                      background: 'rgba(255,255,255,0.04)',
                    }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M12 4V14M12 14L8.5 10.5M12 14L15.5 10.5M5 17.5H19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {app.downloads} downloads
                    </div>
                  )}
                  <h3 style={{ fontFamily: "'Satoshi', sans-serif", fontSize: '22px', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '12px' }}>{app.name}</h3>
                  <p style={{ fontSize: '14px', color: 'var(--ak-muted)', lineHeight: 1.6, flex: 1, marginBottom: '20px' }}>{app.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                    {app.stack.map(t => (
                      <span key={t} style={{
                        fontSize: '11px', fontWeight: 500, padding: '3px 10px',
                        borderRadius: '100px', border: '1px solid var(--ak-border)', color: 'var(--ak-muted)',
                      }}>{t}</span>
                    ))}
                  </div>
                  <div className="work-actions" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    {app.android && (
                      <a href={app.android} target="_blank" rel="noopener noreferrer" className="work-btn" style={{
                        fontSize: '12px', fontWeight: 500, color: 'var(--ak-muted)',
                        border: '1px solid var(--ak-border)', borderRadius: '100px',
                        padding: '8px 14px', transition: 'all 0.2s',
                        display: 'inline-flex', alignItems: 'center', gap: '8px',
                      }}
                        onMouseEnter={e => { e.currentTarget.style.color = 'var(--ak-white)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)' }}
                        onMouseLeave={e => { e.currentTarget.style.color = 'var(--ak-muted)'; e.currentTarget.style.borderColor = 'var(--ak-border)' }}
                      ><span style={{ color: 'var(--ak-white)', display: 'inline-flex' }}><StoreIcon type="android" /></span>Android</a>
                    )}
                    {app.ios && (
                      <a href={app.ios} target="_blank" rel="noopener noreferrer" className="work-btn" style={{
                        fontSize: '12px', fontWeight: 500, color: 'var(--ak-muted)',
                        border: '1px solid var(--ak-border)', borderRadius: '100px',
                        padding: '8px 14px', transition: 'all 0.2s',
                        display: 'inline-flex', alignItems: 'center', gap: '8px',
                      }}
                        onMouseEnter={e => { e.currentTarget.style.color = 'var(--ak-white)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)' }}
                        onMouseLeave={e => { e.currentTarget.style.color = 'var(--ak-muted)'; e.currentTarget.style.borderColor = 'var(--ak-border)' }}
                      ><span style={{ color: 'var(--ak-white)', display: 'inline-flex' }}><StoreIcon type="ios" /></span>iOS</a>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* CTA strip */}
        <section style={{ borderTop: '1px solid var(--ak-border)', padding: '80px 60px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '32px' }}>
          <div>
            <h2 style={{ fontFamily: "'Satoshi', sans-serif", fontSize: 'clamp(28px, 3vw, 44px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '12px' }}>Want to be on this list?</h2>
            <p style={{ fontSize: '16px', color: 'var(--ak-muted)' }}>Let's talk about your idea and what it takes to ship it.</p>
          </div>
          <Link href="/contact" style={{
            background: 'var(--ak-red)', color: '#fff',
            fontWeight: 600, fontSize: '15px',
            padding: '16px 36px', borderRadius: '100px',
            transition: 'all 0.2s', whiteSpace: 'nowrap',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--ak-red-dark)'; e.currentTarget.style.transform = 'translateY(-1px)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--ak-red)'; e.currentTarget.style.transform = 'translateY(0)' }}
          >Start a Project →</Link>
        </section>
      </div>
      <Footer />
      <style>{`
        @media (max-width: 900px) {
          section { padding-left: 18px !important; padding-right: 18px !important; }
          .work-grid { grid-template-columns: 1fr !important; }
          .work-card { padding: 20px 16px !important; border-radius: 18px !important; }
          .work-media { width: 100% !important; height: 190px !important; }
          .work-actions { width: 100% !important; flex-direction: column !important; }
          .work-btn { width: 100% !important; justify-content: center !important; font-size: 13px !important; }
        }
      `}</style>
    </>
  )
}
