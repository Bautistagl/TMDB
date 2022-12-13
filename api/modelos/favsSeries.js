const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config");
const db = require("../config/index");
const User = require("./users");
class FavsSerie extends Model {}
FavsSerie.init(
  {
    fotoSerie: DataTypes.STRING,
    tituloSerie: DataTypes.STRING,
    idSerie: DataTypes.STRING,
  },
  {
    sequelize: db,
    modelName: "favsSerie",
  }
);
FavsSerie.belongsTo(User, { as: "dueño" });
module.exports = FavsSerie;
