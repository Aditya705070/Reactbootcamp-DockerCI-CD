# Stage 1 — build the Vite app
FROM node:18 AS builder
WORKDIR /app

# Copy package files for caching
COPY package.json package-lock.json* ./

# Install deps
RUN npm ci

# Copy source and build (Vite outputs to /app/dist)
COPY . .
RUN npm run build

# Stage 2 — serve with nginx
FROM nginx:stable-alpine
# remove default static html
RUN rm -rf /usr/share/nginx/html/*
# copy built files from builder (Vite -> dist)
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
