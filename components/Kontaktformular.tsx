'use client'

// components/KontaktFormular.tsx
// npm install @hcaptcha/react-hcaptcha resend

import { useState, useRef } from 'react'
import HCaptcha from '@hcaptcha/react-hcaptcha'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function KontaktFormular() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)
  const captchaRef = useRef<HCaptcha>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!captchaToken) {
      setErrorMsg('Bitte das Captcha bestätigen.')
      setStatus('error')
      return
    }

    setStatus('loading')
    const form = e.currentTarget
    const data = {
      vorname:       (form.elements.namedItem('vorname')     as HTMLInputElement).value,
      nachname:      (form.elements.namedItem('nachname')    as HTMLInputElement).value,
      email:         (form.elements.namedItem('email')       as HTMLInputElement).value,
      unternehmen:   (form.elements.namedItem('unternehmen') as HTMLInputElement).value,
      thema:         (form.elements.namedItem('thema')       as HTMLSelectElement).value,
      nachricht:     (form.elements.namedItem('nachricht')   as HTMLTextAreaElement).value,
      hcaptchaToken: captchaToken,
    }

    try {
      const res = await fetch('/api/contact', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(data),
      })
      const json = await res.json()

      if (!res.ok) throw new Error(json.error || 'Unbekannter Fehler')

      setStatus('success')
      form.reset()
      captchaRef.current?.resetCaptcha()
      setCaptchaToken(null)

    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : 'Fehler beim Senden.')
      setStatus('error')
      captchaRef.current?.resetCaptcha()
      setCaptchaToken(null)
    }
  }

  // ── Danksagungs-Screen
  if (status === 'success') {
    return (
      <div className="kontakt-danke">
        <div className="danke-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
            <polyline points="22 4 12 14.01 9 11.01"/>
          </svg>
        </div>
        <h3>Vielen Dank für Ihre Nachricht!</h3>
        <p>Wir melden uns innerhalb eines Werktages bei Ihnen — versprochen.</p>
        <button
          onClick={() => setStatus('idle')}
          className="btn-text"
        >
          Weitere Nachricht senden
        </button>

        <style>{`
          .kontakt-danke {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 48px 32px;
            min-height: 340px;
          }
          .danke-icon {
            width: 64px; height: 64px;
            background: #EBF4F7;
            border-radius: 50%;
            display: flex; align-items: center; justify-content: center;
            margin-bottom: 24px;
          }
          .danke-icon svg {
            width: 32px; height: 32px;
            stroke: #006E8C;
          }
          .kontakt-danke h3 {
            font-family: 'Lora', Georgia, serif;
            font-size: 24px; font-weight: 500;
            color: #0C3D5E;
            margin-bottom: 12px;
          }
          .kontakt-danke p {
            font-size: 16px;
            color: #4A5E6D;
            max-width: 360px;
            line-height: 1.65;
            margin-bottom: 28px;
          }
        `}</style>
      </div>
    )
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="kontakt-form" noValidate>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="vorname">Vorname *</label>
            <input type="text" id="vorname" name="vorname" required placeholder="Max" />
          </div>
          <div className="form-group">
            <label htmlFor="nachname">Nachname *</label>
            <input type="text" id="nachname" name="nachname" required placeholder="Mustermann" />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email">E-Mail *</label>
          <input type="email" id="email" name="email" required placeholder="max@beispiel.de" />
        </div>

        <div className="form-group">
          <label htmlFor="unternehmen">Unternehmen</label>
          <input type="text" id="unternehmen" name="unternehmen" placeholder="Mustermann GmbH" />
        </div>

        <div className="form-group">
          <label htmlFor="thema">Thema</label>
          <select id="thema" name="thema">
            <option value="">Bitte wählen …</option>
            <option value="IT-Beratung">IT-Beratung</option>
            <option value="Webentwicklung">Webentwicklung</option>
            <option value="KI & SaaS">KI &amp; SaaS</option>
            <option value="Sonstiges">Sonstiges</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="nachricht">Nachricht *</label>
          <textarea id="nachricht" name="nachricht" required placeholder="Beschreiben Sie kurz Ihr Vorhaben …" rows={5} />
        </div>

        {/* hCaptcha */}
        <div className="form-group">
          <HCaptcha
            ref={captchaRef}
            sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITEKEY!}
            onVerify={(token) => setCaptchaToken(token)}
            onExpire={() => setCaptchaToken(null)}
            languageOverride="de"
          />
        </div>

        {status === 'error' && (
          <div className="form-status error">{errorMsg}</div>
        )}

        <button
          type="submit"
          className="form-submit"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Wird gesendet …' : 'Nachricht senden →'}
        </button>
      </form>

      <style>{`
        .kontakt-form { display: flex; flex-direction: column; gap: 0; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .form-group { margin-bottom: 18px; }
        .form-group label {
          display: block;
          font-size: 13px; font-weight: 600;
          color: #4A5E6D;
          margin-bottom: 7px;
          letter-spacing: .02em;
        }
        .form-group input,
        .form-group textarea,
        .form-group select {
          width: 100%;
          box-sizing: border-box;
          padding: 11px 14px;
          border: 1px solid #D6DFE5;
          border-radius: 4px;
          font-family: 'Source Sans 3', sans-serif;
          font-size: 15px;
          color: #131E27;
          background: #FAFAF8;
          outline: none;
          transition: border-color .2s, box-shadow .2s, background .2s;
          appearance: none;
        }
        .form-group input:focus,
        .form-group textarea:focus,
        .form-group select:focus {
          border-color: #006E8C;
          box-shadow: 0 0 0 3px rgba(0,110,140,.12);
          background: #fff;
        }
        .form-group textarea { resize: vertical; min-height: 110px; }
        .form-status {
          margin-bottom: 14px;
          font-size: 14px;
          padding: 11px 14px;
          border-radius: 4px;
        }
        .form-status.error {
          background: #FDECEA;
          color: #A32D2D;
          border: 1px solid #f5c1c1;
        }
        .form-submit {
          width: 100%;
          padding: 14px;
          font-family: 'Source Sans 3', sans-serif;
          font-size: 15px; font-weight: 600;
          color: #fff;
          background: #D45F0A;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background .2s, transform .15s;
        }
        .form-submit:hover:not(:disabled) { background: #B34F08; transform: translateY(-2px); }
        .form-submit:disabled { opacity: .6; cursor: not-allowed; }
        @media (max-width: 600px) {
          .form-row { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  )
}