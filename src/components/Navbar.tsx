'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { useTheme } from './ThemeProvider'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/events', label: 'Events' },
  { href: '/events/bharat-lead-summit', label: 'BLS' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const { theme, toggleTheme } = useTheme()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <nav className="navbar" id="main-nav">
        <div className="nav-container">
          <Link href="/" className="nav-logo" id="nav-logo">
            <Image
              src="/leads-full-logo.png"
              alt="LEADS Next Gen Centre"
              width={320}
              height={90}
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
              className="theme-toggle nav-hamburger"
              onClick={toggleTheme}
              id="theme-toggle-mobile"
              aria-label="Toggle dark mode"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
            <button
              className="nav-hamburger"
              onClick={() => setMobileOpen(!mobileOpen)}
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

      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`} id="mobile-menu">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`nav-link ${pathname === link.href ? 'active' : ''}`}
            onClick={() => setMobileOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/join"
          className="nav-cta"
          onClick={() => setMobileOpen(false)}
        >
          Join LEADS
        </Link>
      </div>
    </>
  )
}
