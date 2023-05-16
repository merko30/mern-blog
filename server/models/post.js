const Sequelize = require("sequelize");

const sequelize = require("../config/database");

const User = require("./user");

const Post = sequelize.define(
  "Post",
  {
    id: {
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: { min: 10 },
    },
    body: {
      type: Sequelize.TEXT,
      allowNull: false,
      validate: { min: 150 },
    },
    image: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    slug: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    // Other model options go here
    timestamps: true,
  }
);

Post.hasOne(User, {
  as: "author",
});
User.belongsTo(Post);

module.exports = Post;
