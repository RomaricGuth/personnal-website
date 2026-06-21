# Dockerfile
# Based on https://github.com/vercel/next.js/blob/canary/examples/with-docker/Dockerfile
# Adapted to bundle Playwright's Chromium for the /api/cv-pdf route.

# Pin to the Playwright version in package.json so the bundled browser matches.
FROM mcr.microsoft.com/playwright:v1.60.0-noble AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app

# Install dependencies based on the lockfile.
COPY package.json package-lock.json* ./
# postinstall runs `playwright install chromium`, populating /root/.cache/ms-playwright.
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

# Reuse pwuser, the non-root user the Playwright base image already ships.
COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next && chown pwuser:pwuser .next

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=pwuser:pwuser /app/.next/standalone ./
COPY --from=builder --chown=pwuser:pwuser /app/.next/static ./.next/static

# Chromium downloaded by Playwright at install time. The base image ships the
# system libraries; we only need the browser binary the app launches at runtime.
COPY --from=deps /root/.cache/ms-playwright /home/pwuser/.cache/ms-playwright
RUN chown -R pwuser:pwuser /home/pwuser/.cache
ENV PLAYWRIGHT_BROWSERS_PATH=/home/pwuser/.cache/ms-playwright

USER pwuser

EXPOSE 3000

ENV PORT=3000

# server.js is created by next build from the standalone output
# https://nextjs.org/docs/pages/api-reference/next-config-js/output
CMD HOSTNAME="0.0.0.0" node server.js
