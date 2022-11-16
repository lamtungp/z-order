FROM node:16-alpine

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./
COPY . .

RUN yarn --frozen-lockfile --ignore-optional

EXPOSE 3000

CMD [ "yarn", "start" ]