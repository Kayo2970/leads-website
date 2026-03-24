'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Lock } from 'lucide-react'
import Image from 'next/image'

export default function AdminLoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [leaderIndex, setLeaderIndex] = useState(0)
  const router = useRouter()

  const leaders = [
    "Mahatma Gandhi",
    "Nelson Mandela",
    "Martin Luther King Jr.",
    "Steve Jobs",
    "Abraham Lincoln",
    "Mother Teresa",
    "APJ Abdul Kalam",
    "Winston Churchill",
    "Malala Yousafzai",
    "Dalai Lama"
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setLeaderIndex((prev) => (prev + 1) % leaders.length)
    }, 2000)
    return () => clearInterval(timer)
  }, [leaders.length])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (username === 'admin' && password === 'admin') {
      // Small delay for effect
      localStorage.setItem('admin_auth', 'true')
      router.push('/admin/dashboard')
    } else {
      setError('Invalid credentials. Please try again.')
    }
  }

  return (
    <div className="hero-bg" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', position: 'relative', overflow: 'hidden' }}>
      {/* Faded Background Logo */}
      <div style={{ position: 'absolute', opacity: 0.1, zIndex: 0, width: '800px', height: '800px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', pointerEvents: 'none' }}>
        <Image src="/leads-logo-thumb.png" alt="" fill style={{ objectFit: 'contain' }} />
      </div>

      <div 
        className="glass-panel" 
        style={{ width: '100%', maxWidth: '400px', padding: '40px', textAlign: 'center', position: 'relative', zIndex: 10 }}
      >
        <div style={{ 
          width: '64px', 
          height: '64px', 
          background: 'var(--primary)', 
          borderRadius: '50%', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          margin: '0 auto 24px'
        }}>
          <Lock color="white" size={32} />
        </div>
        
        <h1 className="section-heading" style={{ fontSize: '24px', marginBottom: '8px', position: 'relative' }}>Admin Login</h1>
        
        <div style={{ height: '20px', marginBottom: '32px' }}>
          <p 
            className="section-label" 
            style={{ fontSize: '11px', color: 'var(--teal)' }}
          >
            BE LIKE {leaders[leaderIndex]}
          </p>
        </div>

        <form onSubmit={handleLogin}>
          <div className="form-group" style={{ textAlign: 'left' }}>
            <label className="form-label">Username</label>
            <input 
              type="text" 
              className="form-input" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="admin"
              required
            />
          </div>
          
          <div className="form-group" style={{ textAlign: 'left' }}>
            <label className="form-label">Password</label>
            <input 
              type="password" 
              className="form-input" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>

          {error && (
            <p style={{ color: 'var(--error)', fontSize: '13px', margin: '16px 0', fontWeight: 600 }}>
              {error}
            </p>
          )}

          <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '8px' }}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}
