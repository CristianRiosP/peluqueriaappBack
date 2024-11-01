FROM node:20

WORKDIR /app

COPY package*.json ./

# Instalar las dependencias
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
