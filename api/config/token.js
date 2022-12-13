const jwt = require("jsonwebtoken");

const SECRET = "MILANESA";

const generateToken = function (data) {
  const token = jwt.sign({ data }, SECRET, { expiresIn: "2d" });
  return token;
};
const validateToken = (token) => {
  return jwt.verify(token, SECRET);
};

module.exports = { generateToken, validateToken };
