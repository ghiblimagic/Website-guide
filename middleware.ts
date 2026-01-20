import { NextRequest, NextResponse } from "next/server";
import { PostHog } from "posthog-node";
import crypto from "crypto";

// see readme's analytics section for notes regarding analytics

interface NextRequestWithIP extends NextRequest {
  ip?: string;
  //optional because some environments may not provide it (ex: brave browser)
}

export function middleware(request: NextRequestWithIP) {
  const response = NextResponse.next();
  const posthogKey = process.env.POSTHOG_KEY;
  if (!posthogKey) throw new Error("POSTHOG_KEY is not set");

  // Anonymous/fallback identifier: truncate IP + partial UA
  const truncatedIp = request.ip
    ? request.ip.split(".").slice(0, 3).join(".")
    : "unknown";
  const partialUA =
    request.headers.get("user-agent")?.slice(0, 20) || "unknown";

  // Hash together for privacy
  const anonymousId = crypto
    .createHash("sha256")
    .update(`${truncatedIp}-${partialUA}`)
    .digest("hex");

  const posthog = new PostHog(posthogKey, {
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
