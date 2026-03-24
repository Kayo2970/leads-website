'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { useTheme } from './ThemeProvider'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/team', label: 'Team' },
  { href: '/events', label: 'Events' },
  { href: '/events/bharat-lead-summit', label: 'BLS' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const { theme, toggleTheme } = useTheme()
  const [mobileMenuPath, setMobileMenuPath] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const mobileOpen = mobileMenuPath === pathname

  return (
    <>
      <nav className="navbar" id="main-nav">
        <div className="nav-container">
          <Link href="/" className="nav-logo" id="nav-logo">
            <Image
              src={isMobile ? '/leads-logo-thumb.png' : '/leads-logo-large.png'}
              alt="LEADS Next Gen Centre"
              width={isMobile ? 120 : 320}
              height={isMobile ? 120 : 92}
              className="nav-logo-image"
              priority
            />
            <span className="sr-only">LEADS</span>
          </Link>

          <div className="nav-links">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${pathname === link.href ? 'active' : ''}`}
                id={`nav-${link.label.toLowerCase().replace(/\s/g, '-')}`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/join" className="nav-cta" id="nav-join-cta">
              Join LEADS
            </Link>
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              id="theme-toggle"
              aria-label="Toggle dark mode"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </div>

          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <button
              className="nav-hamburger"
              onClick={() => setMobileMenuPath(mobileOpen ? null : pathname)}
              id="mobile-menu-toggle"
              aria-label="Toggle menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {mobileOpen ? (
                  <path d="M6 6l12 12M6 18L18 6" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <button
        type="button"
        className={`mobile-menu-backdrop ${mobileOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuPath(null)}
        aria-label="Close mobile menu"
      />

      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`} id="mobile-menu">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`nav-link ${pathname === link.href ? 'active' : ''}`}
            onClick={() => setMobileMenuPath(null)}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/join"
          className="nav-cta"
          onClick={() => setMobileMenuPath(null)}
        >
          Join LEADS
        </Link>
      </div>
    </>
  )
}
