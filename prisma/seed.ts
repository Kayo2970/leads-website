import path from 'path'
import { PrismaClient } from '@prisma/client'
import { PrismaLibSql } from '@prisma/adapter-libsql'
import { createClient } from '@libsql/client'

const libsql = createClient({
  url: `file:${path.resolve('dev.db').replace(/\\/g, '/')}`,
})
const adapter = new PrismaLibSql(libsql)
const prisma = new PrismaClient({ adapter })

async function main() {
  console.log('Seeding demo data...')

  // Seed Page Views (last 30 days)
  for (let i = 0; i < 30; i++) {
    const date = new Date()
    date.setDate(date.getDate() - i)
    
    // Create 50-150 views per day
    const viewCount = Math.floor(Math.random() * 100) + 50
    for (let j = 0; j < viewCount; j++) {
      await prisma.pageView.create({
        data: {
          sessionId: `demo-session-${i}-${j}`,
          page: ['/', '/about', '/events', '/join', '/contact'][Math.floor(Math.random() * 5)],
          device: ['mobile', 'desktop', 'tablet'][Math.floor(Math.random() * 3)],
          browser: ['Chrome', 'Firefox', 'Safari'][Math.floor(Math.random() * 3)],
          os: ['Windows', 'MacOS', 'iOS', 'Android'][Math.floor(Math.random() * 4)],
          createdAt: date
        }
      })
    }
  }

  // Seed some Enquiries
  await prisma.enquiry.createMany({
    data: [
      { name: 'Arjun Mehta', email: 'arjun@example.com', subject: 'bls', message: 'Interested in partnering for BLS 2026.', createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000) },
      { name: 'Priya Singh', email: 'priya@msruas.ac.in', subject: 'membership', message: 'How do I apply for the Core Executive role?', createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000) },
      { name: 'Rohan Shah', email: 'rohan@example.com', subject: 'general', message: 'Great website! Who designed this?', createdAt: new Date() },
    ]
  })

  // Seed some Applications
  await prisma.application.createMany({
    data: [
      { fullName: 'Ananya Rao', email: 'ananya@msruas.ac.in', year: 'Year 1', faculty: 'FET', interest: 'Management', whyJoin: 'I want to develop my leadership skills and contribute to the community.' },
      { fullName: 'Siddharth V', email: 'sid@msruas.ac.in', year: 'Year 2', faculty: 'FAD', interest: 'Creative', whyJoin: 'Passionate about design and social media strategy.' },
    ]
  })

  console.log('Seed completed successfully!')
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
