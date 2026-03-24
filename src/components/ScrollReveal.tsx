'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollReveal() {
  const pathname = usePathname()

  useEffect(() => {
    // Only on desktop (>1024px) — mobile always shows via CSS
    if (window.innerWidth <= 1024) return

    // Opt-in to the CSS animation system
    document.documentElement.classList.add('js-reveal-ready')

    // Force-show all elements that are already in view or
    // that never get triggered by the observer (remote/slow connections).
    const showAll = () => {
      document.querySelectorAll<HTMLElement>('.reveal').forEach((el) => {
        el.classList.add('visible')
      })
    }

    // Hard safety net: after 1.5s, show everything regardless
    const fallback = setTimeout(showAll, 1500)

    // Also use observer for elements below the fold (nice animation on scroll)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
    )

    const run = () => {
      const elements = document.querySelectorAll<HTMLElement>('.reveal')
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect()
        const inView = rect.top < window.innerHeight && rect.bottom > 0
        if (inView) {
          el.classList.add('visible')
        } else {
          observer.observe(el)
        }
      })
    }

    // Run immediately and again after a short paint delay
    run()
    const paint = setTimeout(run, 200)

    return () => {
      clearTimeout(fallback)
      clearTimeout(paint)
      observer.disconnect()
      document.documentElement.classList.remove('js-reveal-ready')
    }
  }, [pathname])

  return null
}
