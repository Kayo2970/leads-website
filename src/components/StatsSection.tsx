'use client'

import { useEffect, useState } from 'react'

const stats = [
  { number: 1500, suffix: '+', label: 'BLS Delegates' },
  { number: 8, suffix: '', label: 'Core Programs' },
  { number: 3, suffix: '', label: 'Global Partners' },
  { number: 500, suffix: '+', label: 'Student Community' },
]

export default function StatsSection() {
  const [counts, setCounts] = useState(stats.map(s => s.number)) // Start with final values
  const [isMobile, setIsMobile] = useState(true) // Default to mobile (no animation)

  useEffect(() => {
    const mobile = window.innerWidth <= 1024
    setIsMobile(mobile)

    if (mobile) return // Static on mobile — no animation

    // Desktop: animate from 0
    setCounts([0, 0, 0, 0])
    const timer = setTimeout(() => {
      const totalDuration = 2000
      const steps = 60
      const stepTime = totalDuration / steps
      let currentStep = 0

      const interval = setInterval(() => {
        currentStep++
        const progress = Math.min(currentStep / steps, 1)
        const eased = 1 - Math.pow(1 - progress, 3)

        setCounts(stats.map(s => Math.floor(eased * s.number)))

        if (currentStep >= steps) {
          setCounts(stats.map(s => s.number))
          clearInterval(interval)
        }
      }, stepTime)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="grid-4">
      {stats.map((stat, i) => (
        <div key={i} className={`stat-card reveal reveal-d${i + 1}`}>
          <div className="stat-number">
            {counts[i].toLocaleString()}{stat.suffix}
          </div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}
