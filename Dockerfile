# Base step with package files
FROM node:18.9.0-alpine
WORKDIR /srv

# Build step which runs tests + compiles TS
COPY --chown=0 package.json package-lock.json ./
RUN npm install
RUN npm run compile
RUN npm test

CMD [ "npm", "start" ]
