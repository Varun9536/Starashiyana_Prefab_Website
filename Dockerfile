# syntax=docker/dockerfile:1

# ---- Stage 1: install dependencies -----------------------------------------
FROM node:24-alpine AS deps
# Needed for some native npm deps (e.g. sharp) on Alpine/musl.
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

# ---- Stage 2: build the app -------------------------------------------------
FROM node:24-alpine AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
# Baked into the client bundle at build time — override for staging builds
# with `docker build --build-arg NEXT_PUBLIC_SITE_URL=https://staging.example.com`.
ARG NEXT_PUBLIC_SITE_URL=https://starashiyanaprefab.com
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL

RUN npm run build

# ---- Stage 3: minimal production runtime -----------------------------------
FROM node:24-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nextjs

# `output: "standalone"` (next.config.ts) traces only the files actually
# needed at runtime, so no `node_modules` install is required here at all.
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
# No public/ directory exists in this project (all images are statically
# imported from src/assets and optimized at build time) — add a line here
# if one is introduced later: COPY --from=builder --chown=nextjs:nodejs /app/public ./public

USER nextjs
EXPOSE 3000

CMD ["node", "server.js"]
