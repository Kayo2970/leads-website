import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms & Conditions | LEADS Next Gen Centre',
  description: 'Terms and Conditions governing the use of the LEADS Next Gen Centre website.',
}

export default function TermsPage() {
  return (
    <>
      <section className="section" style={{ paddingTop: '120px' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <p className="section-label">Legal</p>
          <h1 className="section-heading" style={{ marginBottom: '40px' }}>Terms &amp; Conditions</h1>

          <div className="glass-panel" style={{ padding: '40px', lineHeight: '1.8', fontSize: '15px', color: 'var(--text2)' }}>
            <p style={{ color: 'var(--text3)', fontSize: '13px', marginBottom: '32px' }}>
              <strong>Effective Date:</strong> 1 January 2025 &nbsp;|&nbsp; <strong>Last Updated:</strong> 25 March 2025
            </p>

            <h2 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text)', marginBottom: '12px' }}>1. Acceptance of Terms</h2>
            <p style={{ marginBottom: '24px' }}>
              By accessing and using the LEADS Next Gen Centre website (<Link href="/" style={{ color: 'var(--primary)' }}>leads.pavris.in</Link>), 
              you accept and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, 
              you must not use this website.
            </p>

            <h2 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text)', marginBottom: '12px' }}>2. Intellectual Property Rights</h2>
            <p style={{ marginBottom: '24px' }}>
              All content published on this website — including but not limited to text, graphics, logos, icons, images, 
              audio clips, video content, data compilations, page layouts, underlying code, software, and all other 
              materials — is the exclusive intellectual property of <strong style={{ color: 'var(--text)' }}>LEADS Next Gen Centre</strong> and/or its content 
              suppliers, and is protected by applicable Indian and international copyright, trademark, and intellectual 
              property laws. The LEADS name, logo, and all related names, logos, product and service names, designs, and 
              slogans are trademarks of LEADS Next Gen Centre. You must not use such marks without the prior written 
              permission of LEADS Next Gen Centre.
            </p>

            <h2 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text)', marginBottom: '12px' }}>3. Permitted Use</h2>
            <p style={{ marginBottom: '24px' }}>
              You may access and use this website for lawful, personal, and non-commercial purposes only. You agree not to:
            </p>
            <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
              <li style={{ marginBottom: '8px' }}>Reproduce, duplicate, copy, sell, resell, or exploit any portion of this website without express written consent.</li>
              <li style={{ marginBottom: '8px' }}>Use any automated means, including robots, crawlers, or scrapers, to access or collect data from this website.</li>
              <li style={{ marginBottom: '8px' }}>Modify, adapt, translate, reverse-engineer, decompile, or disassemble any part of this website.</li>
              <li style={{ marginBottom: '8px' }}>Use the website in any way that could damage, disable, overburden, or impair the server or network.</li>
              <li style={{ marginBottom: '8px' }}>Attempt to gain unauthorised access to any part of the website, other accounts, or computer systems.</li>
            </ul>

            <h2 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text)', marginBottom: '12px' }}>4. Disclaimer of Warranties</h2>
            <p style={{ marginBottom: '24px' }}>
              This website and all its content are provided on an <strong style={{ color: 'var(--text)' }}>&quot;as is&quot;</strong> and <strong style={{ color: 'var(--text)' }}>&quot;as available&quot;</strong> basis 
              without any warranties of any kind, either express or implied, including but not limited to the implied 
              warranties of merchantability, fitness for a particular purpose, or non-infringement. LEADS Next Gen Centre 
              does not warrant that the website will be uninterrupted, timely, secure, or error-free, nor does it make any 
              warranty as to the accuracy, completeness, or reliability of any information obtained through the website.
            </p>

            <h2 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text)', marginBottom: '12px' }}>5. Limitation of Liability</h2>
            <p style={{ marginBottom: '24px' }}>
              To the fullest extent permitted by applicable law, LEADS Next Gen Centre, its directors, employees, partners, 
              agents, suppliers, or affiliates shall not be liable for any indirect, incidental, special, consequential, or 
              punitive damages, including without limitation loss of profits, data, use, goodwill, or other intangible 
              losses, resulting from: (i) your access to, use of, or inability to access or use the website; (ii) any 
              conduct or content of any third party on the website; (iii) any content obtained from the website; or (iv) 
              unauthorised access, use, or alteration of your transmissions or content.
            </p>

            <h2 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text)', marginBottom: '12px' }}>6. User Submissions</h2>
            <p style={{ marginBottom: '24px' }}>
              Any information, feedback, data, questions, comments, suggestions, or other materials submitted through 
              contact forms, registration forms, or other means on this website shall be treated as non-confidential and 
              non-proprietary. By submitting such materials, you grant LEADS Next Gen Centre a non-exclusive, royalty-free, 
              perpetual, irrevocable, and fully sub-licensable right to use, reproduce, modify, adapt, publish, translate, 
              create derivative works from, distribute, and display such content throughout the world in any media.
            </p>

            <h2 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text)', marginBottom: '12px' }}>7. Third-Party Links</h2>
            <p style={{ marginBottom: '24px' }}>
              This website may contain links to third-party websites or services that are not owned or controlled by 
              LEADS Next Gen Centre. We have no control over, and assume no responsibility for, the content, privacy 
              policies, or practices of any third-party websites or services. You acknowledge and agree that LEADS Next 
              Gen Centre shall not be responsible or liable, directly or indirectly, for any damage or loss caused or 
              alleged to be caused by or in connection with use of or reliance on any such content, goods, or services 
              available on or through any such websites or services.
            </p>

            <h2 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text)', marginBottom: '12px' }}>8. Privacy</h2>
            <p style={{ marginBottom: '24px' }}>
              Your use of this website is also governed by our Privacy practices. Any personal information collected 
              through this website — including names, email addresses, and enquiry details submitted via forms — is stored 
              securely and used solely for the purpose of responding to your queries and improving our services. We do not 
              sell, trade, or otherwise transfer your personally identifiable information to outside parties.
            </p>

            <h2 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text)', marginBottom: '12px' }}>9. Indemnification</h2>
            <p style={{ marginBottom: '24px' }}>
              You agree to defend, indemnify, and hold harmless LEADS Next Gen Centre, its officers, directors, employees, 
              and agents from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or 
              fees (including reasonable legal fees) arising out of or relating to your violation of these Terms and 
              Conditions or your use of the website.
            </p>

            <h2 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text)', marginBottom: '12px' }}>10. Governing Law</h2>
            <p style={{ marginBottom: '24px' }}>
              These Terms shall be governed by and construed in accordance with the laws of India, without regard to its 
              conflict of law provisions. Any disputes arising under or in connection with these Terms shall be subject to 
              the exclusive jurisdiction of the courts in Bengaluru, Karnataka, India.
            </p>

            <h2 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text)', marginBottom: '12px' }}>11. Changes to Terms</h2>
            <p style={{ marginBottom: '24px' }}>
              LEADS Next Gen Centre reserves the right, at its sole discretion, to modify or replace these Terms at any 
              time. Material changes will be posted on this page with an updated revision date. Your continued use of the 
              website after any such changes constitutes your acceptance of the new Terms.
            </p>

            <h2 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text)', marginBottom: '12px' }}>12. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:{' '}
              <Link href="/contact" style={{ color: 'var(--primary)', fontWeight: 600 }}>Contact Page</Link>.
            </p>

            <div style={{ marginTop: '40px', paddingTop: '24px', borderTop: '1px solid var(--glass-border)', fontSize: '13px', color: 'var(--text3)' }}>
              <p>© {new Date().getFullYear()} LEADS Next Gen Centre. All rights reserved.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
