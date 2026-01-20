import { NextResponse } from "next/server";
import { PostHog } from "posthog-node";

// see readme's analytics section for notes regarding analytics
export function middleware(request) {
  const response = NextResponse.next();

  // Anonymous/fallback identifier: truncate IP + partial UA
  const anonymousId = request.ip
    ? `${request.ip.split(".").slice(0, 3).join(".")}-` + // only first 3 octets
      `${request.headers.get("user-agent")?.slice(0, 20) || "unknown"}`
    : "unknown";

  const posthog = new PostHog(process.env.POSTHOG_KEY, {
    host: process.env.POSTHOG_HOST,
  });

  // Track pageview
  posthog.capture({
    distinctId: anonymousId,
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
