import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn the LEADS story — from E-Cell to Next Gen Centre. Our vision, mission, governance, and the team shaping India\'s next generation of leaders at MSRUAS.',
}

const values = [
  { icon: '🎯', title: 'Purpose-Driven', desc: 'Every programme is designed to create real-world impact, not just certificates.' },
  { icon: '🤝', title: 'Community First', desc: 'A multi-disciplinary community where peer learning meets guided mentorship.' },
  { icon: '🌱', title: 'Sustainability', desc: 'Sustainability isn\'t a module — it\'s woven into everything we do.' },
  { icon: '⚡', title: 'Action Over Theory', desc: 'Experiential learning: pitch, lead, build, fail, and grow.' },
]

const governance = [
  { role: 'Patron', title: 'Vice-Chancellor, MSRUAS', desc: 'Institutional vision & university alignment' },
  { role: 'Chief Advisor', title: 'Dean, Faculty of Management & Commerce', desc: 'Strategic direction & resource allocation' },
  { role: 'Centre Head', title: 'Nominated Faculty Member', desc: 'Day-to-day operations & student mentorship' },
  { role: 'Student Leadership', title: 'President, Gen Sec, VP, Chief Coordinator', desc: 'Vision ownership & execution' },
]

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="page-hero" id="about-hero">
        <div className="container">
          <div className="section-label" style={{ color: 'var(--teal)' }}>About LEADS</div>
          <h1 className="page-hero-title">Inspiring Future-Ready Youth Leaders</h1>
          <p className="page-hero-sub">
            From a small faculty entrepreneurship cell to India&apos;s most ambitious
            student leadership platform.
          </p>
        </div>
      </section>

      {/* ── OUR STORY ── */}
      <section className="section" id="story">
        <div className="container">
          <div className="grid-2">
            <div className="reveal">
              <div className="section-label">Our Story</div>
              <h2 className="section-heading">From E-Cell to LEADS</h2>
              <p className="section-sub" style={{ maxWidth: '100%' }}>
                In 2019, a small group of faculty at MSRUAS started an entrepreneurship 
                cell (E-Cell) with a simple idea: teach students how to think like founders. 
                The cell grew quickly — but so did the questions students were asking.
              </p>
              <p style={{ color: 'var(--text2)', fontSize: '15px', lineHeight: '1.7', marginTop: '16px' }}>
                &ldquo;How do I become a better communicator?&rdquo; &ldquo;How do I lead 
                a team through conflict?&rdquo; &ldquo;How do I build something that 
                matters for the planet?&rdquo;
              </p>
              <p style={{ color: 'var(--text2)', fontSize: '15px', lineHeight: '1.7', marginTop: '16px' }}>
                These questions pointed to a gap. So in 2023, E-Cell evolved into 
                <strong style={{ color: 'var(--text)' }}> LEADS Next Gen Centre</strong>. 
                We kept the entrepreneurial spirit but repositioned as a leadership 
                development platform, expanding from a faculty club to a multi-disciplinary 
                community with industry partners like McKinsey and WRI.
              </p>
            </div>
            <div className="reveal reveal-d2" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {values.map((v, i) => (
                <div key={i} className="card" style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '44px', height: '44px', borderRadius: '12px',
                    background: 'linear-gradient(135deg, var(--primary), var(--teal))',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '20px', flexShrink: 0
                  }}>
                    {v.icon}
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 700, color: 'var(--text)', marginBottom: '4px' }}>{v.title}</h4>
                    <p style={{ fontSize: '14px', color: 'var(--text2)', lineHeight: '1.55' }}>{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── VISION & MISSION ── */}
      <section className="section" style={{ background: 'var(--surface)' }} id="vision-mission">
        <div className="container">
          <div className="grid-2">
            <div className="card reveal" style={{ borderLeft: '4px solid var(--teal)' }}>
              <div className="section-label">Vision</div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text)', marginBottom: '12px' }}>
                Pioneering Transformative Leadership
              </h3>
              <p style={{ fontSize: '15px', color: 'var(--text2)', lineHeight: '1.7' }}>
                To pioneer a global culture of transformative leadership by empowering students
                to cultivate purpose-driven attitudes, champion sustainable innovation, and lead
                with integrity.
              </p>
            </div>
            <div className="card reveal reveal-d1" style={{ borderLeft: '4px solid var(--gold)' }}>
              <div className="section-label" style={{ color: 'var(--gold)' }}>Mission</div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text)', marginBottom: '12px' }}>
                Experiential Learning &amp; Ethical Mentorship
              </h3>
              <p style={{ fontSize: '15px', color: 'var(--text2)', lineHeight: '1.7' }}>
                To empower future leaders through experiential learning, ethical mentorship,
                and sustainability-driven action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── GOVERNANCE ── */}
      <section className="section" id="governance">
        <div className="container">
          <div className="section-label reveal">Governance</div>
          <h2 className="section-heading reveal">Leadership Council</h2>
          <p className="section-sub reveal">
            Academic rigor meets student ownership — a governance model ensuring
            accountability while keeping decision-making agile.
          </p>
          <hr className="divider" />
          <div className="grid-4">
            {governance.map((g, i) => (
              <div key={i} className={`card reveal reveal-d${i + 1}`} style={{ textAlign: 'center' }}>
                <div style={{
                  width: '56px', height: '56px', borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--primary), var(--teal))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '20px', margin: '0 auto 16px', color: '#fff', fontWeight: 700,
                }}>
                  {i + 1}
                </div>
                <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--teal)', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '4px' }}>
                  {g.role}
                </div>
                <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text)', marginBottom: '6px' }}>
                  {g.title}
                </h4>
                <p style={{ fontSize: '13px', color: 'var(--text2)' }}>{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MEMBERSHIP JOURNEY ── */}
      <section className="section" style={{ background: 'var(--surface)' }} id="journey">
        <div className="container">
          <div className="section-label reveal">Membership</div>
          <h2 className="section-heading reveal">Your Journey at LEADS</h2>
          <p className="section-sub reveal">
            From curious newcomer to student leader — a structured path that grows with you.
          </p>
          <hr className="divider" />
          <div className="journey-wrap reveal">
            <div className="journey-step">
              <div className="journey-dot done">✓</div>
              <div className="journey-label">Discover</div>
              <div className="journey-sub">Learn about LEADS</div>
            </div>
            <div className="journey-step">
              <div className="journey-dot done">✓</div>
              <div className="journey-label">Apply</div>
              <div className="journey-sub">Fill join form</div>
            </div>
            <div className="journey-step">
              <div className="journey-dot active">3</div>
              <div className="journey-label">Onboard</div>
              <div className="journey-sub">Orientation week</div>
            </div>
            <div className="journey-step">
              <div className="journey-dot">4</div>
              <div className="journey-label">Participate</div>
              <div className="journey-sub">Join programmes</div>
            </div>
            <div className="journey-step">
              <div className="journey-dot">⭐</div>
              <div className="journey-label">Lead</div>
              <div className="journey-sub">Core team role</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section" id="about-cta">
        <div className="container">
          <div className="cta-section reveal">
            <h2>Want to Be Part of the Story?</h2>
            <p>
              LEADS is always looking for ambitious students ready to grow, lead, and make an impact.
            </p>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/join" className="btn btn-gold" id="about-join-btn">Join LEADS →</Link>
              <Link href="/contact" className="btn btn-outline" id="about-contact-btn">Get in Touch</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
