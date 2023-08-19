FROM node:18.17-alpine as builder

WORKDIR /app
COPY ./package*.json ./

FROM builder AS devenv
ENV NODE_ENV=development
RUN npm install --frozen-lockfile
COPY . .
CMD ["npm", "run", "start:dev"]


FROM builder AS prodenv
ENV NODE_ENV=production
RUN npm install --frozen-lockfile --production
COPY . .
# here we will install nest cli, because we are not going to have the dev dependencies on the production image
RUN npm install global @nestjs/cli
RUN npm run build
CMD ["npm", "run", "start:prod"]
