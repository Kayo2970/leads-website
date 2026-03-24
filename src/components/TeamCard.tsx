'use client'

import { useState } from 'react'
import Image from 'next/image'

interface TeamMember {
  name: string
  role: string
  org: string
  image: string
  linkedin?: string
}

export default function TeamCard({ member, index = 0 }: { member: TeamMember, index?: number }) {
  const [imgSrc, setImgSrc] = useState(member.image)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="card reveal"
      style={{
        borderTop: '3px solid var(--primary)',
        overflow: 'hidden',
        transition: 'opacity 1s cubic-bezier(0.165, 0.84, 0.44, 1), transform 1s cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow 0.3s ease',
        transitionDelay: `${(index % 4) * 0.15}s`,
        transform: isHovered ? 'translateY(-8px)' : 'none',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        style={{
          marginBottom: '16px',
          height: '240px',
          borderRadius: '8px',
          overflow: 'hidden',
          background: 'var(--surface)',
          position: 'relative',
        }}
      >
        <img
          src={imgSrc}
          alt={member.name}
          onError={() => {
            setImgSrc(`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='240'%3E%3Crect fill='%231565C0' width='240' height='240'/%3E%3Ctext x='50%25' y='50%25' fill='white' text-anchor='middle' dy='.3em' font-size='14'%3E${encodeURIComponent(member.name.split(' ')[0])}'s Photo%3C/text%3E%3C/svg%3E`)
          }}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'top center',
            transition: 'all 0.4s ease',
            transform: isHovered ? 'scale(1.08)' : 'scale(1)',
            filter: isHovered ? 'brightness(1.1)' : 'brightness(1)',
          }}
        />
      </div>
      <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text)', marginBottom: '4px', minHeight: '1.5em' }}>
        {member.name}
      </h4>
      <p
        style={{
          fontSize: '12px',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '1px',
          marginBottom: '6px',
          minHeight: '2em',
          transition: 'color 0.3s ease',
          color: isHovered ? 'var(--primary)' : 'var(--teal)',
        }}
      >
        {member.role}
      </p>
      <p style={{ fontSize: '13px', color: 'var(--text2)', marginBottom: '12px', minHeight: '1.5em' }}>
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
