# ---- Build stage ----
FROM node:22-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# ---- Run stage ----
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

# Hacer que nginx escuche en 5000 (puerto esperado por EB)
RUN sed -i 's/listen       80;/listen       5000;/' /etc/nginx/conf.d/default.conf

EXPOSE 5000

CMD ["nginx", "-g", "daemon off;"]