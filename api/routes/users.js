const express = require("express");
const { Users, FavsSerie } = require("../modelos");
const User = require("../modelos/users");
const { findAll } = require("../modelos/users");
const router = express.Router();
const { generateToken, validateToken } = require("../config/token");

const Favs = require("../modelos/favs");

router.delete("/borrar", (req, res) => {
  Favs.destroy({ where: { id: req.body.id } });
  res.send("se borro");
});
router.delete("/borrar/favs", (req, res) => {
  console.log(req.body.id, "LLEGO el delete");
  FavsSerie.destroy({ where: { id: req.body.id } });
  res.send("se borro");
});
router.get("/", (req, res) => {
  User.findAll().then((respuesta) => res.send(respuesta));
});
router.get("/favoritosSeries/:id", (req, res) => {
  FavsSerie.findAll({ where: { dueñoId: req.params.id } }).then((respuesta) => {
    res.send(respuesta);
  });
});
router.get("/favoritos/:id", (req, res) => {
  Favs.findAll({ where: { dueñoId: req.params.id } }).then((respuesta) => {
    res.send(respuesta);
  });
});
router.post("/", (req, res) => {
  User.create(req.body).then((resultado) => {
    res.status(201).send(resultado);
  });
});
router.get("/PaginaUsuarios", (req, res) => {
  const token = req.cookies.token;
  if (!token) return res.sendStatus(401);
  const payload = validateToken(token);

  if (!payload) return res.sendStatus(401);
  const password = payload.data;
  User.findOne({ where: { password } }).then((info) => {
    res.send(info);
  });
});
router.post("/favoritosSeries", function (req, res) {
  const token = req.cookies.token;
  const payload = validateToken(token);
  const password = payload.data;
  User.findOne({ where: { password } }).then((info) => {
    const user = info.dataValues.id;
    FavsSerie.create(req.body)
      .then((fav) => fav.setDueño(user))
      .then((fav) => res.send(fav));
  });
});
router.post("/favoritos", function (req, res) {
  const token = req.cookies.token;
  const payload = validateToken(token);
  const password = payload.data;
  User.findOne({ where: { password } }).then((info) => {
    const user = info.dataValues.id;
    Favs.create(req.body)
      .then((fav) => fav.setDueño(user))
      .then((fav) => res.send(fav));
  });
});
router.post("/login", function (req, res) {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ where: { email } }).then((info) => {
    if (!info) {
      return res.send(401);
    }
  });
});
router.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.sendStatus(204);
});
module.exports = router;
///la ruta que se hace desde axios post va directo  a localhost 3001 solo tengo que hacer coincidir con el post de routes
