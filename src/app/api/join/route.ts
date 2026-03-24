import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const application = await prisma.application.create({
      data: {
        fullName: body.fullName,
        email: body.email,
        phone: body.phone,
        year: body.year,
        faculty: body.faculty,
        interest: body.interest,
        whyJoin: body.whyJoin
      }
    })
    return NextResponse.json({ success: true, application })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ success: false, error: 'Failed to submit' }, { status: 500 })
  }
}
