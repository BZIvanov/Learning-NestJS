# About this Demo

Here we will see how to work with authentication, sessions and redis.

You can register a new user. Then you can login with it and you can try fetching all posts, which require the user to be logged in.

## Docker containers

From the scripts in the package.json file run `npm run docker:start` to start the containers.

Then visit `http://localhost:5050` to access pg admin container from where you can create the database server and the database. You can find the credentials in `docker-compose.yml` under `app-database-admin` service. Check the docker demo in this repository for more info on how to do the setup with pgadmin.

## Nest app

After starting the container you can now also start the application in VS code terminal running the script `npm run start:dev` from package.json. In this demo the nest application is not in a docker container.

## Redis

Once all the containers are running you can register new user and login with it accessing the respective endpoints using Postman or any other tool.

Then in the terminal of the redis docker container type `redis-cli SCAN 0` and you will see something like _"0" "myapp:-Ai16ItPD3W0bdtpBt6cQ9cw2Lb_Fbhn"_ which is the session id for the logged in user.

If you logout the user and run again in the redis container terminal `redis-cli SCAN 0` you will now see something like _"0" (empty array)_
