import type { Metadata } from 'next'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with LEADS Next Gen Centre at MSRUAS. Contact us for enquiries, partnerships, or event information.',
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
            Have a question, want to partner, or just curious about LEADS?
            We&apos;d love to hear from you.
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
                  <p><a href="mailto:leads.msruas@msruas.ac.in" style={{ color: 'var(--primary)', textDecoration: 'none' }}>leads.msruas@msruas.ac.in</a></p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon">📞</div>
                <div>
                  <h4>Phone</h4>
                  <p>+91 8910332851</p>
                  <p>+91 8045386666 Ext 793</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon">📍</div>
                <div>
                  <h4>Address</h4>
                  <p>
                    LEADS Next Gen Centre<br />
                    Faculty of Management &amp; Commerce<br />
                    MSRUAS, Gnanagangothri Campus<br />
                    New BEL Road, MSR Nagar<br />
                    Bengaluru – 560054, India
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
                  title="MSRUAS Location"
                />
              </div>

              {/* Social Links */}
              <div style={{ marginTop: '24px' }}>
                <h4 style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text)', marginBottom: '12px' }}>
                  Follow Us
                </h4>
                <div style={{ display: 'flex', gap: '12px' }}>
                  {['Instagram', 'LinkedIn', 'Twitter'].map((platform) => (
                    <a
                      key={platform}
                      href="#"
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
                      {platform}
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
