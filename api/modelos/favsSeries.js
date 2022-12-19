const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config");
const db = require("../config/index");
const User = require("./users");
class FavsSerie extends Model {}
FavsSerie.init(
  {
    foto: DataTypes.STRING,
    titulo: DataTypes.STRING,
    valoracion: DataTypes.STRING,
    fecha: DataTypes.STRING,
    resumen: DataTypes.TEXT,
    adult: DataTypes.BOOLEAN,
    idd: DataTypes.STRING,
  },
  {
    sequelize: db,
    modelName: "favsSerie",
  }
);
FavsSerie.belongsTo(User, { as: "dueño" });
module.exports = FavsSerie;
