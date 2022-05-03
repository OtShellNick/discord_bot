FROM node:16-alpine AS builder

WORKDIR /

COPY package.json ./

RUN npm install

COPY . .

CMD ["node", "./service.js"]
