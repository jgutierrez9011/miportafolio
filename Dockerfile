FROM node:20-alpine AS build

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm@10.34.0

COPY . .
RUN pnpm install --frozen-lockfile && pnpm build

FROM node:20-alpine AS runtime

WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000

COPY --from=build /app/dist ./dist
COPY --from=build /app/server.mjs ./server.mjs

EXPOSE 3000
CMD ["node", "server.mjs"]
