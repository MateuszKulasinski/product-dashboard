FROM node:20-alpine AS build

WORKDIR /app

COPY ./frontend/ .




FROM nginx:alpine

ARG NGINX_VERSION

LABEL version=$NGINX_VERSION

COPY --from=build /app /Produkty/frontend

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80