'use client'

import { useState, FormEvent } from 'react'

export default function JoinForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    // Simulate submission for static hosting
    await new Promise((resolve) => setTimeout(resolve, 800))
    setSubmitted(true)
    setLoading(false)
  }


  if (submitted) {
    return (
      <div className="card" style={{ textAlign: 'center', padding: '48px 32px', borderLeft: '4px solid var(--success)' }}>
        <div style={{ fontSize: '48px', marginBottom: '16px' }}>✅</div>
        <h3 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--text)', marginBottom: '8px' }}>
          Application Received!
        </h3>
        <p style={{ fontSize: '15px', color: 'var(--text2)' }}>
          Thank you for your interest in LEADS. We&apos;ll review your application and reach out soon.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} id="join-form">
      <div className="grid-2">
        <div className="form-group">
          <label className="form-label" htmlFor="join-name">Full Name *</label>
          <input className="form-input" id="join-name" type="text" placeholder="Your full name" required />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="join-email">Email Address *</label>
          <input className="form-input" id="join-email" type="email" placeholder="you@msruas.ac.in" required />
        </div>
      </div>
      <div className="grid-2">
        <div className="form-group">
          <label className="form-label" htmlFor="join-phone">Phone Number</label>
          <input className="form-input" id="join-phone" type="tel" placeholder="+91 XXXXXXXXXX" />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="join-year">Year of Study *</label>
          <select className="form-input" id="join-year" required>
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
        <input className="form-input" id="join-faculty" type="text" placeholder="e.g., Computer Science, MBA" required />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="join-interest">Programme Interest</label>
        <select className="form-input" id="join-interest">
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
        <textarea className="form-input" id="join-why" rows={4} placeholder="Tell us about yourself and what drives you..." />
      </div>
      <button type="submit" className="btn btn-primary" disabled={loading} id="join-submit-btn">
        {loading ? 'Submitting...' : 'Submit Application →'}
      </button>
    </form>
  )
}
