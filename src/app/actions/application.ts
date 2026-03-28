'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function submitApplication(formData: FormData) {
  const fullName = formData.get('fullName') as string
  const email = formData.get('email') as string
  const phone = formData.get('phone') as string
  const year = formData.get('year') as string
  const faculty = formData.get('faculty') as string
  const interest = formData.get('interest') as string
  const whyJoin = formData.get('whyJoin') as string

  if (!fullName || !email || !year || !faculty) {
    throw new Error('Missing required fields')
  }

  try {
    await prisma.application.create({
      data: {
        fullName,
        email,
        phone,
        year,
        faculty,
        interest,
        whyJoin,
      },
    })
    
    revalidatePath('/admin/dashboard')
    return { success: true }
  } catch (error) {
    console.error('Application submission error:', error)
    return { success: false, error: 'Failed to submit' }
  }
}

export async function getApplications() {
  try {
    return await prisma.application.findMany({
      orderBy: { createdAt: 'desc' },
      take: 20
    })
  } catch (error) {
    console.error('Fetch applications error:', error)
    return []
  }
}
