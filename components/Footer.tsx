// components/Footer.tsx
import Link from 'next/link'
import { LogoWhite } from './Logo'

export default function Footer() {
  return (
    <footer style={{
      background: '#0C3D5E',
      borderTop: '3px solid #006E8C',
    }}>
      <div style={{
        maxWidth: 1160,
        margin: '0 auto',
        padding: '40px 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 24,
        flexWrap: 'wrap',
      }}>
        {/* Logo — SVG inline, kein img-Tag, kein Abschneiden */}
        <Link href="/" aria-label="intersignum Startseite">
          <LogoWhite height={20} />
        </Link>

        <div style={{ display: 'flex', gap: 32 }}>
          <Link href="/datenschutz" style={{
            fontSize: 13, color: 'rgba(255,255,255,.55)',
            textDecoration: 'none', transition: 'color .2s',
          }}>
            Datenschutz
          </Link>
          <a
            href="https://www.linkedin.com/company/34578590/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: 13, color: 'rgba(255,255,255,.55)',
              textDecoration: 'none', transition: 'color .2s',
            }}
          >
            LinkedIn
          </a>
        </div>

        <p style={{
          fontSize: 12,
          color: 'rgba(255,255,255,.35)',
          margin: 0,
        }}>
          © 2026 intersignum UG (haftungsbeschränkt) · Pasewalker Str. 15, 13127 Berlin
        </p>
      </div>
    </footer>
  )
}
