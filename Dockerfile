FROM node:16-alpine AS deps

# If you need libc for any of your deps, uncomment this line:
# RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

FROM node:16-alpine AS builder

WORKDIR /app

COPY . .
COPY --from=deps /app/node_modules ./node_modules

RUN npm run build
RUN npm ci --production --ignore-scripts

FROM node:16-alpine AS runner

ENV NODE_ENV production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

WORKDIR /app

COPY --from=builder --chown=nextjs:nodejs /app/next.config.js  ./
COPY --from=builder --chown=nextjs:nodejs /app/package.json /app/package-lock.json ./
COPY --from=builder --chown=nextjs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next

USER nextjs

EXPOSE 3000

CMD [ "npm", "start" ]
