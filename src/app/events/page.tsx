import type { Metadata } from 'next'
import Link from 'next/link'
import EventsFilter from '@/components/EventsFilter'

export const metadata: Metadata = {
  title: 'Events',
  description:
    'Explore LEADS events — workshops, Fireside Talks, the Bharat Lead Summit, sustainability retreats, and more. Register for upcoming events.',
}

const events = [
  {
    title: 'Bharat Lead Summit 2026',
    date: 'August 2026',
    category: 'bls',
    desc: '1,500+ delegates at India\'s premier student leadership summit. Theme: Sustainable Leadership & AI.',
    gradient: 'linear-gradient(135deg, var(--navy), var(--primary))',
    link: '/events/bharat-lead-summit',
    featured: true,
  },
  {
    title: 'Innovation Challenge',
    date: 'Ongoing · Semester-long',
    category: 'programme',
    desc: 'Pitch breakthrough ideas addressing social or environmental challenges. Winners receive mentorship and funding.',
    gradient: 'linear-gradient(135deg, var(--gold), #E65100)',
    link: '#',
  },
  {
    title: 'Public Speaking Workshop',
    date: 'April 2026',
    category: 'workshop',
    desc: 'Master confident, persuasive communication through structured sessions with industry mentors.',
    gradient: 'linear-gradient(135deg, #006064, var(--teal))',
    link: '#',
  },
  {
    title: 'Sustainability Retreat',
    date: 'May 2026 · 3 Days',
    category: 'retreat',
    desc: 'Immersive experience exploring climate tech, circular economy, and social entrepreneurship with WRI experts.',
    gradient: 'linear-gradient(135deg, #2E7D32, #1B5E20)',
    link: '#',
  },
  {
    title: 'Fireside Talk: AI Governance',
    date: 'April 2026',
    category: 'talk',
    desc: 'Candid conversation with McKinsey leaders on the future of AI governance and responsible innovation.',
    gradient: 'linear-gradient(135deg, #7B1FA2, var(--primary))',
    link: '#',
  },
  {
    title: 'Leadership Talk Series',
    date: 'Monthly Webinar',
    category: 'talk',
    desc: 'High-impact leaders discussing AI governance, climate finance, building resilient teams, and more.',
    gradient: 'linear-gradient(135deg, var(--primary), var(--teal))',
    link: '#',
  },
  {
    title: 'Mentorship Circles Kickoff',
    date: 'March 2026',
    category: 'programme',
    desc: 'Connect with senior professionals from McKinsey, WRI, and Tata for structured 1:1 mentorship.',
    gradient: 'linear-gradient(135deg, var(--navy), #1A237E)',
    link: '#',
  },
  {
    title: 'Mindfulness & Leadership',
    date: 'April 2026',
    category: 'retreat',
    desc: 'Balance performance with well-being. A day-long session combining mindfulness practice with leadership frameworks.',
    gradient: 'linear-gradient(135deg, #004D40, #00695C)',
    link: '#',
  },
  {
    title: 'Green Leaders Circle Launch',
    date: 'March 2026',
    category: 'programme',
    desc: 'Build real sustainability solutions — campus projects, policy briefs, green tech product concepts.',
    gradient: 'linear-gradient(135deg, #1B5E20, var(--teal))',
    link: '#',
  },
]

export default function EventsPage() {
  return (
    <>
      <section className="page-hero" id="events-hero">
        <div className="container">
          <div className="section-label" style={{ color: 'var(--teal)' }}>Events</div>
          <h1 className="page-hero-title">What&apos;s Happening at LEADS</h1>
          <p className="page-hero-sub">
            Workshops, talks, retreats, and India&apos;s premier student leadership summit.
            Every event is an opportunity to grow.
          </p>
        </div>
      </section>

      <section className="section" id="events-list">
        <div className="container">
          <EventsFilter events={JSON.parse(JSON.stringify(events))} />
        </div>
      </section>

      <section className="section" id="events-cta">
        <div className="container">
          <div className="cta-section reveal">
            <h2>Don&apos;t Miss Out</h2>
            <p>
              Join LEADS to get priority access to all events, workshops, and the Bharat Lead Summit.
            </p>
            <Link href="/join" className="btn btn-gold" id="events-join-btn">
              Join LEADS →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
