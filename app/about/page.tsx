'use client'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { useReveal } from '../hooks/useReveal'

export default function AboutPage() {
  useReveal()

  return (
    <>
      <Nav />
      <div style={{ paddingTop: '120px' }}>
        {/* Hero */}
        <section style={{ padding: '80px 60px', borderBottom: '1px solid var(--ak-border)' }}>
          <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ak-red)', marginBottom: '20px' }}>About Apps Kitchen</div>
          <h1 style={{
            fontFamily: "'Satoshi', sans-serif", fontSize: 'clamp(52px, 7vw, 96px)',
            fontWeight: 900, lineHeight: 0.92, letterSpacing: '-0.04em', marginBottom: '40px',
            maxWidth: '900px',
          }}>
            A studio built<br />by people who<br /><em style={{ color: 'var(--ak-red)', fontStyle: 'italic' }}>ship.</em>
          </h1>
          <p style={{ fontSize: '20px', color: 'var(--ak-muted)', maxWidth: '600px', lineHeight: 1.7 }}>
            We&rsquo;re not an agency that outsources your idea. We&rsquo;re engineers and designers who build things end-to-end — and care about what happens after launch.
          </p>
        </section>

        {/* Origin story */}
        <section className="about-origin" style={{ padding: '100px 60px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', borderBottom: '1px solid var(--ak-border)' }}>
          <div>
            <div className="reveal" style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ak-red)', marginBottom: '20px' }}>Our Origin</div>
            <h2 className="reveal" style={{ fontFamily: "'Satoshi', sans-serif", fontSize: 'clamp(32px, 3.5vw, 52px)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: '28px' }}>
              Born from years of building real products.
            </h2>
            <p className="reveal" style={{ fontSize: '16px', color: 'var(--ak-muted)', lineHeight: 1.8, marginBottom: '24px' }}>
              Apps Kitchen was founded out of a simple frustration: too many mobile agencies promise &ldquo;world-class apps&rdquo; and deliver under-engineered prototypes that collapse at scale.
            </p>
            <p className="reveal" style={{ fontSize: '16px', color: 'var(--ak-muted)', lineHeight: 1.8, marginBottom: '24px' }}>
              With over 8 years in the trenches — fintech, agritech, healthtech, government — we knew there was a better way. Apps Kitchen is the answer: a studio that applies the same standards to a ₦5M MVP as it does to an enterprise platform.
            </p>
            <p className="reveal" style={{ fontSize: '16px', color: 'var(--ak-muted)', lineHeight: 1.8 }}>
              Based in Lagos, we build for Nigeria and beyond.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            {[
              { num: '8+', label: 'Years in production-grade mobile and backend development' },
              { num: '10K+', label: 'Google Play downloads across fintech products', sourceHref: 'https://play.google.com/store/apps/details?id=com.first_assetmanagement.firstedge' },
              { num: '5+', label: 'Industries — fintech, agritech, health, language, GIS' },
              { num: '2', label: 'Platforms — iOS and Android, always simultaneously' },
            ].map((s, i) => (
              <div key={i} className="reveal">
                <div style={{ display: 'flex', alignItems: 'center', gap: '24px', padding: '28px 0', borderBottom: '1px solid var(--ak-border)' }}>
                  <div style={{ fontFamily: "'Satoshi', sans-serif", fontSize: '52px', fontWeight: 900, color: 'var(--ak-red)', letterSpacing: '-0.04em', minWidth: '100px' }}>{s.num}</div>
                  <div>
                    <p style={{ fontSize: '15px', color: 'var(--ak-muted)', lineHeight: 1.5 }}>{s.label}</p>
                    {'sourceHref' in s && s.sourceHref && (
                      <a href={s.sourceHref} target="_blank" rel="noopener noreferrer" style={{ fontSize: '12px', color: 'var(--ak-red)', fontWeight: 600, marginTop: '6px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                        Live source <span style={{ fontSize: '13px', lineHeight: 1 }}>↗</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Team / Founder */}
        <section style={{ padding: '100px 60px', background: 'var(--ak-off)', borderBottom: '1px solid var(--ak-border)' }}>
          <div className="reveal" style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ak-red)', marginBottom: '20px' }}>The Team</div>
          <h2 className="reveal" style={{ fontFamily: "'Satoshi', sans-serif", fontSize: 'clamp(36px, 4vw, 60px)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: '60px' }}>Small team.<br />Big output.</h2>
          <div className="reveal about-founder-card" style={{
            background: 'var(--ak-card)', border: '1px solid var(--ak-border)',
            borderRadius: '24px', padding: '60px',
            display: 'grid', gridTemplateColumns: 'auto 1fr',
            gap: '60px', alignItems: 'start', position: 'relative', overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', top: '-20px', right: '60px',
              fontFamily: "'Satoshi', sans-serif", fontSize: '300px', fontWeight: 900,
              color: 'rgba(232,56,13,0.04)', lineHeight: 1, pointerEvents: 'none',
            }}>&ldquo;</div>
            <div>
              <div style={{
                width: '120px', height: '120px', borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(232,56,13,0.2), rgba(232,56,13,0.05))',
                border: '2px solid rgba(232,56,13,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: "'Satoshi', sans-serif", fontSize: '36px', fontWeight: 900,
                color: 'var(--ak-red)', marginBottom: '20px',
              }}>JR</div>
              <div style={{ fontFamily: "'Satoshi', sans-serif", fontSize: '18px', fontWeight: 700 }}>Jonah Rimamchirika</div>
              <div style={{ fontSize: '13px', color: 'var(--ak-muted)', marginTop: '4px' }}>Co-Founder & Head of Engineering</div>
              <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {['Flutter (mobile)', 'NestJS / Laravel (backend)', 'Clean Architecture', 'Figma / UI Systems'].map(skill => (
                  <div key={skill} style={{
                    fontSize: '12px', padding: '4px 12px', borderRadius: '100px',
                    border: '1px solid rgba(232,56,13,0.3)', color: 'var(--ak-red)',
                    background: 'rgba(232,56,13,0.08)', display: 'inline-block',
                  }}>{skill}</div>
                ))}
              </div>
            </div>
            <div>
              <p style={{
                fontFamily: "'Satoshi', sans-serif",
                fontSize: 'clamp(18px, 2.5vw, 26px)',
                fontWeight: 600, lineHeight: 1.4, letterSpacing: '-0.02em', marginBottom: '28px',
              }}>
                &ldquo;Technology shines brightest when it&rsquo;s practical, accessible, and solves real-world problems. This principle drives every product we build across diverse businesses.&rdquo;
              </p>
              <p style={{ fontSize: '15px', color: 'var(--ak-muted)', lineHeight: 1.7, marginBottom: '16px' }}>
                Jonah leads engineering at Apps Kitchen and also serves as Head of Mobile Team at Broadheight Technologies, where he oversees Flutter development for field operations platforms.
              </p>
              <p style={{ fontSize: '15px', color: 'var(--ak-muted)', lineHeight: 1.7 }}>
                With 8+ years across fintech, healthtech, agritech, and government platforms, he brings both depth and pragmatism to every build.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section style={{ padding: '100px 60px', borderBottom: '1px solid var(--ak-border)' }}>
          <div className="reveal" style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ak-red)', marginBottom: '20px' }}>What We Stand For</div>
          <h2 className="reveal" style={{ fontFamily: "'Satoshi', sans-serif", fontSize: 'clamp(36px, 4vw, 60px)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: '60px' }}>Our principles.</h2>
          <div className="reveal about-values-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            {[
              { num: '01', title: "Ship, don't prototype", desc: "We build production-grade software from day one. No throwaway code, no 'we'll refactor later' excuses. Architecture decisions matter." },
              { num: '02', title: 'Security-first', desc: "Especially in fintech, security is not a feature — it's the foundation. JWT, encrypted storage, environment-separated secrets, always." },
              { num: '03', title: 'Design is engineering', desc: 'UI is code. We treat every pixel with the same care as every database query. Polish and performance are not at odds.' },
              { num: '04', title: 'Own the outcome', desc: "We don't hand off and disappear. We monitor, iterate, and stay accountable for what we build — post-launch." },
              { num: '05', title: 'No silver bullets', desc: 'We pick the right tool for the job. Flutter, NestJS, Laravel, PostgreSQL — each chosen for performance, not trend-chasing.' },
              { num: '06', title: 'Respect your users', desc: 'Real people depend on these apps for their livelihoods and finances. That responsibility shapes every product decision.' },
            ].map(v => (
              <div key={v.num} className="value-card" style={{
                background: 'var(--ak-card)', border: '1px solid var(--ak-border)',
                borderRadius: '20px', padding: '36px 28px', transition: 'border-color 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(232,56,13,0.3)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--ak-border)')}
              >
                <div style={{ fontFamily: "'Satoshi', sans-serif", fontSize: '40px', fontWeight: 900, color: 'rgba(255,255,255,0.06)', letterSpacing: '-0.04em', marginBottom: '20px' }}>{v.num}</div>
                <h3 style={{ fontFamily: "'Satoshi', sans-serif", fontSize: '18px', fontWeight: 700, marginBottom: '12px', letterSpacing: '-0.01em' }}>{v.title}</h3>
                <p style={{ fontSize: '14px', color: 'var(--ak-muted)', lineHeight: 1.65 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ borderTop: '1px solid var(--ak-border)', padding: '80px 60px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '32px' }}>
          <div>
            <h2 style={{ fontFamily: "'Satoshi', sans-serif", fontSize: 'clamp(28px, 3vw, 44px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '12px' }}>Ready to work together?</h2>
            <p style={{ fontSize: '16px', color: 'var(--ak-muted)' }}>We take on a limited number of new projects each quarter.</p>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link href="/contact" className="cta-primary" style={{
              background: 'var(--ak-red)', color: '#fff',
              fontWeight: 600, fontSize: '15px',
              padding: '16px 36px', borderRadius: '100px', transition: 'all 0.2s',
            }}>Start a Project</Link>
            <Link href="/work" className="cta-secondary" style={{
              fontWeight: 600, fontSize: '15px',
              padding: '16px 36px', borderRadius: '100px',
              border: '1px solid var(--ak-border)', color: 'var(--ak-muted)', transition: 'all 0.2s',
            }}>View Our Work</Link>
          </div>
        </section>
      </div>
      <Footer />
      <style>{`
        .cta-primary:hover { background: var(--ak-red-dark) !important; transform: translateY(-1px); }
        .cta-secondary:hover { border-color: rgba(255,255,255,0.3) !important; color: var(--ak-white) !important; }
        @media (max-width: 900px) {
          section { padding-left: 24px !important; padding-right: 24px !important; }
          .about-origin { grid-template-columns: 1fr !important; }
          .about-founder-card { grid-template-columns: 1fr !important; gap: 24px !important; padding: 28px 20px !important; }
          .about-values-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
