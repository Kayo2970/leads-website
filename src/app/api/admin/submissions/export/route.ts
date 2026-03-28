import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const form = searchParams.get('form') || 'enquiry';

  try {
    let data;
    if (form === 'enquiry') {
      data = await prisma.enquiry.findMany({ where: { deletedAt: null }, orderBy: { createdAt: 'desc' } });
    } else {
      data = await prisma.application.findMany({ where: { deletedAt: null }, orderBy: { createdAt: 'desc' } });
    }

    if (!data || data.length === 0) {
      return new NextResponse('No data to export', { status: 404 });
    }

    const headers = Object.keys(data[0]).join(',');
    const rows = data.map(item => Object.values(item).map(val => `"${val}"`).join(','));
    const csvContent = [headers, ...rows].join('\n');

    return new NextResponse(csvContent, {
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': `attachment; filename="${form}-submissions.csv"`,
      },
    });
  } catch (error) {
    console.error('Export CSV error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
