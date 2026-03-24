'use client'

import { useEffect, useState } from 'react'

export default function Preloader() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 1200)
    return () => clearTimeout(timer)
  }, [])

  if (hidden) return null

  return (
    <div className={`preloader ${hidden ? 'hide' : ''}`} id="preloader">
      <div className="preloader-ring" />
      <div className="preloader-text">LEADS</div>
    </div>
  )
}
