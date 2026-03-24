import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>LEADS<span>.</span></h3>
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
            <a href="mailto:leads.msruas@msruas.ac.in">leads.msruas@msruas.ac.in</a>
          </div>
        </div>
        <div className="footer-bottom">
          © {new Date().getFullYear()} LEADS Next Gen Centre, MSRUAS. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
