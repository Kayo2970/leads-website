'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Preloader() {
  const [hidden, setHidden] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    const timer = setTimeout(() => setHidden(true), 3000)
    return () => {
      clearTimeout(timer)
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  if (hidden) return null

  return (
    <div className={`preloader ${hidden ? 'hide' : ''}`} id="preloader">
      <div className="preloader-container">
        <div className="logo-spinner">
          <Image
            src="/leads-logo-thumb.png"
            alt="LEADS Loading"
            width={isMobile ? 200 : 500}
            height={isMobile ? 200 : 500}
            className="spinning-logo"
            priority
          />
        </div>
        <div className="loading-line" />
      </div>
      <div className="preloader-text">Loading...</div>
    </div>
  )
}
