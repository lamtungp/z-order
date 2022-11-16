FROM node:16-alpine

WORKDIR /app

COPY . .
COPY package.json ./
COPY yarn.lock ./

RUN yarn --frozen-lockfile --ignore-optional
