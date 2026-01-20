import { NextResponse } from "next/server";
import { PostHog } from "posthog-node";

// chose to do middleware.js because every page request will be tracked server-side, bypassing ad blockers

export function middleware(request) {
  const posthog = new PostHog(process.env.POSTHOG_KEY, {
    host: process.env.POSTHOG_HOST,
  });

  // Track pageview
  posthog.capture({
    distinctId: request.ip || "anonymous",
    event: "$pageview",
    properties: {
      $current_url: request.url,
      path: request.nextUrl.pathname,
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
