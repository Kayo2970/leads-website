'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

type Theme = 'light' | 'dark'

const ThemeContext = createContext<{
  theme: Theme
  toggleTheme: () => void
}>({
  theme: 'light',
  toggleTheme: () => {},
})

export function useTheme() {
  return useContext(ThemeContext)
}

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Time-of-day always wins. Only respect localStorage if the user
    // explicitly toggled (flag stored separately).
    const hour = new Date().getHours()
    const isNight = hour >= 18 || hour < 6
    const userOverride = localStorage.getItem('leads-theme-override')
    const saved = localStorage.getItem('leads-theme') as Theme | null

    let resolved: Theme
    if (userOverride === 'true' && saved) {
      // User manually picked a theme — honour it
      resolved = saved
    } else {
      // Default to time-of-day; clear any stale saved value
      resolved = isNight ? 'dark' : 'light'
      localStorage.removeItem('leads-theme')
      localStorage.removeItem('leads-theme-override')
    }

    setTheme(resolved)
    document.documentElement.classList.toggle('dark', resolved === 'dark')
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    localStorage.setItem('leads-theme', next)
    localStorage.setItem('leads-theme-override', 'true')
    document.documentElement.classList.toggle('dark', next === 'dark')
  }

  if (!mounted) {
    return <>{children}</>
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
