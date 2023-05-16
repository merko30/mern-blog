const Sequelize = require("sequelize");
const bcrypt = require("bcryptjs");

const sequelize = require("../config/database");

const Post = require("./post");

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

User.beforeCreate((user, options) => {
  const hashedPassword = bcrypt.hashSync(user.password);
  user.password = hashedPassword;
});

module.exports = User;
