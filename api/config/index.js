const Sequelize = require("sequelize");
const db = new Sequelize(
  "paginatmdb",
  "tmdb",
  "mmqJgIVCEMZdpwXzRD9VTg3fGCbYNEnG",
  {
    host: "dpg-cegervirrk0fhn73d380-a",
    dialect: "postgres",
    logging: false,
  }
);

module.exports = db;
