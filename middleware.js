import { NextResponse } from "next/server";
import { PostHog } from "posthog-node";

// chose to do middleware.js because every page request will be tracked server-side, bypassing ad blockers

export function middleware(request) {
  const posthog = new PostHog(process.env.POSTHOG_KEY, {
    host: process.env.POSTHOG_HOST,
  });

  // Problem: all views from different devices but the same IP were being shown as the same vistor

  // Solution: Generate unique ID from IP + user agent for better
  // different devices/browsers will be tracked as different users
  const distinctId = request.ip
    ? `${request.ip}-${request.headers.get("user-agent")?.slice(0, 50) || "unknown"}`
    : `visitor-${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;

  // Track pageview
  posthog.capture({
    distinctId: distinctId,
    event: "$pageview",
    properties: {
      $current_url: request.url,
      path: request.nextUrl.pathname,
      ip: request.ip,
      user_agent: request.headers.get("user-agent"),
    },
  });

  // Important: shutdown to flush events
  posthog.shutdown();

  return NextResponse.next();
}

// Run on all routes
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
