import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'
import ThemeProvider from '@/components/ThemeProvider'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Preloader from '@/components/Preloader'
import ScrollReveal from '@/components/ScrollReveal'
import InteractiveCursor from '@/components/InteractiveCursor'
import AnalyticsProvider from '@/components/AnalyticsProvider'
import { Suspense } from 'react'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: {
    default: 'LEADS Next Gen Centre | MSRUAS',
    template: '%s | LEADS Next Gen Centre',
  },
  icons: {
    icon: [{ url: '/icon.png', sizes: '64x64', type: 'image/png' }],
    shortcut: '/icon.png',
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  description:
    'LEADS Next Gen Centre at MSRUAS empowers future-ready youth leaders through experiential learning, ethical mentorship, and sustainability-driven action.',
  keywords: [
    'LEADS',
    'MSRUAS',
    'leadership',
    'sustainability',
    'Bharat Lead Summit',
    'student leaders',
    'Bengaluru',
  ],
  authors: [{ name: 'LEADS Next Gen Centre' }],
  openGraph: {
    title: 'LEADS Next Gen Centre | MSRUAS',
    description:
      'Empowering the next generation of leaders, speakers, and entrepreneurs.',
    type: 'website',
    locale: 'en_IN',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "edc6acebaad34f76a57c25783df697fe"}'></script>
      </head>
      <body>
        <ThemeProvider>
          <Suspense fallback={null}>
            <AnalyticsProvider />
          </Suspense>
          <InteractiveCursor />
          <Preloader />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ScrollReveal />
        </ThemeProvider>
      </body>
    </html>
  )
}
