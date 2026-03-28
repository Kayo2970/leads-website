'use client'

import { useState, useRef } from 'react'
import { submitApplication } from '@/app/actions/application'
import { useAnalytics } from '@/hooks/useAnalytics'

export default function JoinForm() {
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
      const result = await submitApplication(formData)
      if (result.success) {
        trackFormSubmit('registration')
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
          Application Received!
        </h3>
        <p style={{ fontSize: '15px', color: 'var(--text2)' }}>
          Thank you for your interest in LEADS. We'll review your application and reach out soon.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} ref={formRef} id="join-form">
      <div className="grid-2">
        <div className="form-group">
          <label className="form-label" htmlFor="join-name">Full Name *</label>
          <input className="form-input" id="join-name" name="fullName" type="text" placeholder="Your full name" required />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="join-email">Email Address *</label>
          <input className="form-input" id="join-email" name="email" type="email" placeholder="you@msruas.ac.in" required />
        </div>
      </div>
      <div className="grid-2">
        <div className="form-group">
          <label className="form-label" htmlFor="join-phone">Phone Number</label>
          <input className="form-input" id="join-phone" name="phone" type="tel" placeholder="+91 XXXXXXXXXX" />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="join-year">Year of Study *</label>
          <select className="form-input" id="join-year" name="year" required>
            <option value="">Select year</option>
            <option value="1">1st Year</option>
            <option value="2">2nd Year</option>
            <option value="3">3rd Year</option>
            <option value="4">4th Year</option>
            <option value="pg">Postgraduate</option>
          </select>
        </div>
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="join-faculty">Faculty / Department *</label>
        <input className="form-input" id="join-faculty" name="faculty" type="text" placeholder="e.g., Computer Science, MBA" required />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="join-interest">Programme Interest</label>
        <select className="form-input" id="join-interest" name="interest">
          <option value="">Select a programme</option>
          <option value="innovation">Innovation Challenge</option>
          <option value="cohorts">Transformation Cohorts</option>
          <option value="retreat">Sustainability Retreat</option>
          <option value="fireside">Fireside Talks</option>
          <option value="talks">Leadership Talk Series</option>
          <option value="mentorship">Mentorship Circles</option>
          <option value="corporate">Corporate Webinars</option>
          <option value="green">Green Leaders Circle</option>
        </select>
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="join-why">Why do you want to join LEADS?</label>
        <textarea className="form-input" id="join-why" name="whyJoin" rows={4} placeholder="Tell us about yourself and what drives you..." />
      </div>

      {error && (
        <p style={{ color: 'var(--error)', fontSize: '13px', marginBottom: '16px', fontWeight: 600 }}>
          {error}
        </p>
      )}

      <button type="submit" className="btn btn-primary" disabled={loading} id="join-submit-btn">
        {loading ? 'Submitting...' : 'Submit Application →'}
      </button>
    </form>
  )
}
