FROM node:14-alpine

COPY ["package.json", "yarn.lock", "/usr/src/service/server/"]

WORKDIR /usr/src/service/server

RUN yarn install --force

COPY [".", "/usr/src/service/server/"]

CMD ["yarn", "start"]