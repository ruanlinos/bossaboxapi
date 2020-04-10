FROM node:alpine

WORKDIR /usr/src

COPY package.json /usr/src/
COPY .env /usr/src/
COPY . /usr/src/

RUN yarn install
RUN yarn global add nodemon

EXPOSE 3000
