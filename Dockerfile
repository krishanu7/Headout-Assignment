FROM node:14
WORKDIR /app
COPY . /app
RUN npm install
EXPOSE 8080
RUN mkdir -p /tmp/data \
    && for i in $(seq 1 30); do openssl rand -base64 1000000 > /tmp/data/$i.txt; done
CMD ["node", "app.js"]
