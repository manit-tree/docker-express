FROM node:12.18.4-stretch-slim
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
COPY ./views/. /app/views
CMD ["npm", "start"]