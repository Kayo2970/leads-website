import type { Metadata } from 'next'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Bharat Lead Summit and LEADS Next Gen Centre at RUAS for registrations, partnerships, and event information.',
}

export default function ContactPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="page-hero" id="contact-hero">
        <div className="container">
          <div className="section-label" style={{ color: 'var(--teal)' }}>Contact</div>
          <h1 className="page-hero-title">Get in Touch</h1>
          <p className="page-hero-sub">
            Have questions? We are here to help you with Bharat Lead Summit registrations,
            sponsorship opportunities, and collaborations.
          </p>
        </div>
      </section>

      {/* ── CONTACT CONTENT ── */}
      <section className="section" id="contact-content">
        <div className="container">
          <div className="grid-2">
            {/* Form */}
            <div className="reveal">
              <div className="section-label">Send a Message</div>
              <h2 className="section-heading">Quick Contact</h2>
              <hr className="divider" />
              <ContactForm />
              <p style={{ fontSize: '13px', color: 'var(--text2)', marginTop: '12px' }}>
                This captures your details and lets you continue the conversation directly with our team.
              </p>
            </div>

            {/* Info */}
            <div className="reveal reveal-d2">
              <div className="section-label">Info</div>
              <h2 className="section-heading">Find Us</h2>
              <hr className="divider" />

              <div className="contact-info-item">
                <div className="contact-icon">📧</div>
                <div>
                  <h4>Email</h4>
                  <p><a href="mailto:info@bharatleadsummit.com" style={{ color: 'var(--primary)', textDecoration: 'none' }}>info@bharatleadsummit.com</a></p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon">📞</div>
                <div>
                  <h4>Phone</h4>
                  <p>+91 91106 73919</p>
                  <p>+91 80183 75553</p>
                  <p>+91 78992 93097</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon">📍</div>
                <div>
                  <h4>Address</h4>
                  <p>
                    University House, New BEL Rd,<br />
                    M S R Nagar, Mathikere,<br />
                    Bengaluru, Karnataka 560054
                  </p>
                </div>
              </div>

              {/* Map Placeholder */}
              <div style={{
                background: 'linear-gradient(135deg, var(--surface), var(--card))',
                borderRadius: '16px',
                height: '200px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(21,101,192,0.1)',
                marginTop: '24px',
                overflow: 'hidden',
              }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.3!2d77.5648!3d13.0271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAxJzM3LjYiTiA3N8KwMzMnNTMuMyJF!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="200"
                  style={{ border: 0, borderRadius: '16px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bharat Lead Summit Location"
                />
              </div>
              <p style={{ fontSize: '12px', color: 'var(--text2)', marginTop: '10px' }}>
                Click to interact with map.
              </p>

              {/* Social Links */}
              <div style={{ marginTop: '24px' }}>
                <h4 style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text)', marginBottom: '12px' }}>
                  Follow Our Journey
                </h4>
                <div style={{ display: 'flex', gap: '12px' }}>
                  {[
                    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/leads-next-gen-centre-ruas-700555327/' },
                    { label: 'Summit Instagram', href: 'https://www.instagram.com/bharatlead_summit?igsh=b3c5dmtwMG43MmMw&utm_source=qr' },
                    { label: 'Center Instagram', href: 'https://www.instagram.com/leads_next_gen_ruas?igsh=MmxhODgyOHA3N2V1&utm_source=qr' },
                    { label: 'Facebook', href: 'https://www.facebook.com/share/1EQWdysDEx/?mibextid=wwXIfr' },
                    { label: 'YouTube', href: 'https://youtube.com/@leads_msruas_next_gen_centre?si=o5LCtlMHXJEFnYa6' },
                    { label: 'Threads', href: 'https://www.threads.com/@leads_next_gen_ruas?igshid=NTc4MTIwNjQ2YQ==' },
                  ].map((platform) => (
                    <a
                      key={platform.label}
                      href={platform.href}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        background: 'var(--surface)',
                        color: 'var(--text2)',
                        padding: '10px 18px',
                        borderRadius: '10px',
                        fontSize: '13px',
                        fontWeight: 600,
                        textDecoration: 'none',
                        border: '1px solid rgba(21,101,192,0.1)',
                        transition: 'all 0.2s',
                      }}
                    >
                      {platform.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTAs ── */}
      <section className="section" id="contact-cta">
        <div className="container">
          <div className="grid-2">
            <div className="card reveal" style={{ textAlign: 'center', padding: '40px' }}>
              <div style={{ fontSize: '36px', marginBottom: '16px' }}>🚀</div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text)', marginBottom: '8px' }}>
                Want to Join LEADS?
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--text2)', marginBottom: '20px' }}>
                Applications are open on a rolling basis for all MSRUAS students.
              </p>
              <Link href="/join" className="btn btn-primary btn-sm" id="contact-join-link">
                Apply Now →
              </Link>
            </div>
            <div className="card reveal reveal-d1" style={{ textAlign: 'center', padding: '40px' }}>
              <div style={{ fontSize: '36px', marginBottom: '16px' }}>📖</div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text)', marginBottom: '8px' }}>
                Learn About LEADS
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--text2)', marginBottom: '20px' }}>
                Discover our story, programmes, and what makes us different.
              </p>
              <Link href="/about" className="btn btn-ghost btn-sm" id="contact-about-link">
                Read Our Story →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
