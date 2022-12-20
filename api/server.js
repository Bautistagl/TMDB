// Configuración del server
const express = require("express");
const path = require("path");
const app = express();
const volleyball = require("volleyball");
const db = require("./config");
const models = require("./modelos");
const routes = require("./routes");
const cookieParser = require("cookie-parser");
const cors = require("cors");

// app.use(
//   express.static(
//     "/home/bautistagl/Escritorio/TMDB DE CERO/26-checkpoint-TMDB/public/index.html"
//   )
// );
app.use(volleyball);
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    // Si aún no tenes deployado tu front en origin va la url local.
    // Una vez que se deploye el front acá va esa url que te entrega.
    origin: "https://tmdb2.vercel.app/",
    methods: ["GET", "POST", "DELETE", "OPTIONS"],
    credentials: true,
  })
);
app.use("/api", routes);
app.use("/api", (req, res) => {
  res.sendStatus(404);
});
app.use((req, res) => {
  res.sendFile(
    "/home/bautistagl/Escritorio/TMDB DE CERO/26-checkpoint-TMDB/public/index.html"
  );
});
app.use((err, req, res, next) => {
  console.log("ERROR");
  console.log(err);
  res.status(500).send(err.message);
});
db.sync({ force: false })
  .then(function () {
    app.listen(5432, () =>
      console.log("Servidor escuchando en el puerto 3001")
    );
  })
  .catch(console.error);
