FROM node:20.11-alpine AS build

WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build

FROM nginx:1.25.4-alpine AS deploy-static
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /build .
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
EXPOSE 443
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]