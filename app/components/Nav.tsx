'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Moon, Sun } from 'lucide-react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  const applyTheme = (nextTheme: 'dark' | 'light') => {
    setTheme(nextTheme)
    if (typeof document !== 'undefined') {
      document.body.classList.toggle('ak-theme-light', nextTheme === 'light')
    }
    if (typeof window !== 'undefined') {
      localStorage.setItem('ak-theme', nextTheme)
    }
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const stored = (typeof window !== 'undefined' ? localStorage.getItem('ak-theme') : null) as 'dark' | 'light' | null
    applyTheme(stored === 'light' || stored === 'dark' ? stored : 'dark')
  }, [])

  const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/work', label: 'Work' },
    { href: '/#process', label: 'Process' },
    { href: '/#stack', label: 'Stack' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="ak-nav" style={{
      position: 'fixed', top: 0, left: 0, right: 0,
      zIndex: 100,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '16px 60px',
      background: scrolled
        ? (theme === 'light' ? 'rgba(255,255,255,0.96)' : 'rgba(10,10,10,0.95)')
        : (theme === 'light' ? 'rgba(255,255,255,0.88)' : 'rgba(10,10,10,0.85)'),
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid var(--ak-border)',
      transition: 'background 0.3s',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
          <Image
            src="/logo.svg"
            alt="Apps Kitchen"
            width={260}
            height={74}
            className="nav-logo"
            style={{ objectFit: 'contain', height: '64px', width: 'auto' }}
          />
        </Link>
        <button
          type="button"
          aria-label="Toggle dark and light theme"
          onClick={() => applyTheme(theme === 'dark' ? 'light' : 'dark')}
          className="theme-toggle"
          style={{
            width: '36px', height: '36px', borderRadius: '10px',
            border: '1px solid var(--ak-border)',
            background: 'rgba(255,255,255,0.03)',
            color: 'var(--ak-white)',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', transition: 'all 0.2s',
          }}
        >
          {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </div>

      <ul style={{
        display: 'flex', alignItems: 'center', gap: '40px',
        listStyle: 'none', fontSize: '14px', color: 'var(--ak-muted)',
      }} className="nav-links-desktop">
        {navLinks.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="nav-link">{item.label}</Link>
          </li>
        ))}
      </ul>

      <Link href="/contact" className="nav-cta" style={{
        background: 'var(--ak-red)', color: '#fff',
        fontWeight: 600, fontSize: '13px',
        padding: '10px 24px', borderRadius: '100px',
        transition: 'background 0.2s',
      }}>
        Get in Touch
      </Link>

      <button
        type="button"
        className="nav-mobile-toggle"
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(v => !v)}
        style={{
          display: 'none',
          width: '40px', height: '40px', borderRadius: '12px',
          border: '1px solid var(--ak-border)',
          background: 'rgba(255,255,255,0.02)',
          color: 'var(--ak-white)',
          alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer',
        }}
      >
        {menuOpen ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        )}
      </button>

      {menuOpen && (
        <div className="nav-mobile-panel" style={{
          position: 'absolute', top: '100%', left: 0, right: 0,
          background: theme === 'light' ? 'rgba(255,255,255,0.98)' : 'rgba(10,10,10,0.98)',
          borderBottom: '1px solid var(--ak-border)',
          padding: '12px 18px 18px',
          display: 'none', flexDirection: 'column', gap: '8px',
        }}>
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{
                padding: '12px 10px', borderRadius: '12px',
                color: 'var(--ak-white)',
                border: '1px solid var(--ak-border)',
                background: 'rgba(255,255,255,0.02)',
                fontSize: '14px', fontWeight: 500,
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        .nav-link {
          color: var(--ak-muted);
          transition: color 0.2s;
        }
        .nav-link:hover { color: var(--ak-white); }
        .nav-cta:hover { background: var(--ak-red-dark) !important; }
        .theme-toggle:hover {
          border-color: rgba(232,56,13,0.5);
          color: var(--ak-red);
          background: rgba(232,56,13,0.08);
        }
        @media (max-width: 900px) {
          .nav-links-desktop { display: none !important; }
          .nav-cta { display: none !important; }
          .nav-mobile-toggle { display: inline-flex !important; }
          .nav-mobile-panel { display: flex !important; }
          .theme-toggle { width: 34px !important; height: 34px !important; }
          .nav-logo { height: 48px !important; width: auto !important; }
          nav { padding: 16px 24px !important; }
        }
      `}</style>
    </nav>
  )
}
