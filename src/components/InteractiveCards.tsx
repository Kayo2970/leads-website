'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { TrendingUp, Globe, Lightbulb, Calendar, Mic } from 'lucide-react'
import Link from 'next/link'

export default function InteractiveCards() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
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

  const cardStyle = {
    background: 'rgba(255, 255, 255, 0.08)',
    backdropFilter: 'blur(12px)', 
    WebkitBackdropFilter: 'blur(12px)',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    padding: '1.25rem 1.5rem', 
    borderRadius: '20px',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
    display: 'flex', 
    alignItems: 'center', 
    gap: '1rem',
    color: 'white', 
    fontWeight: 600,
    fontSize: '1.1rem',
    cursor: 'pointer',
    textDecoration: 'none',
  }

  return (
    <div className="hero-floating-elements" style={{ position: 'absolute', right: '2%', top: '10%', height: '80%', width: '45%', zIndex: 5 }}>
      
      {/* Card 1 - Strategic Vision */}
      <motion.div
        style={{ position: 'absolute', top: '5%', right: '25%' }}
        animate={{ x: mousePosition.x * 1.5, y: mousePosition.y * 1.5 }}
        transition={{ type: 'spring', damping: 15, stiffness: 50 }}
      >
        <motion.div 
          animate={{ y: [0, -10, 0] }} 
          whileHover={{ scale: 1.15, zIndex: 20 }}
          transition={{ y: { repeat: Infinity, duration: 4, ease: "easeInOut" }, scale: { type: 'spring', stiffness: 300 } }} 
          style={cardStyle}
        >
          <div style={{ background: 'linear-gradient(135deg, var(--teal), var(--primary))', padding: '10px', borderRadius: '12px' }}>
            <TrendingUp size={24} color="#FFF" />
          </div>
          <span>Strategic Vision</span>
        </motion.div>
      </motion.div>

      {/* Card 2 - Global Impact */}
      <motion.div
        style={{ position: 'absolute', top: '30%', right: '5%' }}
        animate={{ x: -mousePosition.x * 1.2, y: -mousePosition.y * 1.2 }}
        transition={{ type: 'spring', damping: 20, stiffness: 40 }}
      >
        <motion.div 
          animate={{ y: [0, -12, 0] }} 
          whileHover={{ scale: 1.15, zIndex: 20 }}
          transition={{ y: { repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }, scale: { type: 'spring', stiffness: 300 } }} 
          style={cardStyle}
        >
          <div style={{ background: 'linear-gradient(135deg, var(--gold), #E65100)', padding: '10px', borderRadius: '12px' }}>
            <Globe size={24} color="#FFF" />
          </div>
          <span>Global Impact</span>
        </motion.div>
      </motion.div>

      {/* Card 3 - Innovation */}
      <motion.div
        style={{ position: 'absolute', top: '55%', right: '35%' }}
        animate={{ x: mousePosition.x * 2, y: mousePosition.y * 2 }}
        transition={{ type: 'spring', damping: 12, stiffness: 60 }}
      >
        <motion.div 
          animate={{ y: [0, -8, 0] }} 
          whileHover={{ scale: 1.15, zIndex: 20 }}
          transition={{ y: { repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 2 }, scale: { type: 'spring', stiffness: 300 } }} 
          style={cardStyle}
        >
          <div style={{ background: 'linear-gradient(135deg, #7B1FA2, var(--primary))', padding: '10px', borderRadius: '12px' }}>
            <Lightbulb size={24} color="#FFF" />
          </div>
          <span>Innovation</span>
        </motion.div>
      </motion.div>

      {/* Card 4 - Event: BLS */}
      <motion.div
        style={{ position: 'absolute', top: '80%', right: '15%' }}
        animate={{ x: -mousePosition.x * 1.8, y: -mousePosition.y * 1.8 }}
        transition={{ type: 'spring', damping: 18, stiffness: 45 }}
      >
        <Link href="/events/bharat-lead-summit" passHref legacyBehavior>
          <motion.a 
            animate={{ y: [0, -10, 0] }} 
            whileHover={{ scale: 1.15, zIndex: 20 }}
            transition={{ y: { repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }, scale: { type: 'spring', stiffness: 300 } }} 
            style={cardStyle}
          >
            <div style={{ background: 'linear-gradient(135deg, #004D40, var(--teal))', padding: '10px', borderRadius: '12px' }}>
              <Calendar size={24} color="#FFF" />
            </div>
            <span>Bharat Lead Summit</span>
          </motion.a>
        </Link>
      </motion.div>

      {/* Card 5 - Event: Fireside Talk */}
      <motion.div
        style={{ position: 'absolute', top: '15%', right: '55%' }}
        animate={{ x: mousePosition.x * 2.2, y: -mousePosition.y * 1.5 }}
        transition={{ type: 'spring', damping: 14, stiffness: 55 }}
      >
        <Link href="/events" passHref legacyBehavior>
          <motion.a 
            animate={{ y: [0, -12, 0] }} 
            whileHover={{ scale: 1.15, zIndex: 20 }}
            transition={{ y: { repeat: Infinity, duration: 3.8, ease: "easeInOut", delay: 1.5 }, scale: { type: 'spring', stiffness: 300 } }} 
            style={cardStyle}
          >
            <div style={{ background: 'linear-gradient(135deg, #1B5E20, #00C853)', padding: '10px', borderRadius: '12px' }}>
              <Mic size={24} color="#FFF" />
            </div>
            <span>Fireside Talks</span>
          </motion.a>
        </Link>
      </motion.div>

    </div>
  )
}
