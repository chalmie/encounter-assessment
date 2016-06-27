# EncAssess

Allows caregivers to document patient care.
* [Node.js](https://nodejs.org/en/)
* [Express](http://expressjs.com/)
* [Passport](http://passportjs.org)
* [Sequelize](http://sequelizejs.com)
* [Handlebars](http://handlebarsjs.com/)
* and [Nightwatch](http://nightwatchjs.org/)

## Requirements

* [Node.js](https://nodejs.org/en/)
* [Express](http://expressjs.com/)
* [Passport](http://passportjs.org)
* [Sequelize](http://sequelizejs.com)
* [Handlebars](http://handlebarsjs.com/)
* [Nightwatch](http://nightwatchjs.org/)

The app uses a PostgreSQL database via Sequelize ORM.

## Installation

Clone the repository and run `npm install` from the root folder.

## Configuration

In order to run the application, a database connection string has to be configured. The connection string is stored in `app/sequelize.js`.

When Sequelize is configured, you can run the setup script that creates the `users` table and also adds one default user (username: `user`, password: `user`). From the root directory run:

```
node setup.js
```


## Run the application

From the root folder of the project, you can run the application with:
```
node app.js
```
You can then access the application on `http://localhost:8080`.

Available pages:
* Log in on `http://localhost:8080`
* Sign up on `http://localhost:8080/signup`
* Dashboard [requires to be logged in] on `http://localhost:8080/dashboard`
* Log out on `http://localhost:8080/logout`

## License

???
