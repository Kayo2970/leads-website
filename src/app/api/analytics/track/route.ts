import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { 
      type, 
      sessionId, 
      page, 
      referrer, 
      utmSource, 
      utmMedium, 
      utmCampaign, 
      device, 
      browser, 
      os, 
      country, 
      formName 
    } = body;

    if (type === 'pageview') {
      await prisma.pageView.create({
        data: {
          sessionId,
          page,
          referrer,
          utmSource,
          utmMedium,
          utmCampaign,
          device,
          browser,
          os,
          country,
        },
      });
    } else if (type === 'formsubmit') {
      await prisma.formEvent.create({
        data: {
          sessionId,
          formName,
        },
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Analytics tracking error:', error);
    return NextResponse.json({ success: false, error: 'Failed to track event' }, { status: 500 });
  }
}
