FROM busybox

WORKDIR /var/www/html
COPY . /var/www/html

EXPOSE 80
ENTRYPOINT [ "httpd", "-f" ]
