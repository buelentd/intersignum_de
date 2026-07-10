import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'intersignum — IT-Beratung Berlin'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          background: '#014C66',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            fontSize: 28,
            color: '#D45F0A',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: 24,
          }}
        >
          intersignum
        </div>
        <div
          style={{
            fontSize: 56,
            color: '#ffffff',
            fontWeight: 700,
            lineHeight: 1.15,
            maxWidth: 900,
          }}
        >
          IT-Projekte, die in time und in budget bleiben.
        </div>
        <div
          style={{
            fontSize: 24,
            color: '#9EC4D4',
            marginTop: 32,
          }}
        >
          IT-Beratung · Webentwicklung · KI & SaaS · Data — Berlin
        </div>
      </div>
    ),
    size
  )
}
