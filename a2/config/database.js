const { Sequelize } = require("sequelize");

const { DATABASE, DATABASE_USER, DATABASE_PASSWORD, DATABASE_HOST } =
  process.env;

const sequelize = new Sequelize(DATABASE, DATABASE_USER, DATABASE_PASSWORD, {
  host: DATABASE_HOST,
  dialect: "postgres",
});

module.exports = sequelize;
