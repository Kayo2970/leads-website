'use client'

import CountUp from './CountUp'

const stats = [
  { number: 1500, suffix: '+', label: 'BLS Delegates' },
  { number: 8, suffix: '', label: 'Core Programs' },
  { number: 3, suffix: '', label: 'Global Partners' },
  { number: 500, suffix: '+', label: 'Student Community' },
]

export default function StatsSection() {
  return (
    <div className="grid-4">
      {stats.map((stat, i) => (
        <div key={i} className={`stat-card reveal reveal-d${i + 1}`}>
          <div className="stat-number">
            <CountUp end={stat.number} suffix={stat.suffix} />
          </div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}
