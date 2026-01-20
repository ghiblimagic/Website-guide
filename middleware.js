import { NextResponse } from "next/server";
import { PostHog } from "posthog-node";
import crypto from "crypto";

// see readme's analytics section for notes regarding analytics
export function middleware(request) {
  const response = NextResponse.next();

  // Anonymous/fallback identifier: truncate IP + partial UA
  const truncatedIp = request.ip
    ? request.ip.split(".").slice(0, 3).join(".")
    : "unknown";
  const partialUA =
    request.headers.get("user-agent")?.slice(0, 20) || "unknown";

  // Hash them together for privacy
  const anonymousId = crypto
    .createHash("sha256")
    .update(`${truncatedIp}-${partialUA}`)
    .digest("hex");

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
