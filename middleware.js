import { NextResponse } from "next/server";
import { PostHog } from "posthog-node";

// chose to do middleware.js because every page request will be tracked server-side, bypassing ad blockers

export function middleware(request) {
  const response = NextResponse.next();

  // Problem: all views from different devices but the same IP were being shown as the same vistor
  // Solution: Use cookies
  // that way even if users are on a public wifi, but using the same user agent (browser) they still get tracked as individual users

  let visitorId = request.cookies.get("website_guide_visitor_id")?.value;

  if (!visitorId) {
    visitorId = `visitor-${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;

    response.cookies.set("website_guide_visitor_id", visitorId, {
      maxAge: 60 * 60 * 24 * 365, // 1 year expiry
      httpOnly: true,
      sameSite: "lax",
    });
  }

  const posthog = new PostHog(process.env.POSTHOG_KEY, {
    host: process.env.POSTHOG_HOST,
  });

  // Track pageview
  posthog.capture({
    distinctId: visitorId,
    event: "$pageview",
    properties: {
      $current_url: request.url,
      path: request.nextUrl.pathname,
    },
  });

  // Important: shutdown to flush events
  posthog.shutdown();

  return response;
}

// Run on all routes
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
