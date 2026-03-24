'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { TrendingUp, Globe, Lightbulb, Calendar, Mic } from 'lucide-react'
import Link from 'next/link'

export default function InteractiveCards() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 30,
        y: (e.clientY - window.innerHeight / 2) / 30,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  if (isMobile) return null;

  const cardStyleBase = {
    position: 'absolute' as const,
    background: 'rgba(255, 255, 255, 0.08)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    padding: '1.25rem 1.5rem',
    borderRadius: '24px',
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.25)',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    color: 'white',
    fontWeight: 600,
    fontSize: '1rem',
    cursor: 'pointer',
    textDecoration: 'none',
    width: '260px',
  }

  const radius = 320;
  
  const cardsRaw = [
    {
      title: 'Strategic Vision',
      icon: <TrendingUp size={22} color="#FFF" />,
      gradient: 'linear-gradient(135deg, var(--teal), var(--primary))',
      angle: -50,
    },
    {
      title: 'Global Impact',
      icon: <Globe size={22} color="#FFF" />,
      gradient: 'linear-gradient(135deg, var(--gold), #E65100)',
      angle: -25,
    },
    {
      title: 'Bharat Lead Summit',
      icon: <Calendar size={22} color="#FFF" />,
      gradient: 'linear-gradient(135deg, #004D40, var(--teal))',
      angle: 0,
      link: '/events/bharat-lead-summit'
    },
    {
      title: 'Innovation',
      icon: <Lightbulb size={22} color="#FFF" />,
      gradient: 'linear-gradient(135deg, #7B1FA2, var(--primary))',
      angle: 25,
    },
    {
      title: 'Fireside Talks',
      icon: <Mic size={22} color="#FFF" />,
      gradient: 'linear-gradient(135deg, #1B5E20, #00C853)',
      angle: 50,
      link: '/events'
    }
  ]

  const cards = cardsRaw.map(c => {
    const rad = c.angle * (Math.PI / 180)
    // Calculate X to create a > shape (concave relative to the right edge)
    // Center card (rad=0) stays pushed mostly right. Edges push left.
    return {
      ...c,
      x: -radius * (1 - Math.cos(rad)) - 40,
      y: radius * Math.sin(rad) * 1.2,
    }
  })

  return (
    <div className="hero-floating-elements" style={{ position: 'absolute', right: '18%', top: '50%', zIndex: 5 }}>
      <motion.div 
        animate={{ x: mousePosition.x * 2.5, y: mousePosition.y * 2.5 }}
        transition={{ type: 'spring', damping: 20, stiffness: 40 }}
        style={{ position: 'relative' }}
      >
        {cards.map((card, i) => {
          const Content = (
            <motion.div
              style={{
                ...cardStyleBase,
                x: card.x,
                y: card.y,
                rotate: 0,
                zIndex: i,
              }}
              whileHover={{ scale: 1.15, x: card.x - 20, zIndex: 30 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div style={{ background: card.gradient, padding: '10px', borderRadius: '12px' }}>
                {card.icon}
              </div>
              <span style={{flex: 1}}>{card.title}</span>
            </motion.div>
          )

          return card.link ? (
            <Link href={card.link} passHref legacyBehavior key={i}>
              <motion.a style={{ display: 'block', position: 'absolute', inset: 0 }}>{Content}</motion.a>
            </Link>
          ) : (
            <div key={i} style={{ display: 'block', position: 'absolute', inset: 0 }}>{Content}</div>
          )
        })}
      </motion.div>
    </div>
  )
}
