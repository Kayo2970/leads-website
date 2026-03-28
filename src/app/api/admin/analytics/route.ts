import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const totalViews = await prisma.pageView.count();
    const uniqueVisitors = await prisma.pageView.groupBy({
      by: ['sessionId'],
      where: {
        createdAt: {
          gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
        },
      },
    });

    const totalSubmissions = (await prisma.enquiry.count({ where: { deletedAt: null } })) + 
                             (await prisma.application.count({ where: { deletedAt: null } }));

    const mostVisitedPage = await prisma.pageView.groupBy({
      by: ['page'],
      _count: { page: true },
      orderBy: { _count: { page: 'desc' } },
      take: 1,
    });

    // Chart data: Page views per day (last 30 days)
    const viewsPerDayRaw = await prisma.$queryRaw`
      SELECT date(createdAt) as date, count(*) as count 
      FROM PageView 
      WHERE createdAt >= date('now', '-30 days')
      GROUP BY date(createdAt)
      ORDER BY date(createdAt) ASC
    ` as any[];

    // Convert BigInt to Number for JSON serialization
    const viewsPerDay = (viewsPerDayRaw || []).map((item: any) => ({
      ...item,
      count: Number(item.count)
    }));

    // Chart data: Device breakdown
    const deviceBreakdown = await prisma.pageView.groupBy({
      by: ['device'],
      _count: { device: true },
    });

    // Chart data: Top 5 pages
    const topPages = await prisma.pageView.groupBy({
      by: ['page'],
      _count: { page: true },
      orderBy: { _count: { page: 'desc' } },
      take: 5,
    });

    // Chart data: Submissions by type
    const formStats = [
      { name: 'Enquiry', count: await prisma.enquiry.count({ where: { deletedAt: null } }) },
      { name: 'Registration', count: await prisma.application.count({ where: { deletedAt: null } }) },
    ];

    // Traffic sources
    const referrers = await prisma.pageView.groupBy({
      by: ['referrer'],
      _count: { referrer: true },
      orderBy: { _count: { referrer: 'desc' } },
    });

    return NextResponse.json({
      overview: {
        totalViews,
        uniqueVisitors: uniqueVisitors.length,
        totalSubmissions,
        mostVisitedPage: mostVisitedPage[0]?.page || 'N/A',
      },
      charts: {
        viewsPerDay,
        deviceBreakdown: deviceBreakdown.map((d: any) => ({ name: d.device || 'unknown', value: d._count.device })),
        topPages: topPages.map((p: any) => ({ name: p.page, count: p._count.page })),
        formStats,
      },
      referrers: referrers.map((r: any) => ({ domain: r.referrer || 'direct', count: r._count.referrer })),
    });
  } catch (error) {
    console.error('Admin stats error:', error);
    return NextResponse.json({ error: 'Internal Server Error', message: (error as Error).message }, { status: 500 });
  }
}
