import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Prime Clean | Home & Workplace Cleaning in Tanzania',
  description: 'Explore residential, commercial and deep cleaning in Tanzania. Request a quote from Prime Clean on WhatsApp and check availability in your area.',
  icons: { icon: '/prime-icon.png', apple: '/prime-icon.png' },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#007d91',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
