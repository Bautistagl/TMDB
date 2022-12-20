const express = require("express");

const usersRouter = require("./users");
const cors = require("cors");
const router = express.Router();

router.use("/users", cors(), usersRouter);

module.exports = router;
