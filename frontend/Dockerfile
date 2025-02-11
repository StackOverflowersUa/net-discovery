FROM node:20
WORKDIR /frontend
COPY package*.json ./
RUN npm install
RUN npm install axios
RUN npm install react-router-dom
RUN npm install react-bootstrap
RUN npm install --save-dev @babel/plugin-proposal-private-property-in-object
COPY . .
RUN npm run build
CMD ["npm", "start"]
