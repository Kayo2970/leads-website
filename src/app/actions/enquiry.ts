'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function submitEnquiry(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const subject = formData.get('subject') as string
  const message = formData.get('message') as string

  if (!name || !email || !subject || !message) {
    throw new Error('Missing required fields')
  }

  try {
    await prisma.enquiry.create({
      data: {
        name,
        email,
        subject,
        message,
      },
    })
    
    revalidatePath('/admin/dashboard')
    return { success: true }
  } catch (error) {
    console.error('Enquiry submission error:', error)
    return { success: false, error: 'Failed to submit' }
  }
}

export async function getEnquiries() {
  try {
    return await prisma.enquiry.findMany({
      orderBy: { createdAt: 'desc' },
      take: 20
    })
  } catch (error) {
    console.error('Fetch enquiries error:', error)
    return []
  }
}

export async function updateEnquiryStatus(id: number, status: string) {
  try {
    await prisma.enquiry.update({
      where: { id },
      data: { status }
    })
    revalidatePath('/admin/dashboard')
    return { success: true }
  } catch (error) {
    return { success: false }
  }
}
