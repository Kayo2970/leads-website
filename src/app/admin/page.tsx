'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Lock } from 'lucide-react'

export default function AdminLoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

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
    <div className="hero-bg" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-panel" 
        style={{ width: '100%', maxWidth: '400px', padding: '40px', textAlign: 'center' }}
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
        
        <h1 className="section-heading" style={{ fontSize: '24px', marginBottom: '8px' }}>Admin Login</h1>
        <p className="section-sub" style={{ fontSize: '14px', marginBottom: '32px' }}>Access LEADS management dashboard</p>

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
      </motion.div>
    </div>
  )
}
