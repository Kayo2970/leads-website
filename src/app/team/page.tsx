import type { Metadata } from 'next'
import TeamCard from '@/components/TeamCard'

export const metadata: Metadata = {
  title: 'Meet Our Team | LEADS Next Gen Centre',
  description: 'Meet the leadership, executive council, and dedicated team members driving LEADS Next Gen Centre and Bharat Lead Summit.',
}

const executiveCouncil = [
  {
    name: 'Prof. Kuldeep Kumar Raina',
    role: 'PATRON (LEADS NEXT GEN CENTRE)',
    org: 'Honourable Vice-Chancellor of RUAS',
    image: '/team-photos/kuldeep-raina.webp',
    linkedin: 'https://www.linkedin.com/in/dr-kuldeep-raina-b4207524',
  },
  {
    name: 'Dr. K. M. Sharath Kumar',
    role: 'CHIEF ADVISER (LEADS NEXT GEN CENTRE)',
    org: 'Professor and Dean of FMC, RUAS',
    image: '/team-photos/sharath-kumar.webp',
    linkedin: 'https://www.linkedin.com/in/dr-k-m-sharath-kumar-ph-d-80400714',
  },
  {
    name: 'Dr. Subhadeep Mukherjee',
    role: 'CENTRE HEAD (LEADS NEXT GEN CENTRE)',
    org: 'Associate Professor of FMC, RUAS',
    image: '/team-photos/subhadeep-mukherjee.webp',
    linkedin: 'https://www.linkedin.com/in/dr-subhadeep-mukherjee-aa78a182',
  },
  {
    name: 'Mr. Ajay R',
    role: 'FINANCE HEAD AND AUDITOR',
    org: 'Assistant Professor of FMC, RUAS',
    image: '/team-photos/ajay-r.webp',
    linkedin: 'https://www.linkedin.com/in/ajay-r-50b467270',
  },
  {
    name: 'Dr. Kiran Kumar B M',
    role: 'HEAD EVENT & CAMPUS COORDINATION (RT CAMPUS)',
    org: 'Associate Professor of FET, RUAS',
    image: '/team-photos/kiran-kumar.webp',
    linkedin: 'https://www.linkedin.com/in/dr-kiran-kumar-b-m-17539769',
  },
  {
    name: 'Dr. Pallabi Mund',
    role: 'HEAD EVENT & CAMPUS COORDINATION (GG CAMPUS)',
    org: 'Associate Professor of FMC, RUAS',
    image: '/team-photos/pallabi-mund.webp',
    linkedin: 'https://www.linkedin.com/in/dr-pallabi-mund-53163a20',
  },
  {
    name: 'Ms. Sujata Bijwe',
    role: 'HEAD INDUSTRY CONNECT',
    org: 'Adjunct Faculty of FMC, RUAS',
    image: '/team-photos/sujata-bijwe.webp',
    linkedin: '',
  },
]

const organizingCommittee = [
  {
    name: 'Mr. Gurutejas C',
    role: 'SR. PRESIDENT',
    org: 'LEADS Next Gen Centre',
    image: '/team-photos/gurutejas-c.webp',
    linkedin: 'https://www.linkedin.com/in/gurutejas-c-215216291/',
  },
  {
    name: 'Mr. Abhijit Arya',
    role: 'SR. VICE PRESIDENT',
    org: 'LEADS Next Gen Centre',
    image: '/team-photos/abhijit-arya.webp',
    linkedin: 'https://www.linkedin.com/in/abhijit-arya-402570285/',
  },
  {
    name: 'Mr. Laksh Soorya Singh',
    role: 'SR. EVENTS & OPERATIONS HEAD',
    org: 'LEADS Next Gen Centre',
    image: '/team-photos/laksh-soorya-singh.webp',
    linkedin: 'https://www.linkedin.com/in/laksh-soorya-singh-ab4212291/',
  },
  {
    name: 'Mr. Bhawen Maroo',
    role: 'SR. EVENTS & OPERATIONS HEAD',
    org: 'LEADS Next Gen Centre',
    image: '/team-photos/bhawen-maroo.webp',
    linkedin: 'https://www.linkedin.com/in/bhawen-maroo/',
  },
  {
    name: 'Ms. Shreesha S.N',
    role: 'SR. SOCIAL MEDIA & DESIGN HEAD',
    org: 'LEADS Next Gen Centre',
    image: '/team-photos/shreesha-sn.webp',
    linkedin: 'https://www.linkedin.com/in/shreesha-s-n-549536292/',
  },
  {
    name: 'Ms. Bharvi A Padia',
    role: 'SR. PR HEAD',
    org: 'LEADS Next Gen Centre',
    image: '/team-photos/bharvi-padia.webp',
    linkedin: 'https://www.linkedin.com/in/bharvi-a-7063a62a0/',
  },
  {
    name: 'Mr. Arvind Rakshith G',
    role: 'SR. FINANCE & SPONSORSHIP HEAD',
    org: 'LEADS Next Gen Centre',
    image: '/team-photos/arvind-rakshith.webp',
    linkedin: 'https://www.linkedin.com/in/arvind-rakshith-94a36a375/',
  },
]

