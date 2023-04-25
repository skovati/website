from docker.io/node:alpine as build

workdir /build

copy src ./src
copy public ./public
copy tsconfig.json package.json astro.config.mjs .

run npm install

run npm run build

from docker.io/nginx:alpine-slim

copy --from=build /build/dist /var/www/skovati.dev
copy nginx.conf /etc/nginx
