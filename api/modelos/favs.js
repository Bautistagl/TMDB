const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config");
const db = require("../config/index");
const User = require("./users");
class Favs extends Model {}
Favs.init(
  {
    fotoPelicula: DataTypes.STRING,
    tituloPelicula: DataTypes.STRING,
    idPelicula: DataTypes.STRING,
  },
  {
    sequelize: db,
    modelName: "fav",
  }
);
Favs.belongsTo(User, { as: "dueño" });
module.exports = Favs;
