'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
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
    <motion.div
      className="card reveal"
      style={{
        padding: '0',
        overflow: 'hidden',
        borderRadius: '16px',
        background: 'var(--card)',
        position: 'relative',
        cursor: 'pointer',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <div
        style={{
          paddingTop: '125%', // 4:5 Professional Vertical Aspect Ratio
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <img
          src={imgSrc}
          alt={member.name}
          onError={() => {
            setImgSrc(`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='500'%3E%3Crect fill='%231565C0' width='400' height='500'/%3E%3Ctext x='50%25' y='50%25' fill='white' text-anchor='middle' dy='.3em' font-size='24'%3E${encodeURIComponent(member.name.split(' ')[0])}'s Photo%3C/text%3E%3C/svg%3E`)
          }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
            transform: isHovered ? 'scale(1.1)' : 'scale(1)',
          }}
        />

        {/* ── AGENZ-INSPIRED SLIDE UP OVERLAY ── */}
        <motion.div
          initial={{ opacity: 0, y: '100%' }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : '100%' }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(13, 71, 161, 0.95), rgba(13, 71, 161, 0.3))',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: '24px',
            color: 'white',
            backdropFilter: 'blur(4px)',
          }}
        >
          <motion.h4 
            animate={{ y: isHovered ? 0 : 20 }}
            transition={{ delay: 0.1 }}
            style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 4px 0' }}
          >
            {member.name}
          </motion.h4>
          <motion.p 
            animate={{ y: isHovered ? 0 : 20 }}
            transition={{ delay: 0.15 }}
            style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.9, margin: '0 0 8px 0' }}
          >
            {member.role}
          </motion.p>
          <motion.p 
            animate={{ y: isHovered ? 0 : 20 }}
            transition={{ delay: 0.2 }}
            style={{ fontSize: '13px', opacity: 0.8, marginBottom: '16px' }}
          >
            {member.org}
          </motion.p>
          
          {member.linkedin && (
            <motion.a
              animate={{ opacity: isHovered ? 1 : 0 }}
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                fontSize: '13px',
                color: 'var(--teal)',
                textDecoration: 'none',
                fontWeight: 700,
                border: '1px solid var(--teal)',
                padding: '6px 14px',
                borderRadius: '20px',
                width: 'fit-content'
              }}
              whileHover={{ background: 'var(--teal)', color: 'white' }}
            >
              LinkedIn Profile →
            </motion.a>
          )}
        </motion.div>
      </div>
    </motion.div>
  )
}
