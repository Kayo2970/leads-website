'use client'

import { useState, useRef } from 'react'
import { submitEnquiry } from '@/app/actions/enquiry'
import { useAnalytics } from '@/hooks/useAnalytics'

export default function ContactForm() {
  const { trackFormSubmit } = useAnalytics()
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    
    const formData = new FormData(e.currentTarget)
    
    try {
      const result = await submitEnquiry(formData)
      if (result.success) {
        trackFormSubmit('contact')
        setSubmitted(true)
        formRef.current?.reset()
      } else {
        setError(result.error || 'Something went wrong')
      }
    } catch (err) {
      setError('A connection error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="card" style={{ textAlign: 'center', padding: '48px 32px', borderLeft: '4px solid var(--success)' }}>
        <div style={{ fontSize: '48px', marginBottom: '16px' }}>✅</div>
        <h3 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--text)', marginBottom: '8px' }}>
          Message Sent!
        </h3>
        <p style={{ fontSize: '15px', color: 'var(--text2)' }}>
          Thank you for reaching out. Your enquiry has been saved to our database and we&apos;ll respond as soon as possible.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="btn btn-outline"
          style={{ marginTop: '20px', fontSize: '13px' }}
        >
          Send Another Message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} ref={formRef} id="contact-form">
      <div className="contact-form-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
        <div className="form-group">
          <label className="form-label" htmlFor="contact-name">Full Name *</label>
          <input className="form-input" id="contact-name" name="name" type="text" placeholder="Your name" required />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="contact-email">Email Address *</label>
          <input className="form-input" id="contact-email" name="email" type="email" placeholder="you@example.com" required />
        </div>
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="contact-subject">Subject *</label>
        <select className="form-input" id="contact-subject" name="subject" required>
          <option value="">Select a topic</option>
          <option value="general">General Enquiry</option>
          <option value="membership">Membership Question</option>
          <option value="bls">BLS 2026 Enquiry</option>
          <option value="partnership">Partnership / Sponsorship</option>
          <option value="media">Media / Press</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="contact-message">Message *</label>
        <textarea className="form-input" id="contact-message" name="message" rows={5} placeholder="How can we help?" required />
      </div>
      
      {error && (
        <p style={{ color: 'var(--error)', fontSize: '13px', marginBottom: '16px', fontWeight: 600 }}>
          {error}
        </p>
      )}

      <button type="submit" className="btn btn-primary" disabled={loading} id="contact-submit-btn">
        {loading ? 'Sending...' : 'Send Message →'}
      </button>
    </form>
  )
}
