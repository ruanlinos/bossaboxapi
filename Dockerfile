FROM node:alpine

WORKDIR /usr/src

COPY package.json /usr/src/
COPY .env /usr/src/
COPY . /usr/src/

RUN npm install -g nodemon

EXPOSE 3000

CMD nodemon -L src/index.js