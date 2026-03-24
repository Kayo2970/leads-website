'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { TrendingUp, Globe, Lightbulb } from 'lucide-react'

export default function InteractiveCards() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 30,
        y: (e.clientY - window.innerHeight / 2) / 30,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

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
    fontSize: '1.1rem'
  }

  // Adjust for mobile screens so it doesn't overflow or crowd
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
  }, [])

  if (isMobile) return null;

  return (
    <div className="hero-floating-elements" style={{ position: 'absolute', right: '2%', top: '15%', height: '70%', width: '45%', pointerEvents: 'none', zIndex: 5 }}>
      
      {/* Card 1 */}
      <motion.div
        style={{ position: 'absolute', top: '10%', right: '25%' }}
        animate={{ x: mousePosition.x * 1.5, y: mousePosition.y * 1.5 }}
        transition={{ type: 'spring', damping: 15, stiffness: 50 }}
      >
        <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} style={cardStyle}>
          <div style={{ background: 'linear-gradient(135deg, var(--teal), var(--primary))', padding: '10px', borderRadius: '12px' }}>
            <TrendingUp size={24} color="#FFF" />
          </div>
          <span>Strategic Vision</span>
        </motion.div>
      </motion.div>

      {/* Card 2 */}
      <motion.div
        style={{ position: 'absolute', top: '45%', right: '5%' }}
        animate={{ x: -mousePosition.x * 1.2, y: -mousePosition.y * 1.2 }}
        transition={{ type: 'spring', damping: 20, stiffness: 40 }}
      >
        <motion.div animate={{ y: [0, -12, 0] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }} style={cardStyle}>
          <div style={{ background: 'linear-gradient(135deg, var(--gold), #E65100)', padding: '10px', borderRadius: '12px' }}>
            <Globe size={24} color="#FFF" />
          </div>
          <span>Global Impact</span>
        </motion.div>
      </motion.div>

      {/* Card 3 */}
      <motion.div
        style={{ position: 'absolute', top: '75%', right: '30%' }}
        animate={{ x: mousePosition.x * 2, y: mousePosition.y * 2 }}
        transition={{ type: 'spring', damping: 12, stiffness: 60 }}
      >
        <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 2 }} style={cardStyle}>
          <div style={{ background: 'linear-gradient(135deg, #7B1FA2, var(--primary))', padding: '10px', borderRadius: '12px' }}>
            <Lightbulb size={24} color="#FFF" />
          </div>
          <span>Innovation</span>
        </motion.div>
      </motion.div>

    </div>
  )
}
