from docker.io/node:alpine as build

run apk add --no-cache git

workdir /build

copy .git ./.git
copy src ./src
copy public ./public
copy tsconfig.json \
     package.json \
     pnpm-lock.yaml \
     astro.config.ts ./

run npm install -g pnpm
run pnpm install
run pnpm run build

from docker.io/fholzer/nginx-brotli:latest

copy --from=build /build/dist /var/www/skovati.dev
copy nginx.conf /etc/nginx
