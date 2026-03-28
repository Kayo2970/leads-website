'use client';

import { useEffect, useCallback } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

const SESSION_COOKIE_NAME = 'leads_analytics_session';
const SESSION_EXPIRY_MS = 30 * 60 * 1000; // 30 minutes

function getSessionId() {
  if (typeof window === 'undefined') return '';
  
  const cookies = document.cookie.split(';');
  const sessionCookie = cookies.find(c => c.trim().startsWith(`${SESSION_COOKIE_NAME}=`));
  
  if (sessionCookie) {
    const sessionId = sessionCookie.split('=')[1];
    // Extend expiry
    const expiry = new Date(Date.now() + SESSION_EXPIRY_MS).toUTCString();
    document.cookie = `${SESSION_COOKIE_NAME}=${sessionId}; path=/; expires=${expiry}; sameSite=Lax`;
    return sessionId;
  }
  
  const newSessionId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  const expiry = new Date(Date.now() + SESSION_EXPIRY_MS).toUTCString();
  document.cookie = `${SESSION_COOKIE_NAME}=${newSessionId}; path=/; expires=${expiry}; sameSite=Lax`;
  return newSessionId;
}

export function useAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const trackEvent = useCallback(async (data: any) => {
    try {
      await fetch('/api/analytics/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          sessionId: getSessionId(),
          timestamp: new Date().toISOString(),
        }),
      });
    } catch (error) {
      console.error('Failed to send analytics:', error);
    }
  }, []);

  const trackFormSubmit = useCallback((formName: string) => {
    trackEvent({
      type: 'formsubmit',
      formName,
    });
  }, [trackEvent]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const utmSource = searchParams.get('utm_source');
    const utmMedium = searchParams.get('utm_medium');
    const utmCampaign = searchParams.get('utm_campaign');
    const referrer = document.referrer;

    const userAgent = navigator.userAgent;
    let device = 'desktop';
    if (/tablet|ipad/i.test(userAgent)) device = 'tablet';
    else if (/mobile|iphone|android/i.test(userAgent)) device = 'mobile';

    // Simple browser/OS detection
    let browser = 'unknown';
    if (userAgent.indexOf('Chrome') > -1) browser = 'Chrome';
    else if (userAgent.indexOf('Firefox') > -1) browser = 'Firefox';
    else if (userAgent.indexOf('Safari') > -1) browser = 'Safari';

    let os = 'unknown';
    if (userAgent.indexOf('Win') > -1) os = 'Windows';
    else if (userAgent.indexOf('Mac') > -1) os = 'MacOS';
    else if (userAgent.indexOf('Linux') > -1) os = 'Linux';
    else if (userAgent.indexOf('Android') > -1) os = 'Android';
    else if (userAgent.indexOf('iOS') > -1) os = 'iOS';

    trackEvent({
      type: 'pageview',
      page: pathname,
      referrer,
      utmSource,
      utmMedium,
      utmCampaign,
      device,
      browser,
      os,
    });
  }, [pathname, searchParams, trackEvent]);

  return { trackFormSubmit };
}
