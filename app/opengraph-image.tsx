import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'intersignum — IT-Projektmanagement Berlin'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

// SVG logo als Data-URI (weiß, für dunklen Hintergrund)
const logoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 139.98 26.87"><g><path fill="white" d="M12.33,28.08V12.84h2.53V28.08Z" transform="translate(-12.33 -8.07)"/><rect fill="white" width="2.53" height="2.53"/><path fill="white" d="M24.55,12.84a5.06,5.06,0,0,1,1.85.34,4.57,4.57,0,0,1,1.58,1,4.78,4.78,0,0,1,1.08,1.64A5.71,5.71,0,0,1,29.45,18V28.08H27V18a3,3,0,0,0-.21-1.14,2.92,2.92,0,0,0-.53-.89,2.43,2.43,0,0,0-.76-.55,2.2,2.2,0,0,0-.92-.19h-4.2V28.08H17.87V12.84Z" transform="translate(-12.33 -8.07)"/><path fill="white" d="M39.1,28.09H36.78a4.46,4.46,0,0,1-4.45-4.46V8.07h2.59v4.76h4v2.58h-4v8.21a1.87,1.87,0,0,0,1.86,1.87h2.9v2.59Z" transform="translate(-12.33 -8.07)"/><path fill="white" d="M51.73,28.09H47.39a7.09,7.09,0,0,1-2.7-.45,4,4,0,0,1-1.8-1.4A5.91,5.91,0,0,1,42,24a16.64,16.64,0,0,1-.24-3V18.77a6.83,6.83,0,0,1,.44-2.5,5.23,5.23,0,0,1,1.24-1.88,5.54,5.54,0,0,1,1.83-1.16,6.37,6.37,0,0,1,2.25-.39,5.93,5.93,0,0,1,4.36,1.52,6,6,0,0,1,1.52,4.41v2.92H45.94l0-2.4h5v-.53a3.8,3.8,0,0,0-.83-2.67,3.39,3.39,0,0,0-2.56-.86,3.06,3.06,0,0,0-2.42.93,3.74,3.74,0,0,0-.86,2.6v.53l.05,1.86c0,.58.06,1.65.15,2.1A3.94,3.94,0,0,0,45,24.64a2.2,2.2,0,0,0,.91.77,3.82,3.82,0,0,0,1.56.28h5.43v2.39Z" transform="translate(-12.33 -8.07)"/><path fill="white" d="M59.14,18.85v9.23H56.66V15h0a2.15,2.15,0,0,1,2.15-2.16h5.87v2.4H60.15a.94.94,0,0,0-1,1C59.16,17.31,59.14,18.85,59.14,18.85Z" transform="translate(-12.33 -8.07)"/><path fill="white" d="M66.63,26.79h5.45q2.7,0,2.7-2.1V24a2.44,2.44,0,0,0-1.68-2.55L69.35,20a5.14,5.14,0,0,1-2.18-1.41,3.52,3.52,0,0,1-.64-2.25q0-3.51,3.87-3.51h5.15v1.32h-5a2.74,2.74,0,0,0-1.85.54,1.63,1.63,0,0,0-.61,1.26v.69a1.81,1.81,0,0,0,.46,1.32,3.61,3.61,0,0,0,1.43.81l3.75,1.5a3.37,3.37,0,0,1,2.08,1.51,6.16,6.16,0,0,1,.53,2.81,3.35,3.35,0,0,1-1,2.67,4.65,4.65,0,0,1-3.1.87h-5.6Z" transform="translate(-12.33 -8.07)"/><path fill="white" d="M79.11,28.08V12.84h1.64V28.08Z" transform="translate(-12.33 -8.07)"/><rect fill="white" x="66.78" width="1.64" height="1.64"/><path fill="white" d="M94.7,14.07v14a15.83,15.83,0,0,1-.25,3,5.28,5.28,0,0,1-.89,2.14,3.85,3.85,0,0,1-1.69,1.29,7.17,7.17,0,0,1-2.69.44H85.31v-1.5h3.84A4.57,4.57,0,0,0,91,33.1a2.81,2.81,0,0,0,1.21-1,4.54,4.54,0,0,0,.65-1.66,13.73,13.73,0,0,0,.22-2.31l0-1.5,0-12.18H88.19a2.79,2.79,0,0,0-2.28,1.14,4.75,4.75,0,0,0-.9,3v4.53a3.82,3.82,0,0,0,.26,1.42,3.45,3.45,0,0,0,.67,1.1,3,3,0,0,0,1,.7,2.91,2.91,0,0,0,1.2.26h3.3v1.5H88.13a4.88,4.88,0,0,1-1.8-.33,4.49,4.49,0,0,1-2.53-2.55,5.57,5.57,0,0,1-.38-2.1V18.51a7.3,7.3,0,0,1,.26-1.8,6.24,6.24,0,0,1,.81-1.85A4.81,4.81,0,0,1,86,13.42a4,4,0,0,1,2.23-.58H94.7Z" transform="translate(-12.33 -8.07)"/><path fill="white" d="M99.16,12.84h5.37a4.94,4.94,0,0,1,1.79.33,4.39,4.39,0,0,1,1.51,1,4.58,4.58,0,0,1,1,1.58,5.66,5.66,0,0,1,.37,2.13V28.08h-1.59V17.85a3.87,3.87,0,0,0-.25-1.43,3.64,3.64,0,0,0-.68-1.11,2.94,2.94,0,0,0-1-.72,2.9,2.9,0,0,0-1.2-.25h-5V28.08H97.9V12.84Z" transform="translate(-12.33 -8.07)"/><path fill="white" d="M124.05,12.84v11a4.26,4.26,0,0,1-4.27,4.24h-3.4a4.23,4.23,0,0,1-4.24-4.24v-11h1.7v11a2.54,2.54,0,0,0,2.54,2.54h3.4a2.55,2.55,0,0,0,2.57-2.54v-11Z" transform="translate(-12.33 -8.07)"/><path fill="white" d="M129.24,12.84h13.68a4.89,4.89,0,0,1,1.78.33,4.26,4.26,0,0,1,1.5,1,4.88,4.88,0,0,1,1,1.58,5.47,5.47,0,0,1,.39,2.13V28.08H146V17.85a3.87,3.87,0,0,0-.26-1.43,3.61,3.61,0,0,0-.67-1.11,2.94,2.94,0,0,0-1-.72,2.9,2.9,0,0,0-1.2-.25H138.6V28.08H137V14.34h-7.44V28.08H128V12.84Z" transform="translate(-12.33 -8.07)"/><rect fill="white" x="138.33" y="18.36" width="1.64" height="1.64"/></g></svg>`

