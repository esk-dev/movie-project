FROM node:19-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build

EXPOSE 80:3000

CMD ["node", "server.js"]
