FROM node:14.17.0-alpine
WORKDIR /backend
ADD package*.json ./
COPY . .
# COPY . /backend/controllers 
# COPY . /backend/models 
# COPY . /backend/routes 
RUN npm install
ADD ./index.js ./
CMD [ "npm", "start"]