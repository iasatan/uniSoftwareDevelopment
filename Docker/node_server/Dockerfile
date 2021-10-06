FROM node:16.9.1-alpine

RUN mkdir /node_server
WORKDIR /node_server

COPY node_server /node_server/

RUN npm install

EXPOSE 8080