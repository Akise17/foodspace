require(`dotenv`).config();

module.exports = {
  "development": {
    "username": process.env.DB_USER_DEV,
    "password": process.env.DB_PASS_DEV,
    "database": process.env.DB_DEV,
    "host": process.env.DB_HOST_DEV,
    "port": 6543,
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": process.env.DB_USER_PRD,
    "password": process.env.DB_PASS_PRD,
    "database": process.env.DB_PRD,
    "host": process.env.DB_HOST_PRD,
    "dialect": "postgres"
  }
};
