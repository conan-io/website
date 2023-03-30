FROM center-docker.jfrog.io/node:lts as builder

ADD . /app
WORKDIR /app

RUN npm install -g gulp-cli
RUN npm install && gulp && gulp imagesTask
RUN rm -fr /app/node_modules

FROM center-docker.jfrog.io/nginx:1.21.3

# Copy files
COPY  --from=builder /app/build /etc/nginx/html
