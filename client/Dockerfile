FROM node:16

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json .

RUN npm install

EXPOSE 5173

CMD [ "npm","run","build" ]
