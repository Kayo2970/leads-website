export async function trackPageView(page: string) {
  try {
    await prisma.pageView.create({
      data: {
        page,
        sessionId: 'server-action', // Default for server-side tracking
      },
    })
  } catch (error) {
    console.error('Analytics tracking error:', error)
  }
}

export async function getAnalyticsData() {
  try {
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    const totalViews = await prisma.pageView.count()
    const todayViews = await prisma.pageView.count({
      where: {
        createdAt: {
          gte: today,
        },
      },
    })
    
    // ... remaining logic ...

    // Get hourly views for today
    const hourlyViews = []
    for (let i = 0; i < 24; i++) {
      const startHour = new Date(today)
      startHour.setHours(i, 0, 0, 0)
      const endHour = new Date(today)
      endHour.setHours(i + 1, 0, 0, 0)

      const count = await prisma.pageView.count({
        where: {
          timestamp: {
            gte: startHour,
            lt: endHour,
          },
        },
      })
      hourlyViews.push({ hour: `${i}:00`, count })
    }

    return { totalViews, todayViews, hourlyViews }
  } catch (error) {
    console.error('Fetch analytics error:', error)
    return { totalViews: 0, todayViews: 0, hourlyViews: [] }
  }
}
