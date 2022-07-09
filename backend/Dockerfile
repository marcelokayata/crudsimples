FROM node:14.17.0-alpine
WORKDIR /backend
ADD package*.json ./
COPY . .
RUN npm install
ADD ./index.js ./
CMD [ "npm", "start"]