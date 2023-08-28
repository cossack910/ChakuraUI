FROM node:18.16.0-alpine
WORKDIR /var/www/ChakuraUI/app
RUN npm install -g npm@latest && npm install -g vite@latest