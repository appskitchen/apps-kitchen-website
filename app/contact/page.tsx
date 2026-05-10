'use client'
import { useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const services = [
  'Mobile App (iOS & Android)', 'Backend API Development',
  'UI/UX Design', 'Fintech / Payments Integration',
  'Technical Audit', 'Other',
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return
    setLoading(true)
    // Simulate submission — replace with actual endpoint
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <>
      <Nav />
      <div style={{ paddingTop: '120px', minHeight: '100vh' }}>
        <section style={{ padding: '60px 60px 120px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
          {/* Left */}
          <div>
            <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ak-red)', marginBottom: '20px' }}>Get In Touch</div>
            <h1 style={{
              fontFamily: "'Satoshi', sans-serif", fontSize: 'clamp(44px, 5vw, 72px)',
              fontWeight: 900, lineHeight: 0.95, letterSpacing: '-0.04em', marginBottom: '28px',
            }}>
              Let's cook<br /><em style={{ color: 'var(--ak-red)', fontStyle: 'italic' }}>something.</em>
            </h1>
            <p style={{ fontSize: '16px', color: 'var(--ak-muted)', lineHeight: 1.7, maxWidth: '420px', marginBottom: '56px' }}>
              Whether you have a fully-formed product brief or just a rough idea, we'd love to hear from you. We take on a limited number of projects each quarter.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {[
                { label: 'Email', value: 'jonahrchirika@gmail.com', href: 'mailto:jonahrchirika@gmail.com' },
                { label: 'Phone', value: '+234 907 175 2006', href: 'tel:+2349071752006' },
                { label: 'Location', value: 'Lagos, Nigeria', href: null },
                { label: 'LinkedIn', value: 'Jonah Rimamchirika', href: 'https://www.linkedin.com/in/jonah-rimamchirika-37abb086/' },
              ].map(item => (
                <div key={item.label}>
                  <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ak-muted)', marginBottom: '6px' }}>{item.label}</div>
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener" style={{
                      fontSize: '16px', color: 'var(--ak-white)', fontWeight: 500,
                      transition: 'color 0.2s',
                    }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'var(--ak-red)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'var(--ak-white)')}
                    >{item.value}</a>
                  ) : (
                    <span style={{ fontSize: '16px', color: 'var(--ak-white)', fontWeight: 500 }}>{item.value}</span>
                  )}
                </div>
              ))}
            </div>

            <div style={{ marginTop: '56px', padding: '28px 32px', background: 'var(--ak-card)', border: '1px solid var(--ak-border)', borderRadius: '16px' }}>
              <div style={{ fontSize: '13px', color: 'var(--ak-muted)', lineHeight: 1.7 }}>
                <span style={{ color: 'var(--ak-red)', fontWeight: 600 }}>Response time:</span> We typically reply within 24–48 hours on business days.
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div style={{
            background: 'var(--ak-card)', border: '1px solid var(--ak-border)',
            borderRadius: '24px', padding: '48px',
          }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ fontSize: '48px', marginBottom: '20px' }}>🎉</div>
                <h2 style={{ fontFamily: "'Satoshi', sans-serif", fontSize: '28px', fontWeight: 700, marginBottom: '12px' }}>Message sent!</h2>
                <p style={{ color: 'var(--ak-muted)', lineHeight: 1.7 }}>Thanks for reaching out. We'll be in touch within 24–48 hours.</p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <h2 style={{ fontFamily: "'Satoshi', sans-serif", fontSize: '22px', fontWeight: 700, marginBottom: '8px' }}>Send us a message</h2>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <Field label="Name *" value={form.name} onChange={v => setForm(f => ({ ...f, name: v }))} placeholder="Amaka Okafor" />
                  <Field label="Email *" value={form.email} onChange={v => setForm(f => ({ ...f, email: v }))} placeholder="amaka@company.com" type="email" />
                </div>
                <Field label="Company" value={form.company} onChange={v => setForm(f => ({ ...f, company: v }))} placeholder="Your company or project name" />

                <div>
                  <label style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ak-muted)', display: 'block', marginBottom: '8px' }}>Service needed</label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {services.map(s => (
                      <button key={s} onClick={() => setForm(f => ({ ...f, service: s }))} style={{
                        fontSize: '12px', fontWeight: 500, padding: '6px 14px',
                        borderRadius: '100px', cursor: 'pointer', transition: 'all 0.2s',
                        background: form.service === s ? 'var(--ak-red)' : 'transparent',
                        border: form.service === s ? '1px solid var(--ak-red)' : '1px solid var(--ak-border)',
                        color: form.service === s ? '#fff' : 'var(--ak-muted)',
                      }}>{s}</button>
                    ))}
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ak-muted)', display: 'block', marginBottom: '8px' }}>Message *</label>
                  <textarea value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} placeholder="Tell us about your project — what you're building, your timeline, and any constraints..." rows={5} style={{
                    width: '100%', background: 'rgba(255,255,255,0.04)',
                    border: '1px solid var(--ak-border)', borderRadius: '12px',
                    padding: '14px 16px', color: 'var(--ak-white)',
                    fontSize: '14px', fontFamily: "'Satoshi', sans-serif",
                    resize: 'vertical', outline: 'none', transition: 'border-color 0.2s',
                  }}
                    onFocus={e => (e.currentTarget.style.borderColor = 'rgba(232,56,13,0.4)')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'var(--ak-border)')}
                  />
                </div>

                <button onClick={handleSubmit} disabled={loading} style={{
                  background: loading ? 'var(--ak-muted)' : 'var(--ak-red)',
                  color: '#fff', fontFamily: "'Satoshi', sans-serif",
                  fontWeight: 600, fontSize: '15px',
                  padding: '16px 36px', borderRadius: '100px',
                  border: 'none', cursor: loading ? 'wait' : 'pointer',
                  transition: 'all 0.2s', width: '100%',
                }}
                  onMouseEnter={e => { if (!loading) e.currentTarget.style.background = 'var(--ak-red-dark)' }}
                  onMouseLeave={e => { if (!loading) e.currentTarget.style.background = 'var(--ak-red)' }}
                >
                  {loading ? 'Sending...' : 'Send Message →'}
                </button>
              </div>
            )}
          </div>
        </section>
      </div>
      <Footer />
      <style>{`
        @media (max-width: 900px) {
          section { grid-template-columns: 1fr !important; padding: 40px 24px 80px !important; }
        }
      `}</style>
    </>
  )
}

function Field({ label, value, onChange, placeholder, type = 'text' }: {
  label: string; value: string; onChange: (v: string) => void; placeholder: string; type?: string
}) {
  return (
    <div>
      <label style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ak-muted)', display: 'block', marginBottom: '8px' }}>{label}</label>
      <input type={type} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} style={{
        width: '100%', background: 'rgba(255,255,255,0.04)',
        border: '1px solid var(--ak-border)', borderRadius: '12px',
        padding: '12px 16px', color: 'var(--ak-white)',
        fontSize: '14px', fontFamily: "'Satoshi', sans-serif",
        outline: 'none', transition: 'border-color 0.2s',
      }}
        onFocus={e => (e.currentTarget.style.borderColor = 'rgba(232,56,13,0.4)')}
        onBlur={e => (e.currentTarget.style.borderColor = 'var(--ak-border)')}
      />
    </div>
  )
}
