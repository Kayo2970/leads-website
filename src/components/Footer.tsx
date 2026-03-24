import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer dynamic-bg" id="footer" style={{ color: 'white', borderTop: 'none', position: 'relative' }}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="footer-grid">
          <div className="footer-brand">
            <div style={{ background: 'white', padding: '16px', borderRadius: '12px', display: 'inline-block', marginBottom: '16px' }}>
                <Image
                  src="/leads-logo-large.png"
                  alt="LEADS Next Gen Centre"
                  width={200}
                  height={58}
                  className="footer-logo-image" style={{ filter: 'none' }}
                />
            </div>
            <p style={{ color: '#E0F2F1' }}>
              LEADS Next Gen Centre — MSRUAS. Empowering the next generation of
              leaders, speakers, and entrepreneurs since 2019.
            </p>
            <p>
              LEADS Next Gen Centre — MSRUAS. Empowering the next generation of
              leaders, speakers, and entrepreneurs since 2019.
            </p>
          </div>
          <div className="footer-col">
            <h4>Organisation</h4>
            <Link href="/about">About</Link>
            <Link href="/events">Our Programs</Link>
            <Link href="/about#governance">Leadership Council</Link>
          </div>
          <div className="footer-col">
            <h4>Events</h4>
            <Link href="/events">Upcoming Events</Link>
            <Link href="/events/bharat-lead-summit">BLS 2026</Link>
          </div>
          <div className="footer-col">
            <h4>Connect</h4>
            <Link href="/join">Join Us</Link>
            <Link href="/contact">Contact</Link>
            <a href="mailto:info@bharatleadsummit.com">info@bharatleadsummit.com</a>
          </div>
        </div>
        <div className="footer-bottom">
          © {new Date().getFullYear()} LEADS Next Gen Centre, MSRUAS. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
