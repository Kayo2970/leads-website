import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  const { searchParams } = new URL(req.url);
  const form = searchParams.get('form') || 'enquiry';

  try {
    if (form === 'enquiry') {
      await prisma.enquiry.update({
        where: { id: parseInt(id) },
        data: { deletedAt: new Date() },
      });
    } else {
      await prisma.application.update({
        where: { id: parseInt(id) },
        data: { deletedAt: new Date() },
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Delete submission error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
