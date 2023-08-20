FROM node:lts-alpine3.17

COPY package*.json ./

WORKDIR /Docker-lessons/scr/app

COPY . .

RUN npm install

EXPOSE 8080

# CMD ["npx", "prisma", "migrate", "dev"]

CMD [ "npm", "run", "dev" ]