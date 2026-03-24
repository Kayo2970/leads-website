import { PrismaClient } from '@prisma/client'
import Link from 'next/link'

const prisma = new PrismaClient()

export default async function Dashboard() {
  const apps = await prisma.application.findMany({ orderBy: { createdAt: 'desc' } })

  return (
    <div className="container" style={{ paddingTop: '120px', paddingBottom: '60px', minHeight: '100vh' }}>
      <h1>Dashboard - Form Responses</h1>
      {apps.length === 0 ? <p>No responses yet.</p> : (
        <div style={{ overflowX: 'auto', marginTop: '20px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', background: 'var(--surface)' }}>
            <thead>
              <tr style={{ background: 'var(--primary)', color: 'white' }}>
                <th style={{ padding: '12px', textAlign: 'left' }}>Name</th>
                <th style={{ padding: '12px', textAlign: 'left' }}>Email</th>
                <th style={{ padding: '12px', textAlign: 'left' }}>Program</th>
                <th style={{ padding: '12px', textAlign: 'left' }}>Faculty</th>
                <th style={{ padding: '12px', textAlign: 'left' }}>Date</th>
              </tr>
            </thead>
            <tbody>
              {apps.map(a => (
                <tr key={a.id} style={{ borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: '12px' }}>{a.fullName}</td>
                  <td style={{ padding: '12px' }}>{a.email}</td>
                  <td style={{ padding: '12px' }}>{a.interest}</td>
                  <td style={{ padding: '12px' }}>{a.faculty}</td>
                  <td style={{ padding: '12px' }}>{new Date(a.createdAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
