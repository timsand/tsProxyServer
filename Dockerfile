FROM node:10

# Install app dependencies
COPY package*.json ./


#Run npm install
#If building code for production
RUN npm ci --only=production

#Bundle app source
COPY . .

EXPOSE 8222


CMD [ "node", "index.js" ]