FROM node:20-alpine AS base

WORKDIR /app

# Install dependencies
COPY package.json pnpm-lock.yaml* ./
RUN corepack enable pnpm && pnpm install

# Copy source
COPY . .

# Build
RUN corepack enable pnpm && pnpm run build

EXPOSE 3000

CMD ["pnpm", "start"]
