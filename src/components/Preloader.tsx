'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Preloader() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  if (hidden) return null

  return (
    <div className={`preloader ${hidden ? 'hide' : ''}`} id="preloader">
      <div className="preloader-container">
        <div className="logo-spinner">
          <Image
            src="/leads-logo-large.png"
            alt="LEADS Loading"
            width={720}
            height={208}
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
