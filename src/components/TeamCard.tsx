'use client'

interface TeamMember {
  name: string
  role: string
  org: string
  image: string
  linkedin?: string
}

export default function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="card reveal" style={{ borderTop: '3px solid var(--primary)', overflow: 'hidden' }}>
      <div style={{ marginBottom: '16px', height: '240px', borderRadius: '8px', overflow: 'hidden', background: 'var(--surface)' }}>
        <img
          src={member.image}
          alt={member.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
      </div>
      <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text)', marginBottom: '4px' }}>
        {member.name}
      </h4>
      <p style={{ fontSize: '12px', fontWeight: 600, color: 'var(--teal)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '6px' }}>
        {member.role}
      </p>
      <p style={{ fontSize: '13px', color: 'var(--text2)', marginBottom: '12px' }}>
        {member.org}
      </p>
      {member.linkedin && (
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            fontSize: '12px',
            color: 'var(--primary)',
            textDecoration: 'none',
            fontWeight: 600,
            borderBottom: '2px solid transparent',
            transition: 'border-color 0.3s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--primary)')}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'transparent')}
        >
          View LinkedIn →
        </a>
      )}
    </div>
  )
}
