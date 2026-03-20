// app/api/contact/route.ts
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { vorname, nachname, email, unternehmen, thema, nachricht, hcaptchaToken } = body

    // ── 1. Pflichtfelder prüfen
    if (!vorname || !nachname || !email || !nachricht) {
      return NextResponse.json({ error: 'Bitte alle Pflichtfelder ausfüllen.' }, { status: 400 })
    }

    // ── 2. hCaptcha verifizieren
    const captchaRes = await fetch('https://api.hcaptcha.com/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret:   process.env.HCAPTCHA_SECRET!,
        response: hcaptchaToken,
      }),
    })
    const captchaData = await captchaRes.json()
    if (!captchaData.success) {
      return NextResponse.json({ error: 'Captcha-Verifizierung fehlgeschlagen.' }, { status: 400 })
    }

    // ── 3. E-Mail via Resend senden
    await resend.emails.send({
      from:    'Kontaktformular intersignum.de <kontakt@intersignum.de>',
      to:      ['kontakt@intersignum.de'],
      replyTo: email,
      subject: `Neue Anfrage von ${vorname} ${nachname}${unternehmen ? ` (${unternehmen})` : ''}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; color: #131E27;">
          <h2 style="color: #0C3D5E; border-bottom: 2px solid #006E8C; padding-bottom: 12px;">
            Neue Kontaktanfrage
          </h2>
          <table style="width:100%; border-collapse:collapse; margin-top:16px;">
            <tr><td style="padding:8px 0; color:#4A5E6D; width:140px;">Name</td>
                <td style="padding:8px 0; font-weight:500;">${vorname} ${nachname}</td></tr>
            <tr><td style="padding:8px 0; color:#4A5E6D;">E-Mail</td>
                <td style="padding:8px 0;"><a href="mailto:${email}" style="color:#006E8C;">${email}</a></td></tr>
            ${unternehmen ? `<tr><td style="padding:8px 0; color:#4A5E6D;">Unternehmen</td>
                <td style="padding:8px 0;">${unternehmen}</td></tr>` : ''}
            ${thema ? `<tr><td style="padding:8px 0; color:#4A5E6D;">Thema</td>
                <td style="padding:8px 0;">${thema}</td></tr>` : ''}
          </table>
          <div style="margin-top:24px; padding:16px; background:#F5F8FA; border-left:3px solid #006E8C; border-radius:4px;">
            <p style="color:#4A5E6D; margin:0 0 8px; font-size:13px;">Nachricht</p>
            <p style="margin:0; white-space:pre-wrap;">${nachricht}</p>
          </div>
          <p style="margin-top:24px; font-size:12px; color:#889BA9;">
            Gesendet über intersignum.de Kontaktformular
          </p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })

  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json({ error: 'Interner Fehler. Bitte versuchen Sie es erneut.' }, { status: 500 })
  }
}