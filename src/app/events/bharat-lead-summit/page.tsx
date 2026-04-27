'use client'

import Link from 'next/link'
import { useEffect, useState, useRef } from 'react'

/* ── Types ── */
interface CountdownState {
  days: number
  hours: number
  minutes: number
  seconds: number
}

/* ── Countdown Hook ── */
function useCountdown(targetDate: string): CountdownState {
  const [time, setTime] = useState<CountdownState>({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  useEffect(() => {
    const target = new Date(targetDate).getTime()
    const tick = () => {
      const now = Date.now()
      const diff = Math.max(0, target - now)
      setTime({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [targetDate])
  return time
}

/* ── Data ── */
const stats = [
  { number: '1,500+', label: 'Total Footfall', icon: '👥' },
  { number: '40+', label: 'Industry Leaders', icon: '🏆' },
  { number: '25+', label: 'Startup Founders', icon: '🚀' },
  { number: '35+', label: 'Young Innovators', icon: '💡' },
]

const highlights = [
  {
    icon: '🎤',
    title: 'Visionary Keynotes',
    desc: 'Hear from industry pioneers, academic stalwarts, and policy architects shaping Viksit Bharat 2047.',
    color: 'var(--primary)',
  },
  {
    icon: '🤝',
    title: 'Power Networking',
    desc: 'Forge connections that transcend the summit — with founders, executives, and changemakers across India.',
    color: 'var(--teal)',
  },
  {
    icon: '🧪',
    title: 'Dynamic Workshops',
    desc: 'Hands-on leadership simulations, sustainability strategy sessions, and AI ethics case studies.',
    color: 'var(--gold)',
  },
  {
    icon: '🌱',
    title: 'Green Venture Showcase',
    desc: 'Student teams pitching sustainability solutions to investors, mentors, and a national audience.',
    color: '#4CAF50',
  },
  {
    icon: '📡',
    title: 'Expert Panels',
    desc: 'Deep conversations on AI governance, climate finance, and purpose-driven entrepreneurship.',
    color: '#9C27B0',
  },
  {
    icon: '🏅',
    title: 'Awards & Recognition',
    desc: 'Outstanding delegates, leaders, and innovations recognised on the national stage.',
    color: '#FF5722',
  },
]

const agenda = [
  {
    day: 'Day 1',
    theme: 'Sankalp Se Siddhi',
    color: 'var(--teal)',
    items: [
      { time: '09:00 AM', event: 'Inauguration & Lamp Lighting Ceremony' },
      { time: '10:00 AM', event: 'Journey of LEADS — Visionary Address' },
      { time: '11:30 AM', event: 'Keynote: Leadership for Viksit Bharat 2047' },
      { time: '02:00 PM', event: 'Panel: Sustainable Entrepreneurship in India' },
      { time: '04:00 PM', event: 'Bharat Innovation Challenge — Round 1' },
      { time: '06:00 PM', event: 'Networking Reception & Cultural Evening' },
    ],
  },
  {
    day: 'Day 2',
    theme: 'Innovation & Impact',
    color: 'var(--gold)',
    items: [
      { time: '09:00 AM', event: 'Morning Keynote: AI & The Future of Work' },
      { time: '10:30 AM', event: 'Workshop: Sustainability Strategy Simulation' },
      { time: '12:00 PM', event: 'Green Venture Pitch Workshop' },
      { time: '02:00 PM', event: 'Fireside Talk with Industry Leaders' },
      { time: '04:00 PM', event: 'Bharat Innovation Challenge — Finals' },
      { time: '05:30 PM', event: 'Case Study Competition — Judging' },
    ],
  },
  {
    day: 'Day 3',
    theme: 'Action & Legacy',
    color: 'var(--primary)',
    items: [
      { time: '09:00 AM', event: 'Green Venture Showcase — Final Presentations' },
      { time: '11:00 AM', event: 'Expert Panel: Future of Sustainable Leadership' },
      { time: '01:00 PM', event: 'Awards & Recognition Ceremony' },
      { time: '02:30 PM', event: 'Closing Keynote: The Leader Within' },
      { time: '03:30 PM', event: 'Community Pledge & Summit Closure' },
      { time: '04:00 PM', event: 'Networking Lunch & Valedictory' },
    ],
  },
]

const sponsorTiers = [
  {
    tier: 'Platinum',
    color: 'linear-gradient(135deg, #E8E8E8, #C0C0C0)',
    textColor: '#1a1a1a',
    price: '₹5,00,000',
    perks: ['Main Stage Branding', 'Keynote Slot (30 min)', '10 Delegate Passes', 'Exclusive Lounge', 'Full Digital Package'],
  },
  {
    tier: 'Gold',
    color: 'linear-gradient(135deg, #FFD700, #FFA500)',
    textColor: '#1a1a1a',
    price: '₹2,50,000',
    perks: ['Stage Branding', 'Panel Speaking Slot', '6 Delegate Passes', 'Booth Space', 'Digital Package'],
  },
  {
    tier: 'Silver',
    color: 'linear-gradient(135deg, #C0C0C0, #A0A0A0)',
    textColor: '#1a1a1a',
    price: '₹1,00,000',
    perks: ['Backdrop Branding', '4 Delegate Passes', 'Social Media Mentions', 'Certificate of Partnership'],
  },
  {
    tier: 'Associate',
    color: 'linear-gradient(135deg, #CD7F32, #8B4513)',
    textColor: '#fff',
    price: '₹50,000',
    perks: ['Standee Display', '2 Delegate Passes', 'Social Media Mentions', 'Certificate of Partnership'],
  },
]

const galleryImages = [
  { src: 'https://bharatleadsummit.com/images/gallery/gallery1.webp', alt: 'BLS 2025 Opening Ceremony' },
  { src: 'https://bharatleadsummit.com/images/gallery/gallery2.webp', alt: 'BLS 2025 Panel Discussion' },
  { src: 'https://bharatleadsummit.com/images/gallery/gallery3.webp', alt: 'BLS 2025 Networking' },
  { src: 'https://bharatleadsummit.com/images/gallery/gallery4.webp', alt: 'BLS 2025 Workshop' },
  { src: 'https://bharatleadsummit.com/images/gallery/gallery5.webp', alt: 'BLS 2025 Awards' },
  { src: 'https://bharatleadsummit.com/images/gallery/gallery6.webp', alt: 'BLS 2025 Keynote' },
]

const faqs = [
  {
    q: 'Who can attend BLS 2026?',
    a: 'BLS is open to undergraduate and postgraduate students from across India, as well as industry professionals, faculty, and entrepreneurs passionate about sustainable leadership.',
  },
  {
    q: 'How do I register for BLS 2026?',
    a: 'Click the "Register Now" button on this page or visit the Delegate Registration link. Early bird registrations get a discounted rate.',
  },
  {
    q: 'Where is BLS 2026 held?',
    a: 'Bharat Lead Summit 2026 is hosted at Ramaiah University of Applied Sciences (RUAS), Mathikere, Bengaluru — a premier institution in South India.',
  },
  {
    q: 'Can I register for the Bharat Innovation Challenge separately?',
    a: 'Yes! The Bharat Innovation Challenge has a separate registration track. Teams of 2–4 can apply with a project abstract on the registration page.',
  },
  {
    q: 'Are accommodation and travel included?',
    a: 'BLS does not include accommodation by default, but we maintain tie-ups with partner hotels near the venue at preferential rates for outstation delegates.',
  },
]

/* ── FAQ Accordion ── */
function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      style={{
        borderBottom: '1px solid rgba(21,101,192,0.12)',
        padding: '20px 0',
        cursor: 'pointer',
      }}
      onClick={() => setOpen((o) => !o)}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '16px',
        }}
      >
        <span style={{ fontWeight: 600, fontSize: '16px', color: 'var(--text)' }}>{q}</span>
        <span
          style={{
            fontSize: '20px',
            color: 'var(--primary)',
            transform: open ? 'rotate(45deg)' : 'rotate(0)',
            transition: 'transform 0.3s ease',
            flexShrink: 0,
          }}
        >
          +
        </span>
      </div>
      {open && (
        <p
          style={{
            marginTop: '12px',
            fontSize: '15px',
            color: 'var(--text2)',
            lineHeight: 1.7,
            animation: 'fadeIn 0.3s ease',
          }}
        >
          {a}
        </p>
      )}
    </div>
  )
}

/* ── Stat Card ── */
function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const target = parseInt(stat.number.replace(/\D/g, ''))

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
          let frame = 0
          const total = 60
          const timer = setInterval(() => {
            frame++
            setCount(Math.round((frame / total) * target))
            if (frame >= total) clearInterval(timer)
          }, 16)
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [started, target])

  const suffix = stat.number.replace(/[\d,]/g, '')

  return (
    <div
      ref={ref}
      className="glass-card"
      style={{
        padding: '32px 24px',
        textAlign: 'center',
        borderRadius: '16px',
        animationDelay: `${index * 0.1}s`,
      }}
    >
      <div style={{ fontSize: '36px', marginBottom: '12px' }}>{stat.icon}</div>
      <div
        style={{
          fontSize: '42px',
          fontWeight: 800,
          background: 'linear-gradient(135deg, var(--primary), var(--teal))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontFamily: 'var(--font-display)',
          lineHeight: 1,
        }}
      >
        {started ? count.toLocaleString() + suffix : '0' + suffix}
      </div>
      <div style={{ fontSize: '14px', color: 'var(--text2)', fontWeight: 500, marginTop: '8px' }}>
        {stat.label}
      </div>
    </div>
  )
}

