import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const form = searchParams.get('form') || 'enquiry';
  const search = searchParams.get('search') || '';
  const page = parseInt(searchParams.get('page') || '1');
  const pageSize = 20;
  const skip = (page - 1) * pageSize;

  try {
    let data;
    let totalCount;

    if (form === 'enquiry') {
      const where = {
        deletedAt: null,
        OR: [
          { name: { contains: search } },
          { email: { contains: search } },
          { subject: { contains: search } },
          { message: { contains: search } },
        ],
      };
      [data, totalCount] = await Promise.all([
        prisma.enquiry.findMany({ where, skip, take: pageSize, orderBy: { createdAt: 'desc' } }),
        prisma.enquiry.count({ where }),
      ]);
    } else {
      const where = {
        deletedAt: null,
        OR: [
          { fullName: { contains: search } },
          { email: { contains: search } },
          { faculty: { contains: search } },
          { interest: { contains: search } },
          { whyJoin: { contains: search } },
        ],
      };
      [data, totalCount] = await Promise.all([
        prisma.application.findMany({ where, skip, take: pageSize, orderBy: { createdAt: 'desc' } }),
        prisma.application.count({ where }),
      ]);
    }

    return NextResponse.json({
      data,
      totalCount,
      totalPages: Math.ceil(totalCount / pageSize),
      currentPage: page,
    });
  } catch (error) {
    console.error('Fetch submissions error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