const logoDataUri = `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(logoSvg)))}`

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: 'flex',
          background: '#0C3D5E',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Linke Akzentlinie */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: 6,
            background: 'linear-gradient(180deg, #D45F0A 0%, #006E8C 100%)',
          }}
        />

        {/* Geometrischer Kreis hinten rechts */}
        <div
          style={{
            position: 'absolute',
            right: -140,
            top: -100,
            width: 560,
            height: 560,
            borderRadius: '50%',
            border: '90px solid rgba(0, 110, 140, 0.16)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            right: 60,
            bottom: -180,
            width: 360,
            height: 360,
            borderRadius: '50%',
            border: '44px solid rgba(212, 95, 10, 0.10)',
          }}
        />

        {/* Content-Bereich */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '56px 68px',
            flex: 1,
          }}
        >
          {/* Logo oben */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoDataUri}
            alt="intersignum"
            width={200}
            height={38}
            style={{ objectFit: 'contain', objectPosition: 'left center' }}
          />

          {/* Headline mittig */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            <div
              style={{
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: '#7EC8DA',
                marginBottom: 20,
              }}
            >
              IT-Beratung · Projektmanagement · Berlin
            </div>
            <div
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: 58,
                fontWeight: 400,
                color: '#ffffff',
                lineHeight: 1.18,
                marginBottom: 24,
                maxWidth: 740,
              }}
            >
              IT-Projekte,{'\n'}die in time und{'\n'}in budget bleiben.
            </div>
            <div
              style={{
                fontSize: 18,
                color: 'rgba(255,255,255,0.55)',
                lineHeight: 1.5,
                maxWidth: 600,
              }}
            >
              Über 12 Jahre Erfahrung · herstellerunabhängig · keine versteckten Interessen
            </div>
          </div>

          {/* Footer */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div
              style={{
                fontSize: 15,
                color: 'rgba(255,255,255,0.30)',
                letterSpacing: '0.04em',
              }}
            >
              intersignum.de
            </div>
            <div
              style={{
                background: 'rgba(212, 95, 10, 0.20)',
                border: '1px solid rgba(212, 95, 10, 0.45)',
                color: '#F59E6B',
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: '0.10em',
                textTransform: 'uppercase',
                padding: '8px 18px',
                borderRadius: 3,
              }}
            >
              Seit 2013
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  )
}
