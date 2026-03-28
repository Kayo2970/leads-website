import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  // Protect the dashboard and any other /admin routes (except the login page itself)
  if (path.startsWith('/admin/dashboard')) {
    const adminSession = request.cookies.get('admin_session')?.value

    if (!adminSession) {
      // If no session cookie, redirect to /admin
      return NextResponse.redirect(new URL('/admin', request.url))
    }
  }

  return NextResponse.next()
}

// Config to match only relevant paths
export const config = {
  matcher: ['/admin/dashboard/:path*'],
}
