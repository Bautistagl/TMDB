const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config");
const db = require("../config/index");
const User = require("./users");
class Favs extends Model {}
Favs.init(
  {
    foto: DataTypes.STRING,
    titulo: DataTypes.STRING,
    valoracion: DataTypes.STRING,
    fecha: DataTypes.STRING,
    adult: DataTypes.BOOLEAN,
    resumen: DataTypes.TEXT,
    idd: DataTypes.STRING,
  },
  {
    sequelize: db,
    modelName: "fav",
  }
);
Favs.belongsTo(User, { as: "dueño" });
module.exports = Favs;
