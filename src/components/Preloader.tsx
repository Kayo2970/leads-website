'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Preloader() {
  const [hidden, setHidden] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 800)
    return () => clearTimeout(timer)
  }, [])

  if (hidden) return null

  return (
    <div className={`preloader ${hidden ? 'hide' : ''}`} id="preloader">
      {/* Animated Geometric Shapes */}
      <div className="geometric-shapes">
        <div className="shape shape-1" />
        <div className="shape shape-2" />
        <div className="shape shape-3" />
        <div className="shape shape-4" />
        <div className="shape shape-5" />
        <div className="shape shape-6" />
        <div className="animated-line line-1" />
        <div className="animated-line line-2" />
        <div className="animated-line line-3" />
      </div>

      <div className="preloader-container">
        <div className="logo-spinner">
          <Image
            src="/leads-logo-thumb.png"
            alt="LEADS Loading"
            width={500}
            height={500}
            className="spinning-logo"
            priority
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
        <div className="loading-line" />
      </div>
      <div className="preloader-text">Loading...</div>
    </div>
  )
}
