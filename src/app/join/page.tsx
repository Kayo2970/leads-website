import type { Metadata } from 'next'
import JoinForm from '@/components/JoinForm'

export const metadata: Metadata = {
  title: 'Join Us',
  description:
    'Join LEADS Next Gen Centre at MSRUAS. Discover your membership journey from Trainee Associate to Student Leader. Apply now.',
}

const benefits = [
  { icon: '🚀', title: 'Real-World Programmes', desc: 'Access 8 core programmes: innovation, sustainability, leadership, and more.' },
  { icon: '🤝', title: 'Industry Mentorship', desc: '1:1 mentorship from McKinsey, WRI, and Tata professionals.' },
  { icon: '⚡', title: 'Bharat Lead Summit', desc: 'Priority registration and delegate roles at India\'s premier student summit.' },
  { icon: '🌱', title: 'Growth Path', desc: 'Structured progression from Trainee Associate to Core Executive to Leadership roles.' },
  { icon: '📡', title: 'Network', desc: 'Connect with 500+ members across all MSRUAS faculties and batches.' },
  { icon: '🏆', title: 'Recognition', desc: 'Certificates, recommendations, and leadership credentials that matter.' },
]

const roles = [
  {
    title: 'Trainee Associate',
    year: 'Year 1',
    desc: 'Entry-level membership open to all MSRUAS students. Attend all core programmes, help organise events, and explore the LEADS ecosystem.',
    color: 'var(--teal)',
  },
  {
    title: 'Core Executive',
    year: 'Year 2+',
    desc: 'Lead specific programmes or functions and mentor incoming Trainees. You\'re now building the organisation, not just participating.',
    color: 'var(--primary)',
  },
  {
    title: 'Leadership Roles',
    year: 'Senior',
    desc: 'Chief Coordinator, Vice-President, General Secretary, President — governance responsibilities with direct faculty mentorship.',
    color: 'var(--gold)',
  },
]

const faqs = [
  {
    q: 'Who can join LEADS?',
    a: 'Any currently enrolled MSRUAS student across all faculties and batches is eligible to apply as a Trainee Associate.',
  },
  {
    q: 'Is there a membership fee?',
    a: 'No. LEADS membership is free. Some events may have separate registration fees for external participants.',
  },
  {
    q: 'How much time commitment is expected?',
    a: 'Trainee Associates typically spend 3-5 hours per week on LEADS activities. Core Executives may spend more during event season.',
  },
  {
    q: 'Can I join mid-semester?',
    a: 'Yes! While the main recruitment cycle is at the start of each semester, we accept applications on a rolling basis.',
  },
]

export default function JoinPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="page-hero" id="join-hero">
        <div className="container">
          <div className="section-label" style={{ color: 'var(--teal)' }}>Join Us</div>
          <h1 className="page-hero-title">Ready to Lead?</h1>
          <p className="page-hero-sub">
            Become part of a community building India&apos;s next generation of
            purpose-driven leaders.
          </p>
        </div>
      </section>

      {/* ── WHY JOIN ── */}
      <section className="section" id="why-join">
        <div className="container">
          <div className="section-label reveal">Why LEADS</div>
          <h2 className="section-heading reveal">What You Get</h2>
          <p className="section-sub reveal">
            More than a club — a structured platform for growth, mentorship, and real impact.
          </p>
          <hr className="divider" />
          <div className="grid-3">
            {benefits.map((b, i) => (
              <div key={i} className={`icon-card reveal reveal-d${(i % 3) + 1}`}>
                <div className="ic-icon" style={{
                  background: i % 3 === 0
                    ? 'linear-gradient(135deg, var(--primary), var(--teal))'
                    : i % 3 === 1
                    ? 'linear-gradient(135deg, var(--gold), #E65100)'
                    : 'linear-gradient(135deg, #7B1FA2, var(--primary))'
                }}>
                  {b.icon}
                </div>
                <h4>{b.title}</h4>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── JOURNEY ── */}
      <section className="section" style={{ background: 'var(--surface)' }} id="membership-journey">
        <div className="container">
          <div className="section-label reveal">Membership Roles</div>
          <h2 className="section-heading reveal">Your LEADS Journey</h2>
          <p className="section-sub reveal">
            This progression ensures LEADS grows from the inside, built by students who understand the mission.
          </p>
          <hr className="divider" />
          <div className="grid-3">
            {roles.map((r, i) => (
              <div key={i} className={`card reveal reveal-d${i + 1}`} style={{ borderTop: `4px solid ${r.color}` }}>
                <div style={{ fontSize: '12px', fontWeight: 700, color: r.color, textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '4px' }}>
                  {r.year}
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text)', marginBottom: '12px' }}>
                  {r.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text2)', lineHeight: '1.65' }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPLICATION FORM ── */}
      <section className="section" id="apply">
        <div className="container">
          <div className="grid-2">
            <div className="reveal">
              <div className="section-label">Apply</div>
              <h2 className="section-heading">Express Your Interest</h2>
              <p className="section-sub" style={{ maxWidth: '100%' }}>
                Fill in the form and we&apos;ll get back to you with next steps. We review
                applications on a rolling basis.
              </p>
              <hr className="divider" />
              <JoinForm />
            </div>

            {/* ── FAQ ── */}
            <div className="reveal reveal-d2">
              <div className="section-label">FAQs</div>
              <h2 className="section-heading">Common Questions</h2>
              <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {faqs.map((faq, i) => (
                  <div key={i} className="card" style={{ borderLeft: '4px solid var(--teal)' }}>
                    <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text)', marginBottom: '8px' }}>
                      {faq.q}
                    </h4>
                    <p style={{ fontSize: '14px', color: 'var(--text2)', lineHeight: '1.6' }}>
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
