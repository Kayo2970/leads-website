import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'The page you\'re looking for doesn\'t exist.',
}

export default function NotFound() {
  return (
    <section className="hero" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="hero-bg" />
      <div className="hero-content" style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '120px', fontWeight: 900, color: 'var(--teal)', lineHeight: 1, marginBottom: '16px' }}>
          404
        </div>
        <h1 className="hero-title" style={{ fontSize: '36px', marginBottom: '16px' }}>
          Page Not Found
        </h1>
        <p className="hero-description" style={{ margin: '0 auto 32px', maxWidth: '400px' }}>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="hero-actions" style={{ justifyContent: 'center' }}>
          <Link href="/" className="btn btn-primary" id="404-home-btn">
            Go Home →
          </Link>
          <Link href="/contact" className="btn btn-outline" id="404-contact-btn">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
