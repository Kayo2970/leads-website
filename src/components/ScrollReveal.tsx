'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollReveal() {
  const pathname = usePathname()

  useEffect(() => {
    // Re-run reveal setup on each route change so newly rendered pages are observed.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.15 }
    )

    const elements = document.querySelectorAll<HTMLElement>('.reveal')
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect()
      const inView = rect.top <= window.innerHeight * 0.92 && rect.bottom >= 0

      if (inView) {
        el.classList.add('visible')
      } else {
        observer.observe(el)
      }
    })

    return () => observer.disconnect()
  }, [pathname])

  return null
}
