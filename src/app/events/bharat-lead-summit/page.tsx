import type { Metadata } from 'next'
import Link from 'next/link'
import Starfield from '@/components/Starfield'
import TestimonialCarousel from '@/components/TestimonialCarousel'

export const metadata: Metadata = {
  title: 'Bharat Lead Summit 2026',
  description:
    'BLS 2026 — India\'s premier student leadership summit. 1,500+ delegates, Sustainable Leadership & AI theme, three days of keynotes, simulations, and networking at MSRUAS.',
}

const highlights = [
  { icon: '🎤', title: 'Keynote Speakers', desc: 'Industry leaders from McKinsey, WRI, and Tata sharing real-world insights.' },
  { icon: '🧪', title: 'Interactive Simulations', desc: 'Case studies: build a sustainability strategy, pitch a green venture, navigate AI ethics.' },
  { icon: '🤝', title: 'Expert Panels', desc: 'Deep conversations on AI governance, climate finance, and purpose-driven leadership.' },
  { icon: '🌱', title: 'Green Venture Showcase', desc: 'Student teams pitching sustainability solutions to investors and mentors.' },
  { icon: '📡', title: 'Intensive Networking', desc: 'Connections that lead to internships, collaborations, and long-term friendships.' },
  { icon: '🏆', title: 'Awards & Recognition', desc: 'Outstanding delegates and ventures recognised on a national stage.' },
]

const schedule = [
  {
    day: 'Day 1',
    title: 'Foundations',
    items: ['Opening Ceremony & Keynote', 'Leadership Frameworks Workshop', 'AI & Ethics Panel Discussion', 'Networking Reception'],
  },
  {
    day: 'Day 2',
    title: 'Deep Dive',
    items: ['Sustainability Strategy Simulation', 'Green Venture Pitch Workshop', 'Fireside Talk with Industry Leaders', 'Case Study Competition'],
  },
  {
    day: 'Day 3',
    title: 'Action',
    items: ['Green Venture Showcase Finals', 'Expert Panel: Future of Leadership', 'Awards Ceremony', 'Closing & Community Pledge'],
  },
]

export default function BLSPage() {
  return (
    <>
      {/* ── STARFIELD HERO ── */}
      <section className="hero" id="bls-hero" style={{ minHeight: '90vh' }}>
        <Starfield />
        <div className="hero-content" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <div className="hero-eyebrow">MSRUAS · AUGUST 2026</div>
          <h1 className="hero-title" style={{ letterSpacing: '-2px' }}>
            Bharat Lead<br />Summit <em>2026</em>
          </h1>
          <p className="hero-description" style={{ maxWidth: '600px', margin: '0 auto 32px' }}>
            Three days. 1,500+ delegates. India&apos;s most ambitious gathering
            of student leaders exploring <strong style={{ color: '#fff' }}>Sustainable Leadership &amp; AI</strong>.
          </p>
          <div className="hero-actions" style={{ justifyContent: 'center' }}>
            <Link href="/join" className="btn btn-gold" id="bls-register-btn">
              Register for BLS 2026 →
            </Link>
            <Link href="/contact" className="btn btn-outline" id="bls-contact-btn">
              Sponsor or Partner
            </Link>
          </div>
        </div>
      </section>

      {/* ── ABOUT BLS ── */}
      <section className="section" id="about-bls">
        <div className="container">
          <div className="grid-2">
            <div className="reveal">
              <div className="section-label">About BLS</div>
              <h2 className="section-heading">More Than a Conference</h2>
              <p className="section-sub" style={{ maxWidth: '100%' }}>
                Bharat Lead Summit is LEADS&apos;s national platform, held annually at MSRUAS.
                It brings together 1,500+ student leaders, professionals, and changemakers
                from across India.
              </p>
              <p style={{ color: 'var(--text2)', fontSize: '15px', lineHeight: '1.7', marginTop: '16px' }}>
                BLS isn&apos;t a traditional conference. It&apos;s a three-day immersive
                experience combining keynotes, interactive simulations, expert panels,
                a green venture showcase, and intensive networking. Delegates work through
                case studies, interact directly with industry leaders, and form connections
                that often lead to internships, collaborations, and long-term friendships.
              </p>
              <div className="info-box" style={{ marginTop: '24px' }}>
                <strong>2026 Theme:</strong> Sustainable Leadership &amp; AI — How leaders
                balance rapid technological change with environmental responsibility.
              </div>
            </div>
            <div className="reveal reveal-d2">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div className="stat-card card">
                  <div className="stat-number">1,500+</div>
                  <div className="stat-label">Delegates</div>
                </div>
                <div className="stat-card card">
                  <div className="stat-number">3</div>
                  <div className="stat-label">Days</div>
                </div>
                <div className="stat-card card">
                  <div className="stat-number">20+</div>
                  <div className="stat-label">Speakers</div>
                </div>
                <div className="stat-card card">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Colleges</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HIGHLIGHTS ── */}
      <section className="section" style={{ background: 'var(--surface)' }} id="bls-highlights">
        <div className="container">
          <div className="section-label reveal">What to Expect</div>
          <h2 className="section-heading reveal">Summit Highlights</h2>
          <hr className="divider" />
          <div className="grid-3">
            {highlights.map((h, i) => (
              <div key={i} className={`icon-card reveal reveal-d${(i % 3) + 1}`}>
                <div className="ic-icon" style={{
                  background: i % 2 === 0
                    ? 'linear-gradient(135deg, var(--primary), var(--teal))'
                    : 'linear-gradient(135deg, var(--gold), #E65100)'
                }}>
                  {h.icon}
                </div>
                <h4>{h.title}</h4>
                <p>{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCHEDULE ── */}
      <section className="section" id="bls-schedule">
        <div className="container">
          <div className="section-label reveal">Schedule</div>
          <h2 className="section-heading reveal">Three Days of Impact</h2>
          <hr className="divider" />
          <div className="grid-3">
            {schedule.map((day, i) => (
              <div key={i} className={`card reveal reveal-d${i + 1}`} style={{ borderTop: `4px solid ${i === 0 ? 'var(--teal)' : i === 1 ? 'var(--gold)' : 'var(--primary)'}` }}>
                <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--teal)', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '4px' }}>
                  {day.day}
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text)', marginBottom: '16px' }}>
                  {day.title}
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {day.items.map((item, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14px', color: 'var(--text2)' }}>
                      <span style={{ color: 'var(--teal)', fontWeight: 700, flexShrink: 0 }}>→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section" style={{ background: 'var(--surface)' }} id="bls-testimonials">
        <div className="container">
          <div className="section-label reveal">Past Delegates Say</div>
          <h2 className="section-heading reveal">Voices from BLS</h2>
          <hr className="divider" />
          <TestimonialCarousel />
        </div>
      </section>

      {/* ── REGISTER CTA ── */}
      <section className="section" id="bls-register">
        <div className="container">
          <div className="cta-section reveal">
            <h2>Be There When It Happens</h2>
            <p>
              BLS is where India&apos;s emerging leaders meet. If you&apos;re serious
              about making an impact, you need to be there.
            </p>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/join" className="btn btn-gold" id="bls-register-cta">
                Register Now →
              </Link>
              <Link href="/contact" className="btn btn-outline" id="bls-sponsor-cta">
                Become a Sponsor
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
