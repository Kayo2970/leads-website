'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { trackPageView } from '@/app/actions/analytics'

export default function AnalyticsTracker() {
  const pathname = usePathname()

  useEffect(() => {
    // Only track non-admin paths to avoid skewing data
    if (pathname && !pathname.includes('/admin')) {
      trackPageView(pathname)
    }
  }, [pathname])

  return null
}
