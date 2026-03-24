'use client'

import { useState, useEffect, useCallback } from 'react'

const testimonials = [
  {
    quote:
      "LEADS completely changed how I carry myself in a room. BLS gave me the confidence to pitch my startup idea to a panel of investors — and they loved it.",
    name: 'Kavya Pillai',
    role: '3rd Year, Computer Science · BLS 2024 Participant',
    initials: 'KP',
    gradient: 'linear-gradient(135deg, var(--teal), var(--primary))',
  },
  {
    quote:
      "The Public Speaking programme is no joke. Three months in and I was leading workshops for my own class. LEADS builds real skills, not just certificates.",
    name: 'Rohan Kumar',
    role: '2nd Year, MBA · Programme Lead 2025',
    initials: 'RK',
    gradient: 'linear-gradient(135deg, var(--gold), #E65100)',
  },
  {
    quote:
      "I joined LEADS not knowing anyone. A semester later I had a core team, a project, and an offer to speak at the inter-college leadership summit.",
    name: 'Sneha Rao',
    role: '4th Year, Engineering · LEADS Core Team',
    initials: 'SR',
    gradient: 'linear-gradient(135deg, #7B1FA2, var(--primary))',
  },
]

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }, [])

  useEffect(() => {
    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [next])

  return (
    <div>
      <div className="testi-wrap" id="testimonial-carousel">
        <div
          className="testi-track"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((t, i) => (
            <div className="testi-slide" key={i}>
              <div className="testi-stars">★★★★★</div>
              <p className="testi-quote">&ldquo;{t.quote}&rdquo;</p>
              <div className="testi-author">
                <div className="testi-avatar" style={{ background: t.gradient }}>
                  {t.initials}
                </div>
                <div>
                  <div className="testi-name">{t.name}</div>
                  <div className="testi-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="testi-dots">
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={`testi-dot ${current === i ? 'active' : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
