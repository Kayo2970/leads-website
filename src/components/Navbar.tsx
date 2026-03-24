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
      <nav id="main-nav" style={{
        position: 'sticky',
        top: 0,
        zIndex: 9000,
        background: theme === 'dark' ? 'rgba(10,22,40,0.95)' : 'rgba(240,247,255,0.95)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: theme === 'dark' ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(21,101,192,0.1)',
      }}>
        <div style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 64,
        }}>

          {/* Logo */}
          <Link href="/" onClick={close} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <div className="desktop-logo">
              <Image src="/leads-logo-large.png" alt="LEADS Next Gen Centre" width={200} height={57} priority style={{ objectFit: 'contain' }} />
            </div>
            <div className="mobile-logo">
              <Image src="/leads-logo-thumb.png" alt="LEADS" width={50} height={50} priority style={{ objectFit: 'contain' }} />
            </div>
          </Link>

          {/* Desktop links */}
          <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
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

          {/* Hamburger — inline styles to guarantee no z-index inheritance issues */}
          <button
            id="mobile-menu-toggle"
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            onClick={toggle}
            style={{
              display: 'none', // CSS media query below overrides this
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '10px',
              color: theme === 'dark' ? '#fff' : '#0d1624',
              zIndex: 9999,
              position: 'relative',
              WebkitTapHighlightColor: 'transparent',
              touchAction: 'manipulation',
            }}
            className="nav-hamburger"
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

      {/* ── BACKDROP ── rendered outside nav, separate stacking context */}
      {menuOpen && (
        <div
          onClick={close}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.5)',
            zIndex: 8900,
            WebkitTapHighlightColor: 'transparent',
          }}
        />
      )}

      {/* ── SLIDE-IN DRAWER ── */}
      <div
        id="mobile-menu"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 'min(85vw, 320px)',
          height: '100dvh',
          background: theme === 'dark' ? '#0d1e35' : '#ffffff',
          zIndex: 9500,
          display: 'flex',
          flexDirection: 'column',
          padding: '80px 24px 32px',
          gap: 8,
          transform: menuOpen ? 'translateX(0)' : 'translateX(-110%)',
          transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)',
          boxShadow: menuOpen ? '4px 0 40px rgba(0,0,0,0.25)' : 'none',
          overflowY: 'auto',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={close}
            style={{
              display: 'block',
              padding: '14px 16px',
              fontSize: 17,
              fontWeight: 600,
              color: pathname === link.href
                ? 'var(--teal)'
                : (theme === 'dark' ? 'rgba(255,255,255,0.85)' : '#1A1A2E'),
              textDecoration: 'none',
              borderRadius: 10,
              background: pathname === link.href ? 'rgba(0,188,212,0.1)' : 'transparent',
            }}
          >
            {link.label}
          </Link>
        ))}

        <Link
          href="/join"
          onClick={close}
          style={{
            marginTop: 12,
            display: 'block',
            textAlign: 'center',
            padding: '13px 22px',
            background: 'var(--gold)',
            color: '#1A1A2E',
            borderRadius: 30,
            fontWeight: 700,
            fontSize: 15,
            textDecoration: 'none',
          }}
        >
          Join LEADS
        </Link>

        <button
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
          style={{
            marginTop: 8,
            padding: '12px 22px',
            background: 'var(--surface)',
            border: '1px solid rgba(21,101,192,0.15)',
            borderRadius: 30,
            fontSize: 14,
            color: 'var(--text)',
            cursor: 'pointer',
            fontWeight: 600,
          }}
        >
          {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
      </div>
    </>
  )
}
