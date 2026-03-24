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
  Clock,
  Trash
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { getEnquiries, updateEnquiryStatus } from '@/app/actions/enquiry'

interface Enquiry {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: string;
  createdAt: Date;
}

export default function AdminDashboard() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [enquiries, setEnquiries] = useState<Enquiry[]>([])

  useEffect(() => {
    const auth = localStorage.getItem('admin_auth')
    if (auth === 'true') {
      setIsAuthenticated(true)
      fetchEnquiries()
    } else {
      router.push('/admin')
    }
  }, [router])

  async function fetchEnquiries() {
    try {
      const data = await getEnquiries()
      // Convert result to match local types (handling Date vs ISO string if necessary)
      setEnquiries(data as any)
      setIsLoading(false)
    } finally {
      setIsLoading(false)
    }
  }

  const handleStatusUpdate = async (id: number, status: string) => {
    const result = await updateEnquiryStatus(id, status)
    if (result.success) {
      fetchEnquiries()
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('admin_auth')
    router.push('/admin')
  }

  if (isLoading) return <div className="hero-bg" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><p className="section-label">Loading Dashboard...</p></div>

  const stats = [
    { label: 'Total Enquires', value: enquiries.length.toString(), icon: <MessageSquare size={20} />, color: 'var(--teal)' },
    { label: 'Website Views', value: '1.2k', icon: <Eye size={20} />, color: 'var(--primary)' },
    { label: 'New Inbox', value: enquiries.filter(e => e.status === 'new').length.toString(), icon: <Users size={20} />, color: 'var(--gold)' },
  ]

  return (
    <div className="hero-bg admin-layout" style={{ minHeight: '100vh', display: 'flex', position: 'relative', overflow: 'hidden' }}>
      {/* Centered Faded Background Logo */}
      <div style={{ position: 'absolute', opacity: 0.05, zIndex: 0, width: '800px', height: '800px', top: '50%', left: '55%', transform: 'translate(-50%, -50%)', pointerEvents: 'none' }}>
        <Image src="/leads-logo-thumb.png" alt="" fill style={{ objectFit: 'contain' }} />
      </div>

      {/* Sidebar - Integrated Mobile Support */}
      <aside className="glass-panel admin-sidebar" style={{ 
        width: 'var(--sidebar-width)', 
        height: 'var(--sidebar-height)', 
        margin: 'var(--sidebar-margin)', 
        display: 'flex', 
        flexDirection: 'column', 
        padding: '24px',
        position: 'var(--sidebar-pos)' as any,
        top: 'var(--sidebar-top)',
        zIndex: 5,
        border: '1px solid var(--glass-border)'
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
        </nav>

        <button onClick={handleLogout} className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '10px', width: '100%', border: 'none', color: 'var(--error)' }}>
          <LogOut size={18} /> Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="admin-main" style={{ flex: 1, padding: 'var(--admin-main-padding)', overflowY: 'auto', position: 'relative', zIndex: 5 }}>
        <header style={{ marginBottom: '32px' }}>
          <p className="section-label">System Live</p>
          <h1 className="section-heading">Welcome back, Admin!</h1>
          <p style={{ color: 'var(--text2)', fontSize: '14px' }}>Real-time dashboard for user enquiries.</p>
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
            <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text)', margin: '0' }}>Live Form Submissions</h3>
            <button className="btn btn-ghost" onClick={fetchEnquiries} style={{ padding: '8px 16px', fontSize: '13px' }}>Refresh 🔄</button>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--glass-border)' }}>
                  <th style={{ padding: '12px 16px', fontSize: '11px', fontWeight: 700, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '1px' }}>Sender</th>
                  <th style={{ padding: '12px 16px', fontSize: '11px', fontWeight: 700, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '1px' }}>Enquiry & Message</th>
                  <th style={{ padding: '12px 16px', fontSize: '11px', fontWeight: 700, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '1px' }}>Status</th>
                  <th style={{ padding: '12px 16px', fontSize: '11px', fontWeight: 700, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '1px' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {enquiries.length === 0 ? (
                  <tr>
                    <td colSpan={4} style={{ padding: '40px', textAlign: 'center', color: 'var(--text3)' }}>No enquires found yet.</td>
                  </tr>
                ) : (
                  enquiries.map((enq) => (
                    <tr key={enq.id} style={{ borderBottom: '1px solid var(--glass-border)', transition: 'background 0.2s' }}>
                      <td style={{ padding: '16px' }}>
                        <div style={{ fontWeight: 700, color: 'var(--text)', fontSize: '14px' }}>{enq.name}</div>
                        <div style={{ fontSize: '12px', color: 'var(--text2)' }}>{enq.email}</div>
                      </td>
                      <td style={{ padding: '16px' }}>
                        <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--primary)', textTransform: 'capitalize', marginBottom: '4px' }}>{enq.subject}</div>
                        <div style={{ fontSize: '13px', color: 'var(--text2)', maxWidth: '300px', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                          {enq.message}
                        </div>
                      </td>
                      <td style={{ padding: '16px' }}>
                        <span style={{ 
                          fontSize: '10px', 
                          fontWeight: 700, 
                          padding: '4px 10px', 
                          borderRadius: '20px', 
                          background: enq.status === 'new' ? 'rgba(0,188,212,0.15)' : enq.status === 'read' ? 'rgba(21,101,192,0.15)' : 'rgba(22,163,74,0.15)',
                          color: enq.status === 'new' ? 'var(--teal)' : enq.status === 'read' ? 'var(--primary)' : 'var(--success)',
                          textTransform: 'uppercase'
                        }}>
                          {enq.status}
                        </span>
                      </td>
                      <td style={{ padding: '16px' }}>
                        <div style={{ display: 'flex', gap: '8px' }}>
                          <button 
                            className="btn btn-icon" 
                            onClick={() => handleStatusUpdate(enq.id, 'read')}
                            title="Mark as Read"
                            style={{ padding: '6px', minWidth: 'auto', border: '1px solid var(--glass-border)' }}
                          >
                            <Eye size={16} />
                          </button>
                          <button 
                            className="btn btn-icon" 
                            onClick={() => handleStatusUpdate(enq.id, 'replied')}
                            title="Mark as Replied"
                            style={{ padding: '6px', minWidth: 'auto', border: '1px solid var(--glass-border)', color: 'var(--success)' }}
                          >
                            <CheckCircle size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}
