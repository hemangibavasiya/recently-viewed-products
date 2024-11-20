FROM node:14
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm install -g @babel/cli
EXPOSE 3000
CMD ["npm", "start"]