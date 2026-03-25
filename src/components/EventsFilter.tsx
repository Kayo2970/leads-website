'use client'

import Link from 'next/link'
import { useState } from 'react'

type Event = {
  title: string
  date: string
  category: string
  desc: string
  gradient: string
  link: string
  featured?: boolean
}

const categories = [
  { key: 'all', label: 'All Events' },
  { key: 'bls', label: 'BLS' },
  { key: 'workshop', label: 'Workshops' },
  { key: 'talk', label: 'Talks' },
  { key: 'retreat', label: 'Retreats' },
  { key: 'programme', label: 'Programs' },
]

export default function EventsFilter({ events }: { events: Event[] }) {
  const [filter, setFilter] = useState('all')

  const filtered = filter === 'all' ? events : events.filter((e) => e.category === filter)

  return (
    <>
      <div className="filter-tabs" id="event-filters">
        {categories.map((cat) => (
          <button
            key={cat.key}
            className={`filter-tab ${filter === cat.key ? 'active' : ''}`}
            onClick={() => setFilter(cat.key)}
            id={`filter-${cat.key}`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid-3">
        {filtered.map((event, i) => (
          <div key={i} className={`event-card reveal reveal-d${(i % 3) + 1}`}>
            <div
              style={{
                background: event.gradient,
                height: '180px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'rgba(255,255,255,0.3)',
                fontSize: '14px',
                fontWeight: 600,
                letterSpacing: '1px',
                position: 'relative',
              }}
            >
              {event.featured && (
                <span style={{
                  position: 'absolute' as const,
                  top: '12px',
                  right: '12px',
                  background: 'var(--gold)',
                  color: '#1A1A2E',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '11px',
                  fontWeight: 700,
                }}>
                  ★ FLAGSHIP
                </span>
              )}
            </div>
            <div className="event-card-body">
              <div className="event-card-date">{event.date}</div>
              <h3 className="event-card-title">{event.title}</h3>
              <p className="event-card-desc">{event.desc}</p>
              {event.link !== '#' ? (
                <Link href={event.link} className="btn btn-primary btn-sm" style={{ marginTop: '16px' }}>
                  Learn More →
                </Link>
              ) : (
                <button className="btn btn-ghost btn-sm" style={{ marginTop: '16px', cursor: 'default', opacity: 0.6 }}>
                  Coming Soon
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
