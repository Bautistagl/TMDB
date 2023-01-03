const Sequelize = require("sequelize");
const db = new Sequelize("paginatmdb","postgres", "16981699", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

module.exports = db;
