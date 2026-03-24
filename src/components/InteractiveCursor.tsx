'use client'

import { useEffect, useRef, useState } from 'react'

export default function InteractiveCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const cursorRef = useRef<HTMLDivElement>(null)
  const trailRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      setMousePos({ x: clientX, y: clientY })

      // Update custom cursor
      if (cursorRef.current) {
        cursorRef.current.style.left = `${clientX}px`
        cursorRef.current.style.top = `${clientY}px`
      }

      // Create trail particles
      if (Math.random() > 0.85) {
        const particle = document.createElement('div')
        particle.className = 'cursor-trail-particle'
        particle.style.left = `${clientX}px`
        particle.style.top = `${clientY}px`
        trailRef.current?.appendChild(particle)

        setTimeout(() => particle.remove(), 600)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={trailRef} className="cursor-trail" />
    </>
  )
}
