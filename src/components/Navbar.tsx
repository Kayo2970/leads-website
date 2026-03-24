'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
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
  const [menuOpen, setMenuOpen] = useState(false)

  const close = () => setMenuOpen(false)

  return (
    <>
      <nav className="navbar" id="main-nav">
        <div className="nav-container">
          <Link href="/" className="nav-logo" id="nav-logo" onClick={close}>
            {/* Desktop Logo */}
            <div className="desktop-logo">
              <Image
                src="/leads-logo-large.png"
                alt="LEADS Next Gen Centre"
                width={200}
                height={57}
                className="nav-logo-image"
                priority
              />
            </div>
            {/* Mobile/Tablet Logo */}
            <div className="mobile-logo">
              <Image
                src="/leads-logo-thumb.png"
                alt="LEADS"
                width={60}
                height={60}
                className="nav-logo-image"
                priority
              />
            </div>
            <span className="sr-only">LEADS</span>
          </Link>

          {/* Desktop nav links */}
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

          {/* Hamburger — always in DOM, shown via CSS on tablet/mobile */}
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen((o) => !o)}
            id="mobile-menu-toggle"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Backdrop */}
      <button
        type="button"
        className={`mobile-menu-backdrop ${menuOpen ? 'open' : ''}`}
        onClick={close}
        aria-label="Close mobile menu"
      />

      {/* Slide-in drawer */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} id="mobile-menu">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`nav-link ${pathname === link.href ? 'active' : ''}`}
            onClick={close}
          >
            {link.label}
          </Link>
        ))}
        <Link href="/join" className="nav-cta" onClick={close}>
          Join LEADS
        </Link>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          style={{ marginTop: '16px', width: '100%', justifyContent: 'center' }}
          aria-label="Toggle dark mode"
        >
          {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
      </div>
    </>
  )
}

