'use client'

import { useEffect, useRef } from 'react'

export default function Starfield() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    for (let i = 0; i < 80; i++) {
      const star = document.createElement('div')
      star.className = 'star'
      const size = Math.random() * 3 + 1
      star.style.width = `${size}px`
      star.style.height = `${size}px`
      star.style.left = `${Math.random() * 100}%`
      star.style.top = `${Math.random() * 100}%`
      star.style.setProperty('--dur', `${Math.random() * 4 + 2}s`)
      star.style.setProperty('--del', `${Math.random() * 3}s`)
      container.appendChild(star)
    }

    return () => {
      while (container.firstChild) {
        container.removeChild(container.firstChild)
      }
    }
  }, [])

  return (
    <div className="starfield" ref={containerRef} />
  )
}
