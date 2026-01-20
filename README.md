This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Analytics

This project uses PostHog for analytics.

**Problem**: Netlify no longer has a free analytics service and next.js no longer allows for external domains to use its vercel/analytics package on projects not hosted on vercel.

**Solution**: I choose posthog due to its generous free tier. I couldn't move the project to Next.js since guide.janetspellman is a subdomain of my astro portfolio's domain janetspellman.com.

**Problem**: Post-hog's client js would be blocked by adblockers like ublock.

**Solution**: Setup posthog in a middleware component & used posthog-node. Since its server rendered, theres no js code to block.
