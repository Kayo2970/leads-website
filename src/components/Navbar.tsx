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

  const toggle = () => setMenuOpen((o) => !o)
  const close = () => setMenuOpen(false)

  return (
    <>
      {/* ── NAV BAR ── */}
      <nav id="main-nav" className="navbar">
        <div className="nav-container">

          {/* Logo */}
          <Link href="/" onClick={close} className="nav-logo" id="nav-logo">
            <div className="desktop-logo">
              <Image src="/leads-logo-large.png" alt="LEADS Next Gen Centre" width={200} height={57} priority style={{ objectFit: 'contain' }} />
            </div>
            <div className="mobile-logo">
              <Image src="/leads-logo-thumb.png" alt="LEADS" width={50} height={50} priority style={{ objectFit: 'contain' }} />
            </div>
          </Link>

          {/* Desktop links — hidden on mobile via CSS class only (no inline style) */}
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
            <Link href="/join" className="nav-cta" id="nav-join-cta">Join LEADS</Link>
            <button className="theme-toggle" onClick={toggleTheme} id="theme-toggle" aria-label="Toggle dark mode">
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </div>

          {/* Hamburger — shown on mobile via CSS class only (no inline style) */}
          <button
            id="mobile-menu-toggle"
            className="nav-hamburger"
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            onClick={toggle}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              {menuOpen
                ? <><line x1="6" y1="6" x2="18" y2="18" /><line x1="18" y1="6" x2="6" y2="18" /></>
                : <><line x1="4" y1="7" x2="20" y2="7" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="17" x2="20" y2="17" /></>
              }
            </svg>
          </button>
        </div>
      </nav>

      {/* ── BACKDROP ── only mounted when open so it never blocks taps */}
      {menuOpen && (
        <div
          onClick={close}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.55)',
            zIndex: 8900,
            WebkitTapHighlightColor: 'transparent',
          }}
        />
      )}

      {/* ── SLIDE-IN DRAWER ── */}
      <div
        id="mobile-menu"
        className={`mobile-menu ${menuOpen ? 'open' : ''}`}
        aria-hidden={!menuOpen}
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={close}
            className={`nav-link ${pathname === link.href ? 'active' : ''}`}
          >
            {link.label}
          </Link>
        ))}

        <Link href="/join" onClick={close} className="nav-cta" style={{ marginTop: 12, textAlign: 'center', display: 'block' }}>
          Join LEADS
        </Link>

        <button
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
          className="theme-toggle"
          style={{ marginTop: 8, width: '100%', justifyContent: 'center' }}
        >
          {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
      </div>
    </>
  )
}
