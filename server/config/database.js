const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("mern", "merko", "password", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = sequelize;
