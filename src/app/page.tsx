import Link from 'next/link'
import type { Metadata } from 'next'
import TestimonialCarousel from '@/components/TestimonialCarousel'
import ArcRings from '@/components/ArcRings'
import InteractiveHeroShapes from '@/components/InteractiveHeroShapes'
import InteractiveCards from '@/components/InteractiveCards'
import StatsSection from '@/components/StatsSection'

export const metadata: Metadata = {
  title: 'LEADS Next Gen Centre | Inspiring Future-Ready Youth Leaders',
  description:
    'LEADS Next Gen Centre at MSRUAS shapes students into communicators, entrepreneurs, and change-makers through real-world programmes and the Bharat Lead Summit.',
}

const programs = [
  {
    icon: '🚀',
    title: 'Innovation Challenge',
    desc: 'Pitch breakthrough ideas addressing social or environmental challenges. Winners receive mentorship and funding.',
    gradient: 'linear-gradient(135deg, var(--primary), var(--teal))',
  },
  {
    icon: '🔥',
    title: 'Transformation Cohorts',
    desc: 'Small-group intensive sessions on systems thinking, ethical decision-making, and building influence.',
    gradient: 'linear-gradient(135deg, var(--gold), #E65100)',
  },
  {
    icon: '🌿',
    title: 'Sustainability Retreat',
    desc: 'Multi-day immersive experiences exploring climate tech, circular economy, and social entrepreneurship.',
    gradient: 'linear-gradient(135deg, #2E7D32, #00796B)',
  },
  {
    icon: '🎤',
    title: 'Fireside Talks',
    desc: 'Intimate, unscripted conversations with leaders sharing their biggest failures and real insights.',
    gradient: 'linear-gradient(135deg, #7B1FA2, var(--primary))',
  },
  {
    icon: '📡',
    title: 'Leadership Talk Series',
    desc: 'Monthly webinars on AI governance, climate finance, building resilient teams, and more.',
    gradient: 'linear-gradient(135deg, var(--teal), #006064)',
  },
  {
    icon: '🤝',
    title: 'Mentorship Circles',
    desc: 'Work 1:1 with McKinsey consultants or join small circles with WRI experts.',
    gradient: 'linear-gradient(135deg, var(--navy), var(--primary))',
  },
  {
    icon: '💼',
    title: 'Corporate Webinars',
    desc: 'Exclusive sessions on industry trends, hiring practices, and insider skill-building.',
    gradient: 'linear-gradient(135deg, #BF360C, var(--gold))',
  },
  {
    icon: '🌍',
    title: 'Green Leaders Circle',
    desc: 'Build real solutions — campus sustainability projects, policy briefs, and green tech concepts.',
    gradient: 'linear-gradient(135deg, #1B5E20, var(--teal))',
  },
]