const organizers = [
  {
    name: 'Nuthan H',
    role: 'PRESIDENT',
    org: 'Core Committee',
    image: '/team-photos/nuthan-h.webp',
    linkedin: '',
  },
  {
    name: 'Kunal Bhadauria',
    role: 'VICE PRESIDENT',
    org: 'Core Committee',
    image: '/team-photos/kunal-bhadauria.webp',
    linkedin: '',
  },
  {
    name: 'Sudev Mitra',
    role: 'CHIEF COORDINATOR',
    org: 'Core Committee',
    image: '/team-photos/sudev-mitra.webp',
    linkedin: '',
  },
  {
    name: 'Jyotsna Karn',
    role: 'CHIEF COORDINATOR',
    org: 'Core Committee',
    image: '/team-photos/jyotsna-karn.webp',
    linkedin: '',
  },
  {
    name: 'Pranav P J',
    role: 'CHIEF COORDINATOR',
    org: 'Core Committee',
    image: '/team-photos/pranav-pj.webp',
    linkedin: '',
  },
  {
    name: 'Shravya T',
    role: 'CHIEF COORDINATOR',
    org: 'Core Committee',
    image: '/team-photos/shravya-t.webp',
    linkedin: '',
  },
  {
    name: 'Shriram SG',
    role: 'GENERAL SECRETARY',
    org: 'Core Committee',
    image: '/team-photos/shriram-sg.webp',
    linkedin: '',
  },
  {
    name: 'S Bhavya Shree',
    role: 'GENERAL SECRETARY',
    org: 'Core Committee',
    image: '/team-photos/bhavya-shree.webp',
    linkedin: '',
  },
  {
    name: 'Manoj Petakamsetty',
    role: 'GENERAL SECRETARY',
    org: 'Core Committee',
    image: '/team-photos/manoj-petakamsetty.webp',
    linkedin: '',
  },
  {
    name: 'Yash Chandak',
    role: 'HEAD-OPERATIONS AND LOGISTICS',
    org: 'Core Committee',
    image: '/team-photos/yash-chandak.webp',
    linkedin: '',
  },
  {
    name: 'Kayomarz Pavri',
    role: 'HEAD-DESIGN AND SOCIAL MEDIA',
    org: 'Core Committee',
    image: '/team-photos/kayomarz-pavri.webp',
    linkedin: '',
  },
  {
    name: 'Shwetha S',
    role: 'HEAD-DESIGN AND SOCIAL MEDIA',
    org: 'Core Committee',
    image: '/team-photos/shwetha-s.webp',
    linkedin: '',
  },
  {
    name: 'Niyati Chawra',
    role: 'HEAD-LEADERSHIP AND DEVELOPMENT',
    org: 'Core Committee',
    image: '/team-photos/niyati-chawra.webp',
    linkedin: '',
  },
  {
    name: 'Sadiya Sawood',
    role: 'HEAD-LEADERSHIP AND DEVELOPMENT',
    org: 'Core Committee',
    image: '/team-photos/sadiya-sawood.webp',
    linkedin: '',
  },
  {
    name: 'Nimisha K M',
    role: 'HEAD-SUSTAINABILITY AND INNOVATION',
    org: 'Core Committee',
    image: '/team-photos/nimisha-km.webp',
    linkedin: '',
  },
  {
    name: 'Kishan KP',
    role: 'HEAD-MARKETING AND BRANDING',
    org: 'Core Committee',
    image: '/team-photos/kishan-kp.webp',
    linkedin: '',
  },
  {
    name: 'Aravind Manashetti',
    role: 'HEAD-FINANCE AND SPONSORSHIP',
    org: 'Core Committee',
    image: '/team-photos/arvind-manashetti.webp',
    linkedin: '',
  },
  {
    name: 'Mr. Syed Furqaan Ahmed',
    role: 'HEAD-RESEARCH & DEVELOPMENT',
    org: 'Core Committee',
    image: '/team-photos/syed-furqaan.webp',
    linkedin: 'https://www.linkedin.com/in/sydkwests/',
  },
]

