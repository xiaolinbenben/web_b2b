FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM node:20-alpine AS builder
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
ARG NEXT_PUBLIC_BASE_URL
ARG NEXT_PUBLIC_DJANGO_BASE_URL
ARG NEXT_PUBLIC_BASE_PATH
ARG NEXT_PUBLIC_IMAGE_DOMAINS
ARG NEXT_PUBLIC_TEMPLATE_ID
ENV NEXT_PUBLIC_BASE_URL=${NEXT_PUBLIC_BASE_URL}
ENV NEXT_PUBLIC_DJANGO_BASE_URL=${NEXT_PUBLIC_DJANGO_BASE_URL}
ENV NEXT_PUBLIC_BASE_PATH=${NEXT_PUBLIC_BASE_PATH}
ENV NEXT_PUBLIC_IMAGE_DOMAINS=${NEXT_PUBLIC_IMAGE_DOMAINS}
ENV NEXT_PUBLIC_TEMPLATE_ID=${NEXT_PUBLIC_TEMPLATE_ID}
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ARG NEXT_PUBLIC_BASE_URL
ARG NEXT_PUBLIC_DJANGO_BASE_URL
ARG NEXT_PUBLIC_BASE_PATH
ARG NEXT_PUBLIC_IMAGE_DOMAINS
ARG NEXT_PUBLIC_TEMPLATE_ID
ENV NEXT_PUBLIC_BASE_URL=${NEXT_PUBLIC_BASE_URL}
ENV NEXT_PUBLIC_DJANGO_BASE_URL=${NEXT_PUBLIC_DJANGO_BASE_URL}
ENV NEXT_PUBLIC_BASE_PATH=${NEXT_PUBLIC_BASE_PATH}
ENV NEXT_PUBLIC_IMAGE_DOMAINS=${NEXT_PUBLIC_IMAGE_DOMAINS}
ENV NEXT_PUBLIC_TEMPLATE_ID=${NEXT_PUBLIC_TEMPLATE_ID}
COPY package.json package-lock.json ./
RUN npm ci --omit=dev
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/next.config.mjs ./next.config.mjs
COPY --from=builder /app/tailwind.config.js ./tailwind.config.js
COPY --from=builder /app/postcss.config.mjs ./postcss.config.mjs
COPY --from=builder /app/tsconfig.json ./tsconfig.json
COPY --from=builder /app/components.json ./components.json
COPY --from=builder /app/jsconfig.json ./jsconfig.json
EXPOSE 80
CMD ["npm", "run", "start"]
