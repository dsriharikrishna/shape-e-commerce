FROM node:20-alpine

WORKDIR /app

# Install dependencies
COPY package.json pnpm-lock.yaml* ./
RUN corepack enable pnpm && pnpm install

# Copy source
COPY . .

# Build TypeScript
RUN npx tsc

EXPOSE 5000

CMD ["node", "dist/index.js"]
