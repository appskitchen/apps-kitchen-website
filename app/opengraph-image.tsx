import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Apps Kitchen — We Build What Grows'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0A0A0A',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          position: 'relative',
        }}
      >
        {/* Grid lines */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          display: 'flex',
        }} />
        {/* Glow */}
        <div style={{
          position: 'absolute', right: '-100px', top: '50px',
          width: '600px', height: '400px',
          background: 'radial-gradient(ellipse, rgba(232,56,13,0.2), transparent 70%)',
          display: 'flex',
        }} />

        <div style={{ fontSize: 14, color: '#E8380D', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 32, display: 'flex' }}>
          APPS KITCHEN
        </div>
        <div style={{
          fontSize: 80, color: '#F5F3EE', fontWeight: 900,
          lineHeight: 0.95, letterSpacing: '-0.04em', marginBottom: 36,
          display: 'flex', flexDirection: 'column',
        }}>
          <span>We Build</span>
          <span style={{ color: '#E8380D' }}>What Grows.</span>
        </div>
        <div style={{ fontSize: 22, color: '#888888', maxWidth: 540, lineHeight: 1.5, display: 'flex' }}>
          Mobile app studio specialising in fintech and asset management applications. Based in Lagos, Nigeria.
        </div>

        <div style={{
          position: 'absolute', bottom: 64, right: 80,
          fontSize: 16, color: '#555555', display: 'flex',
        }}>
          appskitchen.io
        </div>
      </div>
    ),
    { ...size }
  )
}