export default function TeamPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="page-hero" id="team-hero">
        <div className="container">
          <div className="section-label" style={{ color: 'var(--teal)' }}>Leadership</div>
          <h1 className="page-hero-title">Meet Our Team</h1>
          <p className="page-hero-sub">
            The passionate leaders, dedicated committee members, and talented organizers
            driving LEADS Next Gen Centre and the Bharat Lead Summit vision forward.
          </p>
        </div>
      </section>

      {/* ── EXECUTIVE COUNCIL ── */}
      <section className="section" id="executive-council">
        <div className="container">
          <div className="section-label reveal">Leadership</div>
          <h2 className="section-heading reveal">Executive Council</h2>
          <p className="section-sub reveal">
            Guiding LEADS Next Gen Centre with strategic vision and institutional excellence.
          </p>
          <hr className="divider" />
          <div className="grid-4">
            {executiveCouncil.map((member, i) => (
              <TeamCard key={i} member={member} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── EXECUTIVE COMMITTEE ── */}
      <section className="section" id="organizing-committee" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <div className="section-label reveal">Management</div>
          <h2 className="section-heading reveal">Executive Committee</h2>
          <p className="section-sub reveal">
            Eight senior leaders driving strategic initiatives and operational excellence across all functions.
          </p>
          <hr className="divider" />
          <div className="grid-4">
            {organizingCommittee.map((member, i) => (
              <TeamCard key={i} member={member} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CORE COMMITTEE ── */}
      <section className="section" id="organizing-members">
        <div className="container">
          <div className="section-label reveal">Execution</div>
          <h2 className="section-heading reveal">Core Committee</h2>
          <p className="section-sub reveal">
            The dedicated team executing the summit vision with passion, precision, and purpose.
          </p>
          <hr className="divider" />
          <div className="grid-4">
            {organizers.map((member, i) => (
              <TeamCard key={i} member={member} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM STATS ── */}
      <section className="section" id="team-stats">
        <div className="container">
          <div className="section-label reveal">Collective Strength</div>
          <h2 className="section-heading reveal">Our Impact by Numbers</h2>
          <hr className="divider" />
          <div className="grid-4">
            <div className="card reveal" style={{ textAlign: 'center', padding: '32px 24px' }}>
              <div style={{ fontSize: '48px', fontWeight: 700, color: 'var(--primary)', marginBottom: '8px' }}>7</div>
              <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text2)', textTransform: 'uppercase', letterSpacing: '1px' }}>Executive Council Members</div>
            </div>
            <div className="card reveal" style={{ textAlign: 'center', padding: '32px 24px' }}>
              <div style={{ fontSize: '48px', fontWeight: 700, color: 'var(--teal)', marginBottom: '8px' }}>8</div>
              <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text2)', textTransform: 'uppercase', letterSpacing: '1px' }}>Senior Organizers</div>
            </div>
            <div className="card reveal" style={{ textAlign: 'center', padding: '32px 24px' }}>
              <div style={{ fontSize: '48px', fontWeight: 700, color: 'var(--gold)', marginBottom: '8px' }}>17</div>
              <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text2)', textTransform: 'uppercase', letterSpacing: '1px' }}>Committee Members</div>
            </div>
            <div className="card reveal" style={{ textAlign: 'center', padding: '32px 24px' }}>
              <div style={{ fontSize: '48px', fontWeight: 700, color: 'var(--navy)', marginBottom: '8px' }}>32+</div>
              <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text2)', textTransform: 'uppercase', letterSpacing: '1px' }}>Total Team Members</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
