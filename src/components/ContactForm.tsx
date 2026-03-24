'use client'

import { useState, FormEvent } from 'react'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 300))
    setSubmitted(true)
    setLoading(false)
  }

  if (submitted) {
    return (
      <div className="card" style={{ textAlign: 'center', padding: '48px 32px', borderLeft: '4px solid var(--success)' }}>
        <div style={{ fontSize: '48px', marginBottom: '16px' }}>✅</div>
        <h3 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--text)', marginBottom: '8px' }}>
          Message Sent!
        </h3>
        <p style={{ fontSize: '15px', color: 'var(--text2)' }}>
          Thank you for reaching out. We&apos;ll respond as soon as possible.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} id="contact-form">
      <div className="grid-2">
        <div className="form-group">
          <label className="form-label" htmlFor="contact-name">Full Name *</label>
          <input className="form-input" id="contact-name" type="text" placeholder="Your name" required />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="contact-email">Email Address *</label>
          <input className="form-input" id="contact-email" type="email" placeholder="you@example.com" required />
        </div>
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="contact-subject">Subject *</label>
        <select className="form-input" id="contact-subject" required>
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
        <textarea className="form-input" id="contact-message" rows={5} placeholder="How can we help?" required />
      </div>
      <button type="submit" className="btn btn-primary" disabled={loading} id="contact-submit-btn">
        {loading ? 'Sending...' : 'Send Message →'}
      </button>
    </form>
  )
}
