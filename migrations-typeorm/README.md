# About this Demo

Here we will see how to work with TypeORM migrations and seeding data.

Note that it is not required to keep both features if you need just one of them. If you don't need migrations or data seeding you can just remove the respective folder in folder `src/database-setups` and the respective script in package.json file.

# Migrations

## Create a migration

_Note: Make sure you created the database. In this example it is **mytestdb**_

Run the below command to create a migration:

```bash
npm run migration:generate -- src/database-setups/migration-setup/migrations/FirstMigration
```

where:

- `migration:generate` - another script in the package.js file
- `src/database-setups/migration-setup/migrations/FirstMigration` - the path where the migration will be created. _FirstMigration_ is the unique migration name provided by us so we can identify what the migration is about

## Running a migration

Simply creating a migration is not enough, we also have to run it to actually apply the changes to the database.

```bash
npm run migration:run
```

## Running another migration

Let's say we added one more column to the users entity (city). Let's create another migration by running the below code:

```bash
npm run migration:generate -- src/database-setups/migration-setup/migrations/AddedCityColumn
```

Let's also push the changes to the database table so we can get our new column:

```bash
npm run migration:run
```

## Reverting a migration

Let's create a migration for a column we will not need in the future.

```bash
npm run migration:generate -- src/database-setups/migration-setup/migrations/AddedBadColumnToRevert
```

Let's push the changes to the database:

```bash
npm run migration:run
```

So now we will revert the changes from the last migration, because we don't want the last added column.

```bash
npm run migration:revert
```

Reverting migration will automatically apply the changes to the database without us explicitly running it.

We will still have the migration file in our migrations folder even after the revert, but migration table in the database will drop the last record so in case you want to completely remove it also remove the migrations file. Inspect the migrations table in the database for more info.

With the above said it means, that if we want to revert 2 changes with the 2 added columns we have to run the revert command twice.

## Documentation link

[Here](https://docs.nestjs.com/techniques/database) is a link to the official documentation.

# Data seeding

For the data seeding we are using external npm package called `typeorm-extension`.

After running the migrations to make sure we created the needed tables and their columns, we can now seed some test data. In the terminal run the script.

```bash
npm run seed
```

With the current setup it will seed some users and also comments with user creator foreign keys.

