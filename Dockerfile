FROM node:16-alpine

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./
COPY . .

RUN yarn --frozen-lockfile --ignore-optional

CMD [ "yarn", "dev" ]
