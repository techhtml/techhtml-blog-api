FROM node:18-slim

WORKDIR /usr/src/app
COPY package.json ./

RUN npm install

COPY . ./

RUN npm run compile
RUN rm -rf ./src

CMD [ "npm", "start" ]