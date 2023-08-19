FROM node:18.17-alpine as builder

WORKDIR /app
COPY ./package*.json ./

### DEVELOPMENT ENVIRONMENT ###
FROM builder AS devenv
ENV NODE_ENV=development
RUN npm install --frozen-lockfile
COPY . .
CMD ["npm", "run", "start:dev"]

### TESTING ENVIRONMENTS ###
FROM devenv as testenv
ENV NODE_ENV=test
CMD ["npm", "run", "test"]

FROM testenv as testenv-cov
CMD ["npm", "run", "test:cov"]

FROM devenv as testenv-watch
# this is because watch command is watching git changes
ENV GIT_WORK_TREE=/app GIT_DIR=/app/.git
# we will install git on our system
RUN apk add git
CMD ["npm", "run", "test:watch"]

### PRODUCTION ENVIRONMENT ###
FROM builder AS prodenv
ENV NODE_ENV=production
RUN npm install --frozen-lockfile --production
COPY . .
# here we will install nest cli, because we are not going to have the dev dependencies on the production image
RUN npm install global @nestjs/cli
RUN npm run build
CMD ["npm", "run", "start:prod"]
