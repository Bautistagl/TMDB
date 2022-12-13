const { Model, DataTypes } = require("sequelize");

const db = require("../config/index");
const bcrypt = require("bcrypt");
class User extends Model {}
User.init(
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    salt: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "user",
  }
);
User.beforeCreate((user) => {
  const salt = bcrypt.genSaltSync();
  user.salt = salt;
  return bcrypt.hash(user.password, salt).then((hash) => {
    user.password = hash;
  });
});

module.exports = User;
