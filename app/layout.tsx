import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'intersignum',
  description: 'IT-Beratung, Webentwicklung und KI & SaaS aus Berlin.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  )
}