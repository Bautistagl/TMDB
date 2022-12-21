const { Model, DataTypes } = require("sequelize");

const db = require("../config/index");

class User extends Model {}
User.init(
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
    },
    salt: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: db,
    modelName: "user",
  }
);

module.exports = User;
