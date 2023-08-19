# Multi-stage docker setup

## Running the application

Run the following script to start the containers: `docker-compose:dev-start`. It will start dev environment setup based on the docker-compose file.

Check below _DB admin_ section on how to create the database server. In this example we have in the `app.module.ts` file _synchronize: true_ which means the database tables will be automatically synced with our entities.

Now you should be able to requests the app endoints. For example to create or fetch the users endpoints.

## DB admin

After starting the containers, visit `http://localhost:5050` to access pg admin. Check the _docker-compose.yml_ file for the credentials to login.

Follow the below steps to setup database server, which is required to run the application:

1. Open PgAdmin in the web browser by visiting http://localhost:5050 (check the configuration in the docker-compose.yml file).
2. Log in using email and password in the docker-compose.yml file for the pgadmin service.
3. In the left-hand sidebar, right-click on Servers and select Register -> Server.
4. In the General tab of the Create - Server dialog give the server a name of your choice.
5. In the Connection tab, fill in the following details:
   - Host name/address: my-db (should match the service name in docker-compose.yml file)
   - Port: 5432
   - Database: postgres
   - Username: postgres
   - Password: postgres
6. Click Save to save the server configuration.
7. Now you expand Servers and check your database and tables.

## Additional notes

In case the changes you make on your local machine are applied on the files inside the containers (hot-reloading) probably you don't need the `watchOptions` part in `tsconfig.json` file. Otherwsie keep it like in this example, because this was needed for working with Windows. You can quickly test if hot-reloading is working for you, if for example you update in _app.service.ts_ the returned string and call the endpoint to see if it will return the updated string without needing to restart the containers.
