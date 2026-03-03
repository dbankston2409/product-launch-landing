import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Product Launch - Coming Soon',
  description: 'Revolutionary product launching soon. Join the waitlist.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
