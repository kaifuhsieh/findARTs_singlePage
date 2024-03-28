FROM nginx

ENV PORT 8080
ENV HOST 0.0.0.0

COPY ./nginx.conf /etc/nginx/conf.d
COPY . /usr/share/nginx/html

EXPOSE 8080

# 啟動 Nginx 服務
CMD ["nginx", "-g", "daemon off;"]
