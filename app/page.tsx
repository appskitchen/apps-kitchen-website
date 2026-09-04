'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Sprout, Wrench, Rocket, TrendingUp, Search, PenTool, Cog } from 'lucide-react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import AppIcon from './components/AppIcon'
import StoreIcon from './components/StoreIcon'
import { useReveal } from './hooks/useReveal'
import { featuredApps } from './data/apps'

const aboutStats = [
  {
    num: '8+',
    label: 'Years crafting production-grade mobile and backend systems across Nigeria and beyond.',
  },
  {
    num: '10K+',
    label: 'Google Play downloads across fintech products.',
    sourceLabel: 'Live source',
    sourceHref: 'https://play.google.com/store/apps/details?id=com.first_assetmanagement.firstedge',
  },
  {
    num: '5+',
    label: 'Industries served — from capital markets to agritech and health technology.',
  },
]

export default function Home() {
  useReveal()

  return (
    <>
      <Nav />

      {/* HERO */}
      <section className="top-hero" style={{
        minHeight: '92vh', display: 'flex', flexDirection: 'column',
        justifyContent: 'center', padding: '180px 60px 110px',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: `radial-gradient(ellipse 60% 50% at 70% 40%, rgba(232,56,13,0.12) 0%, transparent 70%),
            radial-gradient(ellipse 40% 60% at 20% 80%, rgba(232,56,13,0.06) 0%, transparent 60%)`,
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `linear-gradient(var(--ak-gridline) 1px, transparent 1px), linear-gradient(90deg, var(--ak-gridline) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }} />

        <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.14em', color: 'var(--ak-red)', textTransform: 'uppercase', marginBottom: '20px', position: 'relative' }}>Let's Cook Something</div>

        <h1 style={{
          fontFamily: "'Satoshi', sans-serif",
          fontSize: 'clamp(48px, 7vw, 96px)',
          fontWeight: 900, lineHeight: 0.95,
          letterSpacing: '-0.04em', color: 'var(--ak-white)',
          marginBottom: '22px', position: 'relative',
        }}>
          Have an idea?<br />
          Let's build it.
        </h1>

        <div style={{ position: 'relative', maxWidth: '620px' }}>
          <p style={{ maxWidth: '620px', fontSize: '18px', color: 'var(--ak-muted)', lineHeight: 1.7, marginBottom: '34px' }}>
            We partner with startups and financial institutions to turn early-stage concepts into fully deployed, scalable applications.
          </p>
          <div className="top-hero-actions" style={{ display: 'flex', alignItems: 'center', gap: '16px', flexShrink: 0, flexWrap: 'wrap' }}>
            <Link href="/contact" className="hero-btn-primary" style={{
              background: 'var(--ak-red)', color: '#fff',
              fontWeight: 600, fontSize: '15px',
              padding: '16px 36px', borderRadius: '100px',
              transition: 'all 0.2s', whiteSpace: 'nowrap',
            }}>Start a Project</Link>
            <a href="https://www.linkedin.com/in/jonah-rimamchirika-37abb086/" target="_blank" rel="noopener noreferrer" className="hero-btn-secondary" style={{
              fontWeight: 600, fontSize: '15px',
              padding: '16px 36px', borderRadius: '100px',
              border: '1px solid var(--ak-border)', color: 'var(--ak-muted)',
              transition: 'all 0.2s',
            }}>Connect on LinkedIn</a>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div style={{
        borderTop: '1px solid var(--ak-border)', borderBottom: '1px solid var(--ak-border)',
        padding: '14px 0', overflow: 'hidden', background: 'var(--ak-off)',
      }}>
        <div style={{ display: 'flex', gap: 0, animation: 'ticker 25s linear infinite', width: 'max-content' }}>
          {[...Array(2)].flatMap(() => [
            'Flutter Development', 'Fintech Engineering', 'Asset Management Apps',
            'NestJS Backend', 'UI/UX Design', 'iOS & Android',
            'Cross-border Payments', 'Multi-currency Wallets',
          ]).map((item, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: '24px',
              padding: '0 40px', fontSize: '13px', color: 'var(--ak-muted)',
              fontWeight: 500, letterSpacing: '0.04em', textTransform: 'uppercase',
              whiteSpace: 'nowrap',
            }}>
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--ak-red)', flexShrink: 0 }} />
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="about-section" style={{ padding: '100px 60px' }}>
        <div className="reveal" style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ak-red)', marginBottom: '20px' }}>About Apps Kitchen</div>
        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
          <div>
            <h2 className="reveal about-title" style={{
              fontFamily: "'Satoshi', sans-serif", fontSize: 'clamp(36px, 4vw, 56px)',
              fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: '20px',
            }}>
              Technology projects, like seeds, must be carefully nurtured.
            </h2>
            <p className="reveal about-copy" style={{ fontSize: '16px', color: 'var(--ak-muted)', maxWidth: '520px', lineHeight: 1.7, marginBottom: '40px' }}>
              We go beyond software development — we plant innovative concepts in fintech and asset management, nurture them through disciplined design and engineering, and deliver solutions that are secure, scalable, and future-ready.
            </p>
            <div className="reveal about-cards" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {[
                { icon: Sprout, title: 'Plant', desc: 'We ground every project in a concept worth building — clear purpose, clear problem.' },
                { icon: Wrench, title: 'Craft', desc: 'Disciplined design and engineering standards at every layer of the stack.' },
                { icon: Rocket, title: 'Deploy', desc: 'Fully deployed, production-grade applications — not prototypes.' },
                { icon: TrendingUp, title: 'Scale', desc: 'Architected to grow with your users, your data, and your vision.' },
              ].map(c => (
                <div key={c.title} className="about-card" style={{
                  background: 'var(--ak-card)', border: '1px solid var(--ak-border)',
                  borderRadius: '16px', padding: '28px 24px',
                  transition: 'border-color 0.2s', cursor: 'default',
                }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(232,56,13,0.3)')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--ak-border)')}
                >
                  <div className="about-card-icon" style={{ color: 'var(--ak-white)', marginBottom: '16px' }}>
                    <c.icon size={26} strokeWidth={2} />
                  </div>
                  <h4 style={{ fontWeight: 700, fontSize: '16px', marginBottom: '8px', letterSpacing: '-0.01em' }}>{c.title}</h4>
                  <p style={{ fontSize: '13px', color: 'var(--ak-muted)', lineHeight: 1.6 }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            {aboutStats.map((stat, i) => (
              <div key={i}>
                <div className="reveal">
                  <div style={{
                    fontFamily: "'Satoshi', sans-serif",
                    fontSize: 'clamp(60px, 8vw, 100px)',
                    fontWeight: 900, lineHeight: 1, letterSpacing: '-0.04em', marginBottom: '12px',
                  }}>
                    <span style={{ color: 'var(--ak-red)' }}>{stat.num}</span>
                  </div>
                  <div style={{ fontSize: '14px', color: 'var(--ak-muted)', maxWidth: '280px', lineHeight: 1.6 }}>{stat.label}</div>
                  {stat.sourceHref && stat.sourceLabel && (
                    <a href={stat.sourceHref} target="_blank" rel="noopener noreferrer" style={{
                      marginTop: '8px', display: 'inline-flex', alignItems: 'center', gap: '6px',
                      fontSize: '12px', color: 'var(--ak-red)', fontWeight: 600,
                    }}>
                      {stat.sourceLabel}
                      <span style={{ fontSize: '13px', lineHeight: 1 }}>↗</span>
                    </a>
                  )}
                </div>
                {i < 2 && <div style={{ height: '1px', background: 'var(--ak-border)', margin: '40px 0' }} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section id="apps" style={{ background: 'var(--ak-off)', borderTop: '1px solid var(--ak-border)', padding: '100px 60px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '50px', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <div className="reveal" style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ak-red)', marginBottom: '20px' }}>Selected Work</div>
            <h2 className="reveal" style={{ fontFamily: "'Satoshi', sans-serif", fontSize: 'clamp(36px, 4vw, 60px)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>Apps we&rsquo;ve<br />shipped.</h2>
          </div>
          <p className="reveal" style={{ maxWidth: '320px', textAlign: 'right', fontSize: '16px', color: 'var(--ak-muted)', lineHeight: 1.7 }}>
            Every product below is live, used by real customers, and built with the same care we put into everything we cook.
          </p>
        </div>

        <div className="reveal selected-work-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
          {featuredApps.map((app) => (
            <div key={app.id} className="selected-app-card" style={{
              background: 'var(--ak-card)', border: '1px solid var(--ak-border)',
              borderRadius: '20px', padding: '32px 28px',
              display: 'flex', flexDirection: app.featured ? 'row' : 'column',
              gridColumn: app.featured ? 'span 2' : 'span 1',
              alignItems: app.featured ? 'center' : 'flex-start',
              gap: app.featured ? '36px' : '0',
              transition: 'all 0.3s', cursor: 'pointer', position: 'relative',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(232,56,13,0.35)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--ak-border)'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              {app.image ? (
                <a
                  href={app.android || app.ios}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="selected-app-media"
                  style={{
                    width: app.featured ? '180px' : '100%',
                    height: app.featured ? '110px' : '180px',
                    borderRadius: '16px', overflow: 'hidden',
                    border: '1px solid var(--ak-border)', display: 'block',
                    flexShrink: 0, marginBottom: app.featured ? '0' : '20px',
                    background: 'rgba(255,255,255,0.03)', position: 'relative',
                  }}
                >
                  <div style={{
                    position: 'absolute', top: '10px', left: '10px', zIndex: 2,
                    width: '34px', height: '34px', borderRadius: '10px',
                    background: 'rgba(10,10,10,0.65)', color: 'var(--ak-white)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    border: '1px solid rgba(255,255,255,0.2)',
                  }}><AppIcon /></div>
                  <Image
                    src={app.image}
                    alt={`${app.name} app screenshot`}
                    width={720}
                    height={440}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scale(1.03)' }}
                  />
                </a>
              ) : (
                <div className="selected-app-icon" style={{
                  width: app.featured ? '80px' : '64px',
                  height: app.featured ? '80px' : '64px',
                  borderRadius: app.featured ? '20px' : '16px',
                  background: 'rgba(255,255,255,0.06)', border: '1px solid var(--ak-border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--ak-white)', flexShrink: 0,
                  marginBottom: app.featured ? '0' : '20px',
                }}>
                  <AppIcon />
                </div>
              )}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
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
                <h3 style={{ fontFamily: "'Satoshi', sans-serif", fontSize: '22px', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '10px' }}>{app.name}</h3>
                <p style={{ fontSize: '14px', color: 'var(--ak-muted)', lineHeight: 1.6, flex: 1, marginBottom: '20px' }}>{app.desc}</p>
                <div className="selected-app-actions" style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  {app.android && (
                    <a href={app.android} target="_blank" rel="noopener noreferrer" className="selected-app-btn" style={{
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
                    <a href={app.ios} target="_blank" rel="noopener noreferrer" className="selected-app-btn" style={{
                      fontSize: '12px', fontWeight: 500, color: 'var(--ak-muted)',
                      border: '1px solid var(--ak-border)', borderRadius: '100px',
                      padding: '8px 14px', transition: 'all 0.2s',
                      display: 'inline-flex', alignItems: 'center', gap: '8px',
                    }}
                      onMouseEnter={e => { e.currentTarget.style.color = 'var(--ak-white)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)' }}
                      onMouseLeave={e => { e.currentTarget.style.color = 'var(--ak-muted)'; e.currentTarget.style.borderColor = 'var(--ak-border)' }}
                    ><span style={{ color: 'var(--ak-white)', display: 'inline-flex' }}><StoreIcon type="ios" /></span>iOS</a>
                  )}
                  {app.badge && (
                    <span style={{
                      fontSize: '10px', fontWeight: 600, letterSpacing: '0.08em',
                      textTransform: 'uppercase', padding: '4px 10px', borderRadius: '100px',
                      background: 'rgba(232,56,13,0.12)', border: '1px solid rgba(232,56,13,0.3)',
                      color: 'var(--ak-red)', display: 'inline-flex', alignItems: 'center', gap: '5px',
                    }}>
                      <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--ak-red)', animation: 'pulse-red 1.8s ease-in-out infinite' }} />
                      {app.badge}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: '40px', textAlign: 'center' }}>
          <Link href="/work" className="view-all-btn" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            fontWeight: 600, fontSize: '15px', color: 'var(--ak-red)',
            border: '1px solid rgba(232,56,13,0.3)', borderRadius: '100px',
            padding: '12px 28px', transition: 'all 0.2s',
          }}>View All Projects →</Link>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="process-section" style={{ background: 'var(--ak-off)', borderTop: '1px solid var(--ak-border)', borderBottom: '1px solid var(--ak-border)', padding: '100px 60px' }}>
        <div className="reveal" style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ak-red)', marginBottom: '20px' }}>How We Work</div>
        <h2 className="reveal process-title" style={{ fontFamily: "'Satoshi', sans-serif", fontSize: 'clamp(36px, 4vw, 60px)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: '60px' }}>From concept<br />to App Store.</h2>
        <div className="reveal process-grid" style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0,
          border: '1px solid var(--ak-border)', borderRadius: '20px', overflow: 'hidden',
        }}>
          {[
            { num: '01', Icon: Search, title: 'Discovery', desc: 'We deeply understand your users, your business model, and what success looks like before a single line of code is written.' },
            { num: '02', Icon: PenTool, title: 'Design', desc: 'Figma-first. Every screen is designed for clarity, conversion, and consistency — then validated before development begins.' },
            { num: '03', Icon: Cog, title: 'Build', desc: 'Flutter for mobile, NestJS or Laravel for backend. Clean architecture, typed APIs, and security-first from day one.' },
            { num: '04', Icon: Rocket, title: 'Ship & Grow', desc: 'We deploy, monitor, and iterate. Your product keeps evolving after it hits the store — and so do we.' },
          ].map((step, i, arr) => (
            <div key={step.num} className="process-step" style={{
              padding: '40px 32px',
              borderRight: i < arr.length - 1 ? '1px solid var(--ak-border)' : 'none',
              transition: 'background 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.02)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
            >
              <div style={{ fontFamily: "'Satoshi', sans-serif", fontSize: '48px', fontWeight: 900, color: 'rgba(255,255,255,0.06)', lineHeight: 1, marginBottom: '28px', letterSpacing: '-0.04em' }}>{step.num}</div>
              <div className="process-icon" style={{ color: 'var(--ak-white)', marginBottom: '16px' }}>
                <step.Icon size={24} strokeWidth={2} />
              </div>
              <h3 style={{ fontFamily: "'Satoshi', sans-serif", fontSize: '17px', fontWeight: 700, marginBottom: '10px', letterSpacing: '-0.01em' }}>{step.title}</h3>
              <p style={{ fontSize: '13px', color: 'var(--ak-muted)', lineHeight: 1.65 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOUNDER */}
      <section className="founder-section" style={{ background: 'var(--ak-black)', padding: '100px 60px' }}>
        <div className="reveal" style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ak-red)', marginBottom: '20px' }}>The Person Behind It</div>
        <h2 className="reveal founder-title" style={{ fontFamily: "'Satoshi', sans-serif", fontSize: 'clamp(36px, 4vw, 60px)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: '60px' }}>Led by someone<br />who ships.</h2>
        <div className="reveal founder-card" style={{
          background: 'var(--ak-card)', border: '1px solid var(--ak-border)',
          borderRadius: '24px', padding: '60px',
          display: 'grid', gridTemplateColumns: 'auto 1fr',
          gap: '60px', alignItems: 'center', position: 'relative', overflow: 'hidden',
        }}>
          <div className="founder-quote-mark" style={{
            position: 'absolute', top: '-20px', right: '60px',
            fontFamily: "'Satoshi', sans-serif", fontSize: '300px', fontWeight: 900,
            color: 'rgba(232,56,13,0.04)', lineHeight: 1, pointerEvents: 'none',
          }}>"</div>
          <div className="founder-avatar" style={{
            width: '120px', height: '120px', borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(232,56,13,0.2), rgba(232,56,13,0.05))',
            border: '2px solid rgba(232,56,13,0.3)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: "'Satoshi', sans-serif", fontSize: '36px', fontWeight: 900,
            color: 'var(--ak-red)', flexShrink: 0,
          }}>JR</div>
          <div>
            <p style={{
              fontFamily: "'Satoshi', sans-serif",
              fontSize: 'clamp(18px, 2.5vw, 26px)',
              fontWeight: 600, lineHeight: 1.4, letterSpacing: '-0.02em', marginBottom: '28px',
            }}>
              "Technology shines brightest when it's practical, accessible, and solves real-world problems. This principle drives every product we build across diverse businesses."
            </p>
            <div className="founder-meta" style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontFamily: "'Satoshi', sans-serif", fontSize: '16px', fontWeight: 700 }}>Jonah Rimamchirika</div>
                <div style={{ fontSize: '13px', color: 'var(--ak-muted)' }}>Co-Founder & Head of Engineering · Apps Kitchen</div>
              </div>
              <div className="founder-divider" style={{ width: '1px', height: '30px', background: 'var(--ak-border)' }} />
              <div style={{ fontSize: '13px', color: 'var(--ak-muted)' }}>8+ years<br />in production</div>
              <div className="founder-divider" style={{ width: '1px', height: '30px', background: 'var(--ak-border)' }} />
              <div style={{ fontSize: '13px', color: 'var(--ak-muted)' }}>Flutter · NestJS<br />Laravel · Figma</div>
            </div>
          </div>
        </div>
      </section>

      {/* STACK */}
      <section id="stack" style={{ borderTop: '1px solid var(--ak-border)', padding: '100px 60px' }}>
        <div className="reveal" style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ak-red)', marginBottom: '20px' }}>Technology</div>
        <h2 className="reveal" style={{ fontFamily: "'Satoshi', sans-serif", fontSize: 'clamp(36px, 4vw, 60px)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: '20px' }}>Our stack.</h2>
        <p className="reveal" style={{ fontSize: '16px', color: 'var(--ak-muted)', maxWidth: '520px', lineHeight: 1.7, marginBottom: '40px' }}>We choose tools for the right reasons — reliability, performance, and the ability to hire great engineers who know them well.</p>
        <div className="reveal" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
          {['Flutter', 'NestJS', 'Laravel', 'Figma'].map(t => (
            <span key={t} style={{
              border: '1px solid rgba(232,56,13,0.4)', borderRadius: '100px',
              padding: '10px 22px', fontSize: '14px', fontWeight: 500,
              color: 'var(--ak-red)', background: 'rgba(232,56,13,0.08)',
            }}>{t}</span>
          ))}
          {['Next.js', 'Vue.js', 'React', 'C#', 'PostgreSQL', 'TypeORM', 'Riverpod', 'Paystack', 'Azure SSO', 'Strapi CMS', 'FastAPI', 'Clean Architecture'].map(t => (
            <span key={t} className="stack-tag" style={{
              border: '1px solid var(--ak-border)', borderRadius: '100px',
              padding: '10px 22px', fontSize: '14px', fontWeight: 500,
              color: 'var(--ak-muted)', transition: 'all 0.2s', cursor: 'default',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(232,56,13,0.4)'; e.currentTarget.style.color = 'var(--ak-white)'; e.currentTarget.style.background = 'rgba(232,56,13,0.06)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--ak-border)'; e.currentTarget.style.color = 'var(--ak-muted)'; e.currentTarget.style.background = 'transparent' }}
            >{t}</span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ borderTop: '1px solid var(--ak-border)', textAlign: 'center', padding: '120px 60px', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', width: '600px', height: '400px',
          background: 'radial-gradient(ellipse, rgba(232,56,13,0.15), transparent 70%)',
          top: '50%', left: '50%', transform: 'translate(-50%, -50%)', pointerEvents: 'none',
        }} />
        <div className="reveal" style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ak-red)', marginBottom: '20px', position: 'relative' }}>Ready To Launch</div>
        <h2 className="reveal" style={{
          fontFamily: "'Satoshi', sans-serif",
          fontSize: 'clamp(40px, 6vw, 80px)', fontWeight: 700,
          lineHeight: 1.05, letterSpacing: '-0.03em',
          maxWidth: '700px', margin: '0 auto 24px', position: 'relative',
        }}>Need product momentum?<br />Let's execute.</h2>
        <p className="reveal" style={{ fontSize: '16px', color: 'var(--ak-muted)', margin: '0 auto 48px', maxWidth: '440px', lineHeight: 1.7, position: 'relative' }}>
          Share your product goal, timeline, and constraints. We will map the build plan and start shipping with you.
        </p>
        <div className="reveal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', position: 'relative' }}>
          <Link href="/contact" className="hero-btn-primary" style={{
            background: 'var(--ak-red)', color: '#fff',
            fontWeight: 600, fontSize: '15px',
            padding: '16px 36px', borderRadius: '100px', transition: 'all 0.2s',
          }}>Start a Project</Link>
          <a href="https://www.linkedin.com/in/jonah-rimamchirika-37abb086/" target="_blank" rel="noopener noreferrer" className="hero-btn-secondary" style={{
            fontWeight: 600, fontSize: '15px',
            padding: '16px 36px', borderRadius: '100px',
            border: '1px solid var(--ak-border)', color: 'var(--ak-muted)', transition: 'all 0.2s',
          }}>Connect on LinkedIn</a>
        </div>
      </section>

      <Footer />

      <style>{`
        .hero-btn-primary:hover { background: var(--ak-red-dark) !important; transform: translateY(-1px); }
        .hero-btn-secondary:hover { color: var(--ak-white) !important; border-color: rgba(255,255,255,0.3) !important; }
        .view-all-btn:hover { background: rgba(232,56,13,0.08) !important; border-color: rgba(232,56,13,0.5) !important; }
        @media (max-width: 900px) {
          .about-section { padding-top: 72px !important; padding-bottom: 72px !important; }
          .about-grid { grid-template-columns: 1fr !important; gap: 28px !important; }
          .about-title { font-size: clamp(30px, 9vw, 42px) !important; margin-bottom: 14px !important; }
          .about-copy { font-size: 15px !important; margin-bottom: 24px !important; }
          .about-cards { grid-template-columns: 1fr !important; gap: 12px !important; }
          .about-card { padding: 18px 16px !important; }
          .top-hero { min-height: auto !important; padding-top: 140px !important; padding-bottom: 64px !important; }
          .top-hero-actions { width: 100% !important; flex-direction: column !important; align-items: stretch !important; gap: 10px !important; }
          .top-hero-actions a { width: 100% !important; justify-content: center !important; text-align: center !important; display: inline-flex !important; }
          .process-section { padding-top: 72px !important; padding-bottom: 72px !important; }
          .process-title { margin-bottom: 26px !important; }
          .process-grid { grid-template-columns: 1fr !important; border-radius: 16px !important; }
          .process-step { border-right: none !important; border-bottom: 1px solid var(--ak-border) !important; padding: 24px 18px !important; }
          .process-step:last-child { border-bottom: none !important; }
          .founder-section { padding-top: 72px !important; padding-bottom: 72px !important; }
          .founder-title { margin-bottom: 26px !important; }
          .founder-card { grid-template-columns: 1fr !important; gap: 18px !important; padding: 24px 18px !important; border-radius: 18px !important; }
          .founder-avatar { width: 86px !important; height: 86px !important; font-size: 24px !important; }
          .founder-quote-mark { display: none !important; }
          .founder-meta { flex-direction: column !important; align-items: flex-start !important; gap: 10px !important; }
          .founder-divider { display: none !important; }
          .selected-work-grid { grid-template-columns: 1fr !important; }
          .selected-app-card { grid-column: span 1 !important; flex-direction: column !important; gap: 0 !important; padding: 20px 16px !important; border-radius: 18px !important; }
          .selected-app-media { width: 100% !important; height: 210px !important; margin-bottom: 16px !important; }
          .selected-app-actions { width: 100% !important; flex-direction: column !important; align-items: stretch !important; gap: 8px !important; }
          .selected-app-btn { width: 100% !important; justify-content: center !important; font-size: 13px !important; padding: 10px 14px !important; }
          section { padding-left: 18px !important; padding-right: 18px !important; }
        }
      `}</style>
    </>
  )
}
