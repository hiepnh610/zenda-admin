FROM node:14.7.0 as builder

WORKDIR /usr/src/app

COPY . .

RUN npm i && npm run build

FROM abevoelker/docker-nginx-alpine-brotli

RUN rm -rf /usr/share/nginx/html/*

# Compress
RUN echo $'gzip on; \n\
  gzip_proxied any; \n\
  gzip_types text/plain text/xml text/css application/x-javascript; \n\
  gzip_vary on; \n\
  gzip_disable "MSIE [1-6]\.(?!.*SV1)";' > /etc/nginx/conf.d/gzip.conf

# Config for SAP app
RUN echo $'server { \n\
  listen       80; \n\
  server_name  localhost; \n\
  location / { \n\
  root   /usr/share/nginx/html; \n\
  index  index.html index.htm; \n\
  try_files $uri $uri/ /index.html; \n\
  } \n\
  error_page   500 502 503 504  /50x.html; \n\
  location = /50x.html { \n\
  root   /usr/share/nginx/html; \n\
  } \n\
  }' > /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/

COPY --from=builder /usr/src/app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
