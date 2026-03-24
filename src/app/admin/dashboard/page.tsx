'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { 
  Users, 
  MessageSquare, 
  Eye, 
  LayoutDashboard, 
  Settings, 
  LogOut, 
  Home,
  CheckCircle,
  Clock
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function AdminDashboard() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const auth = localStorage.getItem('admin_auth')
    if (auth === 'true') {
      setIsAuthenticated(true)
      setIsLoading(false)
    } else {
      router.push('/admin')
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('admin_auth')
    router.push('/admin')
  }

  if (isLoading) return <div className="hero-bg" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><p className="section-label">Loading...</p></div>

  const stats = [
    { label: 'Total Enquiries', value: '42', icon: <MessageSquare size={20} />, color: 'var(--teal)' },
    { label: 'Website Views', value: '1.2k', icon: <Eye size={20} />, color: 'var(--primary)' },
    { label: 'Subscribers', value: '86', icon: <Users size={20} />, color: 'var(--gold)' },
  ]

  const submissions = [
    { id: 1, name: 'John Doe', email: 'john@example.com', subject: 'Partnership Inquiry', date: 'Mar 24, 2026', status: 'new' },
    { id: 2, name: 'Sarah Smith', email: 'sarah@msruas.ac.in', subject: 'Student Registration', date: 'Mar 24, 2026', status: 'read' },
    { id: 3, name: 'Michael Chen', email: 'mchen@tech.com', subject: 'Mentorship Program', date: 'Mar 23, 2026', status: 'replied' },
    { id: 4, name: 'Ananya Rao', email: 'ananya@msruas.ac.in', subject: 'Volunteer for BLS', date: 'Mar 22, 2026', status: 'new' },
  ]

  return (
    <div className="hero-bg" style={{ minHeight: '100vh', display: 'flex', position: 'relative', overflow: 'hidden' }}>
      {/* Faded Background Logo */}
      <div style={{ position: 'absolute', opacity: 0.1, zIndex: 0, width: '900px', height: '900px', bottom: '-20%', right: '-10%', transform: 'rotate(-15deg)', pointerEvents: 'none' }}>
        <Image src="/leads-logo-thumb.png" alt="" fill style={{ objectFit: 'contain' }} />
      </div>

      {/* Sidebar */}
      <aside className="glass-panel" style={{ 
        width: '260px', 
        height: 'calc(100vh - 40px)', 
        margin: '20px', 
        display: 'flex', 
        flexDirection: 'column', 
        padding: '24px',
        position: 'sticky',
        top: '20px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '40px' }}>
          <div style={{ width: '40px', height: '40px', background: 'var(--primary)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <LayoutDashboard color="white" size={24} style={{ margin: 'auto' }} />
          </div>
          <span style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text)' }}>Admin</span>
        </div>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
          <Link href="/admin/dashboard" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '10px', width: '100%', justifyContent: 'flex-start', padding: '12px 16px' }}>
            <LayoutDashboard size={18} /> Dashboard
          </Link>
          <Link href="/" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '10px', width: '100%', justifyContent: 'flex-start', padding: '12px 16px', border: 'none' }}>
            <Home size={18} /> View Website
          </Link>
          <a href="#" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '10px', width: '100%', justifyContent: 'flex-start', padding: '12px 16px', border: 'none' }}>
            <Settings size={18} /> Settings
          </a>
        </nav>

        <button onClick={handleLogout} className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '10px', width: '100%', border: 'none', color: 'var(--error)' }}>
          <LogOut size={18} /> Logout
        </button>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, padding: '20px 20px 20px 0', overflowY: 'auto' }}>
        <header style={{ marginBottom: '32px' }}>
          <p className="section-label">Overview</p>
          <h1 className="section-heading">Welcome back, Admin!</h1>
        </header>

        {/* Stats Grid */}
        <div className="grid-3" style={{ marginBottom: '32px' }}>
          {stats.map((stat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card" 
              style={{ padding: '24px', textAlign: 'left' }}
            >
              <div style={{ padding: '10px', borderRadius: '10px', background: `${stat.color}15`, color: stat.color, width: 'fit-content', marginBottom: '16px' }}>
                {stat.icon}
              </div>
              <p style={{ fontSize: '14px', color: 'var(--text2)', fontWeight: 600, margin: '0 0 4px 0' }}>{stat.label}</p>
              <h2 style={{ fontSize: '32px', fontWeight: 800, color: 'var(--text)', margin: '0' }}>{stat.value}</h2>
            </motion.div>
          ))}
        </div>

        {/* Recent Submissions Table */}
        <div className="glass-panel" style={{ padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text)', margin: '0' }}>Recent Form Submissions</h3>
            <button className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '13px' }}>View All</button>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--glass-border)' }}>
                  <th style={{ padding: '12px 16px', fontSize: '13px', fontWeight: 700, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '1px' }}>Name</th>
                  <th style={{ padding: '12px 16px', fontSize: '13px', fontWeight: 700, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '1px' }}>Subject</th>
                  <th style={{ padding: '12px 16px', fontSize: '13px', fontWeight: 700, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '1px' }}>Date</th>
                  <th style={{ padding: '12px 16px', fontSize: '13px', fontWeight: 700, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '1px' }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {submissions.map((sub, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid var(--glass-border)' }}>
                    <td style={{ padding: '16px' }}>
                      <div style={{ fontWeight: 700, color: 'var(--text)' }}>{sub.name}</div>
                      <div style={{ fontSize: '12px', color: 'var(--text2)' }}>{sub.email}</div>
                    </td>
                    <td style={{ padding: '16px', fontSize: '14px', color: 'var(--text2)' }}>{sub.subject}</td>
                    <td style={{ padding: '16px', fontSize: '14px', color: 'var(--text2)' }}>{sub.date}</td>
                    <td style={{ padding: '16px' }}>
                      <span style={{ 
                        fontSize: '11px', 
                        fontWeight: 700, 
                        padding: '4px 10px', 
                        borderRadius: '20px', 
                        background: sub.status === 'new' ? 'var(--teal)15' : sub.status === 'read' ? 'var(--primary)15' : 'var(--success)15',
                        color: sub.status === 'new' ? 'var(--teal)' : sub.status === 'read' ? 'var(--primary)' : 'var(--success)',
                        textTransform: 'uppercase'
                      }}>
                        {sub.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}