/* ── Main Page ── */
export default function BLSPage() {
  const countdown = useCountdown('2026-08-10T09:00:00+05:30')
  const [activeDay, setActiveDay] = useState(0)
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({})

  const handleImgError = (idx: number) => {
    setImgErrors((prev) => ({ ...prev, [idx]: true }))
  }

  return (
    <>
      {/* ── BLS STYLES ── */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        @keyframes bls-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-16px); }
        }
        @keyframes bls-blob {
          0% { transform: scale(1) translate(0, 0); }
          33% { transform: scale(1.08) translate(30px, -40px); }
          66% { transform: scale(0.95) translate(-20px, 20px); }
          100% { transform: scale(1) translate(0, 0); }
        }
        @keyframes bls-scan {
          0% { top: -10%; }
          100% { top: 110%; }
        }
        .bls-hero {
          position: relative;
          min-height: 100vh;
          background: linear-gradient(135deg, #060e1c 0%, #0D47A1 40%, #0a1628 70%, #1a0a3c 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 120px 24px 80px;
        }
        .bls-hero-bg {
          position: absolute;
          inset: 0;
          background: url('/bls-hero-bg.png') center/cover no-repeat;
          opacity: 0.25;
          z-index: 0;
        }
        .bls-hero-orbs {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1;
        }
        .bls-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          animation: bls-blob 10s ease-in-out infinite;
        }
        .bls-hero-grid {
          position: absolute;
          inset: 0;
          background-size: 48px 48px;
          background-image: linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
          z-index: 1;
        }
        .bls-hero-content {
          position: relative;
          z-index: 10;
          text-align: center;
          max-width: 900px;
          margin: 0 auto;
          animation: fadeIn 0.8s ease;
        }
        .bls-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.7);
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.15);
          padding: 8px 20px;
          border-radius: 9999px;
          margin-bottom: 28px;
        }
        .bls-title {
          font-family: var(--font-display);
          font-size: clamp(48px, 8vw, 96px);
          font-weight: 900;
          color: #fff;
          line-height: 0.95;
          letter-spacing: -3px;
          margin-bottom: 24px;
        }
        .bls-title .accent {
          background: linear-gradient(135deg, #60a5fa, #00BCD4, #FFB300);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .bls-sub {
          font-size: 19px;
          color: rgba(255,255,255,0.75);
          line-height: 1.6;
          max-width: 680px;
          margin: 0 auto 40px;
        }
        .bls-actions {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 56px;
        }
        .btn-bls-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 16px 36px;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 700;
          text-decoration: none;
          background: linear-gradient(135deg, #FFB300, #FF8C00);
          color: #0a1628;
          border: none;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
          letter-spacing: -0.2px;
          box-shadow: 0 8px 32px rgba(255,179,0,0.4);
          animation: shimmer 3s linear infinite;
          background-size: 200% auto;
        }
        .btn-bls-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 40px rgba(255,179,0,0.5);
        }
        .btn-bls-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 16px 32px;
          border-radius: 12px;
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
          background: rgba(255,255,255,0.08);
          color: #fff;
          border: 1px solid rgba(255,255,255,0.2);
          cursor: pointer;
          transition: all 0.2s;
          backdrop-filter: blur(8px);
        }
        .btn-bls-secondary:hover {
          background: rgba(255,255,255,0.16);
          border-color: rgba(255,255,255,0.4);
          transform: translateY(-2px);
        }
        .bls-countdown {
          display: flex;
          gap: 24px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .countdown-unit {
          text-align: center;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 16px;
          padding: 20px 28px;
          min-width: 90px;
          backdrop-filter: blur(8px);
        }
        .countdown-number {
          font-family: var(--font-display);
          font-size: 48px;
          font-weight: 900;
          color: #fff;
          line-height: 1;
          font-variant-numeric: tabular-nums;
        }
        .countdown-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
          margin-top: 6px;
        }
        .bls-event-meta {
          display: flex;
          align-items: center;
          gap: 24px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 40px;
        }
        .event-meta-chip {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: rgba(255,255,255,0.85);
          font-size: 15px;
          font-weight: 500;
        }
        .agenda-tabs {
          display: flex;
          gap: 8px;
          justify-content: center;
          margin-bottom: 36px;
          flex-wrap: wrap;
        }
        .agenda-tab {
          padding: 10px 24px;
          border-radius: 9999px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          border: 2px solid transparent;
          transition: all 0.25s;
          background: transparent;
          color: var(--text2);
          border-color: rgba(21,101,192,0.2);
        }
        .agenda-tab.active {
          background: var(--primary);
          color: #fff;
          border-color: var(--primary);
        }
        .agenda-tab:hover:not(.active) {
          border-color: var(--primary);
          color: var(--primary);
        }
        .agenda-timeline {
          display: flex;
          flex-direction: column;
          gap: 0;
          max-width: 700px;
          margin: 0 auto;
        }
        .agenda-row {
          display: grid;
          grid-template-columns: 90px 1fr;
          gap: 20px;
          align-items: start;
          padding: 20px 0;
          border-bottom: 1px solid rgba(21,101,192,0.1);
          animation: fadeIn 0.4s ease;
        }
        .agenda-row:last-child { border-bottom: none; }
        .agenda-time {
          font-size: 13px;
          font-weight: 700;
          color: var(--teal);
          padding-top: 2px;
          font-variant-numeric: tabular-nums;
        }
        .agenda-event {
          font-size: 15px;
          color: var(--text);
          font-weight: 500;
          line-height: 1.4;
        }
        .sponsor-card {
          border-radius: 20px;
          padding: 36px 28px;
          text-align: center;
          transition: transform 0.3s, box-shadow 0.3s;
          position: relative;
          overflow: hidden;
        }
        .sponsor-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.15);
        }
        .sponsor-tier-name {
          font-size: 22px;
          font-weight: 800;
          margin-bottom: 8px;
          font-family: var(--font-display);
        }
        .sponsor-price {
          font-size: 32px;
          font-weight: 900;
          font-family: var(--font-display);
          letter-spacing: -1px;
          margin-bottom: 20px;
        }
        .sponsor-perks {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .sponsor-perk {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          font-weight: 500;
          text-align: left;
        }
        .perk-check {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: rgba(0,0,0,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          flex-shrink: 0;
        }
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        .gallery-item {
          aspect-ratio: 4/3;
          border-radius: 16px;
          overflow: hidden;
          position: relative;
          background: linear-gradient(135deg, var(--surface), var(--card));
          cursor: pointer;
        }
        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .gallery-item:hover img {
          transform: scale(1.06);
        }
        .gallery-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.5), transparent);
          opacity: 0;
          transition: opacity 0.3s;
          display: flex;
          align-items: flex-end;
          padding: 16px;
        }
        .gallery-item:hover .gallery-overlay {
          opacity: 1;
        }
        .gallery-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          color: var(--text3);
          font-size: 13px;
          font-weight: 500;
          background: linear-gradient(135deg, var(--surface), var(--card));
        }
        .bls-dark-section {
          background: linear-gradient(135deg, #060e1c 0%, #0a1628 50%, #0D47A1 100%);
          color: #fff;
        }
        .info-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          border-radius: 9999px;
          font-size: 13px;
          font-weight: 600;
          background: rgba(21,101,192,0.08);
          border: 1px solid rgba(21,101,192,0.15);
          color: var(--primary);
          margin: 4px;
        }
        .dark .info-chip {
          background: rgba(0,188,212,0.08);
          border-color: rgba(0,188,212,0.2);
          color: var(--teal);
        }
        @media (max-width: 768px) {
          .bls-title { letter-spacing: -1.5px; }
          .gallery-grid { grid-template-columns: repeat(2, 1fr); }
          .agenda-row { grid-template-columns: 80px 1fr; gap: 12px; }
          .countdown-unit { padding: 14px 18px; min-width: 70px; }
          .countdown-number { font-size: 36px; }
          .sponsor-card { padding: 28px 20px; }
        }
        @media (max-width: 480px) {
          .gallery-grid { grid-template-columns: 1fr 1fr; }
          .bls-countdown { gap: 12px; }
        }
      `}</style>

      {/* ══════════════════════════════════════════
          SECTION 1 — CINEMATIC HERO
      ══════════════════════════════════════════ */}
      <section className="bls-hero" id="bls-hero">
        <div className="bls-hero-bg" />
        <div className="bls-hero-grid" />
        <div className="bls-hero-orbs">
          <div
            className="bls-orb"
            style={{ width: 500, height: 500, background: 'rgba(21,101,192,0.3)', top: '-10%', right: '-10%', animationDelay: '0s' }}
          />
          <div
            className="bls-orb"
            style={{ width: 400, height: 400, background: 'rgba(0,188,212,0.2)', bottom: '10%', left: '-8%', animationDelay: '3s' }}
          />
          <div
            className="bls-orb"
            style={{ width: 300, height: 300, background: 'rgba(255,179,0,0.15)', top: '40%', right: '5%', animationDelay: '6s' }}
          />
        </div>

        <div className="bls-hero-content">
          {/* Eyebrow */}
          <div className="bls-eyebrow">
            <span>🇮🇳</span>
            LEADS NEXT GEN CENTRE · RUAS · BENGALURU
            <span>🇮🇳</span>
          </div>

          {/* Title */}
          <h1 className="bls-title">
            BHARAT<br />
            <span className="accent">LEAD</span> SUMMIT<br />
            <span style={{ fontSize: '0.55em', letterSpacing: '-1px', opacity: 0.9 }}>2026</span>
          </h1>

          {/* Tagline */}
          <p className="bls-sub">
            The Stage for <strong style={{ color: '#fff' }}>Sustainable Leadership</strong> and Entrepreneurship.
            Transforming Vision towards <strong style={{ color: '#FFB300' }}>Viksit Bharat 2047</strong>.
          </p>

          {/* Event meta */}
          <div className="bls-event-meta">
            <span className="event-meta-chip">
              <span>📅</span> 10–11 August, 2026
            </span>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>|</span>
            <span className="event-meta-chip">
              <span>🏛️</span> Ramaiah University of Applied Sciences
            </span>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>|</span>
            <span className="event-meta-chip">
              <span>📍</span> Bengaluru, India
            </span>
          </div>

          {/* CTAs */}
          <div className="bls-actions">
            <Link href="/join" className="btn-bls-primary" id="bls-hero-register">
              ✦ Delegate Registration
            </Link>
            <Link href="/contact" className="btn-bls-secondary" id="bls-hero-sponsor">
              View Sponsorship Plans
            </Link>
            <a href="https://bharatleadsummit.com" target="_blank" rel="noopener noreferrer" className="btn-bls-secondary" id="bls-showreel">
              ▶ Official Website
            </a>
          </div>

          {/* Countdown */}
          <div style={{ marginBottom: '12px', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>
            Countdown to BLS 2026
          </div>
          <div className="bls-countdown">
            {[
              { v: countdown.days, l: 'Days' },
              { v: countdown.hours, l: 'Hours' },
              { v: countdown.minutes, l: 'Minutes' },
              { v: countdown.seconds, l: 'Seconds' },
            ].map(({ v, l }) => (
              <div key={l} className="countdown-unit">
                <div className="countdown-number">{String(v).padStart(2, '0')}</div>
                <div className="countdown-label">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 2 — STATS BAND
      ══════════════════════════════════════════ */}
      <section className="section-tight" id="bls-stats" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '20px',
            }}
          >
            {stats.map((s, i) => (
              <StatCard key={i} stat={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 3 — ABOUT & THEME
      ══════════════════════════════════════════ */}
      <section className="section" id="about-bls">
        <div className="container">
          <div className="grid-2" style={{ gap: '64px', alignItems: 'center' }}>
            {/* Left text */}
            <div className="reveal">
              <div className="section-label">About the Summit</div>
              <h2 className="section-heading">Shaping the Future of Indian Leadership</h2>
              <p className="section-sub">
                The BharatLead Summit 2026 is a strategic platform where experience meets ambition.
                We&apos;re uniting changemakers to reshape a future where business success and planetary
                stewardship are inseparable.
              </p>
              <p style={{ color: 'var(--text2)', fontSize: '15px', lineHeight: 1.8, marginTop: '20px' }}>
                BLS isn&apos;t a traditional conference. It&apos;s an immersive multi-day experience combining keynotes,
                interactive simulations, expert panels, a national Green Venture Showcase, and intensive networking.
                Delegates work through real case studies, interact directly with industry leaders, and form
                connections that often lead to internships, collaborations, and lifelong friendships.
              </p>

              {/* Theme chips */}
              <div style={{ marginTop: '28px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['Sustainable Leadership', 'AI & Ethics', 'Viksit Bharat 2047', 'Entrepreneurship', 'Green Innovation', 'Youth Leadership'].map((tag) => (
                  <span key={tag} className="info-chip">{tag}</span>
                ))}
              </div>

              <div
                style={{
                  marginTop: '28px',
                  padding: '20px 24px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, rgba(21,101,192,0.06), rgba(0,188,212,0.04))',
                  border: '1px solid rgba(21,101,192,0.15)',
                }}
              >
                <strong style={{ color: 'var(--primary)', display: 'block', marginBottom: '6px', fontSize: '12px', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                  2026 Theme
                </strong>
                <span style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text)', fontFamily: 'var(--font-display)' }}>
                  Sustainable Leadership &amp; AI
                </span>
                <p style={{ margin: '8px 0 0', fontSize: '14px', color: 'var(--text2)', lineHeight: 1.6 }}>
                  How leaders balance rapid technological change with environmental responsibility
                  to build a resilient, prosperous Bharat.
                </p>
              </div>
            </div>

            {/* Right stats */}
            <div className="reveal reveal-d2">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '24px' }}>
                {[
                  { num: '1,500+', label: 'Delegates' },
                  { num: '3', label: 'Immersive Days' },
                  { num: '20+', label: 'Speakers' },
                  { num: '50+', label: 'Colleges' },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="card"
                    style={{
                      textAlign: 'center',
                      padding: '28px 16px',
                      borderRadius: '16px',
                    }}
                  >
                    <div
                      style={{
                        fontSize: '36px',
                        fontWeight: 800,
                        background: 'linear-gradient(135deg, var(--primary), var(--teal))',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontFamily: 'var(--font-display)',
                        lineHeight: 1,
                        marginBottom: '8px',
                      }}
                    >
                      {s.num}
                    </div>
                    <div style={{ fontSize: '13px', color: 'var(--text2)', fontWeight: 600 }}>{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Organised by */}
              <div
                className="glass-card"
                style={{ padding: '24px', borderRadius: '16px', textAlign: 'center' }}
              >
                <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text3)', marginBottom: '12px' }}>
                  Organised by
                </div>
                <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text)', marginBottom: '4px' }}>
                  LEADS Next Gen Centre
                </div>
                <div style={{ fontSize: '14px', color: 'var(--text2)' }}>
                  Ramaiah University of Applied Sciences, Bengaluru
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 4 — SUMMIT HIGHLIGHTS
      ══════════════════════════════════════════ */}
      <section className="section" id="bls-highlights" style={{ background: 'var(--bg-tinted)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>What to Expect</div>
            <h2 className="section-heading">Summit Highlights</h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>
              Three days of inspiration, innovation, and impact designed for India&apos;s next generation of leaders.
            </p>
          </div>
          <div className="grid-3">
            {highlights.map((h, i) => (
              <div
                key={i}
                className={`reveal reveal-d${(i % 3) + 1}`}
                style={{
                  background: 'var(--card)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: '20px',
                  padding: '32px 28px',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)'
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.1)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = ''
                  e.currentTarget.style.boxShadow = ''
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: '16px',
                    background: h.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '26px',
                    marginBottom: '20px',
                    opacity: 0.9,
                  }}
                >
                  {h.icon}
                </div>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 700, color: 'var(--text)', marginBottom: '10px' }}>
                  {h.title}
                </h4>
                <p style={{ fontSize: '14px', color: 'var(--text2)', lineHeight: 1.7 }}>{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 5 — AGENDA / SCHEDULE
      ══════════════════════════════════════════ */}
      <section className="section" id="bls-agenda">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Schedule</div>
            <h2 className="section-heading">Three Days of Impact</h2>
          </div>

          {/* Day tabs */}
          <div className="agenda-tabs">
            {agenda.map((day, i) => (
              <button
                key={i}
                className={`agenda-tab ${activeDay === i ? 'active' : ''}`}
                onClick={() => setActiveDay(i)}
                id={`agenda-tab-${i}`}
              >
                <span style={{ marginRight: '6px' }}>{day.day}</span>· {day.theme}
              </button>
            ))}
          </div>

          {/* Timeline */}
          <div
            className="glass-card"
            style={{ padding: '40px', borderRadius: '24px', maxWidth: '760px', margin: '0 auto' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: agenda[activeDay].color }} />
              <span
                style={{
                  fontSize: '13px',
                  fontWeight: 700,
                  color: agenda[activeDay].color,
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px',
                }}
              >
                {agenda[activeDay].day} — {agenda[activeDay].theme}
              </span>
            </div>
            <div className="agenda-timeline">
              {agenda[activeDay].items.map((item, j) => (
                <div key={j} className="agenda-row">
                  <div className="agenda-time">{item.time}</div>
                  <div className="agenda-event">{item.event}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '24px' }}>
            <span style={{ fontSize: '13px', color: 'var(--text3)' }}>
              * Schedule subject to change. Full brochure available on{' '}
              <a href="https://bharatleadsummit.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>
                bharatleadsummit.com
              </a>
            </span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 6 — GALLERY
      ══════════════════════════════════════════ */}
      <section className="section" id="bls-gallery" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Captured Moments</div>
            <h2 className="section-heading">BLS 2023–2025 Gallery</h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>
              Relive the energy, connections, and breakthroughs from past summits.
            </p>
          </div>
          <div className="gallery-grid">
            {galleryImages.map((img, i) => (
              <div key={i} className="gallery-item reveal">
                {!imgErrors[i] ? (
                  <>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img.src}
                      alt={img.alt}
                      onError={() => handleImgError(i)}
                    />
                    <div className="gallery-overlay">
                      <span style={{ color: '#fff', fontSize: '13px', fontWeight: 600 }}>{img.alt}</span>
                    </div>
                  </>
                ) : (
                  <div className="gallery-placeholder">
                    <span style={{ fontSize: '32px' }}>🖼️</span>
                    <span>{img.alt}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <a
              href="https://bharatleadsummit.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              id="bls-gallery-more"
            >
              View Full Gallery →
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 7 — SPONSORSHIP MATRIX
      ══════════════════════════════════════════ */}
      <section className="section" id="bls-sponsors">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Partner With Us</div>
            <h2 className="section-heading">Sponsorship Matrix</h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>
              Associate your brand with India&apos;s most ambitious student leadership summit and reach
              1,500+ delegates, industry leaders, and changemakers.
            </p>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '24px',
              maxWidth: '1100px',
              margin: '0 auto',
            }}
          >
            {sponsorTiers.map((tier, i) => (
              <div
                key={i}
                className="sponsor-card reveal"
                style={{
                  background: tier.color,
                  color: tier.textColor,
                  animationDelay: `${i * 0.1}s`,
                }}
              >
                <div className="sponsor-tier-name" style={{ color: tier.textColor }}>
                  {tier.tier}
                </div>
                <div className="sponsor-price" style={{ color: tier.textColor }}>{tier.price}</div>
                <ul className="sponsor-perks">
                  {tier.perks.map((perk, j) => (
                    <li key={j} className="sponsor-perk" style={{ color: tier.textColor }}>
                      <span className="perk-check">✓</span>
                      {perk}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  style={{
                    display: 'block',
                    marginTop: '24px',
                    padding: '12px',
                    borderRadius: '10px',
                    background: 'rgba(0,0,0,0.15)',
                    color: tier.textColor,
                    textDecoration: 'none',
                    fontWeight: 700,
                    fontSize: '14px',
                    transition: 'background 0.2s',
                  }}
                  id={`sponsor-${tier.tier.toLowerCase()}-cta`}
                  onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(0,0,0,0.25)')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(0,0,0,0.15)')}
                >
                  Get in Touch →
                </Link>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <p style={{ fontSize: '14px', color: 'var(--text2)', marginBottom: '16px' }}>
              Custom partnership packages also available. Contact us to discuss.
            </p>
            <Link href="/contact" className="btn btn-primary" id="bls-custom-sponsor">
              Contact for Custom Partnership
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 8 — INNOVATION CHALLENGE CTA
      ══════════════════════════════════════════ */}
      <section
        className="section"
        id="bls-innovation"
        style={{
          background: 'linear-gradient(135deg, #0D47A1 0%, #1565C0 40%, #0097A7 100%)',
          color: '#fff',
        }}
      >
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '48px', alignItems: 'center' }}>
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 16px',
                  borderRadius: '9999px',
                  background: 'rgba(255,255,255,0.12)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  fontSize: '12px',
                  fontWeight: 700,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.9)',
                  marginBottom: '20px',
                }}
              >
                🏆 Registrations Open
              </div>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(28px, 4vw, 44px)',
                  fontWeight: 800,
                  color: '#fff',
                  marginBottom: '16px',
                  lineHeight: 1.1,
                  letterSpacing: '-1px',
                }}
              >
                Bharat Innovation Challenge 2026
              </h2>
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.7 }}>
                Solve real-world problems through innovation. Teams of 2–4 compete across
                sustainability, AI, and social entrepreneurship tracks, pitching to a panel of
                investors and industry mentors.
              </p>
            </div>
            <div
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: '20px',
                padding: '32px',
                backdropFilter: 'blur(12px)',
              }}
            >
              {[
                { label: 'Tracks', value: 'Sustainability · AI · Social Impact' },
                { label: 'Team Size', value: '2–4 Members' },
                { label: 'Prize Pool', value: '₹2,00,000+' },
                { label: 'Eligibility', value: 'UG & PG Students Across India' },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    padding: '14px 0',
                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                    gap: '12px',
                  }}
                >
                  <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', fontWeight: 600 }}>{item.label}</span>
                  <span style={{ fontSize: '14px', color: '#fff', fontWeight: 700, textAlign: 'right' }}>{item.value}</span>
                </div>
              ))}
              <Link
                href="/join"
                style={{
                  display: 'block',
                  marginTop: '24px',
                  padding: '14px',
                  borderRadius: '12px',
                  background: '#FFB300',
                  color: '#0a1628',
                  textDecoration: 'none',
                  fontWeight: 800,
                  textAlign: 'center',
                  fontSize: '15px',
                  transition: 'transform 0.2s',
                }}
                id="bls-innovation-register"
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = '')}
              >
                Register for Innovation Challenge →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 9 — FAQs
      ══════════════════════════════════════════ */}
      <section className="section" id="bls-faqs" style={{ background: 'var(--bg-tinted)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '52px' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>FAQs</div>
            <h2 className="section-heading">Frequently Asked Questions</h2>
          </div>
          <div style={{ maxWidth: '760px', margin: '0 auto' }}>
            {faqs.map((faq, i) => (
              <FAQ key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 10 — REGISTER CTA
      ══════════════════════════════════════════ */}
      <section className="section" id="bls-register">
        <div className="container">
          <div
            className="cta-section reveal"
            style={{
              background: 'linear-gradient(135deg, #060e1c 0%, #0D47A1 60%, #1565C0 100%)',
              borderRadius: '28px',
              padding: '72px 48px',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Background glow */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(ellipse at center top, rgba(255,179,0,0.15), transparent 60%)',
                pointerEvents: 'none',
              }}
            />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 20px',
                  borderRadius: '9999px',
                  background: 'rgba(255,179,0,0.15)',
                  border: '1px solid rgba(255,179,0,0.3)',
                  fontSize: '12px',
                  fontWeight: 700,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: '#FFB300',
                  marginBottom: '24px',
                }}
              >
                ✦ Early Bird Registrations Open
              </div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 900, color: '#fff', letterSpacing: '-1.5px', marginBottom: '16px' }}>
                Ready to Lead the Change?
              </h2>
              <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.75)', maxWidth: '560px', margin: '0 auto 40px', lineHeight: 1.6 }}>
                Join us for two days of inspiration, innovation, and impact. BLS is where India&apos;s emerging
                leaders meet, connect, and transform.
              </p>
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/join" className="btn-bls-primary" id="bls-final-register" style={{ textDecoration: 'none' }}>
                  Register Now →
                </Link>
                <Link href="/contact" className="btn-bls-secondary" id="bls-final-sponsor" style={{ textDecoration: 'none' }}>
                  Become a Sponsor
                </Link>
              </div>
              <p style={{ marginTop: '28px', fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>
                🏛️ Ramaiah University of Applied Sciences · Bengaluru · August 10–11, 2026
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
