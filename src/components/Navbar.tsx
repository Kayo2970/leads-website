'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Home, Users, Calendar, Award, Mail, LayoutDashboard } from 'lucide-react'
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
              <Image src="/leads-logo-thumb.png" alt="LEADS" width={90} height={90} priority style={{ objectFit: 'contain' }} />
            </div>
          </Link>

          {/* Desktop links */}
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
            <button className="theme-toggle" onClick={toggleTheme} id="theme-toggle" aria-label="Toggle dark mode" suppressHydrationWarning>
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </div>

          {/* Bottom Nav for Mobile */}
          <div className="bottom-nav">
            <Link href="/" className={`bottom-nav-item ${pathname === '/' ? 'active' : ''}`}>
              <Home className="bottom-nav-icon" />
              <span>Home</span>
            </Link>
            <Link href="/about" className={`bottom-nav-item ${pathname === '/about' ? 'active' : ''}`}>
              <Users className="bottom-nav-icon" />
              <span>About</span>
            </Link>
            <Link href="/team" className={`bottom-nav-item ${pathname === '/team' ? 'active' : ''}`}>
              <Award className="bottom-nav-icon" />
              <span>Team</span>
            </Link>
            <Link href="/events" className={`bottom-nav-item ${pathname === '/events' ? 'active' : ''}`}>
              <Calendar className="bottom-nav-icon" />
              <span>Events</span>
            </Link>
            <Link href="/contact" className={`bottom-nav-item ${pathname === '/contact' ? 'active' : ''}`}>
              <Mail className="bottom-nav-icon" />
              <span>Contact</span>
            </Link>
            <Link href="/admin" className={`bottom-nav-item ${pathname === '/admin' ? 'active' : ''}`}>
              <LayoutDashboard className="bottom-nav-icon" />
              <span>Admin</span>
            </Link>
          </div>
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
