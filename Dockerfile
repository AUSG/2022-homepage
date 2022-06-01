# Reference: https://github.com/yarnpkg/berry/discussions/3201#discussioncomment-1166192

FROM node:16-alpine AS base
ENV NODE_ENV production

RUN apk add --no-cache libc6-compat

FROM base AS builder

WORKDIR /app
COPY . .

RUN yarn rebuild && yarn build

FROM base AS runner

WORKDIR /app

COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/.yarn ./.yarn
COPY --from=builder /app/yarn.lock ./yarn.lock
COPY --from=builder /app/.yarnrc.yml ./.yarnrc.yml
COPY --from=builder /app/.pnp.cjs ./.pnp.cjs
COPY --from=builder /app/package.json ./package.json

RUN rm -rf /app/.yarn/unplugged && yarn rebuild

EXPOSE 3000
ENV NEXT_TELEMETRY_DISABLED 1

CMD ["yarn", "start"]