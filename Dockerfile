from docker.io/nginx:alpine-slim

copy public /var/www/skovati.dev
copy nginx.conf /etc/nginx
