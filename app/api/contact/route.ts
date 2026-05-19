import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, company, service, message } = body

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.warn('[contact] RESEND_API_KEY not set — email not sent')
      return NextResponse.json({ ok: true })
    }

    const to = process.env.CONTACT_EMAIL_TO || 'jonahrchirika@gmail.com'
    const from = process.env.CONTACT_EMAIL_FROM || 'Apps Kitchen <onboarding@resend.dev>'

    const html = `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1a1a1a">
        <div style="background:#E8380D;padding:24px 32px;border-radius:12px 12px 0 0">
          <h1 style="color:#fff;margin:0;font-size:20px">New project inquiry</h1>
        </div>
        <div style="background:#f9f9f9;padding:32px;border-radius:0 0 12px 12px;border:1px solid #e5e5e5">
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0;color:#666;width:120px">Name</td><td style="padding:8px 0;font-weight:600">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#666">Email</td><td style="padding:8px 0"><a href="mailto:${email}" style="color:#E8380D">${email}</a></td></tr>
            ${company ? `<tr><td style="padding:8px 0;color:#666">Company</td><td style="padding:8px 0">${company}</td></tr>` : ''}
            ${service ? `<tr><td style="padding:8px 0;color:#666">Service</td><td style="padding:8px 0">${service}</td></tr>` : ''}
          </table>
          <hr style="border:none;border-top:1px solid #e5e5e5;margin:20px 0" />
          <div style="color:#666;margin-bottom:8px;font-size:13px;text-transform:uppercase;letter-spacing:0.08em">Message</div>
          <div style="background:#fff;border:1px solid #e5e5e5;border-radius:8px;padding:16px;white-space:pre-wrap;line-height:1.6">${message}</div>
          <div style="margin-top:24px">
            <a href="mailto:${email}?subject=Re: Your inquiry to Apps Kitchen" style="background:#E8380D;color:#fff;padding:12px 24px;border-radius:100px;text-decoration:none;font-weight:600;font-size:14px">Reply to ${name}</a>
          </div>
        </div>
      </div>
    `

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to,
        reply_to: email,
        subject: `New inquiry from ${name}${company ? ` (${company})` : ''}`,
        html,
      }),
    })

    if (!res.ok) {
      const err = await res.text()
      console.error('[contact] Resend error:', err)
      return NextResponse.json({ error: 'Failed to send message. Please try again.' }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[contact] Unexpected error:', err)
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 })
  }
}
