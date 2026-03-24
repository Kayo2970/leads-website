'use client'

import { useEffect, useRef, useState } from 'react'

export default function InteractiveHeroShapes() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const shapesRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      setMousePos({ x: clientX, y: clientY })

      // Apply parallax to shapes
      shapesRef.current.forEach((shape, idx) => {
        if (!shape) return
        const rect = shape.getBoundingClientRect()
        const shapeX = rect.left + rect.width / 2
        const shapeY = rect.top + rect.height / 2

        const angle = Math.atan2(clientY - shapeY, clientX - shapeX)
        const distance = Math.hypot(clientX - shapeX, clientY - shapeY)
        const maxDistance = 200
        const pull = Math.max(0, (maxDistance - distance) / maxDistance)

        const moveX = Math.cos(angle) * pull * 15
        const moveY = Math.sin(angle) * pull * 15

        shape.style.transform = `translate(${moveX}px, ${moveY}px) scale(${1 + pull * 0.1})`
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const shapeConfigs = [
    { delay: '0s', duration: '15s', size: '280px', opacity: 0.15 },
    { delay: '2s', duration: '18s', size: '200px', opacity: 0.1 },
    { delay: '4s', duration: '20s', size: '240px', opacity: 0.12 },
  ]

  return (
    <div className="interactive-shapes-container">
      {shapeConfigs.map((config, idx) => (
        <div
          key={idx}
          ref={(el) => {shapesRef.current[idx] = el}}
          className="interactive-shape"
          style={{
            animationDelay: config.delay,
            animationDuration: config.duration,
            width: config.size,
            height: config.size,
            opacity: config.opacity,
          }}
        />
      ))}
    </div>
  )
}