export default function HomePage() {
  return (
    <>
      
      {/* ── HERO ── */}
      <section className="hero" id="hero" style={{ textAlign: 'left', minHeight: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', position: 'relative', overflow: 'hidden' }}>
        <div className="hero-bg dynamic-bg">
          <ArcRings />
          <InteractiveHeroShapes />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 10, width: '100%', padding: '0 2rem' }}>
          <div className="hero-content" style={{ maxWidth: '800px', margin: '0' }}>
            <div className="hero-eyebrow animate-bounce-twice">MSRUAS · Est. 2019</div>
            <h1 className="hero-title" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', lineHeight: '1.1', marginBottom: '1.5rem', textShadow: '0 4px 20px rgba(0,0,0,0.3)' }}>
              Where Leaders<br />Are <em>Made.</em>
            </h1>
            <p className="hero-description" style={{ fontSize: '1.25rem', maxWidth: '600px', marginBottom: '2rem', background: 'rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '12px', backdropFilter: 'blur(10px)' }}>
              LEADS Next Gen Centre shapes students into communicators,
              entrepreneurs, and change-makers through real-world programmes,
              industry mentorship, and India's premier leadership summit.
              <br/><br/>
              <em>"Empowering visions, engineering the future, inspiring minds."</em>
            </p>
            <div className="hero-actions" style={{ justifyContent: 'flex-start' }}>
              <Link href="/about" className="btn btn-primary" id="hero-explore-btn">
                Explore LEADS
              </Link>
              <Link href="/join" className="btn btn-outline" id="hero-join-btn">
                Join the Movement &rarr;
              </Link>
            </div>
          </div>
          
          <InteractiveCards />
        </div>
      </section>


      {/* ── STATS ── */}
      <section className="section" id="stats">
        <div className="container">
          <StatsSection />
        </div>
      </section>

      {/* ── PROGRAMS ── */}
      <section className="section" id="programs">
        <div className="container">
          <div className="section-label reveal">Our Programs</div>
          <h2 className="section-heading reveal">Eight Ways to Grow</h2>
          <p className="section-sub reveal">
            From innovation challenges to sustainability retreats — every
            programme is designed to build real-world leadership skills.
          </p>
          <hr className="divider" />
          <div className="grid-4">
            {programs.map((prog, i) => (
              <div key={i} className={`icon-card reveal reveal-d${(i % 4) + 1}`}>
                <div className="ic-icon" style={{ background: prog.gradient }}>
                  {prog.icon}
                </div>
                <h4>{prog.title}</h4>
                <p>{prog.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLS HIGHLIGHT ── */}
      <section className="section" id="bls-highlight">
        <div className="container">
          <div className="cta-section reveal">
            <div className="section-label" style={{ color: 'var(--teal)' }}>
              Flagship Event
            </div>
            <h2>Bharat Lead Summit 2026</h2>
            <p>
              1,500+ delegates. Three days. India&apos;s premier student leadership
              summit exploring Sustainable Leadership &amp; AI.
            </p>
            <Link
              href="/events/bharat-lead-summit"
              className="btn btn-gold"
              id="bls-cta"
            >
              Learn About BLS →
            </Link>
          </div>
        </div>
      </section>

      {/* ── COLLABORATIONS ── */}
      <section className="section" id="collaborations">
        <div className="container text-center">
          <div className="section-label reveal">Industry Partners</div>
          <h2 className="section-heading reveal">
            Trusted by Global Leaders
          </h2>
          <p className="section-sub reveal mx-auto" style={{ textAlign: 'center' }}>
            Active collaborations with organisations that contribute curriculum,
            mentors, and strategic thinking.
          </p>
          <hr className="divider" />
          <div className="collab-grid reveal">
            <div className="collab-item">
              <div style={{ fontSize: '32px', marginBottom: '12px' }}>📊</div>
              <h4>McKinsey</h4>
              <p>Strategy &amp; Leadership Consulting</p>
            </div>
            <div className="collab-item">
              <div style={{ fontSize: '32px', marginBottom: '12px' }}>🌏</div>
              <h4>World Resources Institute</h4>
              <p>Sustainability &amp; Climate Action</p>
            </div>
            <div className="collab-item">
              <div style={{ fontSize: '32px', marginBottom: '12px' }}>🏭</div>
              <h4>Tata Sustainability Group</h4>
              <p>Climate &amp; Social Impact Solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section" id="testimonials">
        <div className="container">
          <div className="section-label reveal">What Students Say</div>
          <h2 className="section-heading reveal">Voices from LEADS</h2>
          <p className="section-sub reveal">
            Real stories from students whose lives changed through LEADS programmes.
          </p>
          <hr className="divider" />
          <TestimonialCarousel />
        </div>
      </section>

      {/* ── JOIN CTA ── */}
      <section className="section" id="join-cta">
        <div className="container">
          <div className="cta-section reveal">
            <h2>Ready to Lead?</h2>
            <p>
              Join a community of purpose-driven students building India&apos;s
              next generation of leaders.
            </p>
            <Link href="/join" className="btn btn-gold" id="join-cta-btn">
              Apply to LEADS →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
