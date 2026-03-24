'use client'

import { useEffect, useRef, useState } from 'react'
import { animate, useInView } from 'framer-motion'

export default function Counter({ value, suffix = '' }: { value: number | string, suffix?: string }) {
  const [displayValue, setDisplayValue] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  // Clean numeric value for animation
  const numericValue = typeof value === 'number' ? value : parseInt(value.replace(/\D/g, '')) || 0

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, numericValue, {
        duration: 2,
        onUpdate: (latest) => setDisplayValue(Math.floor(latest)),
        ease: "easeOut"
      })
      return () => controls.stop()
    }
  }, [isInView, numericValue])

  return (
    <span ref={ref}>
      {displayValue}{suffix}
    </span>
  )
}
