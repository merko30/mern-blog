const Sequelize = require("sequelize");

const sequelize = require("../config/database");

const User = sequelize.define(
  "User",
  {
    id: {
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: { min: 5 },
    },
    email: {
      type: Sequelize.TEXT,
      allowNull: false,
      validate: { isEmail: true },
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = User;
