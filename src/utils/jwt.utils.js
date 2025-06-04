require("dotenv").config();

const jwt = require("jsonwebtoken");

const generateToken = (body, extra = {}) => {
  const token = jwt.sign({ ...body, ...extra }, process.env.JWT_SECRET, {
    expiresIn: "1000h",
  });
  return token;
};

module.exports = { generateToken };
