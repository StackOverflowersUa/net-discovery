FROM node:20
WORKDIR /frontend
COPY package*.json ./
RUN npm install
RUN npm install axios
RUN npm install react-router-dom
RUN npm install bootstrap@5.3.3
COPY . .
RUN npm run build
CMD ["npm", "start"]
