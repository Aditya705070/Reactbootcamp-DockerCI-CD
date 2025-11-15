# Stage 1 — build the React app
FROM node:18 AS builder
WORKDIR /app

# Copy package files first for caching
COPY package.json package-lock.json* ./

# Install deps and build
RUN npm ci
COPY . .
RUN npm run build

# Stage 2 — serve with nginx
FROM nginx:stable-alpine
# Remove default static html
RUN rm -rf /usr/share/nginx/html/*
# Copy built files from builder
COPY --from=builder /app/build /usr/share/nginx/html

# Optional: copy custom nginx config for SPA routing (see nginx.conf below)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
